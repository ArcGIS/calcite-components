import { h as F, L as A, k as n, x as h, s as o, q as D, j as T } from "./iframe.js";
import { i as f } from "./keyed.js";
import { e as L, n as u } from "./ref.js";
import { e as v, r as $, b as z, f as H, c as O, h as U, F as g } from "./floating-ui.js";
import { u as R, c as B, d as m, a as b } from "./focusTrapComponent.js";
import { F as S, f as I, t as q, q as _ } from "./dom.js";
import { g as N } from "./guid.js";
import { o as E } from "./openCloseComponent.js";
import { H as M } from "./Heading.js";
import { c as j, s as K, a as V } from "./loadable.js";
import { c as X } from "./observers.js";
import { F as G } from "./FloatingArrow.js";
import { g as J } from "./component.js";
import { u as Q } from "./useT9n.js";
import { i as W } from "./key.js";
import { d as w, A as k, a as y, C as r } from "./resources13.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
class Y {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map(), this.registeredElementCount = 0, this.queryPopover = (e) => {
      const { registeredElements: t } = this, i = e.find((s) => t.has(s));
      return t.get(i);
    }, this.togglePopovers = (e) => {
      const t = e.composedPath(), i = this.queryPopover(t);
      i && !i.triggerDisabled && (i.open = !i.open), Array.from(this.registeredElements.values()).filter(
        (s) => s !== i && s.autoClose && s.open && !t.includes(s)
      ).forEach((s) => s.open = !1);
    }, this.keyDownHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" ? this.closeAllPopovers() : W(e.key) && this.togglePopovers(e));
    }, this.clickHandler = (e) => {
      S(e) || this.togglePopovers(e);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, t) {
    this.registeredElementCount++, this.registeredElements.set(e, t), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => e.open = !1);
  }
  addListeners() {
    window.addEventListener("click", this.clickHandler), window.addEventListener("keydown", this.keyDownHandler);
  }
  removeListeners() {
    window.removeEventListener("click", this.clickHandler), window.removeEventListener("keydown", this.keyDownHandler);
  }
}
const Z = F`:host{position:relative;display:block;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:.75rem;padding-block:.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}`, x = new Y();
class ee extends A {
  constructor() {
    super(...arguments), this.closeButtonEl = L(), this.guid = `calcite-popover-${N()}`, this.hasLoaded = !1, this.mutationObserver = X("mutation", () => this.updateFocusTrapElements()), this.openTransitionProp = "opacity", this.floatingLayout = "vertical", this.autoClose = !1, this.closable = !1, this.flipDisabled = !1, this.focusTrapDisabled = !1, this.messages = Q(), this.offsetDistance = v, this.offsetSkidding = 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = w, this.pointerDisabled = !1, this.scale = "m", this.triggerDisabled = !1, this.calcitePopoverBeforeClose = n({ cancelable: !1 }), this.calcitePopoverBeforeOpen = n({ cancelable: !1 }), this.calcitePopoverClose = n({ cancelable: !1 }), this.calcitePopoverOpen = n({ cancelable: !1 });
  }
  static {
    this.properties = { floatingLayout: 16, referenceEl: 16, autoClose: 7, closable: 7, flipDisabled: 7, flipPlacements: 0, focusTrapDisabled: 7, heading: 1, headingLevel: 11, initialFocusTrapFocus: 5, label: 1, messageOverrides: 0, offsetDistance: 11, offsetSkidding: 11, open: 7, overlayPositioning: 3, placement: 3, pointerDisabled: 7, referenceElement: 1, scale: 3, triggerDisabled: 7 };
  }
  static {
    this.styles = Z;
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = !1) {
    const { referenceEl: t, placement: i, overlayPositioning: s, flipDisabled: l, filteredFlipPlacements: c, offsetDistance: a, offsetSkidding: d, arrowEl: p, floatingEl: C } = this;
    return $(this, {
      floatingEl: C,
      referenceEl: t,
      overlayPositioning: s,
      placement: i,
      flipDisabled: l,
      flipPlacements: c,
      offsetDistance: a,
      offsetSkidding: d,
      arrowEl: p,
      type: "popover"
    }, e);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await j(this), this.requestUpdate(), I(this.el);
  }
  /** Updates the element(s) that are used within the focus-trap of the component. */
  async updateFocusTrapElements() {
    R(this);
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.setFilteredPlacements(), B(this, {
      focusTrapEl: this.el,
      focusTrapOptions: {
        allowOutsideClick: !0,
        escapeDeactivates: (e) => (e.defaultPrevented || (this.open = !1, e.preventDefault()), !1),
        initialFocus: this.initialFocusTrapFocus
      }
    }), requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
  }
  async load() {
    K(this);
  }
  willUpdate(e) {
    e.has("focusTrapDisabled") && (this.hasUpdated || this.focusTrapDisabled !== !1) && this.handleFocusTrapDisabled(this.focusTrapDisabled), e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("open") && (this.hasUpdated || this.open !== !1) && this.openHandler(), (e.has("offsetDistance") && (this.hasUpdated || this.offsetDistance !== v) || e.has("offsetSkidding") && (this.hasUpdated || this.offsetSkidding !== 0) || e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || e.has("placement") && (this.hasUpdated || this.placement !== w)) && this.reposition(!0), e.has("referenceElement") && this.referenceElementHandler();
  }
  loaded() {
    V(this), this.referenceElement && !this.referenceEl && this.setUpReferenceElement(), this.open && E(this), this.hasLoaded = !0;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect(), this.removeReferences(), z(this), m(this);
  }
  // #endregion
  // #region Private Methods
  handleFocusTrapDisabled(e) {
    this.open && (e ? m(this) : b(this));
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  openHandler() {
    E(this), this.reposition(!0), this.setExpandedAttr();
  }
  referenceElementHandler() {
    this.setUpReferenceElement(), this.reposition(!0);
  }
  setFloatingEl(e) {
    this.floatingEl = e, e && requestAnimationFrame(() => this.setUpReferenceElement());
  }
  setTransitionEl(e) {
    this.transitionEl = e;
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t } = this;
    this.filteredFlipPlacements = t ? H(t, e) : null;
  }
  setUpReferenceElement(e = !0) {
    this.removeReferences(), this.referenceEl = this.getReferenceElement(), O(this);
    const { el: t, referenceElement: i, referenceEl: s } = this;
    e && i && !s && console.warn(`${t.tagName}: reference-element id "${i}" was not found.`, {
      el: t
    }), this.addReferences();
  }
  getId() {
    return this.el.id || this.guid;
  }
  setExpandedAttr() {
    const { referenceEl: e, open: t } = this;
    e && "setAttribute" in e && e.setAttribute(k, q(t));
  }
  addReferences() {
    const { referenceEl: e } = this;
    if (!e)
      return;
    const t = this.getId();
    "setAttribute" in e && e.setAttribute(y, t), x.registerElement(e, this.el), this.setExpandedAttr();
  }
  removeReferences() {
    const { referenceEl: e } = this;
    e && ("removeAttribute" in e && (e.removeAttribute(y), e.removeAttribute(k)), x.unregisterElement(e));
  }
  getReferenceElement() {
    const { referenceElement: e, el: t } = this;
    return (typeof e == "string" ? _(t, { id: e }) : e) || null;
  }
  hide() {
    this.open = !1;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit(), b(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit(), U(this), m(this);
  }
  storeArrowEl(e) {
    this.arrowEl = e, this.reposition(!0);
  }
  // #endregion
  // #region Rendering
  renderCloseButton() {
    const { messages: e, closable: t } = this;
    return t ? f(r.closeButtonContainer, h`<div class=${o(r.closeButtonContainer)}><calcite-action appearance=transparent class=${o(r.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${e.close} ${u(this.closeButtonEl)}><calcite-icon icon=x .scale=${J(this.scale)}></calcite-icon></calcite-action></div>`) : null;
  }
  renderHeader() {
    const { heading: e, headingLevel: t } = this, i = e ? M({ class: r.heading, level: t, children: e }) : null;
    return i ? f(r.header, h`<div class=${o(r.header)}>${i}${this.renderCloseButton()}</div>`) : null;
  }
  render() {
    const { referenceEl: e, heading: t, label: i, open: s, pointerDisabled: l, floatingLayout: c } = this, a = e && s, d = !a, p = l ? null : f("floating-arrow", G({ floatingLayout: c, ref: this.storeArrowEl }));
    return this.el.inert = d, this.el.ariaLabel = i, this.el.ariaLive = "polite", D(this.el, "id", this.getId()), this.el.role = "dialog", h`<div class=${o(r.positionContainer)} ${u(this.setFloatingEl)}><div class=${o({
      [r.container]: !0,
      [g.animation]: !0,
      [g.animationActive]: a
    })} ${u(this.setTransitionEl)}>${p}<div class=${o({
      [r.hasHeader]: !!t,
      [r.headerContainer]: !0
    })}>${this.renderHeader()}<div class=${o(r.content)}><slot></slot></div>${t ? null : this.renderCloseButton()}</div></div></div>`;
  }
}
T("calcite-popover", ee);
export {
  ee as Popover
};
