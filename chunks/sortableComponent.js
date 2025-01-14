/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ft(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ft(Object(n), !0).forEach(function(o) {
      Xt(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Me(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Me = function(e) {
    return typeof e;
  } : Me = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(t);
}
function Xt(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function q() {
  return q = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, q.apply(this, arguments);
}
function Yt(t, e) {
  if (t == null) return {};
  var n = {}, o = Object.keys(t), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function kt(t, e) {
  if (t == null) return {};
  var n = Yt(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var Bt = "1.15.6";
function U(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var V = U(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ce = U(/Edge/i), dt = U(/firefox/i), we = U(/safari/i) && !U(/chrome/i) && !U(/android/i), rt = U(/iP(ad|od|hone)/i), Et = U(/chrome/i) && U(/android/i), yt = {
  capture: !1,
  passive: !1
};
function v(t, e, n) {
  t.addEventListener(e, n, !V && yt);
}
function m(t, e, n) {
  t.removeEventListener(e, n, !V && yt);
}
function ke(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function wt(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function H(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && ke(t, e) : ke(t, e)) || o && t === n)
        return t;
      if (t === n) break;
    } while (t = wt(t));
  }
  return null;
}
var ct = /\s+/g;
function R(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(ct, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(ct, " ");
    }
}
function h(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function de(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var o = h(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Dt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e), i = 0, r = o.length;
    if (n)
      for (; i < r; i++)
        n(o[i], i);
    return o;
  }
  return [];
}
function L() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function C(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, a, l, s, u, c, d;
    if (t !== window && t.parentNode && t !== L() ? (r = t.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, c = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !V))
      do
        if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || n && h(i, "position") !== "static")) {
          var b = i.getBoundingClientRect();
          a -= b.top + parseInt(h(i, "border-top-width")), l -= b.left + parseInt(h(i, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && t !== window) {
      var w = de(i || t), E = w && w.a, y = w && w.d;
      w && (a /= y, l /= E, d /= E, c /= y, s = a + c, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: c
    };
  }
}
function ht(t, e, n) {
  for (var o = ee(t, !0), i = C(t)[e]; o; ) {
    var r = C(o)[n], a = void 0;
    if (a = i >= r, !a) return o;
    if (o === L()) break;
    o = ee(o, !1);
  }
  return !1;
}
function ce(t, e, n, o) {
  for (var i = 0, r = 0, a = t.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== p.ghost && (o || a[r] !== p.dragged) && H(a[r], n.draggable, t, !1)) {
      if (i === e)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function at(t, e) {
  for (var n = t.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || e && !ke(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function Y(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== p.clone && (!e || ke(t, e)) && n++;
  return n;
}
function pt(t) {
  var e = 0, n = 0, o = L();
  if (t)
    do {
      var i = de(t), r = i.a, a = i.d;
      e += t.scrollLeft * r, n += t.scrollTop * a;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Gt(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function ee(t, e) {
  if (!t || !t.getBoundingClientRect) return L();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = h(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return L();
        if (o || e) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return L();
}
function Ht(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function je(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var De;
function _t(t, e) {
  return function() {
    if (!De) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), De = setTimeout(function() {
        De = void 0;
      }, e);
    }
  };
}
function Wt() {
  clearTimeout(De), De = void 0;
}
function St(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Tt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Ct(t, e, n) {
  var o = {};
  return Array.from(t.children).forEach(function(i) {
    var r, a, l, s;
    if (!(!H(i, e.draggable, t, !1) || i.animated || i === n)) {
      var u = C(i);
      o.left = Math.min((r = o.left) !== null && r !== void 0 ? r : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var N = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Lt() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!(h(i, "display") === "none" || i === p.ghost)) {
            t.push({
              target: i,
              rect: C(i)
            });
            var r = z({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = de(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(o) {
      t.push(o);
    },
    removeAnimationState: function(o) {
      t.splice(Gt(t, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1, a = 0;
      t.forEach(function(l) {
        var s = 0, u = l.target, c = u.fromRect, d = C(u), b = u.prevFromRect, w = u.prevToRect, E = l.rect, y = de(u, !0);
        y && (d.top -= y.f, d.left -= y.e), u.toRect = d, u.thisAnimationDuration && je(b, d) && !je(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (E.top - d.top) / (E.left - d.left) === (c.top - d.top) / (c.left - d.left) && (s = jt(E, b, w, i.options)), je(d, c) || (u.prevFromRect = c, u.prevToRect = d, s || (s = i.options.animation), i.animate(u, E, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, i, r, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = de(this.el), s = l && l.a, u = l && l.d, c = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (u || 1);
        o.animatingX = !!c, o.animatingY = !!d, h(o, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = zt(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function zt(t) {
  return t.offsetWidth;
}
function jt(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var le = [], $e = {
  initializeByDefault: !0
}, Oe = {
  mount: function(e) {
    for (var n in $e)
      $e.hasOwnProperty(n) && !(n in e) && (e[n] = $e[n]);
    le.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), le.push(e);
  },
  pluginEvent: function(e, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    le.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](z({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](z({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, i) {
    le.forEach(function(l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var u = new l(e, n, e.options);
        u.sortable = e, u.options = e.options, e[s] = u, q(o, u.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
      }
  },
  getEventProperties: function(e, n) {
    var o = {};
    return le.forEach(function(i) {
      typeof i.eventProperties == "function" && q(o, i.eventProperties.call(n[i.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var i;
    return le.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
    }), i;
  }
};
function $t(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, u = t.newIndex, c = t.oldDraggableIndex, d = t.newDraggableIndex, b = t.originalEvent, w = t.putSortable, E = t.extraEventProperties;
  if (e = e || n && n[N], !!e) {
    var y, k = e.options, j = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !V && !Ce ? y = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(o, !0, !0)), y.to = a || n, y.from = l || n, y.item = i || n, y.clone = r, y.oldIndex = s, y.newIndex = u, y.oldDraggableIndex = c, y.newDraggableIndex = d, y.originalEvent = b, y.pullMode = w ? w.lastPutMode : void 0;
    var A = z(z({}, E), Oe.getEventProperties(o, e));
    for (var B in A)
      y[B] = A[B];
    n && n.dispatchEvent(y), k[j] && k[j].call(e, y);
  }
}
var Ut = ["evt"], x = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = kt(o, Ut);
  Oe.pluginEvent.bind(p)(e, n, z({
    dragEl: f,
    parentEl: S,
    ghostEl: g,
    rootEl: D,
    nextEl: ae,
    lastDownEl: Fe,
    cloneEl: _,
    cloneHidden: J,
    dragStarted: be,
    putSortable: O,
    activeSortable: p.active,
    originalEvent: i,
    oldIndex: fe,
    oldDraggableIndex: _e,
    newIndex: X,
    newDraggableIndex: Q,
    hideGhostForTarget: Pt,
    unhideGhostForTarget: xt,
    cloneNowHidden: function() {
      J = !0;
    },
    cloneNowShown: function() {
      J = !1;
    },
    dispatchSortableEvent: function(l) {
      P({
        sortable: n,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function P(t) {
  $t(z({
    putSortable: O,
    cloneEl: _,
    targetEl: f,
    rootEl: D,
    oldIndex: fe,
    oldDraggableIndex: _e,
    newIndex: X,
    newDraggableIndex: Q
  }, t));
}
var f, S, g, D, ae, Fe, _, J, fe, X, _e, Q, Ae, O, ue = !1, Be = !1, Ge = [], ie, G, Ue, qe, gt, mt, be, se, Se, Te = !1, Pe = !1, Re, I, Ve = [], et = !1, He = [], Le = typeof document < "u", xe = rt, vt = Ce || V ? "cssFloat" : "float", qt = Le && !Et && !rt && "draggable" in document.createElement("div"), Ot = function() {
  if (Le) {
    if (V)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), It = function(e, n) {
  var o = h(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = ce(e, 0, n), a = ce(e, 1, n), l = r && h(r), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && o[vt] === "none" || a && o[vt] === "none" && u + c > i) ? "vertical" : "horizontal";
}, Vt = function(e, n, o) {
  var i = o ? e.left : e.top, r = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return i === l || r === s || i + a / 2 === l + u / 2;
}, Kt = function(e, n) {
  var o;
  return Ge.some(function(i) {
    var r = i[N].options.emptyInsertThreshold;
    if (!(!r || at(i))) {
      var a = C(i), l = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (l && s)
        return o = i;
    }
  }), o;
}, At = function(e) {
  function n(r, a) {
    return function(l, s, u, c) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(l, s, u, c), a)(l, s, u, c);
      var b = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === b || r.join && r.indexOf(b) > -1;
    };
  }
  var o = {}, i = e.group;
  (!i || Me(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
}, Pt = function() {
  !Ot && g && h(g, "display", "none");
}, xt = function() {
  !Ot && g && h(g, "display", "");
};
Le && !Et && document.addEventListener("click", function(t) {
  if (Be)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Be = !1, !1;
}, !0);
var re = function(e) {
  if (f) {
    e = e.touches ? e.touches[0] : e;
    var n = Kt(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var i in e)
        e.hasOwnProperty(i) && (o[i] = e[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[N]._onDragOver(o);
    }
  }
}, Zt = function(e) {
  f && f.parentNode[N]._isOutsideThisEl(e.target);
};
function p(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = q({}, e), t[N] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return It(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && (!we || rt),
    emptyInsertThreshold: 5
  };
  Oe.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  At(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : qt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? v(t, "pointerdown", this._onTapStart) : (v(t, "mousedown", this._onTapStart), v(t, "touchstart", this._onTapStart)), this.nativeDraggable && (v(t, "dragover", this), v(t, "dragenter", this)), Ge.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), q(this, Lt());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (se = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, f) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, i = this.options, r = i.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, c = i.filter;
      if (an(o), !f && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && we && s && s.tagName.toUpperCase() === "SELECT") && (s = H(s, i.draggable, o, !1), !(s && s.animated) && Fe !== s)) {
        if (fe = Y(s), _e = Y(s, i.draggable), typeof c == "function") {
          if (c.call(this, e, s, this)) {
            P({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), x("filter", n, {
              evt: e
            }), r && e.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = H(u, d.trim(), o, !1), d)
            return P({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), x("filter", n, {
              evt: e
            }), !0;
        }), c)) {
          r && e.preventDefault();
          return;
        }
        i.handle && !H(u, i.handle, o, !1) || this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (o && !f && o.parentNode === r) {
      var u = C(o);
      if (D = r, f = o, S = f.parentNode, ae = f.nextSibling, Fe = o, Ae = a.group, p.dragged = f, ie = {
        target: f,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, gt = ie.clientX - u.left, mt = ie.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, f.style["will-change"] = "all", s = function() {
        if (x("delayEnded", i, {
          evt: e
        }), p.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !dt && i.nativeDraggable && (f.draggable = !0), i._triggerDragStart(e, n), P({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), R(f, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        Dt(f, c.trim(), Ke);
      }), v(l, "dragover", re), v(l, "mousemove", re), v(l, "touchmove", re), a.supportPointer ? (v(l, "pointerup", i._onDrop), !this.nativeDraggable && v(l, "pointercancel", i._onDrop)) : (v(l, "mouseup", i._onDrop), v(l, "touchend", i._onDrop), v(l, "touchcancel", i._onDrop)), dt && this.nativeDraggable && (this.options.touchStartThreshold = 4, f.draggable = !0), x("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ce || V))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (v(l, "pointerup", i._disableDelayedDrag), v(l, "pointercancel", i._disableDelayedDrag)) : (v(l, "mouseup", i._disableDelayedDrag), v(l, "touchend", i._disableDelayedDrag), v(l, "touchcancel", i._disableDelayedDrag)), v(l, "mousemove", i._delayedDragTouchMoveHandler), v(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    f && Ke(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    m(e, "mouseup", this._disableDelayedDrag), m(e, "touchend", this._disableDelayedDrag), m(e, "touchcancel", this._disableDelayedDrag), m(e, "pointerup", this._disableDelayedDrag), m(e, "pointercancel", this._disableDelayedDrag), m(e, "mousemove", this._delayedDragTouchMoveHandler), m(e, "touchmove", this._delayedDragTouchMoveHandler), m(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : n ? v(document, "touchmove", this._onTouchMove) : v(document, "mousemove", this._onTouchMove) : (v(f, "dragend", this), v(D, "dragstart", this._onDragStart));
    try {
      document.selection ? Xe(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (ue = !1, D && f) {
      x("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && v(document, "dragover", Zt);
      var o = this.options;
      !e && R(f, o.dragClass, !1), R(f, o.ghostClass, !0), p.active = this, e && this._appendGhost(), P({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (G) {
      this._lastX = G.clientX, this._lastY = G.clientY, Pt();
      for (var e = document.elementFromPoint(G.clientX, G.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(G.clientX, G.clientY), e !== n); )
        n = e;
      if (f.parentNode[N]._isOutsideThisEl(e), n)
        do {
          if (n[N]) {
            var o = void 0;
            if (o = n[N]._onDragOver({
              clientX: G.clientX,
              clientY: G.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = wt(n));
      xt();
    }
  },
  _onTouchMove: function(e) {
    if (ie) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = g && de(g, !0), l = g && a && a.a, s = g && a && a.d, u = xe && I && pt(I), c = (r.clientX - ie.clientX + i.x) / (l || 1) + (u ? u[0] - Ve[0] : 0) / (l || 1), d = (r.clientY - ie.clientY + i.y) / (s || 1) + (u ? u[1] - Ve[1] : 0) / (s || 1);
      if (!p.active && !ue) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        a ? (a.e += c - (Ue || 0), a.f += d - (qe || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var b = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(g, "webkitTransform", b), h(g, "mozTransform", b), h(g, "msTransform", b), h(g, "transform", b), Ue = c, qe = d, G = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : D, n = C(f, !0, xe, !0, e), o = this.options;
      if (xe) {
        for (I = e; h(I, "position") === "static" && h(I, "transform") === "none" && I !== document; )
          I = I.parentNode;
        I !== document.body && I !== document.documentElement ? (I === document && (I = L()), n.top += I.scrollTop, n.left += I.scrollLeft) : I = L(), Ve = pt(I);
      }
      g = f.cloneNode(!0), R(g, o.ghostClass, !1), R(g, o.fallbackClass, !0), R(g, o.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", n.top), h(g, "left", n.left), h(g, "width", n.width), h(g, "height", n.height), h(g, "opacity", "0.8"), h(g, "position", xe ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, e.appendChild(g), h(g, "transform-origin", gt / parseInt(g.style.width) * 100 + "% " + mt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, i = e.dataTransfer, r = o.options;
    if (x("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    x("setupClone", this), p.eventCanceled || (_ = Tt(f), _.removeAttribute("id"), _.draggable = !1, _.style["will-change"] = "", this._hideClone(), R(_, this.options.chosenClass, !1), p.clone = _), o.cloneId = Xe(function() {
      x("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || D.insertBefore(_, f), o._hideClone(), P({
        sortable: o,
        name: "clone"
      }));
    }), !n && R(f, r.dragClass, !0), n ? (Be = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (m(document, "mouseup", o._onDrop), m(document, "touchend", o._onDrop), m(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, f)), v(document, "drop", o), h(f, "transform", "translateZ(0)")), ue = !0, o._dragStartId = Xe(o._dragStarted.bind(o, n, e)), v(document, "selectstart", o), be = !0, window.getSelection().removeAllRanges(), we && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, i, r, a, l = this.options, s = l.group, u = p.active, c = Ae === s, d = l.sort, b = O || u, w, E = this, y = !1;
    if (et) return;
    function k(ve, Ft) {
      x(ve, E, z({
        evt: e,
        isOwner: c,
        axis: w ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: d,
        fromSortable: b,
        target: o,
        completed: A,
        onMove: function(ut, Rt) {
          return Ne(D, n, f, i, ut, C(ut), e, Rt);
        },
        changed: B
      }, Ft));
    }
    function j() {
      k("dragOverAnimationCapture"), E.captureAnimationState(), E !== b && b.captureAnimationState();
    }
    function A(ve) {
      return k("dragOverCompleted", {
        insertion: ve
      }), ve && (c ? u._hideClone() : u._showClone(E), E !== b && (R(f, O ? O.options.ghostClass : u.options.ghostClass, !1), R(f, l.ghostClass, !0)), O !== E && E !== p.active ? O = E : E === p.active && O && (O = null), b === E && (E._ignoreWhileAnimating = o), E.animateAll(function() {
        k("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (o === f && !f.animated || o === n && !o.animated) && (se = null), !l.dragoverBubble && !e.rootEl && o !== document && (f.parentNode[N]._isOutsideThisEl(e.target), !ve && re(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), y = !0;
    }
    function B() {
      X = Y(f), Q = Y(f, l.draggable), P({
        sortable: E,
        name: "change",
        toEl: n,
        newIndex: X,
        newDraggableIndex: Q,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = H(o, l.draggable, n, !0), k("dragOver"), p.eventCanceled) return y;
    if (f.contains(e.target) || o.animated && o.animatingX && o.animatingY || E._ignoreWhileAnimating === o)
      return A(!1);
    if (Be = !1, u && !l.disabled && (c ? d || (a = S !== D) : O === this || (this.lastPutMode = Ae.checkPull(this, u, f, e)) && s.checkPut(this, u, f, e))) {
      if (w = this._getDirection(e, o) === "vertical", i = C(f), k("dragOverValid"), p.eventCanceled) return y;
      if (a)
        return S = D, j(), this._hideClone(), k("revert"), p.eventCanceled || (ae ? D.insertBefore(f, ae) : D.appendChild(f)), A(!0);
      var M = at(n, l.draggable);
      if (!M || tn(e, w, this) && !M.animated) {
        if (M === f)
          return A(!1);
        if (M && n === e.target && (o = M), o && (r = C(o)), Ne(D, n, f, i, o, r, e, !!o) !== !1)
          return j(), M && M.nextSibling ? n.insertBefore(f, M.nextSibling) : n.appendChild(f), S = n, B(), A(!0);
      } else if (M && en(e, w, this)) {
        var te = ce(n, 0, l, !0);
        if (te === f)
          return A(!1);
        if (o = te, r = C(o), Ne(D, n, f, i, o, r, e, !1) !== !1)
          return j(), n.insertBefore(f, te), S = n, B(), A(!0);
      } else if (o.parentNode === n) {
        r = C(o);
        var W = 0, ne, he = f.parentNode !== n, F = !Vt(f.animated && f.toRect || i, o.animated && o.toRect || r, w), pe = w ? "top" : "left", K = ht(o, "top", "top") || ht(f, "top", "top"), ge = K ? K.scrollTop : void 0;
        se !== o && (ne = r[pe], Te = !1, Pe = !F && l.invertSwap || he), W = nn(e, o, r, w, F ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Pe, se === o);
        var $;
        if (W !== 0) {
          var oe = Y(f);
          do
            oe -= W, $ = S.children[oe];
          while ($ && (h($, "display") === "none" || $ === g));
        }
        if (W === 0 || $ === o)
          return A(!1);
        se = o, Se = W;
        var me = o.nextElementSibling, Z = !1;
        Z = W === 1;
        var Ie = Ne(D, n, f, i, o, r, e, Z);
        if (Ie !== !1)
          return (Ie === 1 || Ie === -1) && (Z = Ie === 1), et = !0, setTimeout(Jt, 30), j(), Z && !me ? n.appendChild(f) : o.parentNode.insertBefore(f, Z ? me : o), K && St(K, 0, ge - K.scrollTop), S = f.parentNode, ne !== void 0 && !Pe && (Re = Math.abs(ne - C(o)[pe])), B(), A(!0);
      }
      if (n.contains(f))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), m(document, "pointermove", this._onTouchMove), m(document, "dragover", re), m(document, "mousemove", re), m(document, "touchmove", re);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    m(e, "mouseup", this._onDrop), m(e, "touchend", this._onDrop), m(e, "pointerup", this._onDrop), m(e, "pointercancel", this._onDrop), m(e, "touchcancel", this._onDrop), m(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (X = Y(f), Q = Y(f, o.draggable), x("drop", this, {
      evt: e
    }), S = f && f.parentNode, X = Y(f), Q = Y(f, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ue = !1, Pe = !1, Te = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), tt(this.cloneId), tt(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), m(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), we && h(document.body, "user-select", ""), h(f, "transform", ""), e && (be && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (D === S || O && O.lastPutMode !== "clone") && _ && _.parentNode && _.parentNode.removeChild(_), f && (this.nativeDraggable && m(f, "dragend", this), Ke(f), f.style["will-change"] = "", be && !ue && R(f, O ? O.options.ghostClass : this.options.ghostClass, !1), R(f, this.options.chosenClass, !1), P({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), D !== S ? (X >= 0 && (P({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: D,
      originalEvent: e
    }), P({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: e
    }), P({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: D,
      originalEvent: e
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: e
    })), O && O.save()) : X !== fe && X >= 0 && (P({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: e
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: e
    })), p.active && ((X == null || X === -1) && (X = fe, Q = _e), P({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    x("nulling", this), D = f = S = g = ae = _ = Fe = J = ie = G = be = X = Q = fe = _e = se = Se = O = Ae = p.dragged = p.ghost = p.clone = p.active = null, He.forEach(function(e) {
      e.checked = !0;
    }), He.length = Ue = qe = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(e), Qt(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)
      n = o[i], H(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || rn(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      H(l, this.options.draggable, i, !1) && (o[r] = l);
    }, this), n && this.captureAnimationState(), e.forEach(function(r) {
      o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return H(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var o = this.options;
    if (n === void 0)
      return o[e];
    var i = Oe.modifyOption(this, e, n);
    typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && At(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    x("destroy", this);
    var e = this.el;
    e[N] = null, m(e, "mousedown", this._onTapStart), m(e, "touchstart", this._onTapStart), m(e, "pointerdown", this._onTapStart), this.nativeDraggable && (m(e, "dragover", this), m(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ge.splice(Ge.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!J) {
      if (x("hideClone", this), p.eventCanceled) return;
      h(_, "display", "none"), this.options.removeCloneOnHide && _.parentNode && _.parentNode.removeChild(_), J = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (J) {
      if (x("showClone", this), p.eventCanceled) return;
      f.parentNode == D && !this.options.group.revertClone ? D.insertBefore(_, f) : ae ? D.insertBefore(_, ae) : D.appendChild(_), this.options.group.revertClone && this.animate(f, _), h(_, "display", ""), J = !1;
    }
  }
};
function Qt(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ne(t, e, n, o, i, r, a, l) {
  var s, u = t[N], c = u.options.onMove, d;
  return window.CustomEvent && !V && !Ce ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || C(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), c && (d = c.call(u, s, a)), d;
}
function Ke(t) {
  t.draggable = !1;
}
function Jt() {
  et = !1;
}
function en(t, e, n) {
  var o = C(ce(n.el, 0, n.options, !0)), i = Ct(n.el, n.options, g), r = 10;
  return e ? t.clientX < i.left - r || t.clientY < o.top && t.clientX < o.right : t.clientY < i.top - r || t.clientY < o.bottom && t.clientX < o.left;
}
function tn(t, e, n) {
  var o = C(at(n.el, n.options.draggable)), i = Ct(n.el, n.options, g), r = 10;
  return e ? t.clientX > i.right + r || t.clientY > o.bottom && t.clientX > o.left : t.clientY > i.bottom + r || t.clientX > o.right && t.clientY > o.top;
}
function nn(t, e, n, o, i, r, a, l) {
  var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, c = o ? n.top : n.left, d = o ? n.bottom : n.right, b = !1;
  if (!a) {
    if (l && Re < u * i) {
      if (!Te && (Se === 1 ? s > c + u * r / 2 : s < d - u * r / 2) && (Te = !0), Te)
        b = !0;
      else if (Se === 1 ? s < c + Re : s > d - Re)
        return -Se;
    } else if (s > c + u * (1 - i) / 2 && s < d - u * (1 - i) / 2)
      return on(e);
  }
  return b = b || a, b && (s < c + u * r / 2 || s > d - u * r / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function on(t) {
  return Y(f) < Y(t) ? 1 : -1;
}
function rn(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function an(t) {
  He.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && He.push(o);
  }
}
function Xe(t) {
  return setTimeout(t, 0);
}
function tt(t) {
  return clearTimeout(t);
}
Le && v(document, "touchmove", function(t) {
  (p.active || ue) && t.cancelable && t.preventDefault();
});
p.utils = {
  on: v,
  off: m,
  css: h,
  find: Dt,
  is: function(e, n) {
    return !!H(e, n, e, !1);
  },
  extend: Ht,
  throttle: _t,
  closest: H,
  toggleClass: R,
  clone: Tt,
  index: Y,
  nextTick: Xe,
  cancelNextTick: tt,
  detectDirection: It,
  getChild: ce,
  expando: N
};
p.get = function(t) {
  return t[N];
};
p.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = z(z({}, p.utils), o.utils)), Oe.mount(o);
  });
};
p.create = function(t, e) {
  return new p(t, e);
};
p.version = Bt;
var T = [], Ee, nt, ot = !1, Ze, Qe, We, ye;
function ln() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : (m(document, "pointermove", this._handleFallbackAutoScroll), m(document, "touchmove", this._handleFallbackAutoScroll), m(document, "mousemove", this._handleFallbackAutoScroll)), bt(), Ye(), Wt();
    },
    nulling: function() {
      We = nt = Ee = ot = ye = Ze = Qe = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(r, a);
      if (We = n, o || this.options.forceAutoScrollFallback || Ce || V || we) {
        Je(n, this.options, l, o);
        var s = ee(l, !0);
        ot && (!ye || r !== Ze || a !== Qe) && (ye && bt(), ye = setInterval(function() {
          var u = ee(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Ye()), Je(n, i.options, u, o);
        }, 10), Ze = r, Qe = a);
      } else {
        if (!this.options.bubbleScroll || ee(l, !0) === L()) {
          Ye();
          return;
        }
        Je(n, this.options, ee(l, !1), !1);
      }
    }
  }, q(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ye() {
  T.forEach(function(t) {
    clearInterval(t.pid);
  }), T = [];
}
function bt() {
  clearInterval(ye);
}
var Je = _t(function(t, e, n, o) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = L(), u = !1, c;
    nt !== n && (nt = n, Ye(), Ee = e.scroll, c = e.scrollFn, Ee === !0 && (Ee = ee(n, !0)));
    var d = 0, b = Ee;
    do {
      var w = b, E = C(w), y = E.top, k = E.bottom, j = E.left, A = E.right, B = E.width, M = E.height, te = void 0, W = void 0, ne = w.scrollWidth, he = w.scrollHeight, F = h(w), pe = w.scrollLeft, K = w.scrollTop;
      w === s ? (te = B < ne && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), W = M < he && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (te = B < ne && (F.overflowX === "auto" || F.overflowX === "scroll"), W = M < he && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var ge = te && (Math.abs(A - i) <= a && pe + B < ne) - (Math.abs(j - i) <= a && !!pe), $ = W && (Math.abs(k - r) <= a && K + M < he) - (Math.abs(y - r) <= a && !!K);
      if (!T[d])
        for (var oe = 0; oe <= d; oe++)
          T[oe] || (T[oe] = {});
      (T[d].vx != ge || T[d].vy != $ || T[d].el !== w) && (T[d].el = w, T[d].vx = ge, T[d].vy = $, clearInterval(T[d].pid), (ge != 0 || $ != 0) && (u = !0, T[d].pid = setInterval(function() {
        o && this.layer === 0 && p.active._onTouchMove(We);
        var me = T[this.layer].vy ? T[this.layer].vy * l : 0, Z = T[this.layer].vx ? T[this.layer].vx * l : 0;
        typeof c == "function" && c.call(p.dragged.parentNode[N], Z, me, t, We, T[this.layer].el) !== "continue" || St(T[this.layer].el, Z, me);
      }.bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && b !== s && (b = ee(b, !1)));
    ot = u;
  }
}, 30), Nt = function(e) {
  var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var u = o || r;
    l();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function lt() {
}
lt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = ce(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Nt
};
q(lt, {
  pluginName: "revertOnSpill"
});
function st() {
}
st.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Nt
};
q(st, {
  pluginName: "removeOnSpill"
});
p.mount(new ln());
p.mount(st, lt);
const ze = /* @__PURE__ */ new Set(), sn = {
  ghostClass: "calcite-sortable--ghost",
  chosenClass: "calcite-sortable--chosen",
  dragClass: "calcite-sortable--drag",
  fallbackClass: "calcite-sortable--fallback"
};
function hn(t) {
  if (Mt(t))
    return;
  un(t), ze.add(t);
  const e = "id", { group: n, handleSelector: o, dragSelector: i } = t;
  t.sortable = p.create(t.el, {
    dataIdAttr: e,
    ...sn,
    ...!!i && { draggable: i },
    ...!!n && {
      group: {
        name: n,
        ...!!t.canPull && {
          pull: (r, a, l, { newIndex: s, oldIndex: u }) => t.canPull({ toEl: r.el, fromEl: a.el, dragEl: l, newIndex: s, oldIndex: u })
        },
        ...!!t.canPut && {
          put: (r, a, l, { newIndex: s, oldIndex: u }) => t.canPut({ toEl: r.el, fromEl: a.el, dragEl: l, newIndex: s, oldIndex: u })
        }
      }
    },
    onMove: ({ from: r, dragged: a, to: l, related: s }) => {
      t.onDragMove && t.onDragMove({ fromEl: r, dragEl: a, toEl: l, relatedEl: s });
    },
    handle: o,
    filter: `${o}[disabled]`,
    onStart: ({ from: r, item: a, to: l, newIndex: s, oldIndex: u }) => {
      it.active = !0, fn(), t.onDragStart({ fromEl: r, dragEl: a, toEl: l, newIndex: s, oldIndex: u });
    },
    onEnd: ({ from: r, item: a, to: l, newIndex: s, oldIndex: u }) => {
      it.active = !1, dn(), t.onDragEnd({ fromEl: r, dragEl: a, toEl: l, newIndex: s, oldIndex: u });
    },
    onSort: ({ from: r, item: a, to: l, newIndex: s, oldIndex: u }) => {
      t.onDragSort({ fromEl: r, dragEl: a, toEl: l, newIndex: s, oldIndex: u });
    }
  });
}
function un(t) {
  Mt(t) || (ze.delete(t), t.sortable?.destroy(), t.sortable = null);
}
const it = { active: !1 };
function Mt(t) {
  return t.dragEnabled && it.active;
}
function fn() {
  Array.from(ze).forEach((t) => t.onGlobalDragStart());
}
function dn() {
  Array.from(ze).forEach((t) => t.onGlobalDragEnd());
}
export {
  hn as c,
  un as d
};
