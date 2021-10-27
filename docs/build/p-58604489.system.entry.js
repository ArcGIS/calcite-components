var __awaiter=this&&this.__awaiter||function(t,e,i,o){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function n(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o["throw"](t))}catch(t){r(t)}}function l(t){t.done?i(t.value):a(t.value).then(n,s)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,a,r,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return l([t,e])}}function l(n){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,a&&(r=n[0]&2?a["return"]:n[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,n[1])).done)return r;if(a=0,r)n=[n[0]&2,r.value];switch(n[0]){case 0:case 1:r=n;break;case 4:i.label++;return{value:n[1],done:false};case 5:i.label++;a=n[1];n=[0];continue;case 7:n=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(n[0]===6||n[0]===2)){i=0;continue}if(n[0]===3&&(!r||n[1]>r[0]&&n[1]<r[3])){i.label=n[1];break}if(n[0]===6&&i.label<r[1]){i.label=r[1];r=n;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(n);break}if(r[2])i.ops.pop();i.trys.pop();continue}n=e.call(t,i)}catch(t){n=[6,t];a=0}finally{o=r=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-4058d8b7.system.js","./p-6cc23c39.system.js","./p-56b352bf.system.js","./p-db10485b.system.js","./p-e020662f.system.js"],(function(t){"use strict";var e,i,o,a,r,n,s,l,c,d,m,u,h;return{setters:[function(t){e=t.r;i=t.c;o=t.h;a=t.H;r=t.g},function(t){n=t.f;s=t.a;l=t.C;c=t.g;d=t.e;m=t.i},function(t){u=t.g},function(t){h=t.c},function(){}],execute:function(){function f(t,e,i,o,a){if(o===void 0){o=20}if(a===void 0){a=0}var r=[];if(a>=o){return r}var n=function(t){var r=t.assignedNodes().filter((function(t){return t.nodeType===1}));if(r.length>0){return f(r[0].parentElement,e,i,o,a+1)}return[]};var s=Array.from(t.children||[]);for(var l=0,c=s;l<c.length;l++){var d=c[l];if(e(d)){continue}if(i(d)){r.push(d)}if(d.shadowRoot!=null){r.push.apply(r,f(d.shadowRoot,e,i,o,a+1))}else if(d.tagName==="SLOT"){r.push.apply(r,n(d))}else{r.push.apply(r,f(d,e,i,o,a+1))}}return r}function b(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&t.getAttribute("aria-hidden")!=="false"||t.style.display==="none"||t.style.opacity==="0"||t.style.visibility==="hidden"||t.style.visibility==="collapse"}function p(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"}function x(t){if(t.getAttribute("tabindex")==="-1"||b(t)||p(t)){return false}return t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)||t instanceof HTMLIFrameElement}var y={title:"title",header:"header",footer:"footer",scrim:"scrim",back:"back",close:"close",secondary:"secondary",primary:"primary",overflowHidden:"overflow-hidden"};var v={close:"x"};var g={content:"content",header:"header",back:"back",secondary:"secondary",primary:"primary"};var w={close:"Close"};var k="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}:host([scale=s]){--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding:1.25rem;--calcite-modal-padding-large:1.5rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:rgba(0, 0, 0, 0.75);position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;float:none;margin:1.5rem;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);width:100%;opacity:0;pointer-events:none;overflow:hidden;z-index:102;-webkit-overflow-scrolling:touch;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([active]) .modal{opacity:1;pointer-events:auto;visibility:visible;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;max-width:100%;min-width:0;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2}.close{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;color:var(--calcite-ui-text-3);-ms-flex-order:2;order:2;cursor:pointer;border-top-right-radius:0.25rem;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.calcite--rtl .close{border-top-left-radius:0.25rem;border-top-right-radius:0}.title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-order:1;order:1;min-width:0;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;padding:0;height:100%;overflow:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}.content--no-footer{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text)}:host([background-color=grey]) .content{background-color:var(--calcite-ui-background)}.footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;width:100%;background-color:var(--calcite-ui-foreground-1);border-width:0;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-right:auto}.calcite--rtl .back{margin-left:auto;margin-right:0}.secondary{display:block;margin-left:0.25rem;margin-right:0.25rem}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=s]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=m]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=l]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([active][fullscreen]) .header{border-radius:0}:host([active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked]) .calcite--rtl .close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-color:var(--calcite-ui-danger)}:host([color=blue]) .modal{border-color:var(--calcite-ui-info)}:host([color=red]) .modal,:host([color=blue]) .modal{border-width:0;border-top-width:4px;border-style:solid}:host([color=red]) .header,:host([color=blue]) .header{border-radius:0.25rem;border-bottom-right-radius:0;border-bottom-left-radius:0}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}.calcite--rtl .back,.back,.secondary{margin:0;margin-bottom:0.25rem}}";var z=function(t){return m(t)||x(t)};var E=function(t){return f(t,b,z)};var C=t("calcite_modal",function(){function t(t){var o=this;e(this,t);this.calciteModalOpen=i(this,"calciteModalOpen",7);this.calciteModalClose=i(this,"calciteModalClose",7);this.active=false;this.beforeClose=function(){return Promise.resolve()};this.disableCloseButton=false;this.disableOutsideClose=false;this.intlClose=w.close;this.disableEscape=false;this.scale="m";this.width="m";this.backgroundColor="white";this.noPadding=false;this.hasFooter=true;this.mutationObserver=h("mutation",(function(){return o.updateFooterVisibility()}));this.activeTransitionProp="opacity";this.transitionEnd=function(t){if(t.propertyName===o.activeTransitionProp){o.active?o.calciteModalOpen.emit():o.calciteModalClose.emit()}};this.openEnd=function(){o.setFocus();o.el.removeEventListener("calciteModalOpen",o.openEnd)};this.handleOutsideClose=function(){if(o.disableOutsideClose){return}o.close()};this.close=function(){return o.beforeClose(o.el).then((function(){o.active=false;n(o.previousActiveElement);o.removeOverflowHiddenClass()}))};this.focusFirstElement=function(){n(o.closeButtonEl)};this.focusLastElement=function(){var t=E(o.el).filter((function(t){return!t.getAttribute("data-focus-fence")}));if(t.length>0){n(t[t.length-1])}else{n(o.closeButtonEl)}};this.updateFooterVisibility=function(){o.hasFooter=!!o.el.querySelector("[slot="+g.back+"], [slot="+g.secondary+"], [slot="+g.primary+"]")}}t.prototype.componentWillLoad=function(){if(this.active){this.open()}};t.prototype.connectedCallback=function(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true});this.updateFooterVisibility()};t.prototype.disconnectedCallback=function(){var t;this.removeOverflowHiddenClass();(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()};t.prototype.render=function(){var t;var e=this;var i=s(this.el);return o(a,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},o("calcite-scrim",{class:y.scrim,onClick:this.handleOutsideClose}),this.renderStyle(),o("div",{class:(t={modal:true},t[l.rtl]=i==="rtl",t),onTransitionEnd:this.transitionEnd},o("div",{"data-focus-fence":true,onFocus:this.focusLastElement,tabindex:"0"}),o("div",{class:y.header},this.renderCloseButton(),o("header",{class:y.title},o("slot",{name:y.header}))),o("div",{class:{content:true,"content--spaced":!this.noPadding,"content--no-footer":!this.hasFooter},ref:function(t){return e.modalContent=t}},o("slot",{name:g.content})),this.renderFooter(),o("div",{"data-focus-fence":true,onFocus:this.focusFirstElement,tabindex:"0"})))};t.prototype.renderFooter=function(){return this.hasFooter?o("div",{class:y.footer},o("span",{class:y.back},o("slot",{name:g.back})),o("span",{class:y.secondary},o("slot",{name:g.secondary})),o("span",{class:y.primary},o("slot",{name:g.primary}))):null};t.prototype.renderCloseButton=function(){var t=this;return!this.disableCloseButton?o("button",{"aria-label":this.intlClose,class:y.close,onClick:this.close,ref:function(e){return t.closeButtonEl=e},title:this.intlClose},o("calcite-icon",{icon:v.close,scale:this.scale==="s"?"s":"l"})):null};t.prototype.renderStyle=function(){var t=!isNaN(parseInt(""+this.width));return t?o("style",null,"\n        .modal {\n          max-width: "+this.width+"px !important;\n        }\n        @media screen and (max-width: "+this.width+"px) {\n          .modal {\n            height: 100% !important;\n            max-height: 100% !important;\n            width: 100% !important;\n            max-width: 100% !important;\n            margin: 0 !important;\n            border-radius: 0 !important;\n          }\n          .content {\n            flex: 1 1 auto !important;\n            max-height: unset !important;\n          }\n        }\n      "):null};t.prototype.handleEscape=function(t){if(this.active&&!this.disableEscape&&u(t.key)==="Escape"){this.close()}};t.prototype.focusElement=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(t){t.focus()}return[2,this.setFocus()]}))}))};t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){e=this.closeButtonEl;return[2,n(t==="close-button"?e:E(this.el)[0]||e)]}))}))};t.prototype.scrollContent=function(t,e){if(t===void 0){t=0}if(e===void 0){e=0}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){if(this.modalContent){if(this.modalContent.scrollTo){this.modalContent.scrollTo({top:t,left:e,behavior:"smooth"})}else{this.modalContent.scrollTop=t;this.modalContent.scrollLeft=e}}return[2]}))}))};t.prototype.toggleModal=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){if(t!==e){if(t){this.open()}else if(!t){this.close()}}return[2]}))}))};t.prototype.open=function(){this.previousActiveElement=document.activeElement;this.el.addEventListener("calciteModalOpen",this.openEnd);this.active=true;var t=c(this.el,g.header);var e=c(this.el,g.content);this.titleId=d(t);this.contentId=d(e);document.documentElement.classList.add(y.overflowHidden)};t.prototype.removeOverflowHiddenClass=function(){document.documentElement.classList.remove(y.overflowHidden)};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["toggleModal"]}},enumerable:false,configurable:true});return t}());C.style=k}}}));