(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{1011:function(e,t){},1176:function(e,t){},1307:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(35),l=n.n(c),o=n(1356),u=n(199),i=(n(494),n(1347)),s=n(1355),m=n(40),f=n(1354),p=n(474),b=n.n(p),E=n(476),d=n.n(E);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e,t,n){return(S=h()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&v(r,n.prototype),r}).apply(null,arguments)}var y=function(e){return e&&e.external?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Object(a.useState)(null),c=r[0],l=r[1],o=Object(a.useState)(null),u=o[0],i=o[1],s=Object(a.useState)(null),m=s[0],f=s[1];return Object(a.useEffect)((function(){return m||f(function(){try{if(c)console.log("IPFS already started");else try{t&&t[0]?(console.time("IPFS Started"),l(S(d.a,t)),console.timeEnd("IPFS Started"),i(null)):(l(null),i(new Error("daemon address cannot be empty")))}catch(e){console.error("IPFS init error:",e),l(null),i(e)}return Promise.resolve()}catch(e){return Promise.reject(e)}}()),function(){f(null)}}),t),[c,u]}(e.opts):function(){var e=Object(a.useState)(null),t=e[0],n=e[1],r=Object(a.useState)(null),c=r[0],l=r[1],o=null;return Object(a.useEffect)((function(){return o||(o=function(){try{var e=function(){if(t)console.log("IPFS already started");else{var e=function(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}((function(){return console.time("IPFS Started"),Promise.resolve(b.a.create()).then((function(e){n(e),console.timeEnd("IPFS Started"),l(null)}))}),(function(e){console.error("IPFS init error:",e),n(null),l(e)}));if(e&&e.then)return e.then((function(){}))}}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(a){return Promise.reject(a)}}()),function(){o=null,t&&t.stop&&(console.log("Stopping IPFS"),t.stop().catch((function(e){return console.error(e)})),n(null),l(null))}}),[]),[t,c]}()},j=n(0),O=n.n(j),g=n(21),x=n(52),w=n(477),k=n(1348),P=n(1345),I=n(1349),F=n(1350),T=n(1351),C=n(1352),D=n(1359),R=n(1361),A=n(1353),N=n(1357),_=function(e){var t=e.fields,n=void 0===t?1:t,c=e.onSubmit,l=e.submit,o=void 0===l?"submit":l,u=Object(a.useState)((function(){var e=[],t=0;t="number"===typeof n?n:n.length;for(var a=0;a<t;++a)e.push("");return e})),i=Object(m.a)(u,2),s=i[0],f=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(s)}},s.map((function(e,t,a){return r.a.createElement(N.a,{label:Array.isArray(n)?n[t]:"",onChange:function(e){var n=Array.from(a);n[t]=e.currentTarget.value,f(n)}})})),r.a.createElement(D.a,{type:"submit",variant:"contained"},o))},B=function(e){var t=e.ipfs,n=Object(u.b)().enqueueSnackbar,c="file-".concat(Object(w.v1)()),l=Object(a.useState)(""),o=Object(m.a)(l,2),s=o[0],f=o[1],p=Object(a.useState)(0),b=Object(m.a)(p,2),E=b[0],d=b[1],v=Object(a.useState)([]),h=Object(m.a)(v,2),S=h[0],y=h[1],j=Object(a.useState)(""),N=Object(m.a)(j,2),B=N[0],J=N[1],V=Object(a.useState)(null),W=Object(m.a)(V,2),q=W[0],z=W[1],M=Object(a.useState)(!1),$=Object(m.a)(M,2),G=$[0],H=$[1],K=Object(a.useCallback)(Object(g.a)(O.a.mark((function e(){var n,a,r,c,l,o,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=36;break}n=[],a=!0,r=!1,e.prev=4,l=Object(x.a)(t.files.ls("/"));case 6:return e.next=8,l.next();case 8:return o=e.sent,a=o.done,e.next=12,o.value;case 12:if(u=e.sent,a){e.next=19;break}i=u,n.push({name:i.name,cid:i.cid.toString()});case 16:a=!0,e.next=6;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(4),r=!0,c=e.t0;case 25:if(e.prev=25,e.prev=26,a||null==l.return){e.next=30;break}return e.next=30,l.return();case 30:if(e.prev=30,!r){e.next=33;break}throw c;case 33:return e.finish(30);case 34:return e.finish(25);case 35:y(n);case 36:case"end":return e.stop()}}),e,null,[[4,21,25,35],[26,,30,34]])}))),[t]);Object(a.useEffect)((function(){t&&(t.id().then((function(e){return f(e.id)})),setInterval(Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,t.swarm.peers();case 3:e.t1=e.sent.length,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),1e3),K())}),[t,K]);var L=Object(a.useCallback)(function(){var e=Object(g.a)(O.a.mark((function e(n){var a,r,c,l,o,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n){e.next=44;break}e.prev=1,a="",r=!0,c=!1,e.prev=5,o=Object(x.a)(t.cat(n));case 7:return e.next=9,o.next();case 9:return u=e.sent,r=u.done,e.next=13,u.value;case 13:if(i=e.sent,r){e.next=21;break}return a=i.toString(),e.abrupt("break",21);case 18:r=!0,e.next=7;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(5),c=!0,l=e.t0;case 27:if(e.prev=27,e.prev=28,r||null==o.return){e.next=32;break}return e.next=32,o.return();case 32:if(e.prev=32,!c){e.next=35;break}throw l;case 35:return e.finish(32);case 36:return e.finish(27);case 37:J(a),e.next=43;break;case 40:e.prev=40,e.t1=e.catch(1),J(e.t1.message);case 43:H(!0);case 44:case"end":return e.stop()}}),e,null,[[1,40],[5,23,27,37],[28,,32,36]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{container:!0,direction:"column"},r.a.createElement(i.a,{item:!0},r.a.createElement(k.a,{component:P.a},r.a.createElement(I.a,{size:"small","aria-label":"node info"},r.a.createElement(F.a,null,r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"ID"),r.a.createElement(C.a,null,s)),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Peers"),r.a.createElement(C.a,null,E)),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Publish"),r.a.createElement(C.a,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t&&q&&t.files.write("/".concat(q.name),q,{create:!0}).then(K)}},r.a.createElement("input",{id:c,style:{display:"none"},type:"file",onChange:function(e){e.preventDefault(),e.currentTarget.files&&e.currentTarget.files.length&&z(e.currentTarget.files[0])}}),r.a.createElement("label",{htmlFor:c},r.a.createElement(D.a,{variant:"text",component:"span"},(null===q||void 0===q?void 0:q.name)||"choose a file")),r.a.createElement(D.a,{type:"submit",variant:"contained"},"submit")))),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Read"),r.a.createElement(C.a,null,r.a.createElement(_,{onSubmit:function(e){return L(e[0])}}))),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Subscribe"),r.a.createElement(C.a,null,r.a.createElement(_,{fields:["topic"],submit:"subscribe",onSubmit:function(e){null===t||void 0===t||t.pubsub.subscribe(e,(function(e){return n(JSON.stringify(e.data.toString()))}))}}))),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Publish"),r.a.createElement(C.a,null,r.a.createElement(_,{submit:"publish",fields:["topic","message"],onSubmit:function(e){null===t||void 0===t||t.pubsub.publish(e[0],e[1])}}))),r.a.createElement(T.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},"Files"),r.a.createElement(C.a,null,r.a.createElement(k.a,null,r.a.createElement(F.a,null,S.map((function(e){return r.a.createElement(T.a,null,r.a.createElement(C.a,null,e.name),r.a.createElement(C.a,null,e.cid))}))))))))))),r.a.createElement(R.a,{open:G,onClose:function(){return H(!1)}},r.a.createElement(A.a,null,B)))},J=function(){var e=y(),t=Object(m.a)(e,2),n=t[0],a=t[1];return r.a.createElement(i.a,{container:!0,spacing:2,direction:"column",alignItems:"center"},r.a.createElement(i.a,{item:!0},r.a.createElement(f.a,{variant:"h5"},"Embedded IPFS Node:")),r.a.createElement(i.a,{item:!0},a?a.message:r.a.createElement(B,{ipfs:n})))},V=function(){var e=Object(a.useState)("http://localhost:5001"),t=Object(m.a)(e,2),n=t[0],c=t[1],l=y({external:!0,opts:n}),o=Object(m.a)(l,2),u=o[0],s=o[1];return r.a.createElement(i.a,{container:!0,spacing:2,direction:"column",alignItems:"center"},r.a.createElement(i.a,{item:!0},r.a.createElement(i.a,{container:!0,direction:"row"},r.a.createElement(i.a,{item:!0},r.a.createElement(f.a,{variant:"h5"},r.a.createElement("a",{href:"https://onichandame.com/post/ipfs"},"External IPFS Node:"))),r.a.createElement(i.a,{item:!0},r.a.createElement(N.a,{defaultValue:n,onBlur:function(e){e.currentTarget&&e.currentTarget.value&&c(e.currentTarget.value)}})))),r.a.createElement(i.a,{item:!0},s?s.message:r.a.createElement(B,{ipfs:u})))};var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(i.a,{item:!0,xs:5},r.a.createElement(J,null)),r.a.createElement(s.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(i.a,{item:!0,xs:5},r.a.createElement(V,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(u.a,{maxSnack:3},r.a.createElement(W,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},209:function(e,t){},486:function(e,t,n){e.exports=n(1307)},494:function(e,t,n){},501:function(e,t){},562:function(e,t){},563:function(e,t){},727:function(e,t){},766:function(e,t){},775:function(e,t){},777:function(e,t){},886:function(e,t){},954:function(e,t){},982:function(e,t){},984:function(e,t){}},[[486,1,2]]]);
//# sourceMappingURL=main.9e1c83b5.chunk.js.map