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
  Watch
} from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { InteractiveComponent, updateHostInteraction } from "../../utils/interactive";
import {
  componentLoaded,
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent
} from "../../utils/loadable";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages
} from "../../utils/t9n";
import { HeadingLevel } from "../functional/Heading";
import { SLOTS as PANEL_SLOTS } from "../panel/resources";
import { FlowItemMessages } from "./assets/flow-item/t9n";
import { CSS, ICONS, SLOTS } from "./resources";

/**
 * @slot - A slot for adding custom content.
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the component.
 * @slot header-actions-start - A slot for adding `calcite-action`s or content to the start side of the component's header.
 * @slot header-actions-end - A slot for adding `calcite-action`s or content to the end side of the component's header.
 * @slot header-content - A slot for adding custom content to the component's header.
 * @slot header-menu-actions - A slot for adding an overflow menu with `calcite-action`s inside a `calcite-dropdown`.
 * @slot fab - A slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer-actions - [Deprecated] A slot for adding `calcite-button`s to the component's footer.
 * @slot footer - A slot for adding custom content to the component's footer.
 */
@Component({
  tag: "calcite-flow-item",
  styleUrl: "flow-item.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class FlowItem
  implements InteractiveComponent, LoadableComponent, LocalizedComponent, T9nComponent
{
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /** When `true`, displays a close button in the trailing side of the component's header. */
  @Prop({ reflect: true }) closable = false;

  /** When `true`, the component will be hidden. */
  @Prop({ reflect: true }) closed = false;

  /**
   * When provided, the method will be called before it is removed from its parent `calcite-flow`.
   */
  @Prop() beforeBack: () => Promise<void>;

  /** A description for the component. */
  @Prop() description: string;

  /**
   *  When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The component header text.
   */
  @Prop() heading: string;

  /**
   * Specifies the number at which section headings should start.
   */
  @Prop({ reflect: true }) headingLevel: HeadingLevel;

  /**
   * When `true`, a busy indicator is displayed.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * When `true`, the action menu items in the `header-menu-actions` slot are open.
   */
  @Prop({ reflect: true }) menuOpen = false;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<FlowItemMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: FlowItemMessages;

  /**
   * When `true`, displays a back button in the component's header.
   *
   * @internal
   */
  @Prop() showBackButton = false;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    connectLocalized(this);
    connectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
    setUpLoadableComponent(this);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  disconnectedCallback(): void {
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Fires when the back button is clicked.
   */
  @Event({ cancelable: false }) calciteFlowItemBack: EventEmitter<void>;

  /**
   * Fires when the content is scrolled.
   */
  @Event({ cancelable: false }) calciteFlowItemScroll: EventEmitter<void>;

  /**
   * Fires when the close button is clicked.
   */
  @Event({ cancelable: false }) calciteFlowItemClose: EventEmitter<void>;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFlowItemElement;

  containerEl: HTMLCalcitePanelElement;

  @State()
  backButtonEl: HTMLCalciteActionElement;

  @State() defaultMessages: FlowItemMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  /**
   * Sets focus on the component.
   */
  @Method()
  async setFocus(): Promise<void> {
    await componentLoaded(this);

    const { backButtonEl, containerEl } = this;

    if (backButtonEl) {
      backButtonEl.setFocus();
      return;
    }

    containerEl?.setFocus();
  }

  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  @Method()
  async scrollContentTo(options?: ScrollToOptions): Promise<void> {
    await this.containerEl?.scrollContentTo(options);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  handlePanelScroll = (event: CustomEvent<void>): void => {
    event.stopPropagation();
    this.calciteFlowItemScroll.emit();
  };

  handlePanelClose = (event: CustomEvent<void>): void => {
    event.stopPropagation();
    this.calciteFlowItemClose.emit();
  };

  backButtonClick = (): void => {
    this.calciteFlowItemBack.emit();
  };

  setBackRef = (node: HTMLCalciteActionElement): void => {
    this.backButtonEl = node;
  };

  setContainerRef = (node: HTMLCalcitePanelElement): void => {
    this.containerEl = node;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton(): VNode {
    const { el } = this;

    const rtl = getElementDir(el) === "rtl";
    const { showBackButton, backButtonClick, messages } = this;
    const label = messages.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;

    return showBackButton ? (
      <calcite-action
        aria-label={label}
        class={CSS.backButton}
        icon={icon}
        key="flow-back-button"
        onClick={backButtonClick}
        scale="s"
        slot="header-actions-start"
        text={label}
        // eslint-disable-next-line react/jsx-sort-props
        ref={this.setBackRef}
      />
    ) : null;
  }

  render(): VNode {
    const {
      closable,
      closed,
      description,
      disabled,
      heading,
      headingLevel,
      loading,
      menuOpen,
      messages,
      backButtonEl
    } = this;
    const label = messages.back;
    return (
      <Host>
        <calcite-panel
          closable={closable}
          closed={closed}
          description={description}
          disabled={disabled}
          heading={heading}
          headingLevel={headingLevel}
          loading={loading}
          menuOpen={menuOpen}
          messageOverrides={messages}
          onCalcitePanelClose={this.handlePanelClose}
          onCalcitePanelScroll={this.handlePanelScroll}
          // eslint-disable-next-line react/jsx-sort-props
          ref={this.setContainerRef}
        >
          {this.renderBackButton()}
          <slot name={SLOTS.actionBar} slot={PANEL_SLOTS.actionBar} />
          <slot name={SLOTS.headerActionsStart} slot={PANEL_SLOTS.headerActionsStart} />
          <slot name={SLOTS.headerActionsEnd} slot={PANEL_SLOTS.headerActionsEnd} />
          <slot name={SLOTS.headerContent} slot={PANEL_SLOTS.headerContent} />
          <slot name={SLOTS.headerMenuActions} slot={PANEL_SLOTS.headerMenuActions} />
          <slot name={SLOTS.fab} slot={PANEL_SLOTS.fab} />
          <slot name={SLOTS.footerActions} slot={PANEL_SLOTS.footerActions} />
          <slot name={SLOTS.footer} slot={PANEL_SLOTS.footer} />
          <slot />
        </calcite-panel>
        {backButtonEl ? (
          <calcite-tooltip
            closeOnClick={true}
            label={label}
            overlayPositioning="fixed"
            placement="top"
            referenceElement={backButtonEl}
          >
            {label}
          </calcite-tooltip>
        ) : null}
      </Host>
    );
  }
}
