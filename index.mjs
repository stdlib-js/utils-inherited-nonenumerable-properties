// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonenumerable-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(d,p){var l,j,h,f,v,g,a,b;if(arguments.length>1){if(!t(p))throw new TypeError(m("1Ub45,IB",p));v=p}else v=s;if(null==d)return[];for(h=n(d),l=[],j={},g=1;h&&g<=v;){for(f=r(h),b=0;b<f.length;b++)a=f[b],!1===o(j,a)&&e(h,a)&&l.push(a),j[a]=!0;for(f=i(h),b=0;b<f.length;b++)a=f[b],!1===o(j,a)&&e(h,a)&&l.push(a),j[a]=!0;h=n(h),g+=1}return l}export{d as default};
//# sourceMappingURL=index.mjs.map
