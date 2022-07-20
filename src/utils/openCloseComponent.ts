/**
 * Defines interface for components with open/close public emitter.
 * All implementations of this interface must handle the following events: `beforeOpen`, `open`, `beforeClose`, `close`.
 */
export interface OpenCloseComponent {
  /**
   * The host element.
   */
  readonly el: HTMLElement;

  /**
   * When true, the component is active.
   *
   * @deprecated use open instead
   */
  active?: boolean;

  /**
   * When true, the component opens.
   */
  open: boolean;

  /**
   * Specifies property on which active transition is watched for.
   */
  activeTransitionProp: string;

  /**
   * Specifies element that the transition is allowed to emit on.
   */
  transitionEl: HTMLDivElement;

  /**
   * Defines method for `beforeOpen` event handler.
   */
  onBeforeOpen: () => void;

  /**
   * Defines method for `open` event handler:
   */
  onOpen: () => void;

  /**
   * Defines method for `beforeClose` event handler:
   */
  onBeforeClose: () => void;

  /**
   * Defines method for `close` event handler:
   */
  onClose: () => void;
}

export function transitionStartHandler(this: OpenCloseComponent, event: TransitionEvent): void {
  if (event.propertyName === this.activeTransitionProp && event.target === this.transitionEl) {
    this.active || this.open ? this.onBeforeOpen() : this.onBeforeClose();
  }
}

export function transitionEnd(this: OpenCloseComponent, event: TransitionEvent): void {
  if (event.propertyName === this.activeTransitionProp && event.target === this.transitionEl) {
    this.active || this.open ? this.onOpen() : this.onClose();
  }
}
