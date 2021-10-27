/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-4058d8b7.system.js","./p-6cc23c39.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,a,i,n,r,s,o;return{setters:[function(t){e=t.r;a=t.c;i=t.h;n=t.H;r=t.g},function(t){s=t.a;o=t.C},function(){}],execute:function(){var l={container:"container"};var c="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([alignment=start]),:host([alignment=end]) .calcite--rtl{text-align:left}:host([alignment=end]),:host([alignment=start]) .calcite--rtl{text-align:right}:host([alignment=center]){text-align:center}:host([scale=s]) .container{font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.5rem}:host([scale=m]) .container{font-size:var(--calcite-font-size--1);line-height:1rem;margin-bottom:0.75rem}:host([scale=l]) .container{font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-bottom:1rem}:host .container{color:var(--calcite-ui-text-1);cursor:pointer;width:100%;margin-top:0;margin-right:0;margin-left:0;line-height:1.375}:host([layout=default]) .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;grid-gap:0.25rem;gap:0.25rem}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;grid-gap:0.5rem;gap:0.5rem}:host([layout=inline][scale=l]) .container{grid-gap:0.75rem;gap:0.75rem}:host([layout=inline-space-between]) .container{-ms-flex-pack:justify;justify-content:space-between}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--bg-opacity:0}:host([disable-spacing]) .container{grid-gap:0;gap:0;margin:0}";var m=t("calcite_label",function(){function t(t){var i=this;e(this,t);this.calciteInternalLabelClick=a(this,"calciteInternalLabelClick",3);this.alignment="start";this.status="idle";this.scale="m";this.layout="default";this.disableSpacing=false;this.disabled=false;this.labelClickHandler=function(t){i.calciteInternalLabelClick.emit({sourceEvent:t})}}t.prototype.render=function(){var t;var e=s(this.el);return i(n,{onClick:this.labelClickHandler},i("div",{class:(t={},t[l.container]=true,t[o.rtl]=e==="rtl",t)},i("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());m.style=c}}}));