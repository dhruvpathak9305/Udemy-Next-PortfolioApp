_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{Juyh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n("o0o1"),o=n.n(r);function u(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void n(s)}a.done?e(i):Promise.resolve(i).then(r,o)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n("q1tI"),y=n.n(l),h=(n("YFqc"),n("5Yp1")),b=n("Y0NT"),d=n("vcXL"),v=n.n(d),w=y.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,n,r,s=_(f);function f(){return c(this,f),s.apply(this,arguments)}return e=f,n=[{key:"render",value:function(){var t=this.props,e=t.user,n=t.statusCode;return n?w(b.default,{statusCode:n}):w(h.a,{title:"About"},w("p",null,e.name),w("img",{src:e.avatar_url,alt:"Reed",height:"200px"}))}}],r=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(){var e,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://api.github.com/users/reedbarger");case 2:return e=t.sent,n=e.status>200&&e.status,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",{user:r,statusCode:n});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){u(c,r,o,a,i,"next",t)}function i(t){u(c,r,o,a,i,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()}],n&&a(e.prototype,n),r&&a(e,r),f}(l.Component)},Y0NT:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),u=n("5Yp1"),c=o.a.createElement;e.default=function(t){var e=t.statusCode;return c(u.a,{title:"Error!!!"},e?"Could not your data: Status Code ".concat(e):"Cound'nt get that page, sorry")}},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["rB5V",0,2,1,3]]]);