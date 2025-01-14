import { h as C, L as $, k as Y, x as o, s, E as z, j as S } from "./iframe.js";
import { l as w } from "./live.js";
import { f as P, g as I, h as E } from "./global.js";
import { e as v, n as m } from "./ref.js";
import { b as h, n as u, p as x, f as A, e as O, j as y, i as b, h as f, k as F } from "./date.js";
import { c as W, A as R } from "./dom.js";
import { i as k } from "./key.js";
import { n as p } from "./locale.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const L = C`:host{display:block;--calcite-select-internal-border-width: 0;--calcite-select-internal-icon-border-inline-end-width: 0;--calcite-internal-select-font-weight: var(--calcite-font-weight-medium);--calcite-select-text-color: var(--calcite-color-text-1)}.header{display:flex;block-size:100%;align-items:center;justify-content:space-between}.chevron-container{display:flex;align-items:center}:host([scale=s]){block-size:24px;margin:var(--calcite-spacing-xs);margin-inline-start:var(--calcite-spacing-sm)}:host([scale=s]) .chevron-container,:host([scale=s]) .chevron{min-inline-size:24px;block-size:24px}:host([scale=m]){block-size:32px;margin:var(--calcite-spacing-sm);margin-inline-start:var(--calcite-spacing-sm-plus)}:host([scale=m]) .chevron-container,:host([scale=m]) .chevron{min-inline-size:32px;block-size:32px;--calcite-internal-action-padding-block: var(--calcite-spacing-xxs)}:host([scale=l]){block-size:44px;margin:var(--calcite-spacing-xs);margin-inline-start:var(--calcite-spacing-sm)}:host([scale=l]) .chevron-container,:host([scale=l]) .chevron{min-inline-size:44px;block-size:44px;--calcite-internal-action-padding-block: var(--calcite-spacing-sm-plus)}.chevron{box-sizing:content-box;display:flex;block-size:100%;inline-size:100%;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;--calcite-internal-action-padding-block: 0}.chevron:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.chevron:hover,.chevron:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none}.month-year-container{display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:flex-start;text-align:center;line-height:1;gap:var(--calcite-spacing-xxs)}.month-year-container.range-calendar{justify-content:center}.year-container{position:relative;display:flex;block-size:100%}.suffix{display:flex;align-items:center}.year,.suffix{background-color:var(--calcite-color-foreground-1);margin-inline:var(--calcite-spacing-xxs);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);font-size:var(--calcite-font-size-md);line-height:var(--calcite-font-line-height-fixed-lg)}.year{position:relative;display:inline-block;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent;inline-size:44px}.year:hover{transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:outline-color;outline:2px solid var(--calcite-color-border-2);outline-offset:-2px}.year:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.month-select{--calcite-select-spacing-inline: var(--calcite-spacing-xxs);--calcite-internal-select-spacing-block: var(--calcite-spacing-xxs);--calcite-internal-select-icon-container-padding-inline: var(--calcite-spacing-xxs);--calcite-select-font-size: var(--calcite-font-size-md);--calcite-select-line-height: var(--calcite-font-line-height-fixed-lg)}:host([scale=s]) .month-year-container .month-select{--calcite-select-spacing-inline: var(--calcite-spacing-base);--calcite-internal-select-spacing-block: var(--calcite-spacing-base);--calcite-internal-select-icon-container-padding-inline: var(--calcite-spacing-base);--calcite-internal-select-block-size: 24px;--calcite-select-font-size: var(--calcite-font-size);--calcite-select-line-height: var(--calcite-font-line-height-fixed-base)}:host([scale=s]) .month-year-container .year{inline-size:40px}:host([scale=s]) .month-year-container .year,:host([scale=s]) .month-year-container .suffix{font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-fixed-base)}:host([scale=l]) .month-year-container .month-select{--calcite-select-spacing-inline: var(--calcite-spacing-sm);--calcite-internal-select-spacing-block: var(--calcite-spacing-sm);--calcite-internal-select-icon-container-padding-inline: var(--calcite-spacing-sm);--calcite-internal-select-block-size: 44px;--calcite-select-font-size: var(--calcite-font-size-lg);--calcite-select-line-height: var(--calcite-font-line-height-fixed-xl)}:host([scale=l]) .month-year-container .year{inline-size:48px}:host([scale=l]) .month-year-container .year,:host([scale=l]) .month-year-container .suffix{font-size:var(--calcite-font-size-lg);line-height:var(--calcite-font-line-height-fixed-xl)}:host([hidden]){display:none}[hidden]{display:none}`, r = {
  header: "header",
  chevron: "chevron",
  chevronContainer: "chevron-container",
  chevronContainerLeft: "chevron-container--left",
  chevronContainerRight: "chevron-container--right",
  monthYearContainer: "month-year-container",
  monthPicker: "month-select",
  rangeCalendar: "range-calendar",
  suffix: "suffix",
  yearContainer: "year-container"
}, M = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right"
}, N = 16;
class H extends $ {
  constructor() {
    super(...arguments), this.monthPickerEl = v(), this.yearInputEl = v(), this.calciteInternalDatePickerMonthHeaderSelectChange = Y({ cancelable: !1 });
  }
  static {
    this.properties = { nextMonthDate: 16, prevMonthDate: 16, activeDate: 0, headingLevel: 9, localeData: 0, max: 0, messages: 0, min: 0, monthStyle: 1, position: 1, scale: 3, selectedDate: 0 };
  }
  static {
    this.styles = L;
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.setNextPrevMonthDates();
  }
  load() {
    this.parentDatePickerEl = W(this.el, "calcite-date-picker");
  }
  willUpdate(e) {
    this.hasUpdated && (e.has("activeDate") || e.has("localeData")) && this.setYearSelectMenuWidth(), this.hasUpdated && e.has("scale") && this.setYearSelectWidthOffset(), (e.has("min") || e.has("max") || e.has("activeDate")) && this.setNextPrevMonthDates();
  }
  loaded() {
    this.setYearSelectWidthOffset();
  }
  // #endregion
  // #region Private Methods
  setNextPrevMonthDates() {
    this.activeDate && (this.nextMonthDate = h(u(this.activeDate), this.min, this.max), this.prevMonthDate = h(x(this.activeDate), this.min, this.max));
  }
  /**
   * Increment year on UP/DOWN keys
   *
   * @param event
   */
  onYearKey(e) {
    const t = this.parseCalendarYear(e.target.value);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), this.setYear({ localizedYear: t, offset: -1 });
        break;
      case "ArrowUp":
        e.preventDefault(), this.setYear({ localizedYear: t, offset: 1 });
        break;
    }
  }
  formatCalendarYear(e) {
    return p.localize(`${A(e, this.localeData)}`);
  }
  parseCalendarYear(e) {
    return p.localize(`${O(Number(p.delocalize(e)), this.localeData)}`);
  }
  onYearChange(e) {
    this.setYear({
      localizedYear: this.parseCalendarYear(e.target.value)
    });
  }
  onYearInput(e) {
    this.setYear({
      localizedYear: this.parseCalendarYear(e.target.value),
      commit: !1
    });
  }
  prevMonthClick(e) {
    this.handleArrowClick(e, this.prevMonthDate);
  }
  prevMonthKeydown(e) {
    k(e.key) && this.prevMonthClick(e);
  }
  nextMonthClick(e) {
    this.handleArrowClick(e, this.nextMonthDate);
  }
  nextMonthKeydown(e) {
    k(e.key) && this.nextMonthClick(e);
  }
  async handleArrowClick(e, t) {
    e.preventDefault(), await this.handlePenultimateValidMonth(e), this.calciteInternalDatePickerMonthHeaderSelectChange.emit(t);
  }
  handleMonthChange(e) {
    const t = e.target, { abbreviated: i, wide: a } = this.localeData.months, n = (this.monthStyle === "wide" ? a : i).indexOf(t.value);
    let l = y(this.activeDate, n);
    b(l, this.min, this.max) || (l = h(l, this.min, this.max)), this.calciteInternalDatePickerMonthHeaderSelectChange.emit(l), this.setYearSelectMenuWidth();
  }
  getInRangeDate({ localizedYear: e, offset: t = 0 }) {
    const { min: i, max: a, activeDate: c } = this, n = Number(p.delocalize(e)), l = n.toString().length, d = isNaN(n) ? !1 : n + t, D = d && (!i || i.getFullYear() <= d) && (!a || a.getFullYear() >= d);
    if (d && D && l === e.length) {
      const g = new Date(c);
      return g.setFullYear(d), h(g, i, a);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   *
   * @param root0
   * @param root0.localizedYear
   * @param root0.commit
   * @param root0.offset
   */
  setYear({ localizedYear: e, commit: t = !0, offset: i = 0 }) {
    const { yearInputEl: { value: a }, activeDate: c } = this, n = this.getInRangeDate({ localizedYear: e, offset: i });
    n && this.calciteInternalDatePickerMonthHeaderSelectChange.emit(n), t && (a.value = this.formatCalendarYear((n || c).getFullYear()));
  }
  setYearSelectWidthOffset() {
    this.yearSelectWidthOffset = N + 3 * parseInt(this.getYearSelectPadding()), this.setYearSelectMenuWidth();
  }
  setYearSelectMenuWidth() {
    const e = this.monthPickerEl.value;
    e && requestAnimationFrame(() => {
      const t = getComputedStyle(e), i = `${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${t.fontSize}/${t.lineHeight} ${t.fontFamily}`, c = this.localeData.months[this.monthStyle][this.activeDate.getMonth()], n = Math.ceil(R(c, i));
      e.style.width = `${n + this.yearSelectWidthOffset}px`;
    });
  }
  isMonthInRange(e) {
    const t = y(this.activeDate, e);
    return !this.min && !this.max ? !0 : !!this.max && t < this.max || !!this.min && t > this.min;
  }
  async handlePenultimateValidMonth(e) {
    const a = e.target.getAttribute("data-direction") === "left";
    let c;
    if (a && this.min) {
      const n = h(x(this.activeDate), this.min, this.max);
      c = f(n, this.min);
    } else if (this.max) {
      const n = h(u(this.activeDate), this.min, this.max);
      c = f(n, this.max);
    }
    c && (this.position ? this.yearInputEl.value.focus() : await (a ? this.nextMonthAction.setFocus() : this.prevMonthAction.setFocus()));
  }
  getPx(e) {
    const t = Number(e.replace(/[rem|px]/g, "")), i = 16;
    return e.includes("rem") ? `${t * i}px` : `${t}px`;
  }
  getYearSelectPadding() {
    let e;
    switch (this.scale) {
      case "l":
        e = E;
        break;
      case "s":
        e = I;
        break;
      default:
        e = P;
        break;
    }
    return this.getPx(e);
  }
  // #endregion
  // #region Rendering
  render() {
    return o`<div class=${s(r.header)}>${this.renderContent()}</div>`;
  }
  renderContent() {
    const { localeData: e, activeDate: t } = this;
    if (!t || !e)
      return null;
    if (this.parentDatePickerEl) {
      const { numberingSystem: c, lang: n } = this.parentDatePickerEl;
      p.numberFormatOptions = {
        useGrouping: !1,
        ...c && { numberingSystem: c },
        ...n && { locale: n }
      };
    }
    const i = F(e.unitOrder), a = i.indexOf("y") < i.indexOf("m");
    return o`${this.position && o`<div class=${s({ [r.chevronContainer]: !0 })}>${this.position === "start" && this.renderChevron("left") || ""}</div>` || ""}<div class=${s({
      [r.monthYearContainer]: !0,
      [r.rangeCalendar]: !!this.position
    })}>${this.renderMonthYearContainer(a)}</div>${!this.position && o`<div class=${s({ [r.chevronContainer]: !0 })}>${this.renderChevron("left")}</div>` || ""}<div class=${s({ [r.chevronContainer]: !0 })}>${this.position !== "start" && this.renderChevron("right") || ""}</div>`;
  }
  renderMonthYearContainer(e) {
    return e ? [this.renderYearInput(), this.renderMonthPicker()] : [this.renderMonthPicker(), this.renderYearInput()];
  }
  renderMonthPicker() {
    const e = this.activeDate.getMonth(), t = this.localeData.months[this.monthStyle];
    return o`<calcite-select class=${s(r.monthPicker)} .label=${this.messages.monthMenu} @calciteSelectChange=${this.handleMonthChange} width=auto ${m(this.monthPickerEl)}>${t.map((i, a) => o`<calcite-option .disabled=${!this.isMonthInRange(a)} .selected=${a === e} .value=${i}>${i}</calcite-option>`)}</calcite-select>`;
  }
  renderYearInput() {
    const e = this.localeData.year?.suffix, t = this.formatCalendarYear(this.activeDate.getFullYear());
    return o`<span class=${s(r.yearContainer)}><input .ariaLabel=${this.messages.year} class=${s({
      year: !0
    })} inputmode=numeric maxlength=4 minlength=1 @change=${this.onYearChange} @input=${this.onYearInput} @keydown=${this.onYearKey} pattern=\\d* type=text .value=${w(t ?? "")} ${m(this.yearInputEl)}>${e && o`<span class=${s(r.suffix)}>${e}</span>` || ""}</span>`;
  }
  renderChevron(e) {
    const t = e === "right", i = f(t ? this.nextMonthDate : this.prevMonthDate, this.activeDate) || !b(this.activeDate, this.min, this.max);
    return o`<calcite-action alignment=center .ariaDisabled=${i} .ariaLabel=${t ? this.messages.nextMonth : this.messages.prevMonth} class=${s(r.chevron)} compact data-direction=${e ?? z} .disabled=${i} .icon=${t ? M.chevronRight : M.chevronLeft} icon-flip-rtl @click=${t ? this.nextMonthClick : this.prevMonthClick} @keydown=${t ? this.nextMonthKeydown : this.prevMonthKeydown} role=button .scale=${this.scale === "l" ? "l" : "m"} .text=${t ? this.messages.nextMonth : this.messages.prevMonth} ${m((a) => t ? this.nextMonthAction = a : this.prevMonthAction = a)}></calcite-action>`;
  }
}
S("calcite-date-picker-month-header", H);
export {
  H as DatePickerMonthHeader
};
