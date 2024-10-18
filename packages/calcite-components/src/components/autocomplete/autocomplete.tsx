import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  Prop,
  State,
  VNode,
  Watch,
  forceUpdate,
  h,
} from "@stencil/core";
import {
  FlipPlacement,
  FloatingCSS,
  FloatingLayout,
  FloatingUIComponent,
  MenuPlacement,
  OverlayPositioning,
  connectFloatingUI,
  defaultMenuPlacement,
  disconnectFloatingUI,
  reposition,
} from "../../utils/floating-ui";
import {
  InteractiveComponent,
  InteractiveContainer,
  updateHostInteraction,
} from "../../utils/interactive";
import {
  LoadableComponent,
  setComponentLoaded,
  setUpLoadableComponent,
} from "../../utils/loadable";
import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
import { Alignment, Scale, Status } from "../interfaces";
import { IconNameOrString } from "../icon/interfaces";
import {
  T9nComponent,
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages,
} from "../../utils/t9n";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import { connectLabel, disconnectLabel, LabelableComponent } from "../../utils/label";
import { TextualInputComponent } from "../input/common/input";
import {
  FormComponent,
  HiddenFormInputSlot,
  MutableValidityState,
  connectForm,
  disconnectForm,
  submitForm,
} from "../../utils/form";
import { slotChangeGetAssignedElements } from "../../utils/dom";
import { CSS, ICONS, SLOTS } from "./resources";
import { AutocompleteMessages } from "./assets/autocomplete/t9n";

/**
 * @slot - A slot for adding `calcite-autocomplete-item` elements.
 * @slot content-end - A slot for adding content above `calcite-autocomplete-item` elements.
 * @slot content-start - A slot for adding content below `calcite-autocomplete-item` elements.
 */
