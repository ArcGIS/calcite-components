import { newE2EPage } from "@stencil/core/testing";
import { focusable, renders, slots } from "../../tests/commonTests";
import { html } from "../../../support/formatting";
import { SLOTS } from "./resources";

describe("calcite-modal properties", () => {
  it("renders", () => renders("calcite-modal", { display: "flex", visible: false }));

  it("has slots", () => slots("calcite-modal", SLOTS));

  it("adds localized strings set via intl-* props", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const button = await page.find("calcite-modal >>> .close");
    expect(button).toEqualAttribute("aria-label", "test");
  });

  it("should hide closeButton when disabled", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-modal></calcite-modal>");
    const modal = await page.find("calcite-modal");
    modal.setProperty("disableCloseButton", true);
    await page.waitForChanges();
    const closeButton = await page.find("calcite-modal >>> .close");
    expect(closeButton).toBe(null);
  });

  it("sets custom width correctly", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal width="400"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    const style = await page.$eval("calcite-modal", (elm) => {
      const m = elm.shadowRoot.querySelector(".modal");
      return window.getComputedStyle(m).getPropertyValue("width");
    });
    expect(style).toEqual("400px");
  });

  it("calls the beforeClose method prior to closing", async () => {
    const page = await newE2EPage();
    const mockCallBack = jest.fn();
    await page.exposeFunction("beforeClose", mockCallBack);
    await page.setContent(`
      <calcite-modal active></calcite-modal>
    `);
    const modal = await page.find("calcite-modal");
    await page.$eval(
      "calcite-modal",
      (elm: HTMLCalciteModalElement) =>
        (elm.beforeClose = (window as typeof window & Pick<typeof elm, "beforeClose">).beforeClose)
    );
    await page.waitForChanges();
    await modal.setProperty("active", true);
    await page.waitForChanges();
    await modal.setProperty("active", false);
    await page.waitForChanges();
    expect(mockCallBack).toBeCalled();
  });
});

describe("calcite-modal events", () => {
  it("emits the calciteModalBeforeOpen event before open", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const changeEvent = await modal.spyOnEvent("calciteModalBeforeOpen");
    expect(changeEvent).toHaveReceivedEventTimes(0);
    await modal.setProperty("active", true);
    await page.waitForChanges();
    await page.waitForTimeout(400);
    expect(await modal.getProperty("open")).toBe(true);
    expect(changeEvent).toHaveReceivedEventTimes(1);
  });
  it("emits the calciteModalOpen event on open", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const changeEvent = await modal.spyOnEvent("calciteModalOpen");
    expect(changeEvent).toHaveReceivedEventTimes(0);
    modal.setProperty("active", true);
    await page.waitForChanges();
    await page.waitForTimeout(400);
    expect(await modal.getProperty("open")).toBe(true);
    expect(changeEvent).toHaveReceivedEventTimes(1);
  });
  it("emits the calciteModalClose event before close", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const changeEvent = await modal.spyOnEvent("calciteModalBeforeClose");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(await modal.getProperty("open")).toBe(true);
    expect(changeEvent).toHaveReceivedEventTimes(0);
    modal.setProperty("active", false);
    await page.waitForChanges();
    await page.waitForTimeout(400);
    expect(await modal.getProperty("open")).toBe(false);
    expect(changeEvent).toHaveReceivedEventTimes(1);
  });
  it("emits the calciteModalClose event on close", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const changeEvent = await modal.spyOnEvent("calciteModalClose");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(await modal.getProperty("open")).toBe(true);
    expect(changeEvent).toHaveReceivedEventTimes(0);
    await modal.setProperty("active", false);
    await page.waitForChanges();
    await page.waitForTimeout(400);
    expect(await modal.getProperty("open")).toBe(false);
    expect(changeEvent).toHaveReceivedEventTimes(1);
  });
});

