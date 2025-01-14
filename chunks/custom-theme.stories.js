import { h as t } from "./formatting.js";
import { s as f } from "./cssTokenValues.js";
import { S as d } from "./resources4.js";
import { p as r } from "./placeholder-image.js";
import { S as u } from "./resources5.js";
import { b as T } from "./utils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const A = {
  calciteActionIndicatorColor: "",
  calciteActionBackgroundColor: "",
  calciteActionBackgroundColorHover: "",
  calciteActionBackgroundColorPressed: "",
  calciteActionTextColor: "",
  calciteActionTextColorPressed: ""
}, w = {
  calciteActionBarExpandedMaxWidth: "",
  calciteActionBarItemsSpace: ""
}, I = t`<calcite-action-bar layout="horizontal" style="width:100%">
  <calcite-action-group>
    <calcite-action text="Add" icon="plus"> </calcite-action>
    <calcite-action text="Save" icon="save"> </calcite-action>
    <calcite-action text="Layers" icon="layers"> </calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Add" icon="plus"> </calcite-action>
    <calcite-action text="Save" active icon="save"> </calcite-action>
    <calcite-action text="Layers" icon="layers"> </calcite-action>
  </calcite-action-group>
  <calcite-action slot="actions-end" text="hello world" icon="layers"> </calcite-action>
  <!-- The "bottom-actions" slot is deprecated -->
  <calcite-action slot="bottom-actions" text="hello world 2" icon="information"> </calcite-action>
</calcite-action-bar>`, B = {
  calciteActionGroupBorderColor: "",
  calciteActionGroupColumns: ""
}, S = { calciteActionMenuItemsSpace: "" }, $ = {
  calciteActionPadCornerRadius: "",
  calciteActionPadExpandedMaxWidth: "",
  calciteActionPadItemsSpace: ""
}, y = t`<calcite-action-menu open>
  <calcite-action slot="trigger" text="Add" icon="banana"></calcite-action>
  <calcite-action-group>
    <calcite-action text="Plus" icon="plus" text-enabled></calcite-action
    ><calcite-action text="Minus" icon="minus" text-enabled></calcite-action>
  </calcite-action-group>
  <calcite-action-group> <calcite-action text="Table" icon="table" text-enabled></calcite-action></calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Save" icon="save" text-enabled></calcite-action>
  </calcite-action-group>
</calcite-action-menu>`, P = t`<calcite-action-pad expanded>
  <calcite-action-group>
    <calcite-action text="Add to my custom action pad application" icon="plus"></calcite-action>
    <calcite-action text="Save to my custom action pad application" icon="save"></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Layers in my custom action pad application" icon="layers"></calcite-action>
  </calcite-action-group>
</calcite-action-pad>`, L = {
  calciteAlertWidth: "",
  calciteAlertBackgroundColor: "",
  calciteAlertCornerRadius: "",
  calciteAlertShadow: ""
}, H = t`<calcite-alert label="this is a default alert" scale="s" open>
  <div slot="${d.title}">Test title</div>
  <div slot="${d.message}">Test message</div>
</calcite-alert>`, R = {
  calciteAccordionItemBackgroundColor: "",
  calciteAccordionItemBorderColor: "",
  calciteAccordionItemIconColorEnd: "",
  calciteAccordionItemIconColorStart: "",
  calciteAccordionItemContentSpace: "",
  calciteAccordionItemExpandIconColor: "",
  calciteAccordionItemHeaderBackgroundColor: "",
  calciteAccordionItemHeadingTextColor: "",
  calciteAccordionItemIconColor: "",
  calciteAccordionItemTextColor: ""
}, N = (e) => t`<calcite-accordion-item
    icon-end="car"
    icon-start="layers"
    heading="${e === 0 ? "Accordion Item" : `Accordion Item ${e + 1}`}"
    ><img src="${r({ width: 100, height: 50 })}" />
  </calcite-accordion-item>`, M = t`<calcite-tree lines>
  <calcite-tree-item> Child 1 </calcite-tree-item>
  <calcite-tree-item>
    Child 2
    <calcite-tree slot="children">
      <calcite-tree-item> Grandchild 1 </calcite-tree-item>
      <calcite-tree-item>
        Grandchild 2
        <calcite-tree slot="children">
          <calcite-tree-item> Great-Grandchild 1 </calcite-tree-item>
          <calcite-tree-item> Great-Grandchild 2 </calcite-tree-item>
        </calcite-tree>
      </calcite-tree-item>
    </calcite-tree>
  </calcite-tree-item>
  <calcite-tree-item> Child 3 </calcite-tree-item>
</calcite-tree>`, E = {
  CalciteAccordionBorderColor: "",
  CalciteAccordionBackgroundColor: ""
}, F = t`<style>
    calcite-accordion-item:hover {
      --calcite-accordion-item-background-color: white;
    }
    calcite-accordion-item[expanded] {
      --calcite-accordion-item-header-background-color: #ccc;
    }</style
  ><calcite-accordion>
    ${[0, 1, 2, 3, 4].map((e) => N(e)).join(`
