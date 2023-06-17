import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  VNode,
  Watch
} from "@stencil/core";
import { Appearance, Position, Scale, SelectionMode } from "../interfaces";
import { createObserver } from "../../utils/observers";
import { RequestedItem } from "./interfaces";
/**
 * @slot - A slot for adding `calcite-accordion-item`s. `calcite-accordion` cannot be nested, however `calcite-accordion-item`s can.
 */
@Component({
  tag: "calcite-accordion",
  styleUrl: "accordion.scss",
  shadow: true
})
export class Accordion {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteAccordionElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /** Specifies the appearance of the component. */
  @Prop({ reflect: true }) appearance: Extract<"solid" | "transparent", Appearance> = "solid";

  /** Specifies the placement of the icon in the header. */
  @Prop({ reflect: true }) iconPosition: Position = "end";

  /** Specifies the type of the icon in the header. */
  @Prop({ reflect: true }) iconType: "chevron" | "caret" | "plus-minus" = "chevron";

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /**
   * Specifies the selection mode - `"multiple"` (allow any number of open items), `"single"` (allow one open item),
   * or `"single-persist"` (allow and require one open item).
   */
  @Prop({ reflect: true }) selectionMode: Extract<
    "single" | "single-persist" | "multiple",
    SelectionMode
  > = "multiple";

  @Watch("iconPosition")
  @Watch("iconType")
  @Watch("scale")
  @Watch("selectionMode")
  handlePropsChange(): void {
    this.updateAccordionItems();
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * @internal
   */
  @Event({ cancelable: false }) calciteInternalAccordionChange: EventEmitter<RequestedItem>;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.updateAccordionItems();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  componentDidLoad(): void {
    if (!this.sorted) {
      this.items = this.sortItems(this.items);
      this.sorted = true;
    }
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
  }

  render(): VNode {
    const transparent = this.appearance === "transparent";
    return (
      <div
        class={{
          "accordion--transparent": transparent,
          accordion: !transparent
        }}
      >
        <slot />
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("calciteInternalAccordionItemRegister")
  registerCalciteAccordionItem(event: CustomEvent): void {
    const item = {
      item: event.target as HTMLCalciteAccordionItemElement,
      parent: event.detail.parent as HTMLCalciteAccordionElement,
      position: event.detail.position as number
    };
    if (this.el === item.parent) {
      this.items.push(item);
    }
    event.stopPropagation();
  }

  @Listen("calciteInternalAccordionItemSelect")
  updateActiveItemOnChange(event: CustomEvent): void {
    this.requestedAccordionItem = event.detail.requestedAccordionItem;
    this.calciteInternalAccordionChange.emit({
      requestedAccordionItem: this.requestedAccordionItem
    });
    event.stopPropagation();
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------
  mutationObserver = createObserver("mutation", () => this.updateAccordionItems());

  /** created list of Accordion items */
  accordionItems: HTMLCalciteAccordionItemElement[] = [];

  /** created list of Accordion item objects */
  private items: {
    item: HTMLCalciteAccordionItemElement;
    parent: HTMLCalciteAccordionElement;
    position: number;
  }[] = [];

  /** keep track of whether the items have been sorted so we don't re-sort */
  private sorted = false;

  /** keep track of the requested item for multi mode */
  private requestedAccordionItem: HTMLCalciteAccordionItemElement;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private updateAccordionItems = (): void => {
    this.accordionItems = Array.from(this.el.querySelectorAll("accordion-item"));

    this.accordionItems.forEach((accordionItem) => {
      accordionItem.iconPosition = this.iconPosition;
      accordionItem.iconType = this.iconType;
      accordionItem.selectionMode = this.selectionMode;
      accordionItem.scale = this.scale;
    });
  };

  private sortItems = (items: any[]): any[] =>
    items.sort((a, b) => a.position - b.position).map((a) => a.item);
}
