import "./chunk-X7CW7BOR.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const { global: o } = __STORYBOOK_MODULE_GLOBAL__;
__STORYBOOK_MODULE_PREVIEW_API__;
var { window: n } = o;
n.STORYBOOK_ENV = "web-components";
function i(e) {
  if (!e) return !1;
  if (typeof e == "string") return !0;
  throw new Error('Provided component needs to be a string. e.g. component: "my-element"');
}
function s(e) {
  if (!e) return !1;
  if (e.tags && Array.isArray(e.tags) || e.modules && Array.isArray(e.modules)) return !0;
  throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`);
}
function d(e) {
  o.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = e;
}
function O() {
  return o.__STORYBOOK_CUSTOM_ELEMENTS__ || o.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;
}
var { window: r, EventSource: a } = o;
typeof module < "u" && module?.hot?.decline && (module.hot.decline(), new a("__webpack_hmr").addEventListener("message", function(e) {
  try {
    let { action: t } = JSON.parse(e.data);
    t === "built" && r.location.reload();
  } catch {
  }
}));
export {
  s as a,
  O as g,
  i,
  d as s
};
