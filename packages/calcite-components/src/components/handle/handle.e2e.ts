import { newE2EPage } from "@stencil/core/testing";
import { accessible, disabled, hidden, renders, themed, t9n } from "../../tests/commonTests";
import { HandleMessages } from "../../components";
import { CSS, SUBSTITUTIONS } from "./resources";

describe("calcite-handle", () => {
  describe("renders", () => {
    renders("calcite-handle", { display: "flex" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-handle");
  });

  describe("disabled", () => {
    disabled("calcite-handle");
  });

  describe("accessible", () => {
    accessible(`<calcite-handle></calcite-handle>`);
  });

  it("sets handle tooltip", async () => {
    const page = await newE2EPage();
    const label = "Hello World";
    await page.setContent(`<calcite-handle lang="en" label="${label}"></calcite-handle>`);
    await page.waitForChanges();

    const handle = await page.find("calcite-handle");
    await handle.callMethod("setFocus");
    const button = await page.find(`calcite-handle >>> .${CSS.handle}`);
    const messages: HandleMessages = await handle.getProperty("messages");

    expect(await button.getProperty("title")).toBe(messages.dragHandle.replace(SUBSTITUTIONS.itemLabel, label));
  });

  it("sets selected to true when focused and space is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-handle></calcite-handle>");

    const handle = await page.find("calcite-handle");
    const button = await page.find(`calcite-handle >>> .${CSS.handle}`);

    expect(await handle.getProperty("selected")).toBe(false);

    await button.focus();

    const calciteHandleChange = await page.spyOnEvent("calciteHandleChange", "window");
    await page.keyboard.press(" ");

    await page.waitForChanges();

    expect(await handle.getProperty("selected")).toBe(true);
    expect(calciteHandleChange).toHaveReceivedEventTimes(1);
  });

  it("sets selected to false when blurred", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-handle></calcite-handle>");

    const handle = await page.find("calcite-handle");
    const button = await page.find(`calcite-handle >>> .${CSS.handle}`);

    expect(await handle.getProperty("selected")).toBe(false);

    await button.focus();
    const calciteHandleChange = await page.spyOnEvent("calciteHandleChange", "window");
    await page.keyboard.press(" ");

    await page.waitForChanges();

    expect(await handle.getProperty("selected")).toBe(true);
    expect(calciteHandleChange).toHaveReceivedEventTimes(1);

    await page.$eval("calcite-handle", (handle: HTMLCalciteHandleElement) => handle.blur());

    expect(await handle.getProperty("selected")).toBe(false);
    expect(calciteHandleChange).toHaveReceivedEventTimes(2);
  });

  it("does not set selected to false when blurUnselectDisabled and blurred", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-handle blur-unselect-disabled></calcite-handle>");

    const handle = await page.find("calcite-handle");
    const button = await page.find(`calcite-handle >>> .${CSS.handle}`);

    expect(await handle.getProperty("blurUnselectDisabled")).toBe(true);
    expect(await handle.getProperty("selected")).toBe(false);

    await button.focus();
    const calciteHandleChange = await page.spyOnEvent("calciteHandleChange", "window");
    await page.keyboard.press(" ");

    await page.waitForChanges();

    expect(await handle.getProperty("selected")).toBe(true);
    expect(calciteHandleChange).toHaveReceivedEventTimes(1);

    await page.$eval("calcite-handle", (handle: HTMLCalciteHandleElement) => handle.blur());

    expect(await handle.getProperty("selected")).toBe(true);
    expect(calciteHandleChange).toHaveReceivedEventTimes(1);
  });

  it("fires calciteHandleNudge event when focused and up or down key is pressed", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-handle></calcite-handle>");

    const calciteHandleNudgeSpy = await page.spyOnEvent("calciteHandleNudge");

    const button = await page.find(`calcite-handle >>> .${CSS.handle}`);

    await button.focus();

    await page.keyboard.press(" ");
    await page.keyboard.press("ArrowUp");
    expect(await calciteHandleNudgeSpy.lastEvent.detail.direction).toBe("up");

    await page.keyboard.press("ArrowDown");
    expect(await calciteHandleNudgeSpy.lastEvent.detail.direction).toBe("down");
    expect(calciteHandleNudgeSpy).toHaveReceivedEventTimes(2);
  });

  describe("translation support", () => {
    t9n("calcite-handle");
  });

  it("sets radio role properly", async () => {
    const page = await newE2EPage();
    const label = "Hello World";
    await page.setContent(`<calcite-handle lang="en" label="${label}"></calcite-handle>`);
    await page.waitForChanges();

    const handle = await page.find("calcite-handle");

    const internalHandle = await page.find(`calcite-handle >>> .${CSS.handle}`);
    expect(internalHandle.getAttribute("role")).toBe("radio");
    expect(internalHandle.getAttribute("aria-checked")).toBe("false");

    handle.setProperty("selected", true);

    await page.waitForChanges();
    expect(internalHandle.getAttribute("aria-checked")).toBe("true");
  });

  describe("theme", () => {
    describe("default", () => {
      themed("calcite-handle", {
        "--calcite-handle-background-color-hover": {
          shadowSelector: `.${CSS.handle}`,
          targetProp: "backgroundColor",
          state: "hover",
        },
        "--calcite-handle-icon-color": {
          shadowSelector: `.${CSS.handle}`,
          targetProp: "color",
        },
        "--calcite-handle-icon-color-hover": {
          shadowSelector: `.${CSS.handle}`,
          targetProp: "color",
          state: "hover",
        },
        "--calcite-handle-icon-color-pressed": {
          shadowSelector: `.${CSS.handle}`,
          targetProp: "color",
          state: { press: { attribute: "class", value: CSS.handle } },
        },
      });
    });
    describe("selected", () => {
      themed("<calcite-handle selected></calcite-handle>", {
        "--calcite-handle-background-color-selected": {
          shadowSelector: `.${CSS.handleSelected}`,
          targetProp: "backgroundColor",
        },
        "--calcite-handle-icon-color-selected": {
          shadowSelector: `.${CSS.handleSelected}`,
          targetProp: "color",
        },
      });
    });
  });
});
