import { b as bootstrapLazy } from './index-610ae5e8.js';
import { a as patchEsm } from './patch-4ed9c691.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy(JSON.parse("[[\"calcite-card\",[[1,\"calcite-card\",{\"loading\":[516],\"selected\":[1540],\"selectable\":[516],\"theme\":[513]}]]],[\"calcite-icon\",[[1,\"calcite-icon\",{\"icon\":[513],\"mirrored\":[516],\"scale\":[513],\"textLabel\":[1,\"text-label\"],\"theme\":[513],\"pathData\":[32],\"visible\":[32]}]]],[\"calcite-split-button\",[[1,\"calcite-split-button\",{\"color\":[1537],\"theme\":[513],\"scale\":[1537],\"dropdownIconType\":[1537,\"dropdown-icon-type\"],\"primaryText\":[513,\"primary-text\"],\"primaryIconStart\":[513,\"primary-icon-start\"],\"primaryIconEnd\":[513,\"primary-icon-end\"],\"primaryLabel\":[513,\"primary-label\"],\"dropdownLabel\":[513,\"dropdown-label\"],\"loading\":[516],\"disabled\":[516]}]]],[\"calcite-modal\",[[1,\"calcite-modal\",{\"active\":[4],\"beforeClose\":[16],\"disableCloseButton\":[4,\"disable-close-button\"],\"intlClose\":[1,\"intl-close\"],\"docked\":[516],\"firstFocus\":[16],\"disableEscape\":[4,\"disable-escape\"],\"scale\":[513],\"width\":[520],\"fullscreen\":[516],\"color\":[513],\"theme\":[513],\"backgroundColor\":[513,\"background-color\"],\"noPadding\":[4,\"no-padding\"],\"isActive\":[32],\"focusElement\":[64],\"scrollContent\":[64]},[[8,\"keyup\",\"handleEscape\"]]]]],[\"calcite-tile-select\",[[1,\"calcite-tile-select\",{\"checked\":[1540],\"description\":[513],\"disabled\":[516],\"focused\":[1540],\"heading\":[513],\"hidden\":[516],\"icon\":[513],\"name\":[513],\"showInput\":[513,\"show-input\"],\"theme\":[513],\"type\":[513],\"value\":[513]},[[0,\"calciteCheckboxChange\",\"calciteCheckboxChangeEvent\"],[0,\"calciteCheckboxFocusedChange\",\"calciteCheckboxFocusedChangeEvent\"],[0,\"calciteRadioButtonChange\",\"calciteRadioButtonChangeEvent\"],[0,\"calciteRadioButtonFocusedChange\",\"calciteRadioButtonFocusedChangeEvent\"],[0,\"click\",\"click\"],[1,\"mouseenter\",\"mouseenter\"],[1,\"mouseleave\",\"mouseleave\"]]]]],[\"calcite-accordion_2\",[[1,\"calcite-accordion-item\",{\"active\":[1540],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"icon\":[513]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteAccordionChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-accordion\",{\"theme\":[513],\"scale\":[1537],\"appearance\":[1537],\"iconPosition\":[1537,\"icon-position\"],\"iconType\":[1537,\"icon-type\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"calciteAccordionItemKeyEvent\",\"calciteAccordionItemKeyEvent\"],[0,\"calciteAccordionItemRegister\",\"registerCalciteAccordionItem\"],[0,\"calciteAccordionItemSelect\",\"updateActiveItemOnChange\"]]]]],[\"calcite-popover_2\",[[1,\"calcite-popover\",{\"closeButton\":[516,\"close-button\"],\"disableFlip\":[516,\"disable-flip\"],\"disablePointer\":[516,\"disable-pointer\"],\"flipPlacements\":[16],\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"intlClose\":[1,\"intl-close\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64],\"setFocus\":[64],\"toggle\":[64]}],[0,\"calcite-popover-manager\",{\"selector\":[1],\"autoClose\":[516,\"auto-close\"]},[[10,\"click\",\"closeOpenPopovers\"]]]]],[\"calcite-radio-group_2\",[[1,\"calcite-radio-group-item\",{\"checked\":[1540],\"icon\":[513],\"iconPosition\":[1537,\"icon-position\"],\"value\":[8],\"useFallback\":[32]}],[1,\"calcite-radio-group\",{\"name\":[1],\"selectedItem\":[16],\"theme\":[513],\"scale\":[513],\"appearance\":[1537],\"layout\":[1537],\"width\":[1537],\"setFocus\":[64]},[[8,\"calciteLabelFocus\",\"handleLabelFocus\"],[0,\"click\",\"handleClick\"],[0,\"calciteRadioGroupItemChange\",\"handleSelected\"],[0,\"keydown\",\"handleKeyDown\"]]]]],[\"calcite-stepper_2\",[[1,\"calcite-stepper-item\",{\"active\":[1540],\"complete\":[516],\"error\":[4],\"disabled\":[4],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"layout\":[1537],\"icon\":[1028],\"numbered\":[1028],\"scale\":[1537]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteStepperItemChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-stepper\",{\"theme\":[513],\"scale\":[1537],\"numbered\":[1540],\"icon\":[1540],\"layout\":[1537],\"requestedContent\":[16],\"nextStep\":[64],\"prevStep\":[64],\"goToStep\":[64],\"startStep\":[64],\"endStep\":[64]},[[0,\"calciteStepperItemKeyEvent\",\"calciteStepperItemKeyEvent\"],[0,\"calciteStepperItemRegister\",\"registerItem\"],[0,\"calciteStepperItemSelect\",\"updateItem\"]]]]],[\"calcite-tree_2\",[[1,\"calcite-tree-item\",{\"selected\":[1540],\"expanded\":[1540],\"parentExpanded\":[4,\"parent-expanded\"],\"depth\":[514],\"hasChildren\":[516,\"has-children\"],\"lines\":[516],\"scale\":[513],\"selectionMode\":[32]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-tree\",{\"lines\":[1540],\"theme\":[513],\"scale\":[1537],\"selectionMode\":[1537,\"selection-mode\"],\"root\":[516]},[[0,\"focus\",\"onFocus\"],[0,\"calciteTreeItemSelect\",\"onClick\"]]]]],[\"calcite-alert\",[[1,\"calcite-alert\",{\"active\":[1540],\"autoDismiss\":[4,\"auto-dismiss\"],\"autoDismissDuration\":[1537,\"auto-dismiss-duration\"],\"color\":[1537],\"theme\":[513],\"scale\":[1537],\"icon\":[4],\"intlClose\":[1,\"intl-close\"],\"queue\":[32],\"queueLength\":[32],\"queued\":[32],\"setFocus\":[64]},[[8,\"calciteAlertSync\",\"alertSync\"],[8,\"calciteAlertRegister\",\"alertRegister\"]]]]],[\"calcite-input-message\",[[1,\"calcite-input-message\",{\"active\":[516],\"icon\":[516],\"scale\":[1537],\"status\":[1537],\"theme\":[513],\"type\":[1537]}]]],[\"calcite-chip\",[[1,\"calcite-chip\",{\"value\":[1],\"theme\":[513],\"scale\":[513],\"color\":[1537],\"appearance\":[1537],\"icon\":[513],\"dismissible\":[516]}]]],[\"calcite-combobox\",[[1,\"calcite-combobox\",{\"active\":[516],\"disabled\":[516],\"theme\":[513],\"scale\":[1537],\"label\":[1],\"placeholder\":[1],\"items\":[32],\"selectedItems\":[32],\"visibleItems\":[32]},[[0,\"calciteComboboxItemChange\",\"calciteComboboxItemChangeHandler\"],[0,\"calciteChipDismiss\",\"calciteChipDismissHandler\"],[0,\"calciteComboboxItemKeyEvent\",\"calciteComboboxItemKeyEventHandler\"]]]]],[\"calcite-combobox-item\",[[1,\"calcite-combobox-item\",{\"disabled\":[516],\"parentItem\":[16],\"selected\":[516],\"textLabel\":[513,\"text-label\"],\"value\":[513],\"isSelected\":[32],\"toggleSelected\":[64]},[[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-notice\",[[1,\"calcite-notice\",{\"active\":[1540],\"color\":[1537],\"intlClose\":[1,\"intl-close\"],\"theme\":[513],\"scale\":[1537],\"width\":[1537],\"dismissible\":[516],\"icon\":[4],\"close\":[64],\"open\":[64],\"setFocus\":[64]}]]],[\"calcite-pagination\",[[1,\"calcite-pagination\",{\"num\":[2],\"start\":[2],\"total\":[2],\"textLabelNext\":[1,\"text-label-next\"],\"textLabelPrevious\":[1,\"text-label-previous\"],\"theme\":[513],\"scale\":[513],\"nextPage\":[64],\"previousPage\":[64]}]]],[\"calcite-radio-button\",[[1,\"calcite-radio-button\",{\"checked\":[1540],\"disabled\":[516],\"focused\":[1540],\"guid\":[513],\"hidden\":[516],\"hovered\":[1540],\"name\":[513],\"required\":[516],\"scale\":[1537],\"theme\":[1537],\"value\":[513]},[[0,\"click\",\"check\"],[1,\"mouseenter\",\"mouseenter\"],[1,\"mouseleave\",\"mouseleave\"]]]]],[\"calcite-slider\",[[1,\"calcite-slider\",{\"theme\":[513],\"disabled\":[516],\"min\":[514],\"max\":[514],\"value\":[1538],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"minLabel\":[1,\"min-label\"],\"maxLabel\":[1,\"max-label\"],\"snap\":[4],\"step\":[2],\"pageStep\":[2,\"page-step\"],\"ticks\":[2],\"labelTicks\":[516,\"label-ticks\"],\"labelHandles\":[516,\"label-handles\"],\"precise\":[4],\"histogram\":[16],\"hasHistogram\":[1540,\"has-histogram\"],\"tickValues\":[32],\"activeProp\":[32],\"minMaxValueRange\":[32],\"minValueDragRange\":[32],\"maxValueDragRange\":[32],\"setFocus\":[64]},[[8,\"calciteLabelFocus\",\"handleLabelFocus\"],[0,\"keydown\",\"keyDownHandler\"],[0,\"click\",\"clickHandler\"]]]]],[\"calcite-tooltip_2\",[[1,\"calcite-tooltip\",{\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64]}],[0,\"calcite-tooltip-manager\",{\"selector\":[1]},[[3,\"mouseenter\",\"mouseEnterShow\"],[3,\"mouseleave\",\"mouseLeaveHide\"],[2,\"focus\",\"focusShow\"],[2,\"blur\",\"blurHide\"]]]]],[\"calcite-radio-button-group\",[[1,\"calcite-radio-button-group\",{\"disabled\":[516],\"hidden\":[516],\"layout\":[1537],\"name\":[513],\"required\":[516],\"scale\":[1537],\"theme\":[1537]}]]],[\"calcite-switch\",[[1,\"calcite-switch\",{\"switched\":[1540],\"name\":[1537],\"value\":[1537],\"color\":[1537],\"scale\":[1537],\"disabled\":[516],\"theme\":[513]},[[8,\"calciteLabelFocus\",\"handleLabelFocus\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tile-select-group\",[[1,\"calcite-tile-select-group\"]]],[\"calcite-tile\",[[1,\"calcite-tile\",{\"active\":[516],\"description\":[513],\"embed\":[516],\"focused\":[516],\"heading\":[513],\"hidden\":[516],\"href\":[513],\"icon\":[513],\"theme\":[513]}]]],[\"calcite-dropdown_3\",[[1,\"calcite-dropdown-item\",{\"active\":[1540],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"href\":[513],\"setFocus\":[64]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteDropdownGroupRegister\",\"registerCalciteDropdownGroup\"],[16,\"calciteDropdownItemChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-dropdown-group\",{\"groupTitle\":[513,\"group-title\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"calciteDropdownItemRegister\",\"registerCalciteDropdownItem\"],[0,\"calciteDropdownItemSelect\",\"updateActiveItemOnChange\"]]],[1,\"calcite-dropdown\",{\"active\":[1540],\"alignment\":[1537],\"maxItems\":[2,\"max-items\"],\"theme\":[513],\"selectedItems\":[1040],\"scale\":[1537],\"width\":[1537],\"type\":[1537],\"disableCloseOnSelect\":[516,\"disable-close-on-select\"],\"disabled\":[516]},[[0,\"click\",\"openDropdown\"],[8,\"click\",\"closeCalciteDropdownOnClick\"],[0,\"calciteDropdownCloseRequest\",\"closeCalciteDropdownOnEvent\"],[8,\"calciteDropdownOpen\",\"closeCalciteDropdownOnOpenEvent\"],[0,\"keydown\",\"keyDownHandler\"],[1,\"mouseenter\",\"mouseoverHandler\"],[1,\"mouseleave\",\"mouseoffHandler\"],[0,\"calciteDropdownItemKeyEvent\",\"calciteDropdownItemKeyEvent\"],[0,\"calciteDropdownItemSelect\",\"handleItemSelect\"],[0,\"calciteDropdownGroupRegister\",\"registerCalciteDropdownGroup\"]]]]],[\"calcite-checkbox\",[[1,\"calcite-checkbox\",{\"checked\":[1540],\"hovered\":[1540],\"focused\":[1540],\"indeterminate\":[1540],\"name\":[513],\"value\":[513],\"scale\":[1537],\"disabled\":[516],\"theme\":[513]},[[8,\"calciteLabelFocus\",\"handleLabelFocus\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"],[1,\"mouseenter\",\"mouseenter\"],[1,\"mouseleave\",\"mouseleave\"]]]]],[\"calcite-scrim\",[[1,\"calcite-scrim\",{\"loading\":[516],\"theme\":[513]}]]],[\"calcite-graph\",[[0,\"calcite-graph\",{\"data\":[16],\"width\":[2],\"height\":[2],\"highlightMin\":[2,\"highlight-min\"],\"highlightMax\":[2,\"highlight-max\"]}]]],[\"calcite-button\",[[1,\"calcite-button\",{\"color\":[1537],\"appearance\":[1537],\"theme\":[513],\"scale\":[1537],\"width\":[1537],\"loading\":[516],\"round\":[516],\"floating\":[516],\"href\":[513],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"disabled\":[516],\"hasText\":[32],\"setFocus\":[64]}]]],[\"calcite-link\",[[1,\"calcite-link\",{\"color\":[1537],\"theme\":[513],\"href\":[513],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"disabled\":[516],\"userSelect\":[516,\"user-select\"],\"setFocus\":[64]}]]],[\"calcite-progress\",[[1,\"calcite-progress\",{\"type\":[1],\"value\":[2],\"text\":[1],\"reversed\":[4],\"theme\":[513]}]]],[\"calcite-input\",[[4,\"calcite-input\",{\"status\":[1537],\"loading\":[516],\"scale\":[1537],\"alignment\":[1537],\"value\":[1537],\"clearable\":[516],\"step\":[514],\"min\":[514],\"max\":[514],\"prefixText\":[1,\"prefix-text\"],\"suffixText\":[1,\"suffix-text\"],\"icon\":[520],\"type\":[1537],\"numberButtonType\":[1537,\"number-button-type\"],\"theme\":[513],\"required\":[4],\"autofocus\":[4],\"placeholder\":[1],\"disabled\":[516],\"setFocus\":[64]},[[0,\"calciteLabelFocus\",\"handleLabelFocus\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-label\",[[1,\"calcite-label\",{\"status\":[1537],\"scale\":[1537],\"theme\":[513],\"layout\":[1537]}]]],[\"calcite-tab_4\",[[1,\"calcite-tab-title\",{\"tab\":[513],\"active\":[1540],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"layout\":[1537],\"position\":[1537],\"controls\":[32],\"hasText\":[32],\"getTabIndex\":[64],\"getTabIdentifier\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-tab\",{\"tab\":[513],\"active\":[1540],\"labeledBy\":[32],\"getTabIndex\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"]]],[1,\"calcite-tab-nav\",{\"storageId\":[1,\"storage-id\"],\"syncId\":[1,\"sync-id\"],\"layout\":[1537],\"selectedTab\":[32]},[[0,\"calciteTabsFocusPrevious\",\"focusPreviousTabHandler\"],[0,\"calciteTabsFocusNext\",\"focusNextTabHandler\"],[0,\"calciteTabsActivate\",\"activateTabHandler\"],[32,\"calciteTabChange\",\"globalTabChangeHandler\"]]],[1,\"calcite-tabs\",{\"theme\":[513],\"layout\":[513],\"position\":[513],\"titles\":[32],\"tabs\":[32]},[[0,\"calciteTabTitleRegister\",\"calciteTabTitleRegister\"],[0,\"calciteTabTitleUnregister\",\"calciteTabTitleUnregister\"],[0,\"calciteTabRegister\",\"calciteTabRegister\"],[0,\"calciteTabUnregister\",\"calciteTabUnregister\"]]]]],[\"calcite-loader\",[[1,\"calcite-loader\",{\"active\":[516],\"inline\":[516],\"scale\":[513],\"type\":[513],\"value\":[2],\"text\":[1],\"noPadding\":[4,\"no-padding\"]}]]],[\"calcite-color_3\",[[1,\"calcite-color\",{\"appearance\":[513],\"color\":[16],\"hideHex\":[4,\"hide-hex\"],\"hideChannels\":[4,\"hide-channels\"],\"hideSaved\":[4,\"hide-saved\"],\"intlB\":[1,\"intl-b\"],\"intlBlue\":[1,\"intl-blue\"],\"intlDeleteColor\":[1,\"intl-delete-color\"],\"intlG\":[1,\"intl-g\"],\"intlGreen\":[1,\"intl-green\"],\"intlH\":[1,\"intl-h\"],\"intlHsv\":[1,\"intl-hsv\"],\"intlHex\":[1,\"intl-hex\"],\"intlHue\":[1,\"intl-hue\"],\"intlR\":[1,\"intl-r\"],\"intlRed\":[1,\"intl-red\"],\"intlRgb\":[1,\"intl-rgb\"],\"intlS\":[1,\"intl-s\"],\"intlSaturation\":[1,\"intl-saturation\"],\"intlSaveColor\":[1,\"intl-save-color\"],\"intlSaved\":[1,\"intl-saved\"],\"intlV\":[1,\"intl-v\"],\"intlValue\":[1,\"intl-value\"],\"scale\":[513],\"storageId\":[1,\"storage-id\"],\"theme\":[513],\"value\":[1025],\"colorFieldAndSliderInteractive\":[32],\"channelMode\":[32],\"channels\":[32],\"dimensions\":[32],\"savedColors\":[32],\"setFocus\":[64]}],[1,\"calcite-color-hex-input\",{\"intlHex\":[1,\"intl-hex\"],\"scale\":[513],\"theme\":[513],\"value\":[1537],\"internalColor\":[32],\"setFocus\":[64]}],[1,\"calcite-color-swatch\",{\"active\":[516],\"color\":[1],\"scale\":[513],\"theme\":[513]}]]],[\"calcite-date_4\",[[1,\"calcite-date\",{\"value\":[1537],\"valueAsDate\":[1040],\"min\":[1],\"max\":[1],\"active\":[516],\"intlPrevMonth\":[1,\"intl-prev-month\"],\"intlNextMonth\":[1,\"intl-next-month\"],\"locale\":[1],\"noCalendarInput\":[4,\"no-calendar-input\"],\"scale\":[513],\"activeDate\":[32]},[[0,\"blur\",\"focusOutHandler\"],[8,\"focusin\",\"focusInHandler\"],[0,\"keyup\",\"keyDownHandler\"]]],[1,\"calcite-date-month\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1],\"scale\":[513]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"focusout\",\"disableActiveFocus\"]]],[1,\"calcite-date-month-header\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1],\"intlPrevMonth\":[1,\"intl-prev-month\"],\"intlNextMonth\":[1,\"intl-next-month\"],\"scale\":[513]}],[1,\"calcite-date-day\",{\"day\":[2],\"disabled\":[516],\"currentMonth\":[516,\"current-month\"],\"selected\":[516],\"active\":[516],\"locale\":[1],\"scale\":[513]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]]]"), options);
    });
};
export { defineCustomElements };
