import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import { getElementDir, slotChangeGetAssignedElements } from "../../utils/dom";
import { guid } from "../../utils/guid";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";
import { CarouselMessages } from "./assets/carousel/t9n";
import { CSS, ICONS } from "./resources";
import {
  connectInteractive,
  updateHostInteraction,
  disconnectInteractive,
  InteractiveComponent,
  InteractiveContainer,
} from "../../utils/interactive";
import {
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import { ArrowType } from "./interfaces";

/**
 * @slot - A slot for adding `calcite-carousel-item`s.
 */
@Component({
  tag: "calcite-carousel",
  styleUrl: "carousel.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Carousel
  implements InteractiveComponent, LoadableComponent, LocalizedComponent, T9nComponent
{
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Specify how and if the previous and next arrows are displayed.
   */
  @Prop({ reflect: true }) arrowType: ArrowType = "inline";

  /**
   * Specify if the controls are overlaid on top of the content.
   */
  @Prop({ reflect: true }) controlOverlay = false;

  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The component label text
   */
  @Prop() label!: string;

  /**
   * When `true`, tooltips are not displayed on the carousel item controls.
   */
  @Prop({ reflect: true }) tooltipsDisabled = false;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: CarouselMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<CarouselMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * The component's selected `calcite-carousel-item`.
   *
   * @readonly
   */
  @Prop({ mutable: true }) selectedItem: HTMLCalciteCarouselItemElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback(): void {
    connectInteractive(this);
    connectLocalized(this);
    connectMessages(this);
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  disconnectedCallback(): void {
    disconnectInteractive(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteCarouselElement;

  @State() activeIndex: number;

  @State() items: HTMLCalciteCarouselItemElement[];

  @State() direction: "advancing" | "retreating";

  @State() defaultMessages: CarouselMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  async effectiveLocaleChange(): Promise<void> {
    await updateMessages(this, this.effectiveLocale);
  }

  private container: HTMLDivElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /** Fires when the selected carousel item changes. */
  @Event({ cancelable: false }) calciteCarouselChange: EventEmitter<void>;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private updateItems = (event: Event): void => {
    const items = slotChangeGetAssignedElements(event) as HTMLCalciteCarouselItemElement[];

    if (items.length < 1) {
      return;
    }

    const activeItemIndex = items?.findIndex((item) => item.active);
    const requestedActiveIndex = activeItemIndex > -1 ? activeItemIndex : 0;

    this.items = items;
    this.setSelectedItem(false, requestedActiveIndex);
  };

  private setSelectedItem = (emit: boolean, requestedIndex: number): void => {
    this.items?.forEach((el, index) => {
      const isMatch = requestedIndex === index;
      el.active = isMatch;
      if (isMatch) {
        this.selectedItem = el;
        this.activeIndex = index;
      }
    });

    if (emit) {
      this.calciteCarouselChange.emit();
    }
  };

  private nextItem = (): void => {
    this.direction = "advancing";
    const nextIndex = this.activeIndex === this.items?.length - 1 ? 0 : this.activeIndex + 1;
    this.setSelectedItem(true, nextIndex);
  };

  private previousItem = (): void => {
    this.direction = "retreating";
    const previousIndex = this.activeIndex === 0 ? this.items?.length - 1 : this.activeIndex - 1;
    this.setSelectedItem(true, previousIndex);
  };

  private keyDownHandler = (event: KeyboardEvent): void => {
    if (event.target !== this.container) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        this.nextItem();
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.previousItem();
        break;
      case "Home":
        event.preventDefault();
        this.setSelectedItem(true, 0);
        break;
      case "End":
        event.preventDefault();
        this.setSelectedItem(true, this.items?.length - 1);
        break;
    }
  };

  private storeContainerRef = (el: HTMLDivElement): void => {
    this.container = el;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination(): VNode {
    const { activeIndex } = this;
    const itemGuid = guid();

    return (
      <div
        class={{
          [CSS.pagination]: true,
          [CSS.isOverlay]: this.controlOverlay,
        }}
      >
        {this.arrowType === "inline" && this.renderPreviousArrow()}
        {this.items?.map((item, index) => (
          <Fragment>
            <calcite-action
              appearance={this.controlOverlay ? "solid" : "transparent"}
              class={`pagination-item${index === activeIndex ? " active-icon" : ""}`}
              icon={index === activeIndex ? ICONS.active : ICONS.inactive}
              id={`${itemGuid}-${index}`}
              label={item.label}
              onClick={() => this.setSelectedItem(true, index)}
              scale="s"
              text={item.label}
            />
            {!this.tooltipsDisabled && (
              <calcite-tooltip placement="bottom" reference-element={`${itemGuid}-${index}`}>
                {item.label}
              </calcite-tooltip>
            )}
          </Fragment>
        ))}
        {this.arrowType === "inline" && this.renderNextArrow()}
      </div>
    );
  }

  renderPreviousArrow(): VNode {
    const dir = getElementDir(this.el);
    return (
      <calcite-action
        appearance={this.controlOverlay ? "solid" : "transparent"}
        class={CSS.pagePrevious}
        icon={dir === "rtl" ? ICONS.chevronRight : ICONS.chevronLeft}
        onClick={this.previousItem}
        scale={this.arrowType === "edges" ? "m" : "s"}
        text={this.messages.previous}
      />
    );
  }

  renderNextArrow(): VNode {
    const dir = getElementDir(this.el);
    return (
      <calcite-action
        appearance={this.controlOverlay ? "solid" : "transparent"}
        class={CSS.pageNext}
        icon={dir === "rtl" ? ICONS.chevronLeft : ICONS.chevronRight}
        onClick={this.nextItem}
        scale={this.arrowType === "edges" ? "m" : "s"}
        text={this.messages.next}
      />
    );
  }

  render(): VNode {
    const { direction, activeIndex } = this;
    return (
      <Host>
        <InteractiveContainer disabled={this.disabled}>
          <div
            aria-label={this.label}
            class={{
              [CSS.container]: true,
              [CSS.isOverlay]: this.controlOverlay,
              [CSS.isEdges]: this.arrowType === "edges",
            }}
            onKeyDown={this.keyDownHandler}
            tabIndex={0}
            // eslint-disable-next-line react/jsx-sort-props
            ref={this.storeContainerRef}
          >
            <div
              class={{
                [CSS.itemContainer]: true,
                [CSS.itemContainerAdvancing]: direction === "advancing",
                [CSS.itemContainerRetreating]: direction === "retreating",
              }}
              key={activeIndex}
            >
              <slot onSlotchange={this.updateItems} />
            </div>
            {this.arrowType === "edges" && this.renderPreviousArrow()}
            {this.items?.length > 1 && this.renderPagination()}
            {this.arrowType === "edges" && this.renderNextArrow()}
          </div>
        </InteractiveContainer>
      </Host>
    );
  }
}
