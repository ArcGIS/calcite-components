import { h as oe, L as ae, k as K, x as u, s as c, o as $, E as x, j as le } from "./iframe.js";
import { n as v } from "./ref.js";
import { c as se } from "./repeat.js";
import { i as D } from "./keyed.js";
import { H as p, D as m, C as H, a as I, n as O, h as S, p as U, b, c as P, d as A, g as ne, e as re, f as j, O as y, R as k, i as n, o as z, t as ce, j as N, k as W, l as he, m as R, S as _ } from "./utils4.js";
import { e as B, f as de, g as pe } from "./dom.js";
import { u as ue, I as Ce } from "./interactive.js";
import { i as fe } from "./key.js";
import { c as ge, s as me, a as ve } from "./loadable.js";
import { r as V, c as Se, a as be } from "./math.js";
import { u as ye } from "./useT9n.js";
import { t as we } from "./throttle.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const $e = oe`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing: 8px}:host([scale=s]) .container{inline-size:198px}:host([scale=s]) .saved-colors{gap:.25rem;grid-template-columns:repeat(auto-fill,20px)}:host([scale=m]){--calcite-color-picker-spacing: 12px}:host([scale=m]) .container{inline-size:238px}:host([scale=l]){--calcite-color-picker-spacing: 16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:302px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill,32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.color-field,.control-and-scope{-webkit-user-select:none;user-select:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));outline-offset:6px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex}.channel{flex-grow:1}.channel[data-channel-index="3"]{margin-inline-start:-1px;min-inline-size:81px}:host([scale=s]) .channel[data-channel-index="3"]{min-inline-size:68px}:host([scale=l]) .channel[data-channel-index="3"]{min-inline-size:88px}.saved-colors{display:grid;gap:.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill,24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`, xe = 16;
class Ae extends ae {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.captureColorFieldColor = (e, t, i = !0) => {
      const { dimensions: { colorField: { height: o, width: a } } } = this, l = Math.round(p.s / a * e), s = Math.round(p.v / o * (o - t));
      this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(l).value(s), i);
    }, this._color = m, this.drawColorControls = we((e = "all") => {
      (e === "all" || e === "color-field") && this.colorFieldRenderingContext && this.drawColorField(), (e === "all" || e === "hue-slider") && this.hueSliderRenderingContext && this.drawHueSlider(), this.alphaChannel && (e === "all" || e === "opacity-slider") && this.opacitySliderRenderingContext && this.drawOpacitySlider();
    }, xe), this.globalPointerMoveHandler = (e) => {
      const { activeCanvasInfo: t, el: i } = this;
      if (!i.isConnected || !t)
        return;
      const { context: o, bounds: a } = t;
      let l, s;
      const { clientX: r, clientY: h } = e;
      o.canvas.matches(":hover") ? (l = r - a.x, s = h - a.y) : (r < a.x + a.width && r > a.x ? l = r - a.x : r < a.x ? l = 0 : l = a.width, h < a.y + a.height && h > a.y ? s = h - a.y : h < a.y ? s = 0 : s = a.height), o === this.colorFieldRenderingContext ? this.captureColorFieldColor(l, s, !1) : o === this.hueSliderRenderingContext ? this.captureHueSliderColor(l) : o === this.opacitySliderRenderingContext && this.captureOpacitySliderValue(l);
    }, this.globalPointerUpHandler = (e) => {
      if (!B(e))
        return;
      const t = this.activeCanvasInfo;
      this.activeCanvasInfo = null, this.drawColorControls(), t && this.calciteColorPickerChange.emit();
    }, this.internalColorUpdateContext = null, this.isActiveChannelInputEmpty = !1, this.mode = H.HEX, this.shiftKeyChannelAdjustment = 0, this.upOrDownArrowKeyTracker = null, this._valueWasSet = !1, this.channelMode = "rgb", this.channels = this.toChannels(m), this.dimensions = I.m, this.savedColors = [], this.allowEmpty = !1, this.alphaChannel = !1, this.channelsDisabled = !1, this.clearable = !1, this.disabled = !1, this.format = "auto", this.hexDisabled = !1, this.messages = ye({ blocking: !0 }), this.savedDisabled = !1, this.scale = "m", this.calciteColorPickerChange = K({ cancelable: !1 }), this.calciteColorPickerInput = K({ cancelable: !1 }), this.listen("keydown", this.handleChannelKeyUpOrDown, { capture: !0 }), this.listen("keyup", this.handleChannelKeyUpOrDown, { capture: !0 });
  }
  static {
    this.properties = { channelMode: 16, channels: 16, colorFieldScopeLeft: 16, colorFieldScopeTop: 16, dimensions: 16, hueScopeLeft: 16, opacityScopeLeft: 16, savedColors: 16, scopeOrientation: 16, allowEmpty: 7, alphaChannel: 5, channelsDisabled: 5, clearable: 7, color: 0, disabled: 7, format: 3, hexDisabled: 5, messageOverrides: 0, numberingSystem: 3, savedDisabled: 7, scale: 3, storageId: 3, value: 1 };
  }
  static {
    this.styles = $e;
  }
  get baseColorFieldColor() {
    return this.color || this.previousColor || m;
  }
  /**
   * Internal prop for advanced use-cases.
   *
   * @private
   */
  get color() {
    return this._color;
  }
  set color(e) {
    const t = this._color;
    this._color = e, this.handleColorChange(e, t);
  }
  /**
   * The component's value, where the value can be a CSS color string, or a RGB, HSL or HSV object.
   *
   * The type will be preserved as the color is updated.
   *
   * @default
   *
   * @see [CSS Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color),
   * @see [ColorValue](https://github.com/Esri/calcite-design-system/blob/dev/packages/calcite-components/src/components/color-picker/interfaces.ts#L10).
   */
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.handleValueChange(e, t), this._valueWasSet = !0;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await ge(this), de(this.el);
  }
  async load() {
    this._valueWasSet || (this._value ??= O(S(m, this.alphaChannel))), me(this), this.handleAllowEmptyOrClearableChange(), this.handleAlphaChannelDimensionsChange();
    const { isClearable: e, color: t, format: i, value: o } = this, a = e && !o, l = U(o), s = a || i === "auto" && l || i === l, r = a ? null : s ? b(o) : t;
    s || this.showIncompatibleColorWarning(o, i), this.setMode(i, !1), this.internalColorSet(r, !1, "initial"), this.updateDimensions(this.scale);
    const h = `${P}${this.storageId}`;
    this.storageId && localStorage.getItem(h) && (this.savedColors = JSON.parse(localStorage.getItem(h)));
  }
  willUpdate(e) {
    (e.has("allowEmpty") && (this.hasUpdated || this.allowEmpty !== !1) || e.has("clearable") && (this.hasUpdated || this.clearable !== !1)) && this.handleAllowEmptyOrClearableChange(), e.has("alphaChannel") && (this.hasUpdated || this.alphaChannel !== !1) && this.handleAlphaChannelChange(this.alphaChannel), (e.has("alphaChannel") && (this.hasUpdated || this.alphaChannel !== !1) || e.has("dimensions") && (this.hasUpdated || this.dimensions !== I.m)) && this.handleAlphaChannelDimensionsChange(), (e.has("alphaChannel") && (this.hasUpdated || this.alphaChannel !== !1) || e.has("format") && (this.hasUpdated || this.format !== "auto")) && this.handleFormatOrAlphaChannelChange(), e.has("scale") && (this.hasUpdated || this.scale !== "m") && this.handleScaleChange(this.scale);
  }
  updated() {
    ue(this);
  }
  loaded() {
    ve(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("pointermove", this.globalPointerMoveHandler), window.removeEventListener("pointerup", this.globalPointerUpHandler);
  }
  // #endregion
  // #region Private Methods
  handleAllowEmptyOrClearableChange() {
    this.isClearable = this.clearable || this.allowEmpty;
  }
  handleAlphaChannelChange(e) {
    const { format: t } = this;
    e && t !== "auto" && !A(t) && (console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`), this.alphaChannel = !1);
  }
  handleAlphaChannelDimensionsChange() {
    this.effectiveSliderWidth = ne(this.dimensions, this.alphaChannel), this.drawColorControls();
  }
  handleColorChange(e, t) {
    this.drawColorControls(), this.updateChannelsFromColor(e), this.previousColor = t;
  }
  handleFormatOrAlphaChannelChange() {
    this.setMode(this.format), this.internalColorSet(this.color, !1, "internal");
  }
  handleScaleChange(e = "m") {
    this.updateDimensions(e), this.updateCanvasSize("all"), this.drawColorControls();
  }
  handleValueChange(e, t) {
    const { isClearable: i, format: o } = this, a = !i || e;
    let l = !1;
    if (a) {
      const d = U(e);
      if (!d || o !== "auto" && d !== o) {
        this.showIncompatibleColorWarning(e, o), this._value = t;
        return;
      }
      l = this.mode !== d, this.setMode(d, this.internalColorUpdateContext === null);
    }
    const s = this.activeCanvasInfo;
    if (this.internalColorUpdateContext === "initial")
      return;
    if (this.internalColorUpdateContext === "user-interaction") {
      this.calciteColorPickerInput.emit(), s || this.calciteColorPickerChange.emit();
      return;
    }
    const r = i && !e ? null : b(e != null && typeof e == "object" && A(this.mode) ? re(e) : e), h = !j(r, this.color);
    (l || h) && this.internalColorSet(r, this.alphaChannel && !(this.mode.endsWith("a") || this.mode.endsWith("a-css")), "internal");
  }
  handleTabActivate(e) {
    this.channelMode = e.currentTarget.getAttribute("data-color-mode"), this.updateChannelsFromColor(this.color);
  }
  handleColorFieldScopeKeyDown(e) {
    const { key: t } = e, i = {
      ArrowUp: { x: 0, y: -10 },
      ArrowRight: { x: 10, y: 0 },
      ArrowDown: { x: 0, y: 10 },
      ArrowLeft: { x: -10, y: 0 }
    };
    i[t] && (e.preventDefault(), this.scopeOrientation = t === "ArrowDown" || t === "ArrowUp" ? "vertical" : "horizontal", this.captureColorFieldColor(this.colorFieldScopeLeft + i[t].x || 0, this.colorFieldScopeTop + i[t].y || 0, !1));
  }
  handleHueScopeKeyDown(e) {
    const t = e.shiftKey ? 10 : 1, { key: i } = e, o = {
      ArrowUp: 1,
      ArrowRight: 1,
      ArrowDown: -1,
      ArrowLeft: -1
    };
    if (o[i]) {
      e.preventDefault();
      const a = o[i] * t, l = this.baseColorFieldColor.hue(), s = this.baseColorFieldColor.hue(l + a);
      this.internalColorSet(s, !1);
    }
  }
  handleHexInputChange(e) {
    e.stopPropagation();
    const { isClearable: t, color: i } = this, a = e.target.value;
    if (t && !a) {
      this.internalColorSet(null);
      return;
    }
    const l = i && O(S(i, A(this.mode)));
    a !== l && this.internalColorSet(b(a));
  }
  handleSavedColorSelect(e) {
    const t = e.currentTarget;
    this.internalColorSet(b(t.color));
  }
  handleChannelInput(e) {
    const t = e.currentTarget, i = Number(t.getAttribute("data-channel-index")), a = i === 3 ? y.max : this.channelMode === "rgb" ? k[Object.keys(k)[i]] : p[Object.keys(p)[i]];
    let l;
    if (!t.value)
      l = "", this.isActiveChannelInputEmpty = !0, this.upOrDownArrowKeyTracker = null;
    else {
      const r = Number(t.value) + this.shiftKeyChannelAdjustment;
      l = Se(r, 0, a).toString();
    }
    t.value = l, l !== "" && this.shiftKeyChannelAdjustment !== 0 ? this.handleChannelChange(e) : l !== "" && this.handleChannelChange(e);
  }
  handleChannelBlur(e) {
    const t = e.currentTarget, i = Number(t.getAttribute("data-channel-index")), o = [...this.channels];
    !t.value && !this.isClearable && (t.value = o[i]?.toString());
  }
  handleChannelFocus(e) {
    e.currentTarget.selectText();
  }
  // using @Listen as a workaround for VDOM listener not firing
  handleChannelKeyUpOrDown(e) {
    this.shiftKeyChannelAdjustment = 0;
    const { key: t } = e;
    if (t !== "ArrowUp" && t !== "ArrowDown" || !e.composedPath().some((a) => a.classList?.contains(n.channel)))
      return;
    const { shiftKey: i } = e;
    if (e.preventDefault(), !this.color) {
      this.internalColorSet(this.previousColor), e.stopPropagation();
      return;
    }
    const o = 9;
    this.shiftKeyChannelAdjustment = t === "ArrowUp" && i ? o : t === "ArrowDown" && i ? -9 : 0, t === "ArrowUp" && (this.upOrDownArrowKeyTracker = "up"), t === "ArrowDown" && (this.upOrDownArrowKeyTracker = "down");
  }
  getChannelInputLimit(e) {
    return this.channelMode === "rgb" ? k[Object.keys(k)[e]] : p[Object.keys(p)[e]];
  }
  handleChannelChange(e) {
    const t = e.currentTarget, i = Number(t.getAttribute("data-channel-index")), o = [...this.channels];
    if (this.isClearable && !t.value) {
      this.channels = [null, null, null, null], this.internalColorSet(null);
      return;
    }
    const l = i === 3;
    this.isActiveChannelInputEmpty && this.upOrDownArrowKeyTracker && (t.value = this.upOrDownArrowKeyTracker === "up" ? (o[i] + 1 <= this.getChannelInputLimit(i) ? o[i] + 1 : this.getChannelInputLimit(i)).toString() : (o[i] - 1 >= 0 ? o[i] - 1 : 0).toString(), this.isActiveChannelInputEmpty = !1, this.upOrDownArrowKeyTracker = null);
    const s = t.value ? Number(t.value) : o[i];
    o[i] = l ? z(s) : s, this.updateColorFromChannels(o);
  }
  handleSavedColorKeyDown(e) {
    fe(e.key) && (e.preventDefault(), this.handleSavedColorSelect(e));
  }
  handleColorFieldPointerDown(e) {
    this.handleCanvasControlPointerDown(e, this.colorFieldRenderingContext, this.captureColorFieldColor, this.colorFieldScopeNode);
  }
  focusScope(e) {
    requestAnimationFrame(() => {
      e.focus();
    });
  }
  handleHueSliderPointerDown(e) {
    this.handleCanvasControlPointerDown(e, this.hueSliderRenderingContext, this.captureHueSliderColor, this.hueScopeNode);
  }
  handleOpacitySliderPointerDown(e) {
    this.handleCanvasControlPointerDown(e, this.opacitySliderRenderingContext, this.captureOpacitySliderValue, this.opacityScopeNode);
  }
  handleCanvasControlPointerDown(e, t, i, o) {
    B(e) && (window.addEventListener("pointermove", this.globalPointerMoveHandler), window.addEventListener("pointerup", this.globalPointerUpHandler, {
      once: !0
    }), this.activeCanvasInfo = {
      context: t,
      bounds: t.canvas.getBoundingClientRect()
    }, i.call(this, e.offsetX, e.offsetY), this.focusScope(o));
  }
  storeColorFieldScope(e) {
    this.colorFieldScopeNode = e;
  }
  storeHueScope(e) {
    this.hueScopeNode = e;
  }
  handleKeyDown(e) {
    e.key === "Enter" && e.preventDefault();
  }
  showIncompatibleColorWarning(e, t) {
    console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`);
  }
  setMode(e, t = !0) {
    const i = e === "auto" ? this.mode : e;
    this.mode = this.ensureCompatibleMode(i, t);
  }
  ensureCompatibleMode(e, t) {
    const { alphaChannel: i } = this, o = A(e);
    if (i && !o) {
      const a = ce(e);
      return t && console.warn(`setting format to (${a}) as the provided one (${e}) does not support alpha`), a;
    }
    if (!i && o) {
      const a = N(e);
      return t && console.warn(`setting format to (${a}) as the provided one (${e}) does not support alpha`), a;
    }
    return e;
  }
  captureHueSliderColor(e) {
    const t = W / this.effectiveSliderWidth * e;
    this.internalColorSet(this.baseColorFieldColor.hue(t), !1);
  }
  captureOpacitySliderValue(e) {
    const t = z(y.max / this.effectiveSliderWidth * e);
    this.internalColorSet(this.baseColorFieldColor.alpha(t), !1);
  }
  internalColorSet(e, t = !0, i = "user-interaction") {
    t && j(e, this.color) || (this.internalColorUpdateContext = i, this.color = e, this.value = this.toValue(e), this.internalColorUpdateContext = null);
  }
  toValue(e, t = this.mode) {
    if (!e)
      return null;
    if (t.includes("hex")) {
      const a = t === H.HEXA;
      return O(S(e.round(), a), a);
    }
    if (t.includes("-css")) {
      const a = e[t.replace("-css", "").replace("a", "")]().round().string();
      if ((t.endsWith("a") || t.endsWith("a-css")) && e.alpha() === 1) {
        const s = a.slice(0, 3), r = a.slice(4, -1);
        return `${s}a(${r}, ${e.alpha()})`;
      }
      return a;
    }
    const o = (
      /* Color() does not support hsva, hsla nor rgba, so we use the non-alpha mode */
      e[N(t)]().round().object()
    );
    return t.endsWith("a") ? he(o) : o;
  }
  getSliderCapSpacing() {
    const { dimensions: { slider: { height: e }, thumb: { radius: t } } } = this;
    return t * 2 - e;
  }
  updateDimensions(e = "m") {
    this.dimensions = I[e];
  }
  deleteColor() {
    const e = S(this.color, this.alphaChannel);
    if (!(this.savedColors.indexOf(e) > -1))
      return;
    const i = this.savedColors.filter((a) => a !== e);
    this.savedColors = i;
    const o = `${P}${this.storageId}`;
    this.storageId && localStorage.setItem(o, JSON.stringify(i));
  }
  saveColor() {
    const e = S(this.color, this.alphaChannel);
    if (this.savedColors.indexOf(e) > -1)
      return;
    const i = [...this.savedColors, e];
    this.savedColors = i;
    const o = `${P}${this.storageId}`;
    this.storageId && localStorage.setItem(o, JSON.stringify(i));
  }
  drawColorField() {
    const e = this.colorFieldRenderingContext, { dimensions: { colorField: { height: t, width: i } } } = this;
    e.fillStyle = this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(), e.fillRect(0, 0, i, t);
    const o = e.createLinearGradient(0, 0, i, 0);
    o.addColorStop(0, "rgba(255,255,255,1)"), o.addColorStop(1, "rgba(255,255,255,0)"), e.fillStyle = o, e.fillRect(0, 0, i, t);
    const a = e.createLinearGradient(0, 0, 0, t);
    a.addColorStop(0, "rgba(0,0,0,0)"), a.addColorStop(1, "rgba(0,0,0,1)"), e.fillStyle = a, e.fillRect(0, 0, i, t), this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(e, { height: t, width: i }) {
    if (!e)
      return;
    const o = window.devicePixelRatio || 1;
    e.width = i * o, e.height = t * o, e.style.height = `${t}px`, e.style.width = `${i}px`, e.getContext("2d").scale(o, o);
  }
  initColorField(e) {
    e && (this.colorFieldRenderingContext = e.getContext("2d"), this.updateCanvasSize("color-field"), this.drawColorControls());
  }
  initHueSlider(e) {
    e && (this.hueSliderRenderingContext = e.getContext("2d"), this.updateCanvasSize("hue-slider"), this.drawHueSlider());
  }
  initOpacitySlider(e) {
    e && (this.opacitySliderRenderingContext = e.getContext("2d"), this.updateCanvasSize("opacity-slider"), this.drawOpacitySlider());
  }
  updateCanvasSize(e = "all") {
    const { dimensions: t } = this;
    (e === "all" || e === "color-field") && this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas, t.colorField);
    const i = {
      width: this.effectiveSliderWidth,
      height: t.slider.height + (t.thumb.radius - t.slider.height / 2) * 2
    };
    (e === "all" || e === "hue-slider") && this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas, i), (e === "all" || e === "opacity-slider") && this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas, i);
  }
  drawActiveColorFieldColor() {
    const { color: e } = this;
    if (!e)
      return;
    const t = e.hsv(), { dimensions: { colorField: { height: i, width: o }, thumb: { radius: a } } } = this, l = t.saturationv() / (p.s / o), s = i - t.value() / (p.v / i);
    requestAnimationFrame(() => {
      this.colorFieldScopeLeft = l, this.colorFieldScopeTop = s;
    }), this.drawThumb(this.colorFieldRenderingContext, a, l, s, t, !1);
  }
  drawThumb(e, t, i, o, a, l) {
    const r = 2 * Math.PI, h = 1;
    if (e.beginPath(), e.arc(i, o, t, 0, r), e.fillStyle = "#fff", e.fill(), e.strokeStyle = "rgba(0,0,0,0.3)", e.lineWidth = h, e.stroke(), l && a.alpha() < 1) {
      const C = e.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
      e.beginPath(), e.arc(i, o, t - 3, 0, r), e.fillStyle = C, e.fill();
    }
    e.globalCompositeOperation = "source-atop", e.beginPath(), e.arc(i, o, t - 3, 0, r);
    const d = l ? a.alpha() : 1;
    e.fillStyle = a.rgb().alpha(d).string(), e.fill(), e.globalCompositeOperation = "source-over";
  }
  drawActiveHueSliderColor() {
    const { color: e } = this;
    if (!e)
      return;
    const t = e.hsv().saturationv(100).value(100), { dimensions: { thumb: { radius: i } } } = this, o = this.effectiveSliderWidth, a = t.hue() / (W / o), l = i, s = this.getSliderBoundX(a, o, i);
    requestAnimationFrame(() => {
      this.hueScopeLeft = s;
    }), this.drawThumb(this.hueSliderRenderingContext, i, s, l, t, !1);
  }
  drawHueSlider() {
    const e = this.hueSliderRenderingContext, { dimensions: { slider: { height: t }, thumb: { radius: i } } } = this, o = 0, a = i - t / 2, l = this.effectiveSliderWidth, s = e.createLinearGradient(0, 0, l, 0), r = [
      "red",
      "yellow",
      "lime",
      "cyan",
      "blue",
      "magenta",
      "#ff0004"
    ], h = 1 / (r.length - 1);
    let d = 0;
    r.forEach((C) => {
      s.addColorStop(d, b(C).string()), d += h;
    }), e.clearRect(0, 0, l, t + this.getSliderCapSpacing() * 2), this.drawSliderPath(e, t, l, o, a), e.fillStyle = s, e.fill(), e.strokeStyle = "rgba(0,0,0,0.3)", e.lineWidth = 1, e.stroke(), this.drawActiveHueSliderColor();
  }
  drawOpacitySlider() {
    const e = this.opacitySliderRenderingContext, { baseColorFieldColor: t, dimensions: { slider: { height: i }, thumb: { radius: o } } } = this, a = 0, l = o - i / 2, s = this.effectiveSliderWidth;
    e.clearRect(0, 0, s, i + this.getSliderCapSpacing() * 2);
    const r = e.createLinearGradient(0, l, s, 0), h = t.rgb().alpha(0), d = t.rgb().alpha(0.5), C = t.rgb().alpha(1);
    r.addColorStop(0, h.string()), r.addColorStop(0.5, d.string()), r.addColorStop(1, C.string()), this.drawSliderPath(e, i, s, a, l);
    const f = e.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
    e.fillStyle = f, e.fill(), e.fillStyle = r, e.fill(), e.strokeStyle = "rgba(0,0,0,0.3)", e.lineWidth = 1, e.stroke(), this.drawActiveOpacitySliderColor();
  }
  drawSliderPath(e, t, i, o, a) {
    const l = t / 2 + 1;
    e.beginPath(), e.moveTo(o + l, a), e.lineTo(o + i - l, a), e.quadraticCurveTo(o + i, a, o + i, a + l), e.lineTo(o + i, a + t - l), e.quadraticCurveTo(o + i, a + t, o + i - l, a + t), e.lineTo(o + l, a + t), e.quadraticCurveTo(o, a + t, o, a + t - l), e.lineTo(o, a + l), e.quadraticCurveTo(o, a, o + l, a), e.closePath();
  }
  getCheckeredBackgroundPattern() {
    if (this.checkerPattern)
      return this.checkerPattern;
    const e = document.createElement("canvas");
    e.width = 10, e.height = 10;
    const t = e.getContext("2d");
    return t.fillStyle = "#ccc", t.fillRect(0, 0, 10, 10), t.fillStyle = "#fff", t.fillRect(0, 0, 5, 5), t.fillRect(5, 5, 5, 5), this.checkerPattern = e, e;
  }
  drawActiveOpacitySliderColor() {
    const { color: e } = this;
    if (!e)
      return;
    const t = e, { dimensions: { thumb: { radius: i } } } = this, o = this.effectiveSliderWidth, a = R(t.alpha()) / (y.max / o), l = i, s = this.getSliderBoundX(a, o, i);
    requestAnimationFrame(() => {
      this.opacityScopeLeft = s;
    }), this.drawThumb(this.opacitySliderRenderingContext, i, s, l, t, !0);
  }
  getSliderBoundX(e, t, i) {
    const o = be(e, t, i);
    return o === 0 ? e : o === -1 ? V(e, 0, t, i, i * 2) : V(e, 0, t, t - i * 2, t - i);
  }
  storeOpacityScope(e) {
    this.opacityScopeNode = e;
  }
  handleOpacityScopeKeyDown(e) {
    const t = e.shiftKey ? 10 : 1, { key: i } = e, o = {
      ArrowUp: 0.01,
      ArrowRight: 0.01,
      ArrowDown: -0.01,
      ArrowLeft: -0.01
    };
    if (o[i]) {
      e.preventDefault();
      const a = o[i] * t, l = this.baseColorFieldColor.alpha(), s = this.baseColorFieldColor.alpha(l + a);
      this.internalColorSet(s, !1);
    }
  }
  updateColorFromChannels(e) {
    this.internalColorSet(b(e, this.channelMode));
  }
  updateChannelsFromColor(e) {
    this.channels = e ? this.toChannels(e) : [null, null, null, null];
  }
  toChannels(e) {
    const { channelMode: t } = this, i = e[t]().array().map((o, a) => a === 3 ? o : Math.floor(o));
    return i.length === 3 && i.push(1), i;
  }
  getAdjustedScopePosition(e, t) {
    return [e - _ / 2, t - _ / 2];
  }
  // #endregion
  // #region Rendering
  render() {
    const { channelsDisabled: e, color: t, colorFieldScopeLeft: i, colorFieldScopeTop: o, dimensions: { thumb: { radius: a } }, hexDisabled: l, hueScopeLeft: s, messages: r, alphaChannel: h, opacityScopeLeft: d, savedColors: C, savedDisabled: f, scale: g, scopeOrientation: w } = this, L = this.effectiveSliderWidth, M = t ? S(t, h) : null, X = a, q = s ?? L * m.hue() / p.h, G = a, Y = d ?? L * R(m.alpha()) / y.max, E = t === void 0, T = w === "vertical", [J, Z] = this.getAdjustedScopePosition(i, o), [Q, ee] = this.getAdjustedScopePosition(q, X), [te, ie] = this.getAdjustedScopePosition(Y, G);
    return Ce({ disabled: this.disabled, children: u`<div class=${c(n.container)}><div class=${c(n.controlAndScope)}><canvas class=${c(n.colorField)} @pointerdown=${this.handleColorFieldPointerDown} ${v(this.initColorField)}></canvas><div .ariaLabel=${T ? r.value : r.saturation} .ariaValueMax=${T ? p.v : p.s} aria-valuemin=0 .ariaValueNow=${(T ? t?.saturationv() : t?.value()) || "0"} class=${c({ [n.scope]: !0, [n.colorFieldScope]: !0 })} @keydown=${this.handleColorFieldScopeKeyDown} role=slider style=${$({
      top: `${Z || 0}px`,
      left: `${J || 0}px`
    })} tabindex=0 ${v(this.storeColorFieldScope)}></div></div><div class=${c(n.previewAndSliders)}><calcite-color-picker-swatch class=${c(n.preview)} .color=${M} .scale=${this.alphaChannel ? "l" : this.scale}></calcite-color-picker-swatch><div class=${c(n.sliders)}><div class=${c(n.controlAndScope)}><canvas class=${c({ [n.slider]: !0, [n.hueSlider]: !0 })} @pointerdown=${this.handleHueSliderPointerDown} ${v(this.initHueSlider)}></canvas><div .ariaLabel=${r.hue} .ariaValueMax=${p.h} aria-valuemin=0 .ariaValueNow=${t?.round().hue() || m.round().hue()} class=${c({ [n.scope]: !0, [n.hueScope]: !0 })} @keydown=${this.handleHueScopeKeyDown} role=slider style=${$({
      top: `${ee}px`,
      left: `${Q}px`
    })} tabindex=0 ${v(this.storeHueScope)}></div></div>${h ? u`<div class=${c(n.controlAndScope)}><canvas class=${c({ [n.slider]: !0, [n.opacitySlider]: !0 })} @pointerdown=${this.handleOpacitySliderPointerDown} ${v(this.initOpacitySlider)}></canvas><div .ariaLabel=${r.opacity} .ariaValueMax=${y.max} .ariaValueMin=${y.min} .ariaValueNow=${(t || m).round().alpha()} class=${c({ [n.scope]: !0, [n.opacityScope]: !0 })} @keydown=${this.handleOpacityScopeKeyDown} role=slider style=${$({
      top: `${ie}px`,
      left: `${te}px`
    })} tabindex=0 ${v(this.storeOpacityScope)}></div></div>` : null}</div></div>${l && e ? null : u`<div class=${c({
      [n.controlSection]: !0,
      [n.section]: !0
    })}><div class=${c(n.hexAndChannelsGroup)}>${l ? null : u`<div class=${c(n.hexOptions)}><calcite-color-picker-hex-input .allowEmpty=${this.isClearable} .alphaChannel=${h} class=${c(n.control)} .messages=${r} .numberingSystem=${this.numberingSystem} @calciteColorPickerHexInputChange=${this.handleHexInputChange} .scale=${g} .value=${M}></calcite-color-picker-hex-input></div>`}${e ? null : u`<calcite-tabs class=${c({
      [n.colorModeContainer]: !0,
      [n.splitSection]: !0
    })} .scale=${g === "l" ? "m" : "s"}><calcite-tab-nav slot=title-group>${this.renderChannelsTabTitle("rgb")}${this.renderChannelsTabTitle("hsv")}</calcite-tab-nav>${this.renderChannelsTab("rgb")}${this.renderChannelsTab("hsv")}</calcite-tabs>`}</div></div>`}${f ? null : u`<div class=${c({ [n.savedColorsSection]: !0, [n.section]: !0 })}><div class=${c(n.header)}><label>${r.saved}</label><div class=${c(n.savedColorsButtons)}><calcite-button appearance=transparent class=${c(n.deleteColor)} .disabled=${E} icon-start=minus kind=neutral .label=${r.deleteColor} @click=${this.deleteColor} .scale=${g} type=button></calcite-button><calcite-button appearance=transparent class=${c(n.saveColor)} .disabled=${E} icon-start=plus kind=neutral .label=${r.saveColor} @click=${this.saveColor} .scale=${g} type=button></calcite-button></div></div>${C.length > 0 ? u`<div class=${c(n.savedColors)}>${se(C, (F) => F, (F) => u`<calcite-color-picker-swatch class=${c(n.savedColor)} .color=${F} @click=${this.handleSavedColorSelect} @keydown=${this.handleSavedColorKeyDown} .scale=${g} tabindex=0></calcite-color-picker-swatch>`)}</div>` : null}</div>`}</div>` });
  }
  renderChannelsTabTitle(e) {
    const { channelMode: t, messages: i } = this, o = e === t, a = e === "rgb" ? i.rgb : i.hsv;
    return D(e, u`<calcite-tab-title class=${c(n.colorMode)} data-color-mode=${e ?? x} @calciteTabsActivate=${this.handleTabActivate} .selected=${o}>${a}</calcite-tab-title>`);
  }
  renderChannelsTab(e) {
    const { isClearable: t, channelMode: i, channels: o, messages: a, alphaChannel: l } = this, s = e === i, h = e === "rgb" ? [a.red, a.green, a.blue] : [a.hue, a.saturation, a.value], d = pe(this.el), C = l ? o : o.slice(0, 3);
    return D(e, u`<calcite-tab class=${c(n.control)} .selected=${s}><div class=${c(n.channels)} dir=ltr>${C.map((f, g) => {
      const w = g === 3;
      return w && (f = t && !f ? f : R(f)), this.renderChannel(f, g, h[g], d, w ? "%" : "");
    })}</div></calcite-tab>`);
  }
  renderChannel(e, t, i, o, a) {
    return D(t, u`<calcite-input-number class=${c(n.channel)} data-channel-index=${t ?? x} dir=${o ?? x} .label=${i} lang=${this.messages._lang ?? x} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.handleKeyDown} @calciteInputNumberChange=${this.handleChannelChange} @calciteInputNumberInput=${this.handleChannelInput} @calciteInternalInputNumberBlur=${this.handleChannelBlur} @calciteInternalInputNumberFocus=${this.handleChannelFocus} .scale=${this.scale === "l" ? "m" : "s"} style=${$({
      marginLeft: t > 0 && !(this.scale === "s" && this.alphaChannel && t === 3) ? "-1px" : ""
    })} .suffixText=${a} .value=${e?.toString()}></calcite-input-number>`);
  }
}
le("calcite-color-picker", Ae);
export {
  Ae as ColorPicker
};
