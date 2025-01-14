import { i } from "./helpers.js";
import { b as m, m as O } from "./utils.js";
import { h as e } from "./formatting.js";
import { A as h } from "./resources14.js";
import { m as v } from "./floating-ui.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const {
  appearance: u,
  kind: w,
  scale: b,
  width: y,
  iconType: g
} = h, P = {
  title: "Components/Buttons/Split Button",
  args: {
    appearance: u.defaultValue,
    kind: w.defaultValue,
    scale: b.defaultValue,
    width: y.defaultValue,
    loading: !1,
    disabled: !1,
    placement: "bottom-end",
    primaryIconStart: i[0],
    primaryText: "Primary Option",
    primaryLabel: "Primary Option",
    dropdownLabel: "Additional Options",
    dropdownIconType: g.defaultValue
  },
  argTypes: {
    appearance: {
      options: u.values,
      control: {
        type: "select"
      }
    },
    kind: {
      options: w.values.filter((t) => t !== "info" && t !== "warning" && t !== "success"),
      control: {
        type: "select"
      }
    },
    scale: {
      options: b.values,
      control: {
        type: "select"
      }
    },
    width: {
      options: y.values,
      control: {
        type: "select"
      }
    },
    placement: {
      options: v,
      control: {
        type: "select"
      }
    },
    primaryIconStart: {
      options: i,
      control: {
        type: "select"
      }
    },
    dropdownIconType: {
      options: g.values.filter((t) => t !== "plus-minus"),
      control: {
        type: "select"
      }
    }
  }
}, o = (t) => e`
  <div style="width:70vw;">
    <calcite-split-button
      active
      appearance="${t.appearance}"
      kind="${t.kind}"
      scale="${t.scale}"
      width="${t.width}"
      ${m("loading", t.loading)}
      ${m("disabled", t.disabled)}
      placement="${t.placement}"
      primary-icon-start="${t.primaryIconStart}"
      primary-text="${t.primaryText}"
      primary-label="${t.primaryLabel}"
      dropdown-label="${t.dropdownLabel}"
      dropdown-icon-type="${t.dropdownIconType}"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`, a = () => e`
  <div style="width:70vw;">
    <calcite-split-button primary-text="auto" width="auto">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
    <calcite-split-button primary-text="half width" width="half">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
    <calcite-split-button primary-text="full width" width="full">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`, c = () => e`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-end="${i[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`, r = () => e`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-start="${i[0]}"
      primary-icon-end="${i[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`, d = () => e`
  <div style="width:70vw;">
    <calcite-split-button
      active
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      placement="top-start"
      primary-icon-start="${i[0]}"
      primary-icon-end="${i[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`, n = () => e`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-start="${i[0]}"
      primary-text="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
      class="calcite-mode-dark"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
`;
n.parameters = {
  themes: O
};
const l = () => e`
  <calcite-split-button disabled>
    <calcite-dropdown-group selection-mode="none">
      <calcite-dropdown-item>Option 2</calcite-dropdown-item>
      <calcite-dropdown-item>Option 3</calcite-dropdown-item>
      <calcite-dropdown-item>Option 4</calcite-dropdown-item>
    </calcite-dropdown-group>
  </calcite-split-button>
  <br />
  <calcite-split-button disabled loading>
    <calcite-dropdown-group selection-mode="none">
      <calcite-dropdown-item>Option 2</calcite-dropdown-item>
      <calcite-dropdown-item>Option 3</calcite-dropdown-item>
      <calcite-dropdown-item>Option 4</calcite-dropdown-item>
    </calcite-dropdown-group>
  </calcite-split-button>
`, p = () => e`
  <calcite-split-button primary-text="outline+brand" appearance="outline" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="outline+danger" appearance="outline" kind="danger"></calcite-split-button>
  <calcite-split-button primary-text="outline+inverse" appearance="outline" kind="inverse"></calcite-split-button>
  <calcite-split-button primary-text="outline+neutral" appearance="outline" kind="neutral"></calcite-split-button>

  <calcite-split-button primary-text="outline-fill+brand" appearance="outline-fill" kind="brand"></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+danger"
    appearance="outline-fill"
    kind="danger"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+inverse"
    appearance="outline-fill"
    kind="inverse"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+neutral"
    appearance="outline-fill"
    kind="neutral"
  ></calcite-split-button>

  <calcite-split-button primary-text="solid+brand" appearance="solid" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="solid+danger" appearance="solid" kind="danger"></calcite-split-button>
  <calcite-split-button primary-text="solid+inverse" appearance="solid" kind="inverse"></calcite-split-button>
  <calcite-split-button primary-text="solid+neutral" appearance="solid" kind="neutral"></calcite-split-button>

  <calcite-split-button primary-text="transparent+brand" appearance="transparent" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="transparent+danger" appearance="transparent" kind="danger"></calcite-split-button>
  <calcite-split-button
    primary-text="transparent+inverse"
    appearance="transparent"
    kind="inverse"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="transparent+neutral"
    appearance="transparent"
    kind="neutral"
  ></calcite-split-button>
`, s = () => e`<calcite-button loading disabled>Test</calcite-button>`;
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: SplitButtonStoryArgs): string => html\`
  <div style="width:70vw;">
    <calcite-split-button
      active
      appearance="\${args.appearance}"
      kind="\${args.kind}"
      scale="\${args.scale}"
      width="\${args.width}"
      \${boolean("loading", args.loading)}
      \${boolean("disabled", args.disabled)}
      placement="\${args.placement}"
      primary-icon-start="\${args.primaryIconStart}"
      primary-text="\${args.primaryText}"
      primary-label="\${args.primaryLabel}"
      dropdown-label="\${args.dropdownLabel}"
      dropdown-icon-type="\${args.dropdownIconType}"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...o.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width:70vw;">
    <calcite-split-button primary-text="auto" width="auto">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
    <calcite-split-button primary-text="half width" width="half">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
    <calcite-split-button primary-text="full width" width="full">
      <calcite-dropdown-group selection-mode="none" group-title="Veggies">
        <calcite-dropdown-item>Pea</calcite-dropdown-item>
        <calcite-dropdown-item>Parsnip</calcite-dropdown-item>
        <calcite-dropdown-item>Radish</calcite-dropdown-item>
        <calcite-dropdown-item>Tomato</calcite-dropdown-item>
        <calcite-dropdown-item>Rutabaga</calcite-dropdown-item>
        <calcite-dropdown-item>Bean</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...a.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-end="\${iconNames[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...c.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-start="\${iconNames[0]}"
      primary-icon-end="\${iconNames[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...r.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width:70vw;">
    <calcite-split-button
      active
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      placement="top-start"
      primary-icon-start="\${iconNames[0]}"
      primary-icon-end="\${iconNames[0]}"
      primary-text="Primary Option"
      primary-label="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...d.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width:70vw;">
    <calcite-split-button
      appearance="solid"
      kind="brand"
      scale="m"
      width="auto"
      primary-icon-start="\${iconNames[0]}"
      primary-text="Primary Option"
      dropdown-label="Additional Options"
      dropdown-icon-type="chevron"
      class="calcite-mode-dark"
    >
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item>Option 2</calcite-dropdown-item>
        <calcite-dropdown-item>Option 3</calcite-dropdown-item>
        <calcite-dropdown-item>Option 4</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-split-button>
  </div>
\``,
      ...n.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-split-button disabled>
    <calcite-dropdown-group selection-mode="none">
      <calcite-dropdown-item>Option 2</calcite-dropdown-item>
      <calcite-dropdown-item>Option 3</calcite-dropdown-item>
      <calcite-dropdown-item>Option 4</calcite-dropdown-item>
    </calcite-dropdown-group>
  </calcite-split-button>
  <br />
  <calcite-split-button disabled loading>
    <calcite-dropdown-group selection-mode="none">
      <calcite-dropdown-item>Option 2</calcite-dropdown-item>
      <calcite-dropdown-item>Option 3</calcite-dropdown-item>
      <calcite-dropdown-item>Option 4</calcite-dropdown-item>
    </calcite-dropdown-group>
  </calcite-split-button>
