// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var S=String.fromCharCode,_=isNaN,E=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,a,f,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function V(r){var e,t,n;if(!A(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var F,N=Object.prototype,C=N.toString,$=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=F;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"number"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&Y.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var q=Z()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[D],e=H(r,D);try{r[D]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[D]=t:delete r[D],n}:function(r){return M.call(r)},J=Number,K=J.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function er(r){return U(r)||rr(r)}W(er,"isPrimitive",U),W(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,or=Math.floor;function ir(r){return or(r)===r}function ar(r){return r<tr&&r>nr&&ir(r)}function ur(r){return U(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>0}function sr(r){return cr(r)&&r.valueOf()>0}function pr(r){return lr(r)||sr(r)}function gr(r){return"string"==typeof r}W(fr,"isPrimitive",ur),W(fr,"isObject",cr),W(pr,"isPrimitive",lr),W(pr,"isObject",sr);var yr=String.prototype.valueOf;var dr=Z();function br(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function hr(r){return gr(r)||br(r)}function vr(r){return r!=r}function wr(r){return U(r)&&vr(r)}function mr(r){return rr(r)&&vr(r.valueOf())}function jr(r){return wr(r)||mr(r)}W(hr,"isPrimitive",gr),W(hr,"isObject",br),W(jr,"isPrimitive",wr),W(jr,"isObject",mr);var Or=Object.prototype.propertyIsEnumerable;var Sr=!Or.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&Sr&&hr(r)?!wr(e=+e)&&ur(e)&&e>=0&&e<r.length:t)}function Er(r,e){return!1!==H(r,e)&&!1===_r(r,e)}var kr=void 0!==Object.getOwnPropertyNames,Ir=Object,Tr=Ir.getOwnPropertyNames;function xr(r){return Object.keys(Object(r))}var Pr=void 0!==Object.keys;function Ar(r){return"[object Arguments]"===q(r)}var Vr,Fr=function(){return Ar(arguments)}();Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Nr,Cr=Vr;Nr=Fr?Ar:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=4294967295&&H(r,"callee")&&!_r(r,"callee")};var $r=Nr,Br=Array.prototype.slice;function Lr(r){return null!==r&&"object"==typeof r}var Rr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Lr);W(Lr,"isObjectLikeArray",Rr);var Gr=_r((function(){}),"prototype"),Wr=!_r({toString:null},"toString");function Ur(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=9007199254740991}function Xr(r,e,t){var n,o;if(!Ur(r)&&!gr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ur(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(jr(e)){for(;o<n;o++)if(jr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Zr=/./;function Mr(r){return"boolean"==typeof r}var Yr=Boolean,Hr=Boolean.prototype.toString;var zr=Z();function Dr(r){return"object"==typeof r&&(r instanceof Yr||(zr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function qr(r){return Mr(r)||Dr(r)}function Jr(){return new Function("return this;")()}W(qr,"isPrimitive",Mr),W(qr,"isObject",Dr);var Kr="object"==typeof self?self:null,Qr="object"==typeof window?window:null,re="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ee="object"==typeof re?re:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!Mr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jr()}if(te)return te;if(Kr)return Kr;if(Qr)return Qr;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ne.document&&ne.document.childNodes,ie=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ce(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(ae,"REGEXP",ue);var fe="function"==typeof Zr||"object"==typeof ie||"function"==typeof oe?function(r){return ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e};function le(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===fe(pe))return!1;for(r in pe)try{-1===Xr(se,r)&&H(pe,r)&&null!==pe[r]&&"object"===fe(pe[r])&&le(pe[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window;var de,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=Pr?function(){return 2!==(xr(arguments)||"").length}(1,2)?function(r){return $r(r)?xr(Br.call(r)):xr(r)}:xr:function(r){var e,t,n,o,i,a,u;if(o=[],$r(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!H(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Lr(r))return o;t=Gr&&n}for(i in r)t&&"prototype"===i||!H(r,i)||o.push(String(i));if(Wr)for(e=function(r){if(!1===ye&&!ge)return le(r);try{return le(r)}catch(r){return!1}}(r),u=0;u<be.length;u++)a=be[u],e&&"constructor"===a||!H(r,a)||o.push(String(a));return o};var he,ve=de;he=kr?function(r){return Tr(Ir(r))}:function(r){return ve(Ir(r))};var we,me=he,je=void 0!==Object.getOwnPropertySymbols,Oe=Ir.getOwnPropertySymbols;we=je?function(r){return Oe(Ir(r))}:function(){return[]};var Se=we;var _e,Ee,ke=Object.getPrototypeOf;Ee=Object.getPrototypeOf,_e="function"===fe(Ee)?ke:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ie=_e;function Te(r){return null==r?null:(r=Ir(r),Ie(r))}function xe(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Pe(r,e){var t,n,o,i,a,u,c,f;if(arguments.length>1){if(!lr(e))throw new TypeError(xe("1Ub45,IB",e));a=e}else a=9007199254740991;if(null==r)return[];for(o=Te(r),t=[],n={},u=1;o&&u<=a;){for(i=me(o),f=0;f<i.length;f++)!1===H(n,c=i[f])&&Er(o,c)&&t.push(c),n[c]=!0;for(i=Se(o),f=0;f<i.length;f++)!1===H(n,c=i[f])&&Er(o,c)&&t.push(c),n[c]=!0;o=Te(o),u+=1}return t}export{Pe as default};
//# sourceMappingURL=mod.js.map
