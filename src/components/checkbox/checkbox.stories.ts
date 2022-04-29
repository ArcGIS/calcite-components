import { select, text } from "@storybook/addon-knobs";
import { boolean } from "../../../.storybook/helpers";
import { themesDarkDefault } from "../../../.storybook/utils";
import { html } from "../../../support/formatting";
import readme from "./readme.md";

import {
  Attribute,
  filterComponentAttributes,
  Attributes,
  createComponentHTML as create
} from "../../../.storybook/utils";
import { createSteps, stepStory } from "../../../.storybook/helpers";

const createAttributes: (options?: { exceptions: string[] }) => Attributes = ({ exceptions } = { exceptions: [] }) => {
  return filterComponentAttributes(
    [
      {
        name: "checked",
        commit(): Attribute {
          this.value = boolean("checked", true);
          delete this.build;
          return this;
        }
      }
    ],
    exceptions
  );
};

export default {
  title: "Components/Controls/Checkbox",

  parameters: {
    notes: readme
  }
};

export const Simple = (): string => html`
  <calcite-label layout="inline">
    <calcite-checkbox
      ${boolean("checked", true)}
      ${boolean("disabled", false)}
      ${boolean("indeterminate", false)}
      scale="${select("scale", ["s", "m", "l"], "m")}"
    ></calcite-checkbox>
    ${text("label", "Checkbox")}
  </calcite-label>
`;
export const DarkMode = (): string => html`
  <calcite-label layout="inline" class="calcite-theme-dark">
    <calcite-checkbox
      ${boolean("checked", true)}
      ${boolean("disabled", false)}
      ${boolean("indeterminate", false)}
      scale="${select("scale", ["s", "m", "l"], "m")}"
    ></calcite-checkbox>
    ${text("label", "Checkbox")}
  </calcite-label>
`;

DarkMode.storyName = "Dark mode";
DarkMode.parameters = { themes: themesDarkDefault };

export const RTL = (): string => html`
  <calcite-label layout="inline" dir="rtl">
    <calcite-checkbox
      ${boolean("checked", true)}
      ${boolean("disabled", false)}
      ${boolean("indeterminate", false)}
      scale="${select("scale", ["s", "m", "l"], "m")}"
    ></calcite-checkbox>
    ${text("label", "Checkbox")}
  </calcite-label>
`;

export const TestFocusRing = stepStory(
  (): string => html`${create("calcite-checkbox", createAttributes())}`,
  createSteps("calcite-checkbox").keys("calcite-checkbox", ["Tab", "Enter"])
);

export const disabled = (): string => html`<calcite-checkbox checked disabled></calcite-checkbox>`;
