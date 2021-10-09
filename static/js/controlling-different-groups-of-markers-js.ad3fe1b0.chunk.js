(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[12],{101:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e(9),c=e(75),u=e(86),a=e(82),i=e(83),o=e(80),l=e(72),f=e(76),s=e(0),b=e.n(s),O=Object(a.a)((function(t,n){t.children;var e=Object(u.a)(t,["children"]),r=new f.Control.Layers(void 0,void 0,e);return{instance:r,context:Object(c.a)(Object(c.a)({},n),{},{layersControl:r})}}),(function(t,n,e){n.collapsed!==e.collapsed&&(!0===n.collapsed?t.collapse():t.expand())})),d=Object(i.a)(O),p=Object(o.a)(d);function j(t){return function(n){var e=Object(l.d)(),u=Object(s.useRef)(n),a=Object(s.useState)(null),i=Object(r.a)(a,2),o=i[0],f=i[1],O=e.layersControl,d=e.map,p=Object(s.useCallback)((function(n){null!=O&&(u.current.checked&&d.addLayer(n),t(O,n,u.current.name),f(n))}),[O,d]),j=Object(s.useCallback)((function(t){null==O||O.removeLayer(t),f(null)}),[O]),v=Object(s.useMemo)((function(){return Object(c.a)(Object(c.a)({},e),{},{layerContainer:{addLayer:p,removeLayer:j}})}),[e,p,j]);return Object(s.useEffect)((function(){null!==o&&u.current!==n&&(!0!==n.checked||null!=u.current.checked&&!1!==u.current.checked?!0!==u.current.checked||null!=n.checked&&!1!==n.checked||d.removeLayer(o):d.addLayer(o),u.current=n)})),n.children?b.a.createElement(l.c,{value:v},n.children):null}}p.BaseLayer=j((function(t,n,e){t.addBaseLayer(n,e)})),p.Overlay=j((function(t,n,e){t.addOverlay(n,e)}))},102:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(75),c=e(86),u=e(87),a=e(76),i=Object(u.d)((function(t,n){t.children;var e=Object(c.a)(t,["children"]),u=new a.FeatureGroup([],e);return{instance:u,context:Object(r.a)(Object(r.a)({},n),{},{layerContainer:u,overlayContainer:u})}}))},41:function(t,n,e){"use strict";e.r(n);var r=e(75),c=e(93),u=e(119),a=e(101),i=e(90),o=e(102),l=e(92),f=e(91),s=e(76),b=e.n(s),O=e(85),d=e(1),p=[{lat:52.230020586193795,lng:21.01083755493164,title:"point A1"},{lat:52.22924516170657,lng:21.011320352554325,title:"point A2"},{lat:52.229511304688444,lng:21.01270973682404,title:"point A3"},{lat:52.23040500771883,lng:21.012146472930908,title:"point A4"}],j=[{lat:52.229314161892106,lng:21.012055277824405,title:"point B1"},{lat:52.22950144756943,lng:21.01193726062775,title:"point B2"},{lat:52.22966573260081,lng:21.011829972267154,title:"point B3"},{lat:52.2298333027065,lng:21.011744141578678,title:"point B4"},{lat:52.2299680154701,lng:21.01164758205414,title:"point B5"},{lat:52.23012572745442,lng:21.011583209037784,title:"point B6"},{lat:52.230276867580336,lng:21.01143836975098,title:"point B7"},{lat:52.23046414919644,lng:21.011341810226444,title:"point B8"}],v=[52.22977,21.01178],y=function(){var t=Object(c.b)({overlayadd:function(n){var e=new b.a.LatLngBounds;t.eachLayer((function(t){t instanceof b.a.FeatureGroup&&e.extend(t.getBounds())})),e.isValid()&&t.flyToBounds(e)}});return null};n.default=function(){return Object(d.jsxs)(u.a,{center:v,zoom:18,scrollWheelZoom:!1,children:[Object(d.jsxs)(a.a,{position:"topright",collapsed:!1,children:[Object(d.jsx)(i.a,Object(r.a)({},O.a)),Object(d.jsx)(a.a.Overlay,{name:"point A",children:Object(d.jsx)(o.a,{children:p.map((function(t,n){var e=t.lat,r=t.lng,c=t.title;return Object(d.jsx)(l.a,{position:[e,r],children:Object(d.jsx)(f.a,{children:c})},n)}))})}),Object(d.jsx)(a.a.Overlay,{name:"point B",children:Object(d.jsx)(o.a,{children:j.map((function(t,n){var e=t.lat,r=t.lng,c=t.title;return Object(d.jsx)(l.a,{position:[e,r],children:Object(d.jsx)(f.a,{children:c})},n)}))})})]}),Object(d.jsx)(y,{})]})}},73:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(75);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},74:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},75:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},77:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return l}));var r=e(0),c=e(78),u=e(72),a=e(74),i=e(73);function o(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function l(t){return function(n){var e=Object(u.d)(),r=t(Object(i.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(a.a)(r.current,n.eventHandlers),o(r.current,e),r}}},78:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return f}));var r=e(9),c=e(0),u=e.n(c),a=e(16),i=e(72);function o(t){function n(n,e){var r=t(n).current,a=r.instance,o=r.context;return Object(c.useImperativeHandle)(e,(function(){return a})),null==n.children?null:u.a.createElement(i.c,{value:o},n.children)}return Object(c.forwardRef)(n)}function l(t){function n(n,e){var u=Object(c.useState)(!1),i=Object(r.a)(u,2),o=i[0],l=i[1],f=t(n,l).current.instance;Object(c.useImperativeHandle)(e,(function(){return f})),Object(c.useEffect)((function(){o&&f.update()}),[f,o,n.children]);var s=f._contentNode;return s?Object(a.createPortal)(n.children,s):null}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},81:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return l}));var r=e(0),c=e(72),u=e(74),a=e(77),i=e(73);function o(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function l(t){return function(n){var e=Object(c.d)(),r=t(Object(i.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(a.b)(r.current,e),o(r.current,n),r}}},82:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),a=Object(r.useRef)(e),i=u.current.instance;return Object(r.useEffect)((function(){a.current!==e&&(n(i,e,a.current),a.current=e)}),[i,e,c]),u}}},83:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(72);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),a=u.current.instance,i=Object(r.useRef)(n.position),o=n.position;return Object(r.useEffect)((function(){return a.addTo(e.map),function(){a.remove()}}),[e.map,a]),Object(r.useEffect)((function(){null!=o&&o!==i.current&&(a.setPosition(o),i.current=o)}),[a,o]),u}}},84:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(78),c=e(72),u=e(74),a=e(73);function i(t,n){return function(e,i){var o=Object(c.d)(),l=t(Object(a.a)(e,o),o);return Object(r.a)(o.map,e.attribution),Object(u.a)(l.current,e.eventHandlers),n(l.current,o,e,i),l}}},85:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return O}));var r=e(80),c=e(83),u=e(82),a=e(77),i=e(84),o=e(81);function l(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function f(t,n){var e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.a)(c)}function s(t,n){var e=Object(u.a)(t),c=Object(i.a)(e,n);return Object(r.b)(c)}function b(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function O(t,n){var e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.c)(c)}},89:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(86),c=e(87),u=e(73),a=e(89),i=e(76),o=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new i.TileLayer(e,Object(u.a)(c,n)),context:n}}),a.a)},91:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(87),c=e(76),u=e(0),a=Object(r.c)((function(t,n){return{instance:new c.Popup(t,n.overlayContainer),context:n}}),(function(t,n,e,r){var c=e.onClose,a=e.onOpen,i=e.position;Object(u.useEffect)((function(){var e=t.instance;function u(t){t.popup===e&&(e.update(),r(!0),null==a||a())}function o(t){t.popup===e&&(r(!1),null==c||c())}return n.map.on({popupopen:u,popupclose:o}),null==n.overlayContainer?(null!=i&&e.setLatLng(i),e.openOn(n.map)):n.overlayContainer.bindPopup(e),function(){n.map.off({popupopen:u,popupclose:o}),n.map.removeLayer(e)}}),[t,n,r,c,a,i])}))},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(75),c=e(86),u=e(87),a=e(76),i=Object(u.b)((function(t,n){var e=t.position,u=Object(c.a)(t,["position"]),i=new a.Marker(e,u);return{instance:i,context:Object(r.a)(Object(r.a)({},n),{},{overlayContainer:i})}}),(function(t,n,e){n.position!==e.position&&t.setLatLng(n.position),null!=n.icon&&n.icon!==e.icon&&t.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==e.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=t.dragging&&n.draggable!==e.draggable&&(!0===n.draggable?t.dragging.enable():t.dragging.disable())}))},93:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return a}));var r=e(72),c=e(0);function u(){return Object(r.d)().map}function a(t,n){var e=u();return Object(c.useEffect)((function(){return e.on(t,n),function(){e.off(t,n)}}),[e,t,n]),e}}}]);