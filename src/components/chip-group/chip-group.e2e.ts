import { newE2EPage } from "@stencil/core/testing";
import { accessible, renders, hidden } from "../../tests/commonTests";
import { CSS as CHIPCSS } from "../chip/resources";

// todo tests
// shift tab goes to closable previous button element
// using enter and space selects and unselects
// selected in dom on load populated selectedItems

describe("calcite-chip-group", () => {
  it("renders", async () =>
    renders("<calcite-chip-group><calcite-chip></calcite-chip><calcite-chip></calcite-chip></calcite-chip-group>", {
      display: "flex"
    }));

  it("honors hidden attribute", async () => hidden("calcite-chip-group"));

  it("is accessible in selection mode none (default)", async () => {
    accessible(`<calcite-chip-group><calcite-chip></calcite-chip><calcite-chip></calcite-chip></calcite-chip-group>`);
  });

  it("is accessible in selection mode single", async () => {
    accessible(
      `<calcite-chip-group selection-mode="single"><calcite-chip></calcite-chip><calcite-chip></calcite-chip></calcite-chip-group>`
    );
  });

  it("is accessible in selection mode single-persist", async () => {
    accessible(
      `<calcite-chip-group selection-mode="single-persist"><calcite-chip></calcite-chip><calcite-chip></calcite-chip></calcite-chip-group>`
    );
  });

  it("is accessible in selection mode multiple", async () => {
    accessible(
      `<calcite-chip-group selection-mode="multiple"><calcite-chip></calcite-chip><calcite-chip></calcite-chip></calcite-chip-group>`
    );
  });

  it("selection mode single allows one or no chips to be selected", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="single">
      <calcite-chip id="chip-1"></calcite-chip>
      <calcite-chip id="chip-2"></calcite-chip>
      </calcite-chip-group>`
    );
    await page.waitForChanges();

    const element = await page.find("calcite-chip-group");
    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");

    const eventSpy = await element.spyOnEvent("calciteChipGroupSelectChange");
    const eventSpyChip1 = await chip1.spyOnEvent("calciteChipSelect");
    const eventSpyChip2 = await chip2.spyOnEvent("calciteChipSelect");

    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(eventSpyChip1).toHaveReceivedEventTimes(0);
    expect(eventSpyChip2).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("selectedItems")).toEqual([]);

    chip1.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpyChip1).toHaveReceivedEventTimes(1);
    expect(eventSpyChip2).toHaveReceivedEventTimes(0);
    expect(chip1).toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(2);
    expect(eventSpyChip1).toHaveReceivedEventTimes(1);
    expect(eventSpyChip2).toHaveReceivedEventTimes(1);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(3);
    expect(eventSpyChip1).toHaveReceivedEventTimes(1);
    expect(eventSpyChip2).toHaveReceivedEventTimes(2);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toEqual([]);
  });

  it("selection mode single-persist allows one chip to be selected", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="single-persist">
      <calcite-chip selected id="chip-1"></calcite-chip>
      <calcite-chip id="chip-2"></calcite-chip>
      </calcite-chip-group>`
    );
    await page.waitForChanges();

    const element = await page.find("calcite-chip-group");
    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const eventSpy = await element.spyOnEvent("calciteChipGroupSelectChange");
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("selectedItems")).toEqual([]);

    chip1.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(chip1).toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(2);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(3);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);
  });

  it("selection mode multiple allows none, one, or multiple to be selected", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="multiple">
      <calcite-chip id="chip-1"></calcite-chip>
      <calcite-chip id="chip-2"></calcite-chip>
      <calcite-chip id="chip-3"></calcite-chip>
      </calcite-chip-group>`
    );
    await page.waitForChanges();

    const element = await page.find("calcite-chip-group");
    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const chip3 = await page.find("#chip-3");

    const eventSpy = await element.spyOnEvent("calciteChipGroupSelectChange");
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("selectedItems")).toEqual([]);

    await chip1.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(chip1).toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(chip3).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    await chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(2);
    expect(chip1).toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(chip3).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(2);

    await chip3.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(3);
    expect(chip1).toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(chip3).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(3);

    await chip1.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(4);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).toHaveAttribute("selected");
    expect(chip3).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(2);

    await chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(5);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(chip3).toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toHaveLength(1);

    await chip3.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(6);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(chip3).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toEqual([]);
  });

  it("selection mode none (default) allows no chip to be selected", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group>
      <calcite-chip id="chip-1"></calcite-chip>
      <calcite-chip id="chip-2"></calcite-chip>
      </calcite-chip-group>`
    );
    await page.waitForChanges();

    const element = await page.find("calcite-chip-group");
    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const eventSpy = await element.spyOnEvent("calciteChipGroupSelectChange");
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("selectedItems")).toEqual([]);

    await chip1.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toEqual([]);

    await chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toEqual([]);

    await chip2.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEventTimes(0);
    expect(chip1).not.toHaveAttribute("selected");
    expect(chip2).not.toHaveAttribute("selected");
    expect(await element.getProperty("selectedItems")).toEqual([]);
  });

  it("navigation with keyboard works as expected", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="single">
      <calcite-chip id="chip-1"></calcite-chip>
      <calcite-chip id="chip-2"></calcite-chip>
      <calcite-chip id="chip-3"></calcite-chip>
      <calcite-chip id="chip-4"></calcite-chip>
      <calcite-chip id="chip-5"></calcite-chip>
      </calcite-chip-group>`
    );

    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const chip3 = await page.find("#chip-3");
    const chip4 = await page.find("#chip-4");
    const chip5 = await page.find("#chip-5");

    await chip1.click();
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip1.id);

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip2.id);

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip3.id);

    await page.keyboard.press("End");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip5.id);

    await page.keyboard.press("ArrowLeft");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip4.id);

    await page.keyboard.press("Home");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip1.id);

    await page.keyboard.press("ArrowLeft");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip5.id);

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip1.id);
  });

  it("when chips are selectable, and a chip is focused, using tab will focus the close button", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="single">
      <calcite-chip closable id="chip-1"></calcite-chip>
      <calcite-chip closable id="chip-2"></calcite-chip>
      <calcite-chip closable id="chip-3"></calcite-chip>
      <calcite-chip closable id="chip-4"></calcite-chip>
      <calcite-chip closable id="chip-5"></calcite-chip>
      </calcite-chip-group>`
    );

    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const chip3 = await page.find("#chip-3");
    const chip4 = await page.find("#chip-4");

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip1.id);

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    expect(await page.$eval(`#${chip1.id}`, (el) => el.shadowRoot.activeElement.className)).toEqual(CHIPCSS.close);

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip2.id);

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    expect(await page.$eval(`#${chip2.id}`, (el) => el.shadowRoot.activeElement.className)).toEqual(CHIPCSS.close);

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip3.id);

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip4.id);

    await page.keyboard.press("Tab");
    await page.waitForChanges();
    expect(await page.$eval(`#${chip4.id}`, (el) => el.shadowRoot.activeElement.className)).toEqual(CHIPCSS.close);
  });

  it("when closing a chip, focus the previous chip, or if the first chip is closed, focus the 'next first chip'", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-chip-group selection-mode="single">
      <calcite-chip closable id="chip-1"></calcite-chip>
      <calcite-chip closable id="chip-2"></calcite-chip>
      <calcite-chip closable id="chip-3"></calcite-chip>
      <calcite-chip closable id="chip-4"></calcite-chip>
      <calcite-chip closable id="chip-5"></calcite-chip>
      </calcite-chip-group>`
    );

    const chip1 = await page.find("#chip-1");
    const chip2 = await page.find("#chip-2");
    const chip3 = await page.find("#chip-3");
    const chip4 = await page.find("#chip-4");
    const chip5 = await page.find("#chip-5");
    const closeButton1 = await page.find(`#${chip1.id} >>> .${CHIPCSS.close}`);
    const closeButton3 = await page.find(`#${chip3.id} >>> .${CHIPCSS.close}`);
    const closeButton5 = await page.find(`#${chip5.id} >>> .${CHIPCSS.close}`);

    await closeButton3.click();
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip2.id);

    await closeButton1.click();
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip2.id);

    await closeButton5.click();
    await page.waitForChanges();
    expect(await page.evaluate(() => document.activeElement.id)).toEqual(chip4.id);
  });
});
