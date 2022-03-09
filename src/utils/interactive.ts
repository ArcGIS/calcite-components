export interface InteractiveComponent {
  /**
   * The host element.
   */
  readonly el: HTMLElement;

  /**
   * When true, prevents user interaction.
   *
   * Notes:
   *
   * * This prop should use the @Prop decorator and reflect.
   * * The `disabled` Sass mixin must be added to the component's stylesheet.
   */
  disabled: boolean;
}

type HostIsTabbablePredicate = () => boolean;

function noopClick(): void {
  /** noop **/
}

/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 */
export function updateHostInteraction(
  component: InteractiveComponent,
  hostIsTabbable: boolean | HostIsTabbablePredicate | "managed" = false
): void {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");

    if (component.el.contains(document.activeElement)) {
      (document.activeElement as HTMLElement).blur();
    }

    component.el.click = noopClick;

    return;
  }

  component.el.click = HTMLElement.prototype.click;

  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  } else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  } else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  } else {
    // noop for "managed" as owning component will manage its tab index
  }

  component.el.removeAttribute("aria-disabled");
}
