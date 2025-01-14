import { w as r } from "./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
function i(e) {
  return "opened" in e ? e.opened : e.open;
}
function s(e) {
  requestAnimationFrame(() => {
    e.transitionEl && r(
      e.transitionEl,
      e.openTransitionProp,
      () => {
        i(e) ? e.onBeforeOpen() : e.onBeforeClose();
      },
      () => {
        i(e) ? e.onOpen() : e.onClose();
      }
    );
  });
}
export {
  s as o
};
