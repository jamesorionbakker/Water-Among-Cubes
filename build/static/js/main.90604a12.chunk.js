(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(8),r=n.n(a),h=n(3),c=n(7),o=n(11),u=n(0);function l(t){var e={backgroundColor:(0===t.item.baseHeight&&t.item.isLandlocked,"white"),boxShadow:"0px 0px ".concat(t.item.baseHeight/10*10,"px rgba(0,0,0,1)"),zIndex:t.item.baseHeight,margin:"-".concat(t.item.baseHeight/7,"px")};return Object(u.jsx)("div",{className:"cube-container",style:e,children:Object(u.jsx)("div",{style:{backgroundColor:"rgba(0,128,255,".concat(t.item.waterHeight/10,")")},children:Object(u.jsx)("span",{})})})}var s,f,g,d,b=n(5),j=n(9),p=n(10),m=[],x=[],H=[],v=function(){function t(e,n,i,a){Object(j.a)(this,t),this.x=e,this.y=n,this.baseHeight=i,this.waterHeight=0,this.totalHeight=this.baseHeight+this.waterHeight,this.isLandlocked=a,this.N=null,this.E=null,this.S=null,this.W=null}return Object(p.a)(t,[{key:"fill",value:function(){this.waterHeight++,this.totalHeight++}}]),t}();function O(t){if(0===t.length||0===t[0].length)return{waterVolume:0,resultArray:[]};d=0,H=[],x=[];var e=function(t){var e=t.flat(),n=Math.max.apply(Math,Object(b.a)(e))-Math.min.apply(Math,Object(b.a)(e)),i=t[0].length;return{height:t.length,width:i,depth:n}}(t);s=e.height,f=e.width,g=e.depth,t.forEach((function(t,e){t.forEach((function(t,n){x.push(new v(n,e,t,function(t,e){return 0!==t&&t!==f-1&&(0!==e&&e!==s-1)}(n,e)))}))}));var n=x.filter((function(t){return!!t.isLandlocked}));!function(t){t.forEach((function(t){t.isLandlocked&&(t.W=x.find((function(e){return e.y===t.y&&e.x===t.x-1})),t.E=x.find((function(e){return e.y===t.y&&e.x===t.x+1})),t.N=x.find((function(e){return e.y===t.y-1&&e.x===t.x})),t.S=x.find((function(e){return e.y===t.y+1&&e.x===t.x})))}))}(n);for(var i=0;i<g;i++){var a=!1;if(n.forEach((function(t){m=[],w(t)&&(a=!0,t.fill(),d++)})),!a)break}return H=function(t){var e=Object(b.a)(t),n=[];for(;e.length>0;)n.push(e.splice(0,f));return n}(x),{waterVolume:d,resultArray:H}}function w(t){if(m.includes(t))return!0;if(!t.isLandlocked)return!1;m.push(t);var e=t.N,n=t.E,i=t.S,a=t.W;return!(t.totalHeight>e.totalHeight||t.totalHeight>n.totalHeight||t.totalHeight>i.totalHeight||t.totalHeight>a.totalHeight)&&(!(t.totalHeight===e.totalHeight&&!w(e))&&(!(t.totalHeight===n.totalHeight&&!w(n))&&(!(t.totalHeight===i.totalHeight&&!w(i))&&!(t.totalHeight===a.totalHeight&&!w(a)))))}function y(t){var e,n=Object(i.useState)({w:30,h:30}),a=Object(o.a)(n,2),r=a[0],s=a[1];function f(t){var e=t.target,n=e.name,i=e.value;i=""===i?0:parseInt(i),s((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(h.a)({},n,i))}))}return Object(u.jsxs)("main",{children:[Object(u.jsx)("label",{htmlFor:"width-input",children:"Width:"}),Object(u.jsx)("input",{id:"width-input",name:"w",type:"number",value:0===r.w?"":r.w,onChange:f}),Object(u.jsx)("label",{htmlFor:"height-input",children:"Height:"}),Object(u.jsx)("input",{id:"height-input",name:"h",type:"number",value:0===r.h?"":r.h,onChange:f}),Object(u.jsx)("div",{style:{gridTemplateColumns:"repeat(".concat(r.w,", 1fr)")},className:"cube-map",children:function(){var t,n=O(function(t){for(var e=t.w,n=t.h,i=[],a=0;a<n;a++){for(var r=[],h=0;h<e;h++)r.push(Math.floor(10*Math.random()));i.push(r)}return i}(r));return t=n.resultArray,e=n.waterVolume,t.flat().map((function(t,e){return Object(u.jsx)(l,{item:t,id:e},e)}))}()}),Object(u.jsxs)("span",{children:["Total Volume: ",e," Units"]})]})}var k=function(){return Object(u.jsx)(y,{})};n(17);r.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.90604a12.chunk.js.map