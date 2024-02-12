import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent,
} from "../../utils/conditionalSlot";
import { getSlotted, toAriaBoolean } from "../../utils/dom";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";

import { LogicalFlowPosition } from "../interfaces";
import { CardMessages } from "./assets/card/t9n";
import { CSS, ICONS, SLOTS } from "./resources";
import { SelectionMode } from "../interfaces";

/**
 * @slot - A slot for adding content.
 * @slot title - [Deprecated] use `heading` instead. A slot for adding a heading
 * @slot subtitle - [Deprecated] use `description` instead. A slot for adding a description.
 * @slot thumbnail - A slot for adding a thumbnail.
 * @slot heading - A slot for adding a heading.
 * @slot description - A slot for adding a description.
 * @slot footer-start - A slot for adding a leading footer.
 * @slot footer-end - A slot for adding a trailing footer.
 */

@Component({
  tag: "calcite-card",
  styleUrl: "card.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Card implements ConditionalSlotComponent, LocalizedComponent, T9nComponent {
  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /**  When `true`, a busy indicator is displayed. */
  @Prop({ reflect: true }) loading = false;

  /** Sets the placement of the thumbnail defined in the `thumbnail` slot. */
  @Prop({ reflect: true }) thumbnailPosition: LogicalFlowPosition = "block-start";

  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  @Prop({ reflect: true }) disabled = false;

  /** Accessible name for the component. */
  @Prop() label: string;

  /**
   * When `true`, the component is selectable.
   *
   * @deprecated use `selectionMode` property on a parent `Card Group` instead.
   */
  @Prop({ reflect: true }) selectable = false;

  /** When `true`, the component is selected.  */
  @Prop({ reflect: true }) selected = false;

  /**
   * When true, enables the card to be focused, and allows the `calciteCardSelect` to emit.
   * This is set to `true` by a parent Card Group component.
   *
   * @internal
   */
  @Prop() interactive = false;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: CardMessages;

  /**
   * This internal property, managed by a containing `calcite-card-group`, is
   * conditionally set based on the `selectionMode` of the parent
   *
   * @internal
   */
  @Prop() selectionMode: Extract<"multiple" | "single" | "single-persist" | "none", SelectionMode> =
    "none";

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<CardMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  private containerEl: HTMLDivElement;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown")
  keyDownHandler(event: KeyboardEvent): void {
    if (event.composedPath()[0] === this.containerEl) {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          this.calciteCardSelect.emit();
          break;
        case "ArrowRight":
        case "ArrowLeft":
        case "Home":
        case "End":
          this.calciteInternalCardKeyEvent.emit(event);
          event.preventDefault();
          break;
      }
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Fires when the deprecated `selectable` is true, or `selectionMode` set on parent Card Group is not `none` and the component is selected. */
  @Event({ cancelable: false }) calciteCardSelect: EventEmitter<void>;

  /**
   * @internal
   */
  @Event({ cancelable: false }) calciteInternalCardKeyEvent: EventEmitter<KeyboardEvent>;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */
  @Method()
  async setFocus(): Promise<void> {
    if (this.interactive) {
      this.containerEl?.focus();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
  }

  disconnectedCallback(): void {
    disconnectConditionalSlotComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteCardElement;

  @State() effectiveLocale: string;

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  @State() defaultMessages: CardMessages;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  // to be removed in future release
  private renderCheckbox(): VNode {
    return (
      <calcite-label
        class={CSS.checkboxWrapperDeprecated}
        onClick={this.cardSelectClick}
        onKeyDown={this.cardSelectKeyDown}
      >
        <calcite-checkbox checked={this.selected} label={this.messages.select} />
      </calcite-label>
    );
  }

  // to be removed in future release
  private cardSelectKeyDown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case " ":
      case "Enter":
        this.selectCard();
        event.preventDefault();
        break;
    }
  };

  private selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }

  private cardSelectClick = (): void => {
    this.calciteCardSelect.emit();
  };

  private renderThumbnail(): VNode {
    return getSlotted(this.el, SLOTS.thumbnail) ? (
      <section class={CSS.thumbnailWrapper}>
        <slot name={SLOTS.thumbnail} />
      </section>
    ) : null;
  }

  private renderSelectionIcon(): VNode {
    const icon =
      this.selectionMode === "multiple" && this.selected
        ? ICONS.selected
        : this.selectionMode === "multiple"
          ? ICONS.unselected
          : this.selected
            ? ICONS.selectedSingle
            : ICONS.unselectedSingle;

    const role =
      this.selectionMode === "multiple" && this.interactive
        ? "checkbox"
        : this.selectionMode !== "none" && this.interactive
          ? "radio"
          : this.interactive
            ? "button"
            : undefined;

    return (
      <calcite-action
        class={CSS.checkboxWrapper}
        icon={icon}
        onClick={this.cardSelectClick}
        role={role}
        scale="s"
        tabIndex={-1}
        text={` ${this.selected ? this.messages.deselect : this.messages.select} ${this.label}`}
      />
    );
  }

  private renderHeader(): VNode {
    const { el } = this;
    const heading = getSlotted(el, SLOTS.heading);
    const description = getSlotted(el, SLOTS.description);
    const hasHeader = heading || description;
    const subtitle = getSlotted(el, SLOTS.subtitle);
    const title = getSlotted(el, SLOTS.title);
    const hasDeprecatedHeader = subtitle || title;
    return hasHeader || hasDeprecatedHeader ? (
      <header class={CSS.header}>
        {this.selectable ? this.renderCheckbox() : null}
        <div class={CSS.headerTextContainer}>
          <slot key="heading-slot" name={SLOTS.heading} />
          <slot key="description-slot" name={SLOTS.description} />
          <slot key="deprecated-title-slot" name={SLOTS.title} />
          <slot key="deprecated-subtitle-slot" name={SLOTS.subtitle} />
        </div>
        {this.selectionMode !== "none" && this.renderSelectionIcon()}
      </header>
    ) : null;
  }

  private renderFooter(): VNode {
    const { el } = this;
    const startFooter = getSlotted(el, SLOTS.footerStart);
    const endFooter = getSlotted(el, SLOTS.footerEnd);

    const hasFooter = startFooter || endFooter;
    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name={SLOTS.footerStart} />
        <slot name={SLOTS.footerEnd} />
      </footer>
    ) : null;
  }

  render(): VNode {
    const thumbnailInline = this.thumbnailPosition.startsWith("inline");
    const thumbnailStart = this.thumbnailPosition.endsWith("start");

    return (
      <Host>
        <div
          aria-label={
            this.label +
            ` ${this.selected ? this.messages.deselect : this.messages.select} ${this.label}`
          }
          class={{ [CSS.contentWrapper]: true, inline: thumbnailInline }}
          tabIndex={!this.selectable ? 0 : -1}
          // eslint-disable-next-line react/jsx-sort-props
          ref={(el) => (this.containerEl = el)}
        >
          {this.loading ? (
            <div aria-live="polite" class="calcite-card-loader-container">
              <calcite-loader label={this.messages.loading} />
            </div>
          ) : null}
          {thumbnailStart && this.renderThumbnail()}
          <section aria-busy={toAriaBoolean(this.loading)} class={{ [CSS.container]: true }}>
            {this.renderHeader()}
            <div class="card-content">
              <slot />
            </div>
            {this.renderFooter()}
          </section>
          {!thumbnailStart && this.renderThumbnail()}
        </div>
      </Host>
    );
  }
}
