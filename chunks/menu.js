import { h as l, L as o, u as n, x as u, j as r } from "./iframe.js";
import { f as h, b as i, d as m, a as c } from "./dom.js";
import { c as f, s as d, a as p } from "./loadable.js";
import { u as y } from "./useT9n.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const b = l`:host{display:flex}ul{margin:0;display:inline-flex;block-size:100%;align-items:center;padding:0}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}`;
class g extends o {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.attributeWatch = n(["role"], this.handleGlobalAttributesChanged), this.menuItems = [], this.layout = "horizontal", this.messages = y(), this.listen("calciteInternalMenuItemKeyEvent", this.calciteInternalNavMenuItemKeyEvent);
  }
  static {
    this.properties = { label: 1, layout: 3, messageOverrides: 0 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = b;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await f(this), h(this.menuItems[0]);
  }
  async load() {
    d(this);
  }
  willUpdate(e) {
    e.has("layout") && (this.hasUpdated || this.layout !== "horizontal") && this.setMenuItemLayout(this.menuItems, this.layout);
  }
  loaded() {
    p(this);
  }
  // #endregion
  // #region Private Methods
  handleGlobalAttributesChanged() {
    this.requestUpdate(), this.setMenuItemLayout(this.menuItems, this.layout);
  }
  calciteInternalNavMenuItemKeyEvent(e) {
    const t = e.target, s = e.detail.children, a = e.detail.event.key;
    e.stopPropagation(), a === "ArrowDown" ? t.layout === "vertical" ? i(this.menuItems, t, "next", !1) : e.detail.isSubmenuOpen && s[0].setFocus() : a === "ArrowUp" ? this.layout === "vertical" ? i(this.menuItems, t, "previous", !1) : e.detail.isSubmenuOpen && s[s.length - 1].setFocus() : a === "ArrowRight" ? this.layout === "horizontal" ? i(this.menuItems, t, "next", !1) : e.detail.isSubmenuOpen && s[0].setFocus() : a === "ArrowLeft" ? this.layout === "horizontal" ? i(this.menuItems, t, "previous", !1) : e.detail.isSubmenuOpen && this.focusParentElement(e.target) : a === "Escape" && this.focusParentElement(e.target), e.preventDefault();
  }
  handleMenuSlotChange(e) {
    this.menuItems = m(e), this.setMenuItemLayout(this.menuItems, this.layout);
  }
  focusParentElement(e) {
    const t = e.parentElement;
    t && (c(t), t.open = !1);
  }
  setMenuItemLayout(e, t) {
    e.forEach((s) => {
      s.layout = t, this.getEffectiveRole() === "menubar" && (s.isTopLevelItem = !0, s.topLevelMenuLayout = this.layout);
    });
  }
  getEffectiveRole() {
    return this.el.role || "menubar";
  }
  // #endregion
  // #region Rendering
  render() {
    return u`<ul .ariaLabel=${this.label} .role=${this.getEffectiveRole()}><slot @slotchange=${this.handleMenuSlotChange}></slot></ul>`;
  }
}
r("calcite-menu", g);
export {
  g as Menu
};
