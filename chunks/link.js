import { h as p, L as u, n as b, x as n, s as m, y as e, j as f, C as k } from "./iframe.js";
import { n as g } from "./ref.js";
import { i as s, u as y } from "./static.js";
import { a as v, g as x } from "./dom.js";
import { u as $, I as E } from "./interactive.js";
import { c as z, s as C, a as w } from "./loadable.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const R = p`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0;border-style:none;font-family:inherit;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform,background-size;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;margin-block-start:-.25em}:host .calcite-link--icon.icon-start{margin-inline-end:.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0;color:var(--calcite-link-text-color, var(--calcite-color-text-link));line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor,currentColor),linear-gradient(var(--calcite-color-brand-underline),var(--calcite-color-brand-underline));background-position-x:0%,100%;background-position-y:min(1.5em,100%);background-repeat:no-repeat,no-repeat;background-size:0% 1px,100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px,100% 1px}:host span:active,:host a:active{background-size:100% 2px,100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%,100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
class T extends u {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.disabled = !1, this.download = !1, this.listen("click", this.clickHandler);
  }
  static {
    this.properties = { disabled: 7, download: [3, { converter: b }], href: 3, iconEnd: 3, iconFlipRtl: 3, iconStart: 3, rel: 1, target: 1 };
  }
  static {
    this.styles = R;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await z(this), v(this.childEl);
  }
  load() {
    C(this);
  }
  updated() {
    $(this);
  }
  loaded() {
    w(this);
  }
  // #endregion
  // #region Private Methods
  clickHandler(t) {
    this.disabled || t.isTrusted || this.childEl.click();
  }
  childElClickHandler(t) {
    t.isTrusted || t.stopPropagation();
  }
  storeTagRef(t) {
    this.childEl = t;
  }
  // #endregion
  // #region Rendering
  render() {
    const { download: t, el: a } = this, l = x(a), i = this.href ? "a" : "span", c = n`<calcite-icon class="calcite-link--icon icon-start" .flipRtl=${this.iconFlipRtl === "start" || this.iconFlipRtl === "both"} .icon=${this.iconStart} scale=s></calcite-icon>`, r = n`<calcite-icon class="calcite-link--icon icon-end" .flipRtl=${this.iconFlipRtl === "end" || this.iconFlipRtl === "both"} .icon=${this.iconEnd} scale=s></calcite-icon>`, o = i === "span" ? s`span` : s`a`, d = i === "span" ? "link" : null, h = i === "span" ? 0 : null;
    return this.el.role = "presentation", E({ disabled: this.disabled, children: y`<${o} class=${m({ [k.rtl]: l === "rtl" })} download=${(i === "a" ? t === !0 || t === "" ? "" : t || null : null) ?? e} href=${(i === "a" && this.href) ?? e} @click=${this.childElClickHandler} rel=${(i === "a" && this.rel) ?? e} .role=${d} tabindex=${h ?? e} target=${(i === "a" && this.target) ?? e} ${g(this.storeTagRef)}>${n`${this.iconStart ? c : null}<slot></slot>${this.iconEnd ? r : null}`}</${o}>` });
  }
}
f("calcite-link", T);
export {
  T as Link
};
