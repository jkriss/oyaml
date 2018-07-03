!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.oyaml=t():r.oyaml=t()}(window,function(){return function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="/",n(n.s=3)}([function(r,t){function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}r.exports=function r(t){var e="",o=n(t);if(Array.isArray(t))return"[".concat(t.map(r).join(", "),"]");if("object"===o){var u=[];return Object.keys(t).forEach(function(n){var e=r(n),o=r(t[n]);u.push("".concat(e,":").concat(o))}),e+=u.join(" ")}return"number"===o?t:"string"===o?0===t.length?'""':t.split("").filter(function(r){return r.match(/[a-z0-9_.-]/i)}).length===t.length?t:JSON.stringify(t):void console.error("didn't stringify",o)}},function(r,t,n){"use strict";function e(r,t,n,o){this.message=r,this.expected=t,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!function(r,t){function n(){this.constructor=r}n.prototype=t.prototype,r.prototype=new n}(e,Error),e.buildMessage=function(r,t){var n={literal:function(r){return'"'+o(r.text)+'"'},class:function(r){var t,n="";for(t=0;t<r.parts.length;t++)n+=r.parts[t]instanceof Array?u(r.parts[t][0])+"-"+u(r.parts[t][1]):u(r.parts[t]);return"["+(r.inverted?"^":"")+n+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};function e(r){return r.charCodeAt(0).toString(16).toUpperCase()}function o(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+e(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+e(r)})}function u(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+e(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+e(r)})}function c(r){return n[r.type](r)}return"Expected "+function(r){var t,n,e=new Array(r.length);for(t=0;t<r.length;t++)e[t]=c(r[t]);if(e.sort(),e.length>0){for(t=1,n=1;t<e.length;t++)e[t-1]!==e[t]&&(e[n]=e[t],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(r)+" but "+function(r){return r?'"'+o(r)+'"':"end of input"}(t)+" found."},r.exports={SyntaxError:e,parse:function(r,t){t=void 0!==t?t:{};var n,o={},u={line_with_whitespace:vr},c=vr,i=function(r){return r},a=function(r,t){return t},f=function(r,t){var n={};return[r].concat(t).forEach(function(r){n[r.name]=r.value}),n},l=function(r){return r[0]},s=function(r,t){return{name:r,value:t}},p=":",h=lr(":",!1),d=function(r,t){return t},g=function(r,t){return[r].concat(t)},y=function(r){return null!==r?r:[]},v="[",m=lr("[",!1),x="]",A=lr("]",!1),b=",",C=lr(",",!1),S=/^[a-z0-9_.\-]/i,j=sr([["a","z"],["0","9"],"_",".","-"],!1,!0),w=function(r){var t=r.join(""),n=parseFloat(t);return isNaN(n)||JSON.stringify(n)!==t?t:n},_=function(r){return r.join("")},F=/^[^\0-\x1F"\\]/,O=sr([["\0",""],'"',"\\"],!0,!1),E='"',M=lr('"',!1),P="\\",N=lr("\\",!1),R="/",T=lr("/",!1),k="b",z=lr("b",!1),J=function(){return"\b"},I="f",U=lr("f",!1),q=function(){return"\f"},B="n",D=lr("n",!1),G=function(){return"\n"},H="r",K=lr("r",!1),L=function(){return"\r"},Q="t",V=lr("t",!1),W=function(){return"\t"},X="u",Y=lr("u",!1),Z=function(r){return String.fromCharCode(parseInt(r,16))},$=function(r){return r},rr=pr("whitespace"),tr=/^[ \t\n\r]/,nr=sr([" ","\t","\n","\r"],!1,!1),er=/^[0-9a-f]/i,or=sr([["0","9"],["a","f"]],!1,!0),ur=0,cr=[{line:1,column:1}],ir=0,ar=[],fr=0;if("startRule"in t){if(!(t.startRule in u))throw new Error("Can't start parsing from rule \""+t.startRule+'".');c=u[t.startRule]}function lr(r,t){return{type:"literal",text:r,ignoreCase:t}}function sr(r,t,n){return{type:"class",parts:r,inverted:t,ignoreCase:n}}function pr(r){return{type:"other",description:r}}function hr(t){var n,e=cr[t];if(e)return e;for(n=t-1;!cr[n];)n--;for(e={line:(e=cr[n]).line,column:e.column};n<t;)10===r.charCodeAt(n)?(e.line++,e.column=1):e.column++,n++;return cr[t]=e,e}function dr(r,t){var n=hr(r),e=hr(t);return{start:{offset:r,line:n.line,column:n.column},end:{offset:t,line:e.line,column:e.column}}}function gr(r){ur<ir||(ur>ir&&(ir=ur,ar=[]),ar.push(r))}function yr(r,t,n){return new e(e.buildMessage(r,t),r,t,n)}function vr(){var r,t;return r=ur,Fr()!==o&&(t=function(){var r;return(r=mr())===o&&(r=Cr())===o&&(r=Ar()),r}())!==o&&Fr()!==o?r=i(t):(ur=r,r=o),r}function mr(){var r,t,n,e,u,c;if(ur,r=[],t=ur,(n=xr())!==o){for(e=[],u=ur,Fr()!==o&&(c=xr())!==o?u=a(n,c):(ur=u,u=o);u!==o;)e.push(u),u=ur,Fr()!==o&&(c=xr())!==o?u=a(n,c):(ur=u,u=o);e!==o?t=n=f(n,e):(ur=t,t=o)}else ur=t,t=o;if(t!==o)for(;t!==o;)if(r.push(t),t=ur,(n=xr())!==o){for(e=[],u=ur,Fr()!==o&&(c=xr())!==o?u=a(n,c):(ur=u,u=o);u!==o;)e.push(u),u=ur,Fr()!==o&&(c=xr())!==o?u=a(n,c):(ur=u,u=o);e!==o?t=n=f(n,e):(ur=t,t=o)}else ur=t,t=o;else r=o;return r!==o&&(r=l(r)),r}function xr(){var t,n,e;return t=ur,(n=jr())!==o&&function(){var t,n,e,u;return t=ur,(n=Fr())!==o?(58===r.charCodeAt(ur)?(e=p,ur++):(e=o,0===fr&&gr(h)),e!==o&&(u=Fr())!==o?t=n=[n,e,u]:(ur=t,t=o)):(ur=t,t=o),t}()!==o&&(e=Ar())!==o?t=n=s(n,e):(ur=t,t=o),t}function Ar(){var r;return(r=Cr())===o&&(r=jr()),r}function br(){var r;return(r=mr())===o&&(r=Ar()),r}function Cr(){var t,n,e,u,c,i;if(t=ur,function(){var t,n,e,u;return t=ur,(n=Fr())!==o?(91===r.charCodeAt(ur)?(e=v,ur++):(e=o,0===fr&&gr(m)),e!==o&&(u=Fr())!==o?t=n=[n,e,u]:(ur=t,t=o)):(ur=t,t=o),t}()!==o){if(n=ur,(e=br())!==o){for(u=[],c=ur,Sr()!==o&&(i=br())!==o?c=d(e,i):(ur=c,c=o);c!==o;)u.push(c),c=ur,Sr()!==o&&(i=br())!==o?c=d(e,i):(ur=c,c=o);u!==o?n=e=g(e,u):(ur=n,n=o)}else ur=n,n=o;n===o&&(n=null),n!==o&&(e=function(){var t,n,e,u;return t=ur,(n=Fr())!==o?(93===r.charCodeAt(ur)?(e=x,ur++):(e=o,0===fr&&gr(A)),e!==o&&(u=Fr())!==o?t=n=[n,e,u]:(ur=t,t=o)):(ur=t,t=o),t}())!==o?t=y(n):(ur=t,t=o)}else ur=t,t=o;return t}function Sr(){var t,n,e,u;return t=ur,(n=Fr())!==o?(44===r.charCodeAt(ur)?(e=b,ur++):(e=o,0===fr&&gr(C)),e!==o&&(u=Fr())!==o?t=n=[n,e,u]:(ur=t,t=o)):(ur=t,t=o),t}function jr(){var t;return(t=function(){var r,t,n,e;if(r=ur,(t=_r())!==o){for(n=[],e=wr();e!==o;)n.push(e),e=wr();n!==o&&(e=_r())!==o?(t=_(n),r=t):(ur=r,r=o)}else ur=r,r=o;return r}())===o&&(t=function(){var t,n;if(ur,t=[],S.test(r.charAt(ur))?(n=r.charAt(ur),ur++):(n=o,0===fr&&gr(j)),n!==o)for(;n!==o;)t.push(n),S.test(r.charAt(ur))?(n=r.charAt(ur),ur++):(n=o,0===fr&&gr(j));else t=o;return t!==o&&(t=w(t)),t}()),t}function wr(){var t,n,e,u,c,i,a,f,l;return(t=function(){var t;return F.test(r.charAt(ur))?(t=r.charAt(ur),ur++):(t=o,0===fr&&gr(O)),t}())===o&&(t=ur,function(){var t;return 92===r.charCodeAt(ur)?(t=P,ur++):(t=o,0===fr&&gr(N)),t}()!==o?(34===r.charCodeAt(ur)?(n=E,ur++):(n=o,0===fr&&gr(M)),n===o&&(92===r.charCodeAt(ur)?(n=P,ur++):(n=o,0===fr&&gr(N)),n===o&&(47===r.charCodeAt(ur)?(n=R,ur++):(n=o,0===fr&&gr(T)),n===o&&(n=ur,98===r.charCodeAt(ur)?(e=k,ur++):(e=o,0===fr&&gr(z)),e!==o&&(e=J()),(n=e)===o&&(n=ur,102===r.charCodeAt(ur)?(e=I,ur++):(e=o,0===fr&&gr(U)),e!==o&&(e=q()),(n=e)===o&&(n=ur,110===r.charCodeAt(ur)?(e=B,ur++):(e=o,0===fr&&gr(D)),e!==o&&(e=G()),(n=e)===o&&(n=ur,114===r.charCodeAt(ur)?(e=H,ur++):(e=o,0===fr&&gr(K)),e!==o&&(e=L()),(n=e)===o&&(n=ur,116===r.charCodeAt(ur)?(e=Q,ur++):(e=o,0===fr&&gr(V)),e!==o&&(e=W()),(n=e)===o&&(n=ur,117===r.charCodeAt(ur)?(e=X,ur++):(e=o,0===fr&&gr(Y)),e!==o?(u=ur,c=ur,(i=Or())!==o&&(a=Or())!==o&&(f=Or())!==o&&(l=Or())!==o?c=i=[i,a,f,l]:(ur=c,c=o),(u=c!==o?r.substring(u,ur):c)!==o?n=e=Z(u):(ur=n,n=o)):(ur=n,n=o))))))))),n!==o?t=$(n):(ur=t,t=o)):(ur=t,t=o)),t}function _r(){var t;return 34===r.charCodeAt(ur)?(t=E,ur++):(t=o,0===fr&&gr(M)),t}function Fr(){var t,n;for(fr++,t=[],tr.test(r.charAt(ur))?(n=r.charAt(ur),ur++):(n=o,0===fr&&gr(nr));n!==o;)t.push(n),tr.test(r.charAt(ur))?(n=r.charAt(ur),ur++):(n=o,0===fr&&gr(nr));return fr--,t===o&&(n=o,0===fr&&gr(rr)),t}function Or(){var t;return er.test(r.charAt(ur))?(t=r.charAt(ur),ur++):(t=o,0===fr&&gr(or)),t}if((n=c())!==o&&ur===r.length)return n;throw n!==o&&ur<r.length&&gr({type:"end"}),yr(ar,ir<r.length?r.charAt(ir):null,ir<r.length?dr(ir,ir+1):dr(ir,ir))}}},function(r,t,n){var e=n(1).parse,o=n(0);r.exports={parse:e,stringify:o}},function(r,t,n){r.exports=n(2)}])});