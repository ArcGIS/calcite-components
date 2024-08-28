import { Component, Element, Fragment, h, Listen, Prop, State, VNode, Watch } from "@stencil/core";
import { Scale } from "../interfaces";
import { getSlotAssignedElements, slotChangeGetAssignedElements } from "../../utils/dom";
import { TabLayout, TabPosition } from "./interfaces";
import { SLOTS } from "./resources";

/**
 * @slot - A slot for adding `calcite-tab`s.
 * @slot title-group - A slot for adding a `calcite-tab-nav`.
 */
@Component({
  tag: "calcite-tabs",
  styleUrl: "tabs.scss",
  shadow: true,
})
export class Tabs {
  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Specifies the layout of the `calcite-tab-nav`, justifying the `calcite-tab-title`s to the start (`"inline"`), or across and centered (`"center"`).
   */
  @Prop({ reflect: true }) layout: TabLayout = "inline";

  /**
   * Specifies the position of `calcite-tab-nav` and `calcite-tab-title` components in relation to the `calcite-tabs`.
   */
  @Prop({ reflect: true }) position: TabPosition = "top";

  /**
   * Specifies the size of the component.
   */
  @Prop({ reflect: true }) scale: Scale = "m";

  @Watch("position")
  @Watch("scale")
  handleInheritableProps(): void {
    this.updateItems();
  }

  /**
   * When `true`, the component will display with a folder style menu.
   */
  @Prop() bordered = false;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("calciteInternalTabNavSlotChange")
  calciteInternalTabNavSlotChangeHandler(event: CustomEvent): void {
    event.stopPropagation();
    if (event.detail.length !== this.titles.length) {
      this.titles = event.detail;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteTabsElement;

  private defaultSlotChangeHandler = (event): void => {
    this.tabs = slotChangeGetAssignedElements(event, "calcite-tab") as HTMLCalciteTabElement[];
  };

  private slotEl: HTMLSlotElement;

  /**
   *
   * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
   * attributes.
   */
  @State() titles: HTMLCalciteTabTitleElement[] = [];

  @Watch("titles")
  titlesWatcher(): void {
    this.updateAriaSettings();
    this.updateItems();
  }

  /**
   *
   * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
   */
  @State() tabs: HTMLCalciteTabElement[] = [];

  @Watch("tabs")
  tabsWatcher(): void {
    this.updateAriaSettings();
    this.updateItems();
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  async updateAriaSettings(): Promise<void> {
    let tabIds;
    let titleIds;
    const tabs = getSlotAssignedElements<HTMLCalciteTabElement>(this.slotEl, "calcite-tab");

    // determine if we are using `tab` based or `index` based tab identifiers.
    if (tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
      // if we are using `tab` based identifiers sort by `tab` to account for
      // possible out of order tabs and get the id of each tab
      tabIds = tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
    } else {
      // if we are using index based tabs then the `<calcite-tab>` and
      // `<calcite-tab-title>` might have been rendered out of order so the
      // order of `this.tabs` and `this.titles` might not reflect the DOM state,
      // and might not match each other so we need to get the index of all the
      // tabs and titles in the DOM order to match them up as a source of truth
      const tabDomIndexes = await Promise.all(tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));

      // once we have the DOM order as a source of truth we can build the
      // matching tabIds and titleIds arrays
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = tabs[registryIndex].id;
        return ids;
      }, []);

      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }

    // pass all our new aria information to each `<calcite-tab>` and
    // `<calcite-tab-title>` which will check if they can update their internal
    // `controlled` or `labeledBy` states and re-render if necessary
    tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
  }

  private updateItems(): void {
    const { position, scale } = this;

    const nav = this.el.querySelector("calcite-tab-nav");
    if (nav) {
      nav.position = position;
      nav.scale = scale;
    }

    Array.from(this.el.querySelectorAll("calcite-tab")).forEach((tab: HTMLCalciteTabElement) => {
      if (tab.parentElement === this.el) {
        tab.scale = scale;
      }
    });

    Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach(
      (title: HTMLCalciteTabTitleElement) => {
        title.position = position;
        title.scale = scale;
      },
    );
  }

  private setDefaultSlotRef = (el) => (this.slotEl = el);

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.updateItems();
  }

  async componentWillLoad(): Promise<void> {
    this.updateItems();
  }

  disconnectedCallback(): void {}

  render(): VNode {
    return (
      <Fragment>
        <slot name={SLOTS.titleGroup} />
        <section>
          <slot onSlotchange={this.defaultSlotChangeHandler} ref={this.setDefaultSlotRef} />
        </section>
      </Fragment>
    );
  }
}
