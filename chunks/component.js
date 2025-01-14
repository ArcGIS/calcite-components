import { l as g } from "./logger.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
function s(r) {
  return r === "l" ? "m" : "s";
}
function t(r, i, a) {
  !r[i] && !r[a] && g.warn(`[${r.el.localName}] "${i.toString()}" or "${a.toString()}" is required.`);
}
export {
  s as g,
  t as w
};
