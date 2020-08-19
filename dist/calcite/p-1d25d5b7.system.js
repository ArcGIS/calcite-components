var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{o(n.next(e))}catch(t){i(t)}}function s(e){try{o(n["throw"](e))}catch(t){i(t)}}function o(e){e.done?r(e.value):a(e.value).then(l,s)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return o([e,t])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(s){l=[6,s];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","calcite");var a;var i;var l;var s=false;var o=false;var $=false;var f=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var p=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var m=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,t,r,n){if(r){{if(n){r=r.filter((function(e){var t=e[0];return t&16}))}else{r=r.filter((function(e){var t=e[0];return!(t&16)}))}}r.map((function(r){var n=r[0],a=r[1],i=r[2];var l=N(e,n);var s=w(t,i);var o=R(n);p.ael(l,a,s,o);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return p.rel(l,a,s,o)}))}))}};var w=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}};var N=function(e,t){if(t&8)return v;if(t&32)return h.body;if(t&16)return e.parentElement;return e};var R=function(e){return(e&2)!==0};var x="r";var S="o";var _="s";var k="t";var T="s-id";var C="sty-id";var L="c-id";var A="{visibility:hidden}[calcite-hydrated]{visibility:inherit}";var j="http://www.w3.org/1999/xlink";var I=function(e,t){if(t===void 0){t=""}{return function(){return}}};var E=function(e,t){{return function(){return}}};var P=new WeakMap;var M=function(e,t,r){var n=ut.get(e);if(y&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}ut.set(e,n)};var O=function(e,t,r,n){var a=U(t);var i=ut.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var l=P.get(e);var s=void 0;if(!l){P.set(e,l=new Set)}if(!l.has(a)){if(e.host&&(s=e.querySelector("["+C+'="'+a+'"]'))){s.innerHTML=i}else{if(p.$cssShim$){s=p.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var o=s["s-sc"];if(o){a=o;l=null}}else{s=h.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var B=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=I("attachStyles",t.$tagName$);var i=O(m&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var U=function(e,t){return"sc-"+e.$tagName$};var q=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var z={};var H="http://www.w3.org/2000/svg";var D="http://www.w3.org/1999/xhtml";var V=function(e){return e!=null};var W=function(){};var F=function(e){e=typeof e;return e==="object"||e==="function"};var G=typeof Deno!=="undefined";var Q=!G&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var J=G&&Deno.build.os==="windows";var K=Q?process.cwd:G?Deno.cwd:function(){return"/"};var X=Q?process.exit:G?Deno.exit:W;var Y=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var l=null;var s=false;var o=false;var $=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!F(a)){a=String(a)}if(s&&o){$[$.length-1].$text$+=a}else{$.push(s?Z(null,a):a)}o=s}}};f(r);if(t){if(t.key){i=t.key}if(t.name){l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,$,re)}var c=Z(e,null);c.$attrs$=t;if($.length>0){c.$children$=$}{c.$key$=i}{c.$name$=l}return c}));var Z=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var ee=e("H",{});var te=function(e){return e&&e.$tag$===ee};var re={forEach:function(e,t){return e.map(ne).forEach(t)},map:function(e,t){return e.map(ne).map(t).map(ae)}};var ne=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ae=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return Y.apply(void 0,__spreadArrays([e.vtag,t],e.vchildren||[]))}var r=Z(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var ie=function(e,t,r,n,a,i){if(r!==n){var l=st(e,t);var s=t.toLowerCase();if(t==="class"){var o=e.classList;var $=se(r);var f=se(n);o.remove.apply(o,$.filter((function(e){return e&&!f.includes(e)})));o.add.apply(o,f.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(st(v,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){p.rel(e,t,r,false)}if(n){p.ael(e,t,n,false)}}else{var c=F(n);if((l||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(m){}}var h=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){t=s;h=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(h){e.removeAttributeNS(j,t)}else{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(j,t,n)}else{e.setAttribute(t,n)}}}}};var le=/\s/;var se=function(e){return!e?[]:e.split(le)};var oe=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||z;var l=t.$attrs$||z;{for(n in i){if(!(n in l)){ie(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){ie(a,n,i[n],l[n],r,t.$flags$)}};var $e=function(e,t,r,n){var o=t.$children$[r];var u=0;var c;var v;var d;if(!s){$=true;if(o.$tag$==="slot"){if(a){n.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=h.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=h.createTextNode("")}else{if(!f){f=o.$tag$==="svg"}c=o.$elm$=h.createElementNS(f?H:D,o.$flags$&2?"slot-fb":o.$tag$);if(f&&o.$tag$==="foreignObject"){f=false}{oe(null,o,f)}if(V(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=$e(e,o,u,c);if(v){c.appendChild(v)}}}{if(o.$tag$==="svg"){f=false}else if(c.tagName==="foreignObject"){f=true}}}{c["s-hn"]=l;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===o.$tag$&&e.$elm$){fe(e.$elm$,false)}}}return c};var fe=function(e,t){p.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){pe(a).insertBefore(a,he(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(t){fe(a,t)}}p.$flags$&=~1};var ue=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=$e(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,he(t))}}}};var ce=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;Ne(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{fe(a,true)}}a.remove()}}};var ve=function(e,t,r,n){var a=0;var i=0;var l=0;var s=0;var o=t.length-1;var $=t[0];var f=t[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if($==null){$=t[++a]}else if(f==null){f=t[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(de($,c)){me($,c);$=t[++a];c=n[++i]}else if(de(f,v)){me(f,v);f=t[--o];v=n[--u]}else if(de($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){fe($.$elm$.parentNode,false)}me($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=t[++a];v=n[--u]}else if(de(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){fe(f.$elm$.parentNode,false)}me(f,c);e.insertBefore(f.$elm$,$.$elm$);f=t[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(t[s]&&t[s].$key$!==null&&t[s].$key$===c.$key$){l=s;break}}}if(l>=0){h=t[l];if(h.$tag$!==c.$tag$){d=$e(t&&t[i],r,l,e)}else{me(h,c);t[l]=undefined;d=h.$elm$}c=n[++i]}else{d=$e(t&&t[i],r,i,e);c=n[++i]}if(d){{pe($.$elm$).insertBefore(d,he($.$elm$))}}}}if(a>o){ue(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){ce(t,a,o)}};var de=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var he=function(e){return e&&e["s-ol"]||e};var pe=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var me=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var l=t.$text$;var s;if(l===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{oe(e,t,f)}}if(n!==null&&a!==null){ve(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}ue(r,null,t,a,0,a.length-1)}else if(n!==null){ce(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if(s=r["s-cr"]){s.parentNode.textContent=l}else if(e.$text$!==l){r.data=l}};var ge=function(e){var t=e.childNodes;var r;var n;var a;var i;var l;var s;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){l=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){s=t[i].nodeType;if(l!==""){if(s===1&&l===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(s===1||s===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}ge(r)}}};var ye=[];var be=function(e){var t;var r;var n;var a;var i;var l;var s=0;var $=e.childNodes;var f=$.length;for(;s<f;s++){t=$[s];if(t["s-sr"]&&(r=t["s-cr"])){n=r.parentNode.childNodes;a=t["s-sn"];for(l=n.length-1;l>=0;l--){r=n[l];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(we(r,a)){i=ye.find((function(e){return e.$nodeToRelocate$===r}));o=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{ye.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){ye.map((function(e){if(we(e.$nodeToRelocate$,r["s-sn"])){i=ye.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ye.some((function(e){return e.$nodeToRelocate$===r}))){ye.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){be(t)}}};var we=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var Ne=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(Ne)}};var Re=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||Z(null,null);var u=te(t)?t:Y(null,null,t);l=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];s=m&&(n.$flags$&1)!==0;o=false}me(f,u);{p.$flags$|=1;if($){be(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ye.length;w++){c=ye[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<ye.length;w++){c=ye[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(o){ge(u.$elm$)}p.$flags$&=~1;ye.length=0}};var xe=e("g",(function(e){return at(e).$hostElement$}));var Se=e("c",(function(e,t,r){var n=xe(e);return{emit:function(e){return _e(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var _e=function(e,t,r){var n=p.ce(t,r);e.dispatchEvent(n);return n};var ke=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var Te=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ke(e,e.$ancestorComponent$);var r=function(){return Ce(e,t)};return bt(r)};var Ce=function(e,t){var r=I("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return Pe(n,t,r)}));e.$queuedListeners$=null}}{a=Pe(n,"componentWillLoad")}}else{{a=Pe(n,"componentWillUpdate")}}{a=Me(a,(function(){return Pe(n,"componentWillRender")}))}r();return Me(a,(function(){return Le(e,n,t)}))};var Le=function(e,t,r){var n=e.$hostElement$;var a=I("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){B(e)}var l=I("render",e.$cmpMeta$.$tagName$);{{Re(e,Ae(e,t))}}if(p.$cssShim$){p.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}l();a();{var s=n["s-p"];var o=function(){return je(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}};var Ae=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){ot(r)}return t};var je=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=I("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{Pe(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{Oe(r)}{Pe(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){Ee()}}}else{{Pe(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){yt((function(){return Te(e,false)}))}e.$flags$&=~(4|512)}};var Ie=function(e){{var t=at(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){Te(t,false)}return r}};var Ee=function(e){{Oe(h.documentElement)}{p.$flags$|=2}yt((function(){return _e(v,"appload",{detail:{namespace:n}})}))};var Pe=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){ot(n)}}return undefined};var Me=function(e,t){return e&&e.then?e.then(t):t()};var Oe=function(e){return e.setAttribute("calcite-hydrated","")};var Be=function(e,t,r,n){var a=I("hydrateClient",t);var i=e.shadowRoot;var l=[];var s=[];var o=i?[]:null;var $=n.$vnode$=Z(t,null);if(!p.$orgLocNodes$){qe(h.body,p.$orgLocNodes$=new Map)}e[T]=r;e.removeAttribute(T);Ue($,l,s,o,e,e,r);l.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=p.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&m&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}p.$orgLocNodes$.delete(r)}));if(i){o.map((function(e){if(e){i.appendChild(e)}}))}a()};var Ue=function(e,t,r,n,a,i,l){var s;var o;var $;var f;if(i.nodeType===1){s=i.getAttribute(L);if(s){o=s.split(".");if(o[0]===l||o[0]==="0"){$={$flags$:0,$hostId$:o[0],$nodeId$:o[1],$depth$:o[2],$index$:o[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(L);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){Ue(e,t,r,n,a,i.childNodes[f],l)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){Ue(e,t,r,n,a,i.shadowRoot.childNodes[f],l)}}}else if(i.nodeType===8){o=i.nodeValue.split(".");if(o[1]===l||o[1]==="0"){s=o[0];$={$flags$:0,$hostId$:o[1],$nodeId$:o[2],$depth$:o[3],$index$:o[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(s===k){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===l){if(s===_){$.$tag$="slot";if(o[5]){i["s-sn"]=$.$name$=o[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=h.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(s===x){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=Z(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var qe=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){qe(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){qe(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===S){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var ze=function(e,t){if(e!=null&&!F(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var He=function(e,t){return at(e).$instanceValues$.get(t)};var De=function(e,t,r,n){var a=at(e);var i=a.$instanceValues$.get(t);var l=a.$flags$;var s=a.$lazyInstance$;r=ze(r,n.$members$[t][0]);if((!(l&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(s){if(n.$watchers$&&l&128){var o=n.$watchers$[t];if(o){o.map((function(e){try{s[e](r,i,t)}catch(n){ot(n)}}))}}if((l&(2|16))===2){Te(a,false)}}}};var Ve=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return He(this,n)},set:function(e){De(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=at(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;p.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var We=function(e,n,a,i,l){return __awaiter(r,void 0,void 0,(function(){var e,r,i,s,o,$,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;l=ft(a);if(!l.then)return[3,2];e=E();return[4,l];case 1:l=u.sent();e();u.label=2;case 2:if(!l.isProxied){{a.$watchers$=l.watchers}Ve(l,a,2);l.isProxied=true}r=I("createInstance",a.$tagName$);{n.$flags$|=8}try{new l(n)}catch(c){ot(c)}{n.$flags$&=~8}{n.$flags$|=128}r();Fe(n.$lazyInstance$);if(!l.style)return[3,5];i=l.style;s=U(a);if(!!ut.has(s))return[3,5];o=I("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-7f0a8d9c.system.js").then((function(e){return e.scopeCss(i,s,false)}))];case 3:i=u.sent();u.label=4;case 4:M(s,i,!!(a.$flags$&1));o();u.label=5;case 5:$=n.$ancestorComponent$;f=function(){return Te(n,true)};if($&&$["s-rc"]){$["s-rc"].push(f)}else{f()}return[2]}}))}))};var Fe=function(e){{Pe(e,"connectedCallback")}};var Ge=function(e){if((p.$flags$&1)===0){var t=at(e);var r=t.$cmpMeta$;var n=I("connectedCallback",r.$tagName$);{b(e,t,r.$listeners$,true)}if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(T);if(a){if(m&&r.$flags$&1){var i=O(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}Be(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){Qe(e)}}{var l=e;while(l=l.parentNode||l.host){if(l.nodeType===1&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){ke(t,t.$ancestorComponent$=l);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{yt((function(){return We(e,t,r)}))}}else{b(e,t,r.$listeners$,false);Fe(t.$lazyInstance$)}n()}};var Qe=function(e){var t=e["s-cr"]=h.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Je=function(e){if((p.$flags$&1)===0){var t=at(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(p.$cssShim$){p.$cssShim$.removeHost(e)}{Pe(r,"disconnectedCallback")}}};var Ke=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var t=e["s-sn"]=Ye(e);var r=Ze(this.childNodes,t);if(r){var n=et(r,t);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var Xe=function(e,t){var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((p.$flags$&1)===0&&at(this).$flags$&2){var t=new r;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){t.push(i)}}return t}return r.from(e)}})}};var Ye=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var Ze=function(e,t){var r=0;var n;for(;r<e.length;r++){n=e[r];if(n["s-sr"]&&n["s-sn"]===t){return n}n=Ze(n.childNodes,t);if(n){return n}}return null};var et=function(e,t){var r=[e];while((e=e.nextSibling)&&e["s-sn"]===t){r.push(e)}return r};var tt=e("b",(function(e,t){if(t===void 0){t={}}var r=I();var n=[];var a=t.exclude||[];var i=v.customElements;var l=h.head;var s=l.querySelector("meta[charset]");var o=h.createElement("style");var $=[];var f=h.querySelectorAll("["+C+"]");var u;var c=true;var d=0;Object.assign(p,t);p.$resourcesUrl$=new URL(t.resourcesUrl||"./",h.baseURI).href;{if(t.syncQueue){p.$flags$|=4}}{p.$flags$|=2}{for(;d<f.length;d++){M(f[d].getAttribute(C),q(f[d].innerHTML),true)}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!m&&r.$flags$&1){r.$flags$|=8}var l=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;lt(t,r);if(r.$flags$&1){if(m){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}{Xe(t,r)}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){$.push(this)}else{p.jmp((function(){return Ge(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return Je(e)}))};t.prototype.forceUpdate=function(){Ie(this)};t.prototype.componentOnReady=function(){return at(this).$onReadyPromise$};return t}(HTMLElement);{Ke(s.prototype)}r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,Ve(s,r,1))}}))}));{o.innerHTML=n+A;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}c=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return u=setTimeout(Ee,30)}))}}r()}));var rt=e("e",(function(e){var t=new URL(e,p.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname}));var nt=new WeakMap;var at=function(e){return nt.get(e)};var it=e("r",(function(e,t){return nt.set(t.$lazyInstance$=e,t)}));var lt=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,r,t.$listeners$,false);return nt.set(e,r)};var st=function(e,t){return t in e};var ot=function(e){return console.error(e)};var $t=new Map;var ft=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=$t.get(i);if(l){return l[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{$t.set(i,e)}return e[a]}),ot)};var ut=new Map;var ct=[];var vt=[];var dt=[];var ht=function(e,t){return function(r){e.push(r);if(!c){c=true;if(t&&p.$flags$&4){yt(gt)}else{p.raf(gt)}}}};var pt=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){ot(r)}}e.length=0};var mt=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){ot(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var gt=function(){{u++}pt(ct);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;mt(vt,e);mt(dt,e);if(vt.length>0){dt.push.apply(dt,vt);vt.length=0}if(c=ct.length+vt.length+dt.length>0){p.raf(gt)}else{u=0}}};var yt=function(e){return g().then(e)};var bt=ht(vt,true)}}}));