import { h as O, L as z, k as I, n as E, i as R, x as p, s as o, E as m, j as B } from "./iframe.js";
import { n as u } from "./ref.js";
import { l as S, d as l, b as D, a as c, m as L, o as $, i as N } from "./date.js";
import { f as W } from "./dom.js";
import { d as H, r as M, c as y, b as U, f as Y, h as _, F as A } from "./floating-ui.js";
import { c as q, d as j, s as G, H as K } from "./form.js";
import { u as Z, I as J } from "./interactive.js";
import { n as F } from "./key.js";
import { c as Q, d as X } from "./label.js";
import { c as ee, s as te, a as ae } from "./loadable.js";
import { n as b, a as ie, j as se } from "./locale.js";
import { o as k } from "./openCloseComponent.js";
import { g as x, a as ne } from "./utils2.js";
import { d as w, a as C, c as re } from "./focusTrapComponent.js";
import { g as T } from "./guid.js";
import { g as V } from "./component.js";
import { V as oe } from "./Validation.js";
import { s as le } from "./input.js";
import { u as ce } from "./useT9n.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const he = O`:host{--calcite-icon-size: 1rem;--calcite-spacing-eighth: .125rem;--calcite-spacing-quarter: .25rem;--calcite-spacing-half: .5rem;--calcite-spacing-three-quarters: .75rem;--calcite-spacing: 1rem;--calcite-spacing-plus-quarter: 1.25rem;--calcite-spacing-plus-half: 1.5rem;--calcite-spacing-double: 2rem;--calcite-menu-min-width: 10rem;--calcite-header-min-height: 3rem;--calcite-footer-min-height: 3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}:host([scale=s]){--calcite-toggle-spacing: .5rem;--calcite-internal-input-text-input-padding-inline-end: calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing: .75rem;--calcite-internal-input-text-input-padding-inline-end: calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing: 1rem;--calcite-internal-input-text-input-padding-inline-end: calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calendar-wrapper{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transform:translateZ(0)}.input-wrapper{position:relative}.input-wrapper .chevron-icon{color:var(--calcite-color-text-3)}.input-wrapper:focus-within .chevron-icon,.input-wrapper:active .chevron-icon,.input-wrapper:hover .chevron-icon{color:var(--calcite-color-text-1)}.input-wrapper:focus-within~.input-wrapper .chevron-icon,.input-wrapper:active~.input-wrapper .chevron-icon,.input-wrapper:hover~.input-wrapper .chevron-icon{color:var(--calcite-color-text-1)}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .container{display:flex}:host([range]) .input-container{display:flex;flex:1 1 auto}:host([range]) .input-wrapper{flex:1 1 auto}.divider-container{display:flex;align-items:stretch;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1)}:host([layout=horizontal]) .divider-container{inline-size:1px}.divider{display:inline-block;inline-size:1px;margin-block:var(--calcite-spacing-xxs);background-color:var(--calcite-color-border-2)}:host([layout=vertical]) .divider-container{block-size:1px;inline-size:100%;border-block-start-width:0px;border-block-end-width:0px;border-inline-start-width:1px;border-inline-end-width:0px;padding-inline:var(--calcite-spacing-md)}:host([layout=vertical]) .divider-container .divider{margin-block:0px;block-size:1px;inline-size:100%}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}.menu-container{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.input .calcite-input__wrapper{margin-block-start:0px}.vertical-chevron-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md);background-color:var(--calcite-color-foreground-1)}.vertical-chevron-container calcite-icon{color:var(--calcite-color-text-3)}.vertical-chevron-container calcite-icon:hover{color:var(--calcite-color-text-1)}:host([range][layout=vertical][scale=s]) .vertical-chevron-container,:host([range][layout=vertical][scale=s]) .divider-container{padding-inline:var(--calcite-spacing-sm)}:host([range][layout=vertical][scale=l]) .vertical-chevron-container,:host([range][layout=vertical][scale=l]) .divider-container{padding-inline:var(--calcite-spacing-lg)}.container:focus-within .vertical-chevron-container calcite-icon,.container:active .vertical-chevron-container calcite-icon,.container:hover .vertical-chevron-container calcite-icon{color:var(--calcite-color-text-1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`, n = {
  assistiveText: "assistive-text",
  calendarWrapper: "calendar-wrapper",
  container: "container",
  dividerContainer: "divider-container",
  divider: "divider",
  horizontalArrowContainer: "horizontal-arrow-container",
  inputBorderTopColorOne: "border-top-color-one",
  inputContainer: "input-container",
  inputNoBottomBorder: "input--no-bottom-border",
  inputNoRightBorder: "input--no-right-border",
  inputNoTopBorder: "input--no-top-border",
  inputNoLeftBorder: "input--no-left-border",
  inputWrapper: "input-wrapper",
  input: "input",
  menu: "menu-container",
  toggleIcon: "toggle-icon",
  verticalChevronContainer: "vertical-chevron-container",
  chevronIcon: "chevron-icon"
}, P = {
  validationMessage: "inputDatePickerValidationMessage"
};
function de(g) {
  if (!g)
    return !1;
  const { year: e } = S(g);
  return Number(e) < 100;
}
function ue(g) {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.floor(e / 100) * 100 + g;
}
class pe extends z {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.commonDateSeparators = [".", "-", "/"], this.dialogId = `date-picker-dialog--${T()}`, this.focusOnOpen = !1, this.focusTrapDeactivates = () => {
      this.open = !1;
    }, this.openTransitionProp = "opacity", this.placeholderTextId = `calcite-input-date-picker-placeholder-${T()}`, this.rangeStartValueChangedByUser = !1, this.userChangedValue = !1, this._value = "", this.valueAsDateChangedExternally = !1, this.focusedInput = "start", this.disabled = !1, this.focusTrapDisabled = !1, this.layout = "horizontal", this.messages = ce({ blocking: !0 }), this.monthStyle = "wide", this.open = !1, this.overlayPositioning = "absolute", this.placement = H, this.proximitySelectionDisabled = !1, this.range = !1, this.readOnly = !1, this.required = !1, this.scale = "m", this.status = "idle", this.validity = {
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
    }, this.calciteInputDatePickerBeforeClose = I({ cancelable: !1 }), this.calciteInputDatePickerBeforeOpen = I({ cancelable: !1 }), this.calciteInputDatePickerChange = I({ cancelable: !1 }), this.calciteInputDatePickerClose = I({ cancelable: !1 }), this.calciteInputDatePickerOpen = I({ cancelable: !1 }), this.listen("blur", this.blurHandler), this.listen("keydown", this.keyDownHandler), this.handleDateTimeFormatChange();
  }
  static {
    this.properties = { datePickerActiveDate: 16, focusedInput: 16, localeData: 16, disabled: 7, flipPlacements: 0, focusTrapDisabled: 7, form: 3, headingLevel: 11, layout: 3, max: 3, maxAsDate: 0, messageOverrides: 0, min: 3, minAsDate: 0, monthStyle: 1, name: 3, numberingSystem: 3, open: 7, overlayPositioning: 3, placement: 3, proximitySelectionDisabled: 5, range: 7, readOnly: 7, required: 7, scale: 3, status: 3, validationIcon: [3, { converter: E }], validationMessage: 1, validity: 0, value: 1, valueAsDate: 0 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = he;
  }
  /** Selected date as a string in ISO format (`"yyyy-mm-dd"`). */
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    e !== t && (this._value = e, this.valueWatcher(e));
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed If true, the repositioning is delayed.
   * @returns void
   */
  async reposition(e = !1) {
    const { floatingEl: t, referenceEl: a, placement: i, overlayPositioning: s, filteredFlipPlacements: r } = this;
    return M(this, {
      floatingEl: t,
      referenceEl: a,
      overlayPositioning: s,
      placement: i,
      flipPlacements: r,
      type: "menu"
    }, e);
  }
  /** Sets focus on the component. */
  async setFocus() {
    await ee(this), W(this.el);
  }
  connectedCallback() {
    super.connectedCallback();
    const { open: e } = this;
    if (e && this.openHandler(), this.min && (this.minAsDate = l(this.min)), this.max && (this.maxAsDate = l(this.max)), Array.isArray(this.value))
      this.valueAsDate = x(this.value);
    else if (this.value)
      try {
        const t = l(this.value), a = D(t, this.minAsDate, this.maxAsDate);
        this.valueAsDate = a;
      } catch {
        this.warnAboutInvalidValue(this.value), this.value = "";
      }
    else this.valueAsDate && (this.range && Array.isArray(this.valueAsDate) ? this.value = [c(this.valueAsDate[0]), c(this.valueAsDate[1])] : !this.range && !Array.isArray(this.valueAsDate) && (this.value = c(this.valueAsDate)));
    Q(this), q(this), this.setFilteredPlacements(), b.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.messages._lang,
      useGrouping: !1
    }, this.open && k(this), y(this);
  }
  async load() {
    te(this), this.handleDateTimeFormatChange(), await this.loadLocaleData(), this.onMinChanged(this.min), this.onMaxChanged(this.max);
  }
  willUpdate(e) {
    e.has("focusTrapDisabled") && (this.hasUpdated || this.focusTrapDisabled !== !1) && this.handleFocusTrapDisabled(this.focusTrapDisabled), e.has("disabled") && (this.hasUpdated || this.disabled !== !1) && this.handleDisabledAndReadOnlyChange(this.disabled), e.has("readOnly") && (this.hasUpdated || this.readOnly !== !1) && this.handleDisabledAndReadOnlyChange(this.readOnly), e.has("valueAsDate") && this.valueAsDateWatcher(this.valueAsDate), e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("min") && this.onMinChanged(this.min), e.has("max") && this.onMaxChanged(this.max), e.has("open") && (this.hasUpdated || this.open !== !1) && this.openHandler(), e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") && this.reposition(!0), (e.has("numberingSystem") || e.has("messages")) && this.handleDateTimeFormatChange(), e.has("layout") && (this.hasUpdated || this.layout !== "horizontal") && this.setReferenceEl(), e.has("messages") && this.loadLocaleData();
  }
  updated() {
    Z(this);
  }
  loaded() {
    ae(this), this.localizeInputValues(), y(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), w(this), X(this), j(this), U(this);
  }
  // #endregion
  // #region Private Methods
  handleFocusTrapDisabled(e) {
    this.open && (e ? w(this) : C(this));
  }
  handleDisabledAndReadOnlyChange(e) {
    e || (this.open = !1);
  }
  valueWatcher(e) {
    if (!this.userChangedValue) {
      let t;
      Array.isArray(e) ? t = x(e) : e ? t = l(e) : t = void 0, !this.valueAsDateChangedExternally && t !== this.valueAsDate && (this.valueAsDate = t), this.localizeInputValues();
    }
    this.userChangedValue = !1;
  }
  valueAsDateWatcher(e) {
    const t = Array.isArray(e) ? [c(e[0]), c(e[1])] : c(e);
    this.datePickerActiveDate = Array.isArray(e) ? e[0] : e, this.value !== t && (this.valueAsDateChangedExternally = !0, this.value = t, this.valueAsDateChangedExternally = !1);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  onMinChanged(e) {
    this.minAsDate = l(e);
  }
  onMaxChanged(e) {
    this.maxAsDate = l(e);
  }
  openHandler() {
    k(this), !(this.disabled || this.readOnly) && this.reposition(!0);
  }
  calciteInternalInputInputHandler(e) {
    const t = e.target, a = t.value, i = this.parseNumerals(a), s = this.formatNumerals(i);
    t.value = s;
    const { year: r } = L(a, this.localeData);
    if (r && r.length < 4)
      return;
    const h = $(a, this.localeData);
    N(h, this.min, this.max) && (this.datePickerActiveDate = h);
  }
  calciteInternalInputBlurHandler() {
    this.commitValue();
  }
  handleDateTimeFormatChange() {
    const e = {
      // we explicitly set numberingSystem to prevent the browser-inferred value
      // @see [Arabic numbering system support context](https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195) for more info.
      numberingSystem: ie(this.numberingSystem)
    };
    this.dateTimeFormat = new Intl.DateTimeFormat(se(this.messages._lang), e);
  }
  setReferenceEl() {
    const { focusedInput: e, layout: t, endWrapper: a, startWrapper: i } = this;
    this.referenceEl = e === "end" || t === "vertical" ? a || i : i || a, requestAnimationFrame(() => y(this));
  }
  onInputWrapperPointerDown() {
    this.currentOpenInput = this.focusedInput;
  }
  onInputWrapperClick(e) {
    const { range: t, endInput: a, startInput: i, currentOpenInput: s } = this, h = e.currentTarget.getAttribute("data-position");
    e.composedPath().find((v) => v.classList?.contains(n.toggleIcon)) && (h === "start" ? i : a).setFocus(), (!t || !this.open || s === h) && (this.open = !this.open);
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t } = this;
    this.filteredFlipPlacements = t ? Y(t, e) : null;
  }
  setTransitionEl(e) {
    this.transitionEl = e;
  }
  onLabelClick() {
    this.setFocus();
  }
  onBeforeOpen() {
    this.calciteInputDatePickerBeforeOpen.emit();
  }
  onOpen() {
    C(this, {
      onActivate: () => {
        this.focusOnOpen && (this.datePickerEl?.setFocus(), this.focusOnOpen = !1);
      }
    }), this.calciteInputDatePickerOpen.emit();
  }
  onBeforeClose() {
    this.calciteInputDatePickerBeforeClose.emit();
  }
  onClose() {
    this.calciteInputDatePickerClose.emit(), _(this), w(this), this.focusOnOpen = !1, this.datePickerEl?.reset();
  }
  syncHiddenFormInput(e) {
    le("date", this, e);
  }
  setStartInput(e) {
    this.startInput = e;
  }
  setEndInput(e) {
    this.endInput = e;
  }
  blurHandler() {
    this.open = !1;
  }
  commitValue() {
    const { focusedInput: e, value: t } = this, a = `${e}Input`, i = this[a].value, s = $(i, this.localeData), r = c(s), h = Array.isArray(t);
    if (this.range) {
      const d = e === "start" ? 0 : 1;
      if (h) {
        if (r === t[d])
          return;
        s ? (this.setRangeValue([
          e === "start" ? s : l(t[0]),
          e === "end" ? s : l(t[1])
        ]), this.localizeInputValues()) : this.setRangeValue([
          e === "end" && l(t[0]),
          e === "start" && l(t[1])
        ]);
      } else
        s && (this.setRangeValue([
          e === "start" ? s : l(t[0]),
          e === "end" ? s : l(t[1])
        ]), this.localizeInputValues());
    } else {
      if (r === t)
        return;
      this.setValue(s), this.localizeInputValues();
    }
  }
  keyDownHandler(e) {
    const { defaultPrevented: t, key: a } = e;
    if (t)
      return;
    const i = e.composedPath().some((s) => s.tagName === "CALCITE-SELECT");
    a === "Enter" ? (e.preventDefault(), this.commitValue(), this.shouldFocusRangeEnd() ? this.endInput?.setFocus() : this.shouldFocusRangeStart() && this.startInput?.setFocus(), G(this) && this.restoreInputFocus(!0)) : (a === "ArrowDown" || a === "ArrowUp") && !i ? (this.open = !0, this.focusOnOpen = !0, e.preventDefault()) : this.open && a === "Escape" && (this.open = !1, e.preventDefault(), this.restoreInputFocus(!0));
  }
  startInputFocus() {
    this.focusedInput = "start";
  }
  endInputFocus() {
    this.focusedInput = "end";
  }
  setFloatingEl(e) {
    this.floatingEl = e, y(this);
  }
  setStartWrapper(e) {
    this.startWrapper = e, this.setReferenceEl();
  }
  setEndWrapper(e) {
    this.endWrapper = e, this.setReferenceEl();
  }
  setDatePickerRef(e) {
    this.datePickerEl = e, re(this, {
      focusTrapEl: e,
      focusTrapOptions: {
        allowOutsideClick: !0,
        // Allow outside click and let the popover manager take care of closing the popover.
        clickOutsideDeactivates: !1,
        initialFocus: !1,
        setReturnFocus: !1,
        onDeactivate: this.focusTrapDeactivates
      }
    });
  }
  async loadLocaleData() {
    R() && (b.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.messages._lang,
      useGrouping: !1
    }, this.localeData = await ne(this.messages._lang), this.localizeInputValues());
  }
  /**
   * Event handler for when the selected date changes
   *
   * @param event CalciteDatePicker custom change event
   */
  handleDateChange(e) {
    this.range || (e.stopPropagation(), this.setValue(e.target.valueAsDate), this.localizeInputValues(), this.restoreInputFocus());
  }
  shouldFocusRangeStart() {
    const e = this.value[0];
    return !!(this.value[1] && !e && this.focusedInput === "end" && this.startInput);
  }
  shouldFocusRangeEnd() {
    const e = this.value[0], t = this.value[1];
    return !!(e && !t && this.focusedInput === "start" && this.endInput);
  }
  handleDateRangeChange(e) {
    if (!this.range)
      return;
    e.stopPropagation();
    const t = e.target.valueAsDate;
    this.setRangeValue(t), this.localizeInputValues(), this.restoreInputFocus();
  }
  restoreInputFocus(e = !1) {
    if (!this.range) {
      this.startInput.setFocus(), this.open = !1;
      return;
    }
    if (e) {
      this.focusInput();
      return;
    }
    this.rangeStartValueChangedByUser = this.focusedInput === "start", this.focusedInput = "end", !(this.shouldFocusRangeStart() || this.rangeStartValueChangedByUser) && (this.open = !1, this.focusInput());
  }
  localizeInputValues() {
    const e = D(this.range ? Array.isArray(this.valueAsDate) && this.valueAsDate[0] || void 0 : this.valueAsDate, this.minAsDate, this.maxAsDate), t = this.range ? D(Array.isArray(this.valueAsDate) && this.valueAsDate[1] || void 0, this.minAsDate, this.maxAsDate) : null;
    this.setInputValue((e && this.dateTimeFormat.format(e)) ?? "", "start"), this.setInputValue((this.range && t && this.dateTimeFormat.format(t)) ?? "", "end");
  }
  setInputValue(e, t = "start") {
    const a = this[`${t}Input`];
    a && (a.value = e);
  }
  setRangeValue(e) {
    if (!this.range)
      return;
    const { value: t } = this, a = Array.isArray(t), i = Array.isArray(e), s = i ? e[0] : null;
    let r = i ? c(s) : "";
    r && (r = this.getNormalizedDate(r));
    const h = i ? e[1] : null;
    let d = i ? c(h) : "";
    d && (d = this.getNormalizedDate(d));
    const f = r || d ? [r, d] : "";
    if (f === t)
      return;
    this.userChangedValue = !0, this.value = f, this.valueAsDate = f ? x(f) : void 0;
    const v = this.calciteInputDatePickerChange.emit();
    v && v.defaultPrevented && (this.value = t, a ? (this.setInputValue(t[0], "start"), this.setInputValue(t[1], "end")) : (this.value = t, this.setInputValue(t)));
  }
  setValue(e) {
    if (this.range)
      return;
    const t = this.value;
    let a = c(e);
    if (a = this.getNormalizedDate(a), a === t)
      return;
    this.userChangedValue = !0, this.valueAsDate = a ? l(a) : void 0, this.value = a || "", this.calciteInputDatePickerChange.emit().defaultPrevented && (this.value = t, this.setInputValue(t));
  }
  warnAboutInvalidValue(e) {
    console.warn(`The specified value "${e}" does not conform to the required format, "YYYY-MM-DD".`);
  }
  formatNumerals(e) {
    return e ? e.split("").map((t) => this.commonDateSeparators?.includes(t) ? this.localeData?.separator : F?.includes(t) ? b?.numberFormatter?.format(Number(t)) : t).join("") : "";
  }
  parseNumerals(e) {
    return e ? e.split("").map((t) => F.includes(t) ? b.delocalize(t) : t).join("") : "";
  }
  getNormalizedDate(e) {
    if (!e)
      return "";
    if (!de(e))
      return e;
    const { day: t, month: a, year: i } = S(e);
    return `${ue(Number(i))}-${a}-${t}`;
  }
  focusInput() {
    (this.focusedInput === "start" ? this.startInput : this.endInput).setFocus();
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: e, messages: { _lang: t }, messages: a, numberingSystem: i, readOnly: s } = this;
    return b.numberFormatOptions = {
      numberingSystem: i,
      locale: t,
      useGrouping: !1
    }, J({ disabled: this.disabled, children: p`${this.localeData && p`<div class=${o(n.container)}><div class=${o(n.inputContainer)}><div class=${o(n.inputWrapper)} data-position=start @click=${this.onInputWrapperClick} @pointerdown=${this.onInputWrapperPointerDown} ${u(this.setStartWrapper)}><calcite-input-text aria-controls=${this.dialogId ?? m} aria-describedby=${this.placeholderTextId ?? m} aria-errormessage=${P.validationMessage} aria-autocomplete=none .ariaExpanded=${this.open} aria-haspopup=dialog .ariaInvalid=${this.status === "invalid"} class=${o({
      [n.input]: !0,
      [n.inputNoBottomBorder]: this.layout === "vertical" && this.range,
      [n.inputNoRightBorder]: this.range
    })} .disabled=${e} icon=calendar @calciteInputTextInput=${this.calciteInternalInputInputHandler} @calciteInternalInputTextBlur=${this.calciteInternalInputBlurHandler} @calciteInternalInputTextFocus=${this.startInputFocus} .placeholder=${this.localeData?.placeholder} .readOnly=${s} role=combobox .scale=${this.scale} .status=${this.status} ${u(this.setStartInput)}></calcite-input-text>${!this.readOnly && !this.range && this.renderToggleIcon(this.open && this.focusedInput === "start") || ""}<span aria-hidden=true class=${o(n.assistiveText)} id=${this.placeholderTextId ?? m}>${a.dateFormat.replace("{format}", this.localeData?.placeholder)}</span></div><div .ariaHidden=${!this.open} .ariaLabel=${a.chooseDate} aria-live=polite aria-modal=true class=${o(n.menu)} id=${this.dialogId ?? m} role=dialog ${u(this.setFloatingEl)}><div class=${o({
      [n.calendarWrapper]: !0,
      [A.animation]: !0,
      [A.animationActive]: this.open
    })} ${u(this.setTransitionEl)}><calcite-date-picker .activeDate=${this.datePickerActiveDate} .activeRange=${this.focusedInput} .headingLevel=${this.headingLevel} .layout=${this.layout} .max=${this.max} .maxAsDate=${this.maxAsDate} .messageOverrides=${this.messageOverrides} .min=${this.min} .minAsDate=${this.minAsDate} .monthStyle=${this.monthStyle} .numberingSystem=${i} @calciteDatePickerChange=${this.handleDateChange} @calciteDatePickerRangeChange=${this.handleDateRangeChange} .proximitySelectionDisabled=${this.proximitySelectionDisabled} .range=${this.range} .scale=${this.scale} tabindex=${(this.open ? void 0 : -1) ?? m} .valueAsDate=${this.valueAsDate} ${u(this.setDatePickerRef)}></calcite-date-picker></div></div>${this.range && p`<div class=${o(n.dividerContainer)}><div class=${o(n.divider)}></div></div>` || ""}${this.range && p`<div class=${o(n.inputWrapper)} data-position=end @click=${this.onInputWrapperClick} @pointerdown=${this.onInputWrapperPointerDown} ${u(this.setEndWrapper)}><calcite-input-text aria-controls=${this.dialogId ?? m} aria-autocomplete=none .ariaExpanded=${this.open} aria-haspopup=dialog class=${o({
      [n.input]: !0,
      [n.inputNoTopBorder]: this.layout === "vertical" && this.range,
      [n.inputNoLeftBorder]: this.layout === "horizontal" && this.range,
      [n.inputNoRightBorder]: this.layout === "vertical" && this.range
    })} .disabled=${e} icon=calendar @calciteInputTextInput=${this.calciteInternalInputInputHandler} @calciteInternalInputTextBlur=${this.calciteInternalInputBlurHandler} @calciteInternalInputTextFocus=${this.endInputFocus} .placeholder=${this.localeData?.placeholder} .readOnly=${s} role=combobox .scale=${this.scale} .status=${this.status} ${u(this.setEndInput)}></calcite-input-text>${!this.readOnly && this.layout === "horizontal" && this.renderToggleIcon(this.open) || ""}</div>` || ""}</div>${this.range && this.layout === "vertical" && p`<div class=${o(n.verticalChevronContainer)}><calcite-icon .icon=${this.open ? "chevron-up" : "chevron-down"} .scale=${V(this.scale)}></calcite-icon></div>` || ""}</div>` || ""}${K({ component: this })}${this.validationMessage && this.status === "invalid" ? oe({ icon: this.validationIcon, id: P.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
  renderToggleIcon(e) {
    return p`<span class=${o(n.toggleIcon)} tabindex=-1><calcite-icon class=${o(n.chevronIcon)} .icon=${e ? "chevron-up" : "chevron-down"} .scale=${V(this.scale)}></calcite-icon></span>`;
  }
}
B("calcite-input-date-picker", pe);
export {
  pe as InputDatePicker
};
