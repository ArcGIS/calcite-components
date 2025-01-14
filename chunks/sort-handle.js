import { h as T, L as P, k as a, x as i, s as m, E as c, j as D } from "./iframe.js";
import { n as H } from "./ref.js";
import { i as l } from "./keyed.js";
import { c as y, s as C, a as I } from "./loadable.js";
import { u as B, I as O } from "./interactive.js";
import { d as E } from "./floating-ui.js";
import { u as M } from "./useT9n.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const u = {
  handle: "handle",
  dropdown: "dropdown"
}, b = {
  drag: "drag",
  blank: "blank"
}, p = {
  label: "{label}",
  position: "{position}",
  total: "{total}"
}, f = ["top", "up", "down", "bottom"], L = T`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.dropdown{block-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
class U extends P {
  constructor() {
    super(...arguments), this.disabled = !1, this.messages = M({ blocking: !0 }), this.moveToItems = [], this.open = !1, this.overlayPositioning = "absolute", this.placement = E, this.scale = "m", this.calciteSortHandleBeforeClose = a({ cancelable: !1 }), this.calciteSortHandleBeforeOpen = a({ cancelable: !1 }), this.calciteSortHandleClose = a({ cancelable: !1 }), this.calciteSortHandleMove = a({ cancelable: !1 }), this.calciteSortHandleOpen = a({ cancelable: !1 }), this.calciteSortHandleReorder = a({ cancelable: !1 });
  }
  static {
    this.properties = { disabled: 7, flipPlacements: 0, label: 1, messageOverrides: 0, messages: 0, moveToItems: 0, open: 7, overlayPositioning: 3, placement: 3, scale: 3, setPosition: 9, setSize: 9, widthScale: 3 };
  }
  static {
    this.styles = L;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await y(this), this.dropdownEl?.setFocus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
    C(this);
  }
  willUpdate(e) {
    e.has("open") && (this.hasUpdated || this.open !== !1) && this.openHandler();
  }
  updated() {
    B(this);
  }
  loaded() {
    I(this);
  }
  // #endregion
  // #region Private Methods
  openHandler() {
    if (this.disabled) {
      this.open = !1;
      return;
    }
    this.dropdownEl && (this.dropdownEl.open = this.open);
  }
  setDropdownEl(e) {
    e && (this.dropdownEl = e, this.openHandler());
  }
  getLabel() {
    const { label: e, messages: t, setPosition: o, setSize: s } = this;
    let n = e ? t.repositionLabel.replace(p.label, e) : t.reposition;
    return n = n.replace(p.position, o ? o.toString() : ""), n.replace(p.total, s ? s.toString() : "");
  }
  handleBeforeOpen(e) {
    e.stopPropagation(), this.calciteSortHandleBeforeOpen.emit();
  }
  handleOpen(e) {
    e.stopPropagation(), this.calciteSortHandleOpen.emit(), this.open = !0;
  }
  handleBeforeClose(e) {
    e.stopPropagation(), this.calciteSortHandleBeforeClose.emit();
  }
  handleClose(e) {
    e.stopPropagation(), this.calciteSortHandleClose.emit(), this.open = !1;
  }
  handleReorder(e) {
    this.calciteSortHandleReorder.emit({
      reorder: e.target.dataset.value
    });
  }
  handleMoveTo(e) {
    const t = e.target.dataset.id, o = this.moveToItems.find((s) => s.id === t);
    this.calciteSortHandleMove.emit({ moveTo: o });
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: e, flipPlacements: t, messages: o, open: s, overlayPositioning: n, placement: w, scale: r, setPosition: g, setSize: h, widthScale: $, moveToItems: S } = this, d = this.getLabel(), v = e || !g || !h || h < 2 && S.length < 1;
    return O({ disabled: e, children: i`<calcite-dropdown class=${m(u.dropdown)} .disabled=${v} .flipPlacements=${t} @calciteDropdownBeforeClose=${this.handleBeforeClose} @calciteDropdownBeforeOpen=${this.handleBeforeOpen} @calciteDropdownClose=${this.handleClose} @calciteDropdownOpen=${this.handleOpen} .overlayPositioning=${n} .placement=${w} .scale=${r} .widthScale=${$} ${H(this.setDropdownEl)}><calcite-action .active=${s} appearance=transparent class=${m(u.handle)} .dragHandle=${!0} .icon=${e ? b.blank : b.drag} .label=${d} .scale=${r} slot=trigger .text=${d} title=${d ?? c}></calcite-action>${l("reorder", i`<calcite-dropdown-group .groupTitle=${o.reorder} .scale=${r} selection-mode=none>${this.renderTop()}${this.renderUp()}${this.renderDown()}${this.renderBottom()}</calcite-dropdown-group>`)}${this.renderMoveToGroup()}</calcite-dropdown>` });
  }
  renderMoveToItem(e) {
    return l(e.id, i`<calcite-dropdown-item data-id=${e.id ?? c} .label=${e.label} @calciteDropdownItemSelect=${this.handleMoveTo}>${e.label}</calcite-dropdown-item>`);
  }
  renderMoveToGroup() {
    const { messages: e, moveToItems: t, scale: o } = this;
    return t.length ? l("move-to-items", i`<calcite-dropdown-group .groupTitle=${e.moveTo} .scale=${o} selection-mode=none>${t.map((s) => this.renderMoveToItem(s))}</calcite-dropdown-group>`) : null;
  }
  renderDropdownItem(e, t) {
    return l(f[e], i`<calcite-dropdown-item data-value=${f[e] ?? c} .label=${t} @calciteDropdownItemSelect=${this.handleReorder}>${t}</calcite-dropdown-item>`);
  }
  renderTop() {
    const { setPosition: e } = this;
    return e !== 1 && e !== 2 ? this.renderDropdownItem(0, this.messages.moveToTop) : null;
  }
  renderUp() {
    return this.setPosition !== 1 ? this.renderDropdownItem(1, this.messages.moveUp) : null;
  }
  renderDown() {
    return this.setPosition !== this.setSize ? this.renderDropdownItem(2, this.messages.moveDown) : null;
  }
  renderBottom() {
    const { setPosition: e, setSize: t } = this;
    return e !== t && e !== t - 1 ? this.renderDropdownItem(3, this.messages.moveToBottom) : null;
  }
}
D("calcite-sort-handle", U);
export {
  U as SortHandle
};
