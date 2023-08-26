import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import { LocalizedComponent } from "../../utils/locale";
import { Scale, SelectionMode } from "../interfaces";
import { focusElementInGroup, FocusElementInGroupDestination } from "../../utils/dom";
import { RowType, TableRowFocusEvent } from "../table/interfaces";
import { CSS } from "./resources";

/**
 * @slot - A slot for adding `calcite-table-cell` or `calcite-table-header` elements.
 */

@Component({
  tag: "calcite-table-row",
  styleUrl: "table-row.scss",
  shadow: true,
})
export class Table implements LocalizedComponent {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  @Prop({ reflect: true }) disabled = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** Is the component selected. */
  @Prop({ reflect: true }) selected = false;

  /** @internal */
  @Prop({ mutable: true }) cellCount: number;

  /** @internal */
  @Prop() rowType: RowType;

  /** @internal */
  @Prop() numbered = false;

  /** @internal */
  @Prop() positionSection: number;

  /** @internal */
  @Prop() positionSectionLocalized: string;

  /** @internal */
  @Prop() positionAll: number;

  /** @internal */
  @Prop() selectionMode: Extract<"multiple" | "single" | "none", SelectionMode> = "none";

  /** @internal */
  @Prop() selectedRowCount: number;

  /** @internal */
  @Prop() selectedRowCountLocalized: string;

  /** @internal */
  @Prop() bodyRowCount: number;

  @Watch("selected")
  @Watch("selectionMode")
  @Watch("selectedRowCount")
  @Watch("bodyRowCount")
  @Watch("numbered")
  handleCellChanges(): void {
    // todo need to ensure conditionally rendered cells
    // (number / selection) exist before setting properties on all cells
    if (this.rowCells?.length > 0) {
      setTimeout(() => this.updateCells(), 60);
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  componentDidLoad(): void {
    this.updateCells();
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteTableRowElement;

  private tableRowSlotEl: HTMLSlotElement;

  private tableRowEl: HTMLTableRowElement;

  private rowCells: (HTMLCalciteTableCellElement | HTMLCalciteTableHeaderElement)[] = [];

  @State() effectiveLocale = "";

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Fires when the selected state of the component changes.
   */
  @Event({ cancelable: false }) calciteTableRowSelect: EventEmitter<void>;

  /** @internal */
  @Event({ cancelable: false })
  calciteInternalTableRowFocusRequest: EventEmitter<TableRowFocusEvent>;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("calciteInternalTableRowFocusChange", { target: "document" })
  calciteInternalTableRowFocusChangeHandler(event: CustomEvent): void {
    if ((event.target as Element).contains(this.el)) {
      const position = event.detail.cellPosition;
      const rowPosition = event.detail.rowPosition;
      const destination = event.detail.destination;

      if (rowPosition === this.positionAll) {
        if (this.disabled) {
          const deflectDirection =
            destination === "last" ? "previous" : destination === "first" ? "next" : destination;
          this.emitTableRowFocusRequest(position, this.positionAll, deflectDirection);
          return;
        }
        const cellPosition = (this.rowCells as any)?.find((_, index) => index + 1 === position);
        if (cellPosition) {
          cellPosition.setFocus();
        }
      }
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private keyDownHandler(event: KeyboardEvent): void {
    const el = event.target as HTMLCalciteTableCellElement | HTMLCalciteTableHeaderElement;
    const key = event.key;
    const isControl = event.ctrlKey;
    const cells = this.rowCells;
    if (el?.matches("calcite-table-cell") || el.matches("calcite-table-header")) {
      switch (key) {
        case "ArrowUp":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "previous");
          event.preventDefault();
          break;
        case "ArrowDown":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "next");
          event.preventDefault();
          break;
        case "PageUp":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "first");
          event.preventDefault();
          break;
        case "PageDown":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "last");
          event.preventDefault();
          break;
        case "ArrowLeft":
          focusElementInGroup(cells, el, "previous", false);
          event.preventDefault();
          break;
        case "ArrowRight":
          focusElementInGroup(cells, el, "next", false);
          event.preventDefault();
          break;
        case "Home":
          if (isControl) {
            this.emitTableRowFocusRequest(1, this.positionAll, "first");
            event.preventDefault();
          } else {
            focusElementInGroup(cells, el, "first", false);
            event.preventDefault();
          }
          break;
        case "End":
          if (isControl) {
            this.emitTableRowFocusRequest(this.rowCells?.length, this.positionAll, "last");
            event.preventDefault();
          } else {
            focusElementInGroup(cells, el, "last", false);
            event.preventDefault();
          }
          break;
      }
    }
  }

  private emitTableRowFocusRequest = (
    cellPosition: number,
    rowPosition: number,
    destination: FocusElementInGroupDestination
  ): void => {
    this.calciteInternalTableRowFocusRequest.emit({
      cellPosition,
      rowPosition,
      destination,
    });
  };

  private updateCells = (): void => {
    const slottedCells = this.tableRowSlotEl
      ?.assignedElements({ flatten: true })
      .filter(
        (el) => el?.matches("calcite-table-cell") || el?.matches("calcite-table-header")
      ) as any;

    const renderedCells = Array.from(
      this.tableRowEl?.querySelectorAll("calcite-table-header, calcite-table-cell")
    ).filter(
      (el: HTMLCalciteTableCellElement | HTMLCalciteTableHeaderElement) =>
        el.numberCell || el.selectionCell
    );
    const cells = renderedCells ? renderedCells.concat(slottedCells) : slottedCells;

    if (cells.length > 0) {
      cells?.forEach((cell, index) => {
        cell.positionInRow = index + 1;
        cell.parentRowType = this.rowType;
        cell.parentRowIsSelected = this.selected;
        cell.parentRowType = this.rowType;
      });
    }
    this.rowCells = cells || [];
    this.cellCount = cells.length;
  };

  private handleSelectionOfRow = (): void => {
    this.calciteTableRowSelect.emit();
  };

  private handleKeyboardSelection = (event: KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      if (event.key === " ") {
        event.preventDefault();
      }
      this.handleSelectionOfRow();
    }
  };

  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------

