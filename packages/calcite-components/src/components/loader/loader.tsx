import { Component, Element, h, Host, Prop, VNode } from "@stencil/core";
import { guid } from "../../utils/guid";
import { Scale } from "../interfaces";
import { CSS } from "./resources";

@Component({
  tag: "calcite-loader",
  styleUrl: "loader.scss",
  shadow: true,
})
export class Loader {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** When `true`, displays smaller and appears to the left of the text. */
  @Prop({ reflect: true }) inline = false;

  /** Accessible name for the component. */
  @Prop() label!: string;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /**
   * Specifies the component type.
   *
   * Use `"indeterminate"` if finding actual progress value is impossible.
   *
   */
  @Prop({ reflect: true }) type: "indeterminate" | "determinate";

  /** The component's value. Valid only for `"determinate"` indicators. Percent complete of 100. */
  @Prop() value = 0;

  /** Text that displays under the component's indicator. */
  @Prop() text = "";

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { el, inline, label, scale, text, type, value } = this;

    const id = el.id || guid();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100,
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return (
      <Host
        aria-label={label}
        id={id}
        role="progressbar"
        {...(isDeterminate ? hostAttributes : {})}
      >
        <div class={CSS.loaderParts}>
          {[1, 2, 3].map((index) => (
            <svg
              aria-hidden="true"
              class={{
                [CSS.loaderPart]: true,
                [CSS.loaderPartId(index)]: true,
              }}
              key={index}
              viewBox={viewbox}
              {...(index === 3 && isDeterminate ? { style: determinateStyle } : {})}
            >
              <circle {...svgAttributes} />
            </svg>
          ))}
        </div>
        {text && <div class={CSS.loaderText}>{text}</div>}
        {isDeterminate && <div class={CSS.loaderPercentage}>{value}</div>}
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteLoaderElement;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Return the proper sizes based on the scale property
   *
   * @param scale
   */
  private getSize(scale: string) {
    return {
      s: 32,
      m: 56,
      l: 80,
    }[scale];
  }

  private getInlineSize(scale: string) {
    return {
      s: 12,
      m: 16,
      l: 20,
    }[scale];
  }
}
