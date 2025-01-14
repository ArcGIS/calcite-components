/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
function c() {
  return typeof window < "u";
}
function l(n) {
  return p(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function i(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function E(n) {
  var e;
  return (e = (p(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function p(n) {
  return c() ? n instanceof Node || n instanceof i(n).Node : !1;
}
function m(n) {
  return c() ? n instanceof Element || n instanceof i(n).Element : !1;
}
function w(n) {
  return c() ? n instanceof HTMLElement || n instanceof i(n).HTMLElement : !1;
}
function a(n) {
  return !c() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof i(n).ShadowRoot;
}
function y(n) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: o,
    display: r
  } = b(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + t) && !["inline", "contents"].includes(r);
}
function D(n) {
  return ["table", "td", "th"].includes(l(n));
}
function N(n) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return n.matches(e);
    } catch {
      return !1;
    }
  });
}
function T(n) {
  const e = L(), t = m(n) ? b(n) : n;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function C(n) {
  let e = u(n);
  for (; w(e) && !g(e); ) {
    if (T(e))
      return e;
    if (N(e))
      return null;
    e = u(e);
  }
  return null;
}
function L() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function g(n) {
  return ["html", "body", "#document"].includes(l(n));
}
function b(n) {
  return i(n).getComputedStyle(n);
}
function R(n) {
  return m(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function u(n) {
  if (l(n) === "html")
    return n;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    a(n) && n.host || // Fallback.
    E(n)
  );
  return a(e) ? e.host : e;
}
function h(n) {
  const e = u(n);
  return g(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : w(e) && y(e) ? e : h(e);
}
function d(n, e, t) {
  var o;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const r = h(n), S = r === ((o = n.ownerDocument) == null ? void 0 : o.body), s = i(r);
  if (S) {
    const f = k(s);
    return e.concat(s, s.visualViewport || [], y(r) ? r : [], f && t ? d(f) : []);
  }
  return e.concat(r, d(r, [], t));
}
function k(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
export {
  d as a,
  i as b,
  k as c,
  b as d,
  E as e,
  w as f,
  h as g,
  L as h,
  m as i,
  N as j,
  l as k,
  y as l,
  R as m,
  u as n,
  g as o,
  D as p,
  T as q,
  C as r
};
