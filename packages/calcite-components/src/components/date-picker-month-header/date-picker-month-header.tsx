import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import {
  dateFromRange,
  parseCalendarYear,
  getOrder,
  nextMonth,
  prevMonth,
  formatCalendarYear,
  requestedMonth,
} from "../../utils/date";

import { closestElementCrossShadowBoundary } from "../../utils/dom";
import { isActivationKey } from "../../utils/key";
import { numberStringFormatter } from "../../utils/locale";
import { DatePickerMessages } from "../date-picker/assets/date-picker/t9n";
import { DateLocaleData } from "../date-picker/utils";
import { HeadingLevel } from "../functional/Heading";
import { Scale } from "../interfaces";
import { CSS, ICON } from "./resources";
import { getIconScale } from "../../utils/component";

@Component({
  tag: "calcite-date-picker-month-header",
  styleUrl: "date-picker-month-header.scss",
  shadow: true,
})
export class DatePickerMonthHeader {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** Already selected date. */
  @Prop() selectedDate: Date;

  /** The focused date is indicated and will become the selected date if the user proceeds. */
  @Prop() activeDate: Date;

  /**
   * Specifies the number at which section headings should start.
   */
  @Prop() headingLevel: HeadingLevel;

  /** Specifies the earliest allowed date (`"yyyy-mm-dd"`). */
  @Prop() min: Date;

  /** Specifies the latest allowed date (`"yyyy-mm-dd"`). */
  @Prop() max: Date;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale;

  /** CLDR locale data for translated calendar info. */
  @Prop() localeData: DateLocaleData;

  /**
   * This property specifies accessible strings for the component's previous month button ,next month button & year input elements.
   * Made into a prop for testing purposes only.
   *
   * @internal
   * @readonly
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: DatePickerMessages;

  /** @internal */
  @Prop() position: "start" | "end";

  @Prop() monthAbbreviations: boolean;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------
  /**
   *  Fires to active date
   *
   * @internal
   */
  @Event({ cancelable: false }) calciteInternalDatePickerMonthHeaderSelect: EventEmitter<Date>;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  componentWillLoad(): void {
    this.parentDatePickerEl = closestElementCrossShadowBoundary(
      this.el,
      "calcite-date-picker",
    ) as HTMLCalciteDatePickerElement;
  }

  connectedCallback(): void {
    this.setNextPrevMonthDates();
  }

  render(): VNode {
    return <div class={CSS.header}>{this.renderContent()}</div>;
  }

