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
import { guid } from "../../utils/guid";
import { focusElement } from "../../utils/dom";
import { Scale } from "../interfaces";
import { hiddenFormInputSlotName } from "../../utils/form";
import { LabelableComponent, connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { connectForm, disconnectForm, FormAssociated } from "../../utils/form";

@Component({
  tag: "calcite-checkbox",
  styleUrl: "calcite-checkbox.scss",
  shadow: true
})
export class CalciteCheckbox implements LabelableComponent, FormAssociated {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteCheckboxElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** The checked state of the checkbox. */
  @Prop({ reflect: true, mutable: true }) checked = false;

  @Watch("checked")
  checkedHandler(newChecked: boolean): void {
    this.input.checked = newChecked;
  }

  /** True if the checkbox is disabled */
  @Prop({ reflect: true }) disabled = false;

  @Watch("disabled")
  disabledHandler(disabled: boolean): void {
    this.input.disabled = disabled;
  }

  /** The id attribute of the checkbox.  When omitted, a globally unique identifier is used. */
  @Prop({ reflect: true, mutable: true }) guid: string;

  /**
   * The hovered state of the checkbox.
   * @internal
   */
  @Prop({ reflect: true, mutable: true }) hovered = false;

  /**
   * True if the checkbox is initially indeterminate,
   * which is independent from its checked state
   * https://css-tricks.com/indeterminate-checkboxes/
   * */
  @Prop({ reflect: true, mutable: true }) indeterminate = false;

  /**
   * The label of the checkbox input
   * @internal
   */
  @Prop() label?: string;

  @Watch("label")
  labelHandler(): void {
    this.input.setAttribute("aria-label", getLabelText(this));
  }

  /** The name of the checkbox input */
  @Prop({ reflect: true }) name = "";

  @Watch("name")
  nameHandler(newName: string): void {
    this.input.name = newName;
  }

  /** specify the scale of the checkbox, defaults to m */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** The value of the checkbox input */
  @Prop() value: any;

  @Watch("value")
  valueHandler(value: any): void {
    this.input.value = value != null ? value.toString() : "";
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  private readonly checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";

  private readonly indeterminatePath = "M13 8v1H3V8z";

  private input: HTMLInputElement;

  labelEl: HTMLCalciteLabelElement;

  formEl: HTMLFormElement;

  defaultValue: CalciteCheckbox["checked"];

  //--------------------------------------------------------------------------
  //
  //  State
  //
  //--------------------------------------------------------------------------

  /** The focused state of the checkbox. */
  @State() focused = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */
  @Method()
  async setFocus(): Promise<void> {
    focusElement(this.input);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private getPath = (): string =>
    this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";

  private toggle = (): void => {
    if (!this.disabled) {
      this.checked = !this.checked;
      focusElement(this.input);
      this.indeterminate = false;
      this.calciteCheckboxChange.emit();
    }
  };

  private clickHandler = (): void => {
    this.toggle();
  };

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Emitted when the checkbox is blurred
   *
   * @internal
   */
  @Event() calciteInternalCheckboxBlur: EventEmitter;

  /** Emitted when the checkbox checked status changes */
  @Event() calciteCheckboxChange: EventEmitter;

  /**
   * Emitted when the checkbox is focused
   *
   * @internal
   */
  @Event() calciteInternalCheckboxFocus: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("mouseenter")
  mouseenter(): void {
    this.hovered = true;
  }

  @Listen("mouseleave")
  mouseleave(): void {
    this.hovered = false;
  }

  private onInputBlur() {
    this.focused = false;
    this.calciteInternalCheckboxBlur.emit(false);
  }

  private onInputFocus() {
    this.focused = true;
    this.calciteInternalCheckboxFocus.emit(true);
  }

  onLabelClick(): void {
    this.toggle();
  }

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.guid = this.el.id || `calcite-checkbox-${guid()}`;
    this.renderHiddenCheckboxInput();
    connectLabel(this);
    connectForm(this);
  }

  componentDidLoad(): void {
    this.input.setAttribute("aria-label", getLabelText(this));
  }

  disconnectedCallback(): void {
    this.el.removeChild(this.input);
    disconnectLabel(this);
    disconnectForm(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  private renderHiddenCheckboxInput() {
    this.input = document.createElement("input");
    this.input.type = "checkbox";
    this.input.slot = hiddenFormInputSlotName;
    this.checkedHandler(this.checked);
    this.disabledHandler(this.disabled);
    this.nameHandler(this.name);
    this.valueHandler(this.value);
    this.labelHandler();
    this.input.onblur = this.onInputBlur.bind(this); // todo: custom element should be focused instead?
    this.input.onfocus = this.onInputFocus.bind(this); // todo: custom element should be focused instead?
    this.el.appendChild(this.input);
  }

  render(): VNode {
    return (
      <Host onClick={this.clickHandler}>
        <div class={{ focused: this.focused }}>
          <svg class="check-svg" viewBox="0 0 16 16">
            <path d={this.getPath()} />
          </svg>
          <slot />
        </div>
        <slot name={hiddenFormInputSlotName} />
      </Host>
    );
  }
}
