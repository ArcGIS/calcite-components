import { h as L, L as T, k, x as v, s as d, j as D } from "./iframe.js";
import { n as b } from "./ref.js";
import { i as B } from "./keyed.js";
import { b as C, n as h, h as c, q as p, r as I, s as x, u as A, o as $, m as H, O as V, v as P } from "./utils4.js";
import { a as R } from "./dom.js";
import { c as K, s as z, a as U } from "./loadable.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const f = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input"
}, G = L`:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:100px;margin-inline-start:-1px}:host([hidden]){display:none}[hidden]{display:none}`, m = C();
class M extends T {
  constructor() {
    super(...arguments), this.internalColor = m, this.alphaChannel = !1, this.allowEmpty = !1, this.hexLabel = "Hex", this.scale = "m", this.value = h(c(m, this.alphaChannel), this.alphaChannel, !0), this.calciteColorPickerHexInputChange = k({ cancelable: !1 });
  }
  static {
    this.properties = { internalColor: 16, alphaChannel: 5, allowEmpty: 5, hexLabel: 1, messages: 0, numberingSystem: 1, scale: 3, value: 3 };
  }
  static {
    this.styles = G;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    return await K(this), R(this.hexInputNode);
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.previousNonNullValue = this.value;
    const { allowEmpty: t, alphaChannel: e, value: a } = this;
    if (a) {
      const n = h(a, e);
      p(n, e) && this.internalSetValue(n, n, !1);
      return;
    }
    t && this.internalSetValue(void 0, void 0, !1);
  }
  load() {
    z(this);
  }
  willUpdate(t) {
    t.has("value") && (this.hasUpdated || this.value !== h(c(m, this.alphaChannel), this.alphaChannel, !0)) && this.internalSetValue(this.value, t.get("value"), !1);
  }
  loaded() {
    U(this);
  }
  // #endregion
  // #region Private Methods
  onHexInputBlur() {
    const t = this.hexInputNode, e = t.value, a = `#${e}`, { allowEmpty: n, internalColor: l } = this, s = n && !e, i = I(a);
    (x(a, !0) || x(a, !1)) && this.onHexInputChange(), !(s || p(a) && i) && (t.value = n && !l ? "" : this.formatHexForInternalInput(A(
      // always display hex input in RRGGBB format
      l.object()
    )));
  }
  onOpacityInputBlur() {
    const t = this.opacityInputNode, e = t.value, { allowEmpty: a, internalColor: n } = this;
    a && !e || (t.value = a && !n ? "" : this.formatOpacityForInternalInput(n));
  }
  onOpacityInputInput() {
    this.onOpacityInputChange();
  }
  onHexInputChange() {
    let e = this.hexInputNode.value;
    if (e) {
      const a = h(e, !1);
      if (p(a) && this.alphaChannel && this.internalColor) {
        const l = h(this.internalColor.hexa(), !0).slice(-2);
        e = `${a + l}`;
      }
    }
    this.internalSetValue(e, this.value);
  }
  onOpacityInputChange() {
    const t = this.opacityInputNode;
    let e;
    if (!t.value)
      e = t.value;
    else {
      const a = $(Number(t.value));
      e = this.internalColor?.alpha(a).hexa();
    }
    this.internalSetValue(e, this.value);
  }
  onInputFocus(t) {
    t.type === "calciteInternalInputTextFocus" ? this.hexInputNode.selectText() : this.opacityInputNode.selectText();
  }
  onHexInputInput() {
    const t = `#${this.hexInputNode.value}`, e = this.value;
    p(t, this.alphaChannel) && I(t, this.alphaChannel) && this.internalSetValue(t, e);
  }
  onInputKeyDown(t) {
    const { altKey: e, ctrlKey: a, metaKey: n, shiftKey: l } = t, { alphaChannel: s, hexInputNode: i, internalColor: o, value: r } = this, { key: u } = t, y = t.composedPath();
    if (u === "Tab" && x(r, this.alphaChannel) || u === "Enter") {
      y.includes(i) ? this.onHexInputChange() : this.onOpacityInputChange(), u === "Enter" && t.preventDefault();
      return;
    }
    const w = u === "ArrowDown" || u === "ArrowUp", g = this.value;
    if (w) {
      if (!r) {
        this.internalSetValue(this.previousNonNullValue, g), t.preventDefault();
        return;
      }
      const E = u === "ArrowUp" ? 1 : -1, F = l ? 10 : 1;
      this.internalSetValue(c(this.nudgeRGBChannels(o, F * E, y.includes(i) ? "rgb" : "a"), s), g), t.preventDefault();
      return;
    }
    const N = e || a || n, S = u.length === 1, O = P.test(u);
    S && !N && !O && t.preventDefault();
  }
  onHexInputPaste(t) {
    const e = t.clipboardData.getData("text");
    p(e, this.alphaChannel) && I(e, this.alphaChannel) && (t.preventDefault(), this.hexInputNode.value = e.slice(1), this.internalSetValue(e, this.value));
  }
  internalSetValue(t, e, a = !0) {
    if (t) {
      const { alphaChannel: n } = this, l = h(t, n, n);
      if (p(l, n)) {
        const { internalColor: s } = this, i = C(l), o = h(c(i, n), n), r = !s || o !== h(c(s, n), n);
        this.internalColor = i, this.previousNonNullValue = o, this.value = o, r && a && this.calciteColorPickerHexInputChange.emit();
        return;
      }
    } else if (this.allowEmpty) {
      this.internalColor = void 0, this.value = void 0, a && this.calciteColorPickerHexInputChange.emit();
      return;
    }
    this.value = e;
  }
  storeHexInputRef(t) {
    this.hexInputNode = t;
  }
  storeOpacityInputRef(t) {
    this.opacityInputNode = t;
  }
  formatHexForInternalInput(t) {
    return t ? t.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(t) {
    return t ? `${H(t.alpha())}` : "";
  }
  nudgeRGBChannels(t, e, a) {
    let n;
    const l = t.array(), s = l.slice(0, 3);
    if (a === "rgb")
      n = [
        ...s.map((o) => o + e),
        this.alphaChannel ? l[3] : void 0
      ];
    else {
      const i = $(H(t.alpha()) + e);
      n = [...s, i];
    }
    return C(n);
  }
  // #endregion
  // #region Rendering
  render() {
    const { alphaChannel: t, hexLabel: e, internalColor: a, messages: n, scale: l, value: s } = this, i = this.formatHexForInternalInput(s), o = this.formatOpacityForInternalInput(a), r = l === "l" ? "m" : "s";
    return v`<div class=${d(f.container)}><calcite-input-text class=${d(f.hexInput)} .label=${n?.hex || e} .maxLength=${this.alphaChannel ? 8 : 6} @keydown=${this.onInputKeyDown} @paste=${this.onHexInputPaste} @calciteInputTextChange=${this.onHexInputChange} @calciteInputTextInput=${this.onHexInputInput} @calciteInternalInputTextBlur=${this.onHexInputBlur} @calciteInternalInputTextFocus=${this.onInputFocus} prefix-text=# .scale=${r} .value=${i} ${b(this.storeHexInputRef)}></calcite-input-text>${t ? B("opacity-input", v`<calcite-input-number class=${d(f.opacityInput)} .label=${n?.opacity} .max=${V.max} max-length=3 .min=${V.min} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.onInputKeyDown} @calciteInputNumberInput=${this.onOpacityInputInput} @calciteInternalInputNumberBlur=${this.onOpacityInputBlur} @calciteInternalInputNumberFocus=${this.onInputFocus} .scale=${r} suffix-text=% .value=${o} ${b(this.storeOpacityInputRef)}></calcite-input-number>`) : null}</div>`;
  }
}
D("calcite-color-picker-hex-input", M);
export {
  M as ColorPickerHexInput
};
