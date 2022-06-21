import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  VNode
} from "@stencil/core";
import { getElementDir, getElementProp, toAriaBoolean } from "../../utils/dom";

import { CSS_UTILITY } from "../../utils/resources";
import { Position } from "../interfaces";
import { guid } from "../../utils/guid";

/**
 * @slot - A slot for adding custom content, including nested `calcite-accordion-item`s.
 */
@Component({
  tag: "calcite-accordion-item",
  styleUrl: "accordion-item.scss",
  shadow: true
})
export class AccordionItem {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteAccordionItemElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /** When true, the component is active.
   *
   * @deprecated use expanded instead
   */

  @Prop({ reflect: true, mutable: true }) active = false;

  /** When true, item is expanded */
  @Prop({ mutable: true }) expanded = false;

  /**
   * Specifies a title for the component.
   *
   * @deprecated Use `heading` instead.
   */
  @Prop()
  itemTitle?: string;

  /**
   * Specifies a subtitle for the component.
   *
   * @deprecated Use `description` instead.
   */
  @Prop() itemSubtitle?: string;

  /** Specifies heading text for the component. */
  @Prop() heading?: string;

  /** Specifies a description for the component. */
  @Prop() description: string;

  /** Specifies an icon to display - accepts Calcite UI icon names. */
  @Prop({ reflect: true }) icon?: string;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * @internal
   */
  @Event() calciteInternalAccordionItemKeyEvent: EventEmitter;

  /**
   * @internal
   */
  @Event() calciteInternalAccordionItemSelect: EventEmitter;

  /**
   * @internal
   */
  @Event() calciteInternalAccordionItemClose: EventEmitter;

  /**
   * @internal
   */
  @Event() calciteInternalAccordionItemRegister: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.parent = this.el.parentElement as HTMLCalciteAccordionElement;
    this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
    this.iconType = getElementProp(this.el, "icon-type", "chevron");
    this.iconPosition = getElementProp(this.el, "icon-position", this.iconPosition);
  }

  componentDidLoad(): void {
    this.itemPosition = this.getItemPosition();
    this.calciteInternalAccordionItemRegister.emit({
      parent: this.parent,
      position: this.itemPosition
    });
  }

  render(): VNode {
    const dir = getElementDir(this.el);

    const iconEl = <calcite-icon class="accordion-item-icon" icon={this.icon} scale="s" />;

    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;

    return (
      <Host tabindex="0">
        <div
          class={{
            [`icon-position--${this.iconPosition}`]: true,
            [`icon-type--${this.iconType}`]: true
          }}
        >
          <div
            aria-controls={regionId}
            class={{ "accordion-item-header": true, [CSS_UTILITY.rtl]: dir === "rtl" }}
            id={buttonId}
            onClick={this.itemHeaderClickHandler}
            role="button"
          >
            {this.icon ? iconEl : null}
            <div class="accordion-item-header-text">
              <span class="accordion-item-heading">{this.heading || this.itemTitle}</span>
              {this.itemSubtitle ? (
                <span class="accordion-item-description">
                  {this.description || this.itemSubtitle}
                </span>
              ) : null}
            </div>
            <calcite-icon
              class="accordion-item-expand-icon"
              icon={
                this.iconType === "chevron"
                  ? "chevronDown"
                  : this.iconType === "caret"
                  ? "caretDown"
                  : this.expanded || this.active
                  ? "minus"
                  : "plus"
              }
              scale="s"
            />
          </div>
          <div
            aria-expanded={toAriaBoolean(this.expanded || this.active)}
            aria-labelledby={buttonId}
            class="accordion-item-content"
            id={regionId}
            role="region"
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown")
  keyDownHandler(e: KeyboardEvent): void {
    if (e.target === this.el) {
      switch (e.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "Home":
        case "End":
          this.calciteInternalAccordionItemKeyEvent.emit({
            parent: this.parent,
            item: e
          });
          e.preventDefault();
          break;
      }
    }
  }

  @Listen("calciteInternalAccordionChange", { target: "body" })
  updateActiveItemOnChange(event: CustomEvent): void {
    this.requestedAccordionItem = event.detail
      .requestedAccordionItem as HTMLCalciteAccordionItemElement;
    if (this.el.parentNode !== this.requestedAccordionItem.parentNode) {
      return;
    }
    this.determineActiveItem();
    event.stopPropagation();
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  private guid = guid();

  /** the containing accordion element */
  private parent: HTMLCalciteAccordionElement;

  /** position within parent */
  private itemPosition: number;

  /** the latest requested item */
  private requestedAccordionItem: HTMLCalciteAccordionItemElement;

  /** what selection mode is the parent accordion in */
  private selectionMode: string;

  /** what icon position does the parent accordion specify */
  private iconPosition: Position = "end";

  /** what icon type does the parent accordion specify */
  private iconType: string;

  /** handle clicks on item header */
  private itemHeaderClickHandler = (): void => this.emitRequestedItem();
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private determineActiveItem(): void {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedAccordionItem) {
          this.active = !this.active;
          this.expanded = !this.expanded;
        }
        break;

      case "single":
        this.active = this.el === this.requestedAccordionItem ? !this.active : false;
        this.expanded = this.el === this.requestedAccordionItem ? !this.expanded : false;
        break;

      case "single-persist":
        this.active = this.el === this.requestedAccordionItem;
        this.expanded = this.el === this.requestedAccordionItem;
        break;
    }
  }

  private emitRequestedItem(): void {
    this.calciteInternalAccordionItemSelect.emit({
      requestedAccordionItem: this.el as HTMLCalciteAccordionItemElement
    });
  }

  private getItemPosition(): number {
    return Array.prototype.indexOf.call(
      this.parent.querySelectorAll("calcite-accordion-item"),
      this.el
    );
  }
}
