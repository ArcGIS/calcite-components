import { h as p, L as h, x as w, s as b, y as x, j as u } from "./iframe.js";
import { e as m, n as f } from "./ref.js";
import { a as v } from "./dom.js";
import { u as g, I as y } from "./interactive.js";
import { c as $, s as E, a as C } from "./loadable.js";
import { I as F, C as k } from "./resources9.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const I = p`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);--tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}calcite-button:hover{--tw-shadow: var(--calcite-shadow-md);--tw-shadow-colored: var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}calcite-button:active{--tw-shadow: 0 2px 12px -4px rgba(0, 0, 0, .2), 0 2px 4px -2px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}`;
class L extends h {
  constructor() {
    super(...arguments), this.buttonEl = m(), this.appearance = "solid", this.disabled = !1, this.icon = F.plus, this.iconFlipRtl = !1, this.kind = "brand", this.loading = !1, this.scale = "m", this.textEnabled = !1;
  }
  static {
    this.properties = { appearance: 3, disabled: 7, icon: 3, iconFlipRtl: 7, kind: 3, label: 1, loading: 7, scale: 3, text: 1, textEnabled: 7 };
  }
  static {
    this.styles = I;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await $(this), v(this.buttonEl.value);
  }
  // #endregion
  // #region Lifecycle
  load() {
    E(this);
  }
  updated() {
    g(this);
  }
  loaded() {
    C(this);
  }
  // #endregion
  // #region Rendering
  render() {
    const { appearance: s, kind: o, disabled: t, loading: e, scale: i, textEnabled: l, icon: d, label: a, text: n, iconFlipRtl: r } = this, c = l ? null : a || n || null;
    return y({ disabled: t, children: w`<calcite-button .appearance=${s === "solid" ? "solid" : "outline-fill"} class=${b(k.button)} .disabled=${t} .iconFlipRtl=${r ? "start" : null} .iconStart=${d} .kind=${o} .label=${a} .loading=${e} round .scale=${i} title=${c ?? x} type=button width=auto ${f(this.buttonEl)}>${this.textEnabled ? this.text : null}</calcite-button>` });
  }
}
u("calcite-fab", L);
export {
  L as Fab
};