\``,
      ...l.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-split-button primary-text="outline+brand" appearance="outline" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="outline+danger" appearance="outline" kind="danger"></calcite-split-button>
  <calcite-split-button primary-text="outline+inverse" appearance="outline" kind="inverse"></calcite-split-button>
  <calcite-split-button primary-text="outline+neutral" appearance="outline" kind="neutral"></calcite-split-button>

  <calcite-split-button primary-text="outline-fill+brand" appearance="outline-fill" kind="brand"></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+danger"
    appearance="outline-fill"
    kind="danger"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+inverse"
    appearance="outline-fill"
    kind="inverse"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="outline-fill+neutral"
    appearance="outline-fill"
    kind="neutral"
  ></calcite-split-button>

  <calcite-split-button primary-text="solid+brand" appearance="solid" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="solid+danger" appearance="solid" kind="danger"></calcite-split-button>
  <calcite-split-button primary-text="solid+inverse" appearance="solid" kind="inverse"></calcite-split-button>
  <calcite-split-button primary-text="solid+neutral" appearance="solid" kind="neutral"></calcite-split-button>

  <calcite-split-button primary-text="transparent+brand" appearance="transparent" kind="brand"></calcite-split-button>
  <calcite-split-button primary-text="transparent+danger" appearance="transparent" kind="danger"></calcite-split-button>
  <calcite-split-button
    primary-text="transparent+inverse"
    appearance="transparent"
    kind="inverse"
  ></calcite-split-button>
  <calcite-split-button
    primary-text="transparent+neutral"
    appearance="transparent"
    kind="neutral"
  ></calcite-split-button>
\``,
      ...p.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: "(): string => html`<calcite-button loading disabled>Test</calcite-button>`",
      ...s.parameters?.docs?.source
    }
  }
};
const S = ["simple", "allWidths_TestOnly", "iconEnd_TestOnly", "iconStartAndIconEnd", "placementTopStart", "darkModeRTL_TestOnly", "disabled_TestOnly", "appearanceAndKindCombinations_TestOnly", "loadingAndDisabled_TestOnly"];
export {
  S as __namedExportsOrder,
  a as allWidths_TestOnly,
  p as appearanceAndKindCombinations_TestOnly,
  n as darkModeRTL_TestOnly,
  P as default,
  l as disabled_TestOnly,
  c as iconEnd_TestOnly,
  r as iconStartAndIconEnd,
  s as loadingAndDisabled_TestOnly,
  d as placementTopStart,
  o as simple
};
