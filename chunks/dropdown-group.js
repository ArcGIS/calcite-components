import { h as r, L as s, k as i, x as t, s as l, j as a } from "./iframe.js";
import { c as n } from "./observers.js";
import { C as d } from "./resources8.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const c = r`:host{position:relative;display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
class p extends s {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.mutationObserver = n("mutation", () => this.updateItems()), this.scale = "m", this.selectionMode = "single", this.calciteInternalDropdownItemChange = i({ cancelable: !1 }), this.listen("calciteInternalDropdownItemSelect", this.updateActiveItemOnChange);
  }
  static {
    this.properties = { groupTitle: 3, scale: 3, selectionMode: 3 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = c;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateItems(), this.mutationObserver?.observe(this.el, { childList: !0 });
  }
  load() {
    this.groupPosition = this.getGroupPosition();
  }
  willUpdate(e) {
    e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "single") && this.updateItems();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect();
  }
  // #endregion
  // #region Private Methods
  updateActiveItemOnChange(e) {
    this.requestedDropdownGroup = e.detail.requestedDropdownGroup, this.requestedDropdownItem = e.detail.requestedDropdownItem, this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  updateItems() {
    Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e) => e.selectionMode = this.selectionMode);
  }
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  // #endregion
  // #region Rendering
  render() {
    const e = this.groupTitle ? t`<span aria-hidden=true class="dropdown-title">${this.groupTitle}</span>` : null, o = this.groupPosition > 0 ? t`<div class="dropdown-separator" role=separator></div>` : null;
    return this.el.ariaLabel = this.groupTitle, this.el.role = "group", t`<div class=${l({
      [d.container]: !0
    })}>${o}${e}<slot></slot></div>`;
  }
}
a("calcite-dropdown-group", p);
export {
  p as DropdownGroup
};
