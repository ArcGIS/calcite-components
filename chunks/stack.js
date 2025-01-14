import { h as c, L as l, x as n, s as e, j as d } from "./iframe.js";
import { i } from "./keyed.js";
import { s as a } from "./dom.js";
import { S as o, C as s } from "./resources11.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const r = c`:host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, .75rem);padding-block:var(--calcite-stack-padding-block, .5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}`;
class h extends l {
  constructor() {
    super(...arguments), this.hasActionsEnd = !1, this.hasActionsStart = !1, this.hasContentEnd = !1, this.hasContentStart = !1, this.disabled = !1;
  }
  static {
    this.properties = { hasActionsEnd: 16, hasActionsStart: 16, hasContentEnd: 16, hasContentStart: 16, disabled: 7 };
  }
  static {
    this.styles = r;
  }
  // #endregion
  // #region Private Methods
  handleActionsStartSlotChange(t) {
    this.hasActionsStart = a(t);
  }
  handleActionsEndSlotChange(t) {
    this.hasActionsEnd = a(t);
  }
  handleContentStartSlotChange(t) {
    this.hasContentStart = a(t);
  }
  handleContentEndSlotChange(t) {
    this.hasContentEnd = a(t);
  }
  // #endregion
  // #region Rendering
  renderActionsStart() {
    const { hasActionsStart: t } = this;
    return i("actions-start-container", n`<div class=${e(s.actionsStart)} .hidden=${!t}><slot name=${o.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`);
  }
  renderActionsEnd() {
    const { hasActionsEnd: t } = this;
    return i("actions-end-container", n`<div class=${e(s.actionsEnd)} .hidden=${!t}><slot name=${o.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>`);
  }
  renderContentStart() {
    const { hasContentStart: t } = this;
    return n`<div class=${e(s.contentStart)} .hidden=${!t}><slot name=${o.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`;
  }
  renderDefaultContent() {
    return n`<div class=${e(s.content)}><slot></slot></div>`;
  }
  renderContentEnd() {
    const { hasContentEnd: t } = this;
    return n`<div class=${e(s.contentEnd)} .hidden=${!t}><slot name=${o.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`;
  }
  render() {
    return n`<div class=${e(s.container)}>${this.renderActionsStart()}${this.renderContentStart()}${this.renderDefaultContent()}${this.renderContentEnd()}${this.renderActionsEnd()}</div>`;
  }
}
d("calcite-stack", h);
export {
  h as Stack
};
