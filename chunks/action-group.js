import { h as p, L as m, x as n, s as h, j as g } from "./iframe.js";
import { c as b, s as f, a as x } from "./loadable.js";
import { S as s } from "./resources2.js";
import { f as y, s as $ } from "./dom.js";
import { u as v } from "./useT9n.js";
import { I as O, S as i, C as M } from "./resources.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const S = p`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns: 1}:host([columns="2"]){--calcite-internal-action-group-columns: 2}:host([columns="3"]){--calcite-internal-action-group-columns: 3}:host([columns="4"]){--calcite-internal-action-group-columns: 4}:host([columns="5"]){--calcite-internal-action-group-columns: 5}:host([columns="6"]){--calcite-internal-action-group-columns: 6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)),auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-inline-end:var(--calcite-size-px)}:host([hidden]){display:none}[hidden]{display:none}`;
class z extends m {
  constructor() {
    super(...arguments), this.hasMenuActions = !1, this.expanded = !1, this.layout = "vertical", this.menuOpen = !1, this.messages = v(), this.overlayPositioning = "absolute", this.scale = "m";
  }
  static {
    this.properties = { hasMenuActions: 16, columns: 11, expanded: 7, label: 1, layout: 3, menuFlipPlacements: 0, menuOpen: 7, menuPlacement: 3, messageOverrides: 0, overlayPositioning: 3, scale: 3 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = S;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await b(this), y(this.el);
  }
  // #endregion
  // #region Lifecycle
  async load() {
    f(this);
  }
  willUpdate(t) {
    t.has("expanded") && (this.hasUpdated || this.expanded !== !1) && (this.menuOpen = !1);
  }
  loaded() {
    x(this);
  }
  // #endregion
  // #region Private Methods
  setMenuOpen(t) {
    this.menuOpen = !!t.currentTarget.open;
  }
  handleMenuActionsSlotChange(t) {
    this.hasMenuActions = $(t);
  }
  // #endregion
  // #region Rendering
  renderMenu() {
    const { expanded: t, menuOpen: l, scale: e, layout: o, messages: a, overlayPositioning: c, hasMenuActions: r, menuFlipPlacements: u, menuPlacement: d } = this;
    return n`<calcite-action-menu .expanded=${t} .flipPlacements=${u ?? (o === "horizontal" ? ["top", "bottom"] : ["left", "right"])} .hidden=${!r} .label=${a.more} @calciteActionMenuOpen=${this.setMenuOpen} .open=${l} .overlayPositioning=${c} .placement=${d ?? (o === "horizontal" ? "bottom-start" : "leading-start")} .scale=${e}><calcite-action .icon=${O.menu} .scale=${e} slot=${s.trigger} .text=${a.more} .textEnabled=${t}></calcite-action><slot name=${i.menuActions} @slotchange=${this.handleMenuActionsSlotChange}></slot><slot name=${i.menuTooltip} slot=${s.tooltip}></slot></calcite-action-menu>`;
  }
  render() {
    return n`<div .ariaLabel=${this.label} class=${h(M.container)} role=group><slot></slot>${this.renderMenu()}</div>`;
  }
}
g("calcite-action-group", z);
export {
  z as ActionGroup
};
