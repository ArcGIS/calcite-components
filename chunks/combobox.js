import { x as d, s as h, h as j, L as X, k as b, n as J, E as m, j as K, D as H } from "./iframe.js";
import { i as f } from "./keyed.js";
import { l as Q } from "./live.js";
import { c as Y } from "./core.js";
import { e as Z, n as g } from "./ref.js";
import { f as ee } from "./filter.js";
import { z as v, A as te } from "./dom.js";
import { d as ie, r as se, c as C, b as le, f as oe, h as ae, F as T } from "./floating-ui.js";
import { c as ne, a as ce, d as re, s as he, H as de } from "./form.js";
import { g as pe } from "./guid.js";
import { u as ue, I as me } from "./interactive.js";
import { c as fe, d as be, g as ge } from "./label.js";
import { c as xe, s as Ie, a as ve, b as Ce } from "./loadable.js";
import { c as F } from "./observers.js";
import { o as M } from "./openCloseComponent.js";
import { g as k } from "./component.js";
import { V as $e } from "./Validation.js";
import { u as ye } from "./useT9n.js";
import { h as V, i as x, C as r, g as $, a as z, b as we, c as P, d as O, I as L } from "./utils5.js";
import { d as w } from "./debounce.js";
import { e as Se } from "./escapeRegExp.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const W = {
  button: "x-button"
}, ke = ({ disabled: E, key: e, label: t, scale: i }) => f(e, d`<button .ariaLabel=${t} class=${h(W.button)} .disabled=${E} tabindex=-1 type=button><calcite-icon icon=x .scale=${k(i)}></calcite-icon></button>`), Ee = j`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0;display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-radius:50%;border-color:transparent;background-color:var(--calcite-color-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-color-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l: .5rem;--calcite-combobox-item-spacing-unit-s: .25rem;--calcite-combobox-input-height: 1rem;--calcite-internal-combobox-input-margin-block: calc(.25rem - 1px) }:host([scale=s]) .x-button{margin-inline:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l: .75rem;--calcite-combobox-item-spacing-unit-s: .5rem;--calcite-combobox-input-height: 1rem;--calcite-internal-combobox-input-margin-block: calc(.5rem - 1px) }:host([scale=m]) .x-button{margin-inline-end:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l: 1rem;--calcite-combobox-item-spacing-unit-s: .75rem;--calcite-combobox-input-height: 1.5rem;--calcite-internal-combobox-input-margin-block: calc(.625rem - 1px) }:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([read-only]) .wrapper{background-color:var(--calcite-color-background)}:host([read-only]) .label{font-weight:var(--calcite-font-weight-medium)}:host([status=invalid]) .wrapper{border-color:var(--calcite-color-status-danger)}:host([status=invalid]:focus-within) .wrapper{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{position:relative;display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;gap:var(--calcite-combobox-item-spacing-unit-s);margin-inline-end:var(--calcite-combobox-item-spacing-unit-s)}.grid-input.selection-display-fit,.grid-input.selection-display-single{flex-wrap:nowrap;overflow:hidden}.input{flex-grow:1;appearance:none;overflow:hidden;text-overflow:ellipsis;border-style:none;background-color:transparent;padding:0;font-family:inherit;color:var(--calcite-color-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);inline-size:100%;margin-block-end:var(--calcite-combobox-item-spacing-unit-s);min-inline-size:4.8125rem}.input:focus{outline:2px solid transparent;outline-offset:2px}.input:placeholder-shown{text-overflow:ellipsis}.input--single{padding:0;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.placeholder-icon{color:var(--calcite-color-text-3)}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;cursor:pointer;align-items:center}.icon-end{flex:none}.icon-end .icon{color:var(--calcite-color-text-3)}.floating-ui-container{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}@media (forced-colors: active){.wrapper,.floating-ui-container{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width, 100%)}.list{margin:0;display:block;padding:0}.list--hide{block-size:0px;overflow:hidden}calcite-chip{--calcite-animation-timing: 0}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);max-inline-size:100%}.chip--active{background-color:var(--calcite-color-foreground-3)}.chip--invisible{visibility:hidden;position:absolute}.item{display:block}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}`, U = "combobox-item-", B = "combobox-chip-", R = "combobox-label-", S = "combobox-listbox-", G = "combobox-input-";
class De extends X {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.internalComboboxChangeEvent = () => {
      this.calciteComboboxChange.emit();
    }, this.emitComboboxChange = w(this.internalComboboxChangeEvent, 0), this.filterItems = (() => {
      const e = (t, i) => t && i.some(({ el: s }) => t === s);
      return w((t, i = !1, s = !0) => {
        const l = ee([...this.data, ...this.groupData], t, this.effectiveFilterProps), o = this.getItemsAndGroups(), a = t === "";
        o.forEach((n) => {
          if (a) {
            n.hidden = !1;
            return;
          }
          const c = !e(n, l);
          n.hidden = c;
          const [p, I] = n.ancestors;
          (e(p, l) || e(I, l)) && (n.hidden = !1), c || n.ancestors.forEach((u) => u.hidden = !1);
        }), this.filterTextMatchPattern = this.filterText && new RegExp(`(${Se(this.filterText)})`, "i"), this.filteredItems = this.getFilteredItems(), this.filteredItems.forEach((n) => {
          n.filterTextMatchPattern = this.filterTextMatchPattern;
        }), i && (this.open = this.filterText.trim().length > 0 && this.filteredItems.length > 0), s && this.calciteComboboxFilterChange.emit();
      }, H.filter);
    })(), this._filterText = "", this.getSelectedItems = () => {
      if (!this.isMulti()) {
        const e = this.items.find(({ selected: t }) => t);
        return e ? [e] : [];
      }
      return this.items.filter((e) => e.selected && (this.selectionMode !== "ancestors" || !V(e))).sort((e, t) => {
        const i = this.selectedItems.indexOf(e), s = this.selectedItems.indexOf(t);
        return i > -1 && s > -1 ? i - s : s - i;
      });
    }, this.guid = pe(), this.ignoreSelectedEventsFlag = !1, this.inputHeight = 0, this.internalValueChangeFlag = !1, this.mutationObserver = F("mutation", () => this.updateItems()), this.onLabelClick = () => {
      this.setFocus();
    }, this.openTransitionProp = "opacity", this.placement = ie, this.resizeObserver = F("resize", () => {
      this.setMaxScrollerHeight(), this.refreshSelectionDisplay();
    }), this.textInput = Z(), this._value = null, this.activeChipIndex = -1, this.activeDescendant = "", this.activeItemIndex = -1, this.compactSelectionDisplay = !1, this.groupItems = [], this.items = [], this.selectedHiddenChipsCount = 0, this.selectedVisibleChipsCount = 0, this.clearDisabled = !1, this.disabled = !1, this.filteredItems = [], this.maxItems = 0, this.messages = ye(), this.open = !1, this.overlayPositioning = "absolute", this.placeholderIconFlipRtl = !1, this.readOnly = !1, this.required = !1, this.scale = "m", this.selectedItems = [], this.selectionDisplay = "all", this.selectionMode = "multiple", this.status = "idle", this.validity = {
      valid: !1,
      badInput: !1,
      customError: !1,
      patternMismatch: !1,
      rangeOverflow: !1,
      rangeUnderflow: !1,
      stepMismatch: !1,
      tooLong: !1,
      tooShort: !1,
      typeMismatch: !1,
      valueMissing: !1
    }, this.calciteComboboxBeforeClose = b({ cancelable: !1 }), this.calciteComboboxBeforeOpen = b({ cancelable: !1 }), this.calciteComboboxChange = b({ cancelable: !1 }), this.calciteComboboxChipClose = b({ cancelable: !1 }), this.calciteComboboxClose = b({ cancelable: !1 }), this.calciteComboboxFilterChange = b({ cancelable: !1 }), this.calciteComboboxOpen = b({ cancelable: !1 }), this.updateItems = w(() => {
      this.items = this.getItems(), this.groupItems = this.getGroupItems(), this.data = this.getData(), this.groupData = this.getGroupData(), this.selectedItems = this.getSelectedItems(), this.filteredItems = this.getFilteredItems(), this.needsIcon = this.getNeedsIcon(), this.items.forEach((e) => {
        e.selectionMode = this.selectionMode, e.scale = this.scale;
      }), this.groupItems.forEach((e) => e.scale = this.scale), this.allowCustomValues || this.setMaxScrollerHeight(), this.groupItems.forEach((e, t, i) => {
        t === 0 && (e.afterEmptyGroup = !1);
        const s = i[t + 1];
        s && (s.afterEmptyGroup = e.children.length === 0);
      });
    }, H.nextTick), this.listenOn(document, "click", this.documentClickHandler), this.listen("calciteComboboxItemChange", this.calciteComboboxItemChangeHandler), this.listen("calciteInternalComboboxItemChange", this.calciteInternalComboboxItemChangeHandler), this.listen("click", this.comboboxFocusHandler);
  }
  static {
    this.properties = { activeChipIndex: 16, activeDescendant: 16, activeItemIndex: 16, compactSelectionDisplay: 16, groupItems: 16, items: 16, needsIcon: 16, selectedHiddenChipsCount: 16, selectedVisibleChipsCount: 16, allowCustomValues: 7, clearDisabled: 7, disabled: 7, filterText: 3, filterProps: 0, filteredItems: 0, flipPlacements: 0, form: 3, label: 1, maxItems: 11, messageOverrides: 0, name: 3, open: 7, overlayPositioning: 3, placeholder: 1, placeholderIcon: 3, placeholderIconFlipRtl: 7, readOnly: 7, required: 7, scale: 3, selectedItems: 0, selectionDisplay: 3, selectionMode: 3, status: 3, validationIcon: [3, { converter: J }], validationMessage: 1, validity: 0, value: 1 };
  }
  static {
    this.styles = Ee;
  }
  get effectiveFilterProps() {
    return this.filterProps ? this.filterProps.filter((e) => e !== "el") : ["description", "label", "metadata", "shortHeading", "textLabel"];
  }
  get showingInlineIcon() {
    const { placeholderIcon: e, selectionMode: t, selectedItems: i, open: s } = this, l = i[0], o = l?.icon, a = x(t);
    return !s && l ? !!o && a : !!e && (!l || a);
  }
  /** Text for the component's filter input field. */
  get filterText() {
    return this._filterText;
  }
  set filterText(e) {
    const t = this._filterText;
    e !== t && (this._filterText = e, this.filterTextChange(e));
  }
  /** The component's value(s) from the selected `calcite-combobox-item`(s). */
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    e !== t && (this._value = e, this.valueHandler(e));
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed Reposition the component after a delay
   * @returns Promise
   */
  async reposition(e = !1) {
    const { floatingEl: t, referenceEl: i, placement: s, overlayPositioning: l, filteredFlipPlacements: o } = this;
    return se(this, {
      floatingEl: t,
      referenceEl: i,
      overlayPositioning: l,
      placement: s,
      flipPlacements: o,
      type: "menu"
    }, e);
  }
  /** Sets focus on the component. */
  async setFocus() {
    await xe(this), this.textInput.value?.focus(), this.activeChipIndex = -1, this.activeItemIndex = -1;
  }
  connectedCallback() {
    super.connectedCallback(), fe(this), ne(this), this.internalValueChangeFlag = !0, this.value = this.getValue(), this.internalValueChangeFlag = !1, this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.setFilteredPlacements(), this.open && (this.openHandler(), M(this)), C(this);
  }
  async load() {
    Ie(this), this.filterItems(this.filterText, !1, !1);
  }
  willUpdate(e) {
    e.has("open") && (this.hasUpdated || this.open !== !1) && this.openHandler(), e.has("disabled") && (this.hasUpdated || this.disabled !== !1) && this.handleDisabledChange(this.disabled), e.has("maxItems") && (this.hasUpdated || this.maxItems !== 0) && this.setMaxScrollerHeight(), e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") && this.reposition(!0), (e.has("selectionMode") || e.has("scale")) && this.updateItems(), e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("selectedItems") && (this.hasUpdated || this.selectedItems?.length > 0) && this.selectedItemsHandler();
  }
  updated() {
    this.el.offsetHeight !== this.inputHeight && (this.reposition(!0), this.inputHeight = this.el.offsetHeight), ue(this), this.hasUpdated || this.refreshSelectionDisplay();
  }
  loaded() {
    ce(this, this.getValue()), C(this), ve(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect(), this.resizeObserver?.disconnect(), be(this), re(this), le(this);
  }
  // #endregion
  // #region Private Methods
  filterTextChange(e) {
    this.updateActiveItemIndex(-1), this.filterItems(e, !0);
  }
  openHandler() {
    M(this), !this.disabled && this.setMaxScrollerHeight();
  }
  handleDisabledChange(e) {
    e || (this.open = !1);
  }
  valueHandler(e) {
    if (!this.internalValueChangeFlag) {
      const t = this.getItems();
      Array.isArray(e) ? t.forEach((i) => i.selected = e.includes(i.value)) : e ? t.forEach((i) => i.selected = e === i.value) : t.forEach((i) => i.selected = !1), this.updateItems();
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = !0, this.value = this.getValue(), this.internalValueChangeFlag = !1;
  }
  async documentClickHandler(e) {
    this.disabled || e.composedPath().includes(this.el) || (await this.componentOnReady(), !this.allowCustomValues && this.filterText && (this.clearInputValue(), this.filterItems(""), this.updateActiveItemIndex(-1)), this.allowCustomValues && this.filterText.trim().length && this.addCustomChip(this.filterText), this.open = !1);
  }
  calciteComboboxItemChangeHandler(e) {
    if (this.ignoreSelectedEventsFlag)
      return;
    const t = e.target, i = this.filteredItems.indexOf(t);
    this.updateActiveItemIndex(i), this.toggleSelection(t, t.selected);
  }
  calciteInternalComboboxItemChangeHandler(e) {
    e.stopPropagation(), this.updateItems();
  }
  clearValue() {
    this.ignoreSelectedEventsFlag = !0, this.items.forEach((e) => e.selected = !1), this.ignoreSelectedEventsFlag = !1, this.selectedItems = [], this.emitComboboxChange(), this.open = !1, this.updateActiveItemIndex(-1), this.resetText(), this.filterItems(""), this.setFocus();
  }
  clearInputValue() {
    this.textInput.value.value = "", this.filterText = "";
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t } = this;
    this.filteredFlipPlacements = t ? oe(t, e) : null;
  }
  getValue() {
    const e = this.selectedItems.map((t) => t?.value?.toString());
    return e?.length ? e.length > 1 ? e : e[0] : "";
  }
  comboboxInViewport() {
    const e = this.el.getBoundingClientRect();
    return e.top >= 0 && e.left >= 0 && e.right <= (window.innerWidth || document.documentElement.clientWidth) && e.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  keyDownHandler(e) {
    if (this.readOnly)
      return;
    const { key: t } = e;
    switch (t) {
      case "Tab":
        this.activeChipIndex = -1, this.activeItemIndex = -1, this.allowCustomValues && this.filterText ? (this.addCustomChip(this.filterText, !0), e.preventDefault()) : this.open ? (this.open = !1, e.preventDefault()) : !this.allowCustomValues && this.filterText && (this.clearInputValue(), this.filterItems(""), this.updateActiveItemIndex(-1));
        break;
      case "ArrowLeft":
        (this.activeChipIndex !== -1 || this.textInput.value.selectionStart === 0) && (this.previousChip(), e.preventDefault());
        break;
      case "ArrowRight":
        this.activeChipIndex !== -1 && (this.nextChip(), e.preventDefault());
        break;
      case "ArrowUp":
        this.filteredItems.length && (e.preventDefault(), this.open && this.shiftActiveItemIndex(-1), this.comboboxInViewport() || this.el.scrollIntoView());
        break;
      case "ArrowDown":
        this.filteredItems.length && (e.preventDefault(), this.open ? this.shiftActiveItemIndex(1) : (this.open = !0, this.ensureRecentSelectedItemIsActive()), this.comboboxInViewport() || this.el.scrollIntoView());
        break;
      case " ":
        !this.textInput.value.value && !e.defaultPrevented && (this.open || (this.open = !0, this.shiftActiveItemIndex(1)), e.preventDefault());
        break;
      case "Home":
        if (!this.open)
          return;
        e.preventDefault(), this.updateActiveItemIndex(0), this.scrollToActiveItem(), this.comboboxInViewport() || this.el.scrollIntoView();
        break;
      case "End":
        if (!this.open)
          return;
        e.preventDefault(), this.updateActiveItemIndex(this.filteredItems.length - 1), this.scrollToActiveItem(), this.comboboxInViewport() || this.el.scrollIntoView();
        break;
      case "Escape":
        !this.clearDisabled && !this.open && this.clearValue(), this.open = !1, e.preventDefault();
        break;
      case "Enter":
        if (this.open && this.activeItemIndex > -1) {
          const i = this.filteredItems[this.activeItemIndex];
          this.toggleSelection(i, !i.selected), e.preventDefault();
        } else this.activeChipIndex > -1 ? (this.removeActiveChip(), e.preventDefault()) : this.allowCustomValues && this.filterText ? (this.addCustomChip(this.filterText, !0), e.preventDefault()) : e.defaultPrevented || he(this) && e.preventDefault();
        break;
      case "Delete":
      case "Backspace": {
        if (this.selectionDisplay === "single" || this.selectionDisplay === "fit" && this.selectedHiddenChipsCount > 0)
          return;
        this.activeChipIndex > -1 ? (e.preventDefault(), this.removeActiveChip()) : !this.filterText && this.isMulti() && (e.preventDefault(), this.removeLastChip());
        break;
      }
    }
  }
  onBeforeOpen() {
    this.scrollToActiveItem(), this.calciteComboboxBeforeOpen.emit();
  }
  onOpen() {
    this.calciteComboboxOpen.emit();
  }
  onBeforeClose() {
    this.calciteComboboxBeforeClose.emit();
  }
  onClose() {
    this.calciteComboboxClose.emit(), ae(this);
  }
  async setMaxScrollerHeight() {
    const { listContainerEl: e, open: t, referenceEl: i } = this;
    if (!e || !t)
      return;
    await this.reposition(!0);
    const s = this.getMaxScrollerHeight();
    e.style.maxBlockSize = s > 0 ? `${s}px` : "", e.style.inlineSize = `${i.clientWidth}px`, await this.reposition(!0);
  }
  calciteChipCloseHandler(e) {
    this.open = !1;
    const t = this.items.find((i) => i === e);
    t && this.toggleSelection(t, !1), this.calciteComboboxChipClose.emit();
  }
  clickHandler(e) {
    if (this.readOnly)
      return;
    const t = e.composedPath();
    if (t.some((i) => i.tagName === "CALCITE-CHIP")) {
      this.open = !1, e.preventDefault();
      return;
    }
    if (t.some((i) => i.classList?.contains(W.button))) {
      this.clearValue(), e.preventDefault();
      return;
    }
    this.open = !this.open, this.ensureRecentSelectedItemIsActive();
  }
  ensureRecentSelectedItemIsActive() {
    const { selectedItems: e } = this, t = e.length === 0 ? 0 : this.items.indexOf(e[e.length - 1]);
    this.updateActiveItemIndex(t);
  }
  hideChip(e) {
    e.classList.add(r.chipInvisible);
  }
  showChip(e) {
    e.classList.remove(r.chipInvisible);
  }
  refreshChipDisplay({ chipEls: e, availableHorizontalChipElSpace: t, chipContainerElGap: i }) {
    e.forEach((s) => {
      if (!s.selected)
        this.hideChip(s);
      else {
        const l = v(s);
        if (l && l < t) {
          t -= l + i, this.showChip(s);
          return;
        }
      }
      this.hideChip(s);
    });
  }
  async refreshSelectionDisplay() {
    if (await Ce(this), x(this.selectionMode) || !this.textInput.value)
      return;
    const { allSelectedIndicatorChipEl: e, chipContainerEl: t, selectionDisplay: i, placeholder: s, selectedIndicatorChipEl: l, textInput: { value: o } } = this, a = parseInt(getComputedStyle(t).gap.replace("px", "")), n = v(t), { fontSize: c, fontFamily: p } = getComputedStyle(o), u = (te(s, `${c} ${p}`) || parseInt(Y)) + a, y = v(e), D = v(l), _ = Math.max(y, D);
    if (this.setCompactSelectionDisplay({
      chipContainerElGap: a,
      chipContainerElWidth: n,
      inputWidth: u,
      largestSelectedIndicatorChipWidth: _
    }), i === "fit") {
      const A = Array.from(this.el.shadowRoot.querySelectorAll("calcite-chip")).filter((N) => N.closable), q = Math.round(n - ((this.selectedHiddenChipsCount > 0 ? D : 0) + a + u + a));
      this.refreshChipDisplay({ availableHorizontalChipElSpace: q, chipContainerElGap: a, chipEls: A }), this.setVisibleAndHiddenChips(A);
    }
  }
  setFloatingEl(e) {
    this.floatingEl = e, C(this);
  }
  setCompactSelectionDisplay({ chipContainerElGap: e, chipContainerElWidth: t, inputWidth: i, largestSelectedIndicatorChipWidth: s }) {
    const l = Math.round(s + e + i);
    (!this.maxCompactBreakpoint || this.maxCompactBreakpoint < l) && (this.maxCompactBreakpoint = l), this.compactSelectionDisplay = t < this.maxCompactBreakpoint;
  }
  setContainerEl(e) {
    e && this.resizeObserver?.observe(e), this.listContainerEl = e, this.transitionEl = e;
  }
  setChipContainerEl(e) {
    e && this.resizeObserver?.observe(e), this.chipContainerEl = e;
  }
  setReferenceEl(e) {
    this.referenceEl = e, C(this);
  }
  setAllSelectedIndicatorChipEl(e) {
    this.allSelectedIndicatorChipEl = e;
  }
  setSelectedIndicatorChipEl(e) {
    this.selectedIndicatorChipEl = e;
  }
  setVisibleAndHiddenChips(e) {
    let t = 0;
    e.forEach((s) => {
      s.selected && !s.classList.contains(r.chipInvisible) && t++;
    }), t !== this.selectedVisibleChipsCount && (this.selectedVisibleChipsCount = t);
    const i = this.getSelectedItems().length - t;
    i !== this.selectedHiddenChipsCount && (this.selectedHiddenChipsCount = i);
  }
  getMaxScrollerHeight() {
    const t = [...this.groupItems, ...this.getItems(!0)].filter((o) => !o.hidden), { maxItems: i } = this;
    let s = 0, l = 0;
    return t.length >= i && t.forEach((o) => {
      if (s < i) {
        const a = this.calculateScrollerHeight(o);
        l += a, s += 1;
      }
    }), l;
  }
  calculateScrollerHeight(e) {
    if (!e)
      return 0;
    const t = e.getBoundingClientRect().height, i = `:scope > ${P}, :scope > ${O}`, s = Array.from(e.querySelectorAll(i)).reduce((l, o) => l + o.getBoundingClientRect().height, 0);
    return t - s;
  }
  inputHandler(e) {
    const t = e.target.value;
    this.filterText = t;
  }
  getItemsAndGroups() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(e, t) {
    !e || this.selectionMode === "single-persist" && e.selected && e.value === this.value && !t || (this.isMulti() ? (e.selected = t, this.updateAncestors(e), this.selectedItems = this.getSelectedItems(), this.emitComboboxChange(), this.resetText(), this.filterItems("")) : (this.ignoreSelectedEventsFlag = !0, this.items.forEach((i) => i.selected = i === e ? t : !1), this.ignoreSelectedEventsFlag = !1, this.selectedItems = this.getSelectedItems(), this.emitComboboxChange(), this.textInput.value && (this.textInput.value.value = $(e)), this.open = !1, this.updateActiveItemIndex(-1), this.resetText(), this.filterItems("")));
  }
  updateAncestors(e) {
    if (this.selectionMode !== "ancestors")
      return;
    const t = z(e), i = we(e);
    e.selected ? t.forEach((s) => {
      s.selected = !0;
    }) : (i.forEach((s) => s.selected = !1), [...t].forEach((s) => {
      V(s) || (s.selected = !1);
    }));
  }
  getFilteredItems() {
    return this.filterText === "" ? this.items : this.items.filter((e) => !e.hidden);
  }
  getData() {
    return this.items.map((e) => ({
      description: e.description,
      filterDisabled: e.filterDisabled,
      label: e.heading,
      metadata: e.metadata,
      shortHeading: e.shortHeading,
      textLabel: e.textLabel,
      el: e
      // used for matching items to data
    }));
  }
  getGroupData() {
    return this.groupItems.map((e) => ({
      label: e.label,
      el: e
    }));
  }
  getNeedsIcon() {
    return x(this.selectionMode) && this.items.some((e) => e.icon);
  }
  resetText() {
    this.textInput.value && (this.textInput.value.value = ""), this.filterText = "";
  }
  getItems(e = !1) {
    return Array.from(this.el.querySelectorAll(P)).filter((i) => e || !i.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(O));
  }
  addCustomChip(e, t) {
    const i = this.items.find((s) => (s.heading || s.textLabel) === e);
    if (i)
      this.toggleSelection(i, !0);
    else {
      this.isMulti() || this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], !1);
      const s = document.createElement(
        // TODO: [MIGRATION] If this is dynamically creating a web component, please read the docs: https://qawebgis.esri.com/arcgis-components/?path=/docs/lumina-jsx--docs#rendering-jsx-outside-the-component
        "calcite-combobox-item"
      );
      s.value = e, s.heading = e, s.selected = !0, this.el.prepend(s), this.resetText(), t && this.setFocus(), this.updateItems(), this.filterItems(""), this.open = !0, this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], !1), this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], !1), this.setFocus();
  }
  previousChip() {
    const e = this.selectedItems.length - 1, t = this.activeChipIndex;
    this.activeChipIndex = t === -1 ? e : Math.max(t - 1, 0), this.updateActiveItemIndex(-1), this.focusChip();
  }
  nextChip() {
    const e = this.selectedItems.length - 1, t = this.activeChipIndex + 1;
    t > e ? (this.activeChipIndex = -1, this.setFocus()) : (this.activeChipIndex = t, this.focusChip()), this.updateActiveItemIndex(-1);
  }
  focusChip() {
    const e = this.selectedItems[this.activeChipIndex]?.guid;
    (e ? this.referenceEl.querySelector(`#${B}${e}`) : null)?.setFocus();
  }
  scrollToActiveItem() {
    const e = this.filteredItems[this.activeItemIndex];
    if (!e)
      return;
    const t = this.calculateScrollerHeight(e), { offsetHeight: i, scrollTop: s } = this.listContainerEl;
    i + s < e.offsetTop + t ? this.listContainerEl.scrollTop = e.offsetTop - i + t : e.offsetTop < s && (this.listContainerEl.scrollTop = e.offsetTop);
  }
  shiftActiveItemIndex(e) {
    const { length: t } = this.filteredItems, i = (this.activeItemIndex + t + e) % t;
    this.updateActiveItemIndex(i), this.scrollToActiveItem();
  }
  updateActiveItemIndex(e) {
    this.activeItemIndex = e;
    let t = null;
    this.filteredItems.forEach((i, s) => {
      s === e ? (i.active = !0, t = `${U}${i.guid}`) : i.active = !1;
    }), this.activeDescendant = t, this.activeItemIndex > -1 && (this.activeChipIndex = -1);
  }
  isAllSelected() {
    return this.getItems().length === this.getSelectedItems().length;
  }
  isMulti() {
    return !x(this.selectionMode);
  }
  comboboxFocusHandler() {
    this.disabled || this.textInput.value?.focus();
  }
  // #endregion
  // #region Rendering
  renderChips() {
    const { activeChipIndex: e, readOnly: t, scale: i, selectionMode: s, messages: l } = this;
    return this.selectedItems.map((o, a) => {
      const n = {
        chip: !0,
        "chip--active": e === a
      }, c = [...z(o)].reverse(), p = $(o), I = [...c, o].map((y) => $(y)), u = s !== "ancestors" ? p : I.join(" / ");
      return f(p, d`<calcite-chip .appearance=${t ? "outline" : "solid"} class=${h(n)} .closable=${!t} data-test-id=${`chip-${a}`} .icon=${o.icon} .iconFlipRtl=${o.iconFlipRtl} id=${(o.guid ? `${B}${o.guid}` : null) ?? m} .label=${u} .messageOverrides=${{ dismissLabel: l.removeTag }} @focusin=${() => this.activeChipIndex = a} @calciteChipClose=${() => this.calciteChipCloseHandler(o)} .scale=${i} .selected=${o.selected} .tabIndex=${e === a ? 0 : -1} title=${u ?? m} .value=${o.value}>${u}</calcite-chip>`);
    });
  }
  renderAllSelectedIndicatorChip() {
    const { compactSelectionDisplay: e, scale: t, selectedVisibleChipsCount: i, setAllSelectedIndicatorChipEl: s } = this, l = this.messages.allSelected;
    return d`<calcite-chip class=${h({
      chip: !0,
      [r.chipInvisible]: !(this.isAllSelected() && !i && !e)
    })} .label=${l} .scale=${t} title=${l ?? m} value ${g(s)}>${l}</calcite-chip>`;
  }
  renderAllSelectedIndicatorChipCompact() {
    const { compactSelectionDisplay: e, scale: t, selectedVisibleChipsCount: i } = this, s = this.messages.all || "All";
    return d`<calcite-chip class=${h({
      chip: !0,
      [r.chipInvisible]: !(this.isAllSelected() && !i && e)
    })} .label=${s} .scale=${t} title=${s} value>${s}</calcite-chip>`;
  }
  renderSelectedIndicatorChip() {
    const { compactSelectionDisplay: e, selectionDisplay: t, getSelectedItems: i, scale: s, selectedHiddenChipsCount: l, selectedVisibleChipsCount: o, setSelectedIndicatorChipEl: a } = this;
    let n, c;
    if (e)
      n = !0;
    else if (t === "single") {
      const p = i().length;
      this.isAllSelected() ? n = !0 : p > 0 ? n = !1 : n = !0, c = `${p} ${this.messages.selected}`;
    } else t === "fit" && (n = !!(this.isAllSelected() && o === 0 || l === 0), c = o > 0 ? `+${l}` : `${l} ${this.messages.selected}`);
    return d`<calcite-chip class=${h({
      chip: !0,
      [r.chipInvisible]: n
    })} .label=${c} .scale=${s} title=${c ?? m} value ${g(a)}>${c}</calcite-chip>`;
  }
  renderSelectedIndicatorChipCompact() {
    const { compactSelectionDisplay: e, selectionDisplay: t, getSelectedItems: i, scale: s, selectedHiddenChipsCount: l } = this;
    let o, a;
    if (e) {
      const n = i().length;
      this.isAllSelected() ? o = !0 : t === "fit" ? (o = !(l > 0), a = `${l || 0}`) : t === "single" && (o = !(n > 0), a = `${n}`);
    } else
      o = !0;
    return d`<calcite-chip class=${h({
      chip: !0,
      [r.chipInvisible]: o
    })} .label=${a} .scale=${s} title=${a ?? m} value>${a}</calcite-chip>`;
  }
  renderInput() {
    const { guid: e, disabled: t, placeholder: i, selectionMode: s, selectedItems: l, open: o } = this, a = x(s), n = l[0], c = !o && a && !!n && !this.filterText;
    return d`<span class=${h({
      "input-wrap": !0,
      "input-wrap--single": a
    })}>${c && f("label", d`<span class=${h({
      label: !0,
      "label--icon": !!n?.icon
    })}>${$(n)}</span>`) || ""}${f("input", d`<input aria-activedescendant=${this.activeDescendant ?? m} aria-controls=${`${S}${e}`} aria-errormessage=${L.validationMessage} aria-owns=${`${S}${e}`} aria-autocomplete=list .ariaExpanded=${o} aria-haspopup=listbox .ariaInvalid=${this.status === "invalid"} .ariaLabel=${ge(this)} class=${h({
      [r.input]: !0,
      "input--single": !0,
      [r.inputHidden]: c,
      "input--icon": this.showingInlineIcon && !!this.placeholderIcon
    })} data-test-id=input .disabled=${t} .id=${`${G}${e}`} @focus=${this.comboboxFocusHandler} @input=${this.inputHandler} placeholder=${i ?? m} .readOnly=${this.readOnly} role=combobox .tabIndex=${this.activeChipIndex === -1 ? 0 : -1} type=text .value=${Q(this.filterText ?? "")} ${g(this.textInput)}>`)}</span>`;
  }
  renderListBoxOptions() {
    return this.filteredItems.map((e) => d`<li .ariaSelected=${e.selected} id=${(e.guid ? `${U}${e.guid}` : null) ?? m} role=option tabindex=-1>${e.heading || e.textLabel}</li>`);
  }
  renderFloatingUIContainer() {
    const { setFloatingEl: e, setContainerEl: t, open: i } = this, s = {
      [r.listContainer]: !0,
      [T.animation]: !0,
      [T.animationActive]: i
    };
    return d`<div aria-hidden=true class=${h(r.floatingUIContainer)} ${g(e)}><div class=${h(s)} ${g(t)}><ul class=${h({ list: !0, "list--hide": !i })}><slot></slot></ul></div></div>`;
  }
  renderSelectedOrPlaceholderIcon() {
    const { open: e, placeholderIcon: t, placeholderIconFlipRtl: i, selectedItems: s } = this, l = s[0], o = l?.icon, a = t && (e || !l);
    return this.showingInlineIcon && f("selected-placeholder-icon", d`<span class="icon-start"><calcite-icon class=${h({
      [r.selectedIcon]: !a,
      [r.placeholderIcon]: a
    })} .flipRtl=${a ? i : l.iconFlipRtl} .icon=${a ? t : o} .scale=${k(this.scale)}></calcite-icon></span>`) || "";
  }
  renderChevronIcon() {
    const { open: e } = this;
    return f("chevron", d`<span class="icon-end"><calcite-icon class=${h(r.icon)} .icon=${e ? "chevron-up" : "chevron-down"} .scale=${k(this.scale)}></calcite-icon></span>`);
  }
  render() {
    const { selectionDisplay: e, guid: t, label: i, open: s, readOnly: l } = this, o = x(this.selectionMode), a = e === "all", n = e === "single", c = !o && e === "fit", p = !this.clearDisabled && this.value?.length > 0;
    return me({ disabled: this.disabled, children: d`<div aria-live=polite class=${h({
      wrapper: !0,
      "wrapper--single": o || !this.selectedItems.length,
      "wrapper--active": s
    })} @click=${this.clickHandler} @keydown=${this.keyDownHandler} ${g(this.setReferenceEl)}>${this.renderSelectedOrPlaceholderIcon()}${f("grid", d`<div class=${h({
      "grid-input": !0,
      [r.selectionDisplayFit]: c,
      [r.selectionDisplaySingle]: n
    })} ${g(this.setChipContainerEl)}>${!o && !n && this.renderChips() || ""}${!o && !a && [
      this.renderSelectedIndicatorChip(),
      this.renderSelectedIndicatorChipCompact(),
      this.renderAllSelectedIndicatorChip(),
      this.renderAllSelectedIndicatorChipCompact()
    ] || ""}<label class="screen-readers-only" .htmlFor=${`${G}${t}`} .id=${`${R}${t}`}>${i}</label>${this.renderInput()}</div>`)}${!l && p ? f("close-button", ke({ disabled: this.disabled, label: this.messages.clear, scale: this.scale })) : null}${!l && this.renderChevronIcon() || ""}</div><ul aria-labelledby=${`${R}${t}`} aria-multiselectable=true class="screen-readers-only" .id=${`${S}${t}`} role=listbox tabindex=-1>${this.renderListBoxOptions()}</ul>${this.renderFloatingUIContainer()}${de({ component: this })}${this.validationMessage && this.status === "invalid" ? $e({ icon: this.validationIcon, id: L.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
}
K("calcite-combobox", De);
export {
  De as Combobox
};
