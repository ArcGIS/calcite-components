import { g as c, i as l, a as d } from "./chunk-L4EGOTBX.js";
import "./chunk-X7CW7BOR.js";
import { g as p, c as E, y } from "./index11.js";
import { B as i } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
var D = {}, C = D.NODE_ENV === "production", u = "Invariant failed";
function g(r, e) {
  if (!r) {
    if (C)
      throw new Error(u);
    var t = typeof e == "function" ? e() : e, a = t ? "".concat(u, ": ").concat(t) : u;
    throw new Error(a);
  }
}
const { logger: m } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { useEffect: h, addons: b } = __STORYBOOK_MODULE_PREVIEW_API__;
function f(r, e) {
  let t;
  switch (e) {
    case "attributes":
    case "properties":
      t = { name: r.type?.text || r.type };
      break;
    case "slots":
      t = { name: "string" };
      break;
    default:
      t = { name: "void" };
      break;
  }
  return { name: r.name, required: !1, description: r.description, type: t, table: { category: e, type: { summary: r.type?.text || r.type }, defaultValue: { summary: r.default !== void 0 ? r.default : r.defaultValue } } };
}
function O(r) {
  let e = r.name.replace(/(-|_|:|\.|\s)+(.)?/g, (t, a, n) => n ? n.toUpperCase() : "").replace(/^([A-Z])/, (t) => t.toLowerCase());
  return e = `on${e.charAt(0).toUpperCase() + e.substr(1)}`, [{ name: e, action: { name: r.name }, table: { disable: !0 } }, f(r, "events")];
}
function s(r, e) {
  return r && r.filter((t) => t && t.name).reduce((t, a) => {
    if (a.kind === "method") return t;
    switch (e) {
      case "events":
        O(a).forEach((n) => {
          g(n.name, `${n} should have a name property.`), t[n.name] = n;
        });
        break;
      default:
        t[a.name] = f(a, e);
        break;
    }
    return t;
  }, {});
}
var w = (r, e) => {
  if (!l(r) || !d(e)) return null;
  let t = e.tags.find((a) => a.name.toUpperCase() === r.toUpperCase());
  return t || m.warn(`Component not found in custom-elements.json: ${r}`), t;
}, M = (r, e) => {
  if (!l(r) || !d(e)) return null;
  let t;
  return e?.modules?.forEach((a) => {
    a?.declarations?.forEach((n) => {
      n.tagName === r && (t = n);
    });
  }), t || m.warn(`Component not found in custom-elements.json: ${r}`), t;
}, _ = (r, e) => e?.version === "experimental" ? w(r, e) : M(r, e), A = (r, e) => {
  let t = _(r, e);
  return t && { ...s(t.members ?? [], "properties"), ...s(t.properties ?? [], "properties"), ...s(t.attributes ?? [], "attributes"), ...s(t.events ?? [], "events"), ...s(t.slots ?? [], "slots"), ...s(t.cssProperties ?? [], "css custom properties"), ...s(t.cssParts ?? [], "css shadow parts") };
}, S = (r) => {
  let e = c();
  return A(r, e);
}, I = (r) => {
  let e = _(r, c());
  return e && e.description;
}, k = /<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;
function L(r) {
  let e = r?.parameters.docs?.source, t = r?.parameters.__isArgsStory;
  return e?.type === p.DYNAMIC ? !1 : !t || e?.code || e?.type === p.CODE;
}
function P(r, e) {
  let t = r(), a = e?.parameters.docs?.source?.excludeDecorators ? e.originalStoryFn(e.args, e) : t, n;
  if (h(() => {
    let { id: o, unmappedArgs: v } = e;
    n && b.getChannel().emit(y, { id: o, source: n, args: v });
  }), !L(e)) {
    let o = window.document.createElement("div");
    a instanceof DocumentFragment ? i(a.cloneNode(!0), o) : i(a, o), n = o.innerHTML.replace(k, "");
  }
  return t;
}
var $ = [P], x = { docs: { extractArgTypes: S, extractComponentDescription: I, story: { inline: !0 }, source: { type: p.DYNAMIC, language: "html" } } }, F = [E];
export {
  F as argTypesEnhancers,
  $ as decorators,
  x as parameters
};
