import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
  VNode,
  Method,
  Listen,
  Build,
  State,
  Watch
} from "@stencil/core";
import { toAriaBoolean } from "../../utils/dom";
import { CSS, SLOTS, ICONS } from "./resources";
import { Appearance, Kind, Scale, SelectionMode } from "../interfaces";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "../../utils/conditionalSlot";
import { ChipMessages } from "./assets/chip/t9n";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages
} from "../../utils/t9n";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  setUpLoadableComponent,
  setComponentLoaded,
  LoadableComponent,
  componentLoaded
} from "../../utils/loadable";
import { createObserver } from "../../utils/observers";
import { slotChangeHasAssignedElement } from "../../utils/dom";

/**
 * @slot - A slot for adding text.
 * @slot image - A slot for adding an image.
 */
@Component({
  tag: "calcite-chip",
  styleUrl: "chip.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class Chip
  implements ConditionalSlotComponent, LoadableComponent, LocalizedComponent, T9nComponent
{
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteChipElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /** Specifies the appearance style of the component. */
  @Prop({ reflect: true }) appearance: Extract<"outline" | "outline-fill" | "solid", Appearance> =
    "solid";

  /** Specifies the kind of the component (will apply to border and background if applicable). */
  @Prop({ reflect: true }) kind: Extract<"brand" | "inverse" | "neutral", Kind> = "neutral";

  /** When `true`, a close button is added to the component. */
  @Prop({ reflect: true, mutable: true }) closable = false;

  /** Specifies an icon to display. */
  @Prop({ reflect: true }) icon: string;

  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  @Prop({ reflect: true }) iconFlipRtl = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** The component's value. */
  @Prop() value!: any;

  /** When `true`, hides the component. */
  @Prop({ reflect: true, mutable: true }) closed = false;

  /**
   * This internal property, managed by a containing `calcite-chip-group`, is
   * conditionally set based on the `selectionMode` of the parent
   *
   * @internal
   */
  // eslint-disable-next-line @esri/calcite-components/strict-boolean-attributes
  @Prop({ reflect: true, mutable: true }) selectable = true;

  /**
   * This internal property, managed by a containing `calcite-chip-group`, is
   * conditionally set based on the `selectionMode` of the parent
   *
   * @internal
   */
  @Prop({ mutable: true }) selectionMode: Extract<
    "multiple" | "single" | "single-persist" | "none",
    SelectionMode
  > = "none";

  /** Is the chip selected  */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * Use this property to override individual strings used by the component.
   */
  @Prop({ mutable: true }) messageOverrides: Partial<ChipMessages>;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  @Prop({ mutable: true }) messages: ChipMessages;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties / State
  //
  // --------------------------------------------------------------------------

  @State() defaultMessages: ChipMessages;

  @State() effectiveLocale: string;

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  private mutationObserver = createObserver("mutation", () => this.updateHasContent());

  private closeButton: HTMLButtonElement;

  /** determine if there is slotted content for styling purposes */
  @State() private hasContent = false;

  /** determine if there is slotted image for styling purposes */
  @State() private hasImage = false;

  private containerEl: HTMLDivElement;

  /** the containing accordion element */
  private parent: HTMLCalciteChipGroupElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Fires when the close button is clicked.
   */
  @Event({ cancelable: false }) calciteChipClose: EventEmitter<void>;

  /**
   * Fires when the selected state of the chip changes due to user interaction.
   */
  @Event({ cancelable: false }) calciteChipSelect: EventEmitter<void>;

  /**
   * @internal
   */
  @Event({ cancelable: false }) calciteInternalChipKeyEvent: EventEmitter<KeyboardEvent>;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    this.parent = this.el.parentElement as HTMLCalciteChipGroupElement;
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
    this.setupTextContentObserver();
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  disconnectedCallback(): void {
    disconnectConditionalSlotComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    if (Build.isBrowser) {
      await setUpMessages(this);
      this.updateHasContent();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown", { capture: true })
  keyDownHandler(event: KeyboardEvent): void {
    if (
      (event as any).path.includes(this.closeButton) &&
      (event.key === " " || event.key === "Enter")
    ) {
      this.closeHandler();
    }
    if (event.target === this.el) {
      switch (event.key) {
        case " ":
        case "Enter":
          this.itemSelectHandler();
          event.preventDefault();
          break;
        case "ArrowRight":
        case "ArrowLeft":
        case "Home":
        case "End":
          this.calciteInternalChipKeyEvent.emit(event);
          event.preventDefault();
          break;
      }
    }
  }

  @Listen("calciteChipInternalSelectionChange", { target: "body" })
  internalSelectionChangeListener(event: CustomEvent): void {
    if (!event.detail.parentNode.contains(this.el)) {
      return;
    }
    this.determineActiveItem(event.detail);
    event.stopPropagation();
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */
  @Method()
  async setFocus(): Promise<void> {
    await componentLoaded(this);
    this.containerEl?.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private closeHandler = (): void => {
    this.calciteChipClose.emit();
    this.selected = false;
    this.closed = true;
  };

  private updateHasContent() {
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length > 0 && this.el.childNodes[0]?.nodeName === "#text"
        ? this.el.textContent?.trim().length > 0
        : slottedContent;
  }

  private setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  private handleSlotImageChange = (event: Event): void => {
    this.hasImage = slotChangeHasAssignedElement(event);
  };

  private itemSelectHandler = (): void => {
    if (this.selectionMode !== "none") {
      this.calciteChipSelect.emit();
    }
  };

  private determineActiveItem(requestedChip): void {
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === requestedChip) {
          this.selected = !this.selected;
        }
        break;

      case "single":
        this.selected = this.el === requestedChip ? !this.selected : false;
        break;

      case "single-persist":
        this.selected = this.el === requestedChip;
        break;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------

  renderChipImage(): VNode {
    return (
      <div class={CSS.imageContainer} key="image">
        <slot name={SLOTS.image} onSlotchange={this.handleSlotImageChange} />
      </div>
    );
  }

  renderSelectionIcon(): VNode {
    const icon =
      this.selectionMode === "multiple" && this.selected
        ? "check-circle-f"
        : this.selectionMode === "multiple"
        ? "circle"
        : this.selected && "circle-f";

    return (
      <div
        class={`select-icon ${this.selectionMode === "multiple" || this.selected ? "active" : ""}`}
      >
        <calcite-icon
          class={CSS.chipIcon}
          icon={icon ? icon : undefined}
          scale={this.scale === "l" ? "m" : "s"}
        />
      </div>
    );
  }

  renderCloseButton(): VNode {
    return (
      <button
        aria-label={this.messages.dismissLabel}
        class={CSS.close}
        onClick={this.closeHandler}
        ref={(el) => (this.closeButton = el)}
      >
        <calcite-icon
          class={CSS.closeIcon}
          icon={ICONS.close}
          scale={this.scale === "l" ? "m" : "s"}
        />
      </button>
    );
  }

  renderImageSlot(): VNode {
    return (
      <div class={CSS.imageContainer} key="image">
        <slot name={SLOTS.image} />
      </div>
    );
  }

  renderIcon(): VNode {
    return (
      <calcite-icon class={CSS.chipIcon} flipRtl={this.iconFlipRtl} icon={this.icon} scale="s" />
    );
  }

  render(): VNode {
    let aria = {};
    switch (this.selectionMode) {
      case "single":
      case "single-persist":
        aria = {
          "aria-checked": toAriaBoolean(this.selected),
          "aria-labelledby": this.parent.id || "chip group temp",
          role: "radio"
        };
        break;
      case "multiple":
        aria = {
          "aria-checked": toAriaBoolean(this.selected),
          "aria-labelledby": this.parent.id || "chip group temp",
          role: "checkbox"
        };
        break;
    }

    return (
      <div
        {...aria}
        class={{
          [CSS.container]: true,
          [CSS.contentSlotted]: this.hasContent,
          [CSS.imageSlotted]: this.hasImage
        }}
        onClick={this.itemSelectHandler}
        ref={(el) => (this.containerEl = el)}
        tabIndex={0}
      >
        {this.selectable && this.selectionMode !== "none" && this.renderSelectionIcon()}
        {this.renderChipImage()}
        {this.icon && this.renderIcon()}
        <span class={CSS.title}>
          <slot />
        </span>
        {this.closable && this.renderCloseButton()}
      </div>
    );
  }
}
