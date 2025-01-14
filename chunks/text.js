import { x as r, s as h } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const c = {
  textMatch: "text-match"
};
function e({ text: s, pattern: a }) {
  if (!a || !s)
    return s;
  const t = s.split(a);
  return t.length > 1 && (t[1] = r`<mark class=${h(c.textMatch)}>${t[1]}</mark>`), t;
}
export {
  e as h
};
