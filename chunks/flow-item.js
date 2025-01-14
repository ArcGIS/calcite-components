import { h as w, L as C, k as a, x as d, s as B, E as I, j as y } from "./iframe.js";
import { n as h } from "./ref.js";
import { i as S } from "./keyed.js";
import { g as v } from "./dom.js";
import { u as E, I as P } from "./interactive.js";
import { c as F, s as x, a as T } from "./loadable.js";
import { S as t } from "./resources6.js";
import { u as L } from "./useT9n.js";
import { S as o, I as m, C as O } from "./resources10.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const A = w`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:none;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([selected]){display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding: var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end: var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}`;
class z extends C {
  constructor() {
    super(...arguments), this.closable = !1, this.closed = !1, this.collapseDirection = "down", this.collapsed = !1, this.collapsible = !1, this.disabled = !1, this.loading = !1, this.menuOpen = !1, this.messages = L(), this.overlayPositioning = "absolute", this.scale = "m", this.selected = !1, this.showBackButton = !1, this.calciteFlowItemBack = a(), this.calciteFlowItemClose = a({ cancelable: !1 }), this.calciteFlowItemScroll = a({ cancelable: !1 }), this.calciteFlowItemToggle = a({ cancelable: !1 }), this.calciteInternalFlowItemChange = a({ cancelable: !1 });
  }
  static {
    this.properties = { beforeBack: 0, beforeClose: 0, closable: 7, closed: 7, collapseDirection: 1, collapsed: 7, collapsible: 7, description: 1, disabled: 7, heading: 1, headingLevel: 11, loading: 7, menuOpen: 7, messageOverrides: 0, overlayPositioning: 3, scale: 3, selected: 7, showBackButton: 5 };
  }
  static {
    this.styles = A;
  }
  // #endregion
  // #region Public Methods
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    await this.containerEl?.scrollContentTo(e);
  }
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await F(this);
    const { backButtonEl: e, containerEl: l } = this;
    if (e)
      return e.setFocus();
    if (l)
      return l.setFocus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
    x(this);
  }
  willUpdate(e) {
    e.has("selected") && (this.hasUpdated || this.selected !== !1) && this.calciteInternalFlowItemChange.emit();
  }
  updated() {
    E(this);
  }
  loaded() {
    T(this);
  }
  // #endregion
  // #region Private Methods
  handleInternalPanelScroll(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.calciteFlowItemScroll.emit());
  }
  handleInternalPanelClose(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.closed = !0, this.calciteFlowItemClose.emit());
  }
  handleInternalPanelToggle(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.collapsed = e.target.collapsed, this.calciteFlowItemToggle.emit());
  }
  backButtonClick() {
    this.calciteFlowItemBack.emit();
  }
  setBackRef(e) {
    this.backButtonEl = e;
  }
  setContainerRef(e) {
    this.containerEl = e;
  }
  // #endregion
  // #region Rendering
  renderBackButton() {
    const { el: e } = this, l = v(e) === "rtl", { showBackButton: n, backButtonClick: c, messages: r } = this, s = r.back, i = l ? m.backRight : m.backLeft;
    return n ? S("flow-back-button", d`<calcite-action .ariaLabel=${s} class=${B(O.backButton)} .icon=${i} @click=${c} scale=s slot=header-actions-start .text=${s} title=${s ?? I} ${h(this.setBackRef)}></calcite-action>`) : null;
  }
  render() {
    const { collapsed: e, collapseDirection: l, collapsible: n, closable: c, closed: r, description: s, disabled: i, heading: p, headingLevel: b, loading: f, menuOpen: $, messages: g, overlayPositioning: u, beforeClose: k } = this;
    return P({ disabled: i, children: d`<calcite-panel .beforeClose=${k} .closable=${c} .closed=${r} .collapseDirection=${l} .collapsed=${e} .collapsible=${n} .description=${s} .disabled=${i} .heading=${p} .headingLevel=${b} .loading=${f} .menuOpen=${$} .messageOverrides=${g} @calcitePanelClose=${this.handleInternalPanelClose} @calcitePanelScroll=${this.handleInternalPanelScroll} @calcitePanelToggle=${this.handleInternalPanelToggle} .overlayPositioning=${u} .scale=${this.scale} ${h(this.setContainerRef)}>${this.renderBackButton()}<slot name=${o.actionBar} slot=${t.actionBar}></slot><slot name=${o.alerts} slot=${t.alerts}></slot><slot name=${o.headerActionsStart} slot=${t.headerActionsStart}></slot><slot name=${o.headerActionsEnd} slot=${t.headerActionsEnd}></slot><slot name=${o.headerContent} slot=${t.headerContent}></slot><slot name=${o.headerMenuActions} slot=${t.headerMenuActions}></slot><slot name=${o.fab} slot=${t.fab}></slot><slot name=${o.contentTop} slot=${t.contentTop}></slot><slot name=${o.contentBottom} slot=${t.contentBottom}></slot><slot name=${o.footerStart} slot=${t.footerStart}></slot><slot name=${o.footer} slot=${t.footer}></slot><slot name=${o.footerEnd} slot=${t.footerEnd}></slot><slot name=${o.footerActions} slot=${t.footerActions}></slot><slot></slot></calcite-panel>` });
  }
}
y("calcite-flow-item", z);
export {
  z as FlowItem
};
