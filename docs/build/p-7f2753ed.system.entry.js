var __awaiter=this&&this.__awaiter||function(t,i,e,c){function n(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,a){function l(t){try{u(c.next(t))}catch(t){a(t)}}function r(t){try{u(c["throw"](t))}catch(t){a(t)}}function u(t){t.done?e(t.value):n(t.value).then(l,r)}u((c=c.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},c,n,a,l;return l={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function r(t){return function(i){return u([t,i])}}function u(l){if(c)throw new TypeError("Generator is already executing.");while(e)try{if(c=1,n&&(a=l[0]&2?n["return"]:l[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;if(n=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:e.label++;return{value:l[1],done:false};case 5:e.label++;n=l[1];l=[0];continue;case 7:l=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){e.label=l[1];break}if(l[0]===6&&e.label<a[1]){e.label=a[1];a=l;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(l);break}if(a[2])e.ops.pop();e.trys.pop();continue}l=i.call(t,e)}catch(t){l=[6,t];n=0}finally{c=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,i){for(var e=0,c=i.length,n=t.length;e<c;e++,n++)t[n]=i[e];return t};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-4058d8b7.system.js","./p-6cc23c39.system.js","./p-56b352bf.system.js","./p-fb1da0f5.system.js","./p-4035444d.system.js","./p-47313747.system.js","./p-91645bf7.system.js","./p-e020662f.system.js"],(function(t){"use strict";var i,e,c,n,a,l,r,u,s,o,p,d,h,m,b,f,g,y,v,x,_,w,k;return{setters:[function(t){i=t.r;e=t.c;c=t.h;n=t.H;a=t.g},function(t){l=t.T;r=t.s;u=t.c;s=t.d;o=t.a;p=t.C},function(t){d=t.g;h=t.n},function(t){m=t.c;b=t.d;f=t.g},function(t){g=t.d;y=t.g;v=t.l},function(t){x=t.h},function(t){_=t.i;w=t.p;k=t.s},function(){}],execute:function(){var z={loader:"calcite-input__loader",clearButton:"calcite-input__clear-button",inputIcon:"calcite-input__icon",prefix:"calcite-input__prefix",suffix:"calcite-input__suffix",numberButtonWrapper:"calcite-input__number-button-wrapper",buttonItemHorizontal:"calcite-input__number-button-item--horizontal",wrapper:"calcite-input__element-wrapper",inputWrapper:"calcite-input__wrapper",actionWrapper:"calcite-input__action-wrapper",resizeIconWrapper:"calcite-input__resize-icon-wrapper",numberButtonItem:"calcite-input__number-button-item"};var I={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"};var D={action:"action"};var E="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-input:root{--calcite-animation-timing:300ms}.calcite-animate.sc-calcite-input{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in.sc-calcite-input{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down.sc-calcite-input{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up.sc-calcite-input{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale.sc-calcite-input{-webkit-animation-name:in-scale;animation-name:in-scale}.sc-calcite-input:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-input-h{display:none}[scale=s].sc-calcite-input-h input.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding:0.5rem;height:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{height:1.5rem;min-height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h input[type=file].sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:1.5rem;min-width:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;height:auto}[scale=m].sc-calcite-input-h input.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding:0.75rem;height:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{min-height:2rem}[scale=m].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h input[type=file].sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2rem;min-width:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;height:auto}[scale=l].sc-calcite-input-h input.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding:1rem;height:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{min-height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h input[type=file].sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2.75rem;min-width:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;height:auto}[disabled].sc-calcite-input-h{pointer-events:none}[disabled].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{pointer-events:none;--text-opacity:var(--calcite-ui-opacity-disabled)}[disabled].sc-calcite-input-h button.sc-calcite-input,[disabled].sc-calcite-input-h textarea.sc-calcite-input,[disabled].sc-calcite-input-h input.sc-calcite-input{pointer-events:none}[disabled].sc-calcite-input-h textarea.sc-calcite-input{resize:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-appearance:none;width:100%;border-radius:0;position:relative;max-height:100%;max-width:100%;margin:0;font-weight:var(--calcite-font-weight-normal);font-family:inherit;-ms-flex:1 1 0%;flex:1 1 0%;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-1);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1)}.sc-calcite-input-h input[type=search].sc-calcite-input::-webkit-search-decoration{-webkit-appearance:none}.sc-calcite-input-h input.sc-calcite-input,.sc-calcite-input-h textarea.sc-calcite-input{color:var(--calcite-ui-text-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input)}.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::placeholder,.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input:focus,.sc-calcite-input-h textarea.sc-calcite-input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}.sc-calcite-input-h input[readonly].sc-calcite-input,.sc-calcite-input-h textarea[readonly].sc-calcite-input{background-color:var(--calcite-ui-background)}.sc-calcite-input-h input[readonly].sc-calcite-input:focus,.sc-calcite-input-h textarea[readonly].sc-calcite-input:focus{color:var(--calcite-ui-text-1)}.sc-calcite-input-h calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-3)}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.sc-calcite-input-h textarea.sc-calcite-input:focus,.sc-calcite-input-h input.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}[status=invalid].sc-calcite-input-h input.sc-calcite-input,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input{border-color:var(--calcite-ui-danger)}[status=invalid].sc-calcite-input-h input.sc-calcite-input:focus,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}[scale=s].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.5rem}[scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.5rem}[scale=m].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.75rem}[scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.75rem}[scale=l].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:1rem}[scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:1rem}[icon][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-left:2rem}[icon][scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2rem;padding-left:0.5rem}[icon][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-left:2.5rem}[icon][scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2.5rem;padding-left:0.5rem}[icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-left:3rem}[icon][scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:3rem;padding-left:0.5rem}.calcite-input__element-wrapper.sc-calcite-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%;position:relative;-ms-flex-order:3;order:3}.calcite-input__icon.sc-calcite-input{display:block;position:absolute;pointer-events:none;z-index:10;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}input[type=text].sc-calcite-input::-ms-clear,input[type=text].sc-calcite-input::-ms-reveal{display:none;width:0;height:0}input[type=search].sc-calcite-input::-webkit-search-decoration,input[type=search].sc-calcite-input::-webkit-search-cancel-button,input[type=search].sc-calcite-input::-webkit-search-results-button,input[type=search].sc-calcite-input::-webkit-search-results-decoration,input[type=date].sc-calcite-input::-webkit-clear-button,input[type=time].sc-calcite-input::-webkit-clear-button{display:none}.calcite-input__clear-button.sc-calcite-input{pointer-events:initial;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-ms-flex-order:4;order:4;margin:0}.calcite-input__clear-button.sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input__clear-button.sc-calcite-input:active calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__clear-button.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-input__clear-button.sc-calcite-input:disabled{opacity:var(--calcite-ui-opacity-disabled)}.calcite--rtl.sc-calcite-input .calcite-input__clear-button.sc-calcite-input{border-left-color:var(--calcite-ui-border-input);border-width:1px;border-right-width:0}.calcite-input__loader.sc-calcite-input{top:1px;left:1px;right:1px;display:block;pointer-events:none;position:absolute}.calcite-input__action-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input__prefix.sc-calcite-input,.calcite-input__suffix.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:var(--calcite-font-weight-medium);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1;word-wrap:break-word;overflow-wrap:break-word}.calcite-input__prefix.sc-calcite-input{-ms-flex-order:2;order:2;border-right-width:0}.calcite-input__suffix.sc-calcite-input{-ms-flex-order:5;order:5;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__prefix.sc-calcite-input{border-right-width:1px;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__suffix.sc-calcite-input{border-left-width:1px;border-right-width:0}[alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:left}[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:left}.sc-calcite-input-h input[type=number].sc-calcite-input{-moz-appearance:textfield}.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-inner-spin-button,.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.calcite-input__number-button-wrapper.sc-calcite-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:none;-ms-flex-order:6;order:6;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}[number-button-type=vertical].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}[number-button-type=vertical].sc-calcite-input-h input.sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h textarea.sc-calcite-input{-ms-flex-order:2;order:2}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:stretch;align-self:stretch}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{-ms-flex-order:5;order:5}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-left-width:0;border-color:var(--calcite-ui-border-input)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{border-width:1px;border-right-width:0;border-color:var(--calcite-ui-border-input)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input{border-top-width:0}.calcite-input__number-button-item.sc-calcite-input{max-height:50%;min-height:50%;pointer-events:initial;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;padding-top:0;padding-bottom:0;padding-left:0.5rem;padding-right:0.5rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;margin:0}.calcite-input__number-button-item.sc-calcite-input calcite-icon.sc-calcite-input{pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__number-button-item.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.sc-calcite-input:focus calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item.sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;position:relative}.sc-calcite-input-h input.sc-calcite-input::-webkit-calendar-picker-indicator{display:none}.sc-calcite-input-h input[type=date].sc-calcite-input::-webkit-input-placeholder{visibility:hidden !important}.sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input__resize-icon-wrapper.sc-calcite-input{display:none}}.calcite-input__resize-icon-wrapper.sc-calcite-input{bottom:2px;right:2px;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:10;pointer-events:none;width:0.75rem;height:0.75rem}.calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.calcite--rtl.sc-calcite-input textarea.sc-calcite-input::-webkit-resizer{right:unset;left:0}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input{left:2px;right:unset}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[type=color].sc-calcite-input-h input.sc-calcite-input{padding:0.25rem}[type=file].sc-calcite-input-h input.sc-calcite-input{background-color:var(--calcite-ui-foreground-1);cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);text-align:center}[type=file][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-top:1px;padding-bottom:1px;padding-left:0.5rem;padding-right:0.5rem}[type=file][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem}[type=file][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.no-bottom-border.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-bottom-width:0}.border-t-color-1.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-top-color:var(--calcite-ui-border-1)}";var j=t("calcite_input",function(){function t(t){var c=this;i(this,t);this.calciteInputFocus=e(this,"calciteInputFocus",7);this.calciteInputBlur=e(this,"calciteInputBlur",7);this.calciteInputInput=e(this,"calciteInputInput",7);this.calciteInputChange=e(this,"calciteInputChange",7);this.alignment="start";this.autofocus=false;this.clearable=false;this.disabled=false;this.groupSeparator=false;this.intlLoading=l.loading;this.iconFlipRtl=false;this.loading=false;this.locale=document.documentElement.lang||"en";this.localeFormat=false;this.numberButtonType="vertical";this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.type="text";this.childElType="input";this.clearInputValue=function(t){c.setValue(null,t,true)};this.inputBlurHandler=function(){if(c.type==="number"){c.setLocalizedValue(c.value)}c.calciteInputBlur.emit({element:c.childEl,value:c.value});if(c.preFocusValue!==c.value){c.calciteInputChange.emit()}};this.inputFocusHandler=function(t){if(t.target!==c.slottedActionEl){c.setFocus()}c.calciteInputFocus.emit({element:c.childEl,value:c.value});c.preFocusValue=c.value};this.inputInputHandler=function(t){if(c.disabled||c.readOnly){return}c.setValue(t.target.value,t)};this.inputKeyDownHandler=function(t){if(c.disabled||c.readOnly){return}if(t.key==="Enter"){c.calciteInputChange.emit()}};this.inputNumberInputHandler=function(t){if(c.disabled||c.readOnly){return}var i=t.target.value;var e=g(i,c.locale);if(t.inputType==="insertFromPaste"){if(!_(e)){t.preventDefault()}c.setValue(w(e),t);c.childNumberEl.value=c.localizedValue}else{c.setValue(g(i,c.locale),t)}};this.inputNumberKeyDownHandler=function(t){if(c.type!=="number"||c.disabled||c.readOnly){return}if(t.key==="ArrowUp"){c.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){c.nudgeNumberValue("down",t);return}var i=__spreadArray(__spreadArray([],h),["ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab","-"]);if(t.altKey||t.ctrlKey||t.metaKey){return}var e=t.shiftKey&&t.key==="Tab";if(i.includes(t.key)&&(!t.shiftKey||e)){if(t.key==="Enter"){c.calciteInputChange.emit()}return}var n=y(c.locale);if(t.key===n){if(!c.value&&!c.childNumberEl.value){return}if(c.value&&c.childNumberEl.value.indexOf(n)===-1){return}}t.preventDefault()};this.nudgeNumberValue=function(t,i){if(c.type!=="number"){return}var e=c.value;var n=c.maxString?parseFloat(c.maxString):null;var a=c.minString?parseFloat(c.minString):null;var l=c.step==="any"?1:Math.abs(c.step||1);var r=e&&e!==""?parseFloat(e):0;var u=e;if(t==="up"&&(!n&&n!==0||r<n)){u=(r+l).toString()}if(t==="down"&&(!a&&a!==0||r>a)){u=(r-l).toString()}c.setValue(u,i,true)};this.numberButtonClickHandler=function(t){t.preventDefault();var i=t.target.dataset.adjustment;c.nudgeNumberValue(i,t)};this.reset=function(t){if(c.type==="number"){t.preventDefault()}c.setValue(c.defaultValue,t)};this.setChildElRef=function(t){c.childEl=t};this.setChildNumberElRef=function(t){c.childNumberEl=t};this.setLocalizedValue=function(t){c.localizedValue=v(t,c.locale,c.groupSeparator)};this.setValue=function(t,i,e){if(e===void 0){e=false}var n=c.value;c.value=c.type==="number"?k(t):t;if(c.type==="number"){c.setLocalizedValue(c.value)}if(i){if(c.type==="number"&&(t===null||t===void 0?void 0:t.endsWith("."))){return}var a=c.calciteInputInput.emit({element:c.childEl,nativeEvent:i,value:t});if(a.defaultPrevented){c.value=n;c.setLocalizedValue(n)}else if(e){c.calciteInputChange.emit()}}}}t.prototype.disabledWatcher=function(){this.setDisabledAction()};t.prototype.maxWatcher=function(){var t;this.maxString=((t=this.max)===null||t===void 0?void 0:t.toString())||null};t.prototype.minWatcher=function(){var t;this.minString=((t=this.min)===null||t===void 0?void 0:t.toString())||null};t.prototype.valueWatcher=function(t){if(this.type==="number"&&this.localizedValue!==v(t,this.locale)){this.setLocalizedValue(t)}else if(this.childEl&&this.childEl.value!==t){this.childEl.value=t}};t.prototype.updateRequestedIcon=function(){this.requestedIcon=r(I,this.icon,this.type)};Object.defineProperty(t.prototype,"isClearable",{get:function(){var t;return!this.isTextarea&&(this.clearable||this.type==="search")&&((t=this.value)===null||t===void 0?void 0:t.length)>0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isTextarea",{get:function(){return this.childElType==="textarea"},enumerable:false,configurable:true});t.prototype.connectedCallback=function(){var t;this.form=u(this.el,"form");(t=this.form)===null||t===void 0?void 0:t.addEventListener("reset",this.reset);this.scale=s(this.el,"scale",this.scale);this.status=s(this.el,"status",this.status);if(this.type==="number"&&this.value){if(_(this.value)){this.localizedValue=v(this.value,this.locale,this.groupSeparator)}else{this.value=undefined}}m(this)};t.prototype.disconnectedCallback=function(){var t;(t=this.form)===null||t===void 0?void 0:t.removeEventListener("reset",this.reset);b(this)};t.prototype.componentWillLoad=function(){var t,i;this.childElType=this.type==="textarea"?"textarea":"input";this.defaultValue=this.value;this.maxString=(t=this.max)===null||t===void 0?void 0:t.toString();this.minString=(i=this.min)===null||i===void 0?void 0:i.toString();this.requestedIcon=r(I,this.icon,this.type)};t.prototype.componentDidLoad=function(){this.slottedActionEl=this.el.querySelector("[slot=action]");this.setDisabledAction();if(this.type==="number"&&this.childEl){this.childEl.style.cssText=x}};t.prototype.componentShouldUpdate=function(t,i,e){if(this.type==="number"&&e==="value"&&t&&!_(t)){this.value=i;return false}return true};t.prototype.keyDownHandler=function(t){if(this.readOnly||this.disabled){return}if(this.isClearable&&d(t.key)==="Escape"){this.clearInputValue(t);t.preventDefault()}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t,i;return __generator(this,(function(e){if(this.type==="number"){(t=this.childNumberEl)===null||t===void 0?void 0:t.focus()}else{(i=this.childEl)===null||i===void 0?void 0:i.focus()}return[2]}))}))};t.prototype.onLabelClick=function(){this.setFocus()};t.prototype.setDisabledAction=function(){if(!this.slottedActionEl){return}var t=this.slottedActionEl;this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")};t.prototype.render=function(){var t,i,e;var a=o(this.el);var l=c("div",{class:z.loader},c("calcite-progress",{label:this.intlLoading,type:"indeterminate"}));var r=c("button",{class:z.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:this.disabled?-1:0,type:"button"},c("calcite-icon",{icon:"x",scale:"s"}));var u=c("calcite-icon",{class:z.inputIcon,dir:a,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"});var s=this.numberButtonType==="horizontal";var d=c("button",{class:(t={},t[z.numberButtonItem]=true,t[z.buttonItemHorizontal]=s,t),"data-adjustment":"up",disabled:this.disabled||this.readOnly,onClick:this.numberButtonClickHandler,tabIndex:-1,type:"button"},c("calcite-icon",{icon:"chevron-up",scale:"s"}));var h=c("button",{class:(i={},i[z.numberButtonItem]=true,i[z.buttonItemHorizontal]=s,i),"data-adjustment":"down",disabled:this.disabled||this.readOnly,onClick:this.numberButtonClickHandler,tabIndex:-1,type:"button"},c("calcite-icon",{icon:"chevron-down",scale:"s"}));var m=c("div",{class:z.numberButtonWrapper},d,h);var b=c("div",{class:z.prefix},this.prefixText);var g=c("div",{class:z.suffix},this.suffixText);var y=this.type==="number"?c("input",{"aria-label":f(this),autofocus:this.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:undefined,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,tabIndex:this.disabled?-1:0,type:"text",value:this.localizedValue}):null;var v=[c(this.childElType,{"aria-label":f(this),autofocus:this.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?true:null,step:this.step,tabIndex:this.disabled||this.type==="number"?-1:null,type:this.type,value:this.value}),this.isTextarea?c("div",{class:z.resizeIconWrapper},c("calcite-icon",{icon:"chevron-down",scale:"s"})):null];return c(n,{onClick:this.inputFocusHandler},c("div",{class:(e={},e[z.inputWrapper]=true,e[p.rtl]=a==="rtl",e),dir:a},this.type==="number"&&this.numberButtonType==="horizontal"?h:null,this.prefixText?b:null,c("div",{class:z.wrapper},y,v,this.isClearable?r:null,this.requestedIcon?u:null,this.loading?l:null),c("div",{class:z.actionWrapper},c("slot",{name:D.action})),this.type==="number"&&this.numberButtonType==="vertical"?m:null,this.suffixText?g:null,this.type==="number"&&this.numberButtonType==="horizontal"?d:null))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}},enumerable:false,configurable:true});return t}());j.style=E}}}));