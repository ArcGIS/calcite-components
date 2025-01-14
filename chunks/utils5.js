import { n as c } from "./dom.js";
import { i as l } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const r = "CALCITE-COMBOBOX-ITEM", i = "CALCITE-COMBOBOX-ITEM-GROUP", s = `${r}, ${i}`, p = {
  input: "input",
  inputHidden: "input--hidden",
  chipInvisible: "chip--invisible",
  selectionDisplayFit: "selection-display-fit",
  selectionDisplaySingle: "selection-display-single",
  listContainer: "list-container",
  icon: "icon",
  placeholderIcon: "placeholder-icon",
  selectedIcon: "selected-icon",
  floatingUIContainer: "floating-ui-container"
}, m = {
  validationMessage: "comboboxValidationMessage"
};
function b(e) {
  const n = e.parentElement?.closest(s), t = n?.parentElement?.closest(s);
  return [n, t].filter((o) => o);
}
function f(e) {
  return e.ancestors?.filter((n) => n.nodeName === "CALCITE-COMBOBOX-ITEM") || [];
}
function g(e) {
  return c(e.querySelectorAll("calcite-combobox-item"));
}
function h(e) {
  return c(e.querySelectorAll("calcite-combobox-item")).filter((t) => t.selected).length > 0;
}
function C(e) {
  if (!l())
    return 0;
  const n = document.evaluate(
    "ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",
    e,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  ), t = n.snapshotLength;
  if (t > 0 && e.nodeName === r) {
    for (let o = 0; o < t; o++)
      if (n.snapshotItem(o).nodeName === i)
        return t;
  } else if (e.nodeName === i)
    return t;
  return t + 1;
}
function I(e) {
  return e.includes("single");
}
function O(e) {
  return e.shortHeading || e.heading || e.textLabel;
}
export {
  p as C,
  m as I,
  f as a,
  g as b,
  r as c,
  i as d,
  b as e,
  C as f,
  O as g,
  h,
  I as i
};
