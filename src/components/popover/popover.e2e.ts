import { newE2EPage } from "@stencil/core/testing";
import { html } from "../../../support/formatting";

import { accessible, defaults, hidden, renders, floatingUIOwner } from "../../tests/commonTests";
import { CSS } from "./resources";

describe("calcite-popover", () => {
  it("renders", async () => {
    await renders("calcite-popover", { visible: false, display: "block" });
    await renders(
      `<calcite-popover label="test" open reference-element="ref"></calcite-popover><div id="ref">😄</div>`,
      { display: "block" }
    );
  });

  it("should have zIndex of 900", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    await page.waitForChanges();

    const style = await popover.getComputedStyle();

    expect(style.zIndex).toBe("900");
  });

  it("is accessible when closed", async () =>
    accessible(`<calcite-popover label="test" reference-element="ref"></calcite-popover><div id="ref">😄</div>`));

  it("is accessible when open", async () =>
    accessible(`<calcite-popover label="test" open reference-element="ref"></calcite-popover><div id="ref">😄</div>`));

  it("is accessible with close button", async () =>
    accessible(
      `<calcite-popover label="test" open dismissible reference-element="ref"></calcite-popover><div id="ref">😄</div>`
    ));

  it("honors hidden attribute", async () => hidden("calcite-popover"));

  it("has property defaults", async () =>
    defaults("calcite-popover", [
      {
        propertyName: "placement",
        defaultValue: "auto"
      },
      {
        propertyName: "referenceElement",
        defaultValue: undefined
      },
      {
        propertyName: "offsetDistance",
        defaultValue: 6
      },
      {
        propertyName: "offsetSkidding",
        defaultValue: 0
      },
      {
        propertyName: "open",
        defaultValue: false
      },
      {
        propertyName: "dismissible",
        defaultValue: false
      },
      {
        propertyName: "disableFlip",
        defaultValue: false
      },
      {
        propertyName: "disablePointer",
        defaultValue: false
      },
      {
        propertyName: "overlayPositioning",
        defaultValue: "absolute"
      }
    ]));

  it("popover positions when referenceElement is set", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-popover open placement="auto"></calcite-popover><div>referenceElement</div>`);

    const element = await page.find("calcite-popover");

    let computedStyle: CSSStyleDeclaration = await element.getComputedStyle();

    expect(computedStyle.transform).toBe("matrix(0, 0, 0, 0, 0, 0)");

    await page.$eval("calcite-popover", (elm: any) => {
      const referenceElement = document.createElement("div");
      document.body.appendChild(referenceElement);
      elm.referenceElement = referenceElement;
    });

    await page.waitForChanges();

    computedStyle = await element.getComputedStyle();

    expect(computedStyle.transform).not.toBe("matrix(0, 0, 0, 0, 0, 0)");
  });

  it("open popover should be visible", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-popover placement="auto"></calcite-popover><div>referenceElement</div>`);

    const element = await page.find("calcite-popover");

    await page.$eval("calcite-popover", (elm: any) => {
      const referenceElement = document.createElement("div");
      document.body.appendChild(referenceElement);
      elm.referenceElement = referenceElement;
    });

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    expect(await popover.isVisible()).toBe(false);

    element.setProperty("open", true);

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(true);
  });

  it("should accept referenceElement as string id", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(true);

    const element = await page.find("calcite-popover");

    const computedStyle = await element.getComputedStyle();

    expect(computedStyle.transform).not.toBe("matrix(0, 0, 0, 0, 0, 0)");
  });

  it("should accept referenceElement as a virtual element", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-popover placement="auto" open>content</calcite-popover>`);

    await page.$eval("calcite-popover", (popover: HTMLCalcitePopoverElement) => {
      const virtualElement = {
        getBoundingClientRect: () =>
          ({
            width: 0,
            height: 0,
            top: 100,
            right: 100,
            bottom: 100,
            left: 600
          } as DOMRect)
      };

      popover.referenceElement = virtualElement;
    });

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    expect(await popover.isVisible()).toBe(true);

    const computedStyle = await popover.getComputedStyle();

    expect(computedStyle.transform).not.toBe("matrix(0, 0, 0, 0, 0, 0)");
  });

  it("should show closeButton when enabled", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    let closeButton = await page.find(`calcite-popover >>> .${CSS.closeButton}`);

    expect(closeButton).toBe(null);

    const element = await page.find("calcite-popover");

    element.setProperty("dismissible", true);

    await page.waitForChanges();

    closeButton = await page.find(`calcite-popover >>> .${CSS.closeButton}`);

    expect(await closeButton.isVisible()).toBe(true);
  });

  it("should honor click interaction", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref">content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    expect(await popover.isVisible()).toBe(false);

    const ref = await page.find("#ref");

    await ref.click();

    expect(await popover.isVisible()).toBe(true);
  });

  it("should honor Enter key interaction", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref">content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    expect(await popover.isVisible()).toBe(false);

    await page.evaluate(() => {
      document.getElementById("ref").dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(true);

    await page.evaluate(() => {
      document.getElementById("ref").dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(false);
  });

  it("should honor Space key interaction", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref">content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find(`calcite-popover`);

    expect(await popover.isVisible()).toBe(false);

    await page.evaluate(() => {
      document.getElementById("ref").dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(true);

    await page.evaluate(() => {
      document.getElementById("ref").dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(false);
  });

  it("should emit open event", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref">content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    const event = await popover.spyOnEvent("calcitePopoverOpen");

    expect(event).toHaveReceivedEventTimes(0);

    const popoverOpenEvent = page.waitForEvent("calcitePopoverOpen");

    await page.evaluate(() => {
      const popover = document.querySelector("calcite-popover");
      popover.open = true;
    });

    await popoverOpenEvent;

    expect(event).toHaveReceivedEventTimes(1);
  });

  it("should emit close event", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover><div id="ref">referenceElement</div>`
    );

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    const event = await popover.spyOnEvent("calcitePopoverClose");

    expect(event).toHaveReceivedEventTimes(0);

    const popoverCloseEvent = page.waitForEvent("calcitePopoverClose");

    await page.evaluate(() => {
      const popover = document.querySelector("calcite-popover");
      popover.open = false;
    });

    await popoverCloseEvent;

    expect(event).toHaveReceivedEventTimes(1);
  });

  it("should open popovers", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`
        <calcite-popover reference-element="ref">Content</calcite-popover>
        <div id="ref">Button</div>
      `
    );

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    expect(await popover.getProperty("open")).toBe(false);

    const referenceElement = await page.find("#ref");

    await referenceElement.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(true);
  });

  it("should open popovers 2", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`
        <calcite-popover reference-element="ref">Content</calcite-popover>
        <div id="ref"><span>Button</span></div>
      `
    );

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    expect(await popover.getProperty("open")).toBe(false);

    const referenceElement = await page.find("#ref span");

    await referenceElement.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(true);
  });

  it("should not be visible if reference is hidden", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html` <calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover>
        <div id="scrollEl" style="height: 200px; overflow: auto;">
          <div id="ref">referenceElement</div>
          <div style="height: 400px;">some content</div>
        </div>`
    );

    await page.waitForChanges();

    const scrollEl = await page.find("#scrollEl");

    expect(await scrollEl.getProperty("scrollTop")).toBe(0);

    const popover = await page.find("calcite-popover");

    expect(await popover.isVisible()).toBe(true);
    expect((await popover.getComputedStyle()).pointerEvents).toBe("auto");

    await page.$eval("#scrollEl", async (scrollEl: HTMLDivElement) => {
      scrollEl.scrollTo({ top: 300 });
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(false);
    expect((await popover.getComputedStyle()).pointerEvents).toBe("none");
  });

  it("do not autoClose popovers when clicked outside", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`
        <div id="outsideNode">Outside node</div>
        <calcite-popover reference-element="ref" open>Content</calcite-popover>
        <div id="ref">Button</div>
      `
    );

    await page.waitForChanges();

    const outsideNode = await page.find("#outsideNode");

    await outsideNode.click();

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    expect(await popover.getProperty("open")).toBe(true);
  });

  it("autoClose popovers when clicked outside", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`
        <div id="outsideNode">Outside node</div>
        <calcite-popover auto-close reference-element="ref" open>
          <div id="insideNode">Inside node</div>
        </calcite-popover>
        <div id="ref">Button</div>
      `
    );

    await page.waitForChanges();

    const popover = await page.find("calcite-popover");

    expect(await popover.getProperty("open")).toBe(true);

    const insideNode = await page.find("#insideNode");

    await insideNode.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(true);

    const outsideNode = await page.find("#outsideNode");

    await outsideNode.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(false);
  });

  it("should not be visible if ui has escaped", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`<div id="scrollEl" style="height: 200px; overflow: auto;">
        <calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover>
        <div id="ref">referenceElement</div>
        <div style="height: 400px;">some content</div>
      </div>`
    );

    await page.waitForChanges();

    const scrollEl = await page.find("#scrollEl");

    expect(await scrollEl.getProperty("scrollTop")).toBe(0);

    const popover = await page.find("calcite-popover");

    expect(await popover.isVisible()).toBe(true);
    expect((await popover.getComputedStyle()).pointerEvents).toBe("auto");

    await page.$eval("#scrollEl", async (scrollEl: HTMLDivElement) => {
      scrollEl.scrollTo({ top: 300 });
    });

    await page.waitForChanges();

    expect(await popover.isVisible()).toBe(false);
    expect((await popover.getComputedStyle()).pointerEvents).toBe("none");
  });

  it("should not toggle popovers with triggerDisabled", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html` <div id="outsideNode">Outside node</div>
        <calcite-popover trigger-disabled reference-element="ref" open> Hello World </calcite-popover>
        <div id="ref">Button</div>`
    );

    const popover = await page.find("calcite-popover");

    expect(await popover.getProperty("open")).toBe(true);

    const ref = await page.find("#ref");

    await ref.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(true);

    const outsideNode = await page.find("#outsideNode");

    await outsideNode.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(true);

    popover.setProperty("triggerDisabled", false);

    await page.waitForChanges();

    await ref.click();

    await page.waitForChanges();

    expect(await popover.getProperty("open")).toBe(false);
  });

  it("owns a floating-ui", () =>
    floatingUIOwner(
      `<calcite-popover placement="auto" reference-element="ref" open>content</calcite-popover><div id="ref">referenceElement</div>`,
      "open"
    ));

  it("should autoClose shadow popovers when clicked outside", async () => {
    const page = await newE2EPage();

    await page.setContent(
      html`
        <div id="host"></div>
        <div id="outsideNode">Outside node</div>
        <calcite-popover id="dummy" reference-element="ref">dummy popover</calcite-popover>
        <div id="ref">Button</div>
      `
    );

    await page.waitForChanges();

    await page.evaluate(() => {
      const shadow = document.getElementById("host").attachShadow({ mode: "open" });

      const shadowButton = document.createElement("calcite-button");
      shadowButton.id = "popover-button-close-shadow";
      shadowButton.textContent = "Shadow Popover";

      const shadowPopover = document.createElement("calcite-popover");
      shadowPopover.referenceElement = "popover-button-close-shadow";
      shadowPopover.autoClose = true;
      shadowPopover.textContent = "Click outside me";
      shadowPopover.open = true;

      shadow.appendChild(shadowPopover);
      shadow.appendChild(shadowButton);
    });

    await page.waitForChanges();

    const shadowPopover = await page.find("#host >>> calcite-popover");

    expect(await shadowPopover.getProperty("open")).toBe(true);

    const outsideNode = await page.find("#outsideNode");

    await outsideNode.click();

    await page.waitForChanges();

    expect(await shadowPopover.getProperty("open")).toBe(false);
  });
});
