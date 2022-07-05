// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedNonEnumerableProperties=e()}(this,(function(){"use strict";var t=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,s="set"in r,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),s&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&g.call(t,e)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[h],e=d(t,h);try{t[h]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[h]=r:delete t[h],n}:function(t){return v.call(t)},m=Number,w=m.prototype.toString;var O=b();function _(t){return"object"==typeof t&&(t instanceof m||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}function L(t){return"string"==typeof t}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var C=String.prototype.valueOf;var G=b();function Y(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function M(t){return L(t)||Y(t)}function X(t){return t!=t}function H(t){return s(t)&&X(t)}function R(t){return _(t)&&X(t.valueOf())}function U(t){return H(t)||R(t)}p(M,"isPrimitive",L),p(M,"isObject",Y),p(U,"isPrimitive",H),p(U,"isObject",R);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function q(t,e){var r;return null!=t&&(!(r=W.call(t,e))&&D&&M(t)?!H(e=+e)&&N(e)&&e>=0&&e<t.length:r)}function z(t,e){return!1!==d(t,e)&&!1===q(t,e)}var J=void 0!==Object.getOwnPropertyNames,K=Object.getOwnPropertyNames;function Q(t){return Object.keys(Object(t))}var Z,$=void 0!==Object.keys;function tt(t){return"[object Arguments]"===j(t)}Z=function(){return tt(arguments)}();var et,rt=Z;et=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var nt,ot=et;nt=rt?tt:function(t){return null!==t&&"object"==typeof t&&!ot(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!q(t,"callee")};var ut=nt,it=Array.prototype.slice;function ft(t){return null!==t&&"object"==typeof t}var ct=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!ot(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ft);p(ft,"isObjectLikeArray",ct);var lt=q((function(){}),"prototype"),at=!q({toString:null},"toString");function pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function st(t,e,r){var n,o;if(!pt(t)&&!L(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(U(e)){for(;o<n;o++)if(U(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var yt=/./;function bt(t){return"boolean"==typeof t}var vt=Boolean.prototype.toString;var gt=b();function dt(t){return"object"==typeof t&&(t instanceof Boolean||(gt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function ht(t){return bt(t)||dt(t)}function jt(){return new Function("return this;")()}p(ht,"isPrimitive",bt),p(ht,"isObject",dt);var mt="object"==typeof self?self:null,wt="object"==typeof window?window:null,Ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},_t="object"==typeof Ot?Ot:null;var St=function(t){if(arguments.length){if(!bt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return jt()}if(mt)return mt;if(wt)return wt;if(_t)return _t;throw new Error("unexpected error. Unable to resolve global object.")}(),Pt=St.document&&St.document.childNodes,Et=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var Tt=/^\s*function\s*([^(]*)/i;function At(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Tt.exec(n.toString()))return e[1]}return ft(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(It,"REGEXP",Tt);var Nt="function"==typeof yt||"object"==typeof Et||"function"==typeof Pt?function(t){return At(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?At(t).toLowerCase():e};function kt(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Bt="undefined"==typeof window?void 0:window;var Vt=function(){var t;if("undefined"===Nt(Bt))return!1;for(t in Bt)try{-1===st(xt,t)&&d(Bt,t)&&null!==Bt[t]&&"object"===Nt(Bt[t])&&kt(Bt[t])}catch(t){return!0}return!1}(),Ft="undefined"!=typeof window;var Lt,Ct=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Lt=$?function(){return 2!==(Q(arguments)||"").length}(1,2)?function(t){return ut(t)?Q(it.call(t)):Q(t)}:Q:function(t){var e,r,n,o,u,i,f;if(o=[],ut(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!ft(t))return o;r=lt&&n}for(u in t)r&&"prototype"===u||!d(t,u)||o.push(String(u));if(at)for(e=function(t){if(!1===Ft&&!Vt)return kt(t);try{return kt(t)}catch(t){return!1}}(t),f=0;f<Ct.length;f++)i=Ct[f],e&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Gt,Yt=Lt;Gt=J?function(t){return K(Object(t))}:function(t){return Yt(Object(t))};var Mt,Xt=Gt,Ht=void 0!==Object.getOwnPropertySymbols,Rt=Object.getOwnPropertySymbols;Mt=Ht?function(t){return Rt(Object(t))}:function(){return[]};var Ut=Mt;var Wt,Dt,qt=Object.getPrototypeOf;Dt=Object.getPrototypeOf,Wt="function"===Nt(Dt)?qt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var zt=Wt;function Jt(t){return null==t?null:(t=Object(t),zt(t))}function Kt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(e,r){var n,o,u,i,f,c,l,a;if(arguments.length>1){if(!B(r))throw new TypeError(Kt("0k94I",r));f=r}else f=t;if(null==e)return[];for(u=Jt(e),n=[],o={},c=1;u&&c<=f;){for(i=Xt(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&z(u,l)&&n.push(l),o[l]=!0;for(i=Ut(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&z(u,l)&&n.push(l),o[l]=!0;u=Jt(u),c+=1}return n}}));
//# sourceMappingURL=browser.js.map