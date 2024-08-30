import { createFocusTrap, FocusTrap as _FocusTrap, Options as FocusTrapOptions } from "focus-trap";
import { FocusableElement, focusElement, tabbableOptions } from "./dom";
import { focusTrapStack } from "./config";

// i'm not sure if this needs to be a map of all documents. Would the keydown event bubble up out of shadow dom elements? If so, then the map isn't necessary. Would need to test this.
const focusTrapDocumentMap = new Map<Document, number>();
// let focusTrapCount: number = 0; // this would be used if the keydown event doesn't bubble up out of shadow dom elements.

/**
 * Defines interface for components with a focus trap. Focusable content is required for components implementing focus trapping with this interface.
 */
export interface FocusTrapComponent {
  /**
   * The focus trap element.
   */
  el: HTMLElement;

  /**
   * When `true`, prevents focus trapping.
   */
  focusTrapDisabled?: boolean;

  /**
   * The focus trap instance.
   */
  focusTrap: FocusTrap;

  /**
   * Method to update the element(s) that are used within the FocusTrap component.
   *
   * This should be implemented for components that allow user content and/or have conditionally-rendered focusable elements within the trap.
   */
  updateFocusTrapElements?: () => Promise<void>;
}

export type FocusTrap = _FocusTrap;

interface ConnectFocusTrapOptions {
  /**
   * This option allows the focus trap to be created on a different element that's not the host (e.g., a supporting popup component).
   */
  focusTrapEl?: HTMLElement;

  /**
   * This allows specifying overrides to ConnectFocusTrap options.
   */
  focusTrapOptions?: Omit<FocusTrapOptions, "document" | "tabbableOptions" | "trapStack">;
}

/**
 * Helper to set up the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param options
 */
export function connectFocusTrap(component: FocusTrapComponent, options?: ConnectFocusTrapOptions): void {
  const { el } = component;
  const { ownerDocument } = el;
  const focusTrapNode = options?.focusTrapEl || el;

  if (!focusTrapNode) {
    return;
  }

  const focusTrapOptions: FocusTrapOptions = {
    clickOutsideDeactivates: true,
    escapeDeactivates: false,
    fallbackFocus: focusTrapNode,
    setReturnFocus: (el) => {
      focusElement(el as FocusableElement);
      return false;
    },
    ...options?.focusTrapOptions,

    // the following options are not overridable
    document: ownerDocument,
    tabbableOptions,
    trapStack: focusTrapStack,
  };

  component.focusTrap = createFocusTrap(focusTrapNode, focusTrapOptions);
  const newCount = (focusTrapDocumentMap.get(ownerDocument) || 0) + 1;
  if (newCount === 1) {
    addEscapeListener(ownerDocument);
  }
  focusTrapDocumentMap.set(ownerDocument, newCount);
}

// would need to call this on disconnect of all focus trap components.
export function disconnectFocusTrap(component: FocusTrapComponent): void {
  const { el } = component;
  const { ownerDocument } = el;
  const newCount = (focusTrapDocumentMap.get(ownerDocument) || 1) - 1;
  if (newCount === 0) {
    removeEscapeListener(ownerDocument);
  }
  focusTrapDocumentMap.set(ownerDocument, newCount);
}

/**
 * Helper to activate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap activate options.
 */
export function activateFocusTrap(
  component: FocusTrapComponent,
  options?: Parameters<_FocusTrap["activate"]>[0],
): void {
  if (!component.focusTrapDisabled) {
    component.focusTrap?.activate(options);
  }
}

/**
 * Helper to deactivate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap deactivate options.
 */
export function deactivateFocusTrap(
  component: FocusTrapComponent,
  options?: Parameters<_FocusTrap["deactivate"]>[0],
): void {
  component.focusTrap?.deactivate(options);
}

/**
 * Helper to update the element(s) that are used within the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @example
 * const modal = document.querySelector("calcite-modal");
 * const input = document.createElement("calcite-input");
 * content.appendChild(input);
 * await input.componentOnReady();
 * await modal.updateFocusTrapElements();
 * requestAnimationFrame(() => input.setFocus());
 */
export function updateFocusTrapElements(component: FocusTrapComponent): void {
  component.focusTrap?.updateContainerElements(component.el);
}

function escapeHandler(event: KeyboardEvent): void {
  if (event.key === "Escape" && !event.defaultPrevented) {
    focusTrapStack[focusTrapStack.length - 1]?.deactivate(); // deactivate the last active focus trap. This might be the 0 index. I'm not sure.
  }
}

function addEscapeListener(document: Document): void {
  document.addEventListener("keydown", escapeHandler);
}

function removeEscapeListener(document: Document): void {
  document.removeEventListener("keydown", escapeHandler);
}
