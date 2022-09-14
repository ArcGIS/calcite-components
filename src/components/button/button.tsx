import "form-request-submit-polyfill/form-request-submit-polyfill";
import { Component, Element, h, Method, Prop, Build, State, VNode, Watch } from "@stencil/core";
import { CSS, TEXT } from "./resources";
import { closestElementCrossShadowBoundary } from "../../utils/dom";
import { ButtonAlignment, ButtonAppearance, ButtonColor } from "./interfaces";
import { FlipContext, Scale, Width } from "../interfaces";
import { LabelableComponent, connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { createObserver } from "../../utils/observers";
import { InteractiveComponent, updateHostInteraction } from "../../utils/interactive";
import { submitForm, resetForm, FormOwner } from "../../utils/form";

/** Passing a 'href' will render an anchor link, instead of a button. Role will be set to link, or button, depending on this. */
/** It is the consumers responsibility to add aria information, rel, target, for links, and any button attributes for form submission */

/** @slot - A slot for adding text. */
@Component({
  tag: "calcite-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button implements LabelableComponent, InteractiveComponent, FormOwner {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteButtonElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** optionally specify alignment of button elements. */
  @Prop({ reflect: true }) alignment?: ButtonAlignment = "center";

  /** specify the appearance style of the button, defaults to solid. */
  @Prop({ reflect: true }) appearance: ButtonAppearance = "solid";

  /** Applies to the aria-label attribute on the button or hyperlink */
  @Prop() label?: string;

  /** specify the color of the button, defaults to blue */
  @Prop({ reflect: true }) color: ButtonColor = "blue";

  /** is the button disabled  */
  @Prop({ reflect: true }) disabled = false;

  /** optionally pass a href - used to determine if the component should render as a button or an anchor */
  @Prop({ reflect: true }) href?: string;

  /** Specifies an icon to display at the end of the component. */
  @Prop({ reflect: true }) iconEnd?: string;

  /** When true, the icon will be flipped when the element direction is right-to-left ("rtl"). */
  @Prop({ reflect: true }) iconFlipRtl?: FlipContext;

  /** Specifies an icon to display at the start of the component. */
  @Prop({ reflect: true }) iconStart?: string;

  /**
   * string to override English loading text
   *
   * @default "Loading"
   */
  @Prop() intlLoading?: string = TEXT.loading;

  /** optionally add a calcite-loader component to the button, disabling interaction.  */
  @Prop({ reflect: true }) loading = false;

  /** The name attribute to apply to the button */
  @Prop({ reflect: true }) name?: string;

  /** The rel attribute to apply to the hyperlink */
  @Prop({ reflect: true }) rel?: string;

  /**
   * The form ID to associate with the component
   *
   * @deprecated – this property is no longer needed if placed inside a form.
   */
  @Prop() form?: string;

  /** optionally add a round style to the button  */
  @Prop({ reflect: true }) round = false;

  /** specify the scale of the button, defaults to m */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** is the button a child of a calcite-split-button */
  @Prop({ reflect: true }) splitChild?: "primary" | "secondary" | false = false;

  /** The target attribute to apply to the hyperlink */
  @Prop({ reflect: true }) target?: string;

  /** The type attribute to apply to the button */
  @Prop({ mutable: true, reflect: true }) type = "button";

  /** specify the width of the button, defaults to auto */
  @Prop({ reflect: true }) width: Width = "auto";

  @Watch("loading")
  loadingChanged(newValue: boolean, oldValue: boolean): void {
    if (!!newValue && !oldValue) {
      this.hasLoader = true;
    }
    if (!newValue && !!oldValue) {
      window.setTimeout(() => {
        this.hasLoader = false;
      }, 300);
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.hasLoader = this.loading;
    this.setupTextContentObserver();
    connectLabel(this);
    this.formEl = closestElementCrossShadowBoundary<HTMLFormElement>(
      this.el,
      this.form ? `#${this.form}` : "form"
    );
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
    disconnectLabel(this);
    this.formEl = null;
  }

  componentWillLoad(): void {
    if (Build.isBrowser) {
      this.updateHasContent();
    }
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  render(): VNode {
    const childElType = this.href ? "a" : "button";
    const Tag = childElType;
    const loaderNode = this.hasLoader ? (
      <div class={CSS.buttonLoader}>
        <calcite-loader
          active
          class={this.loading ? CSS.loadingIn : CSS.loadingOut}
          inline
          label={this.intlLoading}
          scale="m"
        />
      </div>
    ) : null;

    const iconStartEl = (
      <calcite-icon
        class={{ [CSS.icon]: true, [CSS.iconStart]: true }}
        flipRtl={this.iconFlipRtl === "start" || this.iconFlipRtl === "both"}
        icon={this.iconStart}
        scale="s"
      />
    );

    const iconEndEl = (
      <calcite-icon
        class={{ [CSS.icon]: true, [CSS.iconEnd]: true }}
        flipRtl={this.iconFlipRtl === "end" || this.iconFlipRtl === "both"}
        icon={this.iconEnd}
        scale="s"
      />
    );

    const contentEl = (
      <span class={CSS.content}>
        <slot />
      </span>
    );

    return (
      <Tag
        aria-label={getLabelText(this)}
        class={{
          [CSS.contentSlotted]: this.hasContent,
          [CSS.iconStartEmpty]: !this.iconStart,
          [CSS.iconEndEmpty]: !this.iconEnd
        }}
        disabled={this.disabled || this.loading}
        href={childElType === "a" && this.href}
        name={childElType === "button" && this.name}
        onClick={this.handleClick}
        ref={(el) => (this.childEl = el)}
        rel={childElType === "a" && this.rel}
        tabIndex={this.disabled || this.loading ? -1 : null}
        target={childElType === "a" && this.target}
        type={childElType === "button" && this.type}
      >
        {loaderNode}
        {this.iconStart ? iconStartEl : null}
        {this.hasContent ? contentEl : null}
        {this.iconEnd ? iconEndEl : null}
      </Tag>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */
  @Method()
  async setFocus(): Promise<void> {
    this.childEl?.focus();
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  formEl: HTMLFormElement;

  labelEl: HTMLCalciteLabelElement;

  /** watches for changing text content */
  private mutationObserver = createObserver("mutation", () => this.updateHasContent());

  /** the rendered child element */
  private childEl?: HTMLElement;

  /** determine if there is slotted content for styling purposes */
  @State() private hasContent = false;

  /** determine if loader present for styling purposes */
  @State() private hasLoader = false;

  private updateHasContent() {
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && this.el.childNodes[0]?.nodeName === "#text"
        ? this.el.textContent?.trim().length > 0
        : slottedContent;
  }

  private setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  onLabelClick(): void {
    this.handleClick();
    this.setFocus();
  }

  // act on a requested or nearby form based on type
  private handleClick = (): void => {
    const { type } = this;

    if (this.href) {
      return;
    }

    // this.type refers to type attribute, not child element type
    if (type === "submit") {
      submitForm(this);
    } else if (type === "reset") {
      resetForm(this);
    }
  };
}
