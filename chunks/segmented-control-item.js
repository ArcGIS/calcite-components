import { h as s, L as d, k as h, x as n, s as r, j as m } from "./iframe.js";
import { B as g, t as b } from "./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const u = {
  input: "input"
}, t = {
  label: "label",
  labelScale: (i) => `label--scale-${i}`,
  labelHorizontal: "label--horizontal",
  labelOutline: "label--outline",
  labelOutlineFill: "label--outline-fill",
  icon: "icon",
  iconSolo: "icon--solo"
}, f = s`:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out,border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-color-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out,border-color var(--calcite-internal-animation-timing-fast) ease-in-out,color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));outline-offset:-1px}.label--scale-s{padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:.125rem}.label--scale-m{padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:.375rem}.label--scale-l{padding-inline:1rem;padding-block:.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:active) label{background-color:var(--calcite-color-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-color-brand);background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-color-brand);color:var(--calcite-color-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .icon{color:highlightText}}.icon{position:relative;margin:0;display:inline-flex;line-height:inherit;margin-inline-start:var(--calcite-internal-segmented-control-icon-margin-start);margin-inline-end:var(--calcite-internal-segmented-control-icon-margin-end)}:host([icon-start]) .label--scale-s{--calcite-internal-segmented-control-icon-margin-end: .5rem}:host([icon-end]) .label--scale-s{--calcite-internal-segmented-control-icon-margin-start: .5rem}:host([icon-start]) .label--scale-m{--calcite-internal-segmented-control-icon-margin-end: .75rem}:host([icon-end]) .label--scale-m{--calcite-internal-segmented-control-icon-margin-start: .75rem}:host([icon-start]) .label--scale-l{--calcite-internal-segmented-control-icon-margin-end: 1rem}:host([icon-end]) .label--scale-l{--calcite-internal-segmented-control-icon-margin-start: 1rem}.label .icon--solo{--calcite-internal-segmented-control-icon-margin-start: 0;--calcite-internal-segmented-control-icon-margin-end: 0}:host([hidden]){display:none}[hidden]{display:none}`;
class p extends d {
  constructor() {
    super(...arguments), this.hasSlottedContent = !1, this.appearance = "solid", this.checked = !1, this.iconFlipRtl = !1, this.layout = "horizontal", this.scale = "m", this.calciteInternalSegmentedControlItemChange = h({ cancelable: !1 });
  }
  static {
    this.properties = { hasSlottedContent: 16, appearance: 1, checked: 7, iconEnd: 3, iconFlipRtl: 7, iconStart: 3, layout: 1, scale: 1, value: 1 };
  }
  static {
    this.styles = f;
  }
  // #endregion
  // #region Lifecycle
  willUpdate(e) {
    e.has("checked") && (this.hasUpdated || this.checked !== !1) && this.calciteInternalSegmentedControlItemChange.emit();
  }
  // #endregion
  // #region Private Methods
  handleSlotChange(e) {
    this.hasSlottedContent = g(e);
  }
  // #endregion
  // #region Rendering
  renderIcon(e, l = !1) {
    return e ? n`<calcite-icon class=${r({
      [t.icon]: !0,
      [t.iconSolo]: l
    })} .flipRtl=${this.iconFlipRtl} .icon=${e} scale=s></calcite-icon>` : null;
  }
  render() {
    const { appearance: e, checked: l, layout: o, scale: a, value: c } = this;
    return this.el.ariaChecked = b(l), this.el.ariaLabel = c, this.el.role = "radio", n`<label class=${r({
      [t.label]: !0,
      [t.labelScale(a)]: !0,
      [t.labelHorizontal]: o === "horizontal",
      [t.labelOutline]: e === "outline",
      [t.labelOutlineFill]: e === "outline-fill"
    })}>${this.renderContent()}</label>`;
  }
  renderContent() {
    const { hasSlottedContent: e, iconEnd: l, iconStart: o } = this, a = o || l;
    return !e && a ? [this.renderIcon(a, !0), n`<slot @slotchange=${this.handleSlotChange}></slot>`] : [
      this.renderIcon(o),
      n`<slot @slotchange=${this.handleSlotChange}></slot>`,
      n`<slot name=${u.input}></slot>`,
      this.renderIcon(l)
    ];
  }
}
m("calcite-segmented-control-item", p);
export {
  p as SegmentedControlItem
};
