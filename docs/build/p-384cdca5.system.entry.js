var __awaiter=this&&this.__awaiter||function(e,t,i,n){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n["throw"](e))}catch(e){r(e)}}function c(e){e.done?i(e.value):a(e.value).then(o,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;a=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e];a=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */System.register(["./p-4058d8b7.system.js","./p-e020662f.system.js","./p-56b352bf.system.js","./p-91645bf7.system.js","./p-fb1da0f5.system.js","./p-6cc23c39.system.js"],(function(e){"use strict";var t,i,n,a,r,o,s,c,u,l,m,p,h;return{setters:[function(e){t=e.r;i=e.c;n=e.h;a=e.H;r=e.g},function(e){o=e.g},function(e){s=e.g;c=e.n;u=e.i},function(e){l=e.i},function(e){m=e.c;p=e.d;h=e.g},function(){}],execute:function(){var d=5;function f(e){if(!l(e)){return null}var t=parseInt(e);return t>=0&&t<=11?"AM":"PM"}function b(e){if(!l(e)){return null}var t=parseInt(e);if(t===0){return"12"}return t>12?y(t-12):e}function w(e){var t=v(e);var i=t?t.split(":"):[null,null,null],n=i[0],a=i[1],r=i[2];return{hour:n,minute:a,second:r||(n&&a?"00":null)}}function v(e){if(!e||e.endsWith(":")||e.startsWith(":")){return null}var t=e.split(":");if(t.length>1){var i=t[0],n=t[1],a=t[2];var r=parseInt(t[0]);var o=parseInt(t[1]);var s=parseInt(t[2]);var c=l(i)&&r>=0&&r<24;var u=l(n)&&o>=0&&o<60;var m=l(a)&&s>=0&&s<60;if(c&&u&&!a||c&&u&&m){var p=y(r)+":"+y(o);if(m){p=p+":"+y(s)}return p}}return null}function y(e){var t=e.toString();return e>=0&&e<=9?t.padStart(2,"0"):t}var k="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";var D=e("calcite_input_time_picker",function(){function e(e){var n=this;t(this,e);this.calciteInputTimePickerChange=i(this,"calciteInputTimePickerChange",7);this.active=false;this.disabled=false;this.hourDisplayFormat="12";this.scale="m";this.step=60;this.value=null;this.internalValueChange=false;this.previousValidValue=null;this.referenceElementId="input-time-picker-"+o();this.calciteInputBlurHandler=function(){n.active=false;var e=v(n.calciteInputEl.value)||v(n.value);if(e!==n.calciteInputEl.value){n.setInputValue(e)}};this.calciteInputFocusHandler=function(){n.active=true};this.calciteInputInputHandler=function(e){n.setValue({value:e.detail.value})};this.setCalciteInputEl=function(e){n.calciteInputEl=e};this.setInputValue=function(e){if(!n.calciteInputEl){return}if(n.hourDisplayFormat==="12"){var t=w(e),i=t.hour,a=t.minute,r=t.second;n.calciteInputEl.value=e?b(i)+":"+a+(n.step!==60?":"+r:"")+" "+f(i):null}else{n.calciteInputEl.value=e}};this.setValue=function(e){var t=e.value,i=e.origin,a=i===void 0?"input":i;var r=n.value;var o=v(t);n.internalValueChange=a!=="external"&&a!=="loading";var s=a!=="loading"&&a!=="external"&&(t!==n.previousValidValue&&!t||!!(!n.previousValidValue&&o)||o!==n.previousValidValue&&o);if(t){if(s){n.previousValidValue=o}if(o&&o!==n.value){n.value=o}}else{n.value=t}if(a==="time-picker"||a==="external"){n.setInputValue(o)}if(s){var c=n.calciteInputTimePickerChange.emit();if(c.defaultPrevented){n.internalValueChange=false;n.value=r;n.setInputValue(r);n.previousValidValue=r}else{n.previousValidValue=o}}}}e.prototype.valueWatcher=function(e){if(!this.internalValueChange){this.setValue({value:e,origin:"external"})}this.internalValueChange=false};e.prototype.keyUpHandler=function(e){if(s(e.key)==="Escape"&&this.active){this.active=false}};e.prototype.timePickerBlurHandler=function(e){e.preventDefault();e.stopPropagation();this.active=false};e.prototype.timePickerChangeHandler=function(e){e.preventDefault();e.stopPropagation();if(e.detail){var t=e.detail,i=t.hour,n=t.minute,a=t.second;var r=void 0;if(i&&n){r=a&&this.step!==60?i+":"+n+":"+a:i+":"+n}else{r=""}this.setValue({value:r,origin:"time-picker"})}};e.prototype.timePickerFocusHandler=function(e){e.preventDefault();e.stopPropagation();this.active=true};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.calciteInputEl.setFocus();return[2]}))}))};e.prototype.onLabelClick=function(){this.setFocus()};e.prototype.connectedCallback=function(){if(this.value){this.setValue({value:this.value,origin:"loading"})}m(this)};e.prototype.componentDidLoad=function(){if(this.calciteInputEl.value!==this.value){this.setInputValue(this.value)}};e.prototype.disconnectedCallback=function(){p(this)};e.prototype.render=function(){var e=w(this.value),t=e.hour,i=e.minute,r=e.second;var o=this.referenceElementId+"-popover";return n(a,null,n("div",{"aria-controls":o,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":o,id:this.referenceElementId,role:"combobox"},n("calcite-input",{disabled:this.disabled,icon:"clock",label:h(this),name:this.name,onCalciteInputBlur:this.calciteInputBlurHandler,onCalciteInputFocus:this.calciteInputFocusHandler,onCalciteInputInput:this.calciteInputInputHandler,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),n("calcite-popover",{id:o,label:"Time Picker",open:this.active||false,referenceElement:this.referenceElementId},n("calcite-time-picker",{hour:t,"hour-display-format":this.hourDisplayFormat,intlHour:this.intlHour,intlHourDown:this.intlHourDown,intlHourUp:this.intlHourUp,intlMeridiem:this.intlMeridiem,intlMeridiemDown:this.intlMeridiemDown,intlMeridiemUp:this.intlMeridiemUp,intlMinute:this.intlMinute,intlMinuteDown:this.intlMinuteDown,intlMinuteUp:this.intlMinuteUp,intlSecond:this.intlSecond,intlSecondDown:this.intlSecondDown,intlSecondUp:this.intlSecondUp,minute:i,scale:this.scale,second:r,step:this.step})))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueWatcher"]}},enumerable:false,configurable:true});return e}());D.style=k;var g={buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",button:"button",delimiter:"delimiter",hour:"hour",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",input:"input",meridiem:"meridiem",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",minute:"minute",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",second:"second",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",timePicker:"time-picker",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right"};var x={hour:"Hour",hourDown:"Decrease hour",hourUp:"Increase hour",meridiem:"AM/PM",meridiemDown:"Decrease AM/PM",meridiemUp:"Increase AM/PM",minute:"Minute",minuteDown:"Decrease minute",minuteUp:"Increase minute",second:"Second",secondDown:"Decrease second",secondUp:"Increase second"};var H='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{color:var(--calcite-ui-text-1);display:inline-block;font-weight:var(--calcite-font-weight-medium);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.time-picker{-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;border-radius:var(--calcite-border-radius)}span{-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-1);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center}span.button{cursor:pointer}span.button:hover,span.button:focus{background-color:var(--calcite-ui-foreground-2)}span.button:focus{outline:2px solid transparent;outline-offset:2px}span.button:active{background-color:var(--calcite-ui-foreground-3)}span.button.top-left{border-top-left-radius:var(--calcite-border-radius)}span.button.bottom-left{border-bottom-left-radius:var(--calcite-border-radius)}span.button.top-right{border-top-right-radius:var(--calcite-border-radius)}span.button.bottom-right{border-bottom-right-radius:var(--calcite-border-radius)}span.button calcite-icon{color:var(--calcite-ui-text-3)}span.input{font-weight:var(--calcite-font-weight-medium);position:relative}span.input:hover{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2)}span.input:focus,span.input:hover:focus{outline:2px solid transparent;outline-offset:2px;-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([scale=s]){font-size:var(--calcite-font-size--1)}:host([scale=s]) span{height:24px;width:40px}:host([scale=s]) .delimiter{height:72px}:host([scale=s][hour-display-format="12"]) .time-picker{width:124.2px}:host([scale=s][hour-display-format="12"]:not([step="60"])) .time-picker{width:168px}:host([scale=s][hour-display-format="24"]) .time-picker{width:84.2px}:host([scale=s][hour-display-format="24"]:not([step="60"])) .time-picker{width:128.4px}:host([scale=m]){font-size:var(--calcite-font-size-0)}:host([scale=m]) span{height:32px;width:44px}:host([scale=m]) .delimiter{height:96px}:host([scale=m][hour-display-format="12"]) .time-picker{width:136.8px}:host([scale=m][hour-display-format="12"]:not([step="60"])) .time-picker{width:186px}:host([scale=m][hour-display-format="24"]) .time-picker{width:92.8px}:host([scale=m][hour-display-format="24"]:not([step="60"])) .time-picker{width:141.6px}:host([scale=l]){font-size:var(--calcite-font-size-1)}:host([scale=l]) span{height:48px;width:64px}:host([scale=l]) .delimiter{height:144px}:host([scale=l][hour-display-format="12"]) .time-picker{width:198px}:host([scale=l][hour-display-format="12"]:not([step="60"])) .time-picker{width:268px}:host([scale=l][hour-display-format="24"]) .time-picker{width:134px}:host([scale=l][hour-display-format="24"]:not([step="60"])) .time-picker{width:204px}';var M=e("calcite_time_picker",function(){function e(e){var n=this;t(this,e);this.calciteTimePickerBlur=i(this,"calciteTimePickerBlur",7);this.calciteTimePickerChange=i(this,"calciteTimePickerChange",7);this.calciteTimePickerFocus=i(this,"calciteTimePickerFocus",7);this.hour=null;this.hourDisplayFormat="12";this.intlHour=x.hour;this.intlHourDown=x.hourDown;this.intlHourUp=x.hourUp;this.intlMeridiem=x.meridiem;this.intlMeridiemDown=x.meridiemDown;this.intlMeridiemUp=x.meridiemUp;this.intlMinute=x.minute;this.intlMinuteDown=x.minuteDown;this.intlMinuteUp=x.minuteUp;this.intlSecond=x.second;this.intlSecondDown=x.secondDown;this.intlSecondUp=x.secondUp;this.minute=null;this.second=null;this.scale="m";this.step=60;this.timeChanged=false;this.meridiem=null;this.displayHour=this.getDisplayHour();this.decrementHour=function(){var e=!n.hour?0:n.hour==="00"?23:parseInt(n.hour)-1;n.setTime("hour",e)};this.decrementMeridiem=function(){var e=n.meridiem==="PM"?"AM":"PM";n.setTime("meridiem",e)};this.decrementMinuteOrSecond=function(e){var t;if(l(n[e])){var i=parseInt(n[e]);t=i===0?59:i-1}else{t=59}n.setTime(e,t)};this.decrementMinute=function(){n.decrementMinuteOrSecond("minute")};this.decrementSecond=function(){n.decrementMinuteOrSecond("second")};this.focusHandler=function(e){n.activeEl=e.currentTarget};this.hourDownButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.decrementHour()}};this.hourKeyDownHandler=function(e){var t=s(e.key);if(c.includes(t)){var i=parseInt(t);var a=void 0;if(l(n.hour)){switch(n.hourDisplayFormat){case"12":a=n.hour==="01"&&i>=0&&i<=2?"1"+i:i;break;case"24":if(n.hour==="01"){a="1"+i}else if(n.hour==="02"&&i>=0&&i<=3){a="2"+i}else{a=i}break}}else{a=i}n.setTime("hour",a)}else{switch(t){case"Backspace":case"Delete":n.setTime("hour",null);break;case"ArrowDown":e.preventDefault();n.decrementHour();break;case"ArrowUp":e.preventDefault();n.incrementHour();break;case" ":case"Spacebar":e.preventDefault();break}}};this.hourUpButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.incrementHour()}};this.incrementMeridiem=function(){var e=n.meridiem==="AM"?"PM":"AM";n.setTime("meridiem",e)};this.incrementHour=function(){var e=l(n.hour)?n.hour==="23"?0:parseInt(n.hour)+1:1;n.setTime("hour",e)};this.incrementMinuteOrSecond=function(e){var t=l(n[e])?n[e]==="59"?0:parseInt(n[e])+1:0;n.setTime(e,t)};this.incrementMinute=function(){n.incrementMinuteOrSecond("minute")};this.incrementSecond=function(){n.incrementMinuteOrSecond("second")};this.meridiemDownButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.decrementMeridiem()}};this.meridiemKeyDownHandler=function(e){switch(s(e.key)){case"a":n.setTime("meridiem","AM");break;case"p":n.setTime("meridiem","PM");break;case"Backspace":case"Delete":n.setTime("meridiem",null);break;case"ArrowUp":e.preventDefault();n.incrementMeridiem();break;case"ArrowDown":e.preventDefault();n.decrementMeridiem();break;case" ":case"Spacebar":e.preventDefault();break}};this.meridiemUpButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.incrementMeridiem()}};this.minuteDownButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.decrementMinute()}};this.minuteKeyDownHandler=function(e){var t=s(e.key);if(c.includes(t)){var i=parseInt(t);var a=void 0;if(l(n.minute)&&n.minute.startsWith("0")){var r=parseInt(n.minute);a=r>d?i:""+r+i}else{a=i}n.setTime("minute",a)}else{switch(t){case"Backspace":case"Delete":n.setTime("minute",null);break;case"ArrowDown":e.preventDefault();n.decrementMinute();break;case"ArrowUp":e.preventDefault();n.incrementMinute();break;case" ":case"Spacebar":e.preventDefault();break}}};this.minuteUpButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.incrementMinute()}};this.secondDownButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.decrementSecond()}};this.secondKeyDownHandler=function(e){var t=s(e.key);if(c.includes(t)){var i=parseInt(t);var a=void 0;if(l(n.second)&&n.second.startsWith("0")){var r=parseInt(n.second);a=r>d?i:""+r+i}else{a=i}n.setTime("second",a)}else{switch(t){case"Backspace":case"Delete":n.setTime("second",null);break;case"ArrowDown":e.preventDefault();n.decrementSecond();break;case"ArrowUp":e.preventDefault();n.incrementSecond();break;case" ":case"Spacebar":e.preventDefault();break}}};this.secondUpButtonKeyDownHandler=function(e){if(n.buttonActivated(e)){n.incrementSecond()}};this.setTime=function(e,t,i){if(i===void 0){i=true}switch(e){default:return;case"hour":n.hour=typeof t==="number"?y(t):t;break;case"minute":n.minute=typeof t==="number"?y(t):t;break;case"second":n.second=typeof t==="number"?y(t):t;break;case"meridiem":if(l(n.hour)){var a=parseInt(n.hour);switch(t){case"AM":if(a>=12){n.hour=y(a-12)}break;case"PM":if(a<12){n.hour=y(a+12)}break}n.meridiem=t}else{n.meridiem=t}break}n.timeChanged=true;if(i){n.calciteTimePickerChange.emit(n.getTime())}}}e.prototype.hourChanged=function(e){if(this.hourDisplayFormat==="12"&&l(e)){this.meridiem=f(e)}};e.prototype.timeChangeHandler=function(){var e=this.getTime(),t=e.hour,i=e.minute;if(!t&&!i){this.setTime("meridiem",null,false)}if(this.timeChanged){this.timeChanged=false}};e.prototype.hostBlurHandler=function(){this.calciteTimePickerBlur.emit()};e.prototype.hostFocusHandler=function(){this.calciteTimePickerFocus.emit()};e.prototype.keyDownHandler=function(e){var t=s(e.key);switch(this.activeEl){case this.hourEl:if(t==="ArrowRight"){this.setFocus("minute")}break;case this.minuteEl:switch(t){case"ArrowLeft":this.setFocus("hour");break;case"ArrowRight":if(this.step!==60){this.setFocus("second")}else if(this.hourDisplayFormat==="12"){this.setFocus("meridiem")}break}break;case this.secondEl:switch(t){case"ArrowLeft":this.setFocus("minute");break;case"ArrowRight":if(this.hourDisplayFormat==="12"){this.setFocus("meridiem")}break}break;case this.meridiemEl:switch(t){case"ArrowLeft":if(this.step!==60){this.setFocus("second")}else{this.setFocus("minute")}break}break}};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(i){(t=this[(e||"hour")+"El"])===null||t===void 0?void 0:t.focus();return[2]}))}))};e.prototype.buttonActivated=function(e){var t=s(e.key);if(t===" "){e.preventDefault()}return u(t)};e.prototype.getDisplayHour=function(){if(!this.hour){return"--"}if(this.hourDisplayFormat==="12"){return b(this.hour)}return this.hour};e.prototype.getTime=function(){return{hour:this.hour,minute:this.minute,second:this.second}};e.prototype.connectedCallback=function(){if(this.hourDisplayFormat==="12"){this.meridiem=f(this.hour)}if(l(this.hour)){this.hour=y(parseInt(this.hour))}if(l(this.minute)){this.minute=y(parseInt(this.minute))}if(l(this.second)){this.second=y(parseInt(this.second))}};e.prototype.render=function(){var e,t,i,r,o,s,c,u,m,p,h,d;var f=this;var b=this.scale==="s"||this.scale==="m"?"s":"m";var w=this.step!==60;var v=l(this.hour);var y=l(this.minute);var k=l(this.second);return n(a,null,n("div",{class:g.timePicker},n("div",{role:"group"},n("span",{"aria-label":this.intlHourUp,class:(e={},e[g.button]=true,e[g.buttonHourUp]=true,e[g.buttonTopLeft]=true,e),onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-up",scale:b})),n("span",{"aria-label":this.intlHour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":v&&parseInt(this.hour),"aria-valuetext":this.hour,class:(t={},t[g.input]=true,t[g.hour]=true,t),onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,ref:function(e){return f.hourEl=e},role:"spinbutton",tabIndex:0},this.getDisplayHour()),n("span",{"aria-label":this.intlHourDown,class:(i={},i[g.button]=true,i[g.buttonHourDown]=true,i[g.buttonBottomLeft]=true,i),onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-down",scale:b}))),n("span",{class:g.delimiter},":"),n("div",{role:"group"},n("span",{"aria-label":this.intlMinuteUp,class:(r={},r[g.button]=true,r[g.buttonMinuteUp]=true,r),onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-up",scale:b})),n("span",{"aria-label":this.intlMinute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":y&&parseInt(this.minute),"aria-valuetext":this.minute,class:(o={},o[g.input]=true,o[g.minute]=true,o),onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:function(e){return f.minuteEl=e},role:"spinbutton",tabIndex:0},this.minute?this.minute:"--"),n("span",{"aria-label":this.intlMinuteDown,class:(s={},s[g.button]=true,s[g.buttonMinuteDown]=true,s),onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-down",scale:b}))),w&&n("span",{class:g.delimiter},":"),w&&n("div",{role:"group"},n("span",{"aria-label":this.intlSecondUp,class:(c={},c[g.button]=true,c[g.buttonSecondUp]=true,c),onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-up",scale:b})),n("span",{"aria-label":this.intlSecond,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":k&&parseInt(this.second),"aria-valuetext":this.second,class:(u={},u[g.input]=true,u[g.second]=true,u),onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:function(e){return f.secondEl=e},role:"spinbutton",tabIndex:0},this.second?this.second:"--"),n("span",{"aria-label":this.intlSecondDown,class:(m={},m[g.button]=true,m[g.buttonSecondDown]=true,m),onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-down",scale:b}))),this.hourDisplayFormat==="12"&&n("div",{role:"group"},n("span",{"aria-label":this.intlMeridiemUp,class:(p={},p[g.button]=true,p[g.buttonMeridiemUp]=true,p[g.buttonTopRight]=true,p),onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-up",scale:b})),n("span",{"aria-label":this.intlMeridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":this.meridiem==="AM"?"1":this.meridiem==="PM"?"2":undefined,"aria-valuetext":this.meridiem,class:(h={},h[g.input]=true,h[g.meridiem]=true,h),onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:function(e){return f.meridiemEl=e},role:"spinbutton",tabIndex:0},this.meridiem?this.meridiem:"--"),n("span",{"aria-label":this.intlMeridiemDown,class:(d={},d[g.button]=true,d[g.buttonMeridiemDown]=true,d[g.buttonBottomRight]=true,d),onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},n("calcite-icon",{icon:"chevron-down",scale:b})))))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{hour:["hourChanged","timeChangeHandler"],minute:["timeChangeHandler"],second:["timeChangeHandler"]}},enumerable:false,configurable:true});return e}());M.style=H}}}));