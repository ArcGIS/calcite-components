System.register(["./p-1d25d5b7.system.js","./p-592af445.system.js"],(function(t){"use strict";var a,r,n,i;return{setters:[function(t){a=t.r;r=t.h;n=t.g},function(t){i=t.g}],execute:function(){function e(t){return t<0?-1:1}function h(t,a,r){var n=a[0]-t[0];var i=r[0]-a[0];var h=a[1]-t[1];var s=r[1]-a[1];var v=h/(n||i<0&&0);var u=s/(i||n<0&&0);var d=(v*i+u*n)/(n+i);return(e(v)+e(u))*Math.min(Math.abs(v),Math.abs(u),.5*Math.abs(d))||0}function s(t,a,r){var n=a[0]-t[0];var i=a[1]-t[1];return n?(3*i/n-r)/2:r}function v(t,a,r,n,i){var e=t[0],h=t[1];var s=a[0],v=a[1];var u=(s-e)/3;var d=i([e+u,h+u*r]).join(",");var o=i([s-u,v-u*n]).join(",");var c=i([s,v]).join(",");return"C "+d+" "+o+" "+c}function u(t){var a=t.width,r=t.height,n=t.min,i=t.max;var e=i[0]-n[0];var h=i[1]-n[1];return function(t){var n=t[0]/e*a;var i=r-t[1]/h*r;return[n,i]}}function d(t){var a=t[0],r=a[0],n=a[1];var i=[r,n];var e=[r,n];return t.reduce((function(t,a){var r=t.min,n=t.max;var i=a[0],e=a[1];return{min:[Math.min(r[0],i),Math.min(r[1],e)],max:[Math.max(n[0],i),Math.max(n[1],e)]}}),{min:i,max:e})}function o(t){var a=t.data,r=t.min,n=t.max,i=t.t;if(a.length===0){return""}var e=i(a[0]),u=e[0],d=e[1];var o=i(r),c=o[0],g=o[1];var l=i(n)[0];var m;var p;var f;var x=a.reduce((function(t,r,n){p=a[n-2];f=a[n-1];if(n>1){var e=h(p,f,r);var u=m===undefined?s(p,f,e):m;var d=v(p,f,u,e,i);m=e;return t+" "+d}return t}),"M "+c+","+g+" L "+c+","+d+" L "+u+","+d);var w=a[a.length-1];var M=v(f,w,m,s(f,w,m),i);return x+" "+M+" L "+l+","+g+" Z"}var c=":host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}";var g=t("calcite_graph",function(){function t(t){a(this,t);this.data=[];this.width=300;this.height=100;this.maskId="calcite-graph-mask-"+i()}t.prototype.render=function(){var t=this,a=t.data,n=t.width,i=t.height,e=t.highlightMax,h=t.highlightMin;var s=this.maskId;if(!a||a.length===0){return r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i})}var v=d(a),c=v.min,g=v.max;var l=u({min:c,max:g,width:n,height:i});var m=l([h,g[1]])[0];var p=l([e,g[1]])[0];var f=o({data:a,min:c,max:g,t:l});return r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i},h!==undefined?r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i},r("mask",{id:s+"1",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n              M 0,0\n              L "+(m-1)+",0\n              L "+(m-1)+","+i+"\n              L 0,"+i+"\n              Z\n            "})),r("mask",{id:s+"2",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n              M "+(m+1)+",0\n              L "+(p-1)+",0\n              L "+(p-1)+","+i+"\n              L "+(m+1)+", "+i+"\n              Z\n            "})),r("mask",{id:s+"3",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n                  M "+(p+1)+",0\n                  L "+n+",0\n                  L "+n+","+i+"\n                  L "+(p+1)+", "+i+"\n                  Z\n                "})),r("path",{d:f,class:"graph-path",mask:"url(#"+s+"1)"}),r("path",{d:f,class:"graph-path--highlight",mask:"url(#"+s+"2)"}),r("path",{d:f,class:"graph-path",mask:"url(#"+s+"3)"})):r("path",{d:f,class:"graph-path"}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());g.style=c}}}));