(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{33:function(e,a,t){e.exports=t(65)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),o=(t(38),t(30)),m=t(6),i=t(7);t(39),t(40);var s=function(){return r.a.createElement("nav",{className:"navbar bg-success justify-content-center"},r.a.createElement(m.b,{className:"navbar-brand py-2",to:"/memory-game/"},r.a.createElement("span",{className:"display-1 text-white"},r.a.createElement("i",{className:"fas fa-brain"})," Memory Game ",r.a.createElement("i",{className:"fas fa-brain"}))))},u=function(e){var a=e.search;return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-4"},"Test your memory skills with this game"),r.a.createElement("p",{className:"lead my-2"},"Select your theme:"),r.a.createElement("select",{className:"form-control form-control-lg",onChange:a},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"theoffice"},"The Office"),r.a.createElement("option",{value:"brooklynninenine"},"Brooklyn Nine Nine"),r.a.createElement("option",{value:"parksandrec"},"Parks and Recreation"),r.a.createElement("option",{value:"rickandmorty"},"Rick And Morty"),r.a.createElement("option",{value:"supernatural"},"Supernatural")),r.a.createElement("p",{className:"lead py-3"},r.a.createElement(m.b,{to:"/memory-game/Game",className:"btn btn-warning btn-lg",role:"button"},"Get Playing ",r.a.createElement("i",{className:"fas fa-gamepad"})))))},g=t(26),E=t(27),h=t(31),f=t(28),d=t(32);t(46);var v=function(e){var a=e.click,t=e.image;return r.a.createElement("div",{onClick:function(){return a(t)},className:"col-4"},r.a.createElement("img",{className:"mb-3 img-thumbnail",src:t,alt:t}))},p=(t(47),function(e){function a(){return Object(g.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(E.a)(a,[{key:"renderPage",value:function(){return this.props.gameOver?r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 mb-3"},"GAME OVER!!"),r.a.createElement(m.b,{to:"/memory-game/",className:"btn btn-warning btn-lg",role:"button"},"Go Back ",r.a.createElement("i",{className:"fas fa-gamepad"}))):r.a.createElement("h1",{className:"display-4 mb-3"},"Click each image only once... Go!")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"jumbotron text-center"},this.renderPage(),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},this.props.result.map((function(a){return r.a.createElement(v,{click:e.props.click,image:a.images.original.url})}))))))}}]),a}(n.Component)),b=t(29),y=t.n(b),k=function(e){return y.a.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=bioSSe7tdt2zjVgAfZgThBaUxDZ6UA3K&limit=9")};var N=function(){var e=Object(n.useState)({theme:"",result:[],gameOver:!1,clicked:{}}),a=Object(o.a)(e,2),t=a[0],c=a[1];function l(e){t.theme=e.target.value,k(t.theme).then((function(e){if(0===e.data.length)throw new Error("No results found.");if("error"===e.data.status)throw new Error(e.data.message);c({theme:t.theme,result:e.data.data,gameOver:!1,clicked:{}}),console.log("GAME STATE AFTER API SEARCH"),console.log(t)}))}function g(e){t.clicked[e]?c({theme:"",result:[],gameOver:!0,clicked:{}}):(t.clicked[e]=!0,c({theme:t.theme,result:E(t.result),gameOver:t.gameOver,clicked:t.clicked})),console.log("GAME STATE AFTER CLICK"),console.log(t)}function E(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}return Object(n.useEffect)((function(){t.gameOver&&console.log("GAME OVER!!!!!!!!!!!!!!!!!")}),t.result),r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(i.a,{exact:!0,path:"/memory-game/",render:function(e){return r.a.createElement(u,Object.assign({},e,{search:l}))}}),r.a.createElement(i.a,{exact:!0,path:"/memory-game/Game",render:function(e){return r.a.createElement(p,Object.assign({},e,{click:g,result:t.result,gameOver:t.gameOver}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.5635bf83.chunk.js.map