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
   * When true, the component opens.
   */
  open: boolean;

  /**
   * Specifies property on which active transition is watched for.
   */
  openTransitionProp: string;

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

function transitionStart(event: TransitionEvent): void {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onBeforeOpen() : this.onBeforeClose();
  }
}

function transitionEnd(event: TransitionEvent): void {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onOpen() : this.onClose();
  }
}

let boundOnTransitionStart;
let boundOnTransitionEnd;

export const connectOpenCloseComponent = (component: OpenCloseComponent): void => {
  boundOnTransitionStart = transitionStart.bind(component);
  boundOnTransitionEnd = transitionEnd.bind(component);

  component.transitionEl?.addEventListener("transitionstart", boundOnTransitionStart);
  component.transitionEl?.addEventListener("transitionend", boundOnTransitionEnd);
};

export const disconnectOpenCloseComponent = (component: OpenCloseComponent): void => {
  component.transitionEl?.removeEventListener("transitionstart", boundOnTransitionStart);
  component.transitionEl?.removeEventListener("transitionstart", boundOnTransitionEnd);
};
