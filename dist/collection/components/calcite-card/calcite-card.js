import { Component, Element, Event, h, Host, Prop } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import { getElementDir } from "../../utils/dom";
import { getKey } from "../../utils/key";
/**
 * @slot thumbnail - A slot for adding a thumnail to the card.
 * @slot - A slot for adding subheader/description content.
 * @slot title - A slot for adding a card title.
 * @slot subtitle - A slot for adding a card subtitle or short summary.
 * @slot footer-leading - A slot for adding a leading footer.
 * @slot footer-trailing - A slot for adding a trailing footer.
 */
/** Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
 */
export class CalciteCard {
    constructor() {
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
        this.loading = false;
        /** Indicates whether the card is selected. */
        this.selected = false;
        /** Indicates whether the card is selectable. */
        this.selectable = false;
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir },
            h("div", { class: "calcite-card-container" },
                this.loading ? (h("div", { class: "calcite-card-loader-container" },
                    h("calcite-loader", { active: true }))) : null,
                h("section", { class: { [CSS.container]: true }, "aria-busy": this.loading },
                    this.selectable ? this.renderCheckbox() : null,
                    this.renderThumbnail(),
                    this.renderHeader(),
                    h("div", { class: "card-content" },
                        h("slot", null)),
                    this.renderFooter()))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    cardSelectClick() {
        this.selectCard();
    }
    cardSelectKeyDown(e) {
        switch (getKey(e.key)) {
            case " ":
            case "Enter":
                this.selectCard();
                e.preventDefault();
                break;
        }
    }
    selectCard() {
        this.selected = !this.selected;
        this.calciteCardSelect.emit();
    }
    renderThumbnail() {
        const hasThumbnail = this.el.querySelector(`[slot=${SLOTS.thumbnail}]`);
        return hasThumbnail ? (h("div", { class: CSS.thumbnailWrapper },
            h("slot", { name: SLOTS.thumbnail }))) : null;
    }
    renderCheckbox() {
        return (h("div", { class: CSS.checkboxWrapper, onClick: () => this.cardSelectClick(), onKeyDown: (e) => this.cardSelectKeyDown(e) },
            h("calcite-checkbox", { theme: this.theme, checked: this.selected })));
    }
    renderHeader() {
        const title = this.el.querySelector(`[slot=${SLOTS.title}]`);
        const subtitle = this.el.querySelector(`[slot=${SLOTS.subtitle}]`);
        const hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS.header },
            h("slot", { name: SLOTS.title }),
            h("slot", { name: SLOTS.subtitle }))) : null;
    }
    renderFooter() {
        const leadingFooter = this.el.querySelector(`[slot=${SLOTS.footerLeading}]`);
        const trailingFooter = this.el.querySelector(`[slot=${SLOTS.footerTrailing}]`);
        const hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS.footer },
            h("slot", { name: SLOTS.footerLeading }),
            h("slot", { name: SLOTS.footerTrailing }))) : null;
    }
    static get is() { return "calcite-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-card.css"]
    }; }
    static get properties() { return {
        "loading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "When true, the cards content is waiting to be loaded. This state shows a busy indicator."
            },
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "selected": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates whether the card is selected."
            },
            "attribute": "selected",
            "reflect": true,
            "defaultValue": "false"
        },
        "selectable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates whether the card is selectable."
            },
            "attribute": "selectable",
            "reflect": true,
            "defaultValue": "false"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"light\" | \"dark\"",
                "resolved": "\"dark\" | \"light\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme of the card."
            },
            "attribute": "theme",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "calciteCardSelect",
            "name": "calciteCardSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Fired when a selectable card is selected"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
