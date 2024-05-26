import { boolean, iconNames } from "../../../.storybook/helpers";
import { html } from "../../../support/formatting";
import { select, text } from "../../../.storybook/fake-knobs";

export default {
  title: "Components/Menu Item",
};

export const simple = (): string =>
  html`<calcite-menu>
    <calcite-menu-item
      text="${text("text", "Menu item")}"
      src="${text("src", "")}"
      href="${text("href", "")}"
      rel="${text("rel", "")}"
      target="${text("target", "")}"
      label="${text("label", "")}"
      ${boolean("active", false)}
      ${boolean("breadcrumb", false)}
    />
  </calcite-menu>`;

export const iconStart = (): string =>
  html`<calcite-menu>
    <calcite-menu-item
      text="${text("text", "Menu item")}"
      src="${text("src", "")}"
      href="${text("href", "")}"
      rel="${text("rel", "")}"
      target="${text("target", "")}"
      label="${text("label", "")}"
      icon-start="${select("icon-start", iconNames, iconNames[0])}"
      ${boolean("active", false)}
      ${boolean("breadcrumb", false)}
    />
  </calcite-menu>`;

export const iconEnd = (): string =>
  html`<calcite-menu>
    <calcite-menu-item
      text="${text("text", "Menu item")}"
      src="${text("src", "")}"
      href="${text("href", "")}"
      rel="${text("rel", "")}"
      target="${text("target", "")}"
      label="${text("label", "")}"
      icon-end="${select("icon-end", iconNames, iconNames[0])}"
      ${boolean("active", false)}
      ${boolean("breadcrumb", false)}
    />
  </calcite-menu>`;

export const iconsBoth = (): string =>
  html`<calcite-menu>
    <calcite-menu-item
      text="${text("text", "Menu item")}"
      src="${text("src", "")}"
      href="${text("href", "")}"
      rel="${text("rel", "")}"
      target="${text("target", "")}"
      label="${text("label", "")}"
      icon-end="${select("icon-end", iconNames, iconNames[0])}"
      icon-start="${select("icon-start", iconNames, iconNames[0])}"
      ${boolean("active", false)}
      ${boolean("breadcrumb", false)}
    />
  </calcite-menu>`;

export const allIconsAndSubMenu_TestOnly = (): string =>
  html`<calcite-menu>
    <calcite-menu-item text="Example item 1" text-enabled></calcite-menu-item>
    <calcite-menu-item text="Example item 2" text-enabled active></calcite-menu-item>
    <calcite-menu-item text="Example item 3" text-enabled icon-start="layer" icon-end="layer" breadcrumb>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 2" text-enabled>
        <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      </calcite-menu-item>
    </calcite-menu-item>
    <calcite-menu-item text="Example item 4" text-enabled></calcite-menu-item
  ></calcite-menu>`;

export const allIconsAndSubMenuVertical_TestOnly = (): string =>
  html`<calcite-menu layout="vertical">
    <calcite-menu-item text="Example item 1" text-enabled></calcite-menu-item>
    <calcite-menu-item text="Example item 2" text-enabled active></calcite-menu-item>
    <calcite-menu-item text="Example item 3" text-enabled icon-start="layer" icon-end="layer" breadcrumb>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 2" text-enabled>
        <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      </calcite-menu-item>
    </calcite-menu-item>
    <calcite-menu-item text="Example item 4" text-enabled></calcite-menu-item>
  </calcite-menu>`;

export const darkModeRTL_TestOnly = (): string =>
  html`<calcite-menu-item
    text="Menu item"
    active
    dir="rtl"
    class="calcite-mode-dark"
    icon-start="layer"
    icon-end="layer"
  />`;

export const theming_TestOnly = (): string => html`
  <style>
    calcite-menu-item {
      --calcite-menu-item-action-background-color: #e5c287;
      --calcite-menu-item-action-border-color: red;
      --calcite-menu-item-action-text-color: blue;
      --calcite-menu-item-background-color: #898121;
      --calcite-menu-item-text-color: #fda403;
      --calcite-menu-item-border-color: blue;
      --calcite-menu-item-icon-color: #e8751a;
      --calcite-menu-item-sub-menu-border-color: blue;
      --calcite-menu-item-sub-menu-corner-radius: 99px;
    }
    calcite-menu-item[active] {
      --calcite-menu-item-border-color: red;
    }
  </style>
  <calcite-menu layout="vertical">
    <calcite-menu-item text="Example menu item" text-enabled href="https://esri.com">
      <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
    </calcite-menu-item>
  </calcite-menu>
  <br />
  <calcite-menu layout="horizontal">
    <calcite-menu-item text="Example item" text-enabled icon-start="layer" icon-end="layer" breadcrumb open>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      <calcite-menu-item slot="submenu-item" text="Example submenu item 2" text-enabled href="https://esri.com">
        <calcite-menu-item slot="submenu-item" text="Example submenu item 1" text-enabled></calcite-menu-item>
      </calcite-menu-item>
    </calcite-menu-item>
  </calcite-menu>
`;
