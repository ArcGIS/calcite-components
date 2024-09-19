import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import { connectLabel, disconnectLabel, LabelableComponent } from "../../utils/label";
import {
  InteractiveComponent,
  InteractiveContainer,
  updateHostInteraction,
} from "../../utils/interactive";
import {
  connectLocalized,
  disconnectLocalized,
  LocalizedComponent,
  SupportedLocale,
} from "../../utils/locale";
import { Scale, Status } from "../interfaces";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";
import { OverlayPositioning } from "../../utils/floating-ui";
import {
  componentFocusable,
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import {
  afterConnectDefaultValueSet,
  connectForm,
  disconnectForm,
  FormComponent,
  HiddenFormInputSlot,
  MutableValidityState,
} from "../../utils/form";
import { IconNameOrString } from "../icon/interfaces";
import { CSS } from "./resources";
import {
  createTimeZoneItems,
  findTimeZoneItemByProp,
  getMessageOrKeyFallback,
  getSelectedRegionTimeZoneLabel,
  getUserTimeZoneName,
  getUserTimeZoneOffset,
} from "./utils";
import { InputTimeZoneMessages } from "./assets/input-time-zone/t9n";
import { OffsetStyle, TimeZoneItem, TimeZoneItemGroup, TimeZoneMode } from "./interfaces";

@Component({
  tag: "calcite-input-time-zone",
  styleUrl: "input-time-zone.scss",
  assetsDirs: ["assets"],
  shadow: {
    delegatesFocus: true,
  },
})
export class InputTimeZone
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
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When `true`, an empty value (`null`) will be allowed as a `value`.
   *
   * When `false`, an offset or name value is enforced, and clearing the input or blurring will restore the last valid `value`.
   */
  @Prop({ reflect: true }) clearable = false;

  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The `id` of the form that will be associated with the component.
   *
   * When not set, the component will be associated with its ancestor form element, if any.
   */
  @Prop({ reflect: true }) form: string;

  /** Specifies the component's maximum number of options to display before displaying a scrollbar. */
  @Prop({ reflect: true }) maxItems = 0;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: InputTimeZoneMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<InputTimeZoneMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * This specifies the type of `value` and the associated options presented to the user:
   *
   * Using `"offset"` will provide options that show timezone offsets.
   *
   * Using `"name"` will provide options that show the IANA time zone names.
   *
   * @default "offset"
   */
  @Prop({ reflect: true }) mode: TimeZoneMode = "offset";

  @Watch("messages")
  @Watch("mode")
  @Watch("referenceDate")
  handleTimeZoneItemPropsChange(): void {
    this.updateTimeZoneItemsAndSelection();
  }

  /**
   * Specifies how the offset will be displayed, where
   *
   * `"user"` uses `UTC` or `GMT` depending on the user's locale,
   * `"gmt"` always uses `GMT`, and
   * `"utc"` always uses `UTC`.
   *
   * This only applies to the `offset` mode.
   *
   * @default "user"
   */
  @Prop({ reflect: true }) offsetStyle: OffsetStyle = "user";

  /** Specifies the validation message to display under the component. */
  @Prop() validationMessage: string;

  /** Specifies the validation icon to display under the component. */
  @Prop({ reflect: true }) validationIcon: IconNameOrString | boolean;

  /**
   * The current validation state of the component.
   *
   * @readonly
   * @mdn [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated in form util when syncing hidden input
  @Prop({ mutable: true }) validity: MutableValidityState = {
    valid: false,
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
  };

  /**
   * Specifies the name of the component.
   *
   * Required to pass the component's `value` on form submission.
   */
  @Prop({ reflect: true }) name: string;

  /** When `true`, displays and positions the component. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @Watch("open")
  openChanged(): void {
    // we set the property instead of the attribute to ensure open/close events are emitted properly
    this.comboboxEl.open = this.open;
  }

  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * `"fixed"` should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  @Prop({ reflect: true }) overlayPositioning: OverlayPositioning = "absolute";

  /**
   * This `date` will be used as a reference to Daylight Savings Time when creating time zone item groups.
   *
   * It can be either a Date instance or a string in ISO format (`"YYYY-MM-DD"`, `"YYYY-MM-DDTHH:MM:SS.SSSZ"`).
   *
   * @see [Date.prototype.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   */
  @Prop() referenceDate: Date | string;

  /**
   * When `true`, the component must have a value in order for the form to submit.
   *
   * @internal
   */
  @Prop({ reflect: true }) required = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  /** Specifies the status of the input field, which determines message and icons. */
  @Prop({ reflect: true }) status: Status = "idle";

  /**
   * The component's value, where the value is the time zone offset or the difference, in minutes, between the selected time zone and UTC.
   *
   * If no value is provided, the user's time zone offset will be selected by default.
   *
   * @see https://www.w3.org/International/core/2005/09/timezone.html#:~:text=What%20is%20a%20%22zone%20offset,or%20%22%2D%22%20from%20UTC.
   */
  @Prop({ mutable: true }) value: string;

  @Watch("value")
  handleValueChange(value: string, oldValue: string): void {
    value = this.normalizeValue(value);

    if (!value && this.clearable) {
      this.value = value;
      this.selectedTimeZoneItem = null;
      return;
    }

    const timeZoneItem = this.findTimeZoneItem(value);

    if (!timeZoneItem) {
      this.value = oldValue;
      return;
    }

    this.selectedTimeZoneItem = timeZoneItem;
  }

  /**
   * When `true`, the component's value can be read, but controls are not accessible and the value cannot be modified.
   */
  @Prop({ reflect: true }) readOnly = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  @Method()
  async setFocus(): Promise<void> {
    await componentFocusable(this);
    await this.comboboxEl.setFocus();
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when the component is requested to be closed and before the closing transition begins.
   */
  @Event({ cancelable: false }) calciteInputTimeZoneBeforeClose: EventEmitter<void>;

  /**
   * Fires when the component is added to the DOM but not rendered, and before the opening transition begins.
   */
  @Event({ cancelable: false }) calciteInputTimeZoneBeforeOpen: EventEmitter<void>;

  /**
   * Fires when the component's `value` changes.
   */
  @Event({ cancelable: false }) calciteInputTimeZoneChange: EventEmitter<void>;

  /**
   * Fires after the component is closed and animation is complete.
   */
  @Event({ cancelable: false }) calciteInputTimeZoneClose: EventEmitter<void>;

  /**
   * Fires after the component is opened and animation is complete.
   */
  @Event({ cancelable: false }) calciteInputTimeZoneOpen: EventEmitter<void>;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteInputTimeZoneElement;

  private comboboxEl: HTMLCalciteComboboxElement;

  @State() defaultMessages: InputTimeZoneMessages;

  defaultValue: InputTimeZone["value"];

  @State() effectiveLocale: SupportedLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleWatcher(): void {
    updateMessages(this, this.effectiveLocale);
  }

  formEl: HTMLFormElement;

  labelEl: HTMLCalciteLabelElement;

  private selectedTimeZoneItem: TimeZoneItem;

  private timeZoneItems: TimeZoneItem[] | TimeZoneItemGroup[];

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  onLabelClick(): void {
    this.setFocus();
  }

  private setComboboxRef = (el: HTMLCalciteComboboxElement): void => {
    this.comboboxEl = el;
  };

  /**
   * Helps override the selected item's label for region mode outside of item rendering logic to avoid flickering text change
   *
   * @param open
   * @private
   */
  private overrideSelectedLabelForRegion(open: boolean): void {
    if (this.mode !== "region" || !this.selectedTimeZoneItem) {
      return;
    }

    const { label, metadata } = this.selectedTimeZoneItem;
    this.comboboxEl.selectedItems[0].textLabel = open
      ? label
      : getSelectedRegionTimeZoneLabel(label, metadata.country, this.messages);
  }

  private onComboboxBeforeClose = (event: CustomEvent): void => {
    event.stopPropagation();
    this.overrideSelectedLabelForRegion(false);
    this.calciteInputTimeZoneBeforeClose.emit();
  };

  private onComboboxBeforeOpen = (event: CustomEvent): void => {
    event.stopPropagation();
    this.overrideSelectedLabelForRegion(true);
    this.calciteInputTimeZoneBeforeOpen.emit();
  };

  private onComboboxChange = (event: CustomEvent): void => {
    event.stopPropagation();
    const combobox = event.target as HTMLCalciteComboboxElement;
    const selectedItem = combobox.selectedItems[0];

    if (!selectedItem) {
      this.value = null;
      this.selectedTimeZoneItem = null;
      this.calciteInputTimeZoneChange.emit();
      return;
    }

    const selected = this.findTimeZoneItemByLabel(selectedItem.textLabel);

    const selectedValue = `${selected.value}`;

    if (this.value === selectedValue && selected.label === this.selectedTimeZoneItem.label) {
      return;
    }

    this.value = selectedValue;
    this.selectedTimeZoneItem = selected;
    this.calciteInputTimeZoneChange.emit();
  };

  private onComboboxClose = (event: CustomEvent): void => {
    event.stopPropagation();
    this.open = false;
    this.calciteInputTimeZoneClose.emit();
  };

  private onComboboxOpen = (event: CustomEvent): void => {
    this.open = true;
    event.stopPropagation();
    this.calciteInputTimeZoneOpen.emit();
  };

  private findTimeZoneItem(value: number | string | null): TimeZoneItem | null {
    return findTimeZoneItemByProp(this.timeZoneItems, "value", value);
  }

  private findTimeZoneItemByLabel(label: string | null): TimeZoneItem | null {
    return findTimeZoneItemByProp(this.timeZoneItems, "label", label);
  }

  private async updateTimeZoneItemsAndSelection(): Promise<void> {
    this.timeZoneItems = await this.createTimeZoneItems();

    if (this.value === "" && this.clearable) {
      this.selectedTimeZoneItem = null;
      return;
    }

    const fallbackValue = this.mode === "offset" ? getUserTimeZoneOffset() : getUserTimeZoneName();
    const valueToMatch = this.value ?? fallbackValue;

    this.selectedTimeZoneItem =
      this.findTimeZoneItem(valueToMatch) || this.findTimeZoneItem(fallbackValue);
  }

  private async createTimeZoneItems(): Promise<TimeZoneItem[] | TimeZoneItemGroup[]> {
    if (!this.effectiveLocale || !this.messages) {
      return [];
    }

    return createTimeZoneItems(
      this.effectiveLocale,
      this.messages,
      this.mode,
      this.referenceDate instanceof Date
        ? this.referenceDate
        : new Date(this.referenceDate ?? Date.now()),
      this.offsetStyle,
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    connectForm(this);
    connectLabel(this);
    connectLocalized(this);
    connectMessages(this);
  }

  disconnectedCallback(): void {
    disconnectForm(this);
    disconnectLabel(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  private normalizeValue(value: string | null): string {
    return value === null ? "" : value;
  }

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    await setUpMessages(this);
    this.value = this.normalizeValue(this.value);

    await this.updateTimeZoneItemsAndSelection();

    const selectedValue = this.selectedTimeZoneItem ? `${this.selectedTimeZoneItem.value}` : null;
    afterConnectDefaultValueSet(this, selectedValue);
    this.value = selectedValue;
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
    this.overrideSelectedLabelForRegion(this.open);
    this.openChanged();
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  render(): VNode {
    return (
      <Host>
        <InteractiveContainer disabled={this.disabled}>
          <calcite-combobox
            clearDisabled={!this.clearable}
            disabled={this.disabled}
            label={this.messages.chooseTimeZone}
            lang={this.effectiveLocale}
            maxItems={this.maxItems}
            onCalciteComboboxBeforeClose={this.onComboboxBeforeClose}
            onCalciteComboboxBeforeOpen={this.onComboboxBeforeOpen}
            onCalciteComboboxChange={this.onComboboxChange}
            onCalciteComboboxClose={this.onComboboxClose}
            onCalciteComboboxOpen={this.onComboboxOpen}
            overlayPositioning={this.overlayPositioning}
            placeholder={
              this.mode === "name"
                ? this.messages.namePlaceholder
                : this.mode === "offset"
                  ? this.messages.offsetPlaceholder
                  : this.messages.regionPlaceholder
            }
            placeholderIcon="search"
            readOnly={this.readOnly}
            ref={this.setComboboxRef}
            scale={this.scale}
            selectionMode={this.clearable ? "single" : "single-persist"}
            status={this.status}
            validation-icon={this.validationIcon}
            validation-message={this.validationMessage}
          >
            {this.renderItems()}
          </calcite-combobox>
          <HiddenFormInputSlot component={this} />
        </InteractiveContainer>
      </Host>
    );
  }

  private renderItems(): VNode[] {
    if (this.mode === "region") {
      return this.renderRegionItems();
    }

    return this.timeZoneItems.map((group) => {
      const selected = this.selectedTimeZoneItem === group;
      const { label, value } = group;

      return (
        <calcite-combobox-item
          data-value={value}
          key={label}
          selected={selected}
          textLabel={label}
          value={`${group.filterValue}`}
        />
      );
    });
  }

  private renderRegionItems(): VNode[] {
    return (this.timeZoneItems as TimeZoneItemGroup[]).flatMap(({ label, items }) => (
      <calcite-combobox-item-group
        key={label}
        label={getMessageOrKeyFallback(this.messages, label)}
      >
        {items.map((item) => {
          const selected = this.selectedTimeZoneItem === item;
          const { label, value } = item;

          return (
            <calcite-combobox-item
              data-value={value}
              description={getMessageOrKeyFallback(this.messages, item.metadata.country)}
              key={label}
              metadata={item.metadata}
              selected={selected}
              textLabel={label}
              value={`${item.filterValue}`}
            >
              <span class={CSS.offset} slot="content-end">
                {item.metadata.offset}
              </span>
            </calcite-combobox-item>
          );
        })}
      </calcite-combobox-item-group>
    ));
  }
}
