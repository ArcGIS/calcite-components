import { h as s, L as n, k as o, q as i, x as d, j as h } from "./iframe.js";
import { a as f } from "./date.js";
import { c as u, t as v } from "./dom.js";
import { u as p, I as g } from "./interactive.js";
import { i as y } from "./key.js";
import { n as c } from "./locale.js";
import { c as b, s as m, a as x } from "./loadable.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const k = s`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;cursor:pointer;color:var(--calcite-color-text-3);outline:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.day-wrapper{position:relative;display:flex;inline-size:100%;flex-direction:column;align-items:center;justify-content:center}.day{position:relative;display:flex;inline-size:100%;align-items:center;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-color-text-3);transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;line-height:var(--calcite-font-line-height-fixed-base);background:none;block-size:var(--calcite-internal-day-size);outline-color:var(--calcite-color-transparent)}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]){--calcite-internal-day-size: 32px}:host([scale=s]) .day{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-day-size: 40px}:host([scale=m]) .day{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-day-size: 44px}:host([scale=l]) .day{font-size:var(--calcite-font-size-0)}:host(:not([current-month])) .day{opacity:var(--calcite-opacity-disabled)}:host(:hover:not([disabled]):not([selected])) .day{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([range]):not([selected]).current-day) .day{color:var(--calcite-color-text-1);font-weight:var(--calcite-font-weight-medium)}:host(:focus[selected]) .day{z-index:var(--calcite-z-index);outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}:host(:focus:not([disabled]):not([selected])) .day{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-color-brand);color:var(--calcite-color-foreground-1)}:host([range-hover]:not([selected])) .day{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([highlighted]:not([selected])) .day{color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-current)}:host(:hover[highlighted]:not([selected]).inside-range--hover) .day{background-color:var(--calcite-color-foreground-current);color:var(--calcite-color-brand);outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:hover:not([highlighted]):not([selected]).outside-range--hover) .day{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}@media (forced-colors: active){.day{border-radius:0}:host([selected]){outline:2px solid canvasText}:host(:hover:not([selected])) .day{border-radius:50%}:host([range][selected]) .day,:host([highlighted]) .day,:host([range-hover]:not([selected])) .day{background-color:highlight}:host([range-hover]) .day,:host([range][selected][start-of-range]) .day,:host([range][selected][end-of-range]) .day{background-color:canvas}}:host([hidden]){display:none}[hidden]{display:none}`;
class z extends n {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.active = !1, this.currentMonth = !1, this.disabled = !1, this.endOfRange = !1, this.highlighted = !1, this.range = !1, this.rangeHover = !1, this.selected = !1, this.startOfRange = !1, this.calciteInternalDayHover = o({ cancelable: !1 }), this.calciteInternalDaySelect = o({ cancelable: !1 }), this.listen("pointerover", this.pointerOverHandler), this.listen("click", this.onClick), this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { active: 7, currentMonth: 7, dateTimeFormat: 0, day: 9, disabled: 7, endOfRange: 7, highlighted: 7, range: 7, rangeEdge: 3, rangeHover: 7, scale: 3, selected: 7, startOfRange: 7, value: 0 };
  }
  static {
    this.styles = k;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await b(this), this.el.focus();
  }
  load() {
    m(this), this.parentDatePickerEl = u(this.el, "calcite-date-picker");
  }
  updated() {
    p(this);
  }
  loaded() {
    x(this);
  }
  // #endregion
  // #region Private Methods
  onClick() {
    this.disabled || this.calciteInternalDaySelect.emit();
  }
  keyDownHandler(e) {
    y(e.key) && (this.disabled || this.calciteInternalDaySelect.emit(), e.preventDefault());
  }
  pointerOverHandler() {
    this.disabled || this.calciteInternalDayHover.emit();
  }
  // #endregion
  // #region Rendering
  render() {
    const e = f(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const { numberingSystem: t, lang: a } = this.parentDatePickerEl;
      c.numberFormatOptions = {
        useGrouping: !1,
        ...t && { numberingSystem: t },
        ...a && { locale: a }
      };
    }
    const r = c.localize(String(this.day)), l = this.dateTimeFormat.format(this.value);
    return this.el.ariaLabel = l, this.el.ariaSelected = v(this.active), i(this.el, "id", e), this.el.role = "button", i(this.el, "tabIndex", this.active && !this.disabled ? 0 : -1), g({ disabled: this.disabled, children: d`<div aria-hidden=true class="day-wrapper"><span class="day"><span class="text">${r}</span></span></div>` });
  }
}
h("calcite-date-picker-day", z);
export {
  z as DatePickerDay
};
