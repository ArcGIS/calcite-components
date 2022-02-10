import { select, text, boolean } from "@storybook/addon-knobs";

import {
  Attribute,
  filterComponentAttributes,
  Attributes,
  createComponentHTML as create,
  themesDarkDefault
} from "../../../.storybook/utils";
import readme from "./readme.md";
import { html } from "../../tests/utils";
import { locales } from "../../utils/locale";
import { createSteps, setKnobs, setTheme, stepStory } from "../../../.storybook/helpers";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { scale } = ATTRIBUTES;

export default {
  title: "Components/Controls/DatePicker",

  parameters: {
    notes: readme
  }
};

const createAttributes: (options?: { exceptions: string[] }) => Attributes = ({ exceptions } = { exceptions: [] }) => {
  return filterComponentAttributes(
    [
      {
        name: "dir",
        commit(): Attribute {
          this.value = text("dir", "");
          delete this.build;
          return this;
        }
      },
      {
        name: "end",
        commit(): Attribute {
          this.value = text("end", "");
          delete this.build;
          return this;
        }
      },
      {
        name: "intl-next-month",
        commit(): Attribute {
          this.value = text("intl-next-month", "Next month");
          delete this.build;
          return this;
        }
      },
      {
        name: "intl-prev-month",
        commit(): Attribute {
          this.value = text("intl-prev-month", "Previous month");
          delete this.build;
          return this;
        }
      },
      {
        name: "locale",
        commit(): Attribute {
          this.value = select("locale", locales, "en");
          delete this.build;
          return this;
        }
      },
      {
        name: "max",
        commit(): Attribute {
          this.value = text("max", "2023-12-18");
          delete this.build;
          return this;
        }
      },
      {
        name: "min",
        commit(): Attribute {
          this.value = text("min", "2020-12-03");
          delete this.build;
          return this;
        }
      },
      {
        name: "next-month-label",
        commit(): Attribute {
          this.value = text("next-month-label", "");
          delete this.build;
          return this;
        }
      },
      {
        name: "prev-month-label",
        commit(): Attribute {
          this.value = text("prev-month-label", "");
          delete this.build;
          return this;
        }
      },
      {
        name: "range",
        commit(): Attribute {
          this.value = boolean("range", false);
          delete this.build;
          return this;
        }
      },
      {
        name: "scale",
        commit(): Attribute {
          this.value = select("scale", scale.values, scale.defaultValue);
          delete this.build;
          return this;
        }
      },
      {
        name: "start",
        commit(): Attribute {
          this.value = text("start", "");
          delete this.build;
          return this;
        }
      },
      {
        name: "value",
        commit(): Attribute {
          this.value = text("value", "2020-12-12");
          delete this.build;
          return this;
        }
      }
    ],
    exceptions
  );
};

const yearElSelector = `document.querySelector("calcite-date-picker").shadowRoot.querySelector("calcite-date-picker-month-header").shadowRoot.querySelector("input.year")`;

export const Default = stepStory(
  (): string => html`<div style="width: 400px">${create("calcite-date-picker", createAttributes())}</div>`,

  createSteps("calcite-date-picker")
    .snapshot("Default")

    .executeScript(
      setKnobs({
        story: "components-controls-datepicker--default",
        knobs: [{ name: "dir", value: "rtl" }]
      })
    )
    .snapshot("Default RTL")

    .executeScript(
      setKnobs({
        story: "components-controls-datepicker--default",
        knobs: []
      })
    )
    .executeScript(setTheme("dark"))
    .snapshot("Dark")

    .executeScript(setTheme("light"))
    .executeScript(
      setKnobs({
        story: "components-controls-datepicker--default",
        knobs: [
          { name: "end", value: "2020-12-16" },
          { name: "min", value: "2016-08-09" },
          { name: "range", value: "true" },
          { name: "start", value: "2020-12-12" }
        ]
      })
    )
    .snapshot("Range")

    .executeScript(
      setKnobs({
        story: "components-controls-datepicker--default",
        knobs: [
          { name: "dir", value: "rtl" },
          { name: "end", value: "2020-12-16" },
          { name: "min", value: "2016-08-09" },
          { name: "range", value: "true" },
          { name: "start", value: "2020-12-12" }
        ]
      })
    )
    .snapshot("Range RTL")

    .executeScript(
      setKnobs({
        story: "components-controls-datepicker--default",
        knobs: [{ name: "value", value: "2000-02-28" }]
      })
    )
    .keys(yearElSelector, "Backspace")
    .keys(yearElSelector, "4")
    .snapshot("Changing to leap year immediately updates calendar to show February 29th")
);
