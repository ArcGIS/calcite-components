import { h as x, L as v, u as b, k as h, n as y, x as c, y as s, s as r, j as z } from "./iframe.js";
import { l as L } from "./live.js";
import { e as E, n as m } from "./ref.js";
import { c as w, d as $, H as k } from "./form.js";
import { c as C, d as A, g as S } from "./label.js";
import { s as g } from "./dom.js";
import { n as d } from "./locale.js";
import { c as H } from "./observers.js";
import { b as f, c as O, s as I, a as T } from "./loadable.js";
import { u as M, I as W } from "./interactive.js";
import { g as F } from "./guid.js";
import { V as j } from "./Validation.js";
import { s as V } from "./input.js";
import { u as q } from "./useT9n.js";
import { t as D } from "./throttle.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const a = {
  assistiveText: "assistive-text",
  characterLimit: "character-limit",
  content: "content",
  container: "container",
  footer: "footer",
  resizeDisabled: "resize--disabled",
  resizeDisabledX: "resize--disabled-x",
  resizeDisabledY: "resize--disabled-y",
  characterOverLimit: "character--over-limit",
  readOnly: "readonly",
  textAreaInvalid: "text-area--invalid",
  footerSlotted: "footer--slotted",
  hide: "hide",
  footerEndSlotOnly: "footer--end-only",
  textArea: "text-area",
  textAreaOnly: "text-area--only"
}, p = {
  validationMessage: "textAreaValidationMessage"
}, u = {
  footerStart: "footer-start",
  footerEnd: "footer-end"
}, B = 100, R = x`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%;--calcite-internal-text-area-border-color: var(--calcite-text-area-border-color, var(--calcite-color-border-input));--calcite-internal-text-area-footer-border-color: var( --calcite-text-area-footer-border-color, var(--calcite-internal-text-area-border-color) )}.text-area,.footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));background-color:var(--calcite-text-area-background-color, var(--calcite-color-foreground-1));padding-block:var(--calcite-spacing-sm);padding-inline:var(--calcite-spacing-md)}.text-area{position:relative;margin:0;box-sizing:border-box;display:block;inline-size:100%;font-family:var(--calcite-font-family);--calcite-internal-text-area-border-block-end-color: var(--calcite-internal-text-area-border-color);border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-border-color);border-block-end-color:var(--calcite-internal-text-area-border-block-end-color);color:var(--calcite-text-area-text-color, var(--calcite-color-text-1));font-family:var(--calcite-sans-family);max-block-size:var(--calcite-text-area-max-height);min-block-size:var(--calcite-text-area-min-height);max-inline-size:var(--calcite-text-area-max-width);min-inline-size:var(--calcite-text-area-min-width, 12rem)}.text-area::placeholder{font-weight:var(--calcite-font-weight-normal)}@media screen and (max-width: 480px){.text-area{resize:none}}.text-area:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.text-area.text-area--invalid{--calcite-internal-text-area-border-color: var(--calcite-color-status-danger)}.text-area.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.text-area.footer--slotted{min-inline-size:18rem}.text-area:not(.text-area--only,.text-area--invalid){--calcite-internal-text-area-border-block-end-color: var( --calcite-text-area-divider-color, var(--calcite-color-border-3) )}.footer{box-sizing:border-box;display:flex;align-items:center;border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-footer-border-color);border-block-start:var(--calcite-border-width-none);min-block-size:2.25rem}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));font-weight:var(--calcite-font-weight-regular);color:var(--calcite-text-area-character-limit-text-color, var(--calcite-color-text-2));padding-inline-start:var(--calcite-spacing-md)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.text-area.text-area--only{block-size:100%}:host([resize=none]) .text-area{resize:none}:host([resize=horizontal]) .text-area{resize:horizontal}:host([resize=vertical]) .text-area{resize:vertical}:host([scale=s]) .text-area,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:.5rem;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--2))}:host([scale=s]) .footer{min-block-size:1.75rem}:host([scale=s]) .text-area{padding-block:.25rem;padding-inline:.5rem}:host([scale=m]) .text-area{padding-block:.5rem;padding-inline:.75rem}:host([scale=m]) .footer{padding-block:.5rem;padding-inline:.75rem;min-block-size:2.25rem}:host([scale=l]) .text-area,:host([scale=l]) .footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-block:var(--calcite-spacing-md);padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .footer{min-block-size:2.75rem}:host([scale=l]) .text-area,:host([scale=l]) .footer,:host([scale=l]) .character-limit{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-inline-start:var(--calcite-spacing-lg)}:host([status=invalid]){--calcite-internal-text-area-border-color: var(--calcite-color-status-danger)}:host([status=invalid]) .text-area:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([disabled]) .text-area,:host([disabled]) .footer{opacity:var(--calcite-opacity-half)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
class U extends v {
  constructor() {
    super(...arguments), this.attributeWatch = b(["autofocus", "spellcheck"], this.handleGlobalAttributesChanged), this.footerEl = E(), this.guid = F(), this.resizeObserver = H("resize", async () => {
      await f(this);
      const { textAreaHeight: e, textAreaWidth: t, elHeight: i, elWidth: l, footerHeight: n, footerWidth: o } = this.getHeightAndWidthOfElements();
      o > 0 && o !== t && (this.footerEl.value.style.width = `${t}px`), (l !== t || i !== e + (n || 0)) && this.setHeightAndWidthToAuto();
    }), this.setHeightAndWidthToAuto = D(() => {
      (this.resize === "vertical" || this.resize === "both") && (this.el.style.height = "auto"), (this.resize === "horizontal" || this.resize === "both") && (this.el.style.width = "auto");
    }, B, { leading: !1 }), this.disabled = !1, this.groupSeparator = !1, this.messages = q({ blocking: !0 }), this.readOnly = !1, this.required = !1, this.resize = "both", this.scale = "m", this.status = "idle", this.validity = {
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
    }, this.value = "", this.wrap = "soft", this.calciteTextAreaChange = h(), this.calciteTextAreaInput = h();
  }
  static {
    this.properties = { endSlotHasElements: 16, startSlotHasElements: 16, columns: 11, disabled: 7, form: 3, groupSeparator: 7, label: 1, maxLength: 11, messageOverrides: 0, minLength: 11, name: 3, numberingSystem: 1, placeholder: 1, readOnly: 7, required: 7, resize: 3, rows: 11, scale: 3, status: 3, validationIcon: [3, { converter: y }], validationMessage: 1, validity: 0, value: 1, wrap: 3 };
  }
  static {
    this.styles = R;
  }
  // #endregion
  // #region Public Methods
  /** Selects the text of the component's `value`. */
  async selectText() {
    await f(this), this.textAreaEl.select();
  }
  /** Sets focus on the component. */
  async setFocus() {
    await O(this), this.textAreaEl.focus();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), C(this), w(this);
  }
  async load() {
    I(this);
  }
  updated() {
    M(this), this.setTextAreaHeight();
  }
  loaded() {
    T(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), A(this), $(this), this.resizeObserver?.disconnect();
  }
  // #endregion
  // #region Private Methods
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  onLabelClick() {
    this.setFocus();
  }
  handleInput(e) {
    this.value = e.target.value, this.calciteTextAreaInput.emit();
  }
  handleChange() {
    this.calciteTextAreaChange.emit();
  }
  contentSlotChangeHandler() {
    this.value || this.el.childNodes.forEach((t) => {
      t.nodeName === "#text" && (this.value = t.nodeValue.trim());
    });
  }
  getLocalizedCharacterLength() {
    const e = this.value ? this.value.length.toString() : "0", t = this.maxLength.toString();
    return this.numberingSystem === "latn" ? { currentLength: e, maxLength: t } : (d.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      signDisplay: "never",
      useGrouping: this.groupSeparator
    }, {
      currentLength: d.localize(e),
      maxLength: d.localize(t)
    });
  }
  syncHiddenFormInput(e) {
    e.setCustomValidity(""), this.isCharacterLimitExceeded() && e.setCustomValidity(this.replacePlaceholdersInMessages()), V("textarea", this, e);
  }
  setTextAreaEl(e) {
    e && (this.textAreaEl = e, this.resizeObserver?.observe(e));
  }
  setTextAreaHeight() {
    const { textAreaHeight: e, elHeight: t, footerHeight: i } = this.getHeightAndWidthOfElements();
    i > 0 && e + i != t && (this.textAreaEl.style.height = `${t - i}px`);
  }
  getHeightAndWidthOfElements() {
    const { height: e, width: t } = this.textAreaEl.getBoundingClientRect(), { height: i, width: l } = this.el.getBoundingClientRect(), { height: n, width: o } = this.footerEl.value ? this.footerEl.value.getBoundingClientRect() : { height: 0, width: 0 };
    return {
      textAreaHeight: e,
      textAreaWidth: t,
      elHeight: i,
      elWidth: l,
      footerHeight: n,
      footerWidth: o
    };
  }
  replacePlaceholdersInMessages() {
    return this.messages.tooLong.replace("{maxLength}", this.localizedCharacterLengthObj.maxLength).replace("{currentLength}", this.localizedCharacterLengthObj.currentLength);
  }
  isCharacterLimitExceeded() {
    return this.value?.length > this.maxLength;
  }
  // #endregion
  // #region Rendering
  render() {
    const e = this.startSlotHasElements || this.endSlotHasElements || !!this.maxLength;
    return W({ disabled: this.disabled, children: c`<textarea aria-describedby=${this.guid ?? s} aria-errormessage=${p.validationMessage} .ariaInvalid=${this.status === "invalid" || this.isCharacterLimitExceeded()} .ariaLabel=${S(this)} .autofocus=${this.el.autofocus} class=${r({
      [a.textArea]: !0,
      [a.readOnly]: this.readOnly,
      [a.textAreaInvalid]: this.isCharacterLimitExceeded(),
      [a.footerSlotted]: this.endSlotHasElements && this.startSlotHasElements,
      [a.textAreaOnly]: !e
    })} .cols=${this.columns} .disabled=${this.disabled} name=${this.name ?? s} @change=${this.handleChange} @input=${this.handleInput} placeholder=${this.placeholder ?? s} .readOnly=${this.readOnly} .required=${this.required} .rows=${this.rows} spellcheck=${this.el.spellcheck ?? s} .value=${L(this.value ?? "")} wrap=${this.wrap ?? s} ${m(this.setTextAreaEl)}></textarea><span class=${r({ [a.content]: !0 })}><slot @slotchange=${this.contentSlotChangeHandler}></slot></span><footer class=${r({
      [a.footer]: !0,
      [a.readOnly]: this.readOnly,
      [a.hide]: !e
    })} ${m(this.footerEl)}><div class=${r({
      [a.container]: !0,
      [a.footerEndSlotOnly]: !this.startSlotHasElements && this.endSlotHasElements
    })}><slot name=${u.footerStart} @slotchange=${(t) => this.startSlotHasElements = g(t)}></slot><slot name=${u.footerEnd} @slotchange=${(t) => this.endSlotHasElements = g(t)}></slot></div>${this.renderCharacterLimit()}</footer>${k({ component: this })}${this.isCharacterLimitExceeded() && c`<span aria-live=polite class=${r(a.assistiveText)} id=${this.guid ?? s}>${this.replacePlaceholdersInMessages()}</span>` || ""}${this.validationMessage && this.status === "invalid" ? j({ icon: this.validationIcon, id: p.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
  renderCharacterLimit() {
    return this.maxLength ? (this.localizedCharacterLengthObj = this.getLocalizedCharacterLength(), c`<span class=${r(a.characterLimit)}><span class=${r({ [a.characterOverLimit]: this.isCharacterLimitExceeded() })}>${this.localizedCharacterLengthObj.currentLength}</span>/${this.localizedCharacterLengthObj.maxLength}</span>`) : null;
  }
}
z("calcite-text-area", U);
export {
  U as TextArea
};
