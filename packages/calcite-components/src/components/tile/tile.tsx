import { Component, Element, h, Prop, State, VNode } from "@stencil/core";
import {
  connectInteractive,
  disconnectInteractive,
  InteractiveComponent,
  InteractiveContainer,
  updateHostInteraction,
} from "../../utils/interactive";
import { CSS, ICONS, SLOTS } from "./resources";
import { Alignment, Scale, SelectionAppearance, SelectionMode } from "../interfaces";
import { slotChangeHasAssignedElement } from "../../utils/dom";

/**
 * @slot content-start - A slot for adding non-actionable elements before the component's content.
 * @slot content-end - A slot for adding non-actionable elements after the component's content.
 */
@Component({
  tag: "calcite-tile",
  styleUrl: "tile.scss",
  shadow: true,
})
export class Tile implements InteractiveComponent {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When `true`, the component is active.
   */
  @Prop({ reflect: true }) active = false;

  /**
   * Specifies the alignment of the Tile's content.
   */
  @Prop({ reflect: true }) alignment: Exclude<Alignment, "end"> = "start";

  /**
   * A description for the component, which displays below the heading.
   */
  @Prop({ reflect: true }) description: string;

  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The component's embed mode.
   *
   * When `true`, renders without a border and padding for use by other components.
   */
  @Prop({ reflect: true }) embed = false;

  /**
   * The focused state of the component.
   *
   * @internal
   */
  @Prop({ reflect: true }) focused = false;

  /** The component header text, which displays between the icon and description. */
  @Prop({ reflect: true }) heading: string;

  /** When embed is `"false"`, the URL for the component. */
  @Prop({ reflect: true }) href: string;

  /** Specifies an icon to display. */
  @Prop({ reflect: true }) icon: string;

  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */

  @Prop({ reflect: true }) iconFlipRtl = false;

  /**
   * When `true` and the parent's `selectionMode` is `"single"`, `"single-persist"', or `"multiple"`, the component is selected.
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * Specifies the selection appearance, where:
   *
   * - `"icon"` (displays a checkmark or dot), or
   * - `"border"` (displays a border).
   *
   * @internal
   */
  @Prop({ mutable: true }) selectionAppearance: SelectionAppearance = null;

  /**
   * Specifies the selection mode, where:
   *
   * - `"multiple"` (allows any number of selected items),
   * - `"single"` (allows only one selected item),
   * - `"single-persist"` (allows only one selected item and prevents de-selection),
   * - `"none"` (allows no selected items).
   *
   * @internal
   */
  @Prop({ mutable: true }) selectionMode: Extract<"multiple" | "none" | "single" | "single-persist", SelectionMode> = "none";

  /**
   * Specifies the size of the component.
   */
  @Prop({ reflect: true }) scale: Scale = "m";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTileElement;

  @State() hasContentStart = false;

  @State() hasContentEnd = false;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private handleContentStartSlotChange = (event: Event): void => {
    this.hasContentStart = slotChangeHasAssignedElement(event);
  };

  private handleContentEndSlotChange = (event: Event): void => {
    this.hasContentEnd = slotChangeHasAssignedElement(event);
  };

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    connectInteractive(this);
  }

  disconnectedCallback(): void {
    disconnectInteractive(this);
  }

  componentDidRender(): void {
    updateHostInteraction(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderSelected(): VNode {
    const { selected, selectionAppearance, selectionMode } = this;
    if (selectionMode === "none") {
      return;
    }
    return (
      <calcite-icon
        icon={
          selected
            ? selectionMode === "multiple"
              ? ICONS.selectedMultiple
              : ICONS.selectedSingle
            : selectionMode === "multiple"
              ? ICONS.unselectedMultiple
              : ICONS.unselectedSingle
        }
        scale="s"
      />
    );
  }

  renderTile(): VNode {
    const { icon, hasContentStart, hasContentEnd, heading, description, iconFlipRtl } = this;
    const isLargeVisual = heading && icon && !description;

    return (
      <div class={{ [CSS.container]: true, [CSS.largeVisual]: isLargeVisual }}>
        {this.renderSelected()}
        <div>
          {icon && <calcite-icon flipRtl={iconFlipRtl} icon={icon} scale="l" />}
          <div class={CSS.contentContainer}>
            <div class={{ [CSS.contentSlotContainer]: hasContentStart }}>
              <slot name={SLOTS.contentStart} onSlotchange={this.handleContentStartSlotChange} />
            </div>
            <div class={CSS.content}>
              {heading && <div class={CSS.heading}>{heading}</div>}
              {description && <div class={CSS.description}>{description}</div>}
            </div>
            <div class={{ [CSS.contentSlotContainer]: hasContentEnd }}>
              <slot name={SLOTS.contentEnd} onSlotchange={this.handleContentEndSlotChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render(): VNode {
    const { disabled } = this;

    return (
      <InteractiveContainer disabled={disabled}>
        {this.href ? (
          <calcite-link disabled={disabled} href={this.href}>
            {this.renderTile()}
          </calcite-link>
        ) : (
          this.renderTile()
        )}
      </InteractiveContainer>
    );
  }
}
