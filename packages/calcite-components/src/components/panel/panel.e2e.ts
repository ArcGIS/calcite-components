import { newE2EPage } from "@stencil/core/testing";
import { html } from "../../../support/formatting";
import {
  accessible,
  defaults,
  delegatesToFloatingUiOwningComponent,
  disabled,
  focusable,
  hidden,
  reflects,
  renders,
  slots,
  t9n,
} from "../../tests/commonTests";
import { GlobalTestProps } from "../../tests/utils";
import { themed } from "../../tests/commonTests/themed";
import { CSS, SLOTS } from "./resources";

type TestWindow = GlobalTestProps<{
  beforeClose: () => Promise<void>;
}>;

const panelTemplate = (scrollable = false) =>
  html`<div style="height: 200px; display: flex">
    <calcite-panel>
      <div>
        ${scrollable ? '<p style="height: 400px">Hello world!</p>' : ""}
        <p>Hello world!</p>
      </div>
    </calcite-panel>
  </div>`;

describe("calcite-panel", () => {
  describe("renders", () => {
    renders("calcite-panel", { display: "flex" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-panel");
  });

  describe("defaults", () => {
    defaults("calcite-panel", [
      {
        propertyName: "beforeClose",
        defaultValue: undefined,
      },
      {
        propertyName: "widthScale",
        defaultValue: undefined,
      },
      {
        propertyName: "headingLevel",
        defaultValue: undefined,
      },
      {
        propertyName: "collapsible",
        defaultValue: false,
      },
      {
        propertyName: "collapseDirection",
        defaultValue: "down",
      },
      {
        propertyName: "collapsed",
        defaultValue: false,
      },
      {
        propertyName: "overlayPositioning",
        defaultValue: "absolute",
      },
      {
        propertyName: "scale",
        defaultValue: "m",
      },
    ]);
  });

  describe("reflects", () => {
    reflects("calcite-panel", [
      {
        propertyName: "headingLevel",
        value: 2,
      },
      {
        propertyName: "collapsible",
        value: true,
      },
      {
        propertyName: "collapsed",
        value: true,
      },
      {
        propertyName: "overlayPositioning",
        value: "fixed",
      },
    ]);
  });

  describe("slots", () => {
    slots("calcite-panel", SLOTS);
  });

  describe("disabled", () => {
    disabled(`<calcite-panel closable>scrolling content</calcite-panel>`);
  });

  describe("translation support", () => {
    t9n("calcite-panel");
  });

  describe("delegates to floating-ui-owner component", () => {
    delegatesToFloatingUiOwningComponent(
      html`<calcite-panel>
        <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
      </calcite-panel>`,
      "calcite-action-menu",
    );
  });

  it("honors closed prop", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel closable>test</calcite-panel>");

    const element = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.container}`);

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(true);

    element.setProperty("closed", true);

    await page.waitForChanges();

    expect(await element.getProperty("closed")).toBe(true);

    expect(await container.isVisible()).toBe(false);
  });

  it("should handle rejected 'beforeClose' promise'", async () => {
    const page = await newE2EPage();

    const mockCallBack = jest.fn().mockReturnValue(() => Promise.reject());
    await page.exposeFunction("beforeClose", mockCallBack);

    await page.setContent(`<calcite-panel closable></calcite-panel>`);

    await page.$eval(
      "calcite-panel",
      (el: HTMLCalcitePanelElement) => (el.beforeClose = (window as TestWindow).beforeClose),
    );
    await page.waitForChanges();

    const panel = await page.find("calcite-panel");
    expect(await panel.getProperty("closed")).toBe(false);
    panel.setProperty("closed", true);
    await page.waitForChanges();

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  it("should remain open with rejected 'beforeClose' promise'", async () => {
    const page = await newE2EPage();

    await page.exposeFunction("beforeClose", () => Promise.reject());
    await page.setContent(`<calcite-panel closable></calcite-panel>`);

    await page.$eval(
      "calcite-panel",
      (el: HTMLCalcitePanelElement) => (el.beforeClose = (window as TestWindow).beforeClose),
    );

    const panel = await page.find("calcite-panel");
    panel.setProperty("closed", true);
    await page.waitForChanges();

    expect(await panel.getProperty("closed")).toBe(false);
    expect(panel.getAttribute("closed")).toBe(null); // Makes sure attribute is added back
  });

  it("honors collapsed & collapsible properties", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel collapsed>test</calcite-panel>");

    const element = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.contentWrapper}`);
    const collapseButtonSelector = `calcite-panel >>> [data-test="collapse"]`;
    expect(await page.find(collapseButtonSelector)).toBeNull();

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(true);

    element.setProperty("collapsible", true);

    await page.waitForChanges();

    expect(await element.getProperty("collapsible")).toBe(true);
    expect(await page.find(collapseButtonSelector)).not.toBeNull();
    expect(await container.isVisible()).toBe(false);
  });

  it("close event should fire when closed", async () => {
    const page = await newE2EPage({ html: "<calcite-panel closable>test</calcite-panel>" });

    const calcitePanelClose = await page.spyOnEvent("calcitePanelClose", "window");

    const closeButton = await page.find("calcite-panel >>> calcite-action[data-test=close]");

    await closeButton.click();

    expect(calcitePanelClose).toHaveReceivedEventTimes(1);
  });

  it("toggle event should fire when collapsed", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-panel collapsible>Hello World!</calcite-panel>");
    await page.waitForChanges();

    const calcitePanelToggle = await page.spyOnEvent("calcitePanelToggle", "window");

    const toggleButton = await page.find("calcite-panel >>> [data-test=collapse]");

    await toggleButton.click();

    expect(calcitePanelToggle).toHaveReceivedEventTimes(1);
  });

  it("should set embedded on slotted alerts", async () => {
    const page = await newE2EPage();
    await page.setContent(
      html`<calcite-panel>
        Hello World!
        <calcite-alert slot="alerts" open label="this is a default alert">
          <div slot="title">Hello there!</div>
          <div slot="message">This is an alert with a general piece of information. Cool, innit?</div>
        </calcite-alert>
      </calcite-panel>`,
    );
    await page.waitForChanges();

    const alert = await page.find("calcite-alert");

    expect(await alert.getProperty("embedded")).toBe(true);
  });

  describe("accessible", () => {
    accessible(html`
      <calcite-panel>
        <calcite-action-bar slot="${SLOTS.actionBar}">
          <calcite-action-group>
            <calcite-action text="Add" icon="plus"> </calcite-action>
            <calcite-action text="Save" icon="save"> </calcite-action>
            <calcite-action text="Layers" icon="layers"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <div slot="${SLOTS.headerActionsStart}">test start</div>
        <div slot="${SLOTS.headerContent}">test content</div>
        <div slot="${SLOTS.headerActionsEnd}">test end</div>
        <p>Content</p>
        <calcite-button slot="${SLOTS.footerActions}">test button 1</calcite-button>
        <calcite-button slot="${SLOTS.footerActions}">test button 2</calcite-button>
      </calcite-panel>
    `);

    accessible(html`
      <calcite-panel collapsible closable>
        <calcite-action-bar slot="${SLOTS.actionBar}">
          <calcite-action-group>
            <calcite-action text="Add" icon="plus"> </calcite-action>
            <calcite-action text="Save" icon="save"> </calcite-action>
            <calcite-action text="Layers" icon="layers"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <div slot="${SLOTS.headerActionsStart}">test start</div>
        <div slot="${SLOTS.headerContent}">test content</div>
        <div slot="${SLOTS.headerActionsEnd}">test end</div>
        <p>Content</p>
        <calcite-button slot="${SLOTS.footerActions}">test button 1</calcite-button>
        <calcite-button slot="${SLOTS.footerActions}">test button 2</calcite-button>
      </calcite-panel>
    `);
  });

  describe("should focus on close button", () => {
    focusable(`<calcite-panel closable>test</calcite-panel>`, {
      shadowFocusTargetSelector: "calcite-action",
    });
  });

  describe("should focus on container", () => {
    focusable(`<calcite-panel>test</calcite-panel>`, {
      shadowFocusTargetSelector: "article",
    });
  });

  it("honors calcitePanelScroll event", async () => {
    const page = await newE2EPage({
      html: "<calcite-panel>test</calcite-panel>",
    });

    const scrollSpy = await page.spyOnEvent("calcitePanelScroll");

    await page.evaluate((contentContainerSelector) => {
      const contentContainer = document
        .querySelector("calcite-panel")
        .shadowRoot.querySelector(contentContainerSelector);

      contentContainer.dispatchEvent(new CustomEvent("scroll"));
    }, `.${CSS.contentWrapper}`);

    await page.waitForChanges();

    expect(scrollSpy).toHaveReceivedEventTimes(1);
  });

  it("should have default heading", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-panel heading="test heading"></calcite-panel>');

    const element = await page.find(`calcite-panel >>> .${CSS.heading}`);

    expect(element).toEqualText("test heading");
  });

  it("should have default description", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-panel description="test description"></calcite-panel>');

    const element = await page.find(`calcite-panel >>> .${CSS.description}`);

    expect(element).toEqualText("test description");
  });

  it("should not render a header if there are no actions or content", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel>test</calcite-panel>");

    const header = await page.find(`calcite-panel >>> .${CSS.header}`);

    expect(await header.isVisible()).toBe(false);
  });

  it("menuOpen should show/hide when toggled", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-panel>
        <calcite-action slot="${SLOTS.headerMenuActions}" text="hello"></calcite-action>
        <calcite-action slot="${SLOTS.headerMenuActions}" text="hello2"></calcite-action>
      </calcite-panel>`,
    );

    await page.waitForChanges();

    const element = await page.find("calcite-panel");

    expect(element.getAttribute("menuOpen")).toBeNull();

    element.setProperty("menuOpen", true);

    await page.waitForChanges();

    const menu = await page.find(`calcite-panel >>> calcite-action-menu`);

    expect(menu).not.toBeNull();

    const menuVisible = await menu.isVisible();

    expect(menuVisible).toBe(true);

    const menuOpen = await menu.getProperty("open");

    expect(menuOpen).toBe(true);
  });

  it("should not render start or end actions containers when there are no start or end actions", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel></calcite-panel>");

    const actionsContainerStart = await page.find(`calcite-panel >>> .${CSS.headerActionsStart}`);
    const actionsContainerEnd = await page.find(`calcite-panel >>> .${CSS.headerActionsEnd}`);

    expect(await actionsContainerStart.isVisible()).toBe(false);
    expect(await actionsContainerEnd.isVisible()).toBe(false);
  });

  it("header-content should override heading and description properties", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-panel heading="test heading" description="test description">
        <div slot=${SLOTS.headerContent}>custom header content</div>
      </calcite-panel>`,
    );

    const heading = await page.find(`calcite-panel >>> ${CSS.heading}`);
    const description = await page.find(`calcite-panel >>> ${CSS.description}`);
    const header = await page.find(`calcite-panel >>> ${CSS.header}`);

    expect(heading).toBeNull();
    expect(description).toBeNull();
    expect(header).not.toBeNull();
  });

  it("should not render footer node if there are no actions or content", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel>test</calcite-panel>");

    const footer = await page.find(`calcite-panel >>> .${CSS.footer}`);

    expect(await footer.isVisible()).toBe(false);
  });

  it("should set tabIndex of -1 on a non-scrollable panel", async () => {
    const page = await newE2EPage();

    await page.setContent(panelTemplate());

    const scrollEl = await page.find(`calcite-panel >>> .${CSS.contentWrapper}`);

    expect(await scrollEl.getProperty("tabIndex")).toBe(-1);
  });

  it("should set tabIndex of 0 on a scrollable panel", async () => {
    const page = await newE2EPage();

    await page.setContent(panelTemplate(true));

    const scrollEl = await page.find(`calcite-panel >>> .${CSS.contentWrapper}`);

    expect(await scrollEl.getProperty("tabIndex")).toBe(0);
  });

  it("handles scrollContentTo method", async () => {
    const page = await newE2EPage();

    await page.setContent(panelTemplate(true));

    const scrollEl = await page.find(`calcite-panel >>> .${CSS.contentWrapper}`);

    expect(await scrollEl.getProperty("scrollTop")).toBe(0);

    await page.$eval("calcite-panel", async (panel: HTMLCalcitePanelElement) => {
      await panel.scrollContentTo({ top: 100 });
    });

    expect(await scrollEl.getProperty("scrollTop")).toBe(100);
  });

  it("should close when Escape key is pressed and closable is true", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-panel>test</calcite-panel>");
    const panel = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.container}`);
    expect(await panel.getProperty("closed")).toBe(false);
    expect(await container.isVisible()).toBe(true);
    await container.press("Escape");
    await page.waitForChanges();
    expect(await panel.getProperty("closed")).toBe(false);
    expect(await container.isVisible()).toBe(true);
    panel.setProperty("closable", true);
    await page.waitForChanges();
    await container.press("Escape");
    expect(await panel.getProperty("closed")).toBe(true);
    expect(await container.isVisible()).toBe(false);
  });

  it("should not close when Escape key is prevented and closable is true", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-panel closable>test</calcite-panel>");
    const panel = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.container}`);

    expect(await panel.getProperty("closed")).toBe(false);
    expect(await container.isVisible()).toBe(true);

    await page.$eval("calcite-panel", (panel: HTMLCalcitePanelElement) => {
      panel.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
        }
      });
    });

    await panel.press("Escape");
    await page.waitForChanges();

    expect(await panel.getProperty("closed")).toBe(false);
    expect(await container.isVisible()).toBe(true);
  });

  describe("theme", () => {
    // const panelHTML = html`
    //   <calcite-panel height-scale="s" closable heading="panel" description="slotted with header actions and action-bar">
    //     <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    //     <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    //     <calcite-action label="icon left" icon="left" slot="header-actions-start"></calcite-action>
    //     <calcite-action label="icon left" icon="left" slot="header-actions-end"></calcite-action>
    //     <calcite-action-bar slot="action-bar">
    //       <calcite-action-group>
    //         <calcite-action text="Add" icon="plus"> </calcite-action>
    //         <calcite-action text="Save" icon="save"> </calcite-action>
    //         <calcite-action text="Layers" icon="layers"> </calcite-action>
    //       </calcite-action-group>
    //     </calcite-action-bar>
    //     <div slot="content-top">Slot for a content-top.</div>
    //     <p>Slotted content!</p>
    //     <p style="height: 400px">Hello world!</p>
    //     <p style="height: 400px">Hello world!</p>
    //     <p style="height: 400px">Hello world!</p>
    //     <div slot="content-bottom">Slot for a content-bottom.</div>
    //     <p slot="footer">Slotted content!</p>
    //     <calcite-fab slot="fab"></calcite-fab>
    //   </calcite-panel>
    // `;

    describe("default", () => {
      themed("calcite-panel", {
        "--calcite-panel-height": {
          selector: "calcite-panel",
          targetProp: "blockSize",
        },
        "--calcite-panel-width": {
          selector: "calcite-panel",
          targetProp: "inlineSize",
        },
        "--calcite-panel-background-color": [
          {
            shadowSelector: `.${CSS.container}`,
            targetProp: "backgroundColor",
          },
          {
            shadowSelector: `.${CSS.contentWrapper}`,
            targetProp: "backgroundColor",
          },
        ],
      });
    });

    describe("heading and description", () => {
      themed(html`<calcite-panel heading="heading" description="description"></calcite-panel>`, {
        "--calcite-panel-description-text-color": {
          shadowSelector: `.${CSS.description}`,
          targetProp: "color",
        },
        "--calcite-panel-header-background-color": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "backgroundColor",
        },
        "--calcite-panel-header-z-index": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "zIndex",
        },
        "--calcite-panel-heading-text-color": {
          shadowSelector: `.${CSS.heading}`,
          targetProp: "color",
        },
        "--calcite-panel-border-color": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "borderBlockEndColor",
        },
      });
    });
    describe.skip("footer", () => {
      themed(html`<calcite-panel><p slot="footer">Footer content</p></calcite-panel>`, {
        "--calcite-panel-border-color": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "borderBlockStartColor",
        },
        "--calcite-panel-footer-background-color": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "backgroundColor",
        },
        "--calcite-panel-footer-space": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "paddingBlockStart",
        },
      });
    });
    describe.skip("content top", () => {
      // const tokens: ComponentTestTokens = {
      //   "--calcite-panel-spacing-block-end": {
      //     shadowSelector: `.${CSS.contentBottom}`,
      //     targetProp: "paddingBlockEnd",
      //   },
      //   "--calcite-panel-spacing-block-start": {
      //     shadowSelector: `.${CSS.contentTop}`,
      //     targetProp: "paddingBlockStart",
      //   },
      //   "--calcite-panel-action-background-color": [
      //     {
      //       shadowSelector: `calcite-action[title='Close']`,
      //       targetProp: "--calcite-action-background-color",
      //     },
      //     {
      //       shadowSelector: `calcite-action[slot='trigger']`,
      //       targetProp: "--calcite-action-background-color",
      //     },
      //   ],
      //   "--calcite-panel-action-background-color-hover": [
      //     {
      //       shadowSelector: `calcite-action[title='Close']`,
      //       targetProp: "--calcite-action-background-color",
      //       state: { hover: { attribute: "class", value: `button` } },
      //     },
      //     {
      //       shadowSelector: `calcite-action[slot='trigger']`,
      //       targetProp: "--calcite-action-background-color",
      //       state: { hover: { attribute: "class", value: `button` } },
      //     },
      //   ],
      //   "--calcite-panel-action-background-color-active": [
      //     {
      //       shadowSelector: `calcite-action[title='Close']`,
      //       targetProp: "--calcite-action-background-color",
      //       state: { press: { attribute: "class", value: `button` } },
      //     },
      //     {
      //       shadowSelector: `calcite-action[slot='trigger']`,
      //       targetProp: "--calcite-action-background-color",
      //       state: { press: { attribute: "class", value: `button` } },
      //     },
      //   ],
      //   "--calcite-panel-action-menu-border-color": {
      //     shadowSelector: "calcite-action-menu",
      //     targetProp: "--calcite-action-menu-border-color",
      //   },
      //   "--calcite-panel-action-menu-text-color": {
      //     shadowSelector: "calcite-action-menu",
      //     targetProp: "--calcite-action-menu-text-color",
      //   },
      // "--calcite-panel-border-color": [
      //   {
      //     shadowSelector: `.${CSS.headerContainerBorderEnd}`,
      //     targetProp: "borderBlockEndColor",
      //   },
      // ],
      //   "--calcite-panel-fab-z-index": {
      //     shadowSelector: `.${CSS.fabContainer}`,
      //     targetProp: "zIndex",
      //   },
      // };
      themed(html`<calcite-panel heading="heading" description="description">content</calcite-panel>`, {
        "--calcite-panel-description-text-color": {
          shadowSelector: `.${CSS.description}`,
          targetProp: "color",
        },
        "--calcite-panel-header-background-color": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "backgroundColor",
        },
        "--calcite-panel-header-z-index": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "zIndex",
        },
        "--calcite-panel-heading-text-color": {
          shadowSelector: `.${CSS.heading}`,
          targetProp: "color",
        },
        "--calcite-panel-border-color": [
          {
            shadowSelector: `.${CSS.header}`,
            targetProp: "borderBlockEndColor",
          },
          {
            shadowSelector: `.${CSS.footer}`,
            targetProp: "borderBlockStartColor",
          },
        ],
        "--calcite-panel-height": {
          selector: "calcite-panel",
          targetProp: "blockSize",
        },
        "--calcite-panel-width": {
          selector: "calcite-panel",
          targetProp: "inlineSize",
        },
        "--calcite-panel-background-color": [
          {
            shadowSelector: `.${CSS.container}`,
            targetProp: "backgroundColor",
          },
          {
            shadowSelector: `.${CSS.contentWrapper}`,
            targetProp: "backgroundColor",
          },
        ],
        "--calcite-panel-footer-background-color": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "backgroundColor",
        },
      });
    });
    describe.skip("content bottom", () => {
      themed(html`<calcite-panel heading="heading" description="description">content</calcite-panel>`, {
        "--calcite-panel-description-text-color": {
          shadowSelector: `.${CSS.description}`,
          targetProp: "color",
        },
        "--calcite-panel-header-background-color": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "backgroundColor",
        },
        "--calcite-panel-header-z-index": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "zIndex",
        },
        "--calcite-panel-heading-text-color": {
          shadowSelector: `.${CSS.heading}`,
          targetProp: "color",
        },
        "--calcite-panel-border-color": [
          {
            shadowSelector: `.${CSS.header}`,
            targetProp: "borderBlockEndColor",
          },
          {
            shadowSelector: `.${CSS.footer}`,
            targetProp: "borderBlockStartColor",
          },
        ],
        "--calcite-panel-height": {
          selector: "calcite-panel",
          targetProp: "blockSize",
        },
        "--calcite-panel-width": {
          selector: "calcite-panel",
          targetProp: "inlineSize",
        },
        "--calcite-panel-background-color": [
          {
            shadowSelector: `.${CSS.container}`,
            targetProp: "backgroundColor",
          },
          {
            shadowSelector: `.${CSS.contentWrapper}`,
            targetProp: "backgroundColor",
          },
        ],
        "--calcite-panel-footer-background-color": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "backgroundColor",
        },
      });
    });
    describe.skip("actions", () => {
      themed(html`<calcite-panel heading="heading" description="description">content</calcite-panel>`, {
        "--calcite-panel-description-text-color": {
          shadowSelector: `.${CSS.description}`,
          targetProp: "color",
        },
        "--calcite-panel-header-background-color": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "backgroundColor",
        },
        "--calcite-panel-header-z-index": {
          shadowSelector: `.${CSS.header}`,
          targetProp: "zIndex",
        },
        "--calcite-panel-heading-text-color": {
          shadowSelector: `.${CSS.heading}`,
          targetProp: "color",
        },
        "--calcite-panel-border-color": [
          {
            shadowSelector: `.${CSS.header}`,
            targetProp: "borderBlockEndColor",
          },
          {
            shadowSelector: `.${CSS.footer}`,
            targetProp: "borderBlockStartColor",
          },
        ],
        "--calcite-panel-height": {
          selector: "calcite-panel",
          targetProp: "blockSize",
        },
        "--calcite-panel-width": {
          selector: "calcite-panel",
          targetProp: "inlineSize",
        },
        "--calcite-panel-background-color": [
          {
            shadowSelector: `.${CSS.container}`,
            targetProp: "backgroundColor",
          },
          {
            shadowSelector: `.${CSS.contentWrapper}`,
            targetProp: "backgroundColor",
          },
        ],
        "--calcite-panel-footer-background-color": {
          shadowSelector: `.${CSS.footer}`,
          targetProp: "backgroundColor",
        },
      });
    });
  });
});
