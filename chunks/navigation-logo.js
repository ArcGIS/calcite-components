import { h, L as p, x as t, s as i, y as o, j as v } from "./iframe.js";
import { i as s } from "./keyed.js";
import { c as f, s as u, a as m } from "./loadable.js";
import { H as x } from "./Heading.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const e = {
  container: "container",
  containerLink: "container--link",
  textContainer: "text-container",
  heading: "heading",
  description: "description",
  image: "image",
  standalone: "standalone",
  icon: "icon"
}, $ = h`:host{display:inline-flex}.container{margin:0;display:flex;align-items:center;justify-content:center;font-size:var(--calcite-font-size-0);line-height:1.25rem;background-color:var(--calcite-navigation-background-color, var(--calcite-internal-navigation-logo-background-color, var(--calcite-color-foreground-1)));border-block-end:2px solid var(--calcite-color-transparent);transition-property:background-color;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.container--link{cursor:pointer;text-decoration-line:none;outline-color:transparent}:host(:focus) .container--link{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.image,.icon{margin:0;display:flex;block-size:1.75rem;padding-inline:1rem;color:var(--calcite-navigation-logo-text-color, var(--calcite-icon-color, var(--calcite-internal-navigation-logo-text-color, inherit)))}.image~.icon{padding-inline-start:0px}.image~.text-container,.icon~.text-container{padding-inline-start:0px}:host([href]:hover),:host([href]:focus){--calcite-internal-navigation-logo-background-color: var(--calcite-color-foreground-2)}:host([href]:active){--calcite-internal-navigation-logo-background-color: var(--calcite-color-foreground-3)}:host([active]) .container{border-block-end-color:var(--calcite-navigation-accent-color, var(--calcite-color-brand))}:host([active]),:host([href]:active){--calcite-internal-navigation-logo-text-color: var(--calcite-color-brand)}.text-container{margin-block-start:.125rem;display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:1rem;text-align:start}.heading{margin-inline-start:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-navigation-logo-heading-text-color, var(--calcite-color-text-1))}.standalone{font-size:var(--calcite-font-size-1)}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--calcite-color-text-2);color:var(--calcite-navigation-logo-text-color, var(--calcite-color-text-2));font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}`;
class b extends p {
  constructor() {
    super(...arguments), this.iconFlipRtl = !1;
  }
  static {
    this.properties = { active: 7, description: 1, heading: 1, headingLevel: 11, href: 3, icon: 3, iconFlipRtl: 7, label: 1, rel: 3, target: 3, thumbnail: 1 };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
  }
  static {
    this.styles = $;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await f(this), this.href && this.el.focus();
  }
  // #endregion
  // #region Lifecycle
  load() {
    u(this);
  }
  loaded() {
    m(this);
  }
  // #endregion
  // #region Rendering
  renderIcon() {
    return t`<calcite-icon class=${i(e.icon)} .flipRtl=${this.iconFlipRtl} .icon=${this.icon} scale=l></calcite-icon>`;
  }
  renderHeaderContent() {
    const { heading: n, headingLevel: a, description: c } = this, r = n ? s(e.heading, x({ class: {
      [e.heading]: !0,
      [e.standalone]: !this.description
    }, level: a, children: n })) : null, l = c ? s(e.description, t`<span class=${i(e.description)}>${c}</span>`) : null;
    return r || l ? s(e.textContainer, t`<div class=${i(e.textContainer)}>${r}${l}</div>`) : null;
  }
  render() {
    const { icon: n, href: a, label: c, rel: r, target: l, thumbnail: d } = this, g = t`${d && t`<img alt=${(c || "") ?? o} class=${i(e.image)} src=${d ?? o}>` || ""}${n && this.renderIcon() || ""}${this.renderHeaderContent()}`;
    return a ? t`<a class=${i({
      [e.container]: !0,
      [e.containerLink]: !0
    })} href=${a ?? o} rel=${r ?? o} target=${l ?? o}>${g}</a>` : t`<div class=${i(e.container)}>${g}</div>`;
  }
}
v("calcite-navigation-logo", b);
export {
  b as NavigationLogo
};
