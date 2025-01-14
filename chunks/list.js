import { h as C, L as x, k as m, x as d, s as f, j as A, D as $ } from "./iframe.js";
import { n as y } from "./ref.js";
import { i as I } from "./keyed.js";
import { s as g, C as w } from "./dom.js";
import { u as P, I as k } from "./interactive.js";
import { c as D } from "./observers.js";
import { b as u, l as L, u as O, c as v, o as M } from "./utils3.js";
import { d as T, c as R } from "./sortableComponent.js";
import { S } from "./resources11.js";
import { c as U, s as N, a as G } from "./loadable.js";
import { n as F } from "./locale.js";
import { g as H } from "./guid.js";
import { u as z } from "./useT9n.js";
import { d as q } from "./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const p = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text"
}, b = {
  filterNoResults: "filter-no-results",
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end"
}, B = C`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}.stack{--calcite-stack-padding-inline: 0;--calcite-stack-padding-block: 0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`, W = `${v}, ${u}`;
class K extends x {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.dragSelector = u, this.focusableItems = [], this.handleSelector = "calcite-sort-handle", this.listItems = [], this.listItemGroups = [], this.mutationObserver = D("mutation", () => {
      this.willPerformFilter = !0, this.updateListItems();
    }), this.updateListItems = q(() => {
      this.updateGroupItems();
      const { selectionAppearance: t, selectionMode: e, interactionMode: i, dragEnabled: l, el: s, filterEl: r, moveToItems: a, displayMode: n, scale: c } = this, h = Array.from(this.el.querySelectorAll(u));
      if (h.forEach((o) => {
        o.scale = c, o.selectionAppearance = t, o.selectionMode = e, o.interactionMode = i, o.closest(L) === s && (o.moveToItems = a.filter((E) => E.element !== s && !o.contains(E.element)), o.dragHandle = l, o.displayMode = n);
      }), this.parentListEl) {
        this.setUpSorting();
        return;
      }
      this.listItems = h, this.filterEnabled && this.willPerformFilter && (this.willPerformFilter = !1, this.dataForFilter = this.getItemData(), r && (r.items = this.dataForFilter, this.filterAndUpdateData())), this.visibleItems = this.listItems.filter((o) => !o.closed && !o.hidden), this.updateFilteredItems(), this.borderItems(), this.focusableItems = this.filteredItems.filter((o) => !o.disabled), this.setActiveListItem(), this.updateSelectedItems(), this.setUpSorting();
    }, $.nextTick), this.visibleItems = [], this.willFilterEmit = !1, this.willPerformFilter = !1, this.dataForFilter = [], this.hasFilterActionsEnd = !1, this.hasFilterActionsStart = !1, this.hasFilterNoResults = !1, this.moveToItems = [], this.disabled = !1, this.dragEnabled = !1, this.filterEnabled = !1, this.filteredData = [], this.filteredItems = [], this.interactionMode = "interactive", this.loading = !1, this.messages = z({ blocking: !0 }), this.displayMode = "flat", this.scale = "m", this.selectedItems = [], this.selectionAppearance = "icon", this.selectionMode = "none", this.calciteInternalListDefaultSlotChange = m({ cancelable: !1 }), this.calciteListChange = m({ cancelable: !1 }), this.calciteListDragEnd = m({ cancelable: !1 }), this.calciteListDragStart = m({ cancelable: !1 }), this.calciteListFilter = m({ cancelable: !1 }), this.calciteListOrderChange = m({ cancelable: !1 }), this.listen("calciteInternalListItemToggle", this.handleCalciteListItemToggle), this.listen("calciteInternalFocusPreviousItem", this.handleCalciteInternalFocusPreviousItem), this.listen("calciteInternalListItemActive", this.handleCalciteInternalListItemActive), this.listen("calciteListItemSelect", this.handleCalciteListItemSelect), this.listen("calciteInternalAssistiveTextChange", this.handleCalciteInternalAssistiveTextChange), this.listen("calciteSortHandleReorder", this.handleSortReorder), this.listen("calciteSortHandleMove", this.handleSortMove), this.listen("calciteInternalListItemSelect", this.handleCalciteInternalListItemSelect), this.listen("calciteInternalListItemSelectMultiple", this.handleCalciteInternalListItemSelectMultiple), this.listen("calciteInternalListItemChange", this.handleCalciteInternalListItemChange), this.listen("calciteInternalListItemGroupDefaultSlotChange", this.handleCalciteInternalListItemGroupDefaultSlotChange);
  }
  static {
    this.properties = { assistiveText: 16, dataForFilter: 16, hasFilterActionsEnd: 16, hasFilterActionsStart: 16, hasFilterNoResults: 16, moveToItems: 16, hasActiveFilter: 16, showNoResultsContainer: 16, canPull: 0, canPut: 0, disabled: 7, dragEnabled: 7, filterEnabled: 7, filterPredicate: 0, filterLabel: 3, filterPlaceholder: 3, filterProps: 0, filterText: 3, filteredData: 0, filteredItems: 0, group: 3, interactionMode: 3, label: 1, loading: 7, messageOverrides: 0, displayMode: 3, numberingSystem: 1, scale: 3, selectedItems: 0, selectionAppearance: 3, selectionMode: 3 };
  }
  static {
    this.styles = B;
  }
  get hasActiveFilter() {
    return this.filterEnabled && this.filterText && this.filteredItems.length !== this.visibleItems.length;
  }
  get showNoResultsContainer() {
    return this.filterEnabled && this.filterText && this.hasFilterNoResults && this.visibleItems.length && !this.filteredItems.length;
  }
  // #endregion
  // #region Public Methods
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    return await U(this), this.filterEnabled ? this.filterEl?.setFocus() : this.focusableItems.find((t) => t.active)?.setFocus();
  }
  connectedCallback() {
    super.connectedCallback(), this.connectObserver(), this.willPerformFilter = !0, this.updateListItems(), this.setUpSorting(), this.setParentList(), this.setListItemGroups();
  }
  async load() {
    N(this), this.handleInteractionModeWarning();
  }
  /**
   * TODO: [MIGRATION] Consider inlining some of the watch functions called inside of this method to reduce boilerplate code
   *
   * @param changes
   */
  willUpdate(t) {
    (t.has("filterText") || t.has("filterProps") || t.has("filterPredicate")) && this.performFilter(), (t.has("filterEnabled") && (this.hasUpdated || this.filterEnabled !== !1) || t.has("group") || t.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== !1) || t.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none") || t.has("selectionAppearance") && (this.hasUpdated || this.selectionAppearance !== "icon") || t.has("displayMode") && this.hasUpdated || t.has("scale") && this.hasUpdated || t.has("filterPredicate") && this.hasUpdated) && this.handleListItemChange();
  }
  updated() {
    P(this);
  }
  loaded() {
    G(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.disconnectObserver(), T(this);
  }
  // #endregion
  // #region Private Methods
  handleListItemChange() {
    this.willPerformFilter = !0, this.updateListItems();
  }
  handleCalciteListItemToggle(t) {
    this.parentListEl || (t.stopPropagation(), this.borderItems());
  }
  handleCalciteInternalFocusPreviousItem(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const { focusableItems: e } = this, l = e.findIndex((s) => s.active) - 1;
    e[l] && this.focusRow(e[l]);
  }
  handleCalciteInternalListItemActive(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const e = t.target, { listItems: i } = this;
    i.forEach((l) => {
      l.active = l === e;
    });
  }
  handleCalciteListItemSelect() {
    this.parentListEl || this.updateSelectedItems(!0);
  }
  handleCalciteInternalAssistiveTextChange(t) {
    this.assistiveText = t.detail.message, t.stopPropagation();
  }
  handleSortReorder(t) {
    this.parentListEl || this.handleReorder(t);
  }
  handleSortMove(t) {
    this.parentListEl || this.handleMove(t);
  }
  handleCalciteInternalListItemSelect(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const e = t.target, { listItems: i, selectionMode: l } = this;
    e.selected && (l === "single" || l === "single-persist") && i.forEach((s) => s.selected = s === e), this.updateSelectedItems();
  }
  handleCalciteInternalListItemSelectMultiple(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const { target: e, detail: i } = t, { focusableItems: l, lastSelectedInfo: s } = this, r = e;
    if (i.selectMultiple && s) {
      const a = l.indexOf(r), n = l.indexOf(s.selectedItem), c = Math.min(n, a), h = Math.max(n, a);
      l.slice(c, h + 1).forEach((o) => o.selected = s.selected);
    } else
      this.lastSelectedInfo = { selectedItem: r, selected: r.selected };
  }
  handleCalciteInternalListItemChange(t) {
    this.parentListEl || (t.stopPropagation(), this.updateListItems());
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(t) {
    t.stopPropagation();
  }
  connectObserver() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  disconnectObserver() {
    this.mutationObserver?.disconnect();
  }
  setUpSorting() {
    const { dragEnabled: t } = this;
    t && R(this);
  }
  onGlobalDragStart() {
    this.disconnectObserver();
  }
  onGlobalDragEnd() {
    this.connectObserver();
  }
  onDragEnd(t) {
    this.calciteListDragEnd.emit(t);
  }
  onDragMove({ relatedEl: t }) {
    t.open = !0;
  }
  onDragStart(t) {
    t.dragEl.sortHandleOpen = !1, this.calciteListDragStart.emit(t);
  }
  onDragSort(t) {
    this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(t);
  }
  setParentList() {
    this.parentListEl = this.el.parentElement?.closest(L);
  }
  handleDefaultSlotChange(t) {
    O(t.target), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
  }
  setListItemGroups() {
    this.listItemGroups = Array.from(this.el.querySelectorAll(v));
  }
  handleFilterActionsStartSlotChange(t) {
    this.hasFilterActionsStart = g(t);
  }
  handleFilterActionsEndSlotChange(t) {
    this.hasFilterActionsEnd = g(t);
  }
  handleFilterNoResultsSlotChange(t) {
    this.hasFilterNoResults = g(t);
  }
  setActiveListItem() {
    const { focusableItems: t } = this;
    t.some((e) => e.active) || t[0] && (t[0].active = !0);
  }
  async updateSelectedItems(t = !1) {
    await this.updateComplete, this.selectedItems = this.visibleItems.filter((e) => e.selected), t && this.calciteListChange.emit();
  }
  filterElements({ el: t, filteredItems: e, visibleParents: i }) {
    const l = !i.has(t) && !e.includes(t);
    t.filterHidden = l;
    const s = t.parentElement.closest(W);
    s && (l || i.add(s), this.filterElements({
      el: s,
      filteredItems: e,
      visibleParents: i
    }));
  }
  allParentListItemsOpen(t) {
    const e = t.parentElement?.closest(u);
    if (e) {
      if (!e.open)
        return !1;
    } else return !0;
    return this.allParentListItemsOpen(e);
  }
  borderItems() {
    const t = this.visibleItems.filter((e) => !e.filterHidden && this.allParentListItemsOpen(e));
    t.forEach((e) => e.bordered = e !== t[t.length - 1]);
  }
  updateFilteredItems() {
    const { visibleItems: t, filteredData: e, filterText: i, filterPredicate: l } = this, s = t?.filter((n) => t.every((c) => c === n || !n.contains(c))), r = l ? t.filter(l) : i ? e.map((n) => n.el) : t || [], a = /* @__PURE__ */ new WeakSet();
    s.forEach((n) => this.filterElements({ el: n, filteredItems: r, visibleParents: a })), this.filteredItems = r, this.willFilterEmit && (this.willFilterEmit = !1, this.calciteListFilter.emit());
  }
  updateFilteredData() {
    const { filterEl: t } = this;
    t && (t.filteredItems && (this.filteredData = t.filteredItems), this.updateListItems());
  }
  async filterAndUpdateData() {
    await this.filterEl?.filter(this.filterText), this.updateFilteredData();
  }
  get effectiveFilterProps() {
    return this.filterProps ? this.filterProps.filter((t) => t !== "el") : ["description", "label", "metadata", "heading"];
  }
  performFilter() {
    const { filterEl: t, filterText: e, effectiveFilterProps: i } = this;
    t && (t.value = e, t.filterProps = i, this.filterAndUpdateData());
  }
  setFilterEl(t) {
    this.filterEl = t, this.performFilter();
  }
  handleFilterChange(t) {
    t.stopPropagation();
    const { value: e } = t.currentTarget;
    this.filterText = e, this.willFilterEmit = !0, this.updateFilteredData();
  }
  getItemData() {
    return this.listItems.map((t) => ({
      label: t.label,
      description: t.description,
      metadata: t.metadata,
      heading: this.getGroupHeading(t),
      el: t
    }));
  }
  getGroupHeading(t) {
    return this.listItemGroups.filter((i) => i.contains(t)).map((i) => i.heading);
  }
  updateGroupItems() {
    const { el: t, group: e, scale: i } = this, l = w(t), s = e ? Array.from(l.querySelectorAll(`calcite-list[group="${e}"]`)).filter((a) => !a.disabled && a.dragEnabled) : [];
    this.moveToItems = s.map((a) => ({
      element: a,
      label: a.label ?? a.id,
      id: t.id || H()
    })), Array.from(this.el.querySelectorAll(v)).forEach((a) => {
      a.scale = i;
    });
  }
  focusRow(t) {
    const { focusableItems: e } = this;
    t && (e.forEach((i) => i.active = i === t), t.setFocus());
  }
  isNavigable(t) {
    const e = t.parentElement?.closest(u);
    return e ? e.open && this.isNavigable(e) : !0;
  }
  handleListKeydown(t) {
    if (t.defaultPrevented || this.parentListEl)
      return;
    const { key: e } = t, i = this.focusableItems.filter((s) => this.isNavigable(s)), l = i.findIndex((s) => s.active);
    if (e === "ArrowDown") {
      t.preventDefault();
      const s = t.target === this.filterEl ? 0 : l + 1;
      i[s] && this.focusRow(i[s]);
    } else if (e === "ArrowUp") {
      if (t.preventDefault(), l === 0 && this.filterEnabled) {
        this.filterEl?.setFocus();
        return;
      }
      const s = l - 1;
      i[s] && this.focusRow(i[s]);
    } else if (e === "Home") {
      t.preventDefault();
      const s = i[0];
      s && this.focusRow(s);
    } else if (e === "End") {
      t.preventDefault();
      const s = i[i.length - 1];
      s && this.focusRow(s);
    }
  }
  handleInteractionModeWarning() {
    this.interactionMode === "static" && this.selectionMode !== "none" && this.selectionAppearance === "border" && console.warn('selection-appearance="border" requires interaction-mode="interactive"');
  }
  handleMove(t) {
    const { moveTo: e } = t.detail, i = t.target, l = i?.parentElement, s = Array.from(l.children).indexOf(i), r = e.element;
    if (!l)
      return;
    i.sortHandleOpen = !1, this.disconnectObserver(), r.prepend(i), M(i);
    const a = Array.from(r.children).indexOf(i);
    this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: i,
      fromEl: l,
      toEl: r,
      newIndex: a,
      oldIndex: s
    });
  }
  handleReorder(t) {
    const { reorder: e } = t.detail, i = t.target, l = i?.parentElement;
    if (!l)
      return;
    i.sortHandleOpen = !1;
    const s = this.filteredItems.filter((h) => h.parentElement === l), r = s.length - 1, a = s.indexOf(i);
    let n = a;
    switch (e) {
      case "top":
        n = 0;
        break;
      case "bottom":
        n = r;
        break;
      case "up":
        n = a === 0 ? 0 : a - 1;
        break;
      case "down":
        n = a === r ? r : a + 1;
        break;
    }
    this.disconnectObserver();
    const c = e === "up" || e === "top" ? s[n] : s[n].nextSibling;
    l.insertBefore(i, c), this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: i,
      fromEl: l,
      toEl: l,
      newIndex: n,
      oldIndex: a
    });
  }
  // #endregion
  // #region Rendering
  render() {
    const { loading: t, label: e, disabled: i, dataForFilter: l, filterEnabled: s, filterPlaceholder: r, filterText: a, filterLabel: n, hasFilterActionsStart: c, hasFilterActionsEnd: h, effectiveFilterProps: o } = this;
    return k({ disabled: this.disabled, children: d`<div class=${f(p.container)}>${this.dragEnabled ? d`<span aria-live=assertive class=${f(p.assistiveText)}>${this.assistiveText}</span>` : null}${this.renderItemAriaLive()}${t ? d`<calcite-scrim class=${f(p.scrim)} .loading=${t}></calcite-scrim>` : null}<div .ariaBusy=${t} .ariaLabel=${e || ""} class=${f(p.table)} @keydown=${this.handleListKeydown} role=treegrid>${s || c || h ? d`<div class=${f(p.sticky)} role=rowgroup><div role=row><div role=columnheader><calcite-stack class=${f(p.stack)}><slot name=${b.filterActionsStart} @slotchange=${this.handleFilterActionsStartSlotChange} slot=${S.actionsStart}></slot><calcite-filter .ariaLabel=${r} .disabled=${i} .filterProps=${o} .items=${l} .label=${n} @calciteFilterChange=${this.handleFilterChange} .placeholder=${r} .scale=${this.scale} .value=${a} ${y(this.setFilterEl)}></calcite-filter><slot name=${b.filterActionsEnd} @slotchange=${this.handleFilterActionsEndSlotChange} slot=${S.actionsEnd}></slot></calcite-stack></div></div></div>` : null}<div class=${f(p.tableContainer)} role=rowgroup><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div><div aria-live=polite data-test-id=no-results-container .hidden=${!this.showNoResultsContainer}><slot name=${b.filterNoResults} @slotchange=${this.handleFilterNoResultsSlotChange}></slot></div></div>` });
  }
  renderItemAriaLive() {
    const { messages: t, filteredItems: e, parentListEl: i, messages: { _lang: l }, numberingSystem: s } = this;
    return F.numberFormatOptions = {
      locale: l,
      numberingSystem: s
    }, i ? null : d`<div aria-live=polite class=${f(p.assistiveText)}>${this.hasActiveFilter ? I("aria-filter-enabled", d`<div>${t.filterEnabled}</div>`) : null}${I("aria-item-count", d`<div>${t.total.replace("{count}", F.localize(e.length.toString()))}</div>`)}${e.length ? I("aria-item-list", d`<ol>${e.map((r) => d`<li>${r.label}</li>`)}</ol>`) : null}</div>`;
  }
}
A("calcite-list", K);
export {
  K as List
};
