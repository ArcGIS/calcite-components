/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-4058d8b7.system.js","./p-6cc23c39.system.js","./p-c342a623.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,i,a,n,o,r,l,s,c;return{setters:[function(t){e=t.r;i=t.c;a=t.h;n=t.H;o=t.g},function(t){r=t.g;l=t.a;s=t.C},function(t){c=t.C},function(){}],execute:function(){var m={article:"article",content:"content",headerContainer:"header-container",icon:"icon",statusIcon:"status-icon",toggle:"toggle",toggleIcon:"toggle-icon",title:"title",heading:"heading",header:"header",button:"button",summary:"summary",controlContainer:"control-container",valid:"valid",invalid:"invalid",loading:"loading"};var d={collapse:"Collapse",expand:"Expand",loading:"Loading",options:"Options"};var g={icon:"icon",control:"control",headerMenuActions:"header-menu-actions"};var f={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"};var p=4;var u='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:justify;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:1rem;padding-right:1rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;line-height:1.25;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);margin-top:0.125rem;word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.toggle-icon{margin-right:1rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in var(--calcite-animation-timing) ease-in-out;animation:in var(--calcite-animation-timing) ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}calcite-action-menu{grid-area:menu}.calcite--rtl .toggle-icon{margin-right:0;margin-left:1rem}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}';var h=t("calcite_block",function(){function t(t){var a=this;e(this,t);this.calciteBlockToggle=i(this,"calciteBlockToggle",7);this.collapsible=false;this.disabled=false;this.dragHandle=false;this.intlLoading=d.loading;this.intlOptions=d.options;this.loading=false;this.open=false;this.onHeaderClick=function(){a.open=!a.open;a.calciteBlockToggle.emit()}}t.prototype.renderScrim=function(){var t=this,e=t.disabled,i=t.loading;var n=a("slot",null);return[i||e?a("calcite-scrim",{loading:i}):null,n]};t.prototype.renderIcon=function(){var t;var e=this,i=e.el,n=e.status;var o=this.loading&&!this.open;var l=o?f.refresh:f[n];var s=r(i,g.icon)||l;var c=!l?a("slot",{name:g.icon}):a("calcite-icon",{class:(t={},t[m.statusIcon]=true,t[m.valid]=n=="valid",t[m.invalid]=n=="invalid",t[m.loading]=o,t),icon:l,scale:"m"});return s?a("div",{class:m.icon},c):null};t.prototype.render=function(){var t;var e=this,i=e.collapsible,o=e.disabled,u=e.el,h=e.heading,b=e.intlCollapse,w=e.intlExpand,v=e.loading,k=e.open,x=e.summary,y=e.intlLoading,D=e.headingLevel;var z=k?b||d.collapse:w||d.expand;var _=a("header",{class:m.header},this.renderIcon(),a("div",{class:m.title},a(c,{class:m.heading,level:D||p},h),x?a("div",{class:m.summary},x):null));var S=!!r(u,g.control);var C=!!r(u,g.headerMenuActions);var I=k?f.opened:f.closed;var H=a("div",{class:m.headerContainer},this.dragHandle?a("calcite-handle",null):null,i?a("button",{"aria-expanded":i?k.toString():null,"aria-label":z,class:m.toggle,onClick:this.onHeaderClick,title:z},_,!S&&!C?a("calcite-icon",{"aria-hidden":"true",class:m.toggleIcon,icon:I,scale:"s"}):null):_,v?a("calcite-loader",{inline:true,"is-active":true,label:y}):S?a("div",{class:m.controlContainer},a("slot",{name:g.control})):null,C?a("calcite-action-menu",{label:this.intlOptions||d.options},a("slot",{name:g.headerMenuActions})):null);var j=l(u)==="rtl";return a(n,{tabIndex:o?-1:null},a("article",{"aria-busy":v.toString(),class:(t={},t[m.article]=true,t[s.rtl]=j,t)},H,a("div",{class:m.content,hidden:!k},this.renderScrim())))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());h.style=u;var b={content:"content",invalid:"invalid",toggle:"toggle",toggleSwitch:"toggle--switch",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",valid:"valid"};var w={collapse:"Collapse",expand:"Expand"};var v={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"};var k="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);display:block}:host([open]){border-style:solid;border-width:0;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px}:host(:last-child){border-bottom-width:0}.toggle{background-color:transparent;border-width:0;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin-left:0;margin-right:0;margin-top:0.25rem;margin-bottom:0.25rem;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{-ms-flex-item-align:end;align-self:flex-end}.section-header__text{-ms-flex:1 1 auto;flex:1 1 auto;margin-left:0.75rem;margin-right:0.75rem;margin-top:0;margin-bottom:0;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-left:0.25rem}.toggle--switch .status-icon{margin-left:0.5rem}.toggle--switch__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:0.25rem}.calcite--rtl .toggle--switch .status-icon{margin-left:0;margin-right:0.5rem}";var x=t("calcite_block_section",function(){function t(t){var a=this;e(this,t);this.calciteBlockSectionToggle=i(this,"calciteBlockSectionToggle",7);this.open=false;this.toggleDisplay="button";this.handleHeaderKeyDown=function(t){if(t.key===" "||t.key==="Enter"){a.toggleSection();t.preventDefault();t.stopPropagation()}};this.toggleSection=function(){a.open=!a.open;a.calciteBlockSectionToggle.emit()}}t.prototype.renderStatusIcon=function(){var t;var e;var i=this.status;var n=(e=v[i])!==null&&e!==void 0?e:false;var o=(t={},t[b.statusIcon]=true,t[b.valid]=i=="valid",t[b.invalid]=i=="invalid",t);return!!n?a("calcite-icon",{class:o,icon:n,scale:"s"}):null};t.prototype.render=function(){var t,e,i;var n=this,o=n.el,r=n.intlCollapse,c=n.intlExpand,m=n.open,d=n.text,g=n.toggleDisplay;var f=l(o);var p=m?v.menuOpen:f==="rtl"?v.menuClosedLeft:v.menuClosedRight;var u=m?r||w.collapse:c||w.expand;var h=g==="switch"?a("div",{"aria-label":u,class:(t={},t[b.toggle]=true,t[b.toggleSwitch]=true,t),onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:u},a("div",{class:b.toggleSwitchContent},a("span",{class:b.toggleSwitchText},d)),a("calcite-switch",{checked:m,label:u,scale:"s",tabIndex:-1}),this.renderStatusIcon()):a("button",{"aria-label":u,class:(e={},e[b.sectionHeader]=true,e[b.toggle]=true,e),name:u,onClick:this.toggleSection},a("calcite-icon",{icon:p,scale:"s"}),a("span",{class:b.sectionHeaderText},d),this.renderStatusIcon());return a("section",{"aria-expanded":m.toString(),class:(i={},i[s.rtl]=f==="rtl",i)},h,a("div",{class:b.content,hidden:!m},a("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());x.style=k}}}));