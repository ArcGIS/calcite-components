import { b as s } from "./utils.js";
import { h as l } from "./formatting.js";
import { d as c, m as i } from "./floating-ui.js";
import { d as r, e as m, c as o, f as p } from "./locale.js";
import { A as d } from "./resources14.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const {
  scale: n
} = d, y = {
  title: "Components/Controls/Time/Time Picker",
  args: {
    disabled: !1,
    hidden: !1,
    lang: r,
    name: "simple",
    numberingSystem: m,
    placement: c,
    scale: n.defaultValue,
    step: 1e-3,
    value: "10:37:09.023"
  },
  argTypes: {
    lang: {
      options: o,
      control: {
        type: "select"
      }
    },
    numberingSystem: {
      options: p,
      control: {
        type: "select"
      }
    },
    placement: {
      options: i,
      control: {
        type: "select"
      }
    },
    scale: {
      options: n.values,
      control: {
        type: "select"
      }
    }
  }
}, a = (e) => l`
  <calcite-time-picker
    ${s("disabled", e.disabled)}
    ${s("hidden", e.hidden)}
    lang="${e.lang}"
    name="${e.name}"
    numbering-system="${e.numberingSystem}"
    placement="${e.placement}"
    scale="${e.scale}"
    step="${e.step}"
    value="${e.value}"
  >
  </calcite-time-picker>
`, t = () => l`
  <calcite-time-picker lang="ko" value="10:37" step="1"> </calcite-time-picker>
  <calcite-time-picker lang="ko" value="14:37" step="1"> </calcite-time-picker>
`;
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: TimePickerStoryArgs): string => html\`
  <calcite-time-picker
    \${boolean("disabled", args.disabled)}
    \${boolean("hidden", args.hidden)}
    lang="\${args.lang}"
    name="\${args.name}"
    numbering-system="\${args.numberingSystem}"
    placement="\${args.placement}"
    scale="\${args.scale}"
    step="\${args.step}"
    value="\${args.value}"
  >
  </calcite-time-picker>
\``,
      ...a.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-time-picker lang="ko" value="10:37" step="1"> </calcite-time-picker>
  <calcite-time-picker lang="ko" value="14:37" step="1"> </calcite-time-picker>
\``,
      ...t.parameters?.docs?.source
    }
  }
};
const f = ["simple", "koreanLocale_TestOnly"];
export {
  f as __namedExportsOrder,
  y as default,
  t as koreanLocale_TestOnly,
  a as simple
};
