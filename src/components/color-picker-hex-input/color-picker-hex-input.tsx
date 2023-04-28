import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
  State,
  VNode,
  Watch
} from "@stencil/core";
import {
  alphaToOpacity,
  canConvertToHexa,
  hexChar,
  hexify,
  isLonghandHex,
  isValidHex,
  normalizeHex,
  opacityToAlpha,
  rgbToHex
} from "../color-picker/utils";
import { CSS } from "./resources";
import { Scale } from "../interfaces";
import { RGB } from "../color-picker/interfaces";
import Color from "color";
import { focusElement } from "../../utils/dom";
import {
  componentLoaded,
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent
} from "../../utils/loadable";
import { NumberingSystem } from "../../utils/locale";
import { OPACITY_LIMITS } from "../color-picker/resources";
import { ColorPickerMessages } from "../color-picker/assets/color-picker/t9n";

const DEFAULT_COLOR = Color();

@Component({
  tag: "calcite-color-picker-hex-input",
  styleUrl: "color-picker-hex-input.scss",
  shadow: true
})
export class ColorPickerHexInput implements LoadableComponent {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteColorPickerHexInputElement;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    const { allowEmpty, opacityEnabled, value } = this;

    if (value) {
      const normalized = normalizeHex(value);

      if (isValidHex(normalized, opacityEnabled)) {
        this.internalSetValue(normalized, normalized, false);
      }

      return;
    }

