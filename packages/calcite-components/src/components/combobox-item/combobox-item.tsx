import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  VNode,
  Watch,
} from "@stencil/core";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent,
} from "../../utils/conditionalSlot";
import { getSlotted } from "../../utils/dom";
import { guid } from "../../utils/guid";
import {
  connectInteractive,
  disconnectInteractive,
  InteractiveComponent,
  InteractiveContainer,
  updateHostInteraction,
} from "../../utils/interactive";
import { ComboboxChildElement } from "../combobox/interfaces";
import { getAncestors, getDepth, isSingleLike } from "../combobox/utils";
import { Scale, SelectionMode } from "../interfaces";
import { getIconScale } from "../../utils/component";
import { IconName } from "../icon/interfaces";
import { CSS } from "./resources";

/**
 * @slot - A slot for adding nested `calcite-combobox-item`s.
 */
@Component({
  tag: "calcite-combobox-item",
  styleUrl: "combobox-item.scss",
  shadow: true,
})
export class ComboboxItem implements ConditionalSlotComponent, InteractiveComponent {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When `true`, the component is selected.
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /** When `true`, the component is active. */
  @Prop({ reflect: true }) active = false;

  /** Specifies the parent and grandparent items, which are set on `calcite-combobox`. */
  @Prop({ mutable: true }) ancestors: ComboboxChildElement[];

  /** The `id` attribute of the component. When omitted, a globally unique identifier is used. */
  @Prop({ reflect: true }) guid = guid();

  /** Specifies an icon to display. */
  @Prop({ reflect: true }) icon: IconName;

  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  @Prop({ reflect: true }) iconFlipRtl = false;

  @Watch("selected")
  selectedWatchHandler(): void {
    this.calciteComboboxItemChange.emit();
  }

  /** The component's text. */
  @Prop({ reflect: true }) textLabel!: string;

  /**
   * Pattern for highlighting filter text matches.
   *
   * @internal
   */
  @Prop({ reflect: true }) filterTextMatchPattern: RegExp;

  /** The component's value. */
  @Prop() value!: any;

  /**
   * When `true`, omits the component from the `calcite-combobox` filtered search results.
   */
  @Prop({ reflect: true }) filterDisabled: boolean;

  /**
   * Specifies the selection mode of the component, where:
   *
   * `"multiple"` allows any number of selections,
   *
   * `"single"` allows only one selection,
   *
   * `"single-persist"` allows one selection and prevents de-selection, and
   *
   * `"ancestors"` allows multiple selections, but shows ancestors of selected items as selected, with only deepest children shown in chips.
   *
   * @internal
   */
  @Prop({ reflect: true }) selectionMode: Extract<
    "single" | "single-persist" | "ancestors" | "multiple",
    SelectionMode
  > = "multiple";

  /**
   * Specifies the size of the component inherited from the `calcite-combobox`, defaults to `m`.
   *
   * @internal
   */
  @Prop() scale: Scale = "m";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteComboboxItemElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    this.ancestors = getAncestors(this.el);
    connectConditionalSlotComponent(this);
    connectInteractive(this);
  }

  disconnectedCallback(): void {
    disconnectConditionalSlotComponent(this);
    disconnectInteractive(this);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Fires whenever the component is selected or unselected.
   *
   */
  @Event({ cancelable: false }) calciteComboboxItemChange: EventEmitter<void>;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  toggleSelected(): Promise<void> {
    const isSinglePersistSelect = this.selectionMode === "single-persist";

    if (this.disabled || (isSinglePersistSelect && this.selected)) {
      return;
    }

    this.selected = !this.selected;
  }

  private itemClickHandler = (): void => {
    this.toggleSelected();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon(iconPath: IconName): VNode {
    return this.icon ? (
      <calcite-icon
        class={{
          [CSS.custom]: !!this.icon,
          [CSS.iconActive]: this.icon && this.selected,
          [CSS.iconIndent]: true,
        }}
        flipRtl={this.iconFlipRtl}
        icon={this.icon || iconPath}
        key="icon"
        scale={getIconScale(this.scale)}
      />
    ) : null;
  }

  renderSelectIndicator(showDot: boolean): VNode;
  renderSelectIndicator(showDot: boolean, iconPath: IconName): VNode;
  renderSelectIndicator(showDot: boolean, iconPath?: IconName): VNode {
    return showDot ? (
      <span
        class={{
          [CSS.icon]: true,
          [CSS.dot]: true,
          [CSS.iconIndent]: true,
        }}
      />
    ) : (
      <calcite-icon
        class={{
          [CSS.icon]: true,
          [CSS.iconActive]: this.selected,
          [CSS.iconIndent]: true,
        }}
        flipRtl={this.iconFlipRtl}
        icon={iconPath}
        key="indicator"
        scale={getIconScale(this.scale)}
      />
    );
  }

  renderChildren(): VNode {
    if (getSlotted(this.el)) {
      return (
        <ul key="default-slot-container">
          <slot />
        </ul>
      );
    }

    return null;
  }

  render(): VNode {
    const { disabled } = this;
    const isSingleSelect = isSingleLike(this.selectionMode);
    const showDot = isSingleSelect && !disabled;
    const defaultIcon = isSingleSelect ? undefined : "check";
    const iconPath = disabled ? undefined : defaultIcon;

    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.selected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect,
    };
    const depth = getDepth(this.el);

    return (
      <Host aria-hidden="true">
        <InteractiveContainer disabled={disabled}>
          <div
            class={`container scale--${this.scale}`}
            style={{ "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` }}
          >
            <li class={classes} id={this.guid} onClick={this.itemClickHandler}>
              {this.renderSelectIndicator(showDot, iconPath)}
              {this.renderIcon(iconPath)}
              <span class="title">{this.renderTextContent()}</span>
            </li>
            {this.renderChildren()}
          </div>
        </InteractiveContainer>
      </Host>
    );
  }

  private renderTextContent(): string | (string | VNode)[] {
    if (!this.filterTextMatchPattern) {
      return this.textLabel;
    }

    const parts: (string | VNode)[] = this.textLabel.split(this.filterTextMatchPattern);

    if (parts.length > 1) {
      // we only highlight the first match
      parts[1] = <mark class={CSS.filterMatch}>{parts[1]}</mark>;
    }

    return parts;
  }
}
