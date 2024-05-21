import { select, text } from "../../../.storybook/fake-knobs";
import { boolean, iconNames } from "../../../.storybook/helpers";
import { modesDarkDefault } from "../../../.storybook/utils";
import { html } from "../../../support/formatting";

export default {
  title: "Components/Controls/Radio/Segmented Control",
};

export const simple = (): string => html`
  <calcite-segmented-control
    layout="${select("layout", ["horizontal", "vertical"], "horizontal")}"
    appearance="${select("appearance", ["solid", "outline", "outline-fill"], "solid")}"
    scale="${select("scale", ["s", "m", "l"], "m")}"
    width="${select("width", ["auto", "full"], "auto")}"
    ${boolean("disabled", false)}
    status="${select("status", ["idle", "invalid", "valid"], "idle")}"
    validation-icon="${select("validation-icon", ["", ...iconNames], "")}"
    validation-message="${text("validation-message", "")}"
  >
    <calcite-segmented-control-item value="react" checked>React</calcite-segmented-control-item>
    <calcite-segmented-control-item value="ember">Ember</calcite-segmented-control-item>
    <calcite-segmented-control-item value="angular">Angular</calcite-segmented-control-item>
    <calcite-segmented-control-item value="vue">Vue</calcite-segmented-control-item>
  </calcite-segmented-control>
`;

export const fullWidthWithIcons = (): string => html`
  <div style="width:33vw;">
    <calcite-label scale="${select("scale", ["s", "m", "l"], "m")}">
      My great segmented control
      <calcite-segmented-control
        layout="${select("layout", ["horizontal", "vertical"], "horizontal")}"
        appearance="${select("appearance", ["solid", "outline", "outline-fill"], "solid")}"
        width="${select("width", ["auto", "full"], "full")}"
        ${boolean("disabled", false)}
        status="${select("status", ["idle", "invalid", "valid"], "idle")}"
        validation-icon="${select("validation-icon", ["", ...iconNames], "")}"
        validation-message="${text("validation-message", "")}"
      >
        <calcite-segmented-control-item icon-start="car" value="car" checked>Car</calcite-segmented-control-item>
        <calcite-segmented-control-item icon-start="plane" value="plane">Plane</calcite-segmented-control-item>
        <calcite-segmented-control-item icon-start="biking" value="bicycle">Bicycle</calcite-segmented-control-item>
      </calcite-segmented-control>
    </calcite-label>
  </div>
`;

export const darkModeRTL_TestOnly = (): string => html`
  <calcite-segmented-control
    class="calcite-mode-dark"
    dir="rtl"
    validation-message="This should not appear because the status is not 'invalid'"
  >
    <calcite-segmented-control-item value="react" checked>React</calcite-segmented-control-item>
    <calcite-segmented-control-item value="ember">Ember</calcite-segmented-control-item>
    <calcite-segmented-control-item value="angular">Angular</calcite-segmented-control-item>
    <calcite-segmented-control-item value="vue">Vue</calcite-segmented-control-item>
  </calcite-segmented-control>
`;

darkModeRTL_TestOnly.parameters = { themes: modesDarkDefault };

export const disabled_TestOnly = (): string =>
  html`<calcite-segmented-control disabled>
    <calcite-segmented-control-item value="react" checked>React</calcite-segmented-control-item>
    <calcite-segmented-control-item value="ember">Ember</calcite-segmented-control-item>
    <calcite-segmented-control-item value="angular">Angular</calcite-segmented-control-item>
    <calcite-segmented-control-item value="vue">Vue</calcite-segmented-control-item>
  </calcite-segmented-control>`;

export const WithIconStartAndEnd = (): string =>
  html` <calcite-segmented-control scale="s">
    <calcite-segmented-control-item icon-start="car" icon-end="car" value="car" checked
      >Car</calcite-segmented-control-item
    >
    <calcite-segmented-control-item icon-start="plane" icon-end="plane" value="plane"
      >Plane</calcite-segmented-control-item
    >
    <calcite-segmented-control-item icon-start="biking" icon-end="biking" value="bicycle"
      >Bicycle</calcite-segmented-control-item
    >
    <calcite-segmented-control-item value="nothing">Nothing</calcite-segmented-control-item>
  </calcite-segmented-control>`;

export const validationMessage_TestOnly = (): string => html`
  <style>
    .container {
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 200px;
      gap: 20px;
    }
  </style>
  <div class="container">
    <calcite-segmented-control
      name="validation"
      required
      scale="s"
      status="invalid"
      validation-icon
      validation-message="Please select an item."
    >
      <calcite-segmented-control-item scale="s" value="react" checked>React</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="s" value="ember">Ember</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="s" value="angular">Angular</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="s" value="vue">Vue</calcite-segmented-control-item>
    </calcite-segmented-control>

    <calcite-segmented-control
      name="validation"
      required
      scale="m"
      status="invalid"
      validation-icon
      validation-message="Please select an item."
    >
      <calcite-segmented-control-item scale="m" value="react" checked>React</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="m" value="ember">Ember</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="m" value="angular">Angular</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="m" value="vue">Vue</calcite-segmented-control-item>
    </calcite-segmented-control>

    <calcite-segmented-control
      name="validation"
      required
      scale="l"
      status="invalid"
      validation-icon
      validation-message="Please select an item."
    >
      <calcite-segmented-control-item scale="l" value="react" checked>React</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="l" value="ember">Ember</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="l" value="angular">Angular</calcite-segmented-control-item>
      <calcite-segmented-control-item scale="l" value="vue">Vue</calcite-segmented-control-item>
    </calcite-segmented-control>
  </div>
`;

export const iconOnly = (): string => html`
  <h1>small</h1>
  <calcite-segmented-control scale="s">
    <calcite-segmented-control-item icon-start="banana" value="react" checked></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-start="gear" value="ember"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-start="3d-glasses" value="angular"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-start="effects" value="vue"></calcite-segmented-control-item>
  </calcite-segmented-control>

  <h1>medium</h1>
  <calcite-segmented-control scale="m">
    <calcite-segmented-control-item icon-end="banana" value="react" checked></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="gear" value="ember"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="3d-glasses" value="angular"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="effects" value="vue"></calcite-segmented-control-item>
  </calcite-segmented-control>

  <h1>medium</h1>
  <calcite-segmented-control scale="l">
    <calcite-segmented-control-item icon-end="banana" value="react" checked></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="gear" value="ember"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="3d-glasses" value="angular"></calcite-segmented-control-item>
    <calcite-segmented-control-item icon-end="effects" value="vue"></calcite-segmented-control-item>
  </calcite-segmented-control>
`;
