(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+JPL":function(t,e,n){t.exports={default:n("gRli"),__esModule:!0}},"+vXQ":function(t,e,n){t.exports=!n("C61u")&&!n("S4vA")((function(){return 7!=Object.defineProperty(n("BfU5")("div"),"a",{get:function(){return 7}}).a}))},"/F7N":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"/NTb":function(t,e,n){e.f=n("zBWt")},"/tXR":function(t,e){e.f=Object.getOwnPropertySymbols},"0WpP":function(t,e,n){var r=n("/F7N"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"3+Ww":function(t,e){},"40oJ":function(t,e,n){var r=n("ixoo")("meta"),o=n("ekG2"),i=n("nA4W"),u=n("GhSp").f,a=0,c=Object.isExtensible||function(){return!0},f=!n("S4vA")((function(){return c(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},"4Zg2":function(t,e,n){var r=n("7whZ"),o=n("VSTI"),i=n("5ETA"),u=n("/NTb"),a=n("GhSp").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},"5ETA":function(t,e){t.exports=!0},"5Qd4":function(t,e,n){var r=n("USwo");r(r.S+r.F,"Object",{assign:n("By1P")})},"6jRP":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},"7whZ":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},A9a0:function(t,e,n){var r=n("nA4W"),o=n("bKEA"),i=n("Oa1h")(!1),u=n("WpRT")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},AyUB:function(t,e,n){t.exports={default:n("vNbC"),__esModule:!0}},BRsN:function(t,e,n){var r=n("GhSp"),o=n("ENu8");t.exports=n("C61u")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},BfU5:function(t,e,n){var r=n("ekG2"),o=n("7whZ").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},By1P:function(t,e,n){"use strict";var r=n("C61u"),o=n("mHY4"),i=n("/tXR"),u=n("GRew"),a=n("CYMq"),c=n("n7vu"),f=Object.assign;t.exports=!f||n("S4vA")((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r}))?function(t,e){for(var n=a(t),f=arguments.length,s=1,l=i.f,p=u.f;f>s;)for(var d,y=c(arguments[s++]),v=l?o(y).concat(l(y)):o(y),h=v.length,m=0;h>m;)d=v[m++],r&&!p.call(y,d)||(n[d]=y[d]);return n}:f},C5kU:function(t,e,n){"use strict";var r=n("GfoU")(!0);n("OTpG")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},C61u:function(t,e,n){t.exports=!n("S4vA")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},CYMq:function(t,e,n){var r=n("yQFZ");t.exports=function(t){return Object(r(t))}},CuL1:function(t,e,n){var r=n("mHY4"),o=n("/tXR"),i=n("GRew");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},DrT7:function(t,e,n){var r=n("ekG2"),o=n("d+lc"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("nAx8")(Function.call,n("TSC6").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},EJiy:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("F+2o")),o=u(n("+JPL")),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},ENu8:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"F+2o":function(t,e,n){t.exports={default:n("UR8F"),__esModule:!0}},FYw3:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("EJiy"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},FgkJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},GDZC:function(t,e,n){var r=n("bKEA"),o=n("ZDin").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return u.slice()}}(t):o(r(t))}},GRew:function(t,e){e.f={}.propertyIsEnumerable},GfoU:function(t,e,n){var r=n("/F7N"),o=n("yQFZ");t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},GhSp:function(t,e,n){var r=n("d+lc"),o=n("+vXQ"),i=n("M5dz"),u=Object.defineProperty;e.f=n("C61u")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},Jt1Q:function(t,e,n){"use strict";var r=n("b08l"),o=n("ENu8"),i=n("kvAF"),u={};n("BRsN")(u,n("zBWt")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},L5pH:function(t,e){t.exports=function(){}},M5dz:function(t,e,n){var r=n("ekG2");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},MBy0:function(t,e,n){n("4Zg2")("asyncIterator")},OTpG:function(t,e,n){"use strict";var r=n("5ETA"),o=n("USwo"),i=n("ugGH"),u=n("BRsN"),a=n("ig3W"),c=n("Jt1Q"),f=n("kvAF"),s=n("znrX"),l=n("zBWt")("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,h,m){c(n,e,y);var b,g,S,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==v,E=!1,O=t.prototype,T=O[l]||O["@@iterator"]||v&&O[v],N=T||_(v),A=v?w?_("entries"):N:void 0,j="Array"==e&&O.entries||T;if(j&&(S=s(j.call(new t)))!==Object.prototype&&S.next&&(f(S,x,!0),r||"function"==typeof S[l]||u(S,l,d)),w&&T&&"values"!==T.name&&(E=!0,N=function(){return T.call(this)}),r&&!m||!p&&!E&&O[l]||u(O,l,N),a[e]=N,a[x]=d,v)if(b={values:w?N:_("values"),keys:h?N:_("keys"),entries:A},m)for(g in b)g in O||i(O,g,b[g]);else o(o.P+o.F*(p||E),e,b);return b}},Oa1h:function(t,e,n){var r=n("bKEA"),o=n("0WpP"),i=n("nRFE");t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},P2sY:function(t,e,n){t.exports={default:n("uccp"),__esModule:!0}},QRdY:function(t,e,n){n("xfML"),t.exports=n("VSTI").Object.setPrototypeOf},QbLZ:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("P2sY"),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("7oih"),u=n("obyI"),a=n.n(u);function c(){return o.a.createElement("footer",null,o.a.createElement("ul",{className:"icons"},a.a.socialLinks.map((function(t){var e=t.icon,n=t.name,r=t.url;return"#"==r?o.a.createElement("li",{key:r},o.a.createElement("a",{href:r,className:"icon "+e+" onesignal-customlink-container"},o.a.createElement("span",{className:"label"},n))):o.a.createElement("li",{key:r},o.a.createElement("a",{href:r,className:"icon "+e},o.a.createElement("span",{className:"label"},n)))}))))}var f=n("TUGy");function s(){return o.a.createElement("header",null,o.a.createElement("span",{className:"avatar"},o.a.createElement("img",{height:"128px",src:f,alt:""})),o.a.createElement("h1",null,a.a.authorName),o.a.createElement("p",null,a.a.heading))}var l=n("fmxG"),p=n.n(l);function d(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© ",a.a.authorName," - All rights reserved")),o.a.createElement(p.a,{type:"text/javascript",src:"https://cdn.onesignal.com/sdks/OneSignalSDK.js"}),o.a.createElement(p.a,{type:"text/javascript",src:"/js/custom.js"}))}e.default=function(){return o.a.createElement(i.a,null,o.a.createElement("section",{id:"main"},o.a.createElement(s,null),o.a.createElement(c,null)),o.a.createElement(d,null))}},S4vA:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},TSC6:function(t,e,n){var r=n("GRew"),o=n("ENu8"),i=n("bKEA"),u=n("M5dz"),a=n("nA4W"),c=n("+vXQ"),f=Object.getOwnPropertyDescriptor;e.f=n("C61u")?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},TUGy:function(t,e,n){t.exports=n.p+"static/avatar-2d636b2576e47883ca2b1f68f4fc9587.png"},TYje:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},TnF5:function(t,e,n){n("4Zg2")("observable")},Trx6:function(t,e,n){var r=n("TYje");t.exports=Array.isArray||function(t){return"Array"==r(t)}},UR8F:function(t,e,n){n("C5kU"),n("ZY/g"),t.exports=n("/NTb").f("iterator")},USwo:function(t,e,n){var r=n("7whZ"),o=n("VSTI"),i=n("nAx8"),u=n("BRsN"),a=n("nA4W"),c=function(t,e,n){var f,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,b=d?o:o[e]||(o[e]={}),g=b.prototype,S=d?r:y?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(s=!p&&S&&void 0!==S[f])&&a(b,f)||(l=s?S[f]:n[f],b[f]=d&&"function"!=typeof S[f]?n[f]:h&&s?i(l,r):m&&S[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&c.R&&g&&!g[f]&&u(g,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},VSTI:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},WpRT:function(t,e,n){var r=n("s2er")("keys"),o=n("ixoo");t.exports=function(t){return r[t]||(r[t]=o(t))}},ZDin:function(t,e,n){var r=n("A9a0"),o=n("l0Kd").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"ZY/g":function(t,e,n){n("aFj7");for(var r=n("7whZ"),o=n("BRsN"),i=n("ig3W"),u=n("zBWt")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},aFj7:function(t,e,n){"use strict";var r=n("L5pH"),o=n("6jRP"),i=n("ig3W"),u=n("bKEA");t.exports=n("OTpG")(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},aT0f:function(t,e,n){"use strict";var r=n("7whZ"),o=n("nA4W"),i=n("C61u"),u=n("USwo"),a=n("ugGH"),c=n("40oJ").KEY,f=n("S4vA"),s=n("s2er"),l=n("kvAF"),p=n("ixoo"),d=n("zBWt"),y=n("/NTb"),v=n("4Zg2"),h=n("CuL1"),m=n("Trx6"),b=n("d+lc"),g=n("ekG2"),S=n("CYMq"),_=n("bKEA"),x=n("M5dz"),w=n("ENu8"),E=n("b08l"),O=n("GDZC"),T=n("TSC6"),N=n("/tXR"),A=n("GhSp"),j=n("mHY4"),M=T.f,P=A.f,R=O.f,L=r.Symbol,k=r.JSON,G=k&&k.stringify,F=d("_hidden"),C=d("toPrimitive"),W={}.propertyIsEnumerable,I=s("symbol-registry"),B=s("symbols"),H=s("op-symbols"),U=Object.prototype,Z="function"==typeof L&&!!N.f,D=r.QObject,Y=!D||!D.prototype||!D.prototype.findChild,J=i&&f((function(){return 7!=E(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=M(U,e);r&&delete U[e],P(t,e,n),r&&t!==U&&P(U,e,r)}:P,z=function(t){var e=B[t]=E(L.prototype);return e._k=t,e},Q=Z&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},V=function(t,e,n){return t===U&&V(H,e,n),b(t),e=x(e,!0),b(n),o(B,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=E(n,{enumerable:w(0,!1)})):(o(t,F)||P(t,F,w(1,{})),t[F][e]=!0),J(t,e,n)):P(t,e,n)},K=function(t,e){b(t);for(var n,r=h(e=_(e)),o=0,i=r.length;i>o;)V(t,n=r[o++],e[n]);return t},q=function(t){var e=W.call(this,t=x(t,!0));return!(this===U&&o(B,t)&&!o(H,t))&&(!(e||!o(this,t)||!o(B,t)||o(this,F)&&this[F][t])||e)},X=function(t,e){if(t=_(t),e=x(e,!0),t!==U||!o(B,e)||o(H,e)){var n=M(t,e);return!n||!o(B,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=R(_(t)),r=[],i=0;n.length>i;)o(B,e=n[i++])||e==F||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===U,r=R(n?H:_(t)),i=[],u=0;r.length>u;)!o(B,e=r[u++])||n&&!o(U,e)||i.push(B[e]);return i};Z||(a((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===U&&e.call(H,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),J(this,t,w(1,n))};return i&&Y&&J(U,t,{configurable:!0,set:e}),z(t)}).prototype,"toString",(function(){return this._k})),T.f=X,A.f=V,n("ZDin").f=O.f=$,n("GRew").f=q,N.f=tt,i&&!n("5ETA")&&a(U,"propertyIsEnumerable",q,!0),y.f=function(t){return z(d(t))}),u(u.G+u.W+u.F*!Z,{Symbol:L});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=j(d.store),ot=0;rt.length>ot;)v(rt[ot++]);u(u.S+u.F*!Z,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=L(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),u(u.S+u.F*!Z,"Object",{create:function(t,e){return void 0===e?E(t):K(E(t),e)},defineProperty:V,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){N.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return N.f(S(t))}}),k&&u(u.S+u.F*(!Z||f((function(){var t=L();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,G.apply(k,r)}}),L.prototype[C]||n("BRsN")(L.prototype,C,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},b08l:function(t,e,n){var r=n("d+lc"),o=n("heda"),i=n("l0Kd"),u=n("WpRT")("IE_PROTO"),a=function(){},c=function(){var t,e=n("BfU5")("iframe"),r=i.length;for(e.style.display="none",n("kUGv").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},bKEA:function(t,e,n){var r=n("n7vu"),o=n("yQFZ");t.exports=function(t){return r(o(t))}},"d+lc":function(t,e,n){var r=n("ekG2");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"du/1":function(t,e,n){var r=n("USwo");r(r.S,"Object",{create:n("b08l")})},ekG2:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},fmxG:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("h8gq"),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default},gRli:function(t,e,n){n("aT0f"),n("3+Ww"),n("MBy0"),n("TnF5"),t.exports=n("VSTI").Symbol},h8gq:function(t,e,n){"use strict";e.__esModule=!0;var r=l(n("QbLZ")),o=l(n("jo6Y")),i=l(n("iCc5")),u=l(n("FYw3")),a=l(n("mRg0")),c=n("q1tI"),f=l(c),s=l(n("17x9"));function l(t){return t&&t.__esModule?t:{default:t}}var p=function(){},d=function(t){function e(n,r){(0,i.default)(this,e);var o=(0,u.default)(this,t.call(this,n,r));return o.domRef=null,o.state={isHydrated:n.isHydrating,additionalNode:null,removeAdditionalNode:null},o}return(0,a.default)(e,t),e.removeNode=function(t){t&&t.parentNode.removeChild(t)},e.prototype.appendAdditionalElement=function(){for(var t=this.props,e=t.onError,n=t.onLoad,r=t.nonce,o=document.createElement("script"),i=0,u=this.domRef.attributes.length;i<u;i++){var a=this.domRef.attributes[i];"nonce"===a.nodeName?o.setAttribute(a.nodeName,r):o.setAttribute(a.nodeName,a.nodeValue)}return""===this.domRef.src&&this.domRef.innerHTML&&""!==this.domRef.innerHTML&&(o.innerHTML=this.domRef.innerHTML),o.addEventListener("load",n),o.addEventListener("error",e),this.domRef.parentNode.appendChild(o),o},e.prototype.componentDidMount=function(){this.state.isHydrated||this.setState({additionalNode:this.appendAdditionalElement(),removeAdditionalNode:null})},e.prototype.componentWillReceiveProps=function(t){var e=this.props,n=e.src,r=e.dangerouslySetInnerHTML;n&&n===t.src||r&&r.__html===t.dangerouslySetInnerHTML.__html||this.setState({removeAdditionalNode:this.state.additionalNode,additionalNode:null})},e.prototype.componentWillUpdate=function(t,n){e.removeNode(n.removeAdditionalNode)},e.prototype.componentDidUpdate=function(){var t=this.state,e=t.additionalNode,n=t.removeAdditionalNode;null===e&&this.setState({additionalNode:this.appendAdditionalElement()}),null!==n&&this.setState({removeAdditionalNode:null})},e.prototype.componentWillUnmount=function(){e.removeNode(this.state.removeAdditionalNode),e.removeNode(this.state.additionalNode)},e.prototype.render=function(){var t=this;if(null!==this.state.additionalNode)return null;var e=this.props,n=(e.isHydrating,(0,o.default)(e,["isHydrating"]));return f.default.createElement("script",(0,r.default)({},n,{ref:function(e){return t.domRef=e}}))},e}(c.Component);d.propTypes={isHydrating:s.default.bool,async:s.default.oneOfType([s.default.bool,s.default.number]),crossOrigin:s.default.string,defer:s.default.bool,integrity:s.default.string,nonce:s.default.string,src:s.default.string,text:s.default.string,type:s.default.string,dangerouslySetInnerHTML:s.default.object,onError:s.default.func,onLoad:s.default.func},d.defaultProps={isHydrating:!1,onError:p,onLoad:p},e.default=d},heda:function(t,e,n){var r=n("GhSp"),o=n("d+lc"),i=n("mHY4");t.exports=n("C61u")?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},iCc5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},ig3W:function(t,e){t.exports={}},ixoo:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},jo6Y:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},kUGv:function(t,e,n){var r=n("7whZ").document;t.exports=r&&r.documentElement},kvAF:function(t,e,n){var r=n("GhSp").f,o=n("nA4W"),i=n("zBWt")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},l0Kd:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},mHY4:function(t,e,n){var r=n("A9a0"),o=n("l0Kd");t.exports=Object.keys||function(t){return r(t,o)}},mRg0:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("s3Ml")),o=u(n("AyUB")),i=u(n("EJiy"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},n7vu:function(t,e,n){var r=n("TYje");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},nA4W:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},nAx8:function(t,e,n){var r=n("FgkJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},nRFE:function(t,e,n){var r=n("/F7N"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},obyI:function(t,e){t.exports={siteTitle:"Gianlu Developer",manifestName:"Gianlu.Dev",manifestShortName:"Gianlu.Dev",manifestStartUrl:"https://gianlu.dev/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-identity/",authorName:"Gianlu.dev",heading:"Full Stack Web Developer",socialLinks:[{icon:"fa-envelope-o",name:"Email",url:"mailto:web@gianlu.dev"}]}},s2er:function(t,e,n){var r=n("VSTI"),o=n("7whZ"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("5ETA")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},s3Ml:function(t,e,n){t.exports={default:n("QRdY"),__esModule:!0}},uccp:function(t,e,n){n("5Qd4"),t.exports=n("VSTI").Object.assign},ugGH:function(t,e,n){t.exports=n("BRsN")},vNbC:function(t,e,n){n("du/1");var r=n("VSTI").Object;t.exports=function(t,e){return r.create(t,e)}},xfML:function(t,e,n){var r=n("USwo");r(r.S,"Object",{setPrototypeOf:n("DrT7").set})},yQFZ:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},zBWt:function(t,e,n){var r=n("s2er")("wks"),o=n("ixoo"),i=n("7whZ").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},znrX:function(t,e,n){var r=n("nA4W"),o=n("CYMq"),i=n("WpRT")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}}}]);
//# sourceMappingURL=component---src-pages-index-js-61d670b7522804fe1f4d.js.map