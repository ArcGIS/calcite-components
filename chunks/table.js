import { h as A, L as E, k as u, z as I, x as o, s as d, E as F, B as M, j as P } from "./iframe.js";
import { e as b, n as p } from "./ref.js";
import { s as k, a as L } from "./loadable.js";
import { n as y } from "./locale.js";
import { u as O } from "./useT9n.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const n = {
  bordered: "bordered",
  striped: "striped",
  selectionArea: "selection-area",
  paginationArea: "pagination-area",
  container: "container",
  tableContainer: "table-container",
  tableFixed: "table--fixed",
  assistiveText: "assistive-text",
  selectionActions: "selection-actions"
}, g = {
  selectionActions: "selection-actions",
  tableHeader: "table-header",
  tableFooter: "table-footer"
}, H = A`:host([scale=s]){--calcite-internal-table-cell-padding: .25rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding: .5rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding: 1rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color: var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background: var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}`;
class B extends E {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.paginationEl = b(), this.tableBodySlotEl = b(), this.tableFootSlotEl = b(), this.tableHeadSlotEl = b(), this.colCount = 0, this.pageStartRow = 1, this.selectedCount = 0, this.bordered = !1, this.groupSeparator = !1, this.interactionMode = "interactive", this.layout = "auto", this.messages = O({ blocking: !0 }), this.numbered = !1, this.pageSize = 0, this.scale = "m", this._selectedItems = [], this.selectionDisplay = "top", this.selectionMode = "none", this.striped = !1, this.calciteInternalTableRowFocusChange = u({ cancelable: !1 }), this.calciteTablePageChange = u({ cancelable: !1 }), this.calciteTableSelect = u({ cancelable: !1 }), this.listen("calciteTableRowSelect", this.calciteTableRowSelectListener), this.listen("calciteInternalTableRowSelect", this.calciteInternalTableRowSelectListener), this.listen("calciteInternalTableRowFocusRequest", this.calciteInternalTableRowFocusEvent);
  }
  static {
    this.properties = { colCount: 16, pageStartRow: 16, readCellContentsToAT: 16, selectedCount: 16, bordered: 7, caption: 1, groupSeparator: 7, interactionMode: 3, layout: 3, messageOverrides: 0, numbered: 7, numberingSystem: 3, pageSize: 11, scale: 3, selectedItems: 32, _selectedItems: 16, selectionDisplay: 3, selectionMode: 3, striped: 7 };
  }
  static {
    this.styles = H;
  }
  /**
   * Specifies the component's selected items.
   *
   * @readonly
   */
  get selectedItems() {
    return this._selectedItems;
  }
  async load() {
    k(this), this.readCellContentsToAT = /safari/i.test(I()), this.listenOn(this.el.shadowRoot, "slotchange", this.handleSlotChange);
  }
  willUpdate(e) {
    (e.has("groupSeparator") && (this.hasUpdated || this.groupSeparator !== !1) || e.has("interactionMode") && (this.hasUpdated || this.interactionMode !== "interactive") || e.has("numbered") && (this.hasUpdated || this.numbered !== !1) || e.has("numberingSystem") || e.has("pageSize") && (this.hasUpdated || this.pageSize !== 0) || e.has("scale") && (this.hasUpdated || this.scale !== "m") || e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none")) && this.updateRows();
  }
  loaded() {
    L(this);
  }
  // #endregion
  // #region Private Methods
  handleSlotChange() {
    this.updateRows();
  }
  calciteTableRowSelectListener(e) {
    e.composedPath().includes(this.el) && this.setSelectedItems(e.target);
  }
  calciteInternalTableRowSelectListener(e) {
    e.composedPath().includes(this.el) && this.updateSelectedItems(!1);
  }
  calciteInternalTableRowFocusEvent(e) {
    const i = e.detail.cellPosition, s = e.detail.rowPosition, l = e.detail.destination, c = e.detail.lastCell, t = this.bodyRows?.filter((h) => !h.hidden), a = this.allRows?.filter((h) => !h.hidden), m = this.headRows[this.headRows.length - 1]?.positionAll, f = t[0]?.positionAll, S = t[t.length - 1]?.positionAll, w = this.footRows[0]?.positionAll, $ = a[a.length - 1]?.positionAll, C = l === "next" && s === m, v = l === "previous" && s === w, z = l === "previous" && s === f, T = l === "next" && s === S;
    let r;
    switch (l) {
      case "first":
        r = 0;
        break;
      case "last":
        r = $;
        break;
      case "next":
        r = C ? f : T ? w : s + 1;
        break;
      case "previous":
        r = v ? S : z ? m : s - 1;
        break;
    }
    const R = this.allRows?.find((h) => h.positionAll === r)?.cellCount, x = i > R ? R : i;
    r !== void 0 && this.calciteInternalTableRowFocusChange.emit({
      cellPosition: x,
      rowPosition: r,
      destination: l,
      lastCell: c
    });
  }
  getSlottedRows(e) {
    return e?.assignedElements({ flatten: !0 })?.filter((i) => i?.matches("calcite-table-row"));
  }
  updateRows() {
    const e = this.getSlottedRows(this.tableHeadSlotEl.value) || [], i = this.getSlottedRows(this.tableBodySlotEl.value) || [], s = this.getSlottedRows(this.tableFootSlotEl.value) || [], l = [...e, ...i, ...s];
    e?.forEach((t) => {
      const a = e?.indexOf(t);
      t.rowType = "head", t.positionSection = a, t.positionSectionLocalized = this.localizeNumber((a + 1).toString());
    }), i?.forEach((t) => {
      const a = i?.indexOf(t);
      t.rowType = "body", t.positionSection = a, t.positionSectionLocalized = this.localizeNumber((a + 1).toString());
    }), s?.forEach((t) => {
      const a = s?.indexOf(t);
      t.rowType = "foot", t.positionSection = a, t.positionSectionLocalized = this.localizeNumber((a + 1).toString());
    }), l?.forEach((t) => {
      t.interactionMode = this.interactionMode, t.selectionMode = this.selectionMode, t.bodyRowCount = i?.length, t.positionAll = l?.indexOf(t), t.numbered = this.numbered, t.scale = this.scale, t.readCellContentsToAT = this.readCellContentsToAT, t.lastVisibleRow = l?.indexOf(t) === l.length - 1;
    });
    const c = e[0]?.cellCount || e[0]?.querySelectorAll("calcite-table-header")?.length;
    this.colCount = c, this.headRows = e, this.bodyRows = i, this.footRows = s, this.allRows = l, this.updateSelectedItems(), this.paginateRows();
  }
  handlePaginationChange() {
    const e = this.paginationEl.value?.startItem;
    this.pageStartRow = e || 1, this.calciteTablePageChange.emit(), this.updateRows();
  }
  paginateRows() {
    this.bodyRows?.forEach((e) => {
      const i = e.positionSection + 1, s = i >= this.pageStartRow && i < this.pageStartRow + this.pageSize;
      e.hidden = this.pageSize > 0 && !s && !this.footRows.includes(e), e.lastVisibleRow = i === this.pageStartRow + this.pageSize - 1 || i === this.bodyRows.length;
    });
  }
  updateSelectedItems(e) {
    const i = this.bodyRows?.filter((s) => s.selected);
    this._selectedItems = i, this.selectedCount = i?.length, this.allRows?.forEach((s) => {
      s.selectedRowCount = this.selectedCount, s.selectedRowCountLocalized = this.localizeNumber(this.selectedCount);
    }), e && this.calciteTableSelect.emit();
  }
  handleDeselectAllRows() {
    this.bodyRows?.forEach((e) => {
      e.selected = !1;
    }), this.updateSelectedItems(!0);
  }
  setSelectedItems(e) {
    this.bodyRows?.forEach((i) => {
      e?.rowType === "head" ? i.selected = this.selectedCount !== this.bodyRows?.length : i.selected = e === i ? !i.selected : this.selectionMode === "multiple" ? i.selected : !1;
    }), this.updateSelectedItems(!0);
  }
  localizeNumber(e) {
    return y.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    }, y.localize(e.toString());
  }
  // #endregion
  // #region Rendering
  renderSelectionArea() {
    const e = this._selectedItems?.filter((t) => t.hidden)?.length, i = this.localizeNumber(e?.toString()), l = `${this.localizeNumber(this.selectedCount?.toString())} ${this.messages.selected}`, c = `${i} ${this.messages.hiddenSelected}`;
    return o`<div class=${d(n.selectionArea)}><calcite-chip .kind=${this.selectedCount > 0 ? "brand" : "neutral"} .label=${l} .scale=${this.scale} .value=${l}>${l}</calcite-chip>${e > 0 && o`<calcite-chip icon=hide-empty .label=${c} .scale=${this.scale} title=${c ?? F} .value=${c}>${i}</calcite-chip>` || ""}${this.selectedCount > 0 && o`<calcite-button icon-start=x kind=neutral @click=${this.handleDeselectAllRows} round .scale=${this.scale} .title=${`${this.messages.clear} ${l} ${this.messages.row}`}>${this.messages.clear}</calcite-button>` || ""}<div class=${d(n.selectionActions)}><slot name=${g.selectionActions}></slot></div></div>`;
  }
  renderPaginationArea() {
    return o`<div class=${d(n.paginationArea)}><calcite-pagination .groupSeparator=${this.groupSeparator} .numberingSystem=${this.numberingSystem} @calcitePaginationChange=${this.handlePaginationChange} .pageSize=${this.pageSize} .scale=${this.scale} start-item=1 .totalItems=${this.bodyRows?.length} ${p(this.paginationEl)}></calcite-pagination></div>`;
  }
  renderTHead() {
    return o`<thead><slot name=${g.tableHeader} ${p(this.tableHeadSlotEl)}></slot></thead>`;
  }
  renderTBody() {
    return o`<tbody><slot ${p(this.tableBodySlotEl)}></slot></tbody>`;
  }
  renderTFoot() {
    return o`<tfoot><slot name=${g.tableFooter} ${p(this.tableFootSlotEl)}></slot></tfoot>`;
  }
  render() {
    return o`<div class=${d(n.container)}>${this.selectionMode !== "none" && this.selectionDisplay !== "none" && this.renderSelectionArea() || ""}<div class=${d({
      [n.bordered]: this.bordered,
      [n.striped]: this.striped,
      [n.tableContainer]: !0
    })}><table .ariaColCount=${this.colCount} .ariaMultiSelectable=${/* workaround to ensure the attr gets removed; we should be able to avoid the ternary when fixed */
    this.selectionMode === "multiple" ? "true" : null} .ariaRowCount=${this.allRows?.length} class=${d({ [n.tableFixed]: this.layout === "fixed" })} .role=${this.interactionMode === "interactive" ? "grid" : "table"} ${p((e) => {
      e && M(o`<caption class=${d(n.assistiveText)}>${this.caption}</caption>${this.renderTHead()}${this.renderTBody()}${this.renderTFoot()}`, e);
    })}></table></div>${this.pageSize > 0 && this.renderPaginationArea() || ""}</div>`;
  }
}
P("calcite-table", B);
export {
  B as Table
};
