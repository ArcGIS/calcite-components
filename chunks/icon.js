import { g as v, h as x, L as I, i as C, x as z, s as y, d as u, E as p, j as $ } from "./iframe.js";
import { g as D, t as k } from "./dom.js";
import { c as w } from "./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const N = {
  icon: "icon",
  flipRtl: "flip-rtl"
}, f = {}, d = {}, b = {
  s: 16,
  m: 24,
  l: 32
};
function m({ icon: i, scale: t }) {
  const s = b[t], e = L(i), n = e.charAt(e.length - 1) === "F";
  return `${n ? e.substring(0, e.length - 1) : e}${s}${n ? "F" : ""}`;
}
async function P(i) {
  const t = m(i), s = g(t);
  if (s)
    return s;
  d[t] || (d[t] = fetch(v(`./assets/icon/${t}.json`)).then((n) => n.json()).catch(() => (console.error(`"${t}" is not a valid calcite-ui-icon name`), "")));
  const e = await d[t];
  return f[t] = e, e;
}
function O(i) {
  return g(m(i));
}
function g(i) {
  return f[i];
}
function L(i) {
  const t = !isNaN(Number(i.charAt(0))), s = i.split("-");
  if (s.length > 0) {
    const n = /[a-z]/i;
    i = s.map((a, r) => a.replace(n, function(c, h) {
      return r === 0 && h === 0 ? c : c.toUpperCase();
    })).join("");
  }
  return t ? `i${i}` : i;
}
const U = x`:host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
class E extends I {
  constructor() {
    super(...arguments), this.visible = !1, this.flipRtl = !1, this.icon = null, this.preload = !1, this.scale = "m";
  }
  static {
    this.properties = { pathData: 16, visible: 16, flipRtl: 7, icon: 3, preload: 7, scale: 3, textLabel: 1 };
  }
  static {
    this.styles = U;
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    if (super.connectedCallback(), this.preload) {
      this.visible = !0, this.loadIconPathData();
      return;
    }
    this.visible || this.waitUntilVisible(() => {
      this.visible = !0, this.loadIconPathData();
    });
  }
  willUpdate(t) {
    (t.has("icon") && (this.hasUpdated || this.icon !== null) || t.has("scale") && (this.hasUpdated || this.scale !== "m")) && this.loadIconPathData();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.intersectionObserver?.disconnect(), this.intersectionObserver = null;
  }
  // #endregion
  // #region Private Methods
  async loadIconPathData() {
    const { icon: t, scale: s, visible: e } = this;
    if (!C() || !t || !e)
      return;
    const n = { icon: t, scale: s }, a = O(n) || await P(n);
    t === this.icon && (this.pathData = a);
  }
  waitUntilVisible(t) {
    if (this.intersectionObserver = w("intersection", (s) => {
      s.forEach((e) => {
        e.isIntersecting && (this.intersectionObserver.disconnect(), this.intersectionObserver = null, t());
      });
    }, { rootMargin: "50px" }), !this.intersectionObserver) {
      t();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  // #endregion
  // #region Rendering
  render() {
    const { el: t, flipRtl: s, pathData: e, scale: n, textLabel: a } = this, r = D(t), l = b[n], c = !!a, h = [].concat(e || "");
    return this.el.ariaHidden = k(!c), this.el.ariaLabel = c ? a : null, this.el.role = c ? "img" : null, z`<svg aria-hidden=true class=${y({
      [N.flipRtl]: r === "rtl" && s,
      svg: !0
    })} fill=currentColor height=100% viewBox=${`0 0 ${l} ${l}`} width=100% xmlns=http://www.w3.org/2000/svg>${h.map((o) => typeof o == "string" ? u`<path d=${o ?? p} />` : u`<path d=${o.d ?? p} opacity=${("opacity" in o ? o.opacity : 1) ?? p} />`)}</svg>`;
  }
}
$("calcite-icon", E);
export {
  E as Icon
};
