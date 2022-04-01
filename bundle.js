// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedNonEnumerableProperties=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=9007199254740991,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,o=Object.prototype,a=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;var s=function(r,e,t){var n,i,s,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,p="set"in t,i&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r},p=i,v=s,g=n()?p:v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"number"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var O=function(r){return j.call(r)},P=Object.prototype.hasOwnProperty;var E=function(r,e){return null!=r&&P.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",S=E,T=_,x=w;var V=O,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[T],e=S(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[T]=t:delete r[T],n},I=y()?k:V,A=Number,F=A.prototype.toString;var R=I,$=A,N=function(r){try{return F.call(r),!0}catch(r){return!1}},M=y();var C=function(r){return"object"==typeof r&&(r instanceof $||(M?N(r):"[object Number]"===R(r)))},B=m,G=C;var L=h,W=function(r){return B(r)||G(r)},X=C;L(W,"isPrimitive",m),L(W,"isObject",X);var Z=W,Y=Number.POSITIVE_INFINITY,z=A.NEGATIVE_INFINITY,D=Math.floor;var H=function(r){return D(r)===r},U=Y,q=z,J=H;var K=function(r){return r<U&&r>q&&J(r)},Q=Z.isPrimitive,rr=K;var er=function(r){return Q(r)&&rr(r)},tr=Z.isObject,nr=K;var ir=function(r){return tr(r)&&nr(r.valueOf())},or=er,ar=ir;var ur=h,cr=function(r){return or(r)||ar(r)},fr=ir;ur(cr,"isPrimitive",er),ur(cr,"isObject",fr);var lr=cr,sr=lr.isPrimitive;var pr=function(r){return sr(r)&&r>0},vr=lr.isObject;var gr=function(r){return vr(r)&&r.valueOf()>0},dr=pr,hr=gr;var mr=h,br=function(r){return dr(r)||hr(r)},yr=gr;mr(br,"isPrimitive",pr),mr(br,"isObject",yr);var wr=br;var jr=function(r){return"string"==typeof r},Or=String.prototype.valueOf;var Pr=I,Er=function(r){try{return Or.call(r),!0}catch(r){return!1}},_r=y();var Sr=function(r){return"object"==typeof r&&(r instanceof String||(_r?Er(r):"[object String]"===Pr(r)))},Tr=jr,xr=Sr;var Vr=h,kr=function(r){return Tr(r)||xr(r)},Ir=Sr;Vr(kr,"isPrimitive",jr),Vr(kr,"isObject",Ir);var Ar=kr;var Fr=function(r){return r!=r},Rr=Z.isPrimitive,$r=Fr;var Nr=function(r){return Rr(r)&&$r(r)},Mr=Z.isObject,Cr=Fr;var Br=function(r){return Mr(r)&&Cr(r.valueOf())},Gr=Nr,Lr=Br;var Wr=h,Xr=function(r){return Gr(r)||Lr(r)},Zr=Br;Wr(Xr,"isPrimitive",Nr),Wr(Xr,"isObject",Zr);var Yr,zr=Xr,Dr=Object.prototype.propertyIsEnumerable;Yr=!Dr.call("beep","0");var Hr=Ar,Ur=zr.isPrimitive,qr=lr.isPrimitive,Jr=Dr,Kr=Yr;var Qr=function(r,e){var t;return null!=r&&(!(t=Jr.call(r,e))&&Kr&&Hr(r)?!Ur(e=+e)&&qr(e)&&e>=0&&e<r.length:t)},re=Qr,ee=E,te=re;var ne=function(r,e){return!1!==ee(r,e)&&!1===te(r,e)},ie=void 0!==Object.getOwnPropertyNames,oe=Object.getOwnPropertyNames;var ae=function(r){return oe(Object(r))};var ue=function(r){return Object.keys(Object(r))},ce=ue;var fe=function(){return function(){return 2!==(ce(arguments)||"").length}(1,2)},le=void 0!==Object.keys,se=I;var pe,ve=function(r){return"[object Arguments]"===se(r)},ge=ve;pe=function(){return ge(arguments)}();var de=pe,he=I;var me=Array.isArray?Array.isArray:function(r){return"[object Array]"===he(r)},be=E,ye=re,we=me,je=H;var Oe=de?ve:function(r){return null!==r&&"object"==typeof r&&!we(r)&&"number"==typeof r.length&&je(r.length)&&r.length>=0&&r.length<=4294967295&&be(r,"callee")&&!ye(r,"callee")},Pe=Oe,Ee=ue,_e=Array.prototype.slice;var Se=function(r){return Pe(r)?Ee(_e.call(r)):Ee(r)},Te=me;var xe=function(r){return null!==r&&"object"==typeof r};h(xe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Te(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xe));var Ve=xe;var ke=re((function(){}),"prototype"),Ie=!re({toString:null},"toString"),Ae=H;var Fe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ae(r.length)&&r.length>=0&&r.length<=9007199254740991},Re=zr,$e=Fe,Ne=Ar.isPrimitive,Me=lr.isPrimitive;var Ce=function(r,e,t){var n,i;if(!$e(r)&&!Ne(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Me(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Re(e)){for(;i<n;i++)if(Re(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},Be=Ce,Ge=/./;var Le=function(r){return"boolean"==typeof r},We=Boolean.prototype.toString;var Xe=I,Ze=function(r){try{return We.call(r),!0}catch(r){return!1}},Ye=y();var ze=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ye?Ze(r):"[object Boolean]"===Xe(r)))},De=Le,He=ze;var Ue=h,qe=function(r){return De(r)||He(r)},Je=ze;Ue(qe,"isPrimitive",Le),Ue(qe,"isObject",Je);var Ke=qe;var Qe=function(){return new Function("return this;")()},rt="object"==typeof self?self:null,et="object"==typeof window?window:null,tt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nt="object"==typeof tt?tt:null;module.exports=nt;var it=Ke.isPrimitive,ot=Qe,at=rt,ut=et,ct=r(Object.freeze({__proto__:null}));var ft=function(r){if(arguments.length){if(!it(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ot()}if(at)return at;if(ut)return ut;if(ct)return ct;throw new Error("unexpected error. Unable to resolve global object.")},lt=ft(),st=lt.document&&lt.document.childNodes,pt=Int8Array,vt=Ge,gt=st,dt=pt;var ht=function(){return"function"==typeof vt||"object"==typeof dt||"function"==typeof gt};var mt=function(){return/^\s*function\s*([^(]*)/i},bt=mt;h(bt,"REGEXP",mt());var yt=Ve;var wt=I,jt=bt.REGEXP,Ot=function(r){return yt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Pt=function(r){var e,t,n;if(("Object"===(t=wt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=jt.exec(n.toString()))return e[1]}return Ot(r)?"Buffer":t},Et=Pt;var _t=Pt;var St=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Et(r).toLowerCase():e},Tt=function(r){return _t(r).toLowerCase()},xt=ht()?Tt:St;var Vt,kt=function(r){return r.constructor&&r.constructor.prototype===r},It="undefined"==typeof window?void 0:window,At=E,Ft=Be,Rt=xt,$t=kt,Nt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Mt=It;Vt=function(){var r;if("undefined"===Rt(Mt))return!1;for(r in Mt)try{-1===Ft(Nt,r)&&At(Mt,r)&&null!==Mt[r]&&"object"===Rt(Mt[r])&&$t(Mt[r])}catch(r){return!0}return!1}();var Ct="undefined"!=typeof window,Bt=Vt,Gt=kt,Lt=Ct;var Wt=Ve,Xt=E,Zt=Oe,Yt=ke,zt=Ie,Dt=function(r){if(!1===Lt&&!Bt)return Gt(r);try{return Gt(r)}catch(r){return!1}},Ht=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ut=ue,qt=Se,Jt=function(r){var e,t,n,i,o,a,u;if(i=[],Zt(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!Xt(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof r)&&!Wt(r))return i;t=Yt&&n}for(o in r)t&&"prototype"===o||!Xt(r,o)||i.push(String(o));if(zt)for(e=Dt(r),u=0;u<Ht.length;u++)a=Ht[u],e&&"constructor"===a||!Xt(r,a)||i.push(String(a));return i},Kt=le?fe()?qt:Ut:Jt;var Qt=ie?ae:function(r){return Kt(Object(r))},rn=void 0!==Object.getOwnPropertySymbols,en=Object.getOwnPropertySymbols;var tn=rn?function(r){return en(Object(r))}:function(){return[]},nn=xt;var on=function(r){return"function"===nn(r)},an=Object.getPrototypeOf;var un=function(r){return r.__proto__},cn=I,fn=un;var ln=function(r){var e=fn(r);return e||null===e?e:"[object Function]"===cn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},sn=an,pn=ln,vn=on(Object.getPrototypeOf)?sn:pn;var gn=function(r){return null==r?null:(r=Object(r),vn(r))},dn=Fe,hn=lr.isPrimitive,mn=Ar.isPrimitive,bn=zr.isPrimitive;var yn=function(r,e,t){var n,i,o;if(!dn(r)&&!mn(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!hn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(mn(r)){if(!mn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,bn(e)){for(o=i;o<n;o++)if(bn(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},wn=yn,jn=Ar.isPrimitive;var On=function(r){if(!jn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Pn=Ar.isPrimitive;var En=function(r){if(!Pn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},_n=On,Sn=En,Tn=Ar.isPrimitive;var xn=function(r){return Tn(r)&&r===Sn(r)&&r!==_n(r)},Vn=Y,kn=z;var In=function(r){return r==r&&r>kn&&r<Vn},An=lr.isPrimitive;var Fn=function(r){return An(r)&&r>=0},Rn=lr.isObject;var $n=function(r){return Rn(r)&&r.valueOf()>=0},Nn=Fn,Mn=$n;var Cn=h,Bn=function(r){return Nn(r)||Mn(r)},Gn=$n;Cn(Bn,"isPrimitive",Fn),Cn(Bn,"isObject",Gn);var Ln=Bn.isPrimitive,Wn=Ar.isPrimitive;var Xn=function(r,e){var t,n;if(!Wn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ln(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Zn=lr.isPrimitive,Yn=Ar.isPrimitive;var zn=function(r,e,t){var n,i;if(!Yn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Yn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Zn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Dn=Xn,Hn=zn;var Un=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Hn(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Dn("0",i):Dn("0",i)+r,n&&(r="-"+r)),r},qn=xn,Jn=En,Kn=On,Qn=In,ri=Z.isPrimitive,ei=Un;var ti=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Qn(n)){if(!ri(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ei(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ei(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=qn(r.specifier)?Jn(t):Kn(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},ni=Ar.isPrimitive,ii=/[-\/\\^$*+?.()|[\]{}]/g;var oi=function(r){var e,t;if(!ni(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ii,"\\$&"):(e=(e=r.substring(1,t)).replace(ii,"\\$&"),r=r[0]+e+r.substring(t))},ai=RegExp.prototype.exec;var ui=I,ci=function(r){try{return ai.call(r),!0}catch(r){return!1}},fi=y();var li=oi,si=on,pi=Ar.isPrimitive,vi=function(r){return"object"==typeof r&&(r instanceof RegExp||(fi?ci(r):"[object RegExp]"===ui(r)))};var gi=xn,di=En,hi=On,mi=function(r,e,t){if(!pi(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(pi(e))e=li(e),e=new RegExp(e,"g");else if(!vi(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!pi(t)&&!si(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},bi=In,yi=Z.isPrimitive,wi=function(r){return Math.abs(r)},ji=/e\+(\d)$/,Oi=/e-(\d)$/,Pi=/^(\d+)$/,Ei=/^(\d+)e/,_i=/\.0$/,Si=/\.0*e/,Ti=/(\..*[^0])0*e/;var xi=function(r){var e,t,n=parseFloat(r.arg);if(!bi(n)){if(!yi(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wi(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=mi(t,Ti,"$1e"),t=mi(t,Si,"e"),t=mi(t,_i,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=mi(t,ji,"e+0$1"),t=mi(t,Oi,"e-0$1"),r.alternate&&(t=mi(t,Pi,"$1."),t=mi(t,Ei,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=gi(r.specifier)?di(t):hi(t)},Vi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var ki=Xn;var Ii=Ar.isPrimitive,Ai=wn,Fi=Fr,Ri=ti,$i=xi,Ni=function(r){var e,t,n,i,o;for(e=0,n=[],o=Vi.exec(r);o;)(t=r.slice(e,Vi.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Vi.lastIndex,o=Vi.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Mi=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ki(" ",n):ki(" ",n)+r},Ci=Un,Bi=String.fromCharCode;var Gi=function(r){var e,t,n,i,o,a,u,c,f;if(!Ii(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Ni(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Ii(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ai(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Fi(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Fi(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Ri(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Fi(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Fi(o)?String(n.arg):Bi(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=$i(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ci(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Mi(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Li=e,Wi=wr.isPrimitive,Xi=ne,Zi=Qt,Yi=tn,zi=gn,Di=E,Hi=Gi;var Ui=function(r,e){var t,n,i,o,a,u,c,f;if(arguments.length>1){if(!Wi(e))throw new TypeError(Hi("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));a=e}else a=Li;if(null==r)return[];for(i=zi(r),t=[],n={},u=1;i&&u<=a;){for(o=Zi(i),f=0;f<o.length;f++)c=o[f],!1===Di(n,c)&&Xi(i,c)&&t.push(c),n[c]=!0;for(o=Yi(i),f=0;f<o.length;f++)c=o[f],!1===Di(n,c)&&Xi(i,c)&&t.push(c),n[c]=!0;i=zi(i),u+=1}return t};return Ui}));
//# sourceMappingURL=bundle.js.map
