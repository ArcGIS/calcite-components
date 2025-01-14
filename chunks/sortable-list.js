import { h as d, L as h, k as u, j as b, x as m, s as p } from "./iframe.js";
import { u as g, I as f } from "./interactive.js";
import { c as v } from "./observers.js";
import { d as y, c as O } from "./sortableComponent.js";
import { a as S } from "./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const l = {
  sortItem: "sort-item",
  container: "container",
  containerHorizontal: "container--horizontal",
  containerVertical: "container--vertical"
}, x = d`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}`;
class C extends h {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.dragEnabled = !0, this.items = [], this.mutationObserver = v("mutation", () => {
      this.setUpSorting();
    }), this.disabled = !1, this.handleSelector = "calcite-handle", this.layout = "vertical", this.loading = !1, this.calciteListOrderChange = u({ cancelable: !1 }), this.listen("calciteHandleNudge", this.calciteHandleNudgeNextHandler);
  }
  static {
    this.properties = { canPull: 0, canPut: 0, disabled: 7, dragSelector: 3, group: 3, handleSelector: 3, layout: 3, loading: 7 };
  }
  static {
    this.styles = x;
  }
  connectedCallback() {
    super.connectedCallback(), this.setUpSorting(), this.beginObserving();
  }
  updated() {
    g(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), y(this), this.endObserving();
  }
  // #endregion
  // #region Private Methods
  calciteHandleNudgeNextHandler(e) {
    this.handleNudgeEvent(e);
  }
  onGlobalDragStart() {
    this.endObserving();
  }
  onGlobalDragEnd() {
    this.beginObserving();
  }
  onDragEnd() {
  }
  onDragStart() {
  }
  onDragSort() {
    this.items = Array.from(this.el.children), this.calciteListOrderChange.emit();
  }
  handleNudgeEvent(e) {
    const { direction: r } = e.detail, t = e.composedPath().find((a) => a.matches(this.handleSelector)), i = this.items.find((a) => a.contains(t) || e.composedPath().includes(a)), c = this.items.length - 1, s = this.items.indexOf(i);
    let o = !1, n;
    r === "up" ? s === 0 ? o = !0 : n = s - 1 : s === c ? n = 0 : s === c - 1 ? o = !0 : n = s + 2, this.endObserving(), o ? i.parentElement.appendChild(i) : i.parentElement.insertBefore(i, this.items[n]), this.items = Array.from(this.el.children), this.beginObserving(), requestAnimationFrame(() => S(t)), "selected" in t && (t.selected = !0);
  }
  setUpSorting() {
    this.items = Array.from(this.el.children), O(this);
  }
  beginObserving() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  endObserving() {
    this.mutationObserver?.disconnect();
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: e, layout: r } = this, t = r === "horizontal" || !1;
    return f({ disabled: e, children: m`<div class=${p({
      [l.container]: !0,
      [l.containerVertical]: !t,
      [l.containerHorizontal]: t
    })}><slot></slot></div>` });
  }
}
b("calcite-sortable-list", C);
export {
  C as SortableList
};
