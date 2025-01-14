import { h as y, L as C, x as o, s as n, y as r, j as z } from "./iframe.js";
import { i as g } from "./keyed.js";
import { e as w, n as $ } from "./ref.js";
import { g as I } from "./guid.js";
import { u as E, I as T } from "./interactive.js";
import { c as L, s as S, a as F } from "./loadable.js";
import { c as H } from "./observers.js";
import { g as O } from "./component.js";
import { u as j } from "./useT9n.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const e = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible",
  indicatorWithIcon: "indicator-with-icon",
  indicatorWithoutIcon: "indicator-without-icon"
}, B = {
  tooltip: "tooltip"
}, N = y`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;cursor:pointer;background-color:transparent;--calcite-internal-action-text-color: var(--calcite-color-text-3)}:host([drag-handle]){cursor:move;--calcite-internal-action-text-color: var(--calcite-color-border-input);--calcite-internal-action-padding-inline: var(--calcite-spacing-xxs)}:host,.button{border-radius:var(--calcite-action-corner-radius, var(--calcite-action-corner-radius-start-start, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-start-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-start, var(--calcite-corner-radius)))}.button{position:relative;margin:0;display:flex;inline-size:auto;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-internal-action-text-color));text-align:unset;flex:1 0 auto;cursor:inherit}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)))}.button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.button:active{background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}.icon-container{pointer-events:none;margin:0;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)));background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]):host([active]) .button{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .button{font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, .5rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xxs))}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:.5rem}:host([scale=m]) .button{font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-md))}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:.75rem}:host([scale=l]) .button{font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1.25rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xl))}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:.25rem;inline-size:1rem;position:relative}.indicator-without-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color, var(--calcite-action-background-color, var(--calcite-color-foreground-1)))}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class R extends C {
  constructor() {
    super(...arguments), this.guid = `calcite-action-${I()}`, this.buttonEl = w(), this.buttonId = `${this.guid}-button`, this.indicatorId = `${this.guid}-indicator`, this.mutationObserver = H("mutation", () => this.requestUpdate()), this.active = !1, this.appearance = "solid", this.compact = !1, this.disabled = !1, this.dragHandle = !1, this.iconFlipRtl = !1, this.indicator = !1, this.loading = !1, this.messages = j({ blocking: !0 }), this.scale = "m", this.textEnabled = !1;
  }
  static {
    this.properties = { active: 7, alignment: 3, appearance: 3, compact: 7, disabled: 7, dragHandle: 7, icon: 3, iconFlipRtl: 7, indicator: 7, label: 1, loading: 7, messageOverrides: 0, scale: 3, text: 1, textEnabled: 7 };
  }
  static {
    this.styles = N;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await L(this), this.buttonEl.value?.focus();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  async load() {
    S(this);
  }
  updated() {
    E(this);
  }
  loaded() {
    F(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect();
  }
  // #endregion
  // #region Private Methods
  handleTooltipSlotChange(t) {
    const i = t.target.assignedElements({
      flatten: !0
    }).filter((c) => c?.matches("calcite-tooltip"))[0];
    i && (i.referenceElement = this.buttonEl.value);
  }
  // #endregion
  // #region Rendering
  renderTextContainer() {
    const { text: t, textEnabled: a } = this, i = {
      [e.textContainer]: !0,
      [e.textContainerVisible]: a
    };
    return t ? g("text-container", o`<div class=${n(i)}>${t}</div>`) : null;
  }
  renderIndicatorText() {
    const { indicator: t, messages: a, indicatorId: i, buttonId: c } = this;
    return o`<div aria-labelledby=${c ?? r} aria-live=polite class=${n(e.indicatorText)} id=${i ?? r} role=region>${t ? a.indicator : null}</div>`;
  }
  renderIconContainer() {
    const { loading: t, icon: a, scale: i, el: c, iconFlipRtl: d, indicator: b } = this, p = i === "l" ? "l" : "m", h = t ? o`<calcite-loader inline .label=${this.messages.loading} .scale=${p}></calcite-loader>` : null, l = a ? o`<calcite-icon class=${n({ [e.indicatorWithIcon]: b })} .flipRtl=${d} .icon=${a} .scale=${O(this.scale)}></calcite-icon>` : null, s = h || l, u = s || c.children?.length, v = o`<div class=${n({
      [e.slotContainer]: !0,
      [e.slotContainerHidden]: t
    })}><slot></slot></div>`;
    return u ? g("icon-container", o`<div aria-hidden=true class=${n(e.iconContainer)}>${s}${v}</div>`) : null;
  }
  renderButton() {
    const { active: t, compact: a, disabled: i, icon: c, loading: d, textEnabled: b, label: p, text: h, indicator: l, indicatorId: s, buttonId: u, messages: v } = this, m = p || h || "", f = l ? v.indicatorLabel.replace("{label}", m) : m, x = {
      [e.button]: !0,
      [e.buttonTextVisible]: b,
      [e.buttonCompact]: a
    }, k = o`${this.renderIconContainer()}${this.renderTextContainer()}${!c && l && g("indicator-no-icon", o`<div class=${n(e.indicatorWithoutIcon)}></div>`) || ""}`;
    return this.dragHandle ? o`<span aria-controls=${(l ? s : null) ?? r} .ariaBusy=${d} .ariaDisabled=${this.disabled ? this.disabled : null} .ariaLabel=${f} .ariaPressed=${t} class=${n(x)} id=${u ?? r} role=button tabindex=${(this.disabled ? null : 0) ?? r} ${$(this.buttonEl)}>${k}</span>` : o`<button aria-controls=${(l ? s : null) ?? r} .ariaBusy=${d} .ariaLabel=${f} .ariaPressed=${t} class=${n(x)} .disabled=${i} id=${u ?? r} ${$(this.buttonEl)}>${k}</button>`;
  }
  render() {
    return T({ disabled: this.disabled, children: o`${this.renderButton()}<slot name=${B.tooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${this.renderIndicatorText()}` });
  }
}
z("calcite-action", R);
export {
  R as Action
};
