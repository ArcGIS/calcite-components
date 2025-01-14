import { i as r } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const c = "calcite-list", o = "calcite-list-item-group", i = "calcite-list-item";
function a(s) {
  const t = s.parentElement?.closest(i);
  t && (t.open = !0, a(t));
}
function f(s) {
  const t = s.assignedElements({ flatten: !0 }), e = t.filter((n) => n?.matches(o)).map((n) => Array.from(n.querySelectorAll(i))).flat(), l = t.filter((n) => n?.matches(i));
  return {
    lists: t.filter((n) => n?.matches(c)),
    items: e.concat(l)
  };
}
function h(s) {
  const t = s.assignedElements({ flatten: !0 }).filter((e) => e?.matches(i));
  t.forEach((e) => {
    e.setPosition = t.indexOf(e) + 1, e.setSize = t.length;
  });
}
function p(s, t = !1) {
  if (!r())
    return 0;
  const e = t ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  return document.evaluate(e, s, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}
export {
  f as a,
  i as b,
  o as c,
  p as g,
  c as l,
  a as o,
  h as u
};
