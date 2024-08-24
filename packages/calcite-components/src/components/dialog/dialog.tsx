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
import interact from "interactjs";
import type { Interactable, ResizeEvent, DragEvent } from "@interactjs/types";
import { focusFirstTabbable, toAriaBoolean } from "../../utils/dom";
import {
  activateFocusTrap,
  connectFocusTrap,
  deactivateFocusTrap,
  FocusTrap,
  FocusTrapComponent,
  updateFocusTrapElements,
} from "../../utils/focusTrapComponent";
import {
  componentFocusable,
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import { createObserver } from "../../utils/observers";
import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
import { Kind, Scale } from "../interfaces";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";
import { componentOnReady } from "../../utils/component";
import { SLOTS as PANEL_SLOTS } from "../panel/resources";
import { HeadingLevel } from "../functional/Heading";
import { OverlayPositioning } from "../../components";
import { DialogMessages } from "./assets/dialog/t9n";
import { CSS, dialogStep, SLOTS } from "./resources";
import { DialogDragPosition, DialogPlacement, DialogResizePosition } from "./interfaces";

let totalOpenDialogs: number = 0;
let initialDocumentOverflowStyle: string = "";

/**
 * @slot - A slot for adding content.
 * @slot content - A slot for adding custom content.
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the component.
 * @slot alerts - A slot for adding `calcite-alert`s to the component.
 * @slot content-bottom - A slot for adding content below the unnamed (default) slot and - if populated - the `footer` slot.
 * @slot content-top - A slot for adding content above the unnamed (default) slot and - if populated - below the `action-bar` slot.
 * @slot header-actions-start - A slot for adding actions or content to the starting side of the component's header.
 * @slot header-actions-end - A slot for adding actions or content to the ending side of the component's header.
 * @slot header-content - A slot for adding custom content to the component's header.
 * @slot header-menu-actions - A slot for adding an overflow menu with actions inside a `calcite-dropdown`.
 * @slot fab - A slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer - A slot for adding custom content to the component's footer. Should not be used with the `"footer-start"` or `"footer-end"` slots.
 * @slot footer-end - A slot for adding a trailing footer custom content. Should not be used with the `"footer"` slot.
 * @slot footer-start - A slot for adding a leading footer custom content. Should not be used with the `"footer"` slot.
 */

const initialDragPosition: DialogDragPosition = { x: 0, y: 0 };
const initialResizePosition: DialogResizePosition = { top: 0, right: 0, bottom: 0, left: 0 };

@Component({
  tag: "calcite-dialog",
  styleUrl: "dialog.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Dialog
  implements
    OpenCloseComponent,
    FocusTrapComponent,
    LoadableComponent,
    LocalizedComponent,
    T9nComponent
{
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** Passes a function to run before the component closes. */
  @Prop() beforeClose: () => Promise<void>;

  /** A description for the component. */
  @Prop() description: string;

  /**
   * When `true`, the component is draggable.
   */
  @Prop({ reflect: true }) dragEnabled = false;

  /** When `true`, disables the component's close button. */
  @Prop({ reflect: true }) closeDisabled = false;

  /**
   * This internal property, managed by a containing calcite-shell, is used
   * to inform the component if special configuration or styles are needed
   *
   * @internal
   */
  @Prop({ mutable: true }) embedded = false;

  /**
   * When `true`, disables the default close on escape behavior.
   *
   * By default, an open dialog can be dismissed by pressing the Esc key.
   *
   * @see [Dialog Accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility)
   */
  @Prop({ reflect: true }) escapeDisabled = false;

  /**
   * The component header text.
   */
  @Prop() heading: string;

  /**
   * Specifies the heading level of the component's `heading` for proper document structure, without affecting visual styling.
   */
  @Prop({ reflect: true }) headingLevel: HeadingLevel;

  /** Specifies the kind of the component, which will style the top border. */
  @Prop({ reflect: true }) kind: Extract<"brand" | "danger" | "info" | "success" | "warning", Kind>;

  /**
   * When `true`, a busy indicator is displayed.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * When `true`, the action menu items in the `header-menu-actions` slot are open.
   */
  @Prop({ reflect: true }) menuOpen = false;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: DialogMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<DialogMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /** When `true`, displays a scrim blocking interaction underneath the component.  */
  @Prop({ reflect: true }) modal = false;

  @Watch("modal")
  onModalChange(): void {
    this.updateOverflowHiddenClass();
  }

  /** When `true`, displays and positions the component. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** When `true`, disables the closing of the component when clicked outside. */
  @Prop({ reflect: true }) outsideCloseDisabled = false;

  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * `"fixed"` should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  @Prop({ reflect: true }) overlayPositioning: OverlayPositioning = "absolute";

  /**
   * Specifies the placement of the dialog.
   */
  @Prop({ reflect: true }) placement: DialogPlacement = "center";

  /**
   * When `true`, the component is resizable.
   */
  @Prop({ reflect: true }) resizable = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** Specifies the width of the component. */
  @Prop({ reflect: true }) widthScale: Scale = "m";

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
    setUpLoadableComponent(this);
    // when dialog initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      this.openDialog();
    }
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  connectedCallback(): void {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    connectLocalized(this);
    connectMessages(this);
    connectFocusTrap(this);
    this.setInteraction();
  }

  disconnectedCallback(): void {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    deactivateFocusTrap(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    this.embedded = false;
    this.unsetInteraction();
  }

  render(): VNode {
    const {
      assistiveText,
      description,
      heading,
      opened,
      resizeWidth,
      resizeHeight,
      dragPosition,
      resizePosition,
    } = this;
    return (
      <Host>
        <div
          class={{
            [CSS.container]: true,
            [CSS.containerOpen]: opened,
            [CSS.containerEmbedded]: this.embedded,
          }}
          ref={(el) => (this.containerEl = el)}
        >
          {this.modal ? (
            <calcite-scrim class={CSS.scrim} onClick={this.handleOutsideClose} />
          ) : null}
          <div
            aria-description={description}
            aria-label={heading}
            aria-modal={toAriaBoolean(this.modal)}
            class={CSS.dialog}
            onKeyDown={this.handleKeyDown}
            ref={this.setTransitionEl}
            role="dialog"
            style={{
              inlineSize: this.getPixelSize(resizeWidth),
              blockSize: this.getPixelSize(resizeHeight),
              transform: this.getTransform({ dragPosition, resizePosition }),
            }}
          >
            {assistiveText ? (
              <div aria-live="polite" class={CSS.assistiveText} key="assistive-text">
                {assistiveText}
              </div>
            ) : null}
            <slot name={SLOTS.content}>
              <calcite-panel
                beforeClose={this.beforeClose}
                class={CSS.panel}
                closable={!this.closeDisabled}
                closed={!opened}
                description={description}
                heading={heading}
                headingLevel={this.headingLevel}
                loading={this.loading}
                menuOpen={this.menuOpen}
                messageOverrides={this.messageOverrides}
                onCalcitePanelClose={this.handleCloseClick}
                onCalcitePanelScroll={this.handleScroll}
                onKeyDown={this.handlePanelKeyDown}
                overlayPositioning={this.overlayPositioning}
                ref={(el) => (this.panelEl = el)}
                scale={this.scale}
              >
                <slot name={SLOTS.actionBar} slot={PANEL_SLOTS.actionBar} />
                <slot name={SLOTS.alerts} slot={PANEL_SLOTS.alerts} />
                <slot name={SLOTS.headerActionsStart} slot={PANEL_SLOTS.headerActionsStart} />
                <slot name={SLOTS.headerActionsEnd} slot={PANEL_SLOTS.headerActionsEnd} />
                <slot name={SLOTS.headerContent} slot={PANEL_SLOTS.headerContent} />
                <slot name={SLOTS.headerMenuActions} slot={PANEL_SLOTS.headerMenuActions} />
                <slot name={SLOTS.fab} slot={PANEL_SLOTS.fab} />
                <slot name={SLOTS.contentTop} slot={PANEL_SLOTS.contentTop} />
                <slot name={SLOTS.contentBottom} slot={PANEL_SLOTS.contentBottom} />
                <slot name={SLOTS.footerStart} slot={PANEL_SLOTS.footerStart} />
                <slot name={SLOTS.footer} slot={PANEL_SLOTS.footer} />
                <slot name={SLOTS.footerEnd} slot={PANEL_SLOTS.footerEnd} />
                <slot />
              </calcite-panel>
            </slot>
          </div>
        </div>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties/ State
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteDialogElement;

  @State() resizeWidth: number | null = null;

  @State() resizeHeight: number | null = null;

  @State() resizePosition: DialogResizePosition = initialResizePosition;

  @State() resizePositionOffset: DialogResizePosition = initialResizePosition;

  @State() dragPosition: DialogDragPosition = initialDragPosition;

  @State() dragPositionOffset: DialogDragPosition = initialDragPosition;

  @State() opened = false;

  @State() hasFooter = true;

  @State() hasContentTop = false;

  @State() hasContentBottom = false;

  @State() effectiveLocale: string;

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  @State() defaultMessages: DialogMessages;

  @State() assistiveText: string | null = "";

  @Watch("placement")
  @Watch("resizable")
  @Watch("dragEnabled")
  handleInteractionChange(): void {
    this.setInteraction();
  }

  @Watch("messages")
  @Watch("dragEnabled")
  @Watch("resizable")
  updateAssistiveText(): void {
    const { messages } = this;
    this.assistiveText =
      messages && (this.dragEnabled || this.resizable)
        ? `${this.dragEnabled ? messages.dragEnabled : ""} ${this.resizable ? messages.resizeEnabled : ""}`
        : null;
  }

  openTransitionProp = "opacity";

  transitionEl: HTMLDivElement;

  containerEl: HTMLDivElement;

  focusTrap: FocusTrap;

  private interaction: Interactable;

  private panelEl: HTMLCalcitePanelElement;

  private ignoreOpenChange = false;

  private mutationObserver: MutationObserver = createObserver("mutation", () =>
    this.handleMutationObserver(),
  );

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown", { target: "window" })
  handleEscape(event: KeyboardEvent): void {
    if (this.open && !this.escapeDisabled && event.key === "Escape" && !event.defaultPrevented) {
      this.open = false;
      event.preventDefault();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------
  /** Fires when the component is requested to be closed and before the closing transition begins. */
  @Event({ cancelable: false }) calciteDialogBeforeClose: EventEmitter<void>;

  /** Fires when the component is closed and animation is complete. */
  @Event({ cancelable: false }) calciteDialogClose: EventEmitter<void>;

  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  @Event({ cancelable: false }) calciteDialogBeforeOpen: EventEmitter<void>;

  /** Fires when the component is open and animation is complete. */
  @Event({ cancelable: false }) calciteDialogOpen: EventEmitter<void>;

  /** Fires when the content is scrolled. */
  @Event({ cancelable: false }) calciteDialogScroll: EventEmitter<void>;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   * @returns {Promise<void>} - A promise that is resolved when the operation has completed.
   */
  @Method()
  async setFocus(): Promise<void> {
    await componentFocusable(this);
    return this.panelEl?.setFocus() ?? focusFirstTabbable(this.el);
  }

  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  @Method()
  async updateFocusTrapElements(): Promise<void> {
    updateFocusTrapElements(this);
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
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  @Method()
  async scrollContentTo(options?: ScrollToOptions): Promise<void> {
    await this.panelEl?.scrollContentTo(options);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  onBeforeOpen(): void {
    this.calciteDialogBeforeOpen.emit();
  }

  onOpen(): void {
    this.calciteDialogOpen.emit();
    activateFocusTrap(this);
  }

  onBeforeClose(): void {
    this.calciteDialogBeforeClose.emit();
  }

  onClose(): void {
    this.calciteDialogClose.emit();
    deactivateFocusTrap(this);
  }

  @Watch("open")
  toggleDialog(value: boolean): void {
    if (this.ignoreOpenChange) {
      return;
    }

    if (value) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  }

  @Watch("opened")
  handleOpenedChange(value: boolean): void {
    this.transitionEl.classList.toggle(CSS.openingActive, value);
    onToggleOpenCloseComponent(this);
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const { key, shiftKey, defaultPrevented } = event;
    const { dragEnabled, resizable } = this;

    if (defaultPrevented) {
      return;
    }

    const transitionRect = this.transitionEl.getBoundingClientRect();
    const containerRect = this.containerEl.getBoundingClientRect();
    const maxMoveY = containerRect.height / 2 - transitionRect.height / 2; // todo: fix
    const maxMoveX = containerRect.width / 2 - transitionRect.width / 2; // todo: fix

    switch (key) {
      case "ArrowUp":
        if (shiftKey && resizable) {
          this.resizeHeight = transitionRect.height + dialogStep;
          this.resizePositionOffset.bottom += dialogStep;
          this.resizePosition = this.getAdjustedResizePosition(this.resizePositionOffset);
          event.preventDefault();
        } else if (dragEnabled) {
          this.dragPositionOffset.y -= dialogStep;
          this.dragPositionOffset.y = Math.max(this.dragPositionOffset.y, -maxMoveY);
          this.dragPosition = {
            x: this.dragPositionOffset.x,
            y: this.dragPositionOffset.y,
          };
          event.preventDefault();
        }
        break;
      case "ArrowDown":
        if (shiftKey && resizable) {
          this.resizeHeight = transitionRect.height - dialogStep;
          this.resizePositionOffset.bottom -= dialogStep;
          this.resizePosition = this.getAdjustedResizePosition(this.resizePositionOffset);
          event.preventDefault();
        } else if (dragEnabled) {
          this.dragPositionOffset.y += dialogStep;
          this.dragPositionOffset.y = Math.min(this.dragPositionOffset.y, maxMoveY);
          this.dragPosition = {
            x: this.dragPositionOffset.x,
            y: this.dragPositionOffset.y,
          };
          event.preventDefault();
        }
        break;
      case "ArrowLeft":
        if (shiftKey && resizable) {
          this.resizeWidth = transitionRect.width - dialogStep;
          this.resizePositionOffset.right -= dialogStep;
          this.resizePosition = this.getAdjustedResizePosition(this.resizePositionOffset);
          event.preventDefault();
        } else if (dragEnabled) {
          this.dragPositionOffset.x -= dialogStep;
          this.dragPositionOffset.x = Math.max(this.dragPositionOffset.x, -maxMoveX);
          this.dragPosition = {
            x: this.dragPositionOffset.x,
            y: this.dragPositionOffset.y,
          };
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        if (shiftKey && resizable) {
          this.resizeWidth = transitionRect.width + dialogStep;
          this.resizePositionOffset.right += dialogStep;
          this.resizePosition = this.getAdjustedResizePosition(this.resizePositionOffset);
          event.preventDefault();
        } else if (dragEnabled) {
          this.dragPositionOffset.x += dialogStep;
          this.dragPositionOffset.x = Math.min(this.dragPositionOffset.x, maxMoveX);
          this.dragPosition = {
            x: this.dragPositionOffset.x,
            y: this.dragPositionOffset.y,
          };
          event.preventDefault();
        }
        break;
    }
  };

  private getPixelSize(size: number | null): string {
    return size === null ? null : `${size}px`;
  }

  private getTransform({
    dragPosition,
    resizePosition,
  }: {
    dragPosition: DialogDragPosition;
    resizePosition: DialogResizePosition;
  }): string {
    const x = dragPosition.x + resizePosition.left + resizePosition.right;
    const y = dragPosition.y + resizePosition.top + resizePosition.bottom;

    return `translate(${x}px, ${y}px)`;
  }

  private unsetInteraction = (): void => {
    this.interaction?.unset();
    this.dragPositionOffset = { ...initialDragPosition };
    this.dragPosition = this.dragPositionOffset;
    this.resizePositionOffset = { ...initialResizePosition };
    this.resizePosition = this.resizePositionOffset;
    this.resizeWidth = null;
    this.resizeHeight = null;
  };

  private setInteraction = (): void => {
    this.unsetInteraction();

    if (!this.transitionEl) {
      return;
    }

    if (this.resizable || this.dragEnabled) {
      this.interaction = interact(this.transitionEl, { context: this.el.ownerDocument });
    }

    if (this.resizable) {
      this.interaction.resizable({
        edges: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
        modifiers: [
          interact.modifiers.restrict({
            restriction: "parent",
          }),
        ],
        listeners: {
          move: (event: ResizeEvent) => {
            this.resizePositionOffset.top += event.deltaRect.top;
            this.resizePositionOffset.right += event.deltaRect.right;
            this.resizePositionOffset.bottom += event.deltaRect.bottom;
            this.resizePositionOffset.left += event.deltaRect.left;

            this.resizePosition = this.getAdjustedResizePosition(this.resizePositionOffset);
            this.resizeWidth = event.rect.width;
            this.resizeHeight = event.rect.height;
          },
        },
      });
    }

    if (this.dragEnabled) {
      this.interaction.draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
          }),
        ],
        listeners: {
          move: (event: DragEvent) => {
            this.dragPositionOffset.x += event.dx;
            this.dragPositionOffset.y += event.dy;
            this.dragPosition = { x: this.dragPositionOffset.x, y: this.dragPositionOffset.y };
          },
        },
      });
    }
  };

  private getAdjustedResizePosition({
    top,
    right,
    bottom,
    left,
  }: DialogResizePosition): DialogResizePosition {
    const halfTop = top / 2;
    const halfRight = right / 2;
    const halfBottom = bottom / 2;
    const halfLeft = left / 2;

    switch (this.placement) {
      case "top":
        return { top, right: halfRight, bottom: 0, left: halfLeft };
      case "top-start":
        return { top, right: 0, bottom: 0, left };
      case "top-end":
        return { top, right, bottom: 0, left: 0 };
      case "bottom":
        return { top: 0, right: halfRight, bottom, left: halfLeft };
      case "bottom-start":
        return { top: 0, right: 0, bottom, left };
      case "bottom-end":
        return { top: 0, right, bottom, left: 0 };
      case "cover":
      case "center":
      default:
        return {
          top: halfTop,
          right: halfRight,
          bottom: halfBottom,
          left: halfLeft,
        };
    }
  }

  private setTransitionEl = (el: HTMLDivElement): void => {
    this.transitionEl = el;
    this.setInteraction();
  };

  private openEnd = (): void => {
    this.setFocus();
    this.el.removeEventListener("calciteDialogOpen", this.openEnd);
  };

  private handleScroll = (): void => {
    this.calciteDialogScroll.emit();
  };

  private handleCloseClick = (): void => {
    this.open = false;
  };

  private handlePanelKeyDown = (event: KeyboardEvent): void => {
    if (this.escapeDisabled) {
      event.preventDefault();
    }
  };

  private async openDialog(): Promise<void> {
    await componentOnReady(this.el);
    this.el.addEventListener("calciteDialogOpen", this.openEnd);
    this.opened = true;
    this.updateOverflowHiddenClass();
  }

  private handleOutsideClose = (): void => {
    if (this.outsideCloseDisabled) {
      return;
    }

    this.open = false;
  };

  private closeDialog = async (): Promise<void> => {
    if (this.beforeClose) {
      try {
        await this.beforeClose();
      } catch (_error) {
        // close prevented
        requestAnimationFrame(() => {
          this.ignoreOpenChange = true;
          this.open = true;
          this.ignoreOpenChange = false;
        });
        return;
      }
    }

    totalOpenDialogs--;
    this.opened = false;
    this.updateOverflowHiddenClass();
  };

  private updateOverflowHiddenClass = (): void => {
    this.opened && !this.embedded && this.modal
      ? this.addOverflowHiddenClass()
      : this.removeOverflowHiddenClass();
  };

  private addOverflowHiddenClass(): void {
    if (totalOpenDialogs === 0) {
      initialDocumentOverflowStyle = document.documentElement.style.overflow;
    }

    totalOpenDialogs++;
    // use an inline style instead of a utility class to avoid global class declarations.
    document.documentElement.style.setProperty("overflow", "hidden");
  }

  private removeOverflowHiddenClass(): void {
    document.documentElement.style.setProperty("overflow", initialDocumentOverflowStyle);
  }

  private handleMutationObserver = (): void => {
    this.updateFocusTrapElements();
  };
}