describe("calcite-modal accessibility checks", () => {
  it("traps focus within the modal when open", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-modal>
        <div slot="content">
          <button class="btn-1">Focus1</button>
          <button class="btn-2">Focus1</button>
        </div>
      </calcite-modal>`
    );
    const modal = await page.find("calcite-modal");
    let $button1;
    let $button2;
    let $close;
    await page.$eval(".btn-1", (elm) => ($button1 = elm));
    await page.$eval(".btn-2", (elm) => ($button2 = elm));
    await page.$eval("calcite-modal", (elm) => {
      $close = elm.shadowRoot.querySelector(".close");
    });
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(document.activeElement).toEqual($close);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button1);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button2);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($close);
    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button2);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button1);
  });

  it("restores focus to previously focused element when closed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<button>Focus</button><calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    let $button;
    await page.$eval("button", (elm: any) => {
      $button = elm;
      $button.focus();
    });
    await modal.setProperty("active", true);
    await page.waitForChanges();
    await modal.setProperty("active", false);
    await page.waitForChanges();
    expect(document.activeElement).toEqual($button);
  });

  it("traps focus within the modal when open and disabled close button", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-modal disable-close-button>
        <div slot="content">
          <button class="btn-1">Focus1</button>
          <button class="btn-2">Focus1</button>
        </div>
      </calcite-modal>`
    );
    const modal = await page.find("calcite-modal");
    let $button1;
    let $button2;
    await page.$eval(".btn-1", (elm) => ($button1 = elm));
    await page.$eval(".btn-2", (elm) => ($button2 = elm));

    await modal.setProperty("active", true);
    await page.waitForChanges();
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button1);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button2);
    await page.keyboard.down("Shift");
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button2);
    await page.keyboard.press("Tab");
    expect(document.activeElement).toEqual($button1);
  });

  describe("setFocus", () => {
    const createModalHTML = (contentHTML?: string) => `<calcite-modal active>${contentHTML}</calcite-modal>`;

    const closeButtonFocusId = "close-button";
    const closeButtonTargetSelector = ".close";
    const focusableContentTargetClass = "test";

    const focusableContentHTML = html`<h3 slot="header">Title</h3>
      <p slot="content">This is the content <button class=${focusableContentTargetClass}>test</button></p>`;

    it("focuses focusable content by default", async () =>
      focusable(createModalHTML(focusableContentHTML), {
        focusTargetSelector: `.${focusableContentTargetClass}`
      }));

    it("focuses close button if there is no focusable content", async () =>
      focusable(createModalHTML(), {
        focusId: closeButtonFocusId,
        shadowFocusTargetSelector: closeButtonTargetSelector
      }));

    it("can focus close button directly", async () =>
      focusable(createModalHTML(focusableContentHTML), {
        focusId: closeButtonFocusId,
        shadowFocusTargetSelector: closeButtonTargetSelector
      }));
  });

  it("has correct aria role/attribute", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    expect(modal).toEqualAttribute("role", "dialog");
    expect(modal).toEqualAttribute("aria-modal", "true");
  });

  it("closes when Escape key is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await page.keyboard.press("Escape");
    await page.waitForChanges();
    expect(modal).not.toHaveAttribute("active");
  });

  it("closes and allows re-opening when Escape key is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await page.keyboard.press("Escape");
    await page.waitForChanges();
    expect(modal).not.toHaveAttribute("active");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
  });

  it("closes when Close button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const button = await page.find("calcite-modal >>> .close");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await button.click();
    await page.waitForChanges();
    expect(modal).not.toHaveAttribute("active");
  });

  it("should close when the scrim is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await page.$eval("calcite-modal", (elm) => elm.shadowRoot.querySelector("calcite-scrim").click());
    await page.waitForChanges();
    expect(await modal.getProperty("active")).toBe(false);
  });

  it("should not close when the scrim is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal disable-outside-close intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await page.$eval("calcite-modal", (elm) => elm.shadowRoot.querySelector("calcite-scrim").click());
    await page.waitForChanges();
    expect(await modal.getProperty("active")).toBe(true);
  });

  it("closes and allows re-opening when Close button  is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal intl-close="test"></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    const button = await page.find("calcite-modal >>> .close");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await button.click();
    await page.waitForChanges();
    expect(modal).not.toHaveAttribute("active");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
  });

  it("does not close when Escape is pressed and disable-escape is set", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal disable-escape></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
    await page.keyboard.press("Escape");
    await page.waitForChanges();
    expect(modal).toHaveAttribute("active");
  });

  it("correctly adds overflow class on document when open", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    const documentClass = await page.evaluate(() => {
      return document.documentElement.classList.contains("overflow-hidden");
    });
    expect(documentClass).toEqual(true);
  });

  it("correctly removes overflow class on document when open", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-modal></calcite-modal>`);
    const modal = await page.find("calcite-modal");
    await modal.setProperty("active", true);
    await page.waitForChanges();
    await modal.setProperty("active", false);
    await page.waitForChanges();
    const documentClass = await page.evaluate(() => {
      return document.documentElement.classList.contains("overflow-hidden");
    });
    expect(documentClass).toEqual(false);
  });

  it("renders correctly with no footer", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-modal>
        <calcite-button slot="primary">TEST</calcite-button>
      </calcite-modal>
    `);
    let footer = await page.$eval("calcite-modal", (elm) => elm.shadowRoot.querySelector(".footer"));
    expect(footer).toBeDefined();
    await page.$eval("calcite-button", (elm) => elm.parentElement.removeChild(elm));
    await page.waitForChanges();
    footer = await page.$eval("calcite-modal", (elm) => elm.shadowRoot.querySelector(".footer"));
    expect(footer).toBeFalsy();
  });

  it("should render calcite-scrim with dark background color", async () => {
    const page = await newE2EPage({
      html: `
      <calcite-modal aria-labelledby="modal-title" is-active>
        <h3 slot="header" id="modal-title">Title of the modal</h3>
        <div slot="content">The actual content of the modal</div>
        <calcite-button slot="back" color="neutral" appearance="outline" icon="chevron-left" width="full">
          Back
        </calcite-button>
        <calcite-button slot="secondary" width="full" appearance="outline"> Cancel </calcite-button>
        <calcite-button slot="primary" width="full"> Save </calcite-button>
      </calcite-modal>
      `
    });
    const scrimStyles = await page.evaluate(() => {
      const scrim = document.querySelector("calcite-modal").shadowRoot.querySelector(".scrim");
      return window.getComputedStyle(scrim).getPropertyValue("--calcite-scrim-background");
    });
    expect(scrimStyles).toEqual("rgba(0, 0, 0, 0.75)");
  });

  it("correctly reflects the scale of the modal on the close button icon", async () => {
    const page = await newE2EPage();
    await page.setContent(html` <calcite-modal active></calcite-modal> `);
    const modal = await page.find("calcite-modal");
    modal.setProperty("scale", "s");
    await page.waitForChanges();
    let closeIcon = await page.find('calcite-modal >>> calcite-icon[scale="s"]');
    expect(closeIcon).not.toBe(null);

    modal.setProperty("scale", "m");
    await page.waitForChanges();
    closeIcon = await page.find('calcite-modal >>> calcite-icon[scale="m"]');
    expect(closeIcon).not.toBe(null);

    modal.setProperty("scale", "l");
    await page.waitForChanges();
    closeIcon = await page.find('calcite-modal >>> calcite-icon[scale="l"]');
    expect(closeIcon).not.toBe(null);
  });
});
