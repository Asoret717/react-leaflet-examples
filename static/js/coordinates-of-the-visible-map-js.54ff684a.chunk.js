(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[16],{64:function(t,n,e){"use strict";e.r(n);var o=e(80),r=e(15),a=e(0),c=e(74),u=e(71),i=e(81),s=e(69),l=e.n(s),b=Object(i.d)((function(t,n){var e=t.bounds,o=Object(u.a)(t,["bounds"]),r=new s.Rectangle(e,o);return{instance:r,context:Object(c.a)(Object(c.a)({},n),{},{overlayContainer:r})}}),(function(t,n,e){n.bounds!==e.bounds&&t.setBounds(n.bounds)})),d=e(113),f=e(75),p=e(1),j=[52.22977,21.01178];function O(t){return t.bounds.map((function(t,n){return Object(p.jsx)(b,{bounds:t,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)).toString(),weight:10,fillOpacity:.1},n)}))}function h(t){var n=t._northEast,e=t._southWest;return"SouthWest: ".concat(e,", NorthEast: ").concat(n)}var m=function(t){var n=t.map,e=Object(a.useState)([]),c=Object(r.a)(e,2),u=c[0],i=c[1];return Object(a.useEffect)((function(){if(n){var t=l.a.DomUtil.create("div","legend"),e=l.a.Control.extend({options:{position:"bottomleft"},onAdd:function(){return t.innerHTML=h(n.getBounds()),t}});n.addControl(new e),n.on("moveend zoomend",(function(){var e=n.getBounds();t.textContent=h(e),i((function(t){return[].concat(Object(o.a)(t),[e])}))}))}}),[n]),(null===u||void 0===u?void 0:u.length)<=0?Object(p.jsx)(O,{bounds:u}):null};n.default=function(){var t=Object(a.useState)(null),n=Object(r.a)(t,2),e=n[0],o=n[1];return Object(p.jsxs)(d.a,{whenCreated:o,center:j,zoom:18,scrollWheelZoom:!1,children:[Object(p.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(m,{map:e})]})}},73:function(t,n,e){"use strict";function o(t,n,e){var o=n.opacity,r=n.zIndex;null!=o&&o!==e.opacity&&t.setOpacity(o),null!=r&&r!==e.zIndex&&t.setZIndex(r)}e.d(n,"a",(function(){return o}))},75:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var o=e(71),r=e(81),a=e(84),c=e(73),u=e(69),i=Object(r.e)((function(t,n){var e=t.url,r=Object(o.a)(t,["url"]);return{instance:new u.TileLayer(e,Object(a.a)(r,n)),context:n}}),c.a)},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e(10);var r=e(16);function a(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);