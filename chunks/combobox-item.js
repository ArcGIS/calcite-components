import { h as S, L as k, k as h, x as o, s as i, o as y, E as I, j as L } from "./iframe.js";
import { i as l } from "./keyed.js";
import { g as M } from "./guid.js";
import { u as H, I as R } from "./interactive.js";
import { e as T, i as E, f as D } from "./utils5.js";
import { w as F, g as b } from "./component.js";
import { B as P } from "./dom.js";
import { h as n } from "./text.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const t = {
  active: "label--active",
  centerContent: "center-content",
  container: "container",
  custom: "icon--custom",
  description: "description",
  icon: "icon",
  iconSelected: "icon--selected",
  label: "label",
  scale: (s) => `scale--${s}`,
  selected: "label--selected",
  shortText: "short-text",
  single: "label--single",
  textContainer: "text-container",
  title: "title"
}, m = {
  contentEnd: "content-end",
  contentStart: "content-start"
}, U = S`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-s: .25rem;--calcite-combobox-item-spacing-unit-l: .5rem;--calcite-combobox-item-selector-icon-size: 1rem;--calcite-internal-combobox-item-description-font-size: var(--calcite-font-size-xs)}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-s: .375rem;--calcite-combobox-item-spacing-unit-l: .75rem;--calcite-combobox-item-selector-icon-size: 1rem;--calcite-internal-combobox-item-description-font-size: var(--calcite-font-size-sm)}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-s: .625rem;--calcite-combobox-item-spacing-unit-l: 1rem;--calcite-combobox-item-selector-icon-size: 1.5rem;--calcite-internal-combobox-item-description-font-size: var(--calcite-font-size)}.container{--calcite-combobox-item-indent-value: calc( var(--calcite-combobox-item-spacing-unit-l) * var(--calcite-combobox-item-spacing-indent-multiplier) )}:host(:focus){--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host,ul{margin:0;display:flex;flex-direction:column;padding:0}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);outline-color:transparent;word-wrap:break-word;word-break:break-word;justify-content:space-around;gap:var(--calcite-combobox-item-spacing-unit-l);padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline-end:var(--calcite-combobox-item-spacing-unit-l);padding-inline-start:var(--calcite-combobox-item-indent-value)}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-color-text-1)}.label--selected .title{font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.label:hover,.label:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.label:active{background-color:var(--calcite-color-foreground-3)}.icon{display:inline-flex;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);color:var(--calcite-color-border-1)}.icon--custom{margin-block-start:-1px}.icon--selected{color:var(--calcite-color-text-1)}.label--selected .icon{opacity:1;color:var(--calcite-color-brand)}.center-content{display:flex;flex-direction:column;flex-grow:1;padding-block:0}.description{font-size:var(--calcite-internal-combobox-item-description-font-size)}:host([selected]) .description,:host(:hover) .description{color:var(--calcite-color-text-2)}.short-text{color:var(--calcite-color-text-3);white-space:nowrap}.title{color:var(--calcite-color-text-1)}.title,.description,.short-text{line-height:var(--calcite-font-line-height-relative-snug)}.text-match{background-color:transparent;color:inherit;font-weight:var(--calcite-font-weight-bold)}`;
class j extends k {
  constructor() {
    super(...arguments), this.hasContent = !1, this.active = !1, this.disabled = !1, this.guid = M(), this.iconFlipRtl = !1, this.scale = "m", this.selected = !1, this.selectionMode = "multiple", this.calciteComboboxItemChange = h({ cancelable: !1 }), this.calciteInternalComboboxItemChange = h({ cancelable: !1 });
  }
  static {
    this.properties = { hasContent: 16, active: 7, ancestors: 0, description: 1, disabled: 7, filterDisabled: 7, filterTextMatchPattern: 2, guid: 3, heading: 1, icon: 3, iconFlipRtl: 7, label: 1, metadata: 0, scale: 1, selected: 7, selectionMode: 3, shortHeading: 1, textLabel: 3, value: 1 };
  }
  static {
    this.styles = U;
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.ancestors = T(this.el);
  }
  load() {
    F(this, "value", "textLabel");
  }
  willUpdate(e) {
    (e.has("disabled") && this.hasUpdated || e.has("selected") && this.hasUpdated || e.has("textLabel") && this.hasUpdated) && this.calciteInternalComboboxItemChange.emit();
  }
  updated() {
    H(this);
  }
  // #endregion
  // #region Private Methods
  handleDefaultSlotChange(e) {
    this.hasContent = P(e);
  }
  toggleSelected() {
    const e = this.selectionMode === "single-persist";
    this.disabled || e && this.selected || (this.selected = !this.selected, this.calciteComboboxItemChange.emit());
  }
  itemClickHandler() {
    this.toggleSelected();
  }
  // #endregion
  // #region Rendering
  renderIcon(e) {
    return this.icon ? l("icon", o`<calcite-icon class=${i({
      [t.custom]: !!this.icon,
      [t.iconSelected]: this.icon && this.selected
    })} .flipRtl=${this.iconFlipRtl} .icon=${this.icon || e} .scale=${b(this.scale)}></calcite-icon>`) : null;
  }
  renderSelectIndicator(e) {
    return l("indicator", o`<calcite-icon class=${i({
      [t.icon]: !0,
      [t.iconSelected]: this.selected
    })} .flipRtl=${this.iconFlipRtl} .icon=${e} .scale=${b(this.scale)}></calcite-icon>`);
  }
  renderChildren() {
    return l("default-slot-container", o`<ul .hidden=${!this.hasContent}><slot @slotchange=${this.handleDefaultSlotChange}></slot></ul>`);
  }
  render() {
    const { disabled: e, heading: p, label: u, textLabel: f, value: g, filterTextMatchPattern: c, description: r, shortHeading: d } = this, a = E(this.selectionMode), x = e || a ? void 0 : "check", v = a ? "bullet-point" : "check", w = p || f, $ = u || g, C = {
      [t.label]: !0,
      [t.selected]: this.selected,
      [t.active]: this.active,
      [t.single]: a
    }, z = D(this.el);
    return this.el.ariaHidden = "true", this.el.ariaLabel = $, R({ disabled: e, children: o`<div class=${i({
      [t.container]: !0,
      [t.scale(this.scale)]: !0
    })} style=${y({ "--calcite-combobox-item-spacing-indent-multiplier": `${z}` })}><li class=${i(C)} id=${this.guid ?? I} @click=${this.itemClickHandler}>${this.renderSelectIndicator(v)}<slot name=${m.contentStart}></slot>${this.renderIcon(x)}<div class=${i(t.centerContent)}><div class=${i(t.title)}>${n({
      text: w,
      pattern: c
    })}</div>${r ? o`<div class=${i(t.description)}>${n({
      text: r,
      pattern: c
    })}</div>` : null}</div>${d ? o`<div class=${i(t.shortText)}>${n({
      text: d,
      pattern: c
    })}</div>` : null}<slot name=${m.contentEnd}></slot></li>${this.renderChildren()}</div>` });
  }
}
L("calcite-combobox-item", j);
export {
  j as ComboboxItem
};
