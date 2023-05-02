import { Component, Element, EventEmitter, h, Host, Prop, Event } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-nav-logo",
  styleUrl: "nav-logo.scss",
  shadow: {
    delegatesFocus: true
  }
})
export class CalciteNavLogo {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLCalciteNavLogoElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------
  /** When true, the component is highlighted. */
  @Prop({ reflect: true }) active: boolean;

  /** Specifies the URL destination of the component, which can be set as an absolute or relative path.*/
  @Prop({ reflect: true }) href: string;

  /** Describes the appearance or function of the `thumbnail`. If no label is provided, context will not be provided to assistive technologies. */
  @Prop() label: string;

  /** Specifies the subtext to display, such as an organization or application description. */
  @Prop() subText: string;

  /** Specifies the text to display, such as a product name.*/
  @Prop() text: string;

  /** When `true`, displays the `text` and `subText` contents. */
  @Prop({ reflect: true }) textEnabled: boolean;

  /** Specifies the `src` to an image. */
  @Prop() thumbnail: string;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Emits when selecting the component. */
  @Event() calciteNavLogoSelect: EventEmitter<void>;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private clickHandler = (): void => {
    this.calciteNavLogoSelect.emit();
  };

  private keyDownHandler = (event: KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      this.calciteNavLogoSelect.emit();
      event.preventDefault();
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
      <Host>
        <a
          href={this.href}
          onClick={this.clickHandler}
          onKeyDown={this.keyDownHandler}
          tabIndex={0}
        >
          {this.thumbnail && <img alt={this.label || ""} src={this.thumbnail} />}
          {(this.text || this.subText) && this.textEnabled && (
            <div class={CSS.textContainer}>
              {this.text && (
                <span class={CSS.logoText} key={CSS.logoText}>
                  {this.text}
                </span>
              )}
              {this.subText && (
                <span class={CSS.logoSubtext} key={CSS.logoSubtext}>
                  {this.subText}
                </span>
              )}
            </div>
          )}
        </a>
      </Host>
    );
  }
}
