import { j as x, k as ne, l as ae, m as k, o as R, a as re, p as ie } from "./dom.js";
import { w as oe } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
/*!
* focus-trap 7.6.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function G(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var o = 0, u = Array(t); o < t; o++) u[o] = a[o];
  return u;
}
function ue(a) {
  if (Array.isArray(a)) return G(a);
}
function se(a, t, o) {
  return (t = be(t)) in a ? Object.defineProperty(a, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[t] = o, a;
}
function ce(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function fe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(a, t) {
  var o = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(a);
    t && (u = u.filter(function(m) {
      return Object.getOwnPropertyDescriptor(a, m).enumerable;
    })), o.push.apply(o, u);
  }
  return o;
}
function Q(a) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J(Object(o), !0).forEach(function(u) {
      se(a, u, o[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : J(Object(o)).forEach(function(u) {
      Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(o, u));
    });
  }
  return a;
}
function le(a) {
  return ue(a) || ce(a) || ve(a) || fe();
}
function de(a, t) {
  if (typeof a != "object" || !a) return a;
  var o = a[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(a, t || "default");
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(a);
}
function be(a) {
  var t = de(a, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ve(a, t) {
  if (a) {
    if (typeof a == "string") return G(a, t);
    var o = {}.toString.call(a).slice(8, -1);
    return o === "Object" && a.constructor && (o = a.constructor.name), o === "Map" || o === "Set" ? Array.from(a) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? G(a, t) : void 0;
  }
}
var X = {
  activateTrap: function(t, o) {
    if (t.length > 0) {
      var u = t[t.length - 1];
      u !== o && u.pause();
    }
    var m = t.indexOf(o);
    m === -1 || t.splice(m, 1), t.push(o);
  },
  deactivateTrap: function(t, o) {
    var u = t.indexOf(o);
    u !== -1 && t.splice(u, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, pe = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, me = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, L = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, ye = function(t) {
  return L(t) && !t.shiftKey;
}, he = function(t) {
  return L(t) && t.shiftKey;
}, Z = function(t) {
  return setTimeout(t, 0);
}, K = function(t) {
  for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), m = 1; m < o; m++)
    u[m - 1] = arguments[m];
  return typeof t == "function" ? t.apply(void 0, u) : t;
}, C = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, ge = [], we = function(t, o) {
  var u = o?.document || document, m = o?.trapStack || ge, c = Q({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: ye,
    isKeyBackward: he
  }, o), r = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, h, y = function(e, n, i) {
    return e && e[n] !== void 0 ? e[n] : c[i || n];
  }, T = function(e, n) {
    var i = typeof n?.composedPath == "function" ? n.composedPath() : void 0;
    return r.containerGroups.findIndex(function(f) {
      var l = f.container, b = f.tabbableNodes;
      return l.contains(e) || i?.includes(l) || b.find(function(s) {
        return s === e;
      });
    });
  }, N = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.hasFallback, f = i === void 0 ? !1 : i, l = n.params, b = l === void 0 ? [] : l, s = c[e];
    if (typeof s == "function" && (s = s.apply(void 0, le(b))), s === !0 && (s = void 0), !s) {
      if (s === void 0 || s === !1)
        return s;
      throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"));
    }
    var v = s;
    if (typeof s == "string") {
      try {
        v = u.querySelector(s);
      } catch (p) {
        throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(p.message, '"'));
      }
      if (!v && !f)
        throw new Error("`".concat(e, "` as selector refers to no known node"));
    }
    return v;
  }, E = function() {
    var e = N("initialFocus", {
      hasFallback: !0
    });
    if (e === !1)
      return !1;
    if (e === void 0 || e && !x(e, c.tabbableOptions))
      if (T(u.activeElement) >= 0)
        e = u.activeElement;
      else {
        var n = r.tabbableGroups[0], i = n && n.firstTabbableNode;
        e = i || N("fallbackFocus");
      }
    else e === null && (e = N("fallbackFocus"));
    if (!e)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return e;
  }, D = function() {
    if (r.containerGroups = r.containers.map(function(e) {
      var n = ne(e, c.tabbableOptions), i = ae(e, c.tabbableOptions), f = n.length > 0 ? n[0] : void 0, l = n.length > 0 ? n[n.length - 1] : void 0, b = i.find(function(p) {
        return k(p);
      }), s = i.slice().reverse().find(function(p) {
        return k(p);
      }), v = !!n.find(function(p) {
        return R(p) > 0;
      });
      return {
        container: e,
        tabbableNodes: n,
        focusableNodes: i,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: v,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: f,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: l,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: b,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: s,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(F) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, w = n.indexOf(F);
          return w < 0 ? O ? i.slice(i.indexOf(F) + 1).find(function(A) {
            return k(A);
          }) : i.slice(0, i.indexOf(F)).reverse().find(function(A) {
            return k(A);
          }) : n[w + (O ? 1 : -1)];
        }
      };
    }), r.tabbableGroups = r.containerGroups.filter(function(e) {
      return e.tabbableNodes.length > 0;
    }), r.tabbableGroups.length <= 0 && !N("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (r.containerGroups.find(function(e) {
      return e.posTabIndexesFound;
    }) && r.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, _ = function(e) {
    var n = e.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? _(n.shadowRoot) : n;
  }, g = function(e) {
    if (e !== !1 && e !== _(document)) {
      if (!e || !e.focus) {
        g(E());
        return;
      }
      e.focus({
        preventScroll: !!c.preventScroll
      }), r.mostRecentlyFocusedNode = e, pe(e) && e.select();
    }
  }, U = function(e) {
    var n = N("setReturnFocus", {
      params: [e]
    });
    return n || (n === !1 ? !1 : e);
  }, $ = function(e) {
    var n = e.target, i = e.event, f = e.isBackward, l = f === void 0 ? !1 : f;
    n = n || C(i), D();
    var b = null;
    if (r.tabbableGroups.length > 0) {
      var s = T(n, i), v = s >= 0 ? r.containerGroups[s] : void 0;
      if (s < 0)
        l ? b = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode : b = r.tabbableGroups[0].firstTabbableNode;
      else if (l) {
        var p = r.tabbableGroups.findIndex(function(I) {
          var S = I.firstTabbableNode;
          return n === S;
        });
        if (p < 0 && (v.container === n || x(n, c.tabbableOptions) && !k(n, c.tabbableOptions) && !v.nextTabbableNode(n, !1)) && (p = s), p >= 0) {
          var F = p === 0 ? r.tabbableGroups.length - 1 : p - 1, O = r.tabbableGroups[F];
          b = R(n) >= 0 ? O.lastTabbableNode : O.lastDomTabbableNode;
        } else L(i) || (b = v.nextTabbableNode(n, !1));
      } else {
        var w = r.tabbableGroups.findIndex(function(I) {
          var S = I.lastTabbableNode;
          return n === S;
        });
        if (w < 0 && (v.container === n || x(n, c.tabbableOptions) && !k(n, c.tabbableOptions) && !v.nextTabbableNode(n)) && (w = s), w >= 0) {
          var A = w === r.tabbableGroups.length - 1 ? 0 : w + 1, z = r.tabbableGroups[A];
          b = R(n) >= 0 ? z.firstTabbableNode : z.firstDomTabbableNode;
        } else L(i) || (b = v.nextTabbableNode(n));
      }
    } else
      b = N("fallbackFocus");
    return b;
  }, j = function(e) {
    var n = C(e);
    if (!(T(n, e) >= 0)) {
      if (K(c.clickOutsideDeactivates, e)) {
        h.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: c.returnFocusOnDeactivate
        });
        return;
      }
      K(c.allowOutsideClick, e) || e.preventDefault();
    }
  }, H = function(e) {
    var n = C(e), i = T(n, e) >= 0;
    if (i || n instanceof Document)
      i && (r.mostRecentlyFocusedNode = n);
    else {
      e.stopImmediatePropagation();
      var f, l = !0;
      if (r.mostRecentlyFocusedNode)
        if (R(r.mostRecentlyFocusedNode) > 0) {
          var b = T(r.mostRecentlyFocusedNode), s = r.containerGroups[b].tabbableNodes;
          if (s.length > 0) {
            var v = s.findIndex(function(p) {
              return p === r.mostRecentlyFocusedNode;
            });
            v >= 0 && (c.isKeyForward(r.recentNavEvent) ? v + 1 < s.length && (f = s[v + 1], l = !1) : v - 1 >= 0 && (f = s[v - 1], l = !1));
          }
        } else
          r.containerGroups.some(function(p) {
            return p.tabbableNodes.some(function(F) {
              return R(F) > 0;
            });
          }) || (l = !1);
      else
        l = !1;
      l && (f = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: r.mostRecentlyFocusedNode,
        isBackward: c.isKeyBackward(r.recentNavEvent)
      })), g(f || r.mostRecentlyFocusedNode || E());
    }
    r.recentNavEvent = void 0;
  }, ee = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    r.recentNavEvent = e;
    var i = $({
      event: e,
      isBackward: n
    });
    i && (L(e) && e.preventDefault(), g(i));
  }, M = function(e) {
    (c.isKeyForward(e) || c.isKeyBackward(e)) && ee(e, c.isKeyBackward(e));
  }, q = function(e) {
    me(e) && K(c.escapeDeactivates, e) !== !1 && (e.preventDefault(), h.deactivate());
  }, Y = function(e) {
    var n = C(e);
    T(n, e) >= 0 || K(c.clickOutsideDeactivates, e) || K(c.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
  }, V = function() {
    if (r.active)
      return X.activateTrap(m, h), r.delayInitialFocusTimer = c.delayInitialFocus ? Z(function() {
        g(E());
      }) : g(E()), u.addEventListener("focusin", H, !0), u.addEventListener("mousedown", j, {
        capture: !0,
        passive: !1
      }), u.addEventListener("touchstart", j, {
        capture: !0,
        passive: !1
      }), u.addEventListener("click", Y, {
        capture: !0,
        passive: !1
      }), u.addEventListener("keydown", M, {
        capture: !0,
        passive: !1
      }), u.addEventListener("keydown", q), h;
  }, W = function() {
    if (r.active)
      return u.removeEventListener("focusin", H, !0), u.removeEventListener("mousedown", j, !0), u.removeEventListener("touchstart", j, !0), u.removeEventListener("click", Y, !0), u.removeEventListener("keydown", M, !0), u.removeEventListener("keydown", q), h;
  }, te = function(e) {
    var n = e.some(function(i) {
      var f = Array.from(i.removedNodes);
      return f.some(function(l) {
        return l === r.mostRecentlyFocusedNode;
      });
    });
    n && g(E());
  }, B = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(te) : void 0, P = function() {
    B && (B.disconnect(), r.active && !r.paused && r.containers.map(function(e) {
      B.observe(e, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return h = {
    get active() {
      return r.active;
    },
    get paused() {
      return r.paused;
    },
    activate: function(e) {
      if (r.active)
        return this;
      var n = y(e, "onActivate"), i = y(e, "onPostActivate"), f = y(e, "checkCanFocusTrap");
      f || D(), r.active = !0, r.paused = !1, r.nodeFocusedBeforeActivation = u.activeElement, n?.();
      var l = function() {
        f && D(), V(), P(), i?.();
      };
      return f ? (f(r.containers.concat()).then(l, l), this) : (l(), this);
    },
    deactivate: function(e) {
      if (!r.active)
        return this;
      var n = Q({
        onDeactivate: c.onDeactivate,
        onPostDeactivate: c.onPostDeactivate,
        checkCanReturnFocus: c.checkCanReturnFocus
      }, e);
      clearTimeout(r.delayInitialFocusTimer), r.delayInitialFocusTimer = void 0, W(), r.active = !1, r.paused = !1, P(), X.deactivateTrap(m, h);
      var i = y(n, "onDeactivate"), f = y(n, "onPostDeactivate"), l = y(n, "checkCanReturnFocus"), b = y(n, "returnFocus", "returnFocusOnDeactivate");
      i?.();
      var s = function() {
        Z(function() {
          b && g(U(r.nodeFocusedBeforeActivation)), f?.();
        });
      };
      return b && l ? (l(U(r.nodeFocusedBeforeActivation)).then(s, s), this) : (s(), this);
    },
    pause: function(e) {
      if (r.paused || !r.active)
        return this;
      var n = y(e, "onPause"), i = y(e, "onPostPause");
      return r.paused = !0, n?.(), W(), P(), i?.(), this;
    },
    unpause: function(e) {
      if (!r.paused || !r.active)
        return this;
      var n = y(e, "onUnpause"), i = y(e, "onPostUnpause");
      return r.paused = !1, n?.(), D(), V(), P(), i?.(), this;
    },
    updateContainerElements: function(e) {
      var n = [].concat(e).filter(Boolean);
      return r.containers = n.map(function(i) {
        return typeof i == "string" ? u.querySelector(i) : i;
      }), r.active && D(), P(), this;
    }
  }, h.updateContainerElements(t), h;
};
function Ne(a, t) {
  const { el: o } = a, u = t?.focusTrapEl || o;
  if (!u)
    return;
  const m = {
    clickOutsideDeactivates: !0,
    fallbackFocus: u,
    setReturnFocus: (c) => (re(c), !1),
    ...t?.focusTrapOptions,
    // the following options are not overridable
    document: o.ownerDocument,
    tabbableOptions: ie,
    trapStack: oe
  };
  a.focusTrap = we(u, m);
}
function ke(a, t) {
  a.focusTrapDisabled || a.focusTrap?.activate(t);
}
function Ee(a, t) {
  a.focusTrap?.deactivate(t);
}
function De(a) {
  a.focusTrap?.updateContainerElements(a.el);
}
export {
  ke as a,
  Ne as c,
  Ee as d,
  De as u
};
