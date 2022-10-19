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
  Watch
} from "@stencil/core";
import {
  ensureId,
  FocusableElement,
  focusElement,
  getSlotted,
  isCalciteFocusable
} from "../../utils/dom";

import { queryShadowRoot } from "@a11y/focus-trap/shadow";
import { isFocusable, isHidden } from "@a11y/focus-trap/focusable";
import { Scale } from "../interfaces";
import { ModalBackgroundColor } from "./interfaces";
import { CSS, ICONS, SLOTS } from "./resources";
import { createObserver } from "../../utils/observers";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "../../utils/conditionalSlot";
import {
  OpenCloseComponent,
  connectOpenCloseComponent,
  disconnectOpenCloseComponent
} from "../../utils/openCloseComponent";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages
} from "../../utils/t9n";
import { Messages } from "./assets/modal/t9n";

const isFocusableExtended = (el: FocusableElement): boolean => {
  return isCalciteFocusable(el) || isFocusable(el);
};

const getFocusableElements = (el: HTMLElement | ShadowRoot): HTMLElement[] => {
  return queryShadowRoot(el, isHidden, isFocusableExtended);
};

/**
 * @slot header - A slot for adding header text.
 * @slot content - A slot for adding the component's content.
 * @slot primary - A slot for adding a primary button.
 * @slot secondary - A slot for adding a secondary button.
 * @slot back - A slot for adding a back button.
 */

