import { h as s, L as i, q as l, x as a, s as n, j as c } from "./iframe.js";
import { g as o } from "./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const e = {
  container: "container",
  selected: "selected"
}, r = s`:host{display:flex}.container{display:none;inline-size:var(--calcite-container-size-content-fluid)}:host([selected]) .container{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
class d extends i {
  constructor() {
    super(...arguments), this.guid = `calcite-carousel-item-${o()}`, this.selected = !1;
  }
  static {
    this.properties = { label: 1, selected: 7 };
  }
  static {
    this.styles = r;
  }
  // #endregion
  // #region Rendering
  render() {
    const t = this.el.id || this.guid;
    return l(this.el, "id", t), a`<div .ariaLabel=${this.label} class=${n({ [e.container]: !0, [e.selected]: this.selected })} role=tabpanel><slot></slot></div>`;
  }
}
c("calcite-carousel-item", d);
export {
  d as CarouselItem
};
