import { h as v, L as x, k as A, x as p, s as y, j as w, D as E } from "./iframe.js";
import { f as C, s as u, d as z } from "./dom.js";
import { c as D, s as O, a as G } from "./loadable.js";
import { c as b } from "./observers.js";
import { t as T, E as H, q as $, g as L, o as B, a as S } from "./ExpandToggle.js";
import { u as k } from "./useT9n.js";
import { d as U } from "./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const P = {
  actionGroupEnd: "action-group--end"
}, h = {
  actionsEnd: "actions-end",
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
}, M = v`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}`;
class q extends x {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.mutationObserver = b("mutation", () => this.mutationObserverHandler()), this.resize = U(({ width: t, height: e }) => {
      const { el: o, expanded: l, expandDisabled: n, layout: i, overflowActionsDisabled: r, actionGroups: s } = this;
      if (r || i === "vertical" && !e || i === "horizontal" && !t)
        return;
      const a = $(o), c = n ? a.length : a.length + 1;
      this.updateGroups();
      const d = this.hasActionsEnd || this.hasBottomActions || !n ? s.length + 1 : s.length, { actionHeight: f, actionWidth: g } = L(a), m = S({
        layout: i,
        actionCount: c,
        actionHeight: f,
        actionWidth: g,
        height: e,
        width: t,
        groupCount: d
      });
      B({
        actionGroups: s,
        expanded: l,
        overflowCount: m
      });
    }, E.resize), this.resizeHandler = (t) => {
      const { width: e, height: o } = t.contentRect;
      this.resize({ width: e, height: o });
    }, this.resizeObserver = b("resize", (t) => this.resizeHandlerEntries(t)), this.toggleExpand = () => {
      this.expanded = !this.expanded, this.calciteActionBarToggle.emit();
    }, this.hasActionsEnd = !1, this.hasBottomActions = !1, this.expandDisabled = !1, this.expanded = !1, this.layout = "vertical", this.messages = k(), this.overflowActionsDisabled = !1, this.overlayPositioning = "absolute", this.scale = "m", this.calciteActionBarToggle = A({ cancelable: !1 }), this.listen("calciteActionMenuOpen", this.actionMenuOpenHandler);
  }
  static {
    this.properties = { expandTooltip: 16, hasActionsEnd: 16, hasBottomActions: 16, actionsEndGroupLabel: 1, expandDisabled: 7, expanded: 7, layout: 3, messageOverrides: 0, overflowActionsDisabled: 7, overlayPositioning: 3, position: 3, scale: 3 };
  }
  static {
    this.styles = M;
  }
  // #endregion
  // #region Public Methods
  /**
   * Overflows actions that won't fit into menus.
   *
   * @private
   */
  async overflowActions() {
    this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await D(this), C(this.el);
  }
  connectedCallback() {
    super.connectedCallback(), this.updateGroups(), this.overflowActions(), this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
  }
  async load() {
    O(this);
  }
  willUpdate(t) {
    t.has("expandDisabled") && (this.hasUpdated || this.expandDisabled !== !1) && this.overflowActions(), t.has("expanded") && this.hasUpdated && this.expandedHandler(), t.has("layout") && (this.hasUpdated || this.layout !== "vertical") && this.updateGroups(), t.has("overflowActionsDisabled") && (this.hasUpdated || this.overflowActionsDisabled !== !1) && this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
  }
  loaded() {
    G(this), this.overflowActions();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect(), this.resizeObserver?.disconnect();
  }
  // #endregion
  // #region Private Methods
  expandedHandler() {
    const { el: t, expanded: e } = this;
    T({ el: t, expanded: e }), this.overflowActions();
  }
  overflowActionsDisabledHandler(t) {
    if (t) {
      this.resizeObserver?.disconnect();
      return;
    }
    this.resizeObserver?.observe(this.el), this.overflowActions();
  }
  actionMenuOpenHandler(t) {
    if (t.target.menuOpen) {
      const e = t.composedPath();
      this.actionGroups?.forEach((o) => {
        e.includes(o) || (o.menuOpen = !1);
      });
    }
  }
  mutationObserverHandler() {
    this.updateGroups(), this.overflowActions();
  }
  resizeHandlerEntries(t) {
    t.forEach(this.resizeHandler);
  }
  updateGroups() {
    const t = Array.from(this.el.querySelectorAll("calcite-action-group"));
    this.actionGroups = t, this.setGroupLayout(t);
  }
  setGroupLayout(t) {
    t.forEach((e) => e.layout = this.layout);
  }
  handleDefaultSlotChange() {
    this.updateGroups();
  }
  handleActionsEndSlotChange(t) {
    this.hasActionsEnd = u(t);
  }
  handleBottomActionsSlotChange(t) {
    this.hasBottomActions = u(t);
  }
  handleTooltipSlotChange(t) {
    const e = z(t).filter((o) => o?.matches("calcite-tooltip"));
    this.expandTooltip = e[0];
  }
  // #endregion
  // #region Rendering
  renderBottomActionGroup() {
    const { expanded: t, expandDisabled: e, el: o, position: l, toggleExpand: n, scale: i, layout: r, messages: s, actionsEndGroupLabel: a, overlayPositioning: c } = this, d = e ? null : H({ collapseLabel: s.collapseLabel, collapseText: s.collapse, el: o, expandLabel: s.expandLabel, expandText: s.expand, expanded: t, position: l, scale: i, toggle: n, tooltip: this.expandTooltip });
    return p`<calcite-action-group class=${y(P.actionGroupEnd)} .hidden=${this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions)} .label=${a} .layout=${r} .overlayPositioning=${c} .scale=${i}><slot name=${h.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot><slot name=${h.bottomActions} @slotchange=${this.handleBottomActionsSlotChange}></slot><slot name=${h.expandTooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${d}</calcite-action-group>`;
  }
  render() {
    return p`<slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}`;
  }
}
w("calcite-action-bar", q);
export {
  q as ActionBar
};
