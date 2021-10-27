/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as i,h as e,H as a,g as n}from"./p-8f1f8bde.js";import{a as o,d as r}from"./p-52cc870b.js";import{g as s}from"./p-72563742.js";import{c as l,d as c}from"./p-2ba00b89.js";import{c as m}from"./p-e4acb5a8.js";import"./p-8a63221d.js";let d=class{constructor(e){t(this,e),this.calciteRadioGroupChange=i(this,"calciteRadioGroupChange",7),this.appearance="solid",this.disabled=!1,this.layout="horizontal",this.scale="m",this.width="auto",this.handleClick=t=>{"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)},this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})()}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,i){if(t===i)return;const e=this.getItems(),a=Array.from(e).filter((i=>i===t)).pop();a?(this.selectItem(a),this.calciteRadioGroupChange.emit(a.value)):e[0]&&(e[0].tabIndex=0)}connectedCallback(){const t=this.getItems(),i=Array.from(t).filter((t=>t.checked)).pop();i?this.selectItem(i):t[0]&&(t[0].tabIndex=0);const{hiddenInput:e,name:a}=this;a&&(e.name=a),i&&(e.value=i.value),l(this)}disconnectedCallback(){c(this)}componentDidLoad(){this.hasLoaded=!0}render(){return e(a,{onClick:this.handleClick,role:"radiogroup",tabIndex:this.disabled?-1:null},e("slot",null))}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const i=s(t.key),{el:e,selectedItem:a}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(i))return;let n=i;"rtl"===o(e)&&("ArrowRight"===i&&(n="ArrowLeft"),"ArrowLeft"===i&&(n="ArrowRight"));const r=this.getItems();let l=-1;switch(r.forEach(((t,i)=>{t===a&&(l=i)})),n){case"ArrowLeft":case"ArrowUp":t.preventDefault();const i=r.item(l<1?r.length-1:l-1);return void this.selectItem(i);case"ArrowRight":case"ArrowDown":t.preventDefault();const e=-1===l?r.item(1):r.item(l+1)||r.item(0);return void this.selectItem(e);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}onLabelClick(){this.setFocus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const i=this.getItems();let e=null;i.forEach((i=>{const a=i.value===t.value;(a&&!i.checked||!a&&i.checked)&&(i.checked=a),i.tabIndex=a?0:-1,a&&(e=i)})),this.selectedItem=e,this.syncWithInputProxy(e),e&&e.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return n(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-moz-fit-content;min-width:-webkit-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}";let h=class{constructor(e){t(this,e),this.calciteRadioGroupItemChange=i(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconFlipRtl=!1,this.iconPosition="start",this.mutationObserver=m("mutation",(()=>this.syncFromExternalInput()))}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){var t;const i=this.el.querySelector("input[slot=input]");i&&(this.value=i.value,this.checked=i.checked,null===(t=this.mutationObserver)||void 0===t||t.observe(i,{attributes:!0})),this.inputProxy=i}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}componentWillLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:i,value:n}=this,s=o(this.el),l=r(this.el,"scale","m"),c=r(this.el,"appearance","solid"),m=r(this.el,"layout","horizontal"),d=e("calcite-icon",{class:"radio-group-item-icon",dir:s,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return e(a,{"aria-checked":t.toString(),role:"radio"},e("label",{class:{"label--scale-s":"s"===l,"label--scale-m":"m"===l,"label--scale-l":"l"===l,"label--horizontal":"horizontal"===m,"label--outline":"outline"===c}},this.icon&&"start"===this.iconPosition?d:null,e("slot",null,i?n:""),e("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?d:null))}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"))}get el(){return n(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;font-weight:var(--calcite-font-weight-normal);-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-ms-flex-align:center;align-items:center;margin:0.125rem;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out}.label--horizontal{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}.label--scale-s{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([checked]) .label--outline{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:0.75rem;margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.75rem;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:1rem;margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:1rem;margin-inline-start:1rem}";export{d as calcite_radio_group,h as calcite_radio_group_item}