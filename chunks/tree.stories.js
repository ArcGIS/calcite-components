import { m as S } from "./utils.js";
import { h as t } from "./formatting.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
var _ = Object.freeze, x = Object.defineProperty, T = (e, h) => _(x(e, "raw", { value: _(e.slice()) })), y;
function a(e, h) {
  const v = e(), {
    selectionMode: w,
    lines: $
  } = h.args;
  return t`
    <style>
      .tree-container {
        flex: 1;
        margin-right: 10px;
      }
      .container {
        display: flex;
        justify-content: space-between;
      }
    </style>

    <div class="container">
      ${["s", "m", "l"].map((b) => t`
          <div class="tree-container">
            <h3>${w} selection mode + ${b} scale</h3>
            <calcite-tree selection-mode="${w || "single"}" ${$ ? "lines" : ""} scale="${b}">
              ${v}
            </calcite-tree>
          </div>
        `)}
    </div>
  `;
}
const C = {
  title: "Components/Tree",
  parameters: {
    chromatic: {
      delay: 1e3
    }
  }
}, o = (e = !0) => t`
  <calcite-tree-item label="test item">
    <a>Child 1</a>
  </calcite-tree-item>
  <calcite-tree-item label="test item" icon-start="palette" ${e ? "expanded" : ""}>
    <a>Child 2</a>
    <calcite-tree slot="children" icon-start="palette">
      <calcite-tree-item label="test item">
        <a>Grandchild 1</a>
      </calcite-tree-item>
      <calcite-tree-item label="test item" icon-start="palette" ${e ? "expanded" : ""}>
        <a>Grandchild 2</a>
        <calcite-tree slot="children" icon-start="palette">
          <calcite-tree-item label="test item">
            <a>Great-Grandchild 1</a>
          </calcite-tree-item>
          <calcite-tree-item label="test item" icon-start="palette">
            <a>Great-Grandchild 2</a>
          </calcite-tree-item>
        </calcite-tree>
      </calcite-tree-item>
    </calcite-tree>
  </calcite-tree-item>
  <calcite-tree-item label="test item" ${e ? "expanded" : ""}>
    <a>Child 3</a>
    <calcite-tree slot="children">
      <calcite-tree-item label="test item">
        <a>Grandchild 1</a>
      </calcite-tree-item>
      <calcite-tree-item>
        <a>Grandchild 2</a>
      </calcite-tree-item>
    </calcite-tree>
  </calcite-tree-item>
`, i = (e) => t`
  <calcite-dropdown slot="actions-end" id="slottedDefaultDropdown" scale="${e}">
    <calcite-action slot="trigger" icon="ellipsis"></calcite-action>
    <calcite-dropdown-group group-title="Settings" selection-mode="multiple">
      <calcite-dropdown-item>Group elements</calcite-dropdown-item>
    </calcite-dropdown-group>
    <calcite-dropdown-group group-title="Display mode" selection-mode="single">
      <calcite-dropdown-item selected>Row</calcite-dropdown-item>
      <calcite-dropdown-item>Column</calcite-dropdown-item>
    </calcite-dropdown-group>
  </calcite-dropdown>
`, f = (e) => t`
  <calcite-tree-item label="test item" icon-start="palette" expanded>
    <a>Child 1 </a>
    ${i(e)} ${i(e)}
  </calcite-tree-item>
  <calcite-tree-item label="test item" expanded>
    <a>Child 2 </a>
    <calcite-tree slot="children" expanded>
      <calcite-tree-item label="test item" expanded>
        <a>Grandchild 1 </a>
        <calcite-tree slot="children" expanded>
          <calcite-tree-item label="test item" icon-start="palette" expanded>
            <a>Great - Grandchild 1 </a>
            ${i(e)}${i(e)}
          </calcite-tree-item>
        </calcite-tree>
      </calcite-tree-item>
    </calcite-tree>
  </calcite-tree-item>
  <calcite-tree-item label="test item" icon-start="palette" expanded>
    <a>Child 3 </a>
    ${i(e)}
    <calcite-tree slot="children" expanded>
      <calcite-tree-item label="test item" icon-start="palette">
        <a>Grandchild 1 </a>
      </calcite-tree-item>
      <calcite-tree-item label="test item" expanded>
        <a>Grandchild 2 </a>
        ${i(e)}
      </calcite-tree-item>
    </calcite-tree>
  </calcite-tree-item>
`, d = () => t` ${o()} `;
d.decorators = [a];
const r = () => t`${o()}`;
r.decorators = [a];
r.args = {
  selectionMode: "none"
};
const c = () => t` ${o()} `;
c.decorators = [a];
c.args = {
  lines: !0,
  selectionMode: "multiple"
};
const n = () => t` ${o()} `;
n.decorators = [a];
n.args = {
  lines: !0,
  selectionMode: "ancestors"
};
const s = () => t` ${o()} `;
s.decorators = [a];
s.args = {
  lines: !0,
  selectionMode: "single-persist"
};
const m = (e) => t` ${f(e)} `;
m.decorators = [a];
const p = () => t`
  <calcite-tree style="width: 300px">
    <calcite-tree-item label="test item">
      <span>Possibly_long_tree_item_name_because_it_is_a_user_generated_layer_name</span>
    </calcite-tree-item>
  </calcite-tree>
`, g = () => t`
  <style>
    .string-value {
      white-space: pre-wrap;
    }
  </style>
  <calcite-tree>
    <calcite-tree-item label="test item">
      <div>
        <span>content from tree item below should not be clipped 👇</span><span>:&nbsp;</span
        ><span class="string-value">✂️ 🚫clipped ✂️</span>
      </div>
    </calcite-tree-item>

    <calcite-tree-item label="test item">
      <div>
        <span>value</span><span>:&nbsp;</span
        ><!-- formatting (single-lining JSON) hides the issue, so we disable it -->
        <!-- prettier-ignore -->
        <span class="string-value">{
          "spatialReference": {
            "latestWkid": 3857,
            "wkid": 102100
          },
          "x": -8443894.052,
          "y": 5664504.875700004
        }</span>
      </div>
    </calcite-tree-item>
  </calcite-tree>
`, l = () => t` ${o()} `;
l.parameters = {
  themes: S
};
l.decorators = [a];
const u = () => t(y || (y = T([`<div style="width:400px">
      <calcite-tree>
        <calcite-tree-item label="test item" expanded id="two">
          Layer 2
          <calcite-tree slot="children">
            <calcite-tree-item label="test item">
              <span class="title">Layer 2.1</span>
              <calcite-dropdown placement="bottom-trailing">
                <calcite-button
                  appearance="transparent"
                  color="neutral"
                  icon-start="ellipsis"
                  slot="trigger"
                  id="trigger"
                ></calcite-button>
                <calcite-dropdown-group>
                  <calcite-dropdown-item icon-start="trash">Remove</calcite-dropdown-item>
                </calcite-dropdown-group>
              </calcite-dropdown>
            </calcite-tree-item>
          </calcite-tree>
        </calcite-tree-item>
        <calcite-tree-item label="test item">
          <span class="title">Layer 3</span>
        </calcite-tree-item>
      </calcite-tree>
    </div>
    <script>
      window.addEventListener("load", () => {
        setTimeout(() => {
          const dropdownTriggerEl = document.querySelector("calcite-button#trigger");
          dropdownTriggerEl.click();
        }, 1000);
      });
    <\/script>`])));
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: "(): string => html` ${treeItems()} `",
      ...d.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: "(): string => html`${treeItems()}`",
      ...r.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: "(): string => html` ${treeItems()} `",
      ...c.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: "(): string => html` ${treeItems()} `",
      ...n.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: "(): string => html` ${treeItems()} `",
      ...s.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: "(scale: string): string => html` ${iconStartLargeActionsEnd(scale)} `",
      ...m.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-tree style="width: 300px">
    <calcite-tree-item label="test item">
      <span>Possibly_long_tree_item_name_because_it_is_a_user_generated_layer_name</span>
    </calcite-tree-item>
  </calcite-tree>