@Component({
  tag: "calcite-autocomplete",
  styleUrl: "autocomplete.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Autocomplete
  implements
    FloatingUIComponent,
    FormComponent,
    InteractiveComponent,
    LabelableComponent,
    LoadableComponent,
    LocalizedComponent,
    OpenCloseComponent,
    T9nComponent,
    TextualInputComponent
{
  floatingLayout?: FloatingLayout;
  //--------------------------------------------------------------------------
  //
  //  Global attributes
  //
  //--------------------------------------------------------------------------

  @Watch("autofocus")
  @Watch("enterkeyhint")
  @Watch("inputmode")
  handleGlobalAttributesChanged(): void {
    forceUpdate(this);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /** Specifies the text alignment of the component's value. */
  @Prop({ reflect: true }) alignment: Extract<"start" | "end", Alignment> = "start";

  /**
   * Specifies the type of content to autocomplete, for use in forms.
   * Read the native attribute's documentation on MDN for more info.
   *
   * @mdn [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
   */
  @Prop() autocomplete: string;

  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  @Prop({ reflect: true }) disabled = false;

  @Watch("disabled")
  handleDisabledChange(value: boolean): void {
    if (!value) {
      this.open = false;
    }
  }

  /**
   * Specifies the component's fallback `placement` when it's initial or specified `placement` has insufficient space available.
   */
  @Prop() flipPlacements: FlipPlacement[];

  @Watch("flipPlacements")
  flipPlacementsHandler(): void {
    this.reposition(true);
  }

  /**
   * The `id` of the form that will be associated with the component.
   *
   * When not set, the component will be associated with its ancestor form element, if any.
   */
  @Prop({ reflect: true }) form: string;

  /**
   * When `true`, shows a default recommended icon. Alternatively, pass a Calcite UI Icon name to display a specific icon.
   */
  @Prop({ reflect: true }) icon: IconNameOrString | boolean;

  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  @Prop({ reflect: true }) iconFlipRtl = false;

  /**
   * The component's input value.
   */
  @Prop() inputValue: string;

  /** Accessible name for the component. */
  @Prop() label: string;

  /** When `true`, a busy indicator is displayed. */
  @Prop({ reflect: true }) loading = false;

  /**
   * Specifies the maximum length of text for the component's value.
   *
   * @mdn [maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength)
   */
  @Prop({ reflect: true }) maxLength: number;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: AutocompleteMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<AutocompleteMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * Specifies the minimum length of text for the component's value.
   *
   * @mdn [minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength)
   */
  @Prop({ reflect: true }) minLength: number;

  /**
   * Specifies the name of the component.
   *
   * Required to pass the component's `value` on form submission.
   *
   * @mdn [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
   */
  @Prop({ reflect: true }) name: string;

  /**
   * When `true`, displays and positions the component.
   */
  @Prop({ reflect: true, mutable: true }) open = false;

  @Watch("open")
  openHandler(): void {
    onToggleOpenCloseComponent(this);

    if (this.disabled) {
      this.open = false;
      return;
    }

    this.reposition(true);
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

  @Watch("overlayPositioning")
  overlayPositioningHandler(): void {
    this.reposition(true);
  }

  /**
   * Specifies a regex pattern the component's `value` must match for validation.
   * Read the native attribute's documentation on MDN for more info.
   *
   * @mdn [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
   */
  @Prop() pattern: string;

  /**
   * Specifies placeholder text for the component.
   *
   * @mdn [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder)
   */
  @Prop() placeholder: string;

  /**
   * Determines where the component will be positioned relative to the container element.
   *
   * @default "bottom-start"
   */
  @Prop({ reflect: true }) placement: MenuPlacement = defaultMenuPlacement;

  @Watch("placement")
  placementHandler(): void {
    this.reposition(true);
  }

  /** Adds text to the start of the component. */
  @Prop() prefixText: string;

  /**
   * When `true`, the component's value can be read, but cannot be modified.
   *
   * @mdn [readOnly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
   */
  @Prop({ reflect: true }) readOnly = false;

  /** When `true`, the component must have a value in order for the form to submit. */
  @Prop({ reflect: true }) required = false;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  @Watch("scale")
  handlePropsChange(): void {
    this.updateItems();
  }

  /** Specifies the status of the input field, which determines message and icons. */
  @Prop({ reflect: true }) status: Status = "idle";

  /** Adds text to the end of the component. */
  @Prop() suffixText: string;

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

  /** Specifies the validation message to display under the component. */
  @Prop() validationMessage: string;

  /**
   * The component's value.
   */
  @Prop() value: string;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  @Method()
  async setFocus(): Promise<void> {
    return this.referenceEl.setFocus();
  }

  /**
   * Selects the text of the component's `value`.
   *
   * @returns {Promise<void>}
   */
  @Method()
  async selectText(): Promise<void> {
    return this.referenceEl.selectText();
  }

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    connectLocalized(this);
    connectMessages(this);
    connectLabel(this);
    connectForm(this);

    if (this.open) {
      this.openHandler();
      onToggleOpenCloseComponent(this);
    }

    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }

  async componentWillLoad(): Promise<void> {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }

  componentDidLoad(): void {
    setComponentLoaded(this);
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  disconnectedCallback(): void {
    disconnectLabel(this);
    disconnectForm(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    disconnectFloatingUI(this, this.referenceEl, this.floatingEl);
  }

  render(): VNode {
    const { disabled, open } = this;

    const autofocus = this.el.autofocus || this.el.hasAttribute("autofocus") ? true : null;
    const enterKeyHint = this.el.getAttribute("enterkeyhint");
    const inputMode = this.el.getAttribute("inputmode");

    // todo: only open if slotted content is present

    return (
      <div class={CSS.container}>
        <InteractiveContainer disabled={disabled}>
          <calcite-input
            alignment={this.alignment}
            autocomplete={this.autocomplete}
            autofocus={autofocus}
            class={CSS.input}
            clearable={true}
            disabled={disabled}
            enterkeyhint={enterKeyHint}
            form={this.form}
            icon={this.getIcon()}
            iconFlipRtl={this.iconFlipRtl}
            inputmode={inputMode}
            label={this.label}
            loading={this.loading}
            maxLength={this.maxLength}
            messageOverrides={this.messages}
            minLength={this.minLength}
            name={this.name}
            onCalciteInputChange={this.changeHandler}
            onCalciteInputInput={this.inputHandler}
            onCalciteInternalInputFocus={this.handleInputFocus}
            onKeyDown={this.keyDownHandler}
            pattern={this.pattern}
            placeholder={this.placeholder}
            prefixText={this.prefixText}
            readOnly={this.readOnly}
            ref={this.setReferenceEl}
            required={this.required}
            scale={this.scale}
            status={this.status}
            suffixText={this.suffixText}
            type="search"
            validationIcon={this.validationIcon}
            validationMessage={this.validationMessage}
            value={this.inputValue}
          />
          <div
            class={{
              [CSS.floatingUIContainer]: true,
              [CSS.floatingUIContainerActive]: open,
            }}
            ref={this.setFloatingEl}
          >
            <div class={{ [FloatingCSS.animation]: true, [FloatingCSS.animationActive]: open }}>
              <div class={CSS.contentStart}>
                <slot name={SLOTS.contentStart} />
              </div>
              <div class={CSS.content}>
                <slot onSlotchange={this.handleDefaultSlotChange} />
              </div>
              <div class={CSS.contentEnd}>
                <slot name={SLOTS.contentEnd} />
              </div>
            </div>
          </div>
          <HiddenFormInputSlot component={this} />
        </InteractiveContainer>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Updates the position of the component.
   *
   * @param delayed - `true` if the placement should be updated after the component is finished rendering.
   * @returns {Promise<void>}
   */
  @Method()
  async reposition(delayed = false): Promise<void> {
    const { floatingEl, referenceEl, placement, overlayPositioning, flipPlacements } = this;

    return reposition(
      this,
      {
        floatingEl,
        referenceEl,
        overlayPositioning,
        placement,
        flipPlacements,
        type: "menu",
      },
      delayed,
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Fires each time a new `inputValue` is typed and committed.
   */
  @Event({ cancelable: false }) calciteAutocompleteTextChange: EventEmitter<void>;

  /**
   * Fires each time a new `inputValue` is typed.
   */
  @Event({ cancelable: false }) calciteAutocompleteTextInput: EventEmitter<void>;

  /**
   * Fires each time a new `value` is typed and committed.
   */
  @Event({ cancelable: false }) calciteAutocompleteChange: EventEmitter<void>;

  /** Fires when the component is requested to be closed and before the closing transition begins. */
  @Event({ cancelable: false }) calciteAutocompleteBeforeClose: EventEmitter<void>;

  /** Fires when the component is closed and animation is complete. */
  @Event({ cancelable: false }) calciteAutocompleteClose: EventEmitter<void>;

  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  @Event({ cancelable: false }) calciteAutocompleteBeforeOpen: EventEmitter<void>;

  /** Fires when the component is open and animation is complete. */
  @Event({ cancelable: false }) calciteAutocompleteOpen: EventEmitter<void>;

  @Listen("click", { target: "document" })
  async documentClickHandler(event: PointerEvent): Promise<void> {
    if (this.disabled || event.composedPath().includes(this.el)) {
      return;
    }

    this.open = false;
  }

  @Listen("calciteInternalAutocompleteItemSelect")
  handleInternalAutocompleteItemSelect(event: Event): void {
    this.value = (event.target as HTMLCalciteAutocompleteItemElement).value;
    event.stopPropagation();
    this.open = false;
    this.calciteAutocompleteChange.emit();
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  @State() defaultMessages: AutocompleteMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  @Element() el: HTMLCalciteAutocompleteElement;

  defaultValue: Autocomplete["value"];

  floatingEl: HTMLDivElement;

  formEl: HTMLFormElement;

  labelEl: HTMLCalciteLabelElement;

  openTransitionProp = "opacity";

  referenceEl: HTMLCalciteInputElement;

  transitionEl: HTMLDivElement;

  private items: HTMLCalciteAutocompleteItemElement[] = [];

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  onLabelClick(): void {
    this.setFocus();
  }

  onBeforeOpen(): void {
    this.calciteAutocompleteBeforeOpen.emit();
  }

  onOpen(): void {
    this.calciteAutocompleteOpen.emit();
  }

  onBeforeClose(): void {
    this.calciteAutocompleteBeforeClose.emit();
  }

  onClose(): void {
    this.calciteAutocompleteClose.emit();
  }

  private updateItems(): void {
    this.items.forEach((item) => (item.scale = this.scale));
  }

  private handleInputFocus = (): void => {
    this.open = true;
  };

  private handleDefaultSlotChange = (event: Event): void => {
    this.items = slotChangeGetAssignedElements(event).filter(
      (el): el is HTMLCalciteAutocompleteItemElement => el.matches("calcite-autocomplete-item"),
    );
    this.updateItems();
  };

  private getIcon(): IconNameOrString {
    const { icon } = this;

    return icon === true ? ICONS.search : icon || ICONS.search;
  }

  private setReferenceEl = (el: HTMLCalciteInputElement): void => {
    this.referenceEl = el;
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  };

  private keyDownHandler = (event: KeyboardEvent): void => {
    const { defaultPrevented, key } = event;

    if (defaultPrevented) {
      return;
    }

    if (key === "Tab") {
      this.open = false; // todo: test with slotted actions
    } else if (key === "Enter") {
      if (submitForm(this)) {
        event.preventDefault();
      }
    }

    console.log(this.items);
    // todo: arrow keys to navigate items
  };

  private changeHandler = (event: CustomEvent): void => {
    event.stopPropagation();
    this.calciteAutocompleteTextChange.emit();
  };

  private inputHandler = (event: CustomEvent): void => {
    event.stopPropagation();

    if (!(event.target as HTMLCalciteInputElement).value) {
      this.open = false;
    }

    this.calciteAutocompleteTextInput.emit();
  };

  private setFloatingEl = (el: HTMLDivElement): void => {
    this.floatingEl = el;
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  };
}