    if (allowEmpty) {
      this.internalSetValue(null, null, false);
    }
  }

  componentWillLoad(): void {
    setUpLoadableComponent(this);
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When `false`, an empty color (`null`) will be allowed as a `value`. Otherwise, a color value is enforced on the component.
   *
   * When `true`, a color value is enforced, and clearing the input or blurring will restore the last valid `value`. When `false`, an empty color (`null`) will be allowed as a `value`.
   */
  @Prop() allowEmpty = false;

  /**
   * Specifies accessible label for the input field.
   *
   * @deprecated use `messages` instead
   */
  @Prop() hexLabel = "Hex";

  /**
   * Messages are passed by parent component for accessible labels.
   *
   * @internal
   */
  @Prop() messages: ColorPickerMessages;

  /** Specifies the Unicode numeral system used by the component for localization. */
  @Prop() numberingSystem?: NumberingSystem;

  /**
   * When true, the input will process and display hex characters for the alpha channel.
   */
  @Prop() opacityEnabled = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /**
   * The Hex value.
   */
  @Prop({ mutable: true, reflect: true }) value: string = normalizeHex(
    hexify(DEFAULT_COLOR, this.opacityEnabled)
  );

  @Watch("value")
  handleValueChange(value: string, oldValue: string): void {
    this.internalSetValue(value, oldValue, false);
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Emitted when the hex value changes.
   */
  @Event({ cancelable: false }) calciteColorPickerHexInputChange: EventEmitter<void>;

  private onHexInputBlur = (): void => {
    const node = this.hexInputNode;
    const inputValue = node.value;
    const hex = `#${inputValue}`;
    const { allowEmpty } = this;
    const willClearValue = allowEmpty && !inputValue;
    const isLonghand = isLonghandHex(hex);

    if (willClearValue || (isValidHex(hex) && isLonghand)) {
      return;
    }

    const { internalColor } = this;

    // manipulating DOM directly since rerender doesn't update input value
    node.value =
      allowEmpty && !internalColor
        ? ""
        : this.formatHexForInternalInput(
            rgbToHex(
              // always display hex input in RRGGBB format
              internalColor.object() as any as RGB
            )
          );
  };

  private onOpacityInputBlur = (): void => {
    const node = this.opacityInputNode;
    const inputValue = node.value;
    const { allowEmpty } = this;
    const willClearValue = allowEmpty && !inputValue;

    if (willClearValue) {
      return;
    }

    const { internalColor } = this;

    // manipulating DOM directly since rerender doesn't update input value
    node.value =
      allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
  };

  private onInputChange = (): void => {
    const nodeValue = this.hexInputNode.value;
    let value: string;

    if (!nodeValue) {
      value = nodeValue;
    } else {
      const normalized = normalizeHex(nodeValue);
      if (isValidHex(normalized)) {
        const alphaHex = this.internalColor?.hexa().slice(-2) ?? "ff";
        value = `${normalized + alphaHex}`;
      } else {
        value = normalized;
      }
    }

    this.internalSetValue(value, this.value);
  };

  // using @Listen as a workaround for VDOM listener not firing
  @Listen("keydown", { capture: true })
  protected onInputKeyDown(event: KeyboardEvent): void {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { opacityEnabled, internalColor, value } = this;
    const { key } = event;
    const composedPath = event.composedPath();

    if (key === "Tab" || key === "Enter") {
      if (composedPath.includes(this.hexInputNode)) {
        this.onInputChange();
      } else {
        this.onOpacityInputChange();
      }

      return;
    }

    const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
    const oldValue = this.value;

    if (isNudgeKey) {
      if (!value) {
        this.internalSetValue(this.previousNonNullValue, oldValue);
        event.preventDefault();
        return;
      }

      const direction = key === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;

      this.internalSetValue(
        normalizeHex(
          hexify(
            this.nudgeRGBChannels(
              internalColor,
              bump * direction,
              composedPath.includes(this.hexInputNode) ? "rgb" : "opacity"
            ),
            opacityEnabled
          )
        ),
        oldValue
      );

      event.preventDefault();
      return;
    }

    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key.length === 1;
    const validHexChar = hexChar.test(key);

    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }

  private onHexInputPaste = (event: ClipboardEvent): void => {
    const hex = event.clipboardData.getData("text");

    if (isValidHex(hex)) {
      event.preventDefault();
      this.hexInputNode.value = hex.slice(1);
    }
  };

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  private hexInputNode: HTMLCalciteInputElement;

  /**
   * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
   */
  @State() internalColor: Color | null = DEFAULT_COLOR;

  private opacityInputNode: HTMLCalciteInputElement;

  private previousNonNullValue: string = this.value;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { opacityEnabled, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";

    return (
      <div class={CSS.container}>
        <calcite-input
          class={CSS.hexInput}
          label={messages.hex || hexLabel}
          maxLength={6}
          numberingSystem={this.numberingSystem}
          onCalciteInputChange={this.onInputChange}
          onCalciteInternalInputBlur={this.onHexInputBlur}
          onKeyDown={this.handleKeyDown}
          onPaste={this.onHexInputPaste}
          prefixText="#"
          scale={inputScale}
          value={hexInputValue}
          // eslint-disable-next-line react/jsx-sort-props
          ref={this.storeHexInputRef}
        />
        {opacityEnabled ? (
          <calcite-input-number
            class={CSS.opacityInput}
            key="opacity-input"
            label={messages.opacity}
            max={OPACITY_LIMITS.max}
            maxLength={3}
            min={OPACITY_LIMITS.min}
            numberButtonType="none"
            numberingSystem={this.numberingSystem}
            onCalciteInputNumberChange={this.onOpacityInputChange}
            onCalciteInternalInputNumberBlur={this.onOpacityInputBlur}
            onKeyDown={this.handleKeyDown}
            scale={inputScale}
            suffixText="%"
            value={opacityInputValue}
            // eslint-disable-next-line react/jsx-sort-props
            ref={this.storeOpacityInputRef}
          />
        ) : null}
      </div>
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
    await componentLoaded(this);

    focusElement(this.hexInputNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private internalSetValue(value: string | null, oldValue: string | null, emit = true): void {
    if (value) {
      const { opacityEnabled } = this;
      const normalized = normalizeHex(value, opacityEnabled);

      if (isValidHex(normalized) || isValidHex(normalized, true) || canConvertToHexa(normalized)) {
        const { internalColor: currentColor } = this;
        const nextColor = Color(normalized);
        const normalizedLonghand = normalizeHex(hexify(nextColor, opacityEnabled));
        const changed =
          !currentColor ||
          normalizedLonghand !== normalizeHex(hexify(currentColor, opacityEnabled));

        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;

        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }

        return;
      }
    } else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;

      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }

      return;
    }

    this.value = oldValue;
  }

  private storeHexInputRef = (node: HTMLCalciteInputElement): void => {
    this.hexInputNode = node;
  };

  private storeOpacityInputRef = (node: HTMLCalciteInputElement): void => {
    this.opacityInputNode = node;
  };

  private formatHexForInternalInput(hex: string): string {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }

  private formatOpacityForInternalInput(color: Color): string {
    return color ? `${alphaToOpacity(color.alpha())}` : "";
  }

  private nudgeRGBChannels(color: Color, amount: number, context: "rgb" | "opacity"): Color {
    if (context === "rgb") {
      const channels = color.array();
      const nudgedRGBChannels = channels.slice(0, 3).map((channel) => channel + amount);
      const rgbOrRgbaChannels = [
        ...nudgedRGBChannels,
        this.opacityEnabled ? channels[3] : undefined
      ];

      return Color(rgbOrRgbaChannels);
    }

    const nudgedAlpha = opacityToAlpha(alphaToOpacity(color.alpha()) + amount);
    return Color([...color.array().slice(0, 3), nudgedAlpha]);
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  private onOpacityInputChange = (): void => {
    const node = this.opacityInputNode;
    let value: number | string;

    if (!node.value) {
      value = node.value;
    } else {
      const alpha = opacityToAlpha(Number(node.value));
      value = this.internalColor.alpha(alpha).hexa();
    }

    this.internalSetValue(value, this.value);
  };
}