  renderSelectionIcon(): VNode {
    const icon =
      this.selectionMode === "multiple" && this.selected
        ? "check-square-f"
        : this.selectionMode === "multiple"
        ? "square"
        : this.selected
        ? "circle-f"
        : "circle";

    return <calcite-icon icon={icon} scale="s" />;
  }

  renderSelectableCell(): VNode {
    return this.rowType === "head" ? (
      <calcite-table-header
        alignment="center"
        bodyRowCount={this.bodyRowCount}
        onClick={this.selectionMode === "multiple" && this.handleSelectionOfRow}
        onKeyDown={this.selectionMode === "multiple" && this.handleKeyboardSelection}
        selectedRowCount={this.selectedRowCount}
        selectedRowCountLocalized={this.selectedRowCountLocalized}
        selectionCell
        selectionMode={this.selectionMode}
      />
    ) : this.rowType === "body" ? (
      <calcite-table-cell
        alignment="center"
        onClick={this.handleSelectionOfRow}
        onKeyDown={this.handleKeyboardSelection}
        parentRowIsSelected={this.selected}
        parentRowPositionLocalized={this.positionSectionLocalized}
        selectionCell
      >
        {this.renderSelectionIcon()}
      </calcite-table-cell>
    ) : (
      <calcite-table-cell alignment="center" selectionCell />
    );
  }

  renderNumberedCell(): VNode {
    return this.rowType === "head" ? (
      <calcite-table-header alignment="center" numberCell />
    ) : (
      <calcite-table-cell alignment="center" numberCell>
        {this.rowType === "body" && this.positionSectionLocalized}
      </calcite-table-cell>
    );
  }

  render(): VNode {
    return (
      <Host>
        <tr
          aria-rowindex={this.positionAll + 1}
          aria-selected={this.selected}
          class={{ [CSS.isInTableHead]: this.rowType === "head" }}
          onKeyDown={(event) => this.keyDownHandler(event)}
          // eslint-disable-next-line react/jsx-sort-props
          ref={(el) => (this.tableRowEl = el)}
        >
          {this.numbered && this.renderNumberedCell()}
          {this.selectionMode !== "none" && this.renderSelectableCell()}
          <slot
            onSlotchange={this.updateCells}
            ref={(el) => (this.tableRowSlotEl = el as HTMLSlotElement)}
          />
        </tr>
      </Host>
    );
  }
}
