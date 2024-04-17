import { newE2EPage } from "@stencil/core/testing";
import { accessible, disabled, hidden, renders, slots, t9n } from "../../tests/commonTests";
import { CSS, SLOTS } from "./resources";

describe("calcite-action", () => {
  describe("renders", () => {
    renders("calcite-action", { display: "flex" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-action");
  });

  describe("disabled", () => {
    disabled("calcite-action");
  });

  describe("slots", () => {
    slots("calcite-action", SLOTS);
  });

  it("should set aria-label with indicator", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-action indicator text="hello world"></calcite-action>`);

    const button = await page.find(`calcite-action >>> .${CSS.button}`);
    expect(button.getAttribute("aria-label")).toBe(`hello world (Indicator present)`);
  });

  describe("accessible", () => {
    accessible(`<calcite-action text="hello world"></calcite-action>`);
    accessible(`<calcite-action text="hello world" disabled text-enabled></calcite-action>`);
    accessible(`<calcite-action indicator text="hello world"></calcite-action>`);
  });

  describe("translation support", () => {
    t9n("calcite-action");
  });

  it("should have a indicator live region", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-action></calcite-action>`);
    await page.waitForChanges();

    const action = await page.find("calcite-action");
    const liveRegion = await page.find(`calcite-action >>> .${CSS.indicatorText}`);

    expect(liveRegion.getAttribute("aria-live")).toBe("polite");
    expect(liveRegion.getAttribute("role")).toBe("region");
    expect(liveRegion.textContent).toBe("");

    action.setProperty("indicator", true);
    await page.waitForChanges();

    expect(liveRegion.getAttribute("aria-live")).toBe("polite");
    expect(liveRegion.getAttribute("role")).toBe("region");
    expect(liveRegion.textContent).toBe("Indicator present");
  });
});
