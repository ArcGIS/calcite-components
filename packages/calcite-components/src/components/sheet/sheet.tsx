import interact from "interactjs";
import type { Interactable, ResizeEvent } from "@interactjs/types";
import { PropertyValues } from "lit";
import {
  LitElement,
  property,
  createEvent,
  h,
  method,
  state,
  JsxNode,
  setAttribute,
} from "@arcgis/lumina";
import { ensureId, focusFirstTabbable, getElementDir, isPixelValue } from "../../utils/dom";
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
import { LogicalFlowPosition, Scale } from "../interfaces";
import { CSS_UTILITY } from "../../utils/resources";
import { clamp } from "../../utils/math";
import { useT9n } from "../../controllers/useT9n";
import { componentOnReady } from "../../utils/component";
import { CSS, sheetResizeStep, sheetResizeShiftStep } from "./resources";
import { DisplayMode, ResizeValues } from "./interfaces";
import T9nStrings from "./assets/t9n/sheet.t9n.en.json";
import { styles } from "./sheet.scss";

declare global {
  interface DeclareElements {
    "calcite-sheet": Sheet;
  }
}

export class Sheet
  extends LitElement
  implements OpenCloseComponent, FocusTrapComponent, LoadableComponent
{
  // #region Static Members

  static override styles = styles;

  // #endregion

  // #region Private Properties

  private contentEl: HTMLDivElement;

  private contentId: string;

  private escapeDeactivates = (event: KeyboardEvent) => {
    if (event.defaultPrevented || this.escapeDisabled) {
      return false;
    }
    event.preventDefault();
    return true;
  };

  focusTrap: FocusTrap;

  private focusTrapDeactivates = (): void => {
    this.open = false;
  };

  private ignoreOpenChange = false;

  private initialOverflowCSS: string;

  private interaction: Interactable;

  messages = useT9n<typeof T9nStrings>();

  private mutationObserver: MutationObserver = createObserver("mutation", () =>
    this.handleMutationObserver(),
  );

  private _open = false;

  private openEnd = (): void => {
    this.setFocus();
    this.el.removeEventListener("calciteSheetOpen", this.openEnd);
  };

  openTransitionProp = "opacity";

  private resizeHandleEl: HTMLDivElement;

  transitionEl: HTMLDivElement;

  // #endregion

  // #region State Properties

  @state() resizeValues: ResizeValues = {
    inlineSize: 0,
    blockSize: 0,
    minInlineSize: 0,
    minBlockSize: 0,
    maxInlineSize: 0,
    maxBlockSize: 0,
  };

  // #endregion

  // #region Public Properties

  /**
   * Passes a function to run before the component closes.
   *
   * @returns {Promise<void>}
   */
  @property() beforeClose: (el: Sheet["el"]) => Promise<void>;

  /**
   * Specifies the display mode - `"float"` (content is separated detached),
   * or `"overlay"` (displays on top of center content).
   */
  @property({ reflect: true }) displayMode: DisplayMode = "overlay";

  /**
   * This internal property, managed by a containing calcite-shell, is used
   * to inform the component if special configuration or styles are needed
   *
   * @private
   */
  @property() embedded = false;

  /** When `true`, disables the default close on escape behavior. */
  @property({ reflect: true }) escapeDisabled = false;

  /** When `true`, prevents focus trapping. */
  @property({ reflect: true }) focusTrapDisabled = false;

  /** When `position` is `"block-start"` or `"block-end"`, specifies the height of the component. */
  @property({ reflect: true }) heightScale: Scale = "m";

  /**
   * Specifies the label of the component.
   *
   * @required
   */
  @property() label: string;

  /** Use this property to override individual strings used by the component. */
  @property() messageOverrides?: typeof this.messages._overrides;

  /** When `true`, displays and positions the component. */
  @property({ reflect: true })
  get open(): boolean {
    return this._open;
  }

  set open(open: boolean) {
    const oldOpen = this._open;
    if (open !== oldOpen) {
      this._open = open;
      this.toggleSheet(open);
    }
  }

  /**
   * We use an internal property to handle styles for when a modal is actually opened, not just when the open attribute is applied. This is a property because we need to apply styles to the host element and to keep the styles present while beforeClose is .
   *
   * @private
   */
  @property({ reflect: true }) opened = false;

  /** When `true`, disables the closing of the component when clicked outside. */
  @property({ reflect: true }) outsideCloseDisabled = false;

  /** Determines where the component will be positioned. */
  @property({ reflect: true }) position: LogicalFlowPosition = "inline-start";

  /** When `true`, the component is resizable. */
  @property({ reflect: true }) resizable = false;

  /** When `position` is `"inline-start"` or `"inline-end"`, specifies the width of the component. */
  @property({ reflect: true }) widthScale: Scale = "m";

  // #endregion

  // #region Public Methods

  /** Sets focus on the component's "close" button - the first focusable item. */
  @method()
  async setFocus(): Promise<void> {
    await componentFocusable(this);
    focusFirstTabbable(this.el);
  }

  /** Updates the element(s) that are used within the focus-trap of the component. */
  @method()
  async updateFocusTrapElements(): Promise<void> {
    updateFocusTrapElements(this);
  }

  // #endregion

  // #region Events

  /** Fires when the component is requested to be closed and before the closing transition begins. */
  calciteSheetBeforeClose = createEvent({ cancelable: false });

  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  calciteSheetBeforeOpen = createEvent({ cancelable: false });

  /** Fires when the component is closed and animation is complete. */
  calciteSheetClose = createEvent({ cancelable: false });

  /** Fires when the component is open and animation is complete. */
  calciteSheetOpen = createEvent({ cancelable: false });

  // #endregion

  // #region Lifecycle

  override connectedCallback(): void {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    connectFocusTrap(this, {
      focusTrapOptions: {
        // Scrim has it's own close handler, allow it to take over.
        clickOutsideDeactivates: false,
        escapeDeactivates: this.escapeDeactivates,
        onDeactivate: this.focusTrapDeactivates,
      },
    });
    this.setupInteractions();
  }

  load(): void {
    setUpLoadableComponent(this);
    // when sheet initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      requestAnimationFrame(() => this.openSheet());
    }
  }

  override willUpdate(changes: PropertyValues<this>): void {
    if (changes.has("focusTrapDisabled") && (this.hasUpdated || this.focusTrapDisabled !== false)) {
      this.handleFocusTrapDisabled(this.focusTrapDisabled);
    }

    if (changes.has("opened") && (this.hasUpdated || this.opened !== false)) {
      this.handleOpenedChange();
    }

    if (
      (changes.has("open") && (this.hasUpdated || this.open !== false)) ||
      (changes.has("position") && (this.hasUpdated || this.position !== "inline-start")) ||
      (changes.has("resizable") && (this.hasUpdated || this.resizable !== false))
    ) {
      this.handleInteractionChange();
    }
  }

  loaded(): void {
    setComponentLoaded(this);
  }

  override disconnectedCallback(): void {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    deactivateFocusTrap(this);
    this.embedded = false;
    this.cleanupInteractions();
  }

  // #endregion

  // #region Private Methods

  private handleFocusTrapDisabled(focusTrapDisabled: boolean): void {
    if (!this.open) {
      return;
    }

    focusTrapDisabled ? deactivateFocusTrap(this) : activateFocusTrap(this);
  }

  private toggleSheet(value: boolean): void {
    if (this.ignoreOpenChange) {
      return;
    }

    if (value) {
      this.openSheet();
    } else {
      this.closeSheet();
    }
  }

  private handleOpenedChange(): void {
    onToggleOpenCloseComponent(this);
  }

  private handleInteractionChange(): void {
    this.setupInteractions();
  }

  private getResizeIcon(): string {
    const { position } = this;

    return position === "block-start" || position === "block-end"
      ? "drag-resize-vertical"
      : "drag-resize-horizontal";
  }

  private getContentElDOMRect(): DOMRect {
    return this.contentEl.getBoundingClientRect();
  }

  private handleKeyDown(event: KeyboardEvent): void {
    const { key, defaultPrevented, shiftKey } = event;
    const {
      position,
      resizable,
      contentEl,
      el,
      resizeValues: { maxBlockSize, maxInlineSize, minBlockSize, minInlineSize },
    } = this;

    const arrowKeys =
      position === "block-end" || position === "block-start"
        ? ["ArrowUp", "ArrowDown"]
        : ["ArrowLeft", "ArrowRight"];

    const keys = [...arrowKeys, "Home", "End"];

    if (!resizable || !contentEl || defaultPrevented || !keys.includes(key)) {
      return;
    }

    const rect = this.getContentElDOMRect();
    const invertRTL = getElementDir(el) === "rtl" ? -1 : 1;
    const stepValue = shiftKey ? sheetResizeShiftStep : sheetResizeStep;

    switch (key) {
      case "ArrowUp":
        this.updateSize({
          size: rect.height + (position === "block-end" ? stepValue : -stepValue),
          type: "blockSize",
        });
        event.preventDefault();
        break;
      case "ArrowDown":
        this.updateSize({
          size: rect.height + (position === "block-end" ? -stepValue : stepValue),
          type: "blockSize",
        });
        event.preventDefault();
        break;
      case "ArrowLeft":
        this.updateSize({
          size: rect.width + (position === "inline-end" ? stepValue : -stepValue) * invertRTL,
          type: "inlineSize",
        });
        event.preventDefault();
        break;
      case "ArrowRight":
        this.updateSize({
          size: rect.width + (position === "inline-end" ? -stepValue : stepValue) * invertRTL,
          type: "inlineSize",
        });
        event.preventDefault();
        break;
      case "Home":
        this.updateSize({
          size:
            position === "block-start" || position === "block-end" ? minBlockSize : minInlineSize,
          type: position === "block-start" || position === "block-end" ? "blockSize" : "inlineSize",
        });
        break;
      case "End":
        this.updateSize({
          size:
            position === "block-start" || position === "block-end" ? maxBlockSize : maxInlineSize,
          type: position === "block-start" || position === "block-end" ? "blockSize" : "inlineSize",
        });
        break;
    }
  }

  private updateSize({
    type,
    size,
  }: {
    type: "inlineSize" | "blockSize";
    size: number | null;
  }): void {
    const { contentEl, resizeValues } = this;

    if (!contentEl) {
      return;
    }

    const resizeMin = type === "blockSize" ? "minBlockSize" : "minInlineSize";
    const resizeMax = type === "blockSize" ? "maxBlockSize" : "maxInlineSize";

    const clamped =
      resizeValues[resizeMin] && resizeValues[resizeMax]
        ? clamp(size, resizeValues[resizeMin], resizeValues[resizeMax])
        : size;

    const rounded = Math.round(clamped);

    this.resizeValues = {
      ...resizeValues,
      [type]: rounded,
    };

    contentEl.style[type] = size !== null ? `${rounded}px` : null;
  }

  private cleanupInteractions(): void {
    this.interaction?.unset();
    this.updateSize({ size: null, type: "inlineSize" });
    this.updateSize({ size: null, type: "blockSize" });
  }

  private setupInteractions(): void {
    this.cleanupInteractions();

    const { el, contentEl, resizable, position, open, resizeHandleEl } = this;

    if (!contentEl || !open || !resizable || !resizeHandleEl) {
      return;
    }

    const { inlineSize, minInlineSize, blockSize, minBlockSize, maxInlineSize, maxBlockSize } =
      window.getComputedStyle(contentEl);

    const values: ResizeValues = {
      inlineSize: isPixelValue(inlineSize) ? parseInt(inlineSize, 10) : 0,
      blockSize: isPixelValue(blockSize) ? parseInt(blockSize, 10) : 0,
      minInlineSize: isPixelValue(minInlineSize) ? parseInt(minInlineSize, 10) : 0,
      minBlockSize: isPixelValue(minBlockSize) ? parseInt(minBlockSize, 10) : 0,
      maxInlineSize: isPixelValue(maxInlineSize) ? parseInt(maxInlineSize, 10) : window.innerWidth,
      maxBlockSize: isPixelValue(maxBlockSize) ? parseInt(maxBlockSize, 10) : window.innerHeight,
    };

    this.resizeValues = values;

    const rtl = getElementDir(el) === "rtl";

    this.interaction = interact(contentEl, { context: el.ownerDocument }).resizable({
      edges: {
        top: position === "block-end" ? resizeHandleEl : false,
        right: position === (rtl ? "inline-end" : "inline-start") ? resizeHandleEl : false,
        bottom: position === "block-start" ? resizeHandleEl : false,
        left: position === (rtl ? "inline-start" : "inline-end") ? resizeHandleEl : false,
      },
      modifiers: [
        interact.modifiers.restrictSize({
          min: {
            width: values.minInlineSize,
            height: values.minBlockSize,
          },
          max: {
            width: values.maxInlineSize,
            height: values.maxBlockSize,
          },
        }),
      ],
      listeners: {
        move: ({ rect }: ResizeEvent) => {
          const isBlock = position === "block-start" || position === "block-end";

          this.updateSize({
            size: isBlock ? rect.height : rect.width,
            type: isBlock ? "blockSize" : "inlineSize",
          });
        },
      },
    });
  }

  onBeforeOpen(): void {
    this.calciteSheetBeforeOpen.emit();
  }

  onOpen(): void {
    this.calciteSheetOpen.emit();
    activateFocusTrap(this);
  }

  onBeforeClose(): void {
    this.calciteSheetBeforeClose.emit();
  }

  onClose(): void {
    this.calciteSheetClose.emit();
    deactivateFocusTrap(this);
  }

  private setResizeHandleEl(el: HTMLDivElement): void {
    this.resizeHandleEl = el;
    this.setupInteractions();
  }

  private setContentEl(el: HTMLDivElement): void {
    this.contentEl = el;
    this.contentId = ensureId(el);
  }

  private setTransitionEl(el: HTMLDivElement): void {
    this.transitionEl = el;
  }

  private async openSheet(): Promise<void> {
    await componentOnReady(this.el);
    this.el.addEventListener("calciteSheetOpen", this.openEnd);
    this.opened = true;
    if (!this.embedded) {
      this.initialOverflowCSS = document.documentElement.style.overflow;
      // use an inline style instead of a utility class to avoid global class declarations.
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }

  private handleOutsideClose(): void {
    if (this.outsideCloseDisabled) {
      return;
    }

    this.open = false;
  }

  private async closeSheet(): Promise<void> {
    if (this.beforeClose) {
      try {
        await this.beforeClose(this.el);
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

    this.opened = false;
    this.removeOverflowHiddenClass();
  }

  private removeOverflowHiddenClass(): void {
    document.documentElement.style.setProperty("overflow", this.initialOverflowCSS);
  }

  private handleMutationObserver(): void {
    this.updateFocusTrapElements();
  }

  // #endregion

  // #region Rendering

  override render(): JsxNode {
    const { resizable, position, resizeValues } = this;
    const dir = getElementDir(this.el);
    const isBlockPosition = position === "block-start" || position === "block-end";
    setAttribute(this.el, "aria-describedby", this.contentId);
    this.el.ariaLabel = this.label;
    this.el.ariaModal = "true";
    this.el.role = "dialog";

    return (
      <div
        class={{
          [CSS.container]: true,
          [CSS.containerOpen]: this.opened,
          [CSS.containerEmbedded]: this.embedded,
          [CSS_UTILITY.rtl]: dir === "rtl",
        }}
        ref={this.setTransitionEl}
      >
        <calcite-scrim class={CSS.scrim} onClick={this.handleOutsideClose} />
        <div
          class={{
            [CSS.content]: true,
          }}
          ref={this.setContentEl}
        >
          <slot />
          {resizable ? (
            <div
              ariaLabel={this.messages.resizeEnabled}
              ariaOrientation={isBlockPosition ? "vertical" : "horizontal"}
              ariaValueMax={
                isBlockPosition ? resizeValues.maxBlockSize : resizeValues.maxInlineSize
              }
              ariaValueMin={
                isBlockPosition ? resizeValues.minBlockSize : resizeValues.minInlineSize
              }
              ariaValueNow={isBlockPosition ? resizeValues.blockSize : resizeValues.inlineSize}
              class={CSS.resizeHandle}
              key="resize-handle"
              onKeyDown={this.handleKeyDown}
              ref={this.setResizeHandleEl}
              role="separator"
              tabIndex={0}
              touch-action="none"
            >
              <calcite-icon icon={this.getResizeIcon()} scale="s" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // #endregion
}
