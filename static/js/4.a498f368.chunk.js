(this["webpackJsonptv-app"]=this["webpackJsonptv-app"]||[]).push([[4],{43:function(t,n,e){"use strict";n.a={baseUrl:"https://epg.domru.ru"}},44:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},45:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},46:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=r(t);if(n){var u=r(this).constructor;e=Reflect.construct(o,arguments,u)}else e=o.apply(this,arguments);return c(this,e)}}e.d(n,"a",(function(){return u}))},47:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))},48:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(10),o=e(43);function c(t){return function(n){fetch("".concat(o.a.baseUrl,"/channel/list?domain=perm&thid=").concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t})).then((function(t){return t.json()})).then((function(t){return n(function(t){return{type:r.b,payload:t}}(t))}))}}},49:function(t,n,e){},50:function(t,n,e){"use strict";e.r(n);var r=e(44),o=e(45),c=e(47),u=e(46),i=e(0),a=e(20),f=e(10),s=e(43);function l(){return function(t){fetch("".concat(s.a.baseUrl,"/channeltheme/list")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t})).then((function(t){return t.json()})).then((function(n){return t(function(t){return{type:f.a,payload:t}}(n))}))}}var p=e(48),h=e(14),b=e(21),y=(e(49),e(2)),d=function(t){Object(c.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(r.a)(this,e);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(t=n.call.apply(n,[this].concat(c))).listOfChannels=function(n){t.props.channelList(n)},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var t=this,n=this.props,e=n.channels,r=n.loading;return Object(y.jsx)("div",{className:"channel-list",children:Object(y.jsxs)("div",{className:"channel-list-group",children:[Object(y.jsx)("h2",{children:"\u0422\u0435\u043c\u044b \u043a\u0430\u043d\u0430\u043b\u043e\u0432"}),Object(y.jsx)("div",{className:"channel-list__slider",children:Object(y.jsx)("ul",{children:r?Object(y.jsx)(b.a,{}):e.map((function(n,e){return Object(y.jsx)("li",{children:Object(y.jsx)(h.c,{to:"/"+n.thid,onClick:function(){return t.listOfChannels(n.thid)},children:n.name})},e)}))})})]})})}}]),e}(i.Component),j=Object(a.b)((function(t){return{channels:t.channelTopics.channelList,loading:t.channelTopics.loading}}),(function(t){return{fetchData:function(n){return t(l())},channelList:function(n){return t(Object(p.a)(n))}}}))(d);n.default=j}}]);
//# sourceMappingURL=4.a498f368.chunk.js.map