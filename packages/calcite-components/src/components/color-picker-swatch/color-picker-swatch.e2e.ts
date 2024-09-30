import { newE2EPage } from "../../tests/utils/e2e-setup";
import { accessible, defaults, reflects, renders, hidden } from "../../tests/commonTests";
import { CSS } from "./resources";

describe("calcite-color-picker-swatch", () => {
  describe("renders", () => {
    renders("calcite-color-picker-swatch", { display: "inline-flex" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-color-picker-swatch");
  });

  describe("accessible", () => {
    accessible("calcite-color-picker-swatch");
    accessible(`<calcite-color-picker-swatch active></calcite-color-picker-swatch>`);
    accessible(`<calcite-color-picker-swatch color='#c0ffee'></calcite-color-picker-swatch>`);
    accessible(`<calcite-color-picker-swatch active color='#c0ffee'></calcite-color-picker-swatch>`);
  });

  describe("defaults", () => {
    defaults("calcite-color-picker-swatch", [
      {
        propertyName: "active",
        defaultValue: false,
      },
    ]);
  });

  describe("reflects", () => {
    reflects("calcite-color-picker-swatch", [
      {
        propertyName: "active",
        value: true,
      },
    ]);
  });

  describe("accepts CSS color strings", () => {
    const fillSwatchPartSelector = `.${CSS.swatch} rect:nth-child(4)`;

    it("supports rgb", async () => {
      const page = await newE2EPage(
        "<calcite-color-picker-swatch color='rgb(255, 255, 255)'></calcite-color-picker-swatch>",
      );
      const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
      const style = await swatch.getComputedStyle();

      expect(style["fill"]).toBe("rgb(255, 255, 255)");
    });

    it("supports keywords", async () => {
      const page = await newE2EPage("<calcite-color-picker-swatch color='chartreuse'></calcite-color-picker-swatch>");
      const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
      const style = await swatch.getComputedStyle();

      expect(style["fill"]).toBe("rgb(127, 255, 0)");
    });

    it("supports hsl", async () => {
      const page = await newE2EPage(
        "<calcite-color-picker-swatch color='hsl(120, 100%, 97%)'></calcite-color-picker-swatch>",
      );
      const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
      const style = await swatch.getComputedStyle();

      expect(style["fill"]).toBe("rgb(240, 255, 240)");
    });

    it("supports hex", async () => {
      const page = await newE2EPage("<calcite-color-picker-swatch color='#ff8200'></calcite-color-picker-swatch>");
      const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
      const style = await swatch.getComputedStyle();

      expect(style["fill"]).toBe("rgb(255, 130, 0)");
    });

    describe("with alpha values", () => {
      const fillSwatchPartSelector = `.${CSS.swatch} rect:nth-child(5)`;

      it("supports rgba", async () => {
        const page = await newE2EPage(
          "<calcite-color-picker-swatch color='rgba(255, 255, 255, 0.5)'></calcite-color-picker-swatch>",
        );
        const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
        const style = await swatch.getComputedStyle();

        expect(style["fill"]).toBe("rgba(255, 255, 255, 0.5)");
      });

      it("supports hsla", async () => {
        const page = await newE2EPage(
          "<calcite-color-picker-swatch color='hsla(120, 100%, 97%, 0.5)'></calcite-color-picker-swatch>",
        );
        const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
        const style = await swatch.getComputedStyle();

        expect(style["fill"]).toBe("rgba(240, 255, 240, 0.5)");
      });

      it("supports hexa", async () => {
        const page = await newE2EPage("<calcite-color-picker-swatch color='#ff820080'></calcite-color-picker-swatch>");
        const swatch = await page.find(`calcite-color-picker-swatch >>> ${fillSwatchPartSelector}`);
        const style = await swatch.getComputedStyle();

        expect(style["fill"]).toBe("rgba(255, 130, 0, 0.5)");
      });
    });
  });
});
