import { h as C, L as j, x as v, y as $, d as m, j as O } from "./iframe.js";
import { g as Y } from "./guid.js";
import { c as Z } from "./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
function G(i, n, a) {
  const s = n[0] - i[0], o = a[0] - n[0], h = n[1] - i[1], c = a[1] - n[1], r = h / (s || o < 0 && 0), e = c / (o || s < 0 && 0), t = (r * o + e * s) / (s + o);
  return (Math.sign(r) + Math.sign(e)) * Math.min(Math.abs(r), Math.abs(e), 0.5 * Math.abs(t)) || 0;
}
function L(i, n, a) {
  const s = n[0] - i[0], o = n[1] - i[1];
  return s ? (3 * o / s - a) / 2 : a;
}
function w(i, n, a, s, o) {
  const [h, c] = i, [r, e] = n, t = (r - h) / 3, l = o([h + t, c + t * a]).join(","), d = o([r - t, e - t * s]).join(","), g = o([r, e]).join(",");
  return `C ${l} ${d} ${g}`;
}
function S({ width: i, height: n, min: a, max: s }) {
  const o = s[0] - a[0], h = s[1] - a[1];
  return (c) => {
    const r = (c[0] - a[0]) / o * i, e = n - c[1] / h * n;
    return [r, e];
  };
}
function A(i) {
  const [n, a] = i[0], s = [n, a], o = [n, a];
  return i.reduce(
    ({ min: h, max: c }, [r, e]) => ({
      min: [Math.min(h[0], r), Math.min(h[1], e)],
      max: [Math.max(c[0], r), Math.max(c[1], e)]
    }),
    { min: s, max: o }
  );
}
function B({ data: i, min: n, max: a, t: s }) {
  if (i.length === 0)
    return "";
  const [o, h] = s(i[0]), [c, r] = s(n), [e] = s(a);
  let t, l, d;
  const g = i.reduce((x, M, p) => {
    if (l = i[p - 2], d = i[p - 1], p > 1) {
      const u = G(l, d, M), b = t === void 0 ? L(l, d, u) : t, k = w(l, d, b, u, s);
      return t = u, `${x} ${k}`;
    }
    return x;
  }, `M ${c},${r} L ${c},${h} L ${o},${h}`), y = i[i.length - 1], f = w(d, y, t, L(d, y, t), s);
  return `${g} ${f} L ${e},${r} Z`;
}
const E = C`:host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0;display:block;block-size:100%;inline-size:100%;padding:0}.svg .graph-path--highlight{fill:var(--calcite-color-brand);opacity:.5}:host([hidden]){display:none}[hidden]{display:none}`;
class I extends j {
  constructor() {
    super(...arguments), this.graphId = `calcite-graph-${Y()}`, this.resizeObserver = Z("resize", () => this.requestUpdate()), this.data = [];
  }
  static {
    this.properties = { colorStops: 0, data: 0, highlightMax: 9, highlightMin: 9, max: 11, min: 11 };
  }
  static {
    this.styles = E;
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.resizeObserver?.disconnect();
  }
  // #endregion
  // #region Rendering
  render() {
    const { data: n, colorStops: a, el: s, highlightMax: o, highlightMin: h, min: c, max: r } = this, e = this.graphId, { clientHeight: t, clientWidth: l } = s;
    if (!n || n.length === 0)
      return v`<svg aria-hidden=true class="svg" height=${t ?? $} preserveAspectRatio=none viewBox=${`0 0 ${l} ${t}`} width=${l ?? $}></svg>`;
    const { min: d, max: g } = A(n);
    let y = d, f = g;
    (c < d[0] || c > d[0]) && (y = [c, 0]), (r > g[0] || r < g[0]) && (f = [r, g[1]]);
    const x = S({ min: y, max: f, width: l, height: t }), [M] = x([h, f[1]]), [p] = x([o, f[1]]), u = B({ data: n, min: d, max: g, t: x }), b = a ? `url(#linear-gradient-${e})` : void 0;
    return v`<svg aria-hidden=true class="svg" height=${t ?? $} preserveAspectRatio=none viewBox=${`0 0 ${l} ${t}`} width=${l ?? $}>${a ? m`<defs><linearGradient .id=${`linear-gradient-${e}`} x1=0 x2=1 y1=0 y2=0>${a.map(({ offset: k, color: z, opacity: X }) => m`<stop offset=${`${k * 100}%`} stop-color=${z ?? $} stop-opacity=${X ?? $} />`)}</linearGradient></defs>` : null}${h !== void 0 ? [
      m`<mask height=100% .id=${`${e}1`} width=100% x=0% y=0%><path d=${`
            M 0,0
            L ${M - 1},0
            L ${M - 1},${t}
            L 0,${t}
            Z
          `} fill=white /></mask>`,
      m`<mask height=100% .id=${`${e}2`} width=100% x=0% y=0%><path d=${`
            M ${M + 1},0
            L ${p - 1},0
            L ${p - 1},${t}
            L ${M + 1}, ${t}
            Z
          `} fill=white /></mask>`,
      m`<mask height=100% .id=${`${e}3`} width=100% x=0% y=0%><path d=${`
                M ${p + 1},0
                L ${l},0
                L ${l},${t}
                L ${p + 1}, ${t}
                Z
              `} fill=white /></mask>`,
      m`<path class="graph-path" d=${u ?? $} fill=${b ?? $} mask=${`url(#${e}1)`} />`,
      m`<path class="graph-path--highlight" d=${u ?? $} fill=${b ?? $} mask=${`url(#${e}2)`} />`,
      m`<path class="graph-path" d=${u ?? $} fill=${b ?? $} mask=${`url(#${e}3)`} />`
    ] : m`<path class="graph-path" d=${u ?? $} fill=${b ?? $} />`}</svg>`;
  }
}
O("calcite-graph", I);
export {
  I as Graph
};
