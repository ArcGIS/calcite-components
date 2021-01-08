import { Component, Element, Host, h, Prop, VNode, State } from "@stencil/core";

const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

@Component({
  tag: "calcite-time-picker",
  styleUrl: "calcite-time-picker.scss",
  shadow: true
})
export class CalciteTimePicker {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteTimePickerElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** The focused state of the time picker */
  @Prop({ reflect: true }) focused = false;

  /** The scale (size) of the time picker */
  @Prop({ reflect: true }) scale: "s" | "m" | "l" = "m";

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @State() hour?: string = "--";

  @State() minute?: string = "--";

  @State() ampm?: string = "--";

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private amPmKeyDownHandler = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "a":
        this.ampm = "AM";
        break;
      case "p":
        this.ampm = "PM";
        break;
      case "Backspace":
        this.ampm = "--";
        break;
      case "ArrowUp":
        this.incrementAmPm();
        break;
      case "ArrowDown":
        this.decrementAmPm();
        break;
      case "Tab":
        return;
    }
    event.preventDefault();
  };

  private decrementAmPm = (): void => {
    switch (this.ampm) {
      case "--":
        this.ampm = "PM";
        break;
      case "AM":
        this.ampm = "PM";
        break;
      case "PM":
        this.ampm = "AM";
        break;
    }
  };

  private decrementHour = (): void => {
    if (this.hour === "--" || this.hour === "01") {
      this.hour = "12";
    } else {
      const hourAsNumber = parseInt(this.hour);
      if (hourAsNumber === 0) {
        this.hour = "12";
      } else {
        const newHour = hourAsNumber - 1;
        this.hour = this.formatNumberAsString(newHour);
      }
    }
  };

  private decrementMinute = (): void => {
    if (this.minute === "--") {
      this.minute = "59";
    } else {
      const minuteAsNumber = parseInt(this.minute);
      if (minuteAsNumber === 0) {
        this.minute = "59";
      } else {
        const newMinute = minuteAsNumber - 1;
        this.minute = this.formatNumberAsString(newMinute);
      }
    }
  };

  private formatNumberAsString(number: number): string {
    return number >= 0 && number <= 9 ? `0${number}` : number.toString();
  }

  private hourKeyDownHandler = (event: KeyboardEvent): void => {
    if (numberKeys.includes(event.key)) {
      const keyAsNumber = parseInt(event.key);
      if (this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2) {
        this.hour = `1${event.key}`;
      } else {
        this.hour = `0${event.key}`;
      }
    } else {
      switch (event.key) {
        case "Backspace":
          this.hour = "--";
          break;
        case "ArrowDown":
          this.decrementHour();
          break;
        case "ArrowUp":
          this.incrementHour();
          break;
      }
    }
  };

  private incrementAmPm = (): void => {
    switch (this.ampm) {
      case "--":
        this.ampm = "AM";
        break;
      case "AM":
        this.ampm = "PM";
        break;
      case "PM":
        this.ampm = "AM";
        break;
    }
  };

  private incrementHour = (): void => {
    if (this.hour === "--") {
      this.hour = "01";
    } else {
      const hourAsNumber = parseInt(this.hour);
      if (hourAsNumber === 12) {
        this.hour = "01";
      } else {
        const newHour = hourAsNumber + 1;
        this.hour = this.formatNumberAsString(newHour);
      }
    }
  };

  private incrementMinute = (): void => {
    if (this.minute === "--") {
      this.minute = "00";
    } else {
      const minuteAsNumber = parseInt(this.minute);
      if (minuteAsNumber === 59) {
        this.minute = "00";
      } else {
        const newMinute = minuteAsNumber + 1;
        this.minute = this.formatNumberAsString(newMinute);
      }
    }
  };

  private minuteKeyDownHandler = (event: KeyboardEvent): void => {
    // TODO: support number constraints
    if (numberKeys.includes(event.key)) {
      const keyAsNumber = parseInt(event.key);
      if (this.minute === "01" && keyAsNumber >= 0 && keyAsNumber <= 2) {
        this.minute = `1${event.key}`;
      } else {
        this.minute = `0${event.key}`;
      }
      if (this.minute.length === 2) {
        this.minute = event.key;
      } else {
        this.minute = `${this.minute}${event.key}`;
      }
    } else {
      switch (event.key) {
        case "Backspace":
          this.minute = "--";
          break;
        case "ArrowDown":
          this.decrementMinute();
          break;
        case "ArrowUp":
          this.incrementMinute();
          break;
      }
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    return (
      <Host>
        <slot />
        <div class="time-picker">
          <div class="row">
            <button
              aria-label="increase hour"
              class="top-left"
              onClick={this.incrementHour}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevronup" scale={this.scale} />
            </button>
            <button
              aria-label="increase minute"
              onClick={this.incrementMinute}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevronup" scale={this.scale} />
            </button>
            <button
              aria-label="switch to am or pm"
              class="top-right"
              onClick={this.incrementAmPm}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevronup" scale={this.scale} />
            </button>
          </div>
          <div>
            <span
              aria-label="Hours"
              aria-placeholder="--"
              aria-valuemax="12"
              aria-valuemin="1"
              aria-valuenow="5"
              aria-valuetext="05"
              class="hour"
              onKeyDown={this.hourKeyDownHandler}
              role="spinbutton"
              tabIndex={0}
            >
              {this.hour}
            </span>
            <span
              aria-label="Minutes"
              aria-placeholder="--"
              aria-valuemax="12"
              aria-valuemin="1"
              aria-valuenow="5"
              aria-valuetext="05"
              class="minute"
              onKeyDown={this.minuteKeyDownHandler}
              role="spinbutton"
              tabIndex={0}
            >
              {this.minute}
            </span>
            <span
              aria-label="AM/PM"
              aria-placeholder="--"
              aria-valuemax="12"
              aria-valuemin="1"
              aria-valuenow="5"
              aria-valuetext="05"
              class="ampm"
              onKeyDown={this.amPmKeyDownHandler}
              role="spinbutton"
              tabIndex={0}
            >
              {this.ampm}
            </span>
          </div>
          <div>
            <button
              aria-label="decrease hour"
              class="bottom-left"
              onClick={this.decrementHour}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevrondown" scale={this.scale} />
            </button>
            <button
              aria-label="decrease minute"
              onClick={this.decrementMinute}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevrondown" scale={this.scale} />
            </button>
            <button
              aria-label="switch to am or pm"
              class="bottom-right"
              onClick={this.decrementAmPm}
              tabIndex={-1}
              type="button"
            >
              <calcite-icon icon="chevrondown" scale={this.scale} />
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
