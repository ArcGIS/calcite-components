import { a as $, b, t as A, p as M, v as p, r as y, M as m, m as j, T as C } from "./iframe.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = (s, a, d) => {
  const h = /* @__PURE__ */ new Map();
  for (let e = a; e <= d; e++) h.set(s[e], e);
  return h;
}, E = $(class extends b {
  constructor(s) {
    if (super(s), s.type !== A.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(s, a, d) {
    let h;
    d === void 0 ? d = a : a !== void 0 && (h = a);
    const e = [], o = [];
    let r = 0;
    for (const u of s) e[r] = h ? h(u, r) : r, o[r] = d(u, r), r++;
    return { values: o, keys: e };
  }
  render(s, a, d) {
    return this.dt(s, a, d).values;
  }
  update(s, [a, d, h]) {
    const e = M(s), { values: o, keys: r } = this.dt(a, d, h);
    if (!Array.isArray(e)) return this.ut = r, o;
    const u = this.ut ??= [], f = [];
    let v, g, t = 0, l = e.length - 1, n = 0, i = o.length - 1;
    for (; t <= l && n <= i; ) if (e[t] === null) t++;
    else if (e[l] === null) l--;
    else if (u[t] === r[n]) f[n] = p(e[t], o[n]), t++, n++;
    else if (u[l] === r[i]) f[i] = p(e[l], o[i]), l--, i--;
    else if (u[t] === r[i]) f[i] = p(e[t], o[i]), y(s, f[i + 1], e[t]), t++, i--;
    else if (u[l] === r[n]) f[n] = p(e[l], o[n]), y(s, e[t], e[l]), l--, n++;
    else if (v === void 0 && (v = w(r, n, i), g = w(u, t, l)), v.has(u[t])) if (v.has(u[l])) {
      const c = g.get(r[n]), x = c !== void 0 ? e[c] : null;
      if (x === null) {
        const k = y(s, e[t]);
        p(k, o[n]), f[n] = k;
      } else f[n] = p(x, o[n]), y(s, e[t], x), e[c] = null;
      n++;
    } else m(e[l]), l--;
    else m(e[t]), t++;
    for (; n <= i; ) {
      const c = y(s, f[i + 1]);
      p(c, o[n]), f[n++] = c;
    }
    for (; t <= l; ) {
      const c = e[t++];
      c !== null && m(c);
    }
    return this.ut = r, j(s, f), C;
  }
});
export {
  E as c
};