`)}
    <calcite-accordion-item heading="Accordion Item 6" expanded>${M}</calcite-accordion-item>
  </calcite-accordion>`, W = {
  calciteAutocompleteBackgroundColor: "",
  calciteAutocompleteBorderColor: "",
  calciteAutocompleteCornerRadius: "",
  calciteAutocompleteDescriptionTextColor: "",
  calciteAutocompleteHeadingTextColor: "",
  calciteAutocompleteTextColor: "",
  calciteAutocompleteInputBackgroundColor: "",
  calciteAutocompleteInputBorderColor: "",
  calciteAutocompleteInputCornerRadius: "",
  calciteAutocompleteInputShadow: "",
  calciteAutocompleteInputIconColor: "",
  calciteAutocompleteInputTextColor: "",
  calciteAutocompleteInputPlaceholderTextColor: "",
  calciteAutocompleteInputActionsBackgroundColor: "",
  calciteAutocompleteInputActionsBackgroundColorHover: "",
  calciteAutocompleteInputActionsBackgroundColorPress: "",
  calciteAutocompleteInputActionsIconColor: "",
  calciteAutocompleteInputActionsIconColorHover: "",
  calciteAutocompleteInputActionsIconColorPress: "",
  calciteAutocompleteInputLoadingBackgroundColor: "",
  calciteAutocompleteInputLoadingFillColor: "",
  calciteAutocompleteInputPrefixBackgroundColor: "",
  calciteAutocompleteInputPrefixTextColor: "",
  calciteAutocompleteInputSuffixBackgroundColor: "",
  calciteAutocompleteInputSuffixTextColor: ""
}, G = t`<calcite-autocomplete label="Pets">
  <div slot="${u.contentTop}">Top</div>
  <div slot="${u.contentBottom}">Bottom</div>
  <calcite-autocomplete-item-group heading="Dogs">
    <calcite-autocomplete-item label="Rover" value="rover" heading="Rover"></calcite-autocomplete-item>
    <calcite-autocomplete-item label="Fido" value="one" heading="Fido"></calcite-autocomplete-item>
  </calcite-autocomplete-item-group>
  <calcite-autocomplete-item-group heading="Cats">
    <calcite-autocomplete-item label="Felix" value="felix" heading="Felix"></calcite-autocomplete-item>
    <calcite-autocomplete-item label="Garfield" value="garfield" heading="Garfield"></calcite-autocomplete-item>
  </calcite-autocomplete-item-group>
</calcite-autocomplete>`, U = {
  calciteBlockBorderColor: "",
  calciteBlockContentStartColor: "",
  calciteBlockHeaderBackgroundColor: "",
  calciteBlockHeaderDescriptionColor: "",
  calciteBlockHeaderIconColor: "",
  calciteBlockIconColorEnd: "",
  calciteBlockIconColorStart: ""
}, z = t` <calcite-block
  heading="heading"
  description="description"
  open
  collapsible
  icon-end="pen"
  icon-start="pen"
>
  <calcite-icon icon="compass" slot="content-start"></calcite-icon>
  <div>content</div>
</calcite-block>`, D = ["", ""], b = (e) => {
  const [i, a] = Object.entries(e).filter(([c, o]) => c && o && o !== "").reduce(([c, o], [k, s]) => (c += `${k}="${s}" `, o += `${s} `, [c, o]), D);
  return t`<calcite-button ${i.trim()}>${a.trim()}</calcite-button>`;
}, O = t`${b({ appearance: "outline" })} ${b({ kind: "danger" })}`, _ = {
  calciteBlockSectionBorderColor: "",
  calciteBlockSectionHeaderTextColor: "",
  calciteBlockSectionHeaderTextColorHover: "",
  calciteBlockSectionTextColor: ""
}, j = t`
  <calcite-block-section text="Planes" open icon-end="pen" icon-start="pen" text="a block-section">
    <p>Block section content</p>
  </calcite-block-section>
`, V = {
  calciteSwitchBackgroundColor: "",
  calciteSwitchBorderColor: "",
  calciteSwitchHandleBorderColor: "",
  calciteSwitchHandleBackgroundColor: "",
  calciteSwitchHandleShadow: "",
  calciteSwitchCornerRadius: ""
}, Q = t`
  <calcite-label layout="inline">
    <calcite-switch scale="m" checked></calcite-switch>
    Red switch scale medium
  </calcite-label>
`, Y = {
  calciteCardAccentColorSelected: "",
  calciteCardBackgroundColor: "",
  calciteCardBorderColor: "",
  calciteCardSelectIndicatorColorHover: "",
  calciteCardSelectIndicatorColor: "",
  calciteCardCornerRadius: "",
  calciteCardShadow: ""
}, Z = t`<img
  alt="thumbnail"
  slot="thumbnail"
  src="${r({
  width: 380,
  height: 180
})}"
  style="width: 380px;"
/> `, K = t`<calcite-card selected selectable>
  <img alt="thumbnail" slot="thumbnail" style="width:260px" src="${r({ width: 260, height: 160 })}" />
  <h3 slot="title">Selectable card</h3>
  <calcite-link slot="footer-start">Lead füt</calcite-link>
  <calcite-link slot="footer-end">Trail füt</calcite-link>
</calcite-card>`, X = t`<div id="card-container" style="width:260px;">
  <calcite-card>
    ${Z}
    <h3 slot="heading">Portland Businesses</h3>
    <span slot="description"
      >by
      <calcite-link>example_user</calcite-link>
    </span>
    <div>
      Created: Apr 22, 2019
      <br />
      Updated: Dec 9, 2019
      <br />
      View Count: 0
    </div>
    <calcite-button
      slot="footer-start"
      kind="neutral"
      scale="s"
      id="card-icon-test-1"
      icon-start="circle"
    ></calcite-button>
  </calcite-card>
</div>`, q = {
  calciteCheckboxSize: "",
  calciteCheckboxColor: "",
  calciteCheckboxBorderColor: ""
}, J = t`<label>
  <calcite-checkbox indeterminate></calcite-checkbox>
  Initially indeterminate and unchecked
</label>`, tt = {
  calciteChipBackgroundColor: "",
  calciteChipBorderColor: "",
  calciteChipCornerRadius: "",
  calciteChipTextColor: "",
  calciteChipIconColor: "",
  calciteChipCloseIconColor: "",
  calciteChipSelectIconColor: "",
  calciteChipSelectIconColorPressed: ""
}, et = t`<div>
    <calcite-chip>Neutral</calcite-chip>
    <calcite-chip kind="inverse">Inverse</calcite-chip>
    <calcite-chip kind="brand">Brand</calcite-chip>
  </div>
  <div>
    <calcite-chip appearance="outline-fill">Neutral</calcite-chip>
    <calcite-chip appearance="outline-fill" kind="inverse">Inverse</calcite-chip>
    <calcite-chip appearance="outline-fill" kind="brand">Brand</calcite-chip>
  </div>
  <div>
    <calcite-chip appearance="outline">Neutral</calcite-chip>
    <calcite-chip appearance="outline" kind="inverse">Inverse</calcite-chip>
    <calcite-chip appearance="outline" kind="brand">Brand</calcite-chip>
  </div>`, ct = t`<calcite-combobox-item
  icon="altitude"
  value="altitude"
  text-label="Altitude"
></calcite-combobox-item>`, at = t`<calcite-date-picker scale="m" value="2020-11-27"></calcite-date-picker>`, it = t`<calcite-dropdown>
  <calcite-button slot="trigger">Primary</calcite-button>
  <calcite-dropdown-group group-title="View">
    <calcite-dropdown-item icon-start="list-bullet" selected>List</calcite-dropdown-item>
    <calcite-dropdown-item icon-start="grid">Grid</calcite-dropdown-item>
    <calcite-dropdown-item icon-start="table">Table</calcite-dropdown-item>
  </calcite-dropdown-group>
</calcite-dropdown>`, ot = {
  calciteHandleBackgroundColor: "",
  calciteHandleBackgroundColorHover: "",
  calciteHandleBackgroundColorSelected: "",
  calciteHandleIconColor: "",
  calciteHandleIconColorHover: "",
  calciteHandleIconColorSelected: ""
}, lt = t`<calcite-handle></calcite-handle>`, nt = t`<calcite-icon icon="3d-glasses"></calcite-icon>`, rt = {
  calciteInputPrefixSize: "",
  calciteInputSuffixSize: "",
  calciteInputBackgroundColor: "",
  calciteInputBorderColor: "",
  calciteInputCornerRadius: "",
  calciteInputShadow: "",
  calciteInputIconColor: "",
  calciteInputTextColor: "",
  calciteInputPlaceholderTextColor: "",
  calciteInputActionsBackgroundColor: "",
  calciteInputActionsBackgroundColorHover: "",
  calciteInputActionsBackgroundColorPress: "",
  calciteInputActionsIconColor: "",
  calciteInputActionsIconColorHover: "",
  calciteInputActionsIconColorPress: "",
  calciteInputLoadingBackgroundColor: "",
  calciteInputLoadingFillColor: "",
  calciteInputPrefixBackgroundColor: "",
  calciteInputPrefixTextColor: "",
  calciteInputSuffixBackgroundColor: "",
  calciteInputSuffixTextColor: ""
}, st = t`<calcite-input
  placeholder="Placeholder text"
  prefix-text="prefix"
  suffix-text="suffix"
></calcite-input>`, dt = t`<calcite-input-number
  placeholder="Placeholder text"
  prefix-text="prefix"
  suffix-text="suffix"
></calcite-input-number>`, ut = t`<calcite-input-text
  placeholder="Placeholder text"
  prefix-text="prefix"
  suffix-text="suffix"
></calcite-input-text>`, bt = {
  calciteLabelMarginBottom: "",
  calciteLabelTextColor: ""
}, pt = t`
  <calcite-label>
    Label text
    <calcite-input></calcite-input>
  </calcite-label>
`, mt = {
  calciteLinkTextColor: ""
}, gt = t` <calcite-link href="#" icon-start="banana" icon-end="information">link</calcite-link> `, Ct = {
  calciteListBackgroundColor: "",
  calciteListBackgroundColorHover: "",
  calciteListBackgroundColorPress: "",
  calciteListBorderColor: "",
  calciteListColor: "",
  calciteListContentTextColor: "",
  calciteListDescriptionTextColor: "",
  calciteListIconColor: "",
  calciteListLabelTextColor: "",
  calciteListSelectionBorderColor: ""
}, Tt = t`<calcite-list>
  <calcite-list-item-group heading="Outdoor recreation">
    <calcite-list-item label="Hiking trails" description="Designated routes for hikers to use." value="hiking-trails">
      <calcite-action slot="actions-end" icon="layer" text="Trails layer"></calcite-action>
    </calcite-list-item>
    <calcite-list-item label="Waterfalls" description="Vertical drops from a river." value="waterfalls">
      <calcite-action slot="actions-end" icon="layer" text="Waterfalls layer"></calcite-action>
    </calcite-list-item>
    <calcite-list-item label="Rivers" description="Large naturally flowing watercourses." value="rivers">
      <calcite-action slot="actions-end" icon="layer" text="Rivers layer"></calcite-action>
    </calcite-list-item>
    <calcite-list-item label="Estuaries" description="Where the river meets the sea." value="estuaries">
      <calcite-action slot="actions-end" icon="layer" text="Estuaries layer"></calcite-action>
    </calcite-list-item>
  </calcite-list-item-group>
  <calcite-list-item-group heading="Buildings">
    <calcite-list-item
      label="Park offices"
      description="Home base for park staff to converse with visitors."
      value="offices"
    >
      <calcite-action slot="actions-end" icon="layer" text="Offices layer"></calcite-action>
    </calcite-list-item>
    <calcite-list-item
      label="Guest lodges"
      description="Small houses available for visitors to book for stays."
      value="lodges"
    >
      <calcite-action slot="actions-end" icon="layer" text="Lodges layer"></calcite-action>
    </calcite-list-item>
    <calcite-list-item
      label="Yurts"
      description="Insulated portable rounded structures similar to tents."
      value="yurts"
    >
      <calcite-action slot="actions-end" icon="layer" text="Yurts layer"></calcite-action>
    </calcite-list-item>
  </calcite-list-item-group>
</calcite-list>`, ht = {
  calciteLoaderFontSize: "",
  calciteLoaderSize: "",
  calciteLoaderSizeInline: "",
  calciteLoaderProgressColorInline: "",
  calciteLoaderSpacing: "",
  calciteLoaderColor: "",
  calciteLoaderTrackColor: "",
  calciteLoaderProgressColor: "",
  calciteLoaderTextSpacing: "",
  calciteLoaderTextWeight: ""
}, vt = t`<calcite-loader class="chromatic-ignore"></calcite-loader>`, xt = {
  calciteNoticeBackgroundColor: "",
  calciteNoticeCloseBackgroundColorFocus: "",
  calciteNoticeCloseBackgroundColorPress: "",
  calciteNoticeCloseTextColorHover: "",
  calciteNoticeCloseTextColor: "",
  calciteNoticeContentTextColor: ""
}, kt = t`<calcite-notice kind="success" scale="s" open closable>
  <div slot="title">Something worked</div>
  <div slot="message">That thing you wanted to do worked as expected</div>
</calcite-notice>`, ft = {
  calcitePaginationColor: "",
  calcitePaginationColorHover: "",
  calcitePaginationColorBorderHover: "",
  calcitePaginationColorBorderActive: "",
  calcitePaginationBackgroundColor: "",
  calcitePaginationIconColorBackgroundHover: ""
}, At = t`<calcite-pagination
  total-items="1200"
  page-size="100"
  start-item="1"
></calcite-pagination>`, wt = {
  calcitePopoverBackgroundColor: "",
  calcitePopoverBorderColor: "",
  calcitePopoverCornerRadius: "",
  calcitePopoverTextColor: "",
  calcitePopoverZIndex: ""
}, It = t`
  <calcite-label layout="inline">
    <calcite-button title="Reference Element" id="reference-element">nostrud exercitation</calcite-button>
    <calcite-popover
      heading="these 🥨s are making me thirsty"
      reference-element="reference-element"
      placement="auto"
      open
      closable
      scale="l"
    >
      <div style="width: 300px; padding:12px 16px;">
        <b>I am a title!</b> <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
    </calcite-popover>
  </calcite-label>
`, Bt = {
  calciteProgressBackgroundColor: "",
  calciteProgressFillColor: "",
  calciteProgressTextColor: ""
}, St = t`
  <calcite-label layout="inline">
    <calcite-progress text="optional text" type="determinate" value="50"></calcite-progress>
  </calcite-label>
`, $t = t`<calcite-label>
  Segmented Control
  <calcite-segmented-control>
    <calcite-segmented-control-item value="react" checked>React</calcite-segmented-control-item>
    <calcite-segmented-control-item value="ember">Ember</calcite-segmented-control-item>
    <calcite-segmented-control-item value="angular">Angular</calcite-segmented-control-item>
    <calcite-segmented-control-item value="vue">Vue</calcite-segmented-control-item> </calcite-segmented-control
  ><calcite-label></calcite-label
></calcite-label>`, yt = {
  calciteSelectFontSize: "",
  calciteSelectTextColor: "",
  calciteSelectBorderColor: "",
  calciteSelectIconColor: "",
  calciteSelectIconColorHover: ""
}, Pt = t`<calcite-select>
  <calcite-option>uno</calcite-option>
  <calcite-option>dos</calcite-option>
  <calcite-option>tres</calcite-option>
</calcite-select>`, Lt = {
  calciteRatingSpacing: "",
  calciteRatingColorHover: "",
  calciteRatingColor: "",
  calciteRatingAverageColor: "",
  calciteRatingAverageTextColor: "",
  calciteRatingCountTextColor: ""
}, Ht = t`<calcite-rating></calcite-rating>`, Rt = {
  calciteSliderTextColor: "",
  calciteSliderTrackColor: "",
  calciteSliderTrackFillColor: "",
  calciteSliderHandleFillColor: "",
  calciteSliderHandleExtensionColor: "",
  calciteSliderAccentColor: "",
  calciteSliderTickColor: "",
  calciteSliderTickBorderColor: "",
  calciteSliderTickSelectedColor: "",
  calciteSliderGraphColor: ""
}, Nt = t`<calcite-slider
  min="0"
  max="100"
  min-value="50"
  max-value="85"
  step="1"
  min-label="Temperature range (lower)"
  max-label="Temperature range (upper)"
  precise
></calcite-slider>`, Mt = {
  // additional tokens will be added in https://github.com/Esri/calcite-design-system/pull/10532/
  calciteTabIconColorEnd: "",
  calciteTabIconColorStart: ""
}, Et = t`
  <style>
    calcite-tabs {
      width: 400px;
    }
  </style>
  <calcite-tabs position="bottom">
    <calcite-tab-nav slot="title-group">
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right" selected
        >Tab 1 Title
      </calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 2 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 3 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 4 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 5 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 6 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 7 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 8 Title</calcite-tab-title>
    </calcite-tab-nav>
    <calcite-tab selected>Tab 1 Content</calcite-tab>
    <calcite-tab>Tab 2 Content</calcite-tab>
    <calcite-tab>Tab 3 Content</calcite-tab>
    <calcite-tab>Tab 4 Content</calcite-tab>
    <calcite-tab>Tab 5 Content</calcite-tab>
    <calcite-tab>Tab 6 Content</calcite-tab>
    <calcite-tab>Tab 7 Content</calcite-tab>
    <calcite-tab>Tab 8 Content</calcite-tab>
  </calcite-tabs>
  <br />
  <calcite-tabs position="top">
    <calcite-tab-nav slot="title-group">
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right" selected
        >Tab 1 Title
      </calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 2 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 3 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 4 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 5 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 6 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 7 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 8 Title</calcite-tab-title>
    </calcite-tab-nav>
    <calcite-tab selected>Tab 1 Content</calcite-tab>
    <calcite-tab>Tab 2 Content</calcite-tab>
    <calcite-tab>Tab 3 Content</calcite-tab>
    <calcite-tab>Tab 4 Content</calcite-tab>
    <calcite-tab>Tab 5 Content</calcite-tab>
    <calcite-tab>Tab 6 Content</calcite-tab>
    <calcite-tab>Tab 7 Content</calcite-tab>
    <calcite-tab>Tab 8 Content</calcite-tab>
  </calcite-tabs>
`, Ft = t`
  <style>
    calcite-tabs {
      width: 400px;
    }
  </style>
  <calcite-tabs bordered position="bottom">
    <calcite-tab-nav slot="title-group">
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right" selected
        >Tab 1 Title
      </calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 2 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 3 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 4 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 5 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 6 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 7 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 8 Title</calcite-tab-title>
    </calcite-tab-nav>
    <calcite-tab selected>Tab 1 Content</calcite-tab>
    <calcite-tab>Tab 2 Content</calcite-tab>
    <calcite-tab>Tab 3 Content</calcite-tab>
    <calcite-tab>Tab 4 Content</calcite-tab>
    <calcite-tab>Tab 5 Content</calcite-tab>
    <calcite-tab>Tab 6 Content</calcite-tab>
    <calcite-tab>Tab 7 Content</calcite-tab>
    <calcite-tab>Tab 8 Content</calcite-tab>
  </calcite-tabs>
  <br />
  <calcite-tabs position="top">
    <calcite-tab-nav slot="title-group">
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right" selected
        >Tab 1 Title
      </calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 2 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 3 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 4 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 5 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 6 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 7 Title</calcite-tab-title>
      <calcite-tab-title closable icon-start="arrow-left" icon-end="arrow-right">Tab 8 Title</calcite-tab-title>
    </calcite-tab-nav>
    <calcite-tab selected>Tab 1 Content</calcite-tab>
    <calcite-tab>Tab 2 Content</calcite-tab>
    <calcite-tab>Tab 3 Content</calcite-tab>
    <calcite-tab>Tab 4 Content</calcite-tab>
    <calcite-tab>Tab 5 Content</calcite-tab>
    <calcite-tab>Tab 6 Content</calcite-tab>
    <calcite-tab>Tab 7 Content</calcite-tab>
    <calcite-tab>Tab 8 Content</calcite-tab>
  </calcite-tabs>
`, Wt = {
  calciteTextAreaBackgroundColor: "",
  calciteTextAreaBorderColor: "",
  calciteTextAreaCharacterLimitTextColor: "",
  calciteTextAreaDividerColor: "",
  calciteTextAreaFontSize: "",
  calciteTextAreaFooterBorderColor: "",
  calciteTextAreaMaxHeight: "",
  calciteTextAreaMinHeight: "",
  calciteTextAreaMaxWidth: "",
  calciteTextAreaMinWidth: "",
  calciteTextAreaTextColor: ""
}, Gt = t`<calcite-text-area placeholder="testing" max-length="10"></calcite-text-area>`, Ut = {
  calciteTooltipBackgroundColor: "",
  calciteTooltipBorderColor: "",
  calciteTooltipCornerRadius: "",
  calciteTooltipTextColor: "",
  calciteTooltipZIndex: ""
}, zt = t`
  <calcite-label layout="inline">
    <calcite-button title="Reference Element" id="tooltip-reference-element">nostrud exercitation</calcite-button>
    <calcite-tooltip reference-element="tooltip-reference-element" placement="auto" open>
      these 🥨s are making me thirsty
    </calcite-tooltip>
  </calcite-label>
`, Dt = {
  calciteAvatarCornerRadius: "",
  calciteAvatarColor: "",
  calciteAvatarBackgroundColor: ""
}, Ot = t`<calcite-avatar full-name="Urbano Monti"></calcite-avatar>`, _t = t`<calcite-avatar user-id="umonti"></calcite-avatar>`, jt = t`<calcite-avatar
  thumbnail="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII"
></calcite-avatar>`, Vt = {
  calciteNavigationAccentColor: "",
  calciteNavigationBackgroundColor: "",
  calciteNavigationLogoHeadingTextColor: "",
  calciteNavigationLogoTextColor: ""
}, p = (e = !1) => t`
  <calcite-navigation-logo
    heading="Walt's Chips"
    description="Eastern Potato Chip Company"
    icon="layers"
    label="Walt's Chips"
    ${T("active", e)}
  >
  </calcite-navigation-logo>
`, Qt = t` ${p(!0)} ${p()} `, Yt = {
  calciteNavigationAccentColor: "",
  calciteNavigationUserBackgroundColor: "",
  calciteNavigationUserAvatarCornerRadius: "",
  calciteNavigationUserAvatarColor: "",
  calciteNavigationUserFullNameTextColor: "",
  calciteNavigationUserUserNameTextColor: ""
}, m = (e = !1) => t`
  <calcite-navigation-user
    full-name="Wendell Berry"
    username="w_berry"
    ${T("active", e)}
  ></calcite-navigation-user>
`, Zt = t`${m(!0)} ${m()}`, Kt = {
  calciteTileAccentColorPress: "",
  calciteTileBackgroundColor: "",
  calciteTileBorderColor: "",
  calciteTileCornerRadius: "",
  calciteTileHeadingTextColor: "",
  calciteTileLinkColor: "",
  calciteTileShadow: "",
  calciteTileTextColor: ""
}, Xt = t`
  <calcite-tile
    heading="Tile heading lorem ipsum"
    description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall."
    icon="layers"
    selected
  ></calcite-tile>
`, qt = {
  calciteNavigationBackgroundColor: "",
  calciteNavigationBorderColor: "",
  calciteNavigationWidth: "",
  calciteNavigationBackground: ""
}, Jt = t`<calcite-navigation>
  <calcite-navigation-logo heading="Walt's Chips" description="Eastern Potato Chip Company" icon="layers" slot="logo">
  </calcite-navigation-logo>
  <calcite-navigation-user slot="user" full-name="Walt McChipson" username="waltChip"> </calcite-navigation-user>
  <calcite-navigation slot="navigation-secondary">
    <calcite-menu slot="content-start">
      <calcite-menu-item breadcrumb text="All Routes" icon-start="book" text-enabled></calcite-menu-item>
    </calcite-menu>
  </calcite-navigation>
  <calcite-navigation slot="navigation-tertiary">
    <calcite-menu slot="content-end">
      <calcite-menu-item breadcrumb text="All Routes" icon-start="book" text-enabled></calcite-menu-item>
    </calcite-menu>
  </calcite-navigation>
</calcite-navigation>`, te = {
  calciteMenuItemAccentColor: "",
  calciteMenuBackgroundColor: "",
  calciteMenuItemSubMenuBorderColor: "",
  calciteMenuItemSubMenuCornerRadius: "",
  calciteMenuTextColor: ""
}, g = (e) => t`<calcite-menu layout="${e}">
    <calcite-menu-item text="Ideas" breadcrumb icon-start="layers" icon-end="layers" open>
      <calcite-menu-item
        href="#calcite-navigation-slots"
        icon-start="add-in"
        slot="submenu-item"
        text="Slots"
        active
      ></calcite-menu-item>
      <calcite-menu-item
        href="#calcite-navigation-css-vars"
        icon-start="multiple-variables"
        slot="submenu-item"
        text="Css vars"
      ></calcite-menu-item>
    </calcite-menu-item>
    <calcite-menu-item text="Ideas"> </calcite-menu-item>
    <calcite-menu-item text="calcite-navigation" href="#calcite-menu" open>
      <calcite-menu-item
        href="#calcite-navigation-slots"
        icon-start="add-in"
        slot="submenu-item"
        text="Slots"
        active
      ></calcite-menu-item>
      <calcite-menu-item
        href="#calcite-navigation-css-vars"
        icon-start="multiple-variables"
        slot="submenu-item"
        text="Css vars"
      ></calcite-menu-item>
    </calcite-menu-item>
  </calcite-menu>`, ee = t` ${g("horizontal")} ${g("vertical")} `, h = {
  calciteColorBrand: "#007ac2",
  calciteColorBrandHover: "#00619b",
  calciteColorBrandPress: "#004874",
  calciteColorStatusInfo: "#00619b",
  calciteColorStatusSuccess: "#35ac46",
  calciteColorStatusWarning: "#edd317",
  calciteColorStatusDanger: "#d83020",
  calciteColorStatusDangerHover: "#a82b1e",
  calciteColorStatusDangerPress: "#7c1d13",
  calciteColorBackground: "#f8f8f8",
  calciteColorForeground1: "#ffffff",
  calciteColorForeground2: "#f3f3f3",
  calciteColorForeground3: "#eaeaea",
  calciteColorText1: "#151515",
  calciteColorText2: "#4a4a4a",
  calciteColorText3: "#6a6a6a",
  calciteColorTextInverse: "#ffffff",
  calciteColorTextLink: "#00619b",
  calciteColorBorder1: "#cacaca",
  calciteColorBorder2: "#d4d4d4",
  calciteColorBorder3: "#dfdfdf",
  calciteColorBorderInput: "#949494",
  calciteUiIconColor: "currentColor"
};
function C(e) {
  return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function ce(e, i = !1) {
  if (i) {
    const a = Object.keys(e).map((c) => `--${C(c)}`);
    return f(a, " ");
  } else
    return Object.entries(e).map(([a, c]) => c && c !== "" ? `--${C(a)}: ${c};` : null).filter((a) => a).join("");
}
const v = (e, i = !1) => t`<div style="${ce(e, i)}">
    <style>
      .demo {
        display: flex;
        align-items: flex-start;
      }
      .demo-column {
        flex: 0;
        width: 320px;
      }
      .demo-column + .demo-column {
        margin-left: 4rem;
      }
      .demo-column > * {
        margin-bottom: 2rem;
      }
    </style>
    <div class="demo">
      <div class="demo-column">
        ${F} ${I} ${G} ${kt} ${$t}
        <div style="display: flex">
          ${P}
          <div style="width: 40px; height: 40px;">${y}</div>
          ${nt}
        </div>
        ${st} ${dt} ${ut} ${Pt}
      </div>
      <div class="demo-column">
        <div>${K}</div>
        ${X}
        <div>${it} ${O}</div>
        <div>${J}</div>
        ${et} ${At} ${Nt}
      </div>
      <div class="demo-column">
        ${at} ${Et} ${Ft} ${pt} ${gt} ${Tt} ${vt} ${Q} ${_t}
        ${Ot} ${jt} ${St} ${lt} ${Gt} ${It} ${Xt} ${zt}
        ${ct}
      </div>
      <div class="demo-column">
        ${Jt} ${Qt} ${Zt} ${j} ${z} ${Ht}
      </div>
      <div class="demo-column"><div class="demo-column">${H}</div></div>
      <div class="demo-column">${ee}</div>
    </div>
  </div>`, x = {
  ...h,
  ...R,
  ...E,
  ...w,
  ...B,
  ...S,
  ...$,
  ...A,
  ...L,
  ...W,
  ...Dt,
  ..._,
  ...U,
  ...Y,
  ...q,
  ...tt,
  ...ot,
  ...rt,
  ...bt,
  ...mt,
  ...Ct,
  ...ht,
  ...Vt,
  ...qt,
  ...Yt,
  ...xt,
  ...ft,
  ...wt,
  ...Bt,
  ...Lt,
  ...yt,
  ...Rt,
  ...V,
  ...Mt,
  ...Wt,
  ...Kt,
  ...Ut,
  ...te
}, ae = {
  title: "Theming/Custom Theme",
  args: {
    ...h,
    ...x
  }
}, l = (e) => v(e), n = () => v({
  ...x
}, !0);
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(args: Record<string, string>): string => {
  return kitchenSink(args);
}`,
      ...l.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(): string => {
  return kitchenSink({
    ...componentTokens
  }, true);
}`,
      ...n.parameters?.docs?.source
    }
  }
};
const ie = ["themingInteractive", "theming"], ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __namedExportsOrder: ie,
  default: ae,
  theming: n,
  themingInteractive: l
}, Symbol.toStringTag, { value: "Module" }));
export {
  ue as s
};
