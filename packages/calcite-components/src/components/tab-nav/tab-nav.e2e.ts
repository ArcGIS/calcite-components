import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { accessible, defaults, renders, hidden } from "../../tests/commonTests";
import { html } from "../../../support/formatting";
import { CSS } from "./resources";

describe("calcite-tab-nav", () => {
  describe("defaults", () => {
    defaults("calcite-tab-nav", [{ propertyName: "scale", defaultValue: "m" }]);
  });

  describe("renders", () => {
    renders("calcite-tab-nav", { display: "flex" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-tab-nav");
  });

  describe("accessible: checked", () => {
    accessible("calcite-tab-nav");
  });

  it("emits on user interaction", async () => {
    const page = await newE2EPage();
    await page.setContent(
      html`<calcite-tab-nav>
        <calcite-tab-title>Tab 1 Title</calcite-tab-title>
      </calcite-tab-nav>`,
    );
    const activeEventSpy = await page.spyOnEvent("calciteTabChange");
    const firstTabTitle = await page.find("calcite-tab-title");

    firstTabTitle.setProperty("selected", true);
    await page.waitForChanges();
    expect(activeEventSpy).toHaveReceivedEventTimes(0);

    await firstTabTitle.click();
    await page.waitForChanges();
    expect(activeEventSpy).toHaveReceivedEventTimes(1);

    await page.keyboard.press("Enter");
    await page.waitForChanges();
    expect(activeEventSpy).toHaveReceivedEventTimes(2);
  });

  describe("selected indicator", () => {
    const tabTitles = html`
      <calcite-tab-title selected>Tab 1 Title</calcite-tab-title>
      <calcite-tab-title>Tab 2 Title</calcite-tab-title>
      <calcite-tab-title>Tab 3 Title</calcite-tab-title>
      <calcite-tab-title>Tab 4 Title</calcite-tab-title>
    `;

    it("has its active indicator positioned from left if LTR", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-tab-nav>${tabTitles}</calcite-tab-nav>`);
      const element = await page.find("calcite-tab-nav >>> .tab-nav-active-indicator");
      const style = await element.getComputedStyle();
      expect(style["left"]).toBe("0px");
      expect(style["right"]).not.toBe("0px");
      expect(style["width"]).not.toBe("0px");
    });

    it("has its active indicator positioned from right if RTL", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-tab-nav dir='rtl'>${tabTitles}</calcite-tab-nav>`);
      const element = await page.find("calcite-tab-nav >>> .tab-nav-active-indicator");
      const style = await element.getComputedStyle();
      expect(style["right"]).toBe("0px");
      expect(style["left"]).not.toBe("0px");
      expect(style["width"]).not.toBe("0px");
    });

    it("updates position when made visible", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-tab-nav hidden>${tabTitles}</calcite-tab-nav>`);
      const tabNav = await page.find("calcite-tab-nav");
      const indicator = await page.find("calcite-tab-nav >>> .tab-nav-active-indicator");

      tabNav.setProperty("hidden", false);
      await page.waitForChanges();

      const style = await indicator.getComputedStyle();
      expect(style["width"]).not.toBe("0px");
    });
  });

  it("focuses on keyboard interaction", async () => {
    const page = await newE2EPage();
    await page.setContent(
      html`<calcite-tab-nav>
        <calcite-tab-title id="tab1">Tab 1 Title</calcite-tab-title>
        <calcite-tab-title id="tab2">Tab 2 Title</calcite-tab-title>
        <calcite-tab-title id="tab3">Tab 3 Title</calcite-tab-title>
      </calcite-tab-nav>`,
    );

    const tab1 = await page.find("#tab1");
    await tab1.focus();
    expect(await page.evaluate(() => document.activeElement.id)).toBe("tab1");

    await page.keyboard.press("ArrowRight");
    expect(await page.evaluate(() => document.activeElement.id)).toBe("tab2");

    await page.keyboard.press("ArrowLeft");
    expect(await page.evaluate(() => document.activeElement.id)).toBe("tab1");

    await page.keyboard.press("End");
    expect(await page.evaluate(() => document.activeElement.id)).toBe("tab3");

    await page.keyboard.press("Home");
    expect(await page.evaluate(() => document.activeElement.id)).toBe("tab1");
  });

  const inlineTabsWithVariedTitleLength = html`
    <calcite-tabs layout="inline" style="margin: 75px; width: 375px">
      <calcite-tab-nav slot="title-group" id="testSubjectNav">
        <calcite-tab-title selected icon-start="tabbed-view" icon-end="pen" closable> Tab 1 Title </calcite-tab-title>
        <calcite-tab-title icon-start="tabbed-view">Tab 2 Title</calcite-tab-title>
        <calcite-tab-title>An Ultramarathon of a Tab Title, why not.</calcite-tab-title>
        <calcite-tab-title closable>Tab 4 Title</calcite-tab-title>
        <calcite-tab-title>Tab 5 Title</calcite-tab-title>
        <calcite-tab-title>Tab 6 Title</calcite-tab-title>
      </calcite-tab-nav>
      <calcite-tab selected>Tab 1 Content</calcite-tab>
      <calcite-tab>Tab 2 Content</calcite-tab>
      <calcite-tab>Tab 3 Content</calcite-tab>
      <calcite-tab>Tab 4 Content</calcite-tab>
      <calcite-tab>Tab 5 Content</calcite-tab>
      <calcite-tab>Tab 6 Content</calcite-tab>
    </calcite-tabs>
  `;

  describe("responsive tabs for inline layout", () => {
    const overflowScenarios: string[] = ["end", "start", "both"];
    let page: E2EPage;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(inlineTabsWithVariedTitleLength);
    });

    it("should overflow tab-titles that don't fit within the bounds of tab-nav", async () => {
      const { tabTitlesTotalWidth, tabNavWidth } = await page.evaluate(() => {
        const tabNav = document.getElementById("testSubjectNav") as HTMLCalciteTabNavElement;
        const tabTitles = Array.from(document.querySelectorAll("calcite-tab-title")) as HTMLCalciteTabTitleElement[];

        const tabNavWidth = tabNav.offsetWidth;
        const tabTitlesTotalWidth = tabTitles.reduce((sum, tabTitle) => {
          return sum + tabTitle.offsetWidth;
        }, 0);

        return { tabTitlesTotalWidth, tabNavWidth };
      });

      expect(tabTitlesTotalWidth).toBeGreaterThan(tabNavWidth);
    });

    overflowScenarios.forEach(async (overflowScenario) => {
      if (overflowScenario === "end") {
        it("should show action buttons with correct chevrons for overflow to the end", async () => {
          const isOverflowingEnd = await page.evaluate(() => {
            const tabNav = document.getElementById("testSubjectNav") as HTMLCalciteTabNavElement;
            const tabTitles = Array.from(document.querySelectorAll("calcite-tab-title"));

            let tabNavWidth: number;
            if (tabNav) {
              tabNav.scrollLeft = 0;
              tabNavWidth = tabNav.clientWidth;
            }

            const visibleTabTitles = tabTitles.filter((tabTitle) => {
              const tabTitleRect = tabTitle.getBoundingClientRect();
              return tabTitleRect.left >= 0 && tabTitleRect.right <= tabNavWidth;
            });
            const firstEndOverflowItem = tabTitles[visibleTabTitles.length];
            const isOverflowingEnd = firstEndOverflowItem.getBoundingClientRect().right > tabNavWidth;

            return isOverflowingEnd;
          });
          expect(isOverflowingEnd).toBe(true);

          expect(await page.find(`#testSubjectNav >>> .${CSS.arrowEnd}`)).not.toBe(null);
          expect(await page.find(`#testSubjectNav >>> .${CSS.arrowStart}`)).toBe(null);
        });
      } else if (overflowScenario === "start") {
        it("should show action buttons with correct chevrons for overflow to the start", async () => {
          const isOverflowingStart = await page.evaluate(async () => {
            const tabTitles = Array.from(document.querySelectorAll("calcite-tab-title"));
            if (tabTitles && tabTitles.length > 5) {
              tabTitles[5].scrollIntoView();
            }
            const isOverflowingStart = tabTitles[0].getBoundingClientRect().right <= 0;

            return isOverflowingStart;
          });

          expect(isOverflowingStart).toBe(true);
          expect(await page.find(`#testSubjectNav >>> .${CSS.arrowStart}`)).toBeDefined();
        });
      }
    });
  });
});