@Component({
  tag: "calcite-modal",
  styleUrl: "modal.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class Modal
  implements ConditionalSlotComponent, OpenCloseComponent, LocalizedComponent, T9nComponent
{
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLCalciteModalElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When `true`, the component is active.
   *
   * @deprecated use `open` instead.
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /** When `true`, displays and positions the component.  */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Passes a function to run before the component closes. */
  @Prop()
  beforeClose?: (el: HTMLElement) => Promise<void> = () => Promise.resolve();

  /** When `true`, disables the component's close button. */
  @Prop({ reflect: true }) disableCloseButton = false;

  /** When `true`, disables the closing of the component when clicked outside. */
  @Prop({ reflect: true }) disableOutsideClose = false;

  /**
   * Accessible name for the component's close button.
   *
   * @deprecated – translations are now built-in, if you need to override a string, please use `messageOverrides`.
   */
  @Prop() intlClose: string;

  /** When `true`, prevents the component from expanding to the entire screen on mobile devices. */
  @Prop({ reflect: true }) docked: boolean;

  /** When `true`, disables the default close on escape behavior. */
  @Prop({ reflect: true }) disableEscape = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** Specifies the width of the component. Can use scale sizes or pass a number (displays in pixels). */
  @Prop({ reflect: true }) width: Scale | number = "m";

  /** Sets the component to always be fullscreen (overrides `width`). */
  @Prop({ reflect: true }) fullscreen: boolean;

  /**
   * Adds a color bar to the top of component for visual impact.
   * Use color to add importance to destructive or workflow dialogs.
   */
  @Prop({ reflect: true }) color?: "red" | "blue";

  /** Sets the background color of the component's content. */
  @Prop({ reflect: true }) backgroundColor: ModalBackgroundColor = "white";

  /**
   * When `true`, disables spacing to the content area slot.
   *
   * @deprecated  Use `--calcite-modal-padding` CSS variable instead.
   */
  @Prop({ reflect: true }) noPadding = false;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  @Prop({ mutable: true }) messages: Messages;

  /**
   * Use this property to override individual strings used by the component.
   */
  @Prop({ mutable: true }) messageOverrides: Partial<Messages>;

  @Watch("intlClose")
  @Watch("defaultMessages")
  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);

    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      requestAnimationFrame(async () => this.openModal());
    }
  }

  connectedCallback(): void {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateFooterVisibility();
    connectConditionalSlotComponent(this);
    connectOpenCloseComponent(this);
    connectLocalized(this);
    connectMessages(this);
    if (this.open) {
      this.active = this.open;
    }
    if (this.active) {
      this.activeHandler(this.active);
    }
  }

  disconnectedCallback(): void {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    disconnectConditionalSlotComponent(this);
    disconnectOpenCloseComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  render(): VNode {
    return (
      <Host
        aria-describedby={this.contentId}
        aria-labelledby={this.titleId}
        aria-modal="true"
        role="dialog"
      >
        <calcite-scrim class={CSS.scrim} onClick={this.handleOutsideClose} />
        {this.renderStyle()}
        <div
          class={{
            [CSS.modal]: true,
            [CSS.modalOpen]: this.isOpen
          }}
          ref={this.setTransitionEl}
        >
          <div data-focus-fence onFocus={this.focusLastElement} tabindex="0" />
          <div class={CSS.header}>
            {this.renderCloseButton()}
            <header class={CSS.title}>
              <slot name={CSS.header} />
            </header>
          </div>
          <div
            class={{
              content: true,
              "content--spaced": !this.noPadding,
              "content--no-footer": !this.hasFooter
            }}
            ref={(el) => (this.modalContent = el)}
          >
            <slot name={SLOTS.content} />
          </div>
          {this.renderFooter()}
          <div data-focus-fence onFocus={this.focusFirstElement} tabindex="0" />
        </div>
      </Host>
    );
  }

  renderFooter(): VNode {
    return this.hasFooter ? (
      <div class={CSS.footer} key="footer">
        <span class={CSS.back}>
          <slot name={SLOTS.back} />
        </span>
        <span class={CSS.secondary}>
          <slot name={SLOTS.secondary} />
        </span>
        <span class={CSS.primary}>
          <slot name={SLOTS.primary} />
        </span>
      </div>
    ) : null;
  }

  renderCloseButton(): VNode {
    return !this.disableCloseButton ? (
      <button
        aria-label={this.messages.close}
        class={CSS.close}
        key="button"
        onClick={this.close}
        ref={(el) => (this.closeButtonEl = el)}
        title={this.messages.close}
      >
        <calcite-icon
          icon={ICONS.close}
          scale={
            this.scale === "s" ? "s" : this.scale === "m" ? "m" : this.scale === "l" ? "l" : null
          }
        />
      </button>
    ) : null;
  }

  renderStyle(): VNode {
    const hasCustomWidth = !isNaN(parseInt(`${this.width}`));
    return hasCustomWidth ? (
      <style>
        {`
        .${CSS.modal} {
          max-width: ${this.width}px !important;
        }
        @media screen and (max-width: ${this.width}px) {
          .${CSS.modal} {
            height: 100% !important;
            max-height: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .content {
            flex: 1 1 auto !important;
            max-height: unset !important;
          }
        }
      `}
      </style>
    ) : null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------
  @State() hasFooter = true;

  closeButtonEl: HTMLButtonElement;

  contentId: string;

  modalContent: HTMLDivElement;

  previousActiveElement: HTMLElement;

  titleId: string;

  openTransitionProp = "opacity";

  transitionEl: HTMLDivElement;

  //--------------------------------------------------------------------------
  //
  //  Private State/Properties
  //
  //--------------------------------------------------------------------------

  @State() effectiveLocale: string;

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  @State() defaultMessages: Messages;

  /**
   * We use internal variable to make sure initially open modal can transition from closed state when rendered
   *
   * @private
   */
  @State() isOpen = false;

  private mutationObserver: MutationObserver = createObserver("mutation", () =>
    this.updateFooterVisibility()
  );

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("keydown", { target: "window" })
  handleEscape(event: KeyboardEvent): void {
    if (this.open && !this.disableEscape && event.key === "Escape" && !event.defaultPrevented) {
      this.close();
      event.preventDefault();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------
  /** Fires when the component is requested to be closed and before the closing transition begins. */
  @Event({ cancelable: false }) calciteModalBeforeClose: EventEmitter<void>;

  /** Fires when the component is closed and animation is complete. */
  @Event({ cancelable: false }) calciteModalClose: EventEmitter<void>;

  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  @Event({ cancelable: false }) calciteModalBeforeOpen: EventEmitter<void>;

  /** Fires when the component is open and animation is complete. */
  @Event({ cancelable: false }) calciteModalOpen: EventEmitter<void>;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Focus the first interactive element.
   *
   * @param el
   * @deprecated use `setFocus` instead.
   */
  @Method()
  async focusElement(el?: HTMLElement): Promise<void> {
    if (el) {
      el.focus();
    }

    return this.setFocus();
  }

  /**
   * Sets focus on the component.
   *
   * By default, tries to focus on focusable content. If there is none, it will focus on the close button.
   * To focus on the close button, use the `close-button` focus ID.
   *
   * @param focusId
   */
  @Method()
  async setFocus(focusId?: "close-button"): Promise<void> {
    const closeButton = this.closeButtonEl;

    return focusElement(
      focusId === "close-button" ? closeButton : getFocusableElements(this.el)[0] || closeButton
    );
  }

  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  @Method()
  async scrollContent(top = 0, left = 0): Promise<void> {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      } else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private setTransitionEl = (el): void => {
    this.transitionEl = el;
    connectOpenCloseComponent(this);
  };

  onBeforeOpen(): void {
    this.transitionEl.classList.add(CSS.openingActive);
    this.calciteModalBeforeOpen.emit();
  }

  onOpen(): void {
    this.transitionEl.classList.remove(CSS.openingIdle, CSS.openingActive);
    this.calciteModalOpen.emit();
  }

  onBeforeClose(): void {
    this.transitionEl.classList.add(CSS.closingActive);
    this.calciteModalBeforeClose.emit();
  }

  onClose(): void {
    this.transitionEl.classList.remove(CSS.closingIdle, CSS.closingActive);
    this.calciteModalClose.emit();
  }

  @Watch("active")
  activeHandler(value: boolean): void {
    this.open = value;
  }

  @Watch("open")
  async toggleModal(value: boolean): Promise<void> {
    this.active = value;
    if (value) {
      this.transitionEl?.classList.add(CSS.openingIdle);
      this.openModal();
    } else {
      this.transitionEl?.classList.add(CSS.closingIdle);
      this.close();
    }
  }

  private openEnd = (): void => {
    this.setFocus();
    this.el.removeEventListener("calciteModalOpen", this.openEnd);
  };

  /** Open the modal */
  private openModal() {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.open = true;
    this.isOpen = true;
    const titleEl = getSlotted(this.el, SLOTS.header);
    const contentEl = getSlotted(this.el, SLOTS.content);

    this.titleId = ensureId(titleEl);
    this.contentId = ensureId(contentEl);

    document.documentElement.classList.add(CSS.overflowHidden);
  }

  handleOutsideClose = (): void => {
    if (this.disableOutsideClose) {
      return;
    }

    this.close();
  };

  /** Close the modal, first running the `beforeClose` method */
  close = (): Promise<void> => {
    return this.beforeClose(this.el).then(() => {
      this.open = false;
      this.isOpen = false;
      focusElement(this.previousActiveElement);
      this.removeOverflowHiddenClass();
    });
  };

  focusFirstElement = (): void => {
    focusElement(this.disableCloseButton ? getFocusableElements(this.el)[0] : this.closeButtonEl);
  };

  focusLastElement = (): void => {
    const focusableElements = getFocusableElements(this.el).filter(
      (el) => !el.getAttribute("data-focus-fence")
    );
    if (focusableElements.length > 0) {
      focusElement(focusableElements[focusableElements.length - 1]);
    } else {
      focusElement(this.closeButtonEl);
    }
  };

  private removeOverflowHiddenClass(): void {
    document.documentElement.classList.remove(CSS.overflowHidden);
  }

  private updateFooterVisibility = (): void => {
    this.hasFooter = !!getSlotted(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
  };
}
