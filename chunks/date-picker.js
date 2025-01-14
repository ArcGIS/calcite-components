import { h as A, L as y, k as v, i as p, x, j as S } from "./iframe.js";
import { d as h, n as r, p as d, g as D, a as o, b as n, s as g, c as m, i as u } from "./date.js";
import { c as R, s as E, a as C } from "./loadable.js";
import { n as b, b as z } from "./locale.js";
import { f as k } from "./dom.js";
import { u as M } from "./useT9n.js";
import { g as f, a as $ } from "./utils2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const P = 2, w = { dateStyle: "full" }, F = A`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:inline-block;inline-size:100%;overflow:visible;border-radius:0;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);vertical-align:top}:host([scale=s]){inline-size:236px;min-inline-size:216px;max-inline-size:380px}:host([scale=s][range][layout=horizontal]){inline-size:480px;min-inline-size:432px;max-inline-size:772px}:host([scale=m]){inline-size:298px;min-inline-size:272px;max-inline-size:480px}:host([scale=m][range][layout=horizontal]){inline-size:608px;min-inline-size:544px;max-inline-size:972px}:host([scale=l]){inline-size:334px;min-inline-size:320px;max-inline-size:600px}:host([scale=l][range][layout=horizontal]){inline-size:684px;min-inline-size:640px;max-inline-size:1212px}:host([hidden]){display:none}[hidden]{display:none}`;
class L extends y {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.rangeValueChangedByUser = !1, this.layout = "horizontal", this.messages = M({ blocking: !0 }), this.monthStyle = "wide", this.proximitySelectionDisabled = !1, this.range = !1, this.scale = "m", this.calciteDatePickerChange = v({ cancelable: !1 }), this.calciteDatePickerRangeChange = v({ cancelable: !1 }), this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { activeEndDate: 16, activeStartDate: 16, dateTimeFormat: 16, endAsDate: 16, hoverRange: 16, localeData: 16, startAsDate: 16, activeDate: 0, activeRange: 3, headingLevel: 11, layout: 3, max: 3, maxAsDate: 0, messageOverrides: 0, min: 3, minAsDate: 0, monthStyle: 1, numberingSystem: 3, proximitySelectionDisabled: 7, range: 7, scale: 3, value: 1, valueAsDate: 0 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = F;
  }
  // #endregion
  // #region Public Methods
  /**
   * Resets active date state.
   *
   * @private
   */
  async reset() {
    this.resetActiveDates(), this.rangeValueChangedByUser = !1;
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await R(this), k(this.el);
  }
  connectedCallback() {
    super.connectedCallback(), Array.isArray(this.value) ? this.valueAsDate = f(this.value) : this.value && (this.valueAsDate = h(this.value)), this.min && (this.minAsDate = h(this.min)), this.max && (this.maxAsDate = h(this.max)), this.setActiveStartAndEndDates();
  }
  async load() {
    E(this), await this.loadLocaleData(), this.onMinChanged(this.min), this.onMaxChanged(this.max);
  }
  willUpdate(t) {
    t.has("activeDate") && this.activeDateWatcher(this.activeDate), t.has("value") && this.valueHandler(this.value), t.has("valueAsDate") && this.valueAsDateWatcher(this.valueAsDate), t.has("min") && this.onMinChanged(this.min), t.has("max") && this.onMaxChanged(this.max), t.has("messages") && this.hasUpdated && this.loadLocaleData().catch(console.error);
  }
  loaded() {
    C(this);
  }
  // #endregion
  // #region Private Methods
  activeDateWatcher(t) {
    this.range && (this.rangeValueChangedByUser || (t ? (this.activeStartDate = t, this.activeEndDate = r(this.activeStartDate)) : this.resetActiveDates()));
  }
  valueHandler(t) {
    Array.isArray(t) ? (this.valueAsDate = f(t), this.rangeValueChangedByUser || this.resetActiveDates()) : t && (this.valueAsDate = h(t));
  }
  valueAsDateWatcher(t) {
    this.range && Array.isArray(t) && !this.rangeValueChangedByUser ? this.setActiveStartAndEndDates() : t && t !== this.activeDate && (this.activeDate = t);
  }
  onMinChanged(t) {
    this.minAsDate = h(t), this.range && this.setActiveStartAndEndDates();
  }
  onMaxChanged(t) {
    this.maxAsDate = h(t), this.range && this.setActiveStartAndEndDates();
  }
  keyDownHandler(t) {
    t.key === "Escape" && this.resetActiveDates();
  }
  async loadLocaleData() {
    p() && (b.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.messages._lang,
      useGrouping: !1
    }, this.localeData = await $(this.messages._lang), this.dateTimeFormat = z(this.messages._lang, w));
  }
  monthHeaderSelectChange(t) {
    const e = new Date(t.detail.date), a = t.detail.position;
    this.range ? a === "end" ? (this.activeEndDate = e, this.activeStartDate = d(e)) : (this.activeStartDate = e, this.activeEndDate = r(e)) : this.activeDate = e, t.stopPropagation();
  }
  monthActiveDateChange(t) {
    const e = new Date(t.detail);
    if (!this.range)
      this.activeDate = e;
    else {
      const a = e.getMonth(), i = a !== this.activeStartDate.getMonth() && a !== r(this.activeStartDate).getMonth();
      this.activeRange === "end" ? (!this.activeEndDate || this.activeStartDate && i) && (this.activeEndDate = e, this.activeStartDate = d(e)) : (this.activeStartDate && i || !this.activeStartDate) && (this.activeStartDate = e, this.activeEndDate = r(e));
    }
    t.stopPropagation();
  }
  monthHoverChange(t) {
    if (!this.range) {
      this.hoverRange = void 0;
      return;
    }
    const { valueAsDate: e } = this, a = Array.isArray(e) && e[0], i = Array.isArray(e) && e[1], s = new Date(t.detail);
    if (this.hoverRange = {
      focused: this.activeRange || "start",
      start: a,
      end: i
    }, this.proximitySelectionDisabled)
      i && a || !i && s >= a ? (this.hoverRange.focused = "end", this.hoverRange.end = s) : !i && s < a ? this.hoverRange = {
        focused: "start",
        start: s,
        end: a
      } : this.hoverRange = void 0;
    else if (this.activeRange)
      this.activeRange === "end" ? (this.hoverRange.end = s, this.hoverRange.focused = "end") : (this.hoverRange.start = s, this.hoverRange.focused = "start");
    else if (a && i) {
      const l = Math.abs(D(s, a)), c = Math.abs(D(s, i));
      s > i ? (this.hoverRange.end = s, this.hoverRange.focused = "end") : s < a ? (this.hoverRange.start = s, this.hoverRange.focused = "start") : s > a && s < i && (l < c ? (this.hoverRange.start = s, this.hoverRange.focused = "start") : (this.hoverRange.end = s, this.hoverRange.focused = "end"));
    } else
      a && (s < a ? this.hoverRange = {
        focused: "start",
        start: s,
        end: a
      } : (this.hoverRange.end = s, this.hoverRange.focused = "end"));
    t.stopPropagation();
  }
  monthMouseOutChange(t) {
    this.hoverRange && (this.hoverRange = void 0), t.stopPropagation();
  }
  resetActiveDates() {
    const { valueAsDate: t } = this;
    !Array.isArray(t) && t && t !== this.activeDate && (this.activeDate = new Date(t)), Array.isArray(t) && (t[0] && t[0] !== this.activeStartDate && (this.activeStartDate = new Date(t[0])), t[1] && t[1] !== this.activeEndDate && (this.activeEndDate = new Date(t[1]))), this.hoverRange = void 0;
  }
  getEndDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[1] || void 0;
  }
  setEndDate(t) {
    const e = this.getStartDate();
    this.rangeValueChangedByUser = !0, this.value = [o(e), o(t)], this.valueAsDate = [e, t], t && this.calciteDatePickerRangeChange.emit();
  }
  getStartDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[0];
  }
  setStartDate(t) {
    const e = this.getEndDate();
    this.rangeValueChangedByUser = !0, this.value = [o(t), o(e)], this.valueAsDate = [t, e], this.calciteDatePickerRangeChange.emit();
  }
  /**
   * Event handler for when the selected date changes
   *
   * @param event
   */
  monthDateChange(t) {
    const e = new Date(t.detail), a = o(e);
    if (!this.range && a === o(this.valueAsDate))
      return;
    if (!this.range) {
      this.value = a || "", this.valueAsDate = e || null, this.activeDate = e || null, this.calciteDatePickerChange.emit();
      return;
    }
    const i = this.getStartDate(), s = this.getEndDate();
    if (!i || !s && e < i)
      i && this.setEndDate(new Date(i)), this.activeRange == "end" ? this.setEndDate(e) : this.setStartDate(e);
    else if (!s)
      this.setEndDate(e);
    else if (this.proximitySelectionDisabled)
      this.setStartDate(e), this.setEndDate(null);
    else if (this.activeRange)
      this.activeRange == "end" ? this.setEndDate(e) : (e > s && (this.setEndDate(null), this.activeEndDate = null), this.setStartDate(e));
    else {
      const l = D(e, i), c = D(e, s);
      c === 0 || l < 0 ? this.setStartDate(e) : l === 0 || c < 0 ? this.setEndDate(e) : l < c ? this.setStartDate(e) : this.setEndDate(e);
    }
    t.stopPropagation(), this.calciteDatePickerChange.emit();
  }
  /**
   * Get an active date using the value, or current date as default
   *
   * @param value
   * @param min
   * @param max
   */
  getActiveDate(t, e, a) {
    const i = n(/* @__PURE__ */ new Date(), e, a);
    return n(this.activeDate, e, a) || t || (g(a, i) && !this.range ? m(i, e, a) : i);
  }
  getActiveEndDate(t, e, a) {
    return n(this.activeEndDate, e, a) || t || n(r(/* @__PURE__ */ new Date()), e, a);
  }
  setActiveStartAndEndDates() {
    if (this.range) {
      const t = n(Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate), e = n(Array.isArray(this.valueAsDate) ? this.valueAsDate[1] : null, this.minAsDate, this.maxAsDate);
      if (this.activeStartDate = this.getActiveDate(t, this.minAsDate, this.maxAsDate), this.activeEndDate = this.getActiveEndDate(e, this.minAsDate, this.maxAsDate), g(this.activeStartDate, this.activeEndDate)) {
        const a = m(d(this.activeEndDate), this.minAsDate, this.maxAsDate), i = r(this.activeEndDate);
        u(a, this.minAsDate, this.maxAsDate) ? this.activeStartDate = a : u(i, this.minAsDate, this.maxAsDate) && (this.activeEndDate = i);
      }
    }
  }
  // #endregion
  // #region Rendering
  render() {
    const t = n(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate), e = this.getActiveDate(t, this.minAsDate, this.maxAsDate), a = this.range && Array.isArray(this.valueAsDate) ? n(this.valueAsDate[1], this.minAsDate, this.maxAsDate) : null, i = this.range && this.activeRange ? this.activeRange === "start" ? this.minAsDate : t : this.minAsDate, s = this.range ? this.activeStartDate : e;
    return this.renderMonth(s, this.maxAsDate, i, t, a);
  }
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   *
   * @param activeDate
   * @param maxDate
   * @param minDate
   * @param date
   * @param endDate
   */
  renderMonth(t, e, a, i, s) {
    return this.localeData && x`<calcite-date-picker-month .activeDate=${t} .dateTimeFormat=${this.dateTimeFormat} .endDate=${this.range ? s : void 0} .headingLevel=${this.headingLevel || P} .hoverRange=${this.hoverRange} .layout=${this.layout} .localeData=${this.localeData} .max=${e} .messages=${this.messages} .min=${a} .monthStyle=${this.monthStyle} @calciteInternalDatePickerDayHover=${this.monthHoverChange} @calciteInternalDatePickerDaySelect=${this.monthDateChange} @calciteInternalDatePickerMonthActiveDateChange=${this.monthActiveDateChange} @calciteInternalDatePickerMonthChange=${this.monthHeaderSelectChange} @calciteInternalDatePickerMonthMouseOut=${this.monthMouseOutChange} .range=${this.range} .scale=${this.scale} .selectedDate=${this.activeRange === "end" ? s : i} .startDate=${this.range ? i : void 0}></calcite-date-picker-month>` || "";
  }
}
S("calcite-date-picker", L);
export {
  L as DatePicker
};