  renderContent(): VNode {
    const { messages, localeData, activeDate } = this;
    if (!activeDate || !localeData) {
      return null;
    }

    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;

      numberStringFormatter.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale }),
      };
    }

    const activeMonth = activeDate.getMonth();
    const { months, unitOrder } = localeData;
    const order = getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");

    return (
      <Fragment>
        {this.position !== "end" && (
          <div class="chevron-container">
            <a
              aria-disabled={`${
                this.prevMonthDate.getMonth() === activeMonth || this.min > this.activeDate
              }`}
              aria-label={messages.prevMonth}
              class={CSS.chevron}
              href="#"
              onClick={this.prevMonthClick}
              onKeyDown={this.prevMonthKeydown}
              role="button"
              tabindex={
                this.prevMonthDate.getMonth() === activeMonth || this.min > this.activeDate ? -1 : 0
              }
            >
              <calcite-icon flip-rtl icon={ICON.chevronLeft} scale={getIconScale(this.scale)} />
            </a>
          </div>
        )}
        <div class={{ text: true, [CSS.textReverse]: reverse }}>
          {this.renderMonthPicker(months, activeMonth)}
          {this.renderYearPicker()}
        </div>
        {this.position !== "start" && (
          <div class="chevron-container">
            <a
              aria-disabled={`${this.nextMonthDate.getMonth() === activeMonth}`}
              aria-label={messages.nextMonth}
              class={CSS.chevron}
              href="#"
              onClick={this.nextMonthClick}
              onKeyDown={this.nextMonthKeydown}
              role="button"
              tabindex={this.nextMonthDate.getMonth() === activeMonth ? -1 : 0}
            >
              <calcite-icon flip-rtl icon={ICON.chevronRight} scale={getIconScale(this.scale)} />
            </a>
          </div>
        )}
      </Fragment>
    );
  }

  private renderMonthPicker(months: DateLocaleData["months"], activeMonth: number): VNode {
    const monthData = this.monthAbbreviations ? months.abbreviated : months.wide;
    return (
      <calcite-select label={"month"} onCalciteSelectChange={this.handleMonthChange} width="full">
        {monthData.map((month: string, index: number) => {
          return (
            <calcite-option selected={index === activeMonth} value={month}>
              {month}
            </calcite-option>
          );
        })}
      </calcite-select>
    );
  }

  private renderYearPicker(): VNode {
    this.getYearList();
    return (
      <calcite-select
        label={"year"}
        onCalciteSelectChange={this.handleYearChange}
        width="full"
        // eslint-disable-next-line react/jsx-sort-props
        ref={(el) => (this.yearPickerEl = el)}
      >
        {this.yearList?.map((year: number) => {
          const yearString = year.toString();
          return (
            <calcite-option selected={this.activeDate.getFullYear() === year} value={yearString}>
              {numberStringFormatter?.localize(yearString)}
              {this.localeData?.year?.suffix}
            </calcite-option>
          );
        })}
      </calcite-select>
    );
  }

  private getYearList(): void {
    this.yearList = [];
    for (let i = this.min?.getFullYear() || 1900; i <= (this.max?.getFullYear() || 2100); i++) {
      this.yearList.push(i);
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteDatePickerMonthHeaderElement;

  private parentDatePickerEl: HTMLCalciteDatePickerElement;

  private yearPickerEl: HTMLCalciteSelectElement;

  @State() nextMonthDate: Date;

  @State() prevMonthDate: Date;

  private yearList: number[] = [];

  @Watch("min")
  @Watch("max")
  @Watch("activeDate")
  setNextPrevMonthDates(): void {
    if (!this.activeDate) {
      return;
    }

    this.nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
    this.prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private handleYearChange = (event: Event): void => {
    const target = event.target as HTMLCalciteSelectElement;
    this.setYear({
      localizedYear: numberStringFormatter.localize(
        `${parseCalendarYear(Number(target.value), this.localeData)}`,
      ),
    });
  };

  private prevMonthClick = (event: KeyboardEvent | MouseEvent): void => {
    this.handleArrowClick(event, this.prevMonthDate);
  };

  private prevMonthKeydown = (event: KeyboardEvent): void => {
    if (isActivationKey(event.key)) {
      this.prevMonthClick(event);
    }
  };

  private nextMonthClick = (event: MouseEvent | KeyboardEvent): void => {
    this.handleArrowClick(event, this.nextMonthDate);
  };

  private nextMonthKeydown = (event: KeyboardEvent): void => {
    if (isActivationKey(event.key)) {
      this.nextMonthClick(event);
    }
  };

  /*
   * Update active month on clicks of left/right arrows
   */
  private handleArrowClick = (event: MouseEvent | KeyboardEvent, date: Date): void => {
    event.preventDefault();
    this.calciteInternalDatePickerMonthHeaderSelect.emit(date);
  };

  handleMonthChange = (event: CustomEvent): void => {
    const target = event.target as HTMLCalciteOptionElement;
    const { abbreviated, wide } = this.localeData.months;
    const localeMonths = this.monthAbbreviations ? abbreviated : wide;
    const monthIndex = localeMonths.indexOf(target.value);
    const newDate = requestedMonth(this.activeDate, monthIndex);
    this.calciteInternalDatePickerMonthHeaderSelect.emit(newDate);
  };

  private getInRangeDate({
    localizedYear,
    offset = 0,
  }: {
    localizedYear: string;
    offset?: number;
  }): Date {
    const { min, max, activeDate } = this;
    const parsedYear = Number(numberStringFormatter.delocalize(localizedYear));
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange =
      year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year as number);
      return dateFromRange(nextDate, min, max);
    }
  }

  /**
   * Parse localized year string from input,
   * set to active if in range
   *
   * @param root0
   * @param root0.localizedYear
   * @param root0.commit
   * @param root0.offset
   */
  private setYear({
    localizedYear,
    commit = true,
    offset = 0,
  }: {
    localizedYear: string;
    commit?: boolean;
    offset?: number;
  }): void {
    const { activeDate } = this;
    const inRangeDate = this.getInRangeDate({ localizedYear, offset });

    // if you've supplied a year and it's in range, update active date
    if (inRangeDate) {
      this.calciteInternalDatePickerMonthHeaderSelect.emit(inRangeDate);
    }

    if (commit) {
      this.yearPickerEl.value = formatCalendarYear(
        (inRangeDate || activeDate).getFullYear(),
        this.localeData,
      ).toString();
    }
  }
}
