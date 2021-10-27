/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
System.register(["./p-4058d8b7.system.js","./p-6cc23c39.system.js","./p-a0c02648.system.js","./p-caf7085a.system.js"],(function(t){"use strict";var e,n,r,o,i;return{setters:[function(t){e=t.f;n=t.h},function(t){r=t.a},function(t){o=t.S},function(t){i=t.S}],execute:function(){t("t",p);var c=t("o",150);var a=2;var u=function(t){var e=t.height,n=t.actionHeight,r=t.groupCount;return Math.floor((e-r*a)/n)};var l=t("g",(function(t){var e=t.actionCount,n=t.actionHeight,r=t.height,o=t.groupCount;return Math.max(e-u({height:r,actionHeight:n,groupCount:o}),0)}));var f=t("q",(function(t){return Array.from(t.querySelectorAll("calcite-action")).filter((function(t){return t.closest("calcite-action-menu")?t.slot===o.trigger:true}))}));var s=t("a",(function(t){var n=t.actionGroups,r=t.expanded,o=t.overflowCount;var c=o;n.reverse().forEach((function(t){var n=0;var o=f(t).reverse();o.forEach((function(t){if(t.slot===i.menuActions){t.removeAttribute("slot");t.textEnabled=r}}));if(c>0){o.some((function(t){var e=o.filter((function(t){return!t.slot}));if(e.length>1&&o.length>2&&!t.closest("calcite-action-menu")){t.textEnabled=true;t.setAttribute("slot",i.menuActions);n++;if(n>1){c--}}return c<1}))}e(t)}))}));var v={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function h(t,e){var n;return t||((n=e.closest("calcite-shell-panel"))===null||n===void 0?void 0:n.position)||"start"}function p(t){var e=t.parent,n=t.expanded;f(e).filter((function(t){return t.slot!==i.menuActions})).forEach((function(t){return t.textEnabled=n}));e.querySelectorAll("calcite-action-group").forEach((function(t){return t.expanded=n}))}var d=function(t){var e=t.tooltip,n=t.referenceElement,r=t.expanded,o=t.ref;if(e){e.referenceElement=!r&&n}if(o){o(n)}return n};var g=t("C",(function(t){var e=t.expanded,o=t.intlExpand,i=t.intlCollapse,c=t.toggle,a=t.el,u=t.position,l=t.tooltip,f=t.ref,s=t.scale;var p=r(a)==="rtl";var g=e?i:o;var m=[v.chevronsLeft,v.chevronsRight];if(p){m.reverse()}var x=h(u,a)==="end";var E=x?m[1]:m[0];var y=x?m[0]:m[1];var A=n("calcite-action",{dir:p?"rtl":"ltr",icon:e?E:y,onClick:c,ref:function(t){return d({tooltip:l,referenceElement:t,expanded:e,ref:f})},scale:s,text:g,textEnabled:e});return l?n("calcite-tooltip-manager",null,A):A}))}}}));