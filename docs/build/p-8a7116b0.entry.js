/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{r as t,c as e,h as i,g as a}from"./p-8f1f8bde.js";import{S as o}from"./p-1fb7138b.js";import{s as n,a as s,g as c,C as l}from"./p-52cc870b.js";import"./p-8a63221d.js";let r=class{constructor(i){t(this,i),this.calciteNoticeClose=e(this,"calciteNoticeClose",7),this.calciteNoticeOpen=e(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose="Close",this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=n(o,this.icon,this.color)}componentWillLoad(){this.requestedIcon=n(o,this.icon,this.color)}componentDidLoad(){this.noticeLinkEl=this.el.querySelector("calcite-link")}render(){const{el:t}=this,e=s(t),a=i("button",{"aria-label":this.intlClose,class:"notice-close",onClick:this.close,ref:t=>this.closeButton=t},i("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),o=c(t,"actions-end");return i("div",{class:{container:!0,[l.rtl]:"rtl"===e}},this.requestedIcon?i("div",{class:"notice-icon"},i("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,i("div",{class:"notice-content"},i("slot",{name:"title"}),i("slot",{name:"message"}),i("slot",{name:"link"})),o?i("div",{class:"actions-end"},i("slot",{name:"actions-end"})):null,this.dismissible?a:null)}async setFocus(){(this.closeButton||this.noticeLinkEl)&&(this.noticeLinkEl?this.noticeLinkEl.setFocus():this.closeButton&&this.closeButton.focus())}get el(){return a(this)}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}};r.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";export{r as calcite_notice}