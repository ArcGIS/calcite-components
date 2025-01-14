import { b as l, f as u, t as $, a, E as f } from "./iframe.js";
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
const n = (t, e) => {
  const s = t._$AN;
  if (s === void 0) return !1;
  for (const i of s) i._$AO?.(e, !1), n(i, e);
  return !0;
}, d = (t) => {
  let e, s;
  do {
    if ((e = t._$AM) === void 0) break;
    s = e._$AN, s.delete(t), t = e;
  } while (s?.size === 0);
}, r = (t) => {
  for (let e; e = t._$AM; t = e) {
    let s = e._$AN;
    if (s === void 0) e._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(t)) break;
    s.add(t), Y(e);
  }
};
function _(t) {
  this._$AN !== void 0 ? (d(this), this._$AM = t, r(this)) : this._$AM = t;
}
function A(t, e = !1, s = 0) {
  const i = this._$AH, c = this._$AN;
  if (c !== void 0 && c.size !== 0) if (e) if (Array.isArray(i)) for (let h = s; h < i.length; h++) n(i[h], !1), d(i[h]);
  else i != null && (n(i, !1), d(i));
  else n(this, t);
}
const Y = (t) => {
  t.type == $.CHILD && (t._$AP ??= A, t._$AQ ??= _);
};
class p extends l {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, s, i) {
    super._$AT(e, s, i), r(this), this.isConnected = e._$AU;
  }
  _$AO(e, s = !0) {
    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), s && (n(this, e), d(this));
  }
  setValue(e) {
    if (u(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const s = [...this._$Ct._$AH];
      s[this._$Ci] = e, this._$Ct._$AI(s, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = () => new C();
class C {
}
const o = /* @__PURE__ */ new WeakMap(), M = a(class extends p {
  render(t) {
    return f;
  }
  update(t, [e]) {
    const s = e !== this.Y;
    return s && this.Y !== void 0 && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = e, this.ht = t.options?.host, this.rt(this.ct = t.element)), f;
  }
  rt(t) {
    if (this.isConnected || (t = void 0), typeof this.Y == "function") {
      const e = this.ht ?? globalThis;
      let s = o.get(e);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), o.set(e, s)), s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), s.set(this.Y, t), t !== void 0 && this.Y.call(this.ht, t);
    } else this.Y.value = t;
  }
  get lt() {
    return typeof this.Y == "function" ? o.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
export {
  N as e,
  M as n
};
