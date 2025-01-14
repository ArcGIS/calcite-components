import { i as o } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const t = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
function i(e) {
  a.set(e, new Promise((n) => t.set(e, n)));
}
function p(e) {
  t.get(e)();
}
function s(e) {
  return a.get(e);
}
async function u(e) {
  if (await s(e), !!o())
    return e.requestUpdate(), new Promise((n) => requestAnimationFrame(() => n()));
}
export {
  p as a,
  s as b,
  u as c,
  i as s
};
