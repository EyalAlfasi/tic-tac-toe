(function(e){function t(t){for(var n,c,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tic-tac-toe/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"12d3":function(e,t,r){"use strict";r("9b95")},"1ae4":function(e,t,r){e.exports=r.p+"img/logo.a103e644.svg"},5585:function(e,t,r){},"569e":function(e,t,r){},9065:function(e,t,r){"use strict";r("daac")},"9b95":function(e,t,r){},bb9f:function(e,t,r){"use strict";r("5585")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,o,c){var i=Object(n["y"])("AppHeader"),u=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["h"])(i),Object(n["h"])(u)],64)}var o=r("1ae4"),c=r.n(o);Object(n["u"])("data-v-c30bd0a2");var i={class:"wrapper flex align-center"},u=Object(n["g"])("img",{src:c.a,alt:"logo",class:"logo"},null,-1),s=Object(n["g"])("h1",{class:"app-name"},"Tic Tac Toe",-1),f=[u,s];function l(e,t,r,a,o,c){return Object(n["r"])(),Object(n["f"])("header",i,f)}Object(n["s"])();var b={};r("12d3");b.render=l,b.__scopeId="data-v-c30bd0a2";var d=b,O={components:{AppHeader:d}};O.render=a;var v=O,p=r("9483");Object(p["a"])("".concat("/tic-tac-toe/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=r("6c02");Object(n["u"])("data-v-8c2871f6");var j={class:"game-view-wrapper"},m={class:"game-info"};function y(e,t,r,a,o,c){var i=Object(n["y"])("GameBoard");return Object(n["r"])(),Object(n["f"])("div",j,[Object(n["g"])("div",m,[Object(n["g"])("span",{class:Object(n["n"])(["human-player",{"active-player":e.currentPlayer===e.humanPlayer}])},Object(n["A"])(e.humanPlayerName),3),Object(n["g"])("span",{class:Object(n["n"])(["computer-player",{"active-player":e.currentPlayer===e.computerPlayer}])},"Computer",2)]),Object(n["h"])(i,{onOnMakeMove:e.makeMove,board:e.board},null,8,["onOnMakeMove","board"])])}Object(n["s"])();var g,P,w=r("2909"),M=r("3835");(function(e){e["X"]="X",e["O"]="O",e["EMPTY"]="EMPTY"})(g||(g={})),function(e){e["X"]="X",e["O"]="O",e["TIE"]="TIE"}(P||(P={}));var k,T=r("ade3"),E=(k={},Object(T["a"])(k,P.X,1),Object(T["a"])(k,P.O,-1),Object(T["a"])(k,P.TIE,0),k);function N(){for(var e=[],t=0;t<3;t++){for(var r=[],n=0;n<3;n++)r.push(g.EMPTY);e.push(r)}return e}function S(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=-1/0,n=null,a=0;a<3;a++)for(var o=0;o<3;o++)if(e&&e[a][o]===g.EMPTY){var c=JSON.parse(JSON.stringify(e));c[a][o]=t?g.X:g.O;var i=_(c,!t);i>r&&(r=i,n={row:a,col:o})}return n}function _(e,t){if(e){var r=G(e);if(r){var n=E[r];return n}if(t){for(var a=-1/0,o=0;o<3;o++)for(var c=0;c<3;c++)if(e&&e[o][c]===g.EMPTY){var i=JSON.parse(JSON.stringify(e));i[o][c]=g.X;var u=_(i,!1);u>a&&(a=u)}return a}for(var s=1/0,f=0;f<3;f++)for(var l=0;l<3;l++)if(e&&e[f][l]===g.EMPTY){var b=JSON.parse(JSON.stringify(e));b[f][l]=g.O;var d=_(b,!0);d<s&&(s=d)}return s}}function G(e){if(!e)return null;var t=null,r=Object(M["a"])(e,3),n=Object(M["a"])(r[0],3),a=n[0],o=n[1],c=n[2],i=Object(M["a"])(r[1],3),u=i[0],s=i[1],f=i[2],l=Object(M["a"])(r[2],3),b=l[0],d=l[1],O=l[2];return X([a,s,O])&&(t=a),X([c,s,b])&&(t=c),X([a,o,c])&&(t=a),X([u,s,f])&&(t=u),X([b,d,O])&&(t=b),X([a,u,b])&&(t=a),X([o,s,d])&&(t=o),X([c,f,O])&&(t=c),t||(x(e)?null:P.TIE)}function x(e){if(e)return e.some((function(e){return e.some((function(e){return e===g.EMPTY}))}))}function X(e){for(var t=1;t<e.length;t++)if(e[t]===g.EMPTY||e[t]!==e[t-1])return!1;return!0}var Y={createNewBoard:N,getBestMove:S,checkWin:G};Object(n["u"])("data-v-1bd5357a");var I={class:"board-container"},A=["onClick"],J={key:0};function B(e,t,r,a,o,c){return Object(n["r"])(),Object(n["f"])("div",I,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.board,(function(t,r){return Object(n["r"])(),Object(n["f"])(n["a"],{key:r},[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(t,(function(t,a){return Object(n["r"])(),Object(n["f"])("div",{class:"cell",key:a,onClick:function(t){return e.makeMove(r,a)}},[Object(n["h"])(n["b"],{name:"fade-in-down"},{default:Object(n["D"])((function(){return["EMPTY"!==t?(Object(n["r"])(),Object(n["f"])("span",J,Object(n["A"])(t),1)):Object(n["e"])("",!0)]})),_:2},1024)],8,A)})),128))],64)})),128))])}Object(n["s"])();var C=Object(n["i"])({props:{board:Array},emits:["onMakeMove"],methods:{makeMove:function(e,t){this.$emit("onMakeMove",e,t,!0)}}});r("9065");C.render=B,C.__scopeId="data-v-1bd5357a";var F=C,H=Object(n["i"])({created:function(){this.initGame()},data:function(){return{board:[],isGameOn:!1,humanPlayerName:"Player1",currentPlayer:g.O,computerPlayer:g.X,humanPlayer:g.O}},methods:{initGame:function(){this.board=Y.createNewBoard(),this.isGameOn=!0,this.currentPlayer=g.O},makeMove:function(e,t,r){var n=this.computerPlayer===this.currentPlayer;if(!(n&&r||!this.isGameOn)&&(!this.board||this.board[e][t]===g.EMPTY)){var a=Object(w["a"])(this.board);a[e][t]=this.currentPlayer,this.board=a,this.checkGameStatus()}},switchPlayer:function(){this.currentPlayer=this.currentPlayer===g.X?g.O:g.X},checkGameStatus:function(){var e=this,t=Y.checkWin(this.board);if(t){if(t!==P.TIE)return t===this.computerPlayer?setTimeout((function(){alert("Computer wins!")}),1e3):setTimeout((function(){alert("".concat(e.humanPlayerName," wins!"))}),1e3),void(this.isGameOn=!1);this.isGameOn=!1,setTimeout((function(){alert("It's a tie!")}),1e3)}else this.switchPlayer()}},watch:{currentPlayer:function(e){var t=this;if(e===this.computerPlayer){var r=Y.getBestMove(this.board);if(!r)return;setTimeout((function(){t.makeMove(r.row,r.col,!1)}),1e3)}}},components:{GameBoard:F}});r("bb9f");H.render=y,H.__scopeId="data-v-8c2871f6";var W=H,q=[{path:"/",name:"Game",component:W}],D=Object(h["a"])({history:Object(h["b"])(),routes:q}),$=D,z=r("5502"),K=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});r("569e");Object(n["d"])(v).use(K).use($).mount("#app")},daac:function(e,t,r){}});
//# sourceMappingURL=app.98ca0f9c.js.map