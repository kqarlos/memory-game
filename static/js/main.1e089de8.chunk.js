(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{34:function(e,a,t){e.exports=t(65)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),o=t.n(c),l=(t(39),t(9)),i=t(31),s=t(6),m=t(7);t(40),t(41);var u=function(){return r.a.createElement("nav",{className:"navbar bg-success justify-content-center"},r.a.createElement(s.b,{className:"navbar-brand py-2",to:"/"},r.a.createElement("span",{className:"display-1 text-white"},r.a.createElement("i",{className:"fas fa-brain"})," Memory Game ",r.a.createElement("i",{className:"fas fa-brain"}))))},E=function(e){var a=e.search,t=e.startGame;return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-4"},"Test your memory skills with this game"),r.a.createElement("p",{className:"lead my-2"},"Select your theme:"),r.a.createElement("select",{className:"form-control form-control-lg",onChange:a},r.a.createElement("option",{value:"?"}),r.a.createElement("option",{value:"theoffice"},"The Office"),r.a.createElement("option",{value:"rickandmorty"},"Rick And Morty"),r.a.createElement("option",{value:"brooklynninenine"},"Brooklyn Nine Nine"),r.a.createElement("option",{value:"americandad"},"American Dad"),r.a.createElement("option",{value:"parksandrec"},"Parks and Recreation"),r.a.createElement("option",{value:"thesimpsons"},"The Simpsons"),r.a.createElement("option",{value:"supernatural"},"Supernatural"),r.a.createElement("option",{value:"adventuretime"},"Adventure Time")),r.a.createElement("p",{className:"lead py-3"},r.a.createElement(s.b,{to:"/memory-game/Game",onClick:t,className:"btn btn-warning btn-lg",role:"button"},"Get Playing ",r.a.createElement("i",{className:"fas fa-gamepad"})))))},p=t(27),g=t(28),f=t(32),d=t(29),h=t(33);t(46);var v=function(e){var a=e.click,t=e.image;return r.a.createElement("div",{onClick:function(){return a(t)},className:"col-4"},r.a.createElement("img",{className:"mb-3 img-thumbnail",src:t,alt:t}))},b=(t(47),function(e){function a(){return Object(p.a)(this,a),Object(f.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(g.a)(a,[{key:"checkGameStatus",value:function(){var e=this;return console.log("Props",this.props),this.props.gameOver||0===this.props.result.length?r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4 mb-3"},"GAME OVER!! You Scored ",this.props.coins," points!"),r.a.createElement(s.b,{onClick:this.props.resetGame,to:"/memory-game/",className:"btn btn-warning btn-lg",role:"button"},"Play Again ",r.a.createElement("i",{className:"fas fa-gamepad"}))):this.props.playing?r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4 mb-3"},"Click each gif only once... Go!"),r.a.createElement("div",{className:"row"},this.props.result.map((function(a,t){return r.a.createElement(v,{key:t,click:e.props.click,image:a.images.original.url})})))):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"jumbotron text-center"},this.checkGameStatus()))}}]),a}(n.Component)),y=t(30),k=t.n(y),N=function(e){return k.a.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=bioSSe7tdt2zjVgAfZgThBaUxDZ6UA3K&limit=9")};var O=function(){var e=Object(n.useState)({result:[],gameOver:!1,clicked:{},playing:!1,coins:0}),a=Object(i.a)(e,2),t=a[0],c=a[1];function o(e){console.log("SEARCHING FOR",e.target.value),N(e.target.value).then((function(e){console.log("API SEARCH RESULTS",e.data.data),c((function(a){return Object(l.a)({},a,{result:e.data.data})}))}))}function p(e){t.clicked[e]?(console.log("GAME OVER"),c((function(e){return Object(l.a)({},e,{gameOver:!0})}))):(console.log("KEEP PLAYING"),t.clicked[e]=!0,c((function(e){return Object(l.a)({},e,{coins:e.coins+1,clicked:e.clicked,result:g(t.result)})}))),console.log("GAME STATE AFTER CLICK",t)}function g(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}function f(){t.result.length>0&&(c((function(e){return Object(l.a)({},e,{playing:!0})})),console.log("GAME STATE AFTER START GAME",t))}function d(){c((function(e){return Object(l.a)({},e,{result:[],gameOver:!1,clicked:{},playing:!1,coins:0})})),console.log("GAME STATE AFTER RESETING GAME",t)}return Object(n.useEffect)((function(){t.gameOver&&console.log("GAME OVER!!!!!!!!!!!!!!!!!")}),[]),r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(m.a,{exact:!0,path:"/memory-game/",render:function(e){return r.a.createElement(E,Object.assign({},e,{search:o,startGame:f}))}}),r.a.createElement(m.a,{exact:!0,path:"/memory-game/Game",render:function(e){return r.a.createElement(b,Object.assign({},e,{click:p,coins:t.coins,resetGame:d,playing:t.playing,result:t.result,gameOver:t.gameOver}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.1e089de8.chunk.js.map