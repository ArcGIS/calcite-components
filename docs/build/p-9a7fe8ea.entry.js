/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as a,h as i,H as e,g as o}from"./p-8f1f8bde.js";import{t as n,C as r}from"./p-f42bec18.js";import{f as s,g as l,a as c,C as p}from"./p-52cc870b.js";import"./p-26508b91.js";import"./p-f243b615.js";import"./p-8a63221d.js";let d=class{constructor(i){t(this,i),this.calciteActionPadToggle=a(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.actionMenuOpenChangeHandler=t=>{if(t.detail){const a=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{a.includes(t)||(t.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||n({parent:this.el,expanded:this.expanded})}expandedHandler(t){this.expandDisabled||n({parent:this.el,expanded:t}),this.calciteActionPadToggle.emit()}componentWillLoad(){const{el:t,expandDisabled:a,expanded:i}=this;a||n({parent:t,expanded:i})}async setFocus(t){"expand-toggle"!==t?this.el.focus():await s(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:a,intlExpand:e,intlCollapse:o,el:n,position:s,toggleExpand:c,scale:p}=this,d=l(n,"expand-tooltip"),m=a?null:i(r,{el:n,expanded:t,intlCollapse:o||"Collapse",intlExpand:e||"Expand",position:s,ref:this.setExpandToggleRef,scale:p,toggle:c,tooltip:d});return m?i("calcite-action-group",{class:"action-group--bottom",scale:p},i("slot",{name:"expand-tooltip"}),m):null}render(){const t="rtl"===c(this.el);return i(e,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},i("div",{class:{container:!0,[p.rtl]:t}},i("slot",null),this.renderBottomActionGroup()))}get el(){return o(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;-webkit-animation:in var(--calcite-animation-timing) ease-in-out;animation:in var(--calcite-animation-timing) ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0;border-right-width:1px;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0}";export{d as calcite_action_pad}