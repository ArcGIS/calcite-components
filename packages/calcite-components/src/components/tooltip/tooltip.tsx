import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import { toAriaBoolean } from "../../utils/dom";
import {
  connectFloatingUI,
  defaultOffsetDistance,
  disconnectFloatingUI,
  FloatingCSS,
  FloatingLayout,
  FloatingUIComponent,
  resetFloatingElStyles,
  LogicalPlacement,
  OverlayPositioning,
  ReferenceElement,
  reposition,
} from "../../utils/floating-ui";
import { guid } from "../../utils/guid";
import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
import { FloatingArrow } from "../functional/FloatingArrow";
import { ARIA_DESCRIBED_BY, CSS } from "./resources";
import TooltipManager from "./TooltipManager";
import { getEffectiveReferenceElement } from "./utils";

const manager = new TooltipManager();

/**
 * @slot - A slot for adding text.
 */
@Component({
  tag: "calcite-tooltip",
  styleUrl: "tooltip.scss",
  shadow: true,
})
export class Tooltip implements FloatingUIComponent, OpenCloseComponent {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /** Closes the component when the `referenceElement` is clicked. */
  @Prop({ reflect: true }) closeOnClick = false;

  /**
   * Accessible name for the component.
   *
   * @deprecated No longer necessary. Overrides the context of the component's description, which could confuse assistive technology users.
   */
  @Prop() label: string;

  /**
   * Offset the position of the component away from the `referenceElement`.
   *
   * @default 6
   */
  @Prop({ reflect: true }) offsetDistance = defaultOffsetDistance;

  @Watch("offsetDistance")
  offsetDistanceOffsetHandler(): void {
    this.reposition(true);
  }

  /**
   * Offset the position of the component along the `referenceElement`.
   */
  @Prop({ reflect: true }) offsetSkidding = 0;

  @Watch("offsetSkidding")
  offsetSkiddingHandler(): void {
    this.reposition(true);
  }

  /**
   * When `true`, the component is open.
   */
  @Prop({ reflect: true }) open = false;

  @Watch("open")
  openHandler(): void {
    onToggleOpenCloseComponent(this);
    this.reposition(true);
  }

  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * The `"fixed"` value should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  @Prop({ reflect: true }) overlayPositioning: OverlayPositioning = "absolute";

  @Watch("overlayPositioning")
  overlayPositioningHandler(): void {
    this.reposition(true);
  }

  /**
   * Determines where the component will be positioned relative to the `referenceElement`.
   */
  @Prop({ reflect: true }) placement: LogicalPlacement = "auto";

  @Watch("placement")
  placementHandler(): void {
    this.reposition(true);
  }

  /**
   * The `referenceElement` to position the component according to its `"placement"` value.
   *
   * Setting to the `HTMLElement` is preferred so the component does not need to query the DOM for the `referenceElement`.
   *
   * However, a string ID of the reference element can be used.
   */
  @Prop() referenceElement: ReferenceElement | string;

  @Watch("referenceElement")
  referenceElementHandler(): void {
    this.setUpReferenceElement();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTooltipElement;

  @State() effectiveReferenceElement: ReferenceElement;

  @State() floatingLayout: FloatingLayout = "vertical";

  arrowEl: SVGElement;

  guid = `calcite-tooltip-${guid()}`;

  hasLoaded = false;

  openTransitionProp = "opacity";

  transitionEl: HTMLDivElement;

  floatingEl: HTMLDivElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    this.setUpReferenceElement(true);
    if (this.open) {
      onToggleOpenCloseComponent(this);
    }
  }

  async componentWillLoad(): Promise<void> {
    if (this.open) {
      onToggleOpenCloseComponent(this);
    }
  }

  componentDidLoad(): void {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.hasLoaded = true;
  }

  disconnectedCallback(): void {
    this.removeReferences();
    disconnectFloatingUI(this, this.effectiveReferenceElement, this.floatingEl);
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Fires when the component is requested to be closed and before the closing transition begins. */
  @Event({ cancelable: false }) calciteTooltipBeforeClose: EventEmitter<void>;

  /** Fires when the component is closed and animation is complete. */
  @Event({ cancelable: false }) calciteTooltipClose: EventEmitter<void>;

  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  @Event({ cancelable: false }) calciteTooltipBeforeOpen: EventEmitter<void>;

  /** Fires when the component is open and animation is complete. */
  @Event({ cancelable: false }) calciteTooltipOpen: EventEmitter<void>;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  @Method()
  async reposition(delayed = false): Promise<void> {
    const {
      effectiveReferenceElement,
      placement,
      overlayPositioning,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      floatingEl,
    } = this;

    return reposition(
      this,
      {
        floatingEl,
        referenceEl: effectiveReferenceElement,
        overlayPositioning,
        placement,
        offsetDistance,
        offsetSkidding,
        arrowEl,
        type: "tooltip",
      },
      delayed,
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  onBeforeOpen(): void {
    this.calciteTooltipBeforeOpen.emit();
  }

  onOpen(): void {
    this.calciteTooltipOpen.emit();
  }

  onBeforeClose(): void {
    this.calciteTooltipBeforeClose.emit();
  }

  onClose(): void {
    this.calciteTooltipClose.emit();
    resetFloatingElStyles(this.floatingEl);
  }

  private setFloatingEl = (el: HTMLDivElement): void => {
    this.floatingEl = el;
    requestAnimationFrame(() => this.setUpReferenceElement());
  };

  private setTransitionEl = (el: HTMLDivElement): void => {
    this.transitionEl = el;
  };

  setUpReferenceElement = (warn = true): void => {
    this.removeReferences();
    this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
    connectFloatingUI(this, this.effectiveReferenceElement, this.floatingEl);

    const { el, referenceElement, effectiveReferenceElement } = this;
    if (warn && referenceElement && !effectiveReferenceElement) {
      console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
        el,
      });
    }

    this.addReferences();
  };

  getId = (): string => {
    return this.el.id || this.guid;
  };

  addReferences = (): void => {
    const { effectiveReferenceElement } = this;

    if (!effectiveReferenceElement) {
      return;
    }

    const id = this.getId();

    if ("setAttribute" in effectiveReferenceElement) {
      effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
    }

    manager.registerElement(effectiveReferenceElement, this.el);
  };

  removeReferences = (): void => {
    const { effectiveReferenceElement } = this;

    if (!effectiveReferenceElement) {
      return;
    }

    if ("removeAttribute" in effectiveReferenceElement) {
      effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
    }

    manager.unregisterElement(effectiveReferenceElement);
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    const { effectiveReferenceElement, label, open, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;

    return (
      <Host
        aria-hidden={toAriaBoolean(hidden)}
        aria-label={label}
        aria-live="polite"
        id={this.getId()}
        role="tooltip"
      >
        <div class={CSS.positionContainer} ref={this.setFloatingEl}>
          <div
            class={{
              [FloatingCSS.animation]: true,
              [FloatingCSS.animationActive]: displayed,
            }}
            ref={this.setTransitionEl}
          >
            <FloatingArrow
              floatingLayout={floatingLayout}
              ref={(arrowEl: SVGElement) => (this.arrowEl = arrowEl)}
            />
            <div class={CSS.container}>
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
