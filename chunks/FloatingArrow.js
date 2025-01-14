import { n as w } from "./ref.js";
import { i as g } from "./keyed.js";
import { x as f, s as $, E as s, d as n } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const c = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
}, k = {
  width: 12,
  height: 6,
  strokeWidth: 1
}, v = ({ floatingLayout: h, key: l, ref: d }) => {
  const { width: t, height: r, strokeWidth: o } = k, i = t / 2, a = h === "vertical", e = `M0,0 H${t} L${t - i},${r} Q${i},${r} ${i},${r} Z`;
  return g(l, f`<svg aria-hidden=true class=${$(c.arrow)} height=${t ?? s} viewBox=${`0 0 ${t} ${t + (a ? 0 : o)}`} width=${t + (a ? o : 0)} ${w(d)}>${n`${o > 0 && n`<path class=${$(c.arrowStroke)} d=${e ?? s} fill=none stroke-width=${o + 1} />` || ""}<path d=${e ?? s} stroke=none />`}</svg>`);
};
export {
  v as F
};
