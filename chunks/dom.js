import { g as W } from "./guid.js";
import { C as N } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var F = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], y = /* @__PURE__ */ F.join(","), O = typeof Element > "u", d = O ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, p = !O && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, S = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), u = a === "" || a === "true", i = u || n && t && e(t.parentNode);
  return i;
}, U = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, L = function(t, n, r) {
  if (S(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(y));
  return n && d.call(t, y) && a.unshift(t), a = a.filter(r), a;
}, k = function e(t, n, r) {
  for (var a = [], u = Array.from(t); u.length; ) {
    var i = u.shift();
    if (!S(i, !1))
      if (i.tagName === "SLOT") {
        var o = i.assignedElements(), s = o.length ? o : i.children, l = e(s, !0, r);
        r.flatten ? a.push.apply(a, l) : a.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var f = d.call(i, y);
        f && r.filter(i) && (n || !t.includes(i)) && a.push(i);
        var c = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), g = !S(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (c && g) {
          var h = e(c === !0 ? i.children : c.children, !0, r);
          r.flatten ? a.push.apply(a, h) : a.push({
            scopeParent: i,
            candidates: h
          });
        } else
          u.unshift.apply(u, i.children);
      }
  }
  return a;
}, M = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, B = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || U(t)) && !M(t) ? 0 : t.tabIndex;
}, j = function(t, n) {
  var r = B(t);
  return r < 0 && n && !M(t) ? 0 : r;
}, z = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, P = function(t) {
  return t.tagName === "INPUT";
}, X = function(t) {
  return P(t) && t.type === "hidden";
}, H = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, V = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Y = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || p(t), r = function(o) {
    return n.querySelectorAll('input[type="radio"][name="' + o + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = r(window.CSS.escape(t.name));
  else
    try {
      a = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var u = V(a, t.form);
  return !u || u === t;
}, Z = function(t) {
  return P(t) && t.type === "radio";
}, K = function(t) {
  return Z(t) && !Y(t);
}, J = function(t) {
  var n, r = t && p(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, u = !1;
  if (r && r !== t) {
    var i, o, s;
    for (u = !!((i = a) !== null && i !== void 0 && (o = i.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (s = t.ownerDocument) !== null && s !== void 0 && s.contains(t)); !u && a; ) {
      var l, f, c;
      r = p(a), a = (l = r) === null || l === void 0 ? void 0 : l.host, u = !!((f = a) !== null && f !== void 0 && (c = f.ownerDocument) !== null && c !== void 0 && c.contains(a));
    }
  }
  return u;
}, R = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Q = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var u = d.call(t, "details>summary:first-of-type"), i = u ? t.parentElement : t;
  if (d.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var o = t; t; ) {
        var s = t.parentElement, l = p(t);
        if (s && !s.shadowRoot && a(s) === !0)
          return R(t);
        t.assignedSlot ? t = t.assignedSlot : !s && l !== t.ownerDocument ? t = l.host : t = s;
      }
      t = o;
    }
    if (J(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return R(t);
  return !1;
}, _ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return d.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, T = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  S(n) || X(n) || Q(n, t) || // For a details element with a summary, the summary element gets the focus
  H(n) || _(n));
}, I = function(t, n) {
  return !(K(n) || B(n) < 0 || !T(t, n));
}, tt = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, et = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, u) {
    var i = !!a.scopeParent, o = i ? a.scopeParent : a, s = j(o, i), l = i ? e(a.candidates) : o;
    s === 0 ? i ? n.push.apply(n, l) : n.push(o) : r.push({
      documentOrder: u,
      tabIndex: s,
      item: a,
      isScope: i,
      content: l
    });
  }), r.sort(z).reduce(function(a, u) {
    return u.isScope ? a.push.apply(a, u.content) : a.push(u.content), a;
  }, []).concat(n);
}, nt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = k([t], n.includeContainer, {
    filter: I.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: tt
  }) : r = L(t, n.includeContainer, I.bind(null, n)), et(r);
}, pt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = k([t], n.includeContainer, {
    filter: T.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = L(t, n.includeContainer, T.bind(null, n)), r;
}, St = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return d.call(t, y) === !1 ? !1 : I(n, t);
}, rt = /* @__PURE__ */ F.concat("iframe").join(","), Tt = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return d.call(t, rt) === !1 ? !1 : T(n, t);
};
const at = {
  getShadowRoot: !0
};
function wt(e) {
  return e ? e.id = e.id || `${e.tagName.toLowerCase()}-${W()}` : "";
}
function Et(e) {
  return Array.isArray(e) ? e : Array.from(e);
}
function Ct(e) {
  const t = x(
    e,
    `.${N.darkMode}, .${N.lightMode}, .${N.autoMode}`
  );
  return t?.classList.contains("calcite-mode-dark") || t?.classList.contains("calcite-mode-auto") && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Nt(e) {
  const t = "dir", n = `[${t}]`, r = x(e, n);
  return r ? r.getAttribute(t) : "ltr";
}
function It(e) {
  return e ? parseFloat(getComputedStyle(e).inlineSize) : 0;
}
function A(e) {
  return e.getRootNode();
}
function At(e) {
  const t = A(e);
  return "host" in t ? t : null;
}
function xt(e, t) {
  if (!e)
    return 0;
  const r = document.createElement("canvas").getContext("2d");
  return r.font = t, r.measureText(e).width;
}
function q(e) {
  return e.host || null;
}
function it(e, {
  selector: t,
  id: n
}) {
  if (!e)
    return null;
  e.assignedSlot && (e = e.assignedSlot);
  const r = A(e);
  return (n ? "getElementById" in r ? (
    /*
      Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
      https://github.com/Esri/calcite-design-system/pull/4280
       */
    r.getElementById(n)
  ) : null : t ? r.querySelector(t) : null) || it(q(r), { selector: t, id: n });
}
function x(e, t) {
  return e ? e.closest(t) || x(q(A(e)), t) : null;
}
function ut(e) {
  return typeof e?.setFocus == "function";
}
async function ot(e) {
  if (e)
    return ut(e) ? e.setFocus() : e.focus();
}
function st(e) {
  if (e)
    return nt(e, at)[0] ?? e;
}
function Rt(e) {
  st(e)?.focus();
}
function Dt(e, t) {
  return Array.from(e.children).filter((n) => n.matches(t));
}
function lt(e, t) {
  return e.filter((n) => n.matches(t));
}
function Ft(e, t, n) {
  if (typeof t == "string" && t !== "")
    return t;
  if (t === "" || t === !0)
    return e[n];
}
function Ot(e, t) {
  return !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top);
}
function Lt(e) {
  return (!!e).toString();
}
function kt(e) {
  return ht(e) || ft(e);
}
function ct(e) {
  return dt(e).filter((t) => t.nodeType === Node.TEXT_NODE).map((t) => t.textContent).join("").trim();
}
function Mt(e) {
  for (const t of e.childNodes)
    if (t.nodeType === Node.TEXT_NODE && t.textContent?.trim() !== "" || t.nodeType === Node.ELEMENT_NODE)
      return !0;
  return !1;
}
function ft(e) {
  return !!ct(e);
}
function dt(e) {
  return e.currentTarget.assignedNodes({
    flatten: !0
  });
}
function ht(e) {
  return !!bt(e).length;
}
function bt(e, t) {
  return vt(e.target, t);
}
function vt(e, t) {
  const n = e.assignedElements({
    flatten: !0
  });
  return t ? lt(n, t) : n;
}
function Bt(e) {
  return !!(e.isPrimary && e.button === 0);
}
function Pt(e) {
  return e.detail === 0;
}
const qt = (e, t, n, r = !0) => {
  const a = e.indexOf(t), u = a === 0, i = a === e.length - 1;
  r && (n = n === "previous" && u ? "last" : n === "next" && i ? "first" : n);
  let o;
  return n === "previous" ? o = e[a - 1] || e[r ? e.length - 1 : a] : n === "next" ? o = e[a + 1] || e[r ? 0 : a] : n === "last" ? o = e[e.length - 1] : o = e[0], ot(o), o;
};
function $t(e, t) {
  if (e.parentNode !== t.parentNode)
    return !1;
  const n = Array.from(e.parentNode.children);
  return n.indexOf(e) < n.indexOf(t);
}
async function Gt(e, t, n, r) {
  return $(e, t, "animation", n, r);
}
async function Wt(e, t, n, r) {
  return $(e, t, "transition", n, r);
}
async function $(e, t, n, r, a) {
  const u = window.getComputedStyle(e), i = n === "transition" ? u.transitionDuration : u.animationDuration, o = n === "transition" ? u.transitionProperty : u.animationName, s = i.split(","), f = o.split(",").map((m) => m.trim()).indexOf(t), c = s[f] ?? /* Safari will have a single duration value for the shorthand prop when multiple, separate names/props are defined,
  so we fall back to it if there's no matching prop duration */
  s[0];
  function g() {
    requestAnimationFrame(() => {
      r?.(), requestAnimationFrame(() => a?.());
    });
  }
  if (c === "0s") {
    g();
    return;
  }
  const h = n === "transition" ? "transitionstart" : "animationstart", w = n === "transition" ? "transitionend" : "animationend", E = n === "transition" ? "transitioncancel" : "animationcancel";
  return new Promise((m) => {
    const G = window.setTimeout(
      () => {
        e.removeEventListener(h, C), e.removeEventListener(w, b), e.removeEventListener(E, b), g(), m();
      },
      parseFloat(c) * 1e3
    );
    e.addEventListener(h, C), e.addEventListener(w, b), e.addEventListener(E, b);
    function C(v) {
      v.target === e && D(v) === t && (window.clearTimeout(G), e.removeEventListener(h, C), r?.());
    }
    function b(v) {
      v.target === e && D(v) === t && (e.removeEventListener(w, b), e.removeEventListener(E, b), a?.(), m());
    }
  });
}
function gt(e) {
  return "propertyName" in e;
}
function D(e) {
  return gt(e) ? e.propertyName : e.animationName;
}
function Ut(e) {
  return e.endsWith("px");
}
export {
  xt as A,
  kt as B,
  A as C,
  Ot as D,
  wt as E,
  Pt as F,
  Dt as G,
  vt as H,
  At as I,
  ot as a,
  qt as b,
  x as c,
  bt as d,
  Bt as e,
  Rt as f,
  Nt as g,
  Ut as h,
  $t as i,
  Tt as j,
  nt as k,
  pt as l,
  St as m,
  Et as n,
  B as o,
  at as p,
  it as q,
  st as r,
  ht as s,
  Lt as t,
  Ft as u,
  Mt as v,
  Wt as w,
  Gt as x,
  Ct as y,
  It as z
};
