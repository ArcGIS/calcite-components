import { storiesOf } from "@storybook/html";
import { number, select, withKnobs } from "@storybook/addon-knobs";
import { darkBackground, parseReadme, boolean } from "../../../.storybook/helpers";
import readme from "./readme.md";
const notes = parseReadme(readme);

storiesOf("components|Rating", module)
  .addDecorator(withKnobs)
  .add(
    "Simple",
    () => `
   <calcite-rating
    scale="${select("scale", ["s", "m", "l"], "m")}"
    icon-type="${select("icon type", ["star", "circle"], "star")}"
    precision="${select("precision", ["half", "whole"], "whole")}"
    value="${number("value", 0)}"
    average="${number("average", 0)}"
    count="${number("count", 0)}"
    ${boolean("read-only", false)}
    ${boolean("disabled", false)}
   ></calcite-rating>
  `,
    { notes }
  )
  .add(
    "Dark mode",
    () => `
    <calcite-rating
      theme="dark"
      scale="${select("scale", ["s", "m", "l"], "m")}"
      icon-type="${select("icon type", ["star", "circle"], "star")}"
      precision="${select("precision", ["half", "whole"], "whole")}"
      value="${number("value", 0)}"
      average="${number("average", 0)}"
      count="${number("count", 0)}"
      ${boolean("read-only", false)}
      ${boolean("disabled", false)}
    ></calcite-rating>

  `,
    { notes, backgrounds: darkBackground }
  )
  .add(
    "Wrapped in calcite-label",
    () => `
    <calcite-label layout="${select("input layout", ["default", "inline", "inline-space-between"], "default")}">
    Rate this!
    <calcite-rating
      scale="${select("scale", ["s", "m", "l"], "m")}"
      icon-type="${select("icon type", ["star", "circle"], "star")}"
      precision="${select("precision", ["half", "whole"], "whole")}"
      value="${number("value", 0)}"
      average="${number("average", 0)}"
      count="${number("count", 0)}"
      ${boolean("read-only", false)}
      ${boolean("disabled", false)}
    ></calcite-rating>
   </calcite-label>
  `,
    { notes }
  )
  .add(
    "RTL",
    () => `
    <div dir="rtl">
    <calcite-rating
      scale="${select("scale", ["s", "m", "l"], "m")}"
      icon-type="${select("icon type", ["star", "circle"], "star")}"
      precision="${select("precision", ["half", "whole"], "whole")}"
      value="${number("value", 0)}"
      average="${number("average", 0)}"
      count="${number("count", 0)}"
      ${boolean("read-only", false)}
      ${boolean("disabled", false)}
    ></calcite-rating>
   </div>
  `,
    { notes }
  );
