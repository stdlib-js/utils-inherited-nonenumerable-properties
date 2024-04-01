// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,S=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,i,a,c,f,l,s,p,g,y,d;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var B=P;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof M?M.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},z=Number,D=z.prototype.toString;var q=W();function J(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function K(r){return R(r)||J(r)}L(K,"isPrimitive",R),L(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function or(r){return R(r)&&nr(r)}function ir(r){return J(r)&&nr(r.valueOf())}function ar(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>0}function cr(r){return ir(r)&&r.valueOf()>0}function fr(r){return ur(r)||cr(r)}function lr(r){return"string"==typeof r}L(ar,"isPrimitive",or),L(ar,"isObject",ir),L(fr,"isPrimitive",ur),L(fr,"isObject",cr);var sr=String.prototype.valueOf;var pr=W();function gr(r){return"object"==typeof r&&(r instanceof String||(pr?function(r){try{return sr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function yr(r){return lr(r)||gr(r)}function dr(r){return r!=r}function br(r){return R(r)&&dr(r)}function hr(r){return J(r)&&dr(r.valueOf())}function vr(r){return br(r)||hr(r)}L(yr,"isPrimitive",lr),L(yr,"isObject",gr),L(vr,"isPrimitive",br),L(vr,"isObject",hr);var wr=Object.prototype.propertyIsEnumerable;var mr=!wr.call("beep","0");function jr(r,e){var t;return null!=r&&(!(t=wr.call(r,e))&&mr&&yr(r)?!br(e=+e)&&or(e)&&e>=0&&e<r.length:t)}function Or(r,e){return!1!==Z(r,e)&&!1===jr(r,e)}var Sr=void 0!==Object.getOwnPropertyNames,_r=Object,Er=_r.getOwnPropertyNames;function kr(r){return Object.keys(Object(r))}var Ir=void 0!==Object.keys;function Tr(r){return"[object Arguments]"===H(r)}var xr,Pr=function(){return Tr(arguments)}();xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Ar,Vr=xr;Ar=Pr?Tr:function(r){return null!==r&&"object"==typeof r&&!Vr(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&Z(r,"callee")&&!jr(r,"callee")};var Fr=Ar,Nr=Array.prototype.slice;function Cr(r){return null!==r&&"object"==typeof r}var $r=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);L(Cr,"isObjectLikeArray",$r);var Br=jr((function(){}),"prototype"),Lr=!jr({toString:null},"toString"),Rr=9007199254740991;function Gr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&tr(i.length)&&i.length>=0&&i.length<=Rr||lr(r)))throw new TypeError(x("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!or(t))throw new TypeError(x("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(vr(e)){for(;o<n;o++)if(vr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Wr=/./;function Ur(r){return"boolean"==typeof r}var Xr=Boolean,Zr=Boolean.prototype.toString;var Mr=W();function Yr(r){return"object"==typeof r&&(r instanceof Xr||(Mr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Hr(r){return Ur(r)||Yr(r)}L(Hr,"isPrimitive",Ur),L(Hr,"isObject",Yr);var zr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,qr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Jr="object"==typeof qr?qr:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Ur(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Kr)return Kr;if(zr)return zr;if(Dr)return Dr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),re=Qr.document&&Qr.document.childNodes,ee=Int8Array;function te(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function oe(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ne.exec(n.toString()))return e[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(te,"REGEXP",ne);var ie="function"==typeof Wr||"object"==typeof ee||"function"==typeof re?function(r){return oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?oe(r).toLowerCase():e};function ae(r){return r.constructor&&r.constructor.prototype===r}var ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window;var fe=function(){var r;if("undefined"===ie(ce))return!1;for(r in ce)try{-1===Gr(ue,r)&&Z(ce,r)&&null!==ce[r]&&"object"===ie(ce[r])&&ae(ce[r])}catch(r){return!0}return!1}(),le="undefined"!=typeof window;var se,pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];se=Ir?function(){return 2!==(kr(arguments)||"").length}(1,2)?function(r){return Fr(r)?kr(Nr.call(r)):kr(r)}:kr:function(r){var e,t,n,o,i,a,u;if(o=[],Fr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!Z(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return o;t=Br&&n}for(i in r)t&&"prototype"===i||!Z(r,i)||o.push(String(i));if(Lr)for(e=function(r){if(!1===le&&!fe)return ae(r);try{return ae(r)}catch(r){return!1}}(r),u=0;u<pe.length;u++)a=pe[u],e&&"constructor"===a||!Z(r,a)||o.push(String(a));return o};var ge,ye=se;ge=Sr?function(r){return Er(_r(r))}:function(r){return ye(_r(r))};var de,be=ge,he=void 0!==Object.getOwnPropertySymbols,ve=_r.getOwnPropertySymbols;de=he?function(r){return ve(_r(r))}:function(){return[]};var we=de;var me,je,Oe=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===ie(je)?Oe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=me;function _e(r){return null==r?null:(r=_r(r),Se(r))}function Ee(r,e){var t,n,o,i,a,u,c,f;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Ub45",e));a=e}else a=9007199254740991;if(null==r)return[];for(o=_e(r),t=[],n={},u=1;o&&u<=a;){for(i=be(o),f=0;f<i.length;f++)!1===Z(n,c=i[f])&&Or(o,c)&&t.push(c),n[c]=!0;for(i=we(o),f=0;f<i.length;f++)!1===Z(n,c=i[f])&&Or(o,c)&&t.push(c),n[c]=!0;o=_e(o),u+=1}return t}export{Ee as default};
//# sourceMappingURL=mod.js.map
