import {
  Component,
  Element,
  Host,
  VNode,
  h,
  Prop,
  Listen,
  Event,
  EventEmitter,
  State,
  Method
} from "@stencil/core";
import { guid } from "../../utils/guid";
import { parseTimeString, Time, validateTimeString } from "../../utils/time";
import { Theme } from "../interfaces";

@Component({
  tag: "calcite-input-time-picker",
  styleUrl: "calcite-input-time-picker.scss",
  scoped: true
})
export class CalciteInputTimePicker {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteInputTimePickerElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** The disabled state of the time input */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** Format of the hour value (12-hour or 24-hour) (this will be replaced by locale eventually) */
  @Prop({ reflect: true }) hourDisplayFormat: "12" | "24" = "12";

  /** The name of the time input */
  @Prop({ reflect: true }) name?: string;

  /** The scale (size) of the time input */
  @Prop({ reflect: true }) scale: "s" | "m" | "l" = "m";

  /** number that specifies the granularity that the value must adhere to */
  @Prop({ reflect: true }) step = 60;

  /** The color theme of the time-picker */
  @Prop({ reflect: true }) theme: Theme;

  /** The selected time */
  @Prop({ reflect: true, mutable: true }) value?: string;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  private calciteInputEl: HTMLCalciteInputElement;

  private referenceElementId: string = guid();

  //--------------------------------------------------------------------------
  //
  //  State
  //
  //--------------------------------------------------------------------------

  @State() open = false;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when the time value has changed.
   */
  @Event() calciteInputTimePickerChange: EventEmitter<string>;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  private inputBlurHandler = (): void => {
    this.open = false;
    const newValue = validateTimeString(this.calciteInputEl.value);
    if (newValue) {
      this.setValue(newValue);
    } else {
      this.setValue(validateTimeString(this.value));
    }
  };

  private inputFocusHandler = (): void => {
    this.open = true;
  };

  private inputInputHandler = (event: CustomEvent): void => {
    const value = event.detail.value;
    const validatedValue = validateTimeString(value);
    if (validatedValue) {
      debugger;
      this.setValue(validatedValue);
    } else if (!value) {
      debugger;
      this.setValue(value);
    }
  };

  @Listen("keydown")
  inputKeyDownHandler(event: KeyboardEvent): void {
    // This prevents the browser default time picker UI from appearing
    if (
      (event.target as HTMLElement).closest("calcite-input") === this.calciteInputEl &&
      event.key === " "
    ) {
      event.preventDefault();
    }
  }

  @Listen("keyup")
  keyUpHandler(event: KeyboardEvent): void {
    if (event.key === "Escape" && this.open) {
      this.open = false;
    }
  }

  @Listen("calciteTimePickerBlur")
  timePickerBlurHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.open = false;
  }

  @Listen("calciteTimePickerChange")
  timePickerChangeHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.detail) {
      const { hour, minute, second } = event.detail as Time;
      if (hour && minute) {
        if (second && this.step !== 60) {
          this.setValue(`${hour}:${minute}:${second}`);
        } else {
          this.setValue(`${hour}:${minute}`);
        }
      } else {
        this.setValue("");
      }
    }
  }

  @Listen("calciteTimePickerFocus")
  timePickerFocusHandler(event: CustomEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.open = true;
  }

  @Listen("click", { target: "window" })
  windowClickHandler(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const closestHost = target.closest(
      "calcite-input-time-picker"
    ) as HTMLCalciteInputTimePickerElement;
    const closestLabel = target.closest("calcite-label") as HTMLCalciteLabelElement;
    if (closestLabel && closestLabel.for === this.el.id) {
      this.setFocus();
      this.open = true;
    } else if (closestHost !== this.el) {
      this.open = false;
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus(): Promise<void> {
    this.calciteInputEl.setFocus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private setCalciteInputEl = (el: HTMLCalciteInputElement): void => {
    this.calciteInputEl = el;
  };

  private setValue = (value: string): void => {
    this.value = value;
    this.calciteInputTimePickerChange.emit(value);
  };

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  componentDidLoad() {
    if (this.value) {
      this.setValue(validateTimeString(this.value));
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    const { hour, minute, second } = parseTimeString(this.value);
    const popoverId = `${this.referenceElementId}-popover`;
    return (
      <Host>
        <div
          aria-controls={popoverId}
          aria-haspopup="dialog"
          aria-label={this.name}
          aria-owns={popoverId}
          id={this.referenceElementId}
          role="combobox"
        >
          <calcite-input
            disabled={this.disabled}
            icon="clock"
            name={this.name}
            onCalciteInputBlur={this.inputBlurHandler}
            onCalciteInputFocus={this.inputFocusHandler}
            onCalciteInputInput={this.inputInputHandler}
            ref={this.setCalciteInputEl}
            scale={this.scale}
            step={this.step}
            theme={this.theme}
            value={this.value}
          />
        </div>
        <calcite-popover
          id={popoverId}
          label="Time Picker"
          open={this.open}
          referenceElement={this.referenceElementId}
          theme={this.theme}
        >
          <calcite-time-picker
            hour={hour}
            hour-display-format={this.hourDisplayFormat}
            minute={minute}
            scale={this.scale}
            second={second}
            step={this.step}
            theme={this.theme}
          />
        </calcite-popover>
      </Host>
    );
  }
}
