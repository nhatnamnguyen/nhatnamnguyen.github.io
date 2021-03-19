(this["webpackJsonpreact-covid"]=this["webpackJsonpreact-covid"]||[]).push([[0],{74:function(e,a,t){e.exports=t(87)},79:function(e,a,t){},80:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=(t(79),t(29)),s=t(46);t(80);var i=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.type," : ",r.a.createElement("span",{className:e.withStyle},e.count.toLocaleString())))};var m=function(){var e=Object(n.useState)({cases:0,deaths:0,recovered:0}),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){var e;e=c,fetch("https://coronavirus-19-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(a){e(a)}))}),[]),r.a.createElement("div",null,r.a.createElement("label",null,"Global Corona-19"),r.a.createElement(i,{type:"Cases",withStyle:"case",count:t.cases}),r.a.createElement(i,{type:"Deaths",withStyle:"death",count:t.deaths}),r.a.createElement(i,{type:"Recovered",withStyle:"recovered",count:t.recovered}))};function u(e){return null!==e?e.toLocaleString():"0"}var p=function(e){return r.a.createElement("div",{className:"country-item"},r.a.createElement("div",null,e.countryName),r.a.createElement("div",{className:"small"},"Cases: ",r.a.createElement("span",{className:"case"},u(e.case))),r.a.createElement("div",{className:"small"},"Deaths: ",r.a.createElement("span",{className:"death"},u(e.death))),r.a.createElement("div",{className:"small"},"Recovered: ",r.a.createElement("span",{className:"recovered"},u(e.recovered))))},d=t(141);var E=function(e){return r.a.createElement(d.a,{label:"Filter by country name",onChange:function(a){return e.onSearchChange(a)}})};var h=function(){var e=Object(n.useState)([{country:"",cases:0,deaths:0,recovered:0}]),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),i=s[0],m=s[1];Object(n.useEffect)((function(){var e;e=c,fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(a){e(a)}))}),[]);var u=t.filter((function(e){return"Total:"!==e.country&&""!==e.country&&"World"!==e.country&&e.country.toLowerCase().includes(i.toLowerCase())})).map((function(e){return r.a.createElement(p,{key:e.country,countryName:e.country,case:e.cases,death:e.deaths,recovered:e.recovered})}));return r.a.createElement("div",null,r.a.createElement(E,{onSearchChange:function(e){m(e.target.value)}}),u)},v=t(50),f=t(26),b=t(138),y=t(137),w=t(133),g=t(144),N=t(143),j=t(140),O=t(63),k=t.n(O),S=t(131),C=t(134),x=t(135),B=t(136),L=t(64),P=t.n(L),W=t(65),D=t.n(W),G=t(139),M=t(47),R=t(132),I=t(145),J=t(10),A=Object(R.a)((function(e){return Object(I.a)({root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}})}));function F(e){var a=e.container,t=A(),n=Object(J.a)(),c=r.a.useState(!1),o=Object(l.a)(c,2),s=o[0],i=o[1],u=function(){i(!s)},p=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(w.a,null),r.a.createElement(S.a,null,["Global","Countries"].map((function(e,a){return r.a.createElement(C.a,{button:!0,key:e,component:v.b,to:e.toLowerCase()},r.a.createElement(x.a,null,a%2===0?r.a.createElement(k.a,null):r.a.createElement(P.a,null)),r.a.createElement(B.a,{primary:e}))}))));return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,null),r.a.createElement(v.a,null,r.a.createElement(b.a,{position:"fixed",className:t.appBar},r.a.createElement(G.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:t.menuButton},r.a.createElement(D.a,null)),r.a.createElement(M.a,{variant:"h6",noWrap:!0},"Covid-19 Information"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(N.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:a,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:s,onClose:u,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(N.a,{xsDown:!0,implementation:"css"},r.a.createElement(g.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},p))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{exact:!0,from:"/",to:"/global"}),r.a.createElement(f.b,{exact:!0,path:"/global",component:m}),r.a.createElement(f.b,{path:"/countries",component:h})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.964c1f87.chunk.js.map