import {
  Component,
  Element,
  h,
  Host,
  Prop,
  VNode,
  Event,
  EventEmitter,
  Watch,
  State,
  Listen,
  Method,
} from "@stencil/core";
import { Scale } from "../interfaces";
import { numberKeys } from "../../utils/key";
import { isValidNumber } from "../../utils/number";
import { LabelableComponent, connectLabel, disconnectLabel } from "../../utils/label";
import {
  connectForm,
  disconnectForm,
  FormComponent,
  HiddenFormInputSlot,
  submitForm,
} from "../../utils/form";
import { InteractiveComponent, updateHostInteraction } from "../../utils/interactive";
import {
  formatTimePart,
  MinuteOrSecond,
  maxTenthForMinuteAndSecond,
  TimePart,
  getMeridiem,
  HourCycle,
  localizeTimeStringToParts,
  parseTimeString,
  localizeTimePart,
  Meridiem,
  getLocaleHourCycle,
  getTimeParts,
  getLocalizedTimePartSuffix,
  isValidTime,
} from "../../utils/time";
import { CSS, TEXT } from "./resources";
import {
  LocalizedComponent,
  NumberingSystem,
  connectLocalized,
  disconnectLocalized,
} from "../../utils/locale";
import {
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import { T9nComponent, connectMessages, disconnectMessages, setUpMessages } from "../../utils/t9n";
import { InputTimeMessages } from "./assets/input-time/t9n";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

@Component({
  tag: "calcite-input-time",
  styleUrl: "input-time.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class InputTime
  implements
    FormComponent,
    InteractiveComponent,
    LabelableComponent,
    LoadableComponent,
    LocalizedComponent,
    T9nComponent
{
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteInputTimeElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** The disabled state of the time input */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The ID of the form that will be associated with the component.
   *
   * When not set, the component will be associated with its ancestor form element, if any.
   */
  @Prop({ reflect: true }) form: string;

  /** When true, the icon is flipped in RTL. */
  @Prop({ reflect: true }) iconFlipRtl = false;

  /**
   * aria-label for the hour input
   *
   * @default "Hour"
   */
  @Prop() intlHour = TEXT.hour;

  /**
   * aria-label for the meridiem (am/pm) input
   *
   * @default "AM/PM"
   */
  @Prop() intlMeridiem = TEXT.meridiem;

  /**
   * aria-label for the minute input
   *
   * @default "Minute"
   */
  @Prop() intlMinute = TEXT.minute;

  /**
   * aria-label for the second input
   *
   * @default "Second"
   */
  @Prop() intlSecond = TEXT.second;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<InputTimeMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: InputTimeMessages;

  /** The name of the time input */
  @Prop() name: string;

  /**
   * Specifies the Unicode numeral system used by the component for localization.
   */
  @Prop({ reflect: true }) numberingSystem: NumberingSystem;

  /**
   * When true, still focusable but controls are gone and the value cannot be modified.
   *
   * @mdn [readOnly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
   */
  @Prop() readonly = false;

  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  @Prop({ reflect: true }) required = false;

  /** The scale (size) of the time input */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** number (seconds) that specifies the granularity that the value must adhere to */
  @Prop() step = 60;

  /** The selected time in UTC (always 24-hour format) */
  @Prop({ mutable: true }) value: string = null;

  @Watch("value")
  valueWatcher(newValue: string): void {
    this.setValue(newValue);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  private activeEl: HTMLSpanElement;

  defaultValue: InputTime["value"];

  formEl: HTMLFormElement;

  private hourEl: HTMLSpanElement;

  labelEl: HTMLCalciteLabelElement;

  private meridiemEl: HTMLSpanElement;

  private meridiemOrder: number;

  private minuteEl: HTMLSpanElement;

  previousValue: string;

  private secondEl: HTMLSpanElement;

  // --------------------------------------------------------------------------
  //
  //  State
  //
  // --------------------------------------------------------------------------

  @State() defaultMessages: InputTimeMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleWatcher(newLocale: string): void {
    this.hourCycle = getLocaleHourCycle(newLocale, this.numberingSystem);
    this.setValue(this.value);
  }

  @State() hour: string;

  @State() hourCycle: HourCycle;

  @State() localizedHour: string;

  @State() localizedHourSuffix: string;

  @State() localizedMeridiem: string;

  @State() localizedMinute: string;

  @State() localizedMinuteSuffix: string;

  @State() localizedSecond: string;

  @State() localizedSecondSuffix: string;

  @State() meridiem: Meridiem;

  @State() minute: string;

  @State() second: string;

  @State() showSecond: boolean = this.step < 60;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when the time value is committed.
   */
  @Event() calciteInputTimeChange: EventEmitter<string>;

  /**
   * Fires each time the user changes the value but has not committed changes.
   */
  @Event() calciteInputTimeInput: EventEmitter<string>;

  /**
   * @internal
   */
  @Event() calciteInternalInputTimeBlur: EventEmitter<void>;

  /**
   * @internal
   */
  @Event() calciteInternalInputTimeFocus: EventEmitter<void>;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("blur")
  blurHandler(): void {
    this.activeEl = undefined;
    this.calciteInternalInputTimeBlur.emit();
  }

  @Listen("click")
  clickHandler(event: MouseEvent): void {
    const composedEventPath = event.composedPath();
    if (composedEventPath.includes(this.hourEl)) {
      return;
    }
    if (composedEventPath.includes(this.minuteEl)) {
      return;
    }
    if (composedEventPath.includes(this.secondEl)) {
      return;
    }
    if (composedEventPath.includes(this.meridiemEl)) {
      return;
    }
    this.setFocus();
  }

  @Listen("focus")
  focusHandler(): void {
    this.calciteInternalInputTimeFocus.emit();
  }

  @Listen("keydown")
  keyDownHandler({ defaultPrevented, key }: KeyboardEvent): void {
    if (key === "Enter" && !defaultPrevented && !this.disabled) {
      submitForm(this);
      return;
    }

    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.setFocus("minute");
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.setFocus("hour");
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.setFocus("second");
            } else if (this.hourCycle === "12") {
              this.setFocus("meridiem");
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.setFocus("minute");
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.setFocus("meridiem");
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.step !== 60) {
              this.setFocus("second");
            } else {
              this.setFocus("minute");
            }
            break;
        }
        break;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Sets focus on the component.
   *
   * @param target
   */
  @Method()
  async setFocus(target?: TimePart): Promise<void> {
    this[`${target || "hour"}El`]?.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private decrementHour = (): void => {
    const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
    this.setValuePart("hour", newHour);
  };

  private decrementMeridiem = (): void => {
    const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
    this.setValuePart("meridiem", newMeridiem);
  };

  private decrementMinute = (): void => {
    this.decrementMinuteOrSecond("minute");
  };

  private decrementMinuteOrSecond = (key: MinuteOrSecond): void => {
    let newValue;
    if (isValidNumber(this[key])) {
      const valueAsNumber = parseInt(this[key]);
      newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
    } else {
      newValue = 59;
    }
    this.setValuePart(key, newValue);
  };

  private decrementSecond = (): void => {
    this.decrementMinuteOrSecond("second");
  };

  private getMeridiemOrder(formatParts: Intl.DateTimeFormatPart[]): number {
    const isRTLKind = this.effectiveLocale === "ar" || this.effectiveLocale === "he";
    if (formatParts && !isRTLKind) {
      const index = formatParts.findIndex((parts: { type: string; value: string }) => {
        return parts.value === this.localizedMeridiem;
      });
      return index;
    }
    return 0;
  }

  private hourKeyDownHandler = (event: KeyboardEvent): void => {
    if (this.disabled || this.readonly) {
      return;
    }
    const key = event.key;
    if (numberKeys.includes(key)) {
      const keyAsNumber = parseInt(key);
      let newHour;
      if (isValidNumber(this.hour)) {
        switch (this.hourCycle) {
          case "12":
            newHour =
              this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2
                ? `1${keyAsNumber}`
                : keyAsNumber;
            break;
          case "24":
            if (this.hour === "01") {
              newHour = `1${keyAsNumber}`;
            } else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
              newHour = `2${keyAsNumber}`;
            } else {
              newHour = keyAsNumber;
            }
            break;
        }
      } else {
        newHour = keyAsNumber;
      }
      this.setValuePart("hour", newHour);
    } else {
      switch (key) {
        case "Backspace":
        case "Delete":
          this.setValuePart("hour", null);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementHour();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementHour();
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          break;
      }
    }
  };

  private incrementHour = (): void => {
    const newHour = isValidNumber(this.hour)
      ? this.hour === "23"
        ? 0
        : parseInt(this.hour) + 1
      : 1;
    this.setValuePart("hour", newHour);
  };

  private incrementMeridiem = (): void => {
    const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
    this.setValuePart("meridiem", newMeridiem);
  };

  private incrementMinute = (): void => {
    this.incrementMinuteOrSecond("minute");
  };

  private incrementMinuteOrSecond = (key: MinuteOrSecond): void => {
    const newValue = isValidNumber(this[key])
      ? this[key] === "59"
        ? 0
        : parseInt(this[key]) + 1
      : 0;
    this.setValuePart(key, newValue);
  };

  private incrementSecond = (): void => {
    this.incrementMinuteOrSecond("second");
  };

  private meridiemKeyDownHandler = (event: KeyboardEvent): void => {
    if (this.disabled || this.readonly) {
      return;
    }
    switch (event.key) {
      case "a":
        this.setValuePart("meridiem", "AM");
        break;
      case "p":
        this.setValuePart("meridiem", "PM");
        break;
      case "Backspace":
      case "Delete":
        this.setValuePart("meridiem", null);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.incrementMeridiem();
        break;
      case "ArrowDown":
        event.preventDefault();
        this.decrementMeridiem();
        break;
      case " ":
      case "Spacebar":
        event.preventDefault();
        break;
    }
  };

  private minuteKeyDownHandler = (event: KeyboardEvent): void => {
    if (this.disabled || this.readonly) {
      return;
    }
    const key = event.key;
    if (numberKeys.includes(key)) {
      const keyAsNumber = parseInt(key);
      let newMinute;
      if (isValidNumber(this.minute) && this.minute.startsWith("0")) {
        const minuteAsNumber = parseInt(this.minute);
        newMinute =
          minuteAsNumber > maxTenthForMinuteAndSecond
            ? keyAsNumber
            : `${minuteAsNumber}${keyAsNumber}`;
      } else {
        newMinute = keyAsNumber;
      }
      this.setValuePart("minute", newMinute);
    } else {
      switch (key) {
        case "Backspace":
        case "Delete":
          this.setValuePart("minute", null);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMinute();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMinute();
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          break;
      }
    }
  };

  onLabelClick(): void {
    this.setFocus();
  }

  private secondKeyDownHandler = (event: KeyboardEvent): void => {
    if (this.disabled || this.readonly) {
      return;
    }
    const key = event.key;
    if (numberKeys.includes(key)) {
      const keyAsNumber = parseInt(key);
      let newSecond;
      if (isValidNumber(this.second) && this.second.startsWith("0")) {
        const secondAsNumber = parseInt(this.second);
        newSecond =
          secondAsNumber > maxTenthForMinuteAndSecond
            ? keyAsNumber
            : `${secondAsNumber}${keyAsNumber}`;
      } else {
        newSecond = keyAsNumber;
      }
      this.setValuePart("second", newSecond);
    } else {
      switch (key) {
        case "Backspace":
        case "Delete":
          this.setValuePart("second", null);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementSecond();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementSecond();
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          break;
      }
    }
  };

  private setHourEl = (el: HTMLSpanElement) => (this.hourEl = el);

  private setMeridiemEl = (el: HTMLSpanElement) => (this.meridiemEl = el);

  private setMinuteEl = (el: HTMLSpanElement) => (this.minuteEl = el);

  private setSecondEl = (el: HTMLSpanElement) => (this.secondEl = el);

  private setValue = (value: string): void => {
    if (isValidTime(value)) {
      const { hour, minute, second } = parseTimeString(value);
      const { effectiveLocale: locale, numberingSystem } = this;
      const {
        localizedHour,
        localizedHourSuffix,
        localizedMinute,
        localizedMinuteSuffix,
        localizedSecond,
        // localizedDecimalSeparator,
        // localizedFractionalSecond,
        localizedSecondSuffix,
        localizedMeridiem,
      } = localizeTimeStringToParts({ value, locale, numberingSystem });
      this.hour = hour;
      this.minute = minute;
      this.second = second;
      // this.fractionalSecond = this.sanitizeFractionalSecond(fractionalSecond);
      this.localizedHour = localizedHour;
      this.localizedHourSuffix = localizedHourSuffix;
      this.localizedMinute = localizedMinute;
      this.localizedMinuteSuffix = localizedMinuteSuffix;
      this.localizedSecond = localizedSecond;
      // this.localizedDecimalSeparator = localizedDecimalSeparator;
      // this.localizedFractionalSecond = localizedFractionalSecond;
      this.localizedSecondSuffix = localizedSecondSuffix;
      if (localizedMeridiem) {
        this.localizedMeridiem = localizedMeridiem;
        this.meridiem = getMeridiem(this.hour);
        const formatParts = getTimeParts({ value, locale, numberingSystem });
        this.meridiemOrder = this.getMeridiemOrder(formatParts);
      }
    } else {
      this.hour = null;
      // this.fractionalSecond = null;
      this.localizedHour = null;
      this.localizedHourSuffix = getLocalizedTimePartSuffix(
        "hour",
        this.effectiveLocale,
        this.numberingSystem
      );
      this.localizedMeridiem = null;
      this.localizedMinute = null;
      this.localizedMinuteSuffix = getLocalizedTimePartSuffix(
        "minute",
        this.effectiveLocale,
        this.numberingSystem
      );
      this.localizedSecond = null;
      // this.localizedDecimalSeparator = getLocalizedDecimalSeparator(
      //   this.effectiveLocale,
      //   this.numberingSystem
      // );
      // this.localizedFractionalSecond = null;
      this.localizedSecondSuffix = getLocalizedTimePartSuffix(
        "second",
        this.effectiveLocale,
        this.numberingSystem
      );
      this.meridiem = null;
      this.minute = null;
      this.second = null;
      this.value = null;
    }
  };

  private setValuePart = (
    key: "hour" | "minute" | "second" | "meridiem",
    value: number | string | Meridiem
  ): void => {
    const { effectiveLocale: locale, numberingSystem } = this;
    if (key === "meridiem") {
      this.meridiem = value as Meridiem;
      if (isValidNumber(this.hour)) {
        const hourAsNumber = parseInt(this.hour);
        switch (value) {
          case "AM":
            if (hourAsNumber >= 12) {
              this.hour = formatTimePart(hourAsNumber - 12);
            }
            break;
          case "PM":
            if (hourAsNumber < 12) {
              this.hour = formatTimePart(hourAsNumber + 12);
            }
            break;
        }
        this.localizedHour = localizeTimePart({
          value: this.hour,
          part: "hour",
          locale,
          numberingSystem,
        });
      }
    } else {
      this[key] = typeof value === "number" ? formatTimePart(value) : value;
      this[`localized${capitalize(key)}`] = localizeTimePart({
        value: this[key],
        part: key,
        locale,
        numberingSystem,
      });
    }

    let emit = false;
    let newValue;
    if (this.hour && this.minute) {
      newValue = `${this.hour}:${this.minute}`;
      if (this.showSecond) {
        newValue = `${newValue}:${this.second ?? "00"}`;
        // if (this.showFractionalSecond && this.fractionalSecond) {
        //   newValue = `${newValue}.${this.fractionalSecond}`;
        // }
      }
    } else {
      newValue = null;
    }
    if (this.value !== newValue) {
      emit = true;
    }
    this.value = newValue;
    this.localizedMeridiem = this.value
      ? localizeTimeStringToParts({ value: this.value, locale, numberingSystem })
          ?.localizedMeridiem || null
      : localizeTimePart({ value: this.meridiem, part: "meridiem", locale, numberingSystem });
    if (emit) {
      this.calciteInputTimeChange.emit();
    }
  };

  private timePartFocusHandler = (event: FocusEvent): void => {
    this.activeEl = event.currentTarget as HTMLSpanElement;
  };

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    connectLocalized(this);
    connectMessages(this);
    this.setValue(this.value);
    this.hourCycle = getLocaleHourCycle(this.effectiveLocale, this.numberingSystem);
    connectLabel(this);
    connectForm(this);
  }

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  disconnectedCallback(): void {
    disconnectLocalized(this);
    disconnectMessages(this);
    disconnectLabel(this);
    disconnectForm(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    const hourIsNumber = isValidNumber(this.hour);
    const minuteIsNumber = isValidNumber(this.minute);
    const secondIsNumber = isValidNumber(this.second);
    const showMeridiem = this.hourCycle === "12";
    const emptyValue = "--";
    return (
      <Host>
        <div
          class={{
            [CSS.container]: true,
            [CSS.readonly]: this.readonly,
            [CSS[`scale-${this.scale}`]]: true,
            [CSS.showMeridiem]: showMeridiem,
            [CSS.showSecond]: this.showSecond,
          }}
          dir="ltr"
        >
          <calcite-icon class={CSS.clockIcon} flipRtl={this.iconFlipRtl} icon="clock" scale="s" />
          <span
            aria-label={this.intlHour}
            aria-valuemax="23"
            aria-valuemin="1"
            aria-valuenow={(hourIsNumber && parseInt(this.hour)) || "0"}
            aria-valuetext={this.hour}
            class={{
              [CSS.empty]: !Boolean(this.localizedHour),
              [CSS.hour]: true,
              [CSS.input]: true,
            }}
            onFocus={this.timePartFocusHandler}
            onKeyDown={this.hourKeyDownHandler}
            ref={this.setHourEl}
            role="spinbutton"
            tabIndex={0}
          >
            {this.localizedHour || emptyValue}
          </span>
          <span class={CSS.delimiter}>{this.localizedHourSuffix}</span>
          <span
            aria-label={this.intlMinute}
            aria-valuemax="12"
            aria-valuemin="1"
            aria-valuenow={(minuteIsNumber && parseInt(this.minute)) || "0"}
            aria-valuetext={this.minute}
            class={{
              [CSS.empty]: !Boolean(this.localizedMinute),
              [CSS.input]: true,
              [CSS.minute]: true,
            }}
            onFocus={this.timePartFocusHandler}
            onKeyDown={this.minuteKeyDownHandler}
            ref={this.setMinuteEl}
            role="spinbutton"
            tabIndex={0}
          >
            {this.localizedMinute || emptyValue}
          </span>
          {this.showSecond && <span class={CSS.delimiter}>{this.localizedMinuteSuffix}</span>}
          {this.showSecond && (
            <span
              aria-label={this.intlSecond}
              aria-valuemax="59"
              aria-valuemin="0"
              aria-valuenow={(secondIsNumber && parseInt(this.second)) || "0"}
              aria-valuetext={this.second}
              class={{
                [CSS.empty]: !Boolean(this.localizedSecond),
                [CSS.input]: true,
                [CSS.second]: true,
              }}
              onFocus={this.timePartFocusHandler}
              onKeyDown={this.secondKeyDownHandler}
              ref={this.setSecondEl}
              role="spinbutton"
              tabIndex={0}
            >
              {this.localizedSecond || emptyValue}
            </span>
          )}
          {this.localizedSecondSuffix && (
            <span class={CSS.delimiter}>{this.localizedSecondSuffix}</span>
          )}
          {showMeridiem && (
            <span
              aria-label={this.intlMeridiem}
              aria-valuemax="2"
              aria-valuemin="1"
              aria-valuenow={(this.meridiem === "PM" && "2") || "1"}
              aria-valuetext={this.meridiem}
              class={{
                [CSS.empty]: !Boolean(this.localizedMeridiem),
                [CSS.input]: true,
                [CSS.meridiem]: true,
                [CSS.meridiemStart]: this.meridiemOrder === 0,
              }}
              onFocus={this.timePartFocusHandler}
              onKeyDown={this.meridiemKeyDownHandler}
              ref={this.setMeridiemEl}
              role="spinbutton"
              tabIndex={0}
            >
              {this.localizedMeridiem || emptyValue}
            </span>
          )}
        </div>
        <HiddenFormInputSlot component={this} />
      </Host>
    );
  }
}
