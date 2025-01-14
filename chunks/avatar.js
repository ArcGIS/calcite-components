import { h as b, L as f, x as o, y as d, s as c, o as g, j as v } from "./iframe.js";
import { y as p } from "./dom.js";
import { w as k, q as m } from "./utils4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const u = {
  thumbnail: "thumbnail",
  background: "background",
  initials: "initials",
  icon: "icon"
};
function x(i) {
  i = z(i);
  let e = 0;
  for (let a = 0; a < i.length; a++)
    e = i.charCodeAt(a) + ((e << 5) - e);
  let t = "#";
  for (let a = 0; a < 3; a++) {
    const s = e >> a * 8 & 255;
    t += ("00" + s.toString(16)).substr(-2);
  }
  return t;
}
function z(i) {
  const e = Math.floor(i.length / 2), t = i.split("").reverse().join("");
  return t.substring(e) + t.slice(0, e);
}
function $(i) {
  let { r: e, g: t, b: a } = i;
  e /= 255, t /= 255, a /= 255;
  const s = Math.max(e, t, a), l = Math.min(e, t, a), r = s - l;
  if (s === l)
    return 0;
  let n = (s + l) / 2;
  switch (s) {
    case e:
      n = (t - a) / r + (t < a ? 6 : 0);
      break;
    case t:
      n = (a - e) / r + 2;
      break;
    case a:
      n = (e - t) / r + 4;
      break;
  }
  return Math.round(n * 60);
}
function y(i) {
  return $(k(i));
}
const C = b`:host{display:inline-block;overflow:hidden;border-radius:var(--calcite-avatar-corner-radius, 50%);color:var(--calcite-avatar-color, var(--calcite-color-text-2))}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:var(--calcite-avatar-corner-radius, 50%)}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase}.thumbnail{block-size:100%;inline-size:100%;border-radius:var(--calcite-avatar-corner-radius, 50%)}:host([hidden]){display:none}[hidden]{display:none}`;
class T extends f {
  constructor() {
    super(...arguments), this.thumbnailFailedToLoad = !1, this.scale = "m";
  }
  static {
    this.properties = { thumbnailFailedToLoad: 16, fullName: 3, label: 1, scale: 3, thumbnail: 3, userId: 3, username: 3 };
  }
  static {
    this.styles = C;
  }
  // #endregion
  // #region Private Methods
  determineContent() {
    if (this.thumbnail && !this.thumbnailFailedToLoad)
      return o`<img alt=${(this.label || "") ?? d} class=${c(u.thumbnail)} @error=${() => this.thumbnailFailedToLoad = !0} src=${this.thumbnail ?? d}>`;
    const e = this.generateInitials(), t = this.generateFillColor();
    return o`<span .ariaLabel=${this.label || this.fullName} class=${c(u.background)} role=figure style=${g({ backgroundColor: t })}>${e ? o`<span aria-hidden=true class=${c(u.initials)}>${e}</span>` : o`<calcite-icon class=${c(u.icon)} icon=user .scale=${this.scale}></calcite-icon>`}</span>`;
  }
  /** Generate a valid background color that is consistent and unique to this user */
  generateFillColor() {
    const { userId: e, username: t, fullName: a, el: s } = this, l = p(s), r = e && `#${e.substr(e.length - 6)}`, n = t || a || "", h = r && m(r) ? r : x(n);
    return !e && !n || !m(h) ? "var(--calcite-avatar-background-color, var(--calcite-color-foreground-2))" : `var(--calcite-avatar-background-color, hsl(${y(h)}, 60%, ${l === "dark" ? 20 : 90}%))`;
  }
  /** Use fullName or username to generate initials */
  generateInitials() {
    const { fullName: e, username: t } = this;
    return e ? e.trim().split(" ").map((a) => a.substring(0, 1)).join("") : t ? t.substring(0, 2) : !1;
  }
  // #endregion
  // #region Rendering
  render() {
    return this.determineContent();
  }
}
v("calcite-avatar", T);
export {
  T as Avatar
};
