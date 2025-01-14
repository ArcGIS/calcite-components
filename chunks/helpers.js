import { i as o } from "./index5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const c = Object.keys(o).filter((e) => e.endsWith("16")).map((e) => e.replace("16", "")).sort((e, a) => {
  const r = /^i(\d)/;
  return e.replace(r, "$1").localeCompare(a.replace(r, "$1"));
});
export {
  c as i
};
