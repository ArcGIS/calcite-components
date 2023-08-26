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
import { Scale, SelectionMode } from "../interfaces";
import {
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";
import {
  connectLocalized,
  disconnectLocalized,
  LocalizedComponent,
  numberStringFormatter,
  NumberingSystem,
} from "../../utils/locale";
import { TableAppearance, TableLayout, TableRowFocusEvent } from "./interfaces";
import { CSS } from "./resources";
import { TableMessages } from "./assets/table/t9n";

/**
 * @slot - A slot for adding `calcite-table-row` or nested `calcite-table` elements. Content placed here will be rendered in a `table-body` tag.
 * @slot table-head- A slot for adding `calcite-table-row` and nested `calcite-table-header` elements.
 * @slot table-foot- A slot for adding `calcite-table-row` and nested `calcite-table-header` elements.
 * @slot selection-actions - A slot for adding a `calcite-action` or other element to display when `selectionMode !== "none"` and `calcite-table-row` are selected.
 */

@Component({
  tag: "calcite-table",
  styleUrl: "table.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Table implements LocalizedComponent, LoadableComponent, T9nComponent {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** Specifies the appearance of the component. */
  @Prop({ reflect: true }) appearance: TableAppearance = "simple";

  /** Specifies an accessible title for the component. */
  @Prop() caption!: string;

  /** When `true`, number values are displayed with a group separator corresponding to the language and country format. */
  @Prop({ reflect: true }) groupSeparator = false;

  /** Specifies the layout of the component. */
  @Prop({ reflect: true }) layout: TableLayout = "auto";

  /** When `true`, displays the position of the row in numeric form */
  @Prop({ reflect: true }) numbered = false;

  /** Specifies the Unicode numeral system used by the component for localization. */
  @Prop({ reflect: true }) numberingSystem?: NumberingSystem;

  /** Specifies the page size of the component. When true, renders pagination. */
  @Prop({ reflect: true }) pageSize = 0;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** Specifies the selection mode of the component. */
  @Prop({ reflect: true }) selectionMode: Extract<"none" | "multiple" | "single", SelectionMode> =
    "none";

  @Watch("pageSize")
  @Watch("numbered")
  @Watch("selectionMode")
  @Watch("numberingSystem")
  @Watch("groupSeparator")
  handleNumberedChange(): void {
    this.updateRows();
  }

  /**
   * Specifies the component's selected items.
   *
   * @readonly
   */
  @Prop({ mutable: true }) selectedItems: HTMLCalciteTableRowElement[] = [];

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: TableMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<TableMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTableElement;

  @State() colCount = 0;

  @State() currentPageStartRow = 1;

  @State() firstRowInTable = 1;

  @State() firstRowInBody = 1;

  @State() lastRowInBody: number;

  @State() lastRowInTable: number;

  @State() selectedCount = 0;

  @State() defaultMessages: TableMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  private allRows: HTMLCalciteTableRowElement[];

  private headRows: HTMLCalciteTableRowElement[];

  private bodyRows: HTMLCalciteTableRowElement[];

  private footRows: HTMLCalciteTableRowElement[];

  private tableHeadSlotEl: HTMLSlotElement;

  private tableBodySlotEl: HTMLSlotElement;

  private tableFootSlotEl: HTMLSlotElement;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    await setUpMessages(this);
    this.updateRows();
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  connectedCallback(): void {
    connectLocalized(this);
    connectMessages(this);
  }

  disconnectedCallback(): void {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Emits when the component's selection changes. */
  @Event({ cancelable: false }) calciteTableSelect: EventEmitter<void>;

  /** Emits when the component's selection changes. */
  @Event({ cancelable: false }) calciteTablePageSelect: EventEmitter<void>;

  /** @internal */
  @Event({ cancelable: false })
  calciteInternalTableRowFocusChange: EventEmitter<TableRowFocusEvent>;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("calciteTableRowSelect")
  calciteChipSelectListener(event: CustomEvent): void {
    if (event.composedPath().includes(this.el)) {
      this.setSelectedItems(event.target as HTMLCalciteTableRowElement);
    }
  }

  @Listen("calciteInternalTableRowFocusRequest")
  calciteInternalTableRowFocusEvent(event: TableRowFocusEvent): void {
    const cellPosition = event["detail"].cellPosition;
    const rowPos = event["detail"].rowPosition;
    const destination = event["detail"].destination;
    const leavingHeader = destination === "next" && rowPos < this.firstRowInBody;
    const leavingFooter = destination === "previous" && rowPos > this.lastRowInBody;
    const enteringHeader = destination === "previous" && rowPos === this.firstRowInBody;
    const enteringFooter =
      this.footRows.length > 0 && destination === "next" && rowPos === this.lastRowInBody;

    let rowPosition: number;
    switch (destination) {
      case "first":
        rowPosition = 0;
        break;
      case "last":
        rowPosition = this.lastRowInTable - 1;
        break;
      case "next":
        rowPosition = leavingHeader
          ? this.firstRowInBody
          : enteringFooter
          ? this.footRows[0].positionAll
          : rowPos + 1;
        break;
      case "previous":
        rowPosition = leavingFooter
          ? this.lastRowInBody
          : enteringHeader
          ? this.headRows[this.headRows.length - 1].positionAll
          : rowPos - 1;

        break;
    }
    const destinationCount = this.allRows?.find(
      (row) => row.positionAll === rowPosition
    )?.cellCount;

    const adjustedPos = cellPosition > destinationCount ? destinationCount : cellPosition;

    this.calciteInternalTableRowFocusChange.emit({
      cellPosition: adjustedPos,
      rowPosition,
      destination,
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private getSlottedRows = (el: HTMLSlotElement): HTMLCalciteTableRowElement[] => {
    return el
      ?.assignedElements({ flatten: true })
      ?.filter((el) => el?.matches("calcite-table-row")) as HTMLCalciteTableRowElement[];
  };

  private updateRows = (): void => {
    const headRows = this.getSlottedRows(this.tableHeadSlotEl) || [];
    const bodyRows = this.getSlottedRows(this.tableBodySlotEl) || [];
    const footRows = this.getSlottedRows(this.tableFootSlotEl) || [];

    const allRows = [...headRows, ...bodyRows, ...footRows];

    headRows?.forEach((row) => {
      const position = headRows?.indexOf(row);
      row.rowType = "head";
      row.positionSection = position;
      row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
    });

    bodyRows?.forEach((row) => {
      const position = bodyRows?.indexOf(row);
      row.rowType = "body";
      row.positionSection = position;
      row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
    });

    footRows?.forEach((row) => {
      const position = footRows?.indexOf(row);
      row.rowType = "foot";
      row.positionSection = position;
      row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
    });

    allRows?.forEach((row) => {
      row.selectionMode = this.selectionMode;
      row.totalRowCount = bodyRows?.length;
      row.positionAll = allRows?.indexOf(row);
      row.numbered = this.numbered;
    });

    const colCount =
      headRows?.length > 0 ? headRows[0]?.querySelectorAll("calcite-table-header")?.length : 0;

    this.colCount = colCount;
    this.headRows = headRows;
    this.bodyRows = bodyRows;
    this.footRows = footRows;
    this.allRows = allRows;

    this.updateSelectedItems();
    this.paginateRows();
  };

  private handlePaginationChange = (event: CustomEvent): void => {
    const requestedItem = (event.target as HTMLCalcitePaginationElement).startItem;
    this.currentPageStartRow = requestedItem || 1;
    this.calciteTablePageSelect.emit();
    this.updateRows();
  };

  private paginateRows = (): void => {
    this.bodyRows?.forEach((row) => {
      const offsetBodyPos = row.positionSection + 1 + this.headRows?.length;
      const inView =
        this.pageSize < 1 ||
        (offsetBodyPos > this.currentPageStartRow &&
          offsetBodyPos <= this.currentPageStartRow + this.pageSize);

      row.hidden = !inView && !this.footRows.includes(row);
    });

    const visibleBody = this.bodyRows?.filter((row) => !row.hidden);
    const visibleAll = this.allRows?.filter((row) => !row.hidden);

    this.firstRowInBody = visibleBody[0]?.positionSection + 1;
    this.lastRowInBody = visibleBody[visibleBody?.length - 1]?.positionSection + 1;
    this.firstRowInTable = visibleAll[0]?.positionAll + 1;
    this.lastRowInTable = visibleAll[visibleAll?.length - 1]?.positionAll + 1;
  };

  private updateSelectedItems = (emit?: boolean): void => {
    const selectedItems = this.bodyRows?.filter((el) => el.selected);
    this.selectedItems = selectedItems;
    this.selectedCount = selectedItems?.length;
    this.allRows?.forEach((row) => {
      row.selectedRowCount = this.selectedCount;
      row.selectedRowCountLocalized = this.localizeNumber(this.selectedCount);
    });

    if (emit) {
      this.calciteTableSelect.emit();
    }
  };

  private handleDeselectAllRows = (): void => {
    this.bodyRows?.forEach((row) => {
      row.selected = false;
    });
    this.updateSelectedItems(true);
  };

  private setSelectedItems = (elToMatch?: HTMLCalciteTableRowElement): void => {
    if (elToMatch?.rowType === "head") {
      this.bodyRows?.forEach((el) => (el.selected = this.selectedCount !== this.bodyRows?.length));
    } else if (elToMatch?.rowType === "body") {
      this.bodyRows?.forEach((el) => {
        const matchingEl = elToMatch === el;
        switch (this.selectionMode) {
          case "multiple":
            if (matchingEl) {
              el.selected = !el.selected;
            }
            break;
          case "single":
            el.selected = matchingEl ? !el.selected : false;
            break;
        }
      });
    }
    this.updateSelectedItems(true);
  };

  private localizeNumber = (value: number | string): string => {
    numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator,
    };

    return numberStringFormatter.localize(value.toString());
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderSelectionArea(): VNode {
    numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator,
    };

    const outOfViewCount = this.selectedItems?.filter((el) => el.hidden)?.length;
    const localizedOutOfViewCount = this.localizeNumber(outOfViewCount?.toString());
    const localizedSelectedCount = this.localizeNumber(this.selectedCount?.toString());
    const selectionText = `${localizedSelectedCount} ${this.messages.selected}`;
    const outOfViewText = `${localizedOutOfViewCount} ${this.messages.hiddenSelected}`;

    return (
      <div class={CSS.selectionArea}>
        <calcite-chip
          kind={this.selectedCount > 0 ? "brand" : "neutral"}
          scale={this.scale}
          value={selectionText}
        >
          {selectionText}
        </calcite-chip>
        {outOfViewCount > 0 && (
          <calcite-chip
            icon="hide-empty"
            scale={this.scale}
            title={outOfViewText}
            value={outOfViewText}
          >
            {localizedOutOfViewCount}
          </calcite-chip>
        )}
        {this.selectedCount > 0 && (
          <calcite-button
            icon-start="x"
            kind="neutral"
            onClick={this.handleDeselectAllRows}
            round
            scale={this.scale}
            title={`${this.messages.clear} ${selectionText} ${this.messages.row}`}
          >
            {this.messages.clear}
          </calcite-button>
        )}
        <div class={CSS.selectionActions}>
          <slot name="selection-actions" />
        </div>
      </div>
    );
  }

  renderPaginationArea(): VNode {
    return (
      <div class={CSS.paginationArea}>
        <calcite-pagination
          groupSeparator={this.groupSeparator}
          numberingSystem={this.numberingSystem}
          onCalcitePaginationChange={(event) => this.handlePaginationChange(event)}
          pageSize={this.pageSize}
          scale={this.scale}
          startItem={1}
          totalItems={this.bodyRows?.length}
        />
      </div>
    );
  }

  renderTHead(): VNode {
    return (
      <thead>
        <slot
          name="table-head"
          onSlotchange={this.updateRows}
          ref={(el) => (this.tableHeadSlotEl = el as HTMLSlotElement)}
        />
      </thead>
    );
  }

  renderTBody(): VNode {
    return (
      <tbody>
        <slot
          onSlotchange={this.updateRows}
          ref={(el) => (this.tableBodySlotEl = el as HTMLSlotElement)}
        />
      </tbody>
    );
  }

  renderTFoot(): VNode {
    return (
      <tfoot>
        <slot
          name="table-foot"
          onSlotchange={this.updateRows}
          ref={(el) => (this.tableFootSlotEl = el as HTMLSlotElement)}
        />
      </tfoot>
    );
  }

  render(): VNode {
    return (
      <Host>
        <div class={CSS.container}>
          {this.selectionMode !== "none" && this.renderSelectionArea()}
          <div class={CSS.tableContainer}>
            <table
              aria-colcount={this.colCount}
              aria-multiselectable={this.selectionMode === "multiple"}
              aria-readonly={true}
              aria-rowcount={this.allRows?.length}
              class={{ [this.appearance]: true, [CSS.tableFixed]: this.layout === "fixed" }}
              role="grid"
            >
              <caption class={CSS.assistiveText}>{this.caption}</caption>
              {this.renderTHead()}
              {this.renderTBody()}
              {this.renderTFoot()}
            </table>
          </div>
          {this.pageSize > 0 && this.renderPaginationArea()}
        </div>
      </Host>
    );
  }
}
