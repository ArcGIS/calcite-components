import { newSpecPage } from "@stencil/core/testing";
import { CSS } from "../action/resources";
import { Action } from "./action";

describe("calcite-action", () => {
  //check defaults
  describe("defaults", () => {
    const defaults = [
      ["active", null],
      ["appearance", "solid"],
      ["compact", null],
      ["disabled", null],
      ["indicator", null],
      ["loading", null],
      ["scale", "m"],
      ["textEnabled", null],
    ];

    describe.each(defaults)("With params %s, %s", (propertyName, defaultValue) => {
      it(`${propertyName} should be ${defaultValue}`, async () => {
        const page = await newSpecPage({
          components: [Action],
          html: `<calcite-action></action>`,
        });
        // expect(page.body).toEqualHtml("");
        expect(page.body.querySelector("calcite-action").getAttribute(`${propertyName}`)).toBe(defaultValue);
      });
    });
  });

  it("should have icon container with icon prop", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action icon="hamburger"></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(".icon-container")).not.toBeNull();
  });

  it("should have icon container with calcite-icon", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action><calcite-icon icon="hamburger" scale="s"></calcite-icon></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(".icon-container")).not.toBeNull();
  });

  it("should have icon container with calcite-icon: after delay", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action></calcite-action>`,
    });

    await jest.setTimeout(1000);

    page.body.innerHTML = `<calcite-action><calcite-icon icon="hamburger" scale="s"></calcite-icon></calcite-action>`;

    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector(".icon-container")).not.toBeNull();
  });

  it("should have icon container with svg", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action><svg></svg></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(".icon-container")).not.toBeNull();
  });

  it("should not have icon container if no icon present", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(".icon-container")).toBeNull();
  });

  it("should have icon container if loading", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action loading></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(".icon-container")).not.toBeNull();
  });
  it("should use text prop for a11y attributes when text is not enabled", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action text="hello world"></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(CSS.button).getAttribute("aria-label")).toBe(`hello world`);
  });

  it("should have label", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action text="hello world" label="hi"></calcite-action>`,
    });

    expect(page.root.shadowRoot.querySelector(CSS.button).getAttribute("aria-label")).toBe("hi");
  });

  it("should have appearance=solid", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action text="hello world"></calcite-action>`,
    });

    expect(page.body.querySelector("calcite-action").getAttribute("appearance")).toBe("solid");
  });

  it("should have a tooltip", async () => {
    const page = await newSpecPage({
      components: [Action],
      html: `<calcite-action text="hello world"><calcite-tooltip slot="tooltip">Hello World!</calcite-tooltip></calcite-action>`,
    });

    const tooltip = page.root.shadowRoot.querySelector("calcite-tooltip");

    expect(tooltip).toBeDefined();
  });
});