\``,
      ...p.parameters?.docs?.source
    }
  }
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <style>
    .string-value {
      white-space: pre-wrap;
    }
  </style>
  <calcite-tree>
    <calcite-tree-item label="test item">
      <div>
        <span>content from tree item below should not be clipped 👇</span><span>:&nbsp;</span
        ><span class="string-value">✂️ 🚫clipped ✂️</span>
      </div>
    </calcite-tree-item>

    <calcite-tree-item label="test item">
      <div>
        <span>value</span><span>:&nbsp;</span
        ><!-- formatting (single-lining JSON) hides the issue, so we disable it -->
        <!-- prettier-ignore -->
        <span class="string-value">{
          "spatialReference": {
            "latestWkid": 3857,
            "wkid": 102100
          },
          "x": -8443894.052,
          "y": 5664504.875700004
        }</span>
      </div>
    </calcite-tree-item>
  </calcite-tree>
\``,
      ...g.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: "(): string => html` ${treeItems()} `",
      ...l.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<div style="width:400px">
      <calcite-tree>
        <calcite-tree-item label="test item" expanded id="two">
          Layer 2
          <calcite-tree slot="children">
            <calcite-tree-item label="test item">
              <span class="title">Layer 2.1</span>
              <calcite-dropdown placement="bottom-trailing">
                <calcite-button
                  appearance="transparent"
                  color="neutral"
                  icon-start="ellipsis"
                  slot="trigger"
                  id="trigger"
                ></calcite-button>
                <calcite-dropdown-group>
                  <calcite-dropdown-item icon-start="trash">Remove</calcite-dropdown-item>
                </calcite-dropdown-group>
              </calcite-dropdown>
            </calcite-tree-item>
          </calcite-tree>
        </calcite-tree-item>
        <calcite-tree-item label="test item">
          <span class="title">Layer 3</span>
        </calcite-tree-item>
      </calcite-tree>
    </div>
    <script>
      window.addEventListener("load", () => {
        setTimeout(() => {
          const dropdownTriggerEl = document.querySelector("calcite-button#trigger");
          dropdownTriggerEl.click();
        }, 1000);
      });
    <\/script>\``,
      ...u.parameters?.docs?.source
    }
  }
};
const G = ["singleSelectionMode", "selectionModeNone", "multipleSelectionModeWithLines_TestOnly", "ancestorsSelectionModeWithLines_TestOnly", "singlePersistSelectionModeWithLines_TestOnly", "iconStartAndActionsEnd", "treeItemTextContentWraps_TestOnly", "treeItemContentIsNotClipped_TestOnly", "darkModeRTL_TestOnly", "OverflowingSubtree"];
export {
  u as OverflowingSubtree,
  G as __namedExportsOrder,
  n as ancestorsSelectionModeWithLines_TestOnly,
  l as darkModeRTL_TestOnly,
  C as default,
  m as iconStartAndActionsEnd,
  c as multipleSelectionModeWithLines_TestOnly,
  r as selectionModeNone,
  s as singlePersistSelectionModeWithLines_TestOnly,
  d as singleSelectionMode,
  g as treeItemContentIsNotClipped_TestOnly,
  p as treeItemTextContentWraps_TestOnly
};
