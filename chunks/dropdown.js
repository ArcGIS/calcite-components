import { h as b, L as v, k as a, x as D, s as p, j as E } from "./iframe.js";
import { n as c } from "./ref.js";
import { f as I, b as r, a as h } from "./dom.js";
import { d as m, r as y, c as n, b as O, f as x, h as C, F as f } from "./floating-ui.js";
import { g as k } from "./guid.js";
import { u as S, I as P } from "./interactive.js";
import { i as H } from "./key.js";
import { c as $, s as T, a as z } from "./loadable.js";
import { c as u } from "./observers.js";
import { o as w } from "./openCloseComponent.js";
import { g as F } from "./dynamicClasses.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const L = {
  dropdownTrigger: "trigger"
}, A = {
  wrapper: "calcite-dropdown-wrapper"
}, U = b`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}.calcite-dropdown-wrapper{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}.width-s{--calcite-dropdown-width: 12rem}.width-m{--calcite-dropdown-width: 14rem}.width-l{--calcite-dropdown-width: 16rem}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class M extends v {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.focusLastDropdownItem = !1, this.groups = [], this.guid = `calcite-dropdown-${k()}`, this.items = [], this.mutationObserver = u("mutation", () => this.updateItems()), this.onOpenEnd = () => {
      this.focusOnFirstActiveOrDefaultItem(), this.el.removeEventListener("calciteDropdownOpen", this.onOpenEnd);
    }, this.openTransitionProp = "opacity", this.resizeObserver = u("resize", (e) => this.resizeObserverCallback(e)), this.closeOnSelectDisabled = !1, this.disabled = !1, this.maxItems = 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = m, this.scale = "m", this.selectedItems = [], this.type = "click", this.calciteDropdownBeforeClose = a({ cancelable: !1 }), this.calciteDropdownBeforeOpen = a({ cancelable: !1 }), this.calciteDropdownClose = a({ cancelable: !1 }), this.calciteDropdownOpen = a({ cancelable: !1 }), this.calciteDropdownSelect = a({ cancelable: !1 }), this.listenOn(window, "click", this.closeCalciteDropdownOnClick), this.listen("calciteInternalDropdownCloseRequest", this.closeCalciteDropdownOnEvent), this.listenOn(window, "calciteDropdownOpen", this.closeCalciteDropdownOnOpenEvent), this.listen("pointerenter", this.pointerEnterHandler), this.listen("pointerleave", this.pointerLeaveHandler), this.listen("calciteInternalDropdownItemKeyEvent", this.calciteInternalDropdownItemKeyEvent), this.listen("calciteInternalDropdownItemSelect", this.handleItemSelect);
  }
  static {
    this.properties = { closeOnSelectDisabled: 7, disabled: 7, flipPlacements: 0, maxItems: 11, open: 7, overlayPositioning: 3, placement: 3, scale: 3, selectedItems: 0, type: 3, widthScale: 3, width: 3 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = U;
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = !1) {
    const { floatingEl: t, referenceEl: i, placement: s, overlayPositioning: o, filteredFlipPlacements: l } = this;
    return y(this, {
      floatingEl: t,
      referenceEl: i,
      overlayPositioning: o,
      placement: s,
      flipPlacements: l,
      type: "menu"
    }, e);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await $(this), I(this.referenceEl);
  }
  connectedCallback() {
    super.connectedCallback(), this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.setFilteredPlacements(), this.open && (this.openHandler(), w(this)), this.updateItems(), n(this);
  }
  load() {
    T(this);
  }
  willUpdate(e) {
    e.has("open") && (this.hasUpdated || this.open !== !1) && this.openHandler(), e.has("disabled") && (this.hasUpdated || this.disabled !== !1) && this.handleDisabledChange(this.disabled), e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("maxItems") && (this.hasUpdated || this.maxItems !== 0) && this.setMaxScrollerHeight(), (e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || e.has("placement") && (this.hasUpdated || this.placement !== m)) && this.reposition(!0), e.has("scale") && (this.hasUpdated || this.scale !== "m") && this.handlePropsChange();
  }
  updated() {
    S(this);
  }
  loaded() {
    this.updateSelectedItems(), z(this), n(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect(), this.resizeObserver?.disconnect(), O(this);
  }
  // #endregion
  // #region Private Methods
  openHandler() {
    w(this), !this.disabled && this.reposition(!0);
  }
  handleDisabledChange(e) {
    e || (this.open = !1);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  handlePropsChange() {
    this.updateItems(), this.updateGroupScale();
  }
  closeCalciteDropdownOnClick(e) {
    this.disabled || !this.open || e.composedPath().includes(this.el) || this.closeCalciteDropdown(!1);
  }
  closeCalciteDropdownOnEvent(e) {
    this.closeCalciteDropdown(), e.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(e) {
    e.composedPath().includes(this.el) || (this.open = !1);
  }
  pointerEnterHandler() {
    this.disabled || this.type !== "hover" || this.toggleDropdown();
  }
  pointerLeaveHandler() {
    this.disabled || this.type !== "hover" || this.closeCalciteDropdown();
  }
  getTraversableItems() {
    return this.items.filter((e) => !e.disabled && !e.hidden);
  }
  calciteInternalDropdownItemKeyEvent(e) {
    const { keyboardEvent: t } = e.detail, i = t.target, s = this.getTraversableItems();
    switch (t.key) {
      case "Tab":
        this.open = !1, this.updateTabIndexOfItems(i);
        break;
      case "ArrowDown":
        r(s, i, "next");
        break;
      case "ArrowUp":
        r(s, i, "previous");
        break;
      case "Home":
        r(s, i, "first");
        break;
      case "End":
        r(s, i, "last");
        break;
    }
    e.stopPropagation();
  }
  handleItemSelect(e) {
    this.updateSelectedItems(), e.stopPropagation(), this.calciteDropdownSelect.emit(), (!this.closeOnSelectDisabled || e.detail.requestedDropdownGroup.selectionMode === "none") && this.closeCalciteDropdown(), e.stopPropagation();
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t } = this;
    this.filteredFlipPlacements = t ? x(t, e) : null;
  }
  updateTriggers(e) {
    this.triggers = e.target.assignedElements({
      flatten: !0
    }), this.reposition(!0);
  }
  updateItems() {
    this.items = this.groups.map((e) => Array.from(e?.querySelectorAll("calcite-dropdown-item"))).reduce((e, t) => [...e, ...t], []), this.updateSelectedItems(), this.reposition(!0), this.items.forEach((e) => e.scale = this.scale);
  }
  updateGroups(e) {
    const t = e.target.assignedElements({ flatten: !0 }).filter((i) => i?.matches("calcite-dropdown-group"));
    this.groups = t, this.updateItems(), this.updateGroupScale();
  }
  updateGroupScale() {
    this.groups?.forEach((e) => e.scale = this.scale);
  }
  resizeObserverCallback(e) {
    e.forEach((t) => {
      const { target: i } = t;
      i === this.referenceEl ? this.setDropdownWidth() : i === this.scrollerEl && this.setMaxScrollerHeight();
    });
  }
  setDropdownWidth() {
    const { referenceEl: e, scrollerEl: t } = this, i = e?.clientWidth;
    !i || !t || (t.style.minWidth = `${i}px`);
  }
  setMaxScrollerHeight() {
    const { scrollerEl: e } = this;
    if (!e)
      return;
    this.reposition(!0);
    const t = this.getMaxScrollerHeight();
    e.style.maxBlockSize = t > 0 ? `${t}px` : "", this.reposition(!0);
  }
  setScrollerAndTransitionEl(e) {
    e && this.resizeObserver?.observe(e), this.scrollerEl = e, this.transitionEl = e;
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit(), C(this);
  }
  setReferenceEl(e) {
    this.referenceEl = e, n(this), e && this.resizeObserver?.observe(e);
  }
  setFloatingEl(e) {
    this.floatingEl = e, n(this);
  }
  keyDownHandler(e) {
    if (!e.composedPath().includes(this.referenceEl))
      return;
    const { defaultPrevented: t, key: i } = e;
    if (!t) {
      if (i === "Escape") {
        this.closeCalciteDropdown(), e.preventDefault();
        return;
      }
      if (this.open && e.shiftKey && i === "Tab") {
        this.closeCalciteDropdown(), e.preventDefault();
        return;
      }
      H(i) ? (this.toggleDropdown(), e.preventDefault()) : (i === "ArrowDown" || i === "ArrowUp") && (e.preventDefault(), this.focusLastDropdownItem = i === "ArrowUp", this.open = !0, this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd));
    }
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((e) => e.selected);
  }
  getMaxScrollerHeight() {
    const { maxItems: e, items: t } = this;
    let i = 0, s = 0, o;
    return this.groups.forEach((l) => {
      e > 0 && i < e && Array.from(l.children).forEach((d, g) => {
        g === 0 && (isNaN(o) && (o = d.offsetTop), s += o), i < e && (s += d.offsetHeight, i += 1);
      });
    }), t.length >= e ? s : 0;
  }
  closeCalciteDropdown(e = !0) {
    this.open = !1, e && h(this.triggers[0]);
  }
  focusOnFirstActiveOrDefaultItem() {
    const t = this.getTraversableItems().find((i) => i.selected) || (this.focusLastDropdownItem ? this.items[this.items.length - 1] : this.items[0]);
    this.focusLastDropdownItem = !1, t && h(t);
  }
  toggleDropdown() {
    this.open = !this.open, this.open && this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd);
  }
  updateTabIndexOfItems(e) {
    this.items.forEach((t) => {
      t.tabIndex = e !== t ? -1 : 0;
    });
  }
  // #endregion
  // #region Rendering
  render() {
    const { open: e, guid: t } = this;
    return P({ disabled: this.disabled, children: D`<div class="calcite-trigger-container" .id=${`${t}-menubutton`} @click=${this.toggleDropdown} @keydown=${this.keyDownHandler} ${c(this.setReferenceEl)}><slot aria-controls=${`${t}-menu`} .ariaExpanded=${e} aria-haspopup=menu name=${L.dropdownTrigger} @slotchange=${this.updateTriggers}></slot></div><div .ariaHidden=${!e} class=${p({
      [A.wrapper]: !0,
      [F("width", this.width, this.widthScale)]: !!(this.width || this.widthScale)
    })} ${c(this.setFloatingEl)}><div aria-labelledby=${`${t}-menubutton`} class=${p({
      "calcite-dropdown-content": !0,
      [f.animation]: !0,
      [f.animationActive]: e
    })} .id=${`${t}-menu`} role=menu ${c(this.setScrollerAndTransitionEl)}><slot @slotchange=${this.updateGroups}></slot></div></div>` });
  }
}
E("calcite-dropdown", M);
export {
  M as Dropdown
};
