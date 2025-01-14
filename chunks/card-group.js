import { h as l, L as d, k as c, x as o, j as r } from "./iframe.js";
import { e as n, n as h } from "./ref.js";
import { a as p, b as a } from "./dom.js";
import { u as m, I as u } from "./interactive.js";
import { b, s as f, a as g } from "./loadable.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const I = l`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-card-group-space, var(--calcite-card-group-gap, var(--calcite-spacing-base)))}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class S extends d {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.items = [], this.slotRefEl = n(), this.disabled = !1, this.selectedItems = [], this.selectionMode = "none", this.calciteCardGroupSelect = c({ cancelable: !1 }), this.listen("calciteInternalCardKeyEvent", this.calciteInternalCardKeyEventListener), this.listen("calciteCardSelect", this.calciteCardSelectListener);
  }
  static {
    this.properties = { disabled: 7, label: 1, selectedItems: 0, selectionMode: 3 };
  }
  static {
    this.styles = I;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await b(this), this.disabled || p(this.items[0]);
  }
  load() {
    f(this);
  }
  willUpdate(e) {
    e.has("selectionMode") && this.hasUpdated && this.updateItemsOnSelectionModeChange();
  }
  updated() {
    m(this);
  }
  loaded() {
    g(this), this.updateSelectedItems();
  }
  // #endregion
  // #region Private Methods
  calciteInternalCardKeyEventListener(e) {
    if (e.composedPath().includes(this.el)) {
      const s = this.items.filter((t) => !t.disabled);
      switch (e.detail.key) {
        case "ArrowRight":
          a(s, e.target, "next");
          break;
        case "ArrowLeft":
          a(s, e.target, "previous");
          break;
        case "Home":
          a(s, e.target, "first");
          break;
        case "End":
          a(s, e.target, "last");
          break;
      }
    }
  }
  calciteCardSelectListener(e) {
    e.composedPath().includes(this.el) && !e.target.selectable && this.setSelectedItems(!0, e.target);
  }
  updateItemsOnSelectionModeChange() {
    this.updateSlottedItems(this.slotRefEl.value), this.updateSelectedItems();
  }
  updateItemsOnSlotChange(e) {
    this.updateSlottedItems(e.target), this.updateSelectedItems();
  }
  updateSlottedItems(e) {
    this.items = e.assignedElements({ flatten: !0 }).filter((s) => s?.matches("calcite-card"));
  }
  updateSelectedItems() {
    this.items.forEach((e) => {
      e.selectionMode = this.selectionMode;
    }), this.setSelectedItems(!1);
  }
  setSelectedItems(e, s) {
    s && this.items.forEach((t) => {
      const i = s === t;
      switch (this.selectionMode) {
        case "multiple":
          i && (t.selected = !t.selected);
          break;
        case "single":
          t.selected = i ? !t.selected : !1;
          break;
        case "single-persist":
          t.selected = !!i;
          break;
      }
    }), this.selectedItems = this.items.filter((t) => t.selected), e && this.selectionMode !== "none" && !this.disabled && this.calciteCardGroupSelect.emit();
  }
  // #endregion
  // #region Rendering
  render() {
    const e = this.selectionMode === "none" || this.selectionMode === "multiple" ? "group" : "radiogroup";
    return u({ disabled: this.disabled, children: o`<div .ariaLabel=${this.label} class="container" .role=${e}><slot @slotchange=${this.updateItemsOnSlotChange} ${h(this.slotRefEl)}></slot></div>` });
  }
}
r("calcite-card-group", S);
export {
  S as CardGroup
};
