(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n(27),s=n.n(i),o=(n(36),n(12)),r=n(3),l=n(30),j=n(9),m=n(2);n(37),n(38);var b=function(){return Object(c.jsx)("nav",{className:"navbar bg-success justify-content-center",children:Object(c.jsx)(j.b,{className:"navbar-brand py-2",to:"/memory-game/",children:Object(c.jsxs)("span",{className:"display-1 text-white",children:[Object(c.jsx)("i",{className:"fas fa-brain"})," Memory Game ",Object(c.jsx)("i",{className:"fas fa-brain"})]})})})},u=function(e){var t=e.setTheme,n=e.startGame;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"display-4",children:"Test your memory skills with this game"}),Object(c.jsxs)("select",{className:"form-control form-control-lg mt-3",onChange:function(e){t(e.target.value)},children:[Object(c.jsx)("option",{className:"text-secondary",value:"coco",children:"Pick a theme"}),Object(c.jsx)("option",{value:"theoffice",children:"The Office"}),Object(c.jsx)("option",{value:"rickandmorty",children:"Rick And Morty"}),Object(c.jsx)("option",{value:"brooklynninenine",children:"Brooklyn Nine Nine"}),Object(c.jsx)("option",{value:"americandad",children:"American Dad"}),Object(c.jsx)("option",{value:"parksandrec",children:"Parks and Recreation"}),Object(c.jsx)("option",{value:"thesimpsons",children:"The Simpsons"}),Object(c.jsx)("option",{value:"supernatural",children:"Supernatural"}),Object(c.jsx)("option",{value:"adventuretime",children:"Adventure Time"})]}),Object(c.jsx)("p",{className:"lead py-3",children:Object(c.jsxs)(j.b,{to:"/memory-game/Game",onClick:n,className:"btn btn-warning btn-lg",role:"button",children:["Get Playing ",Object(c.jsx)("i",{className:"fas fa-gamepad"})]})})]})};n(44);var d=function(e){var t=e.click,n=e.image;return Object(c.jsx)("div",{onClick:function(){return t(n)},className:"col-4",children:Object(c.jsx)("img",{className:"mb-3 img-thumbnail",src:n,alt:n})})},O=(n(45),function(e){return Object(c.jsx)("div",{children:e.gameOver?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{className:"display-4 mb-3",children:["GAME OVER!! You Scored ",e.coins," points!"]}),Object(c.jsxs)(j.b,{onClick:e.resetGame,to:"/memory-game/",className:"btn btn-warning btn-lg",role:"button",children:["Play Again ",Object(c.jsx)("i",{className:"fas fa-gamepad"})]})]}):e.playing?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"display-4 mb-3",children:"Click each gif only once... Go!"}),Object(c.jsx)("div",{className:"row",children:e.result.map((function(t,n){return Object(c.jsx)(d,{click:e.click,image:t.images.original.url},n)}))})]}):void 0})}),h=n(29),g=n.n(h),f=function(e){return g.a.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=bioSSe7tdt2zjVgAfZgThBaUxDZ6UA3K&limit=9")};var x=function(e){return Object(c.jsx)("div",{className:"container mt-4",children:Object(c.jsx)("div",Object(r.a)({className:"jumbotron text-center"},e))})};var v=function(){var e=Object(a.useState)({theme:"",result:[],gameOver:!1,clicked:{},playing:!1,coins:0}),t=Object(l.a)(e,2),n=t[0],i=t[1];function s(e){i((function(t){return Object(r.a)(Object(r.a)({},t),{},{theme:e})}))}function d(e){console.log("SEARCHING FOR",e),f(e).then((function(e){console.log("API SEARCH RESULTS",e.data.data),i((function(t){return Object(r.a)(Object(r.a)({},t),{},{result:e.data.data})}))}))}function h(e){n.clicked[e]?(console.log("GAME OVER"),i((function(e){return Object(r.a)(Object(r.a)({},e),{},{gameOver:!0})}))):(console.log("KEEP PLAYING"),i((function(t){return Object(r.a)(Object(r.a)({},t),{},{coins:t.coins+1,clicked:Object(r.a)(Object(r.a)({},t.clicked),{},Object(o.a)({},e,!0)),result:g(n.result)})}))),console.log("GAME STATE AFTER CLICK",n)}function g(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}function v(){n.theme?d(n.theme):(s("coco"),d("coco")),i((function(e){return Object(r.a)(Object(r.a)({},e),{},{playing:!0})})),console.log("GAME STATE AFTER START GAME",n)}function p(){i((function(e){return Object(r.a)(Object(r.a)({},e),{},{theme:"",result:[],gameOver:!1,clicked:{},playing:!1,coins:0})})),console.log("GAME STATE AFTER RESETING GAME",n)}return Object(a.useEffect)((function(){}),[]),Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsxs)(x,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/memory-game/",render:function(e){return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{setTheme:s,startGame:v}))}}),Object(c.jsx)(m.a,{exact:!0,path:"/memory-game/Game",render:function(e){return Object(c.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{click:h,coins:n.coins,resetGame:p,playing:n.playing,result:n.result,gameOver:n.gameOver}))}})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(c.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.fa16b4fd.chunk.js.map