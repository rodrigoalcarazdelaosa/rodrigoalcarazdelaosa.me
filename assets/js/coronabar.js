!function(M){var t={};function L(s){if(t[s])return t[s].exports;var j=t[s]={i:s,l:!1,exports:{}};return M[s].call(j.exports,j,j.exports,L),j.l=!0,j.exports}L.m=M,L.c=t,L.d=function(M,t,s){L.o(M,t)||Object.defineProperty(M,t,{enumerable:!0,get:s})},L.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},L.t=function(M,t){if(1&t&&(M=L(M)),8&t)return M;if(4&t&&"object"==typeof M&&M&&M.__esModule)return M;var s=Object.create(null);if(L.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:M}),2&t&&"string"!=typeof M)for(var j in M)L.d(s,j,function(t){return M[t]}.bind(null,j));return s},L.n=function(M){var t=M&&M.__esModule?function(){return M.default}:function(){return M};return L.d(t,"a",t),t},L.o=function(M,t){return Object.prototype.hasOwnProperty.call(M,t)},L.p="",L(L.s=4)}([function(M,t,L){var s=L(1),j=L(2);"string"==typeof(j=j.__esModule?j.default:j)&&(j=[[M.i,j,""]]);var e={insert:"head",singleton:!1},i=(s(j,e),j.locals?j.locals:{});M.exports=i},function(M,t,L){"use strict";var s,j=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},e=function(){var M={};return function(t){if(void 0===M[t]){var L=document.querySelector(t);if(window.HTMLIFrameElement&&L instanceof window.HTMLIFrameElement)try{L=L.contentDocument.head}catch(M){L=null}M[t]=L}return M[t]}}(),i=[];function N(M){for(var t=-1,L=0;L<i.length;L++)if(i[L].identifier===M){t=L;break}return t}function u(M,t){for(var L={},s=[],j=0;j<M.length;j++){var e=M[j],u=t.base?e[0]+t.base:e[0],w=L[u]||0,c="".concat(u," ").concat(w);L[u]=w+1;var n=N(c),a={css:e[1],media:e[2],sourceMap:e[3]};-1!==n?(i[n].references++,i[n].updater(a)):i.push({identifier:c,updater:C(a,t),references:1}),s.push(c)}return s}function w(M){var t=document.createElement("style"),s=M.attributes||{};if(void 0===s.nonce){var j=L.nc;j&&(s.nonce=j)}if(Object.keys(s).forEach((function(M){t.setAttribute(M,s[M])})),"function"==typeof M.insert)M.insert(t);else{var i=e(M.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,n=(c=[],function(M,t){return c[M]=t,c.filter(Boolean).join("\n")});function a(M,t,L,s){var j=L?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(M.styleSheet)M.styleSheet.cssText=n(t,j);else{var e=document.createTextNode(j),i=M.childNodes;i[t]&&M.removeChild(i[t]),i.length?M.insertBefore(e,i[t]):M.appendChild(e)}}function D(M,t,L){var s=L.css,j=L.media,e=L.sourceMap;if(j?M.setAttribute("media",j):M.removeAttribute("media"),e&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),M.styleSheet)M.styleSheet.cssText=s;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(s))}}var T=null,o=0;function C(M,t){var L,s,j;if(t.singleton){var e=o++;L=T||(T=w(t)),s=a.bind(null,L,e,!1),j=a.bind(null,L,e,!0)}else L=w(t),s=D.bind(null,L,t),j=function(){!function(M){if(null===M.parentNode)return!1;M.parentNode.removeChild(M)}(L)};return s(M),function(t){if(t){if(t.css===M.css&&t.media===M.media&&t.sourceMap===M.sourceMap)return;s(M=t)}else j()}}M.exports=function(M,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=j());var L=u(M=M||[],t);return function(M){if(M=M||[],"[object Array]"===Object.prototype.toString.call(M)){for(var s=0;s<L.length;s++){var j=N(L[s]);i[j].references--}for(var e=u(M,t),w=0;w<L.length;w++){var c=N(L[w]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}L=e}}}},function(M,t,L){(t=L(3)(!1)).push([M.i,'#coronabar{position:fixed;min-width:100%;height:auto;z-index:100000;font-size:13px;letter-spacing:0;line-height:20px;left:0;text-align:center;font-weight:400;font-family:-apple-system,BlinkMacSystemFont,Arial,Roboto,Helvetica Neue,sans-serif}#coronabar,#coronabar *{box-sizing:border-box}#coronabar.cb-position-bottom{bottom:0;box-shadow:inset 0 2px 0 0 #1965B0}#coronabar.cb-position-top{top:0;box-shadow:inset 0 -2px 0 0 #1965B0}#coronabar .coronabar-container{display:flex;justify-content:space-between;align-items:center;min-height:62px;padding:15px 30px;text-align:center;width:100%;z-index:2}#coronabar .coronabar-container>div:first-child{margin-right:15px}#coronabar .coronabar-container>div:last-child{margin-left:15px}#coronabar span{display:inline-block}#coronabar .cb-number{font-size:26px;color:#1965B0}#coronabar .cb-number,#coronabar .cb-number-desc{vertical-align:text-bottom}#coronabar .cb-number-desc{color:#00a99d;margin-left:10px}#coronabar .cb-space-evenly:after,#coronabar .cb-space-evenly:before{content:"";display:block}#coronabar #cb-data{display:flex;justify-content:space-between}#coronabar #cb-data>span:not(:last-child){margin-right:10px}#coronabar #cb-message{font-size:20px}#coronabar #cb-steps{display:flex;justify-content:space-between;align-items:center}#coronabar .cb-step{margin:0 15px;display:inline-block;text-align:left}#coronabar .cb-step:first-child{margin-left:0}#coronabar .cb-step:last-child{margin-right:0}#coronabar .cb-step-text{line-height:15px}#coronabar .cb-step-desc,#coronabar .cb-step-name{display:block}#coronabar .cb-step-name{color:#00a99d;text-transform:uppercase;font-weight:600}#coronabar .cb-step-icon{width:30px;height:30px;float:left;margin-right:10px}#coronabar .cb-step-icon img,#coronabar .cb-step-icon svg{opacity:.6}#coronabar .cb-close-icon{position:absolute;right:15px;top:50%;margin-top:-10px;width:15px;height:15px;opacity:.5;padding:10px;outline:none}#coronabar .cb-close-icon:hover{opacity:1}#coronabar .cb-close-icon:before{transform:rotate(45deg)}#coronabar .cb-close-icon:after{transform:rotate(-45deg)}#coronabar .cb-close-icon:after,#coronabar .cb-close-icon:before{position:absolute;content:" ";height:15px;width:2px;top:3px;background-color:#fff}@supports not (-ms-ime-align:auto){#coronabar #cb-data,#coronabar #cb-steps,#coronabar .coronabar-container{justify-content:space-evenly}}@media (max-width:900px){#coronabar .coronabar-container{flex-direction:column}#coronabar .coronabar-container>div{margin-right:0!important;margin-left:0!important}#coronabar #cb-steps{margin:10px 0}#coronabar .cb-step-icon{display:none}#coronabar .cb-step{margin:0 10px}}@media (max-width:480px){#coronabar{font-size:12px}#coronabar .coronabar-container{padding:15px 25px}#coronabar #cb-message{font-size:18px}#coronabar .cb-step{margin:0 5px}#coronabar .cb-step:first-child{margin-left:0}#coronabar .cb-step:last-child{margin-right:0}}',""]),M.exports=t},function(M,t,L){"use strict";M.exports=function(M){var t=[];return t.toString=function(){return this.map((function(t){var L=function(M,t){var L=M[1]||"",s=M[3];if(!s)return L;if(t&&"function"==typeof btoa){var j=(i=s,N=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(N),"/*# ".concat(u," */")),e=s.sources.map((function(M){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(M," */")}));return[L].concat(e).concat([j]).join("\n")}var i,N,u;return[L].join("\n")}(t,M);return t[2]?"@media ".concat(t[2]," {").concat(L,"}"):L})).join("")},t.i=function(M,L,s){"string"==typeof M&&(M=[[null,M,""]]);var j={};if(s)for(var e=0;e<this.length;e++){var i=this[e][0];null!=i&&(j[i]=!0)}for(var N=0;N<M.length;N++){var u=[].concat(M[N]);s&&j[u[0]]||(L&&(u[2]?u[2]="".concat(L," and ").concat(u[2]):u[2]=L),t.push(u))}},t}},function(M,t,L){"use strict";L.r(t);L(0);var s=function(M,t){var L=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3;return Promise.race([fetch(M,t),new Promise((function(M,t){return setTimeout((function(){return t(new Error("timeout"))}),L)}))])},j=new function(){this.version="1.0.4",this.defaults={position:"bottom",textColor:"#ffffff",backgroundColor:"#000000",backgroundOpacity:80,cache:!0,cacheInterval:2,cachedData:{},displayCases:!0,location:"",casesConfirmed:1511104,casesDeaths:88338,casesRecovered:328661,textHeadline:"Spread the message. Stop the virus.",textClose:"Close",textConfirmed:"Confirmed",textDeaths:"Deaths",textRecovered:"Recovered",textStepOneTitle:"Hands",textStepTwoTitle:"Elbow",textStepThreeTitle:"Face",textStepFourTitle:"Space",textStepFiveTitle:"Home",textStepOneDesc:"Wash often",textStepTwoDesc:"Cough into",textStepThreeDesc:"Don't touch",textStepFourDesc:"Avoid crowds",textStepFiveDesc:"Stay inside"},this.defaultParamTypes={position:"position",textColor:"hexcolor",backgroundColor:"hexcolor",backgroundOpacity:"backgroundOpacity",cache:"bool",cacheInterval:"int",displayCases:"bool",location:"string",casesConfirmed:"int",casesDeaths:"int",casesRecovered:"int",textHeadline:"string",textClose:"string",textConfirmed:"string",textDeaths:"string",textRecovered:"string",textStepOneTitle:"string",textStepTwoTitle:"string",textStepThreeTitle:"string",textStepFourTitle:"string",textStepFiveTitle:"string",textStepOneDesc:"string",textStepTwoDesc:"string",textStepThreeDesc:"string",textStepFourDesc:"string",textStepFiveDesc:"string"},this.options={},this.mergeOptions=function(){var M="undefined"!=typeof CoronaBarOptions?CoronaBarOptions:{};for(var t in this.defaults)this.defaults.hasOwnProperty(t)&&(this.options[t]=this.defaults[t]);if(void 0!==M)for(var t in M)this.defaults.hasOwnProperty(t)&&(this.options[t]=this.validParam(t,M[t]))},this.validParam=function(M,t){return M in this.defaultParamTypes&&("string"===this.defaultParamTypes[M]?t="string"==typeof t?t:this.defaults[M]:"int"===this.defaultParamTypes[M]?t="number"==typeof t?parseInt(t):this.defaults[M]:"bool"===this.defaultParamTypes[M]?t="boolean"==typeof t?t:this.defaults[M]:"backgroundOpacity"===this.defaultParamTypes[M]?t="number"==typeof t&&(t=parseInt(t))>=50&&t<=100?t:this.defaults[M]:"position"===this.defaultParamTypes[M]?t="string"==typeof t&&-1!==["top","bottom"].indexOf(t)?t:this.defaults[M]:"hexcolor"===this.defaultParamTypes[M]&&(t="string"==typeof t&&!0===/^#[0-9A-F]{6}$/i.test(t)?t:this.defaults[M])),t},this.getData=function(){var M=this.getFromLocal(),t=this.options.cachedData,L={};if(!0===this.options.displayCases)if(L=this.isEmpty(t)||this.isEmpty(M)?this.isEmpty(t)?M:t:M.lastUpdate>t.lastUpdate?M:t,!this.isEmpty(L)&&this.options.cache){L.confirmed>this.options.casesConfirmed&&this.updateCasesData(L);var s=Date.now(),j=36e5*this.options.cacheInterval;s>L.lastUpdate+j||L.location!==this.options.location?this.requestData(this.options.location):(this.updateCasesData(L,location),this.display())}else this.requestData(this.options.location);else this.display()},this.requestData=function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this,L="https://xb3xxneyqc.execute-api.us-east-1.amazonaws.com/default/covid-global-counts",j="https://xtjp0ikkah.execute-api.us-east-1.amazonaws.com/default/fetch-covid-19-details";s(M&&"string"==typeof M?j:L,[],5e3).then((function(M){return M.json()})).then((function(L){t.updateCasesData(L.latest,M),t.saveToLocal(),t.display()})).catch((function(M){t.display(),console.log(M)}))},this.updateCasesData=function(M,t){t?(this.options.casesConfirmed=parseInt(M.confirmed),this.options.casesDeaths=parseInt(M.deaths),this.options.casesRecovered=parseInt(M.recovered)):(this.options.casesConfirmed=parseInt(M.confirmed)>this.options.casesConfirmed?parseInt(M.confirmed):this.options.casesConfirmed,this.options.casesDeaths=parseInt(M.deaths)>this.options.casesDeaths?parseInt(M.deaths):this.options.casesDeaths,this.options.casesRecovered=parseInt(M.recovered)>this.options.casesRecovered?parseInt(M.recovered):this.options.casesRecovered)},this.saveToLocal=function(){var M=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!window.localStorage)return!1;var t=this.getFromLocal(),L={display:M,version:this.version,timestamp:t?t.timestamp:Date.now(),lastUpdate:t&&!M?t.timestamp:Date.now(),confirmed:this.options.casesConfirmed,deaths:this.options.casesDeaths,recovered:this.options.casesRecovered,location:this.options.location},s=new CustomEvent("saveData.coronabar",{detail:L});document.dispatchEvent(s),window.localStorage.setItem("coronabar",JSON.stringify(L))},this.getFromLocal=function(){if(!window.localStorage)return!1;if(0===localStorage.length)return!1;var M=JSON.parse(window.localStorage.getItem("coronabar"));return M||{}},this.getTemplate=function(M){var t=this.hexToRgba(this.options.backgroundColor,.01*this.options.backgroundOpacity),L='\n            <div id="coronabar" role="banner" class="cb-position-'.concat(M.position,'" aria-label="CoronaBar" style="background-color: ').concat(t,"; color: ").concat(M.textColor,';">\n                <div class="coronabar-container">\n                    <div id="cb-message" class="cb-content-part">').concat(M.textHeadline,'</div>\n                    <div id="cb-steps" class="cb-content-part">\n                        <div id="cb-step-1" class="cb-step"><span class="cb-step-icon"><img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxOTEgMTgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik0xNzYuNjA3LDEyNS45NThjMCwtNy4xNDQgLTUuMzI0LC0xMy4xMTYgLTEyLjIwNiwtMTQuMTI2YzEuMTQ3LC0yLjA1NyAxLjgwOCwtNC40MTMgMS44MDgsLTYuOTE5YzAsLTcuNzA1IC02LjE5NiwtMTQuMDUxIC0xMy44NjQsLTE0LjI2M2MtMC4xMTIsMCAtMC4yMzcsLTAuMDEyIC0wLjM0OSwtMC4wMTJsLTYxLjg3NSwwbDkuMDI2LC05LjAyN2MwLjA1LC0wLjA1IDAuMSwtMC4xMTIgMC4xNSwtMC4xNjJjNS4zNjEsLTUuNTczIDUuMjg2LC0xNC40OTkgLTAuMiwtMTkuOTg1Yy0yLjY5MywtMi42OTMgLTYuMjcxLC00LjE3NyAtMTAuMDg2LC00LjE3N2MtMi43OTMsMCAtNS40NjEsMC43OTggLTcuNzgsMi4zMDdjLTQuMTY0LDIuMDU3IC0zMi42MTQsMTYuMjgyIC00Ni4xNDEsMjcuMTQxYy0xNi40NDUsMTMuMjE2IC0yMS40NTcsMjQuMjYyIC0yMS40NTcsNDcuMjc3YzAsMTIuNzE2IDQuNDAxLDI0LjY0NyAxMi4zOTMsMzMuNTc0YzguNDc4LDkuNDc1IDIwLjI5NywxNC42OTkgMzMuMjc1LDE0LjY5OWwyNC4xMjUsMGMwLjE4NywwLjAxMyAwLjM3NCwwLjAyNSAwLjU2MSwwLjAyNWw1NC40MDcsMGM3LjczLC0wLjE1IDE0LjAwMSwtNi41MiAxNC4wMDEsLTE0LjI3NWMwLC0yLjQ0NCAtMC42MjMsLTQuNzUgLTEuNzIxLC02Ljc3bDUuMzM3LDBjNy43MjksLTAuMTQ5IDE0LC02LjUyIDE0LC0xNC4yNzVjMCwtMi44NjcgLTAuODYsLTUuNTQ4IC0yLjMzMSwtNy44MDVjNS4yMTEsLTIuMDk0IDguOTI3LC03LjI0MyA4LjkyNywtMTMuMjI3Wm0tMTQuMjEzLDcuMDQ0bC01Ni4xMjgsMGwwLDAuMDM3Yy0wLjEzNywtMC4wMjUgLTAuMjc0LC0wLjAzNyAtMC40MTIsLTAuMDM3bC0wLjIxMiwwYy0xLjg4MiwwLjA1IC0zLjM3OCwxLjU4MyAtMy4zNzgsMy40NzhjMCwxLjkwOCAxLjUzMywzLjQ1MyAzLjQyOCwzLjQ3OGwwLDAuMDEzbDUwLjA1NywwYzMuODY1LDAuMDI1IDYuOTgxLDMuMTY3IDYuOTgxLDcuMDMxYzAsMy44NjUgLTMuMTE2LDcuMDA3IC02Ljk4MSw3LjAzMmwtNTMuMzQ4LDBjMCwwLjAxMyAwLDAuMDI1IC0wLjAxMywwLjAyNWMtMC4wNjIsMCAtMC4xMjQsLTAuMDEyIC0wLjE4NywtMC4wMTJjLTEuOTIsMCAtMy40NzgsMS41NTggLTMuNDc4LDMuNDc4YzAsMS44NDUgMS40MzQsMy4zNDEgMy4yNDIsMy40NjZsMzYuMTU1LDBjMy44NjUsMC4wMjUgNi45ODIsMy4xNjcgNi45ODIsNy4wMzFjMCwzLjg2NSAtMy4xMTcsNy4wMDcgLTYuOTgyLDcuMDMybC01NC4xNTgsMGwwLC0wLjAyNWwtMjQuNjczLDBjLTIzLjEwMiwwIC0zOC40MjUsLTE5LjA4NyAtMzguNDI1LC00MS4wNDJjMCwtMjEuOTU1IDQuOCwtMzAuNDIxIDE4Ljc1MSwtNDEuNjI5YzEzLjcwMiwtMTEuMDA5IDQ0LjE3MiwtMjUuOTgyIDQ1LjI1NywtMjYuNTE4YzEuMjM0LC0wLjg4NSAyLjY4LC0xLjMzNCA0LjEyNywtMS4zMzRjMS43OTUsMCAzLjU5LDAuNjg2IDQuOTYyLDIuMDU3YzIuNzMsMi43MzEgMi43NDIsNy4xNTYgMC4wMzcsOS45MTJsLTAuMDYyLDAuMDYybC0xOS4zNjIsMTkuMzk5YzAuMjEyLDEuNzIxIDIuMDQ0LDEuOTQ1IDUuMjk4LDEuOTQ1bDcyLjA5OSwwYzMuODY1LDAuMDI1IDYuOTgyLDMuMTY3IDYuOTgyLDcuMDMyYzAsMy44NjUgLTMuMTE3LDcuMDA2IC02Ljk4Miw3LjAzMWwtNDYuNTY1LDBsMCwwLjAxM2MtMS43NzEsMC4xNjIgLTMuMTU1LDEuNjU4IC0zLjE1NSwzLjQ2NmMwLDEuOTIgMS41NTksMy40NzggMy40NzksMy40NzhsMC4wODcsMGwwLDAuMDEzbDU2LjUzOSwwYzMuODY1LDAuMDI0IDYuOTgyLDMuMTY2IDYuOTgyLDcuMDMxYzAuMDM4LDMuODkgLTMuMDc5LDcuMDE5IC02Ljk0NCw3LjA1N1oiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTEyMi45NzIsNjEuMjRjMTMuMzAzLDAgMjQuMTI0LC0xMC44MjIgMjQuMTI0LC0yNC4xMjVjMCwtMy40NTMgLTAuOTk3LC05LjUyNSAtOS42NzQsLTIyLjQ2NmMtNC4zNjQsLTYuNTIgLTguNjksLTExLjc4MiAtOC44NjUsLTEyLjAwNmMtMS4zNzEsLTEuNjcxIC0zLjQyOCwtMi42NDMgLTUuNTk3LC0yLjY0M2MtMi4xNywwIC00LjIxNCwwLjk3MiAtNS41OTgsMi42NDNjLTAuMTg3LDAuMjI0IC00LjUwMSw1LjQ4NiAtOC44NjUsMTIuMDA2Yy04LjY2NCwxMi45NDEgLTkuNjc0LDE5LjAxMyAtOS42NzQsMjIuNDY2YzAuMDI1LDEzLjMwMyAxMC44NDYsMjQuMTI1IDI0LjE0OSwyNC4xMjVabTAsLTU0LjAwOWMwLDAgMTYuODkzLDIwLjU0NiAxNi44OTMsMjkuODcyYzAsOS4zMjUgLTcuNTY3LDE2Ljg5MyAtMTYuODkzLDE2Ljg5M2MtOS4zMjYsMCAtMTYuODkzLC03LjU2OCAtMTYuODkzLC0xNi44OTNjMCwtOS4zMjYgMTYuODkzLC0yOS44NzIgMTYuODkzLC0yOS44NzJaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L3N2Zz4=",'" alt="').concat(M.textStepOneTitle,'" /></span><span class="cb-step-text"><span class="cb-step-name">').concat(M.textStepOneTitle,'</span><span class="cb-step-desc">').concat(M.textStepOneDesc,'</span></span></div>\n                        <div id="cb-step-2" class="cb-step"><span class="cb-step-icon"><img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxOTEgMTgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik0xNTAuOTIzLDgwLjM3OGMtMC4wNzYsLTAuMDI1IC0wLjE1MSwtMC4wMzggLTAuMjI2LC0wLjA2M2wtMjQuMDkyLC01LjQwMWwzMS4wNzUsLTQ1LjM0NWMyLjU3NSwtMy43NTYgMy41MywtOC4yNzggMi42ODgsLTEyLjc1Yy0wLjgyOSwtNC40NzIgLTMuMzY2LC04LjM0IC03LjEwOSwtMTAuOTE1Yy0yLjg1MSwtMS45NDcgLTYuMTY3LC0yLjk3NyAtOS42MDksLTIuOTc3Yy01LjYyNywwIC0xMC44NzgsMi43NjMgLTE0LjA1Niw3LjM5OGwtNS4zMjYsNy43NzVjLTcuOTUxLC0xMS4yOTIgLTIwLjgyNiwtMTguMSAtMzQuOTU3LC0xOC4xYy0yMy42MTUsMCAtNDIuODIsMTkuMjA2IC00Mi44Miw0Mi44MmMwLDExLjE1NSA0LjI1OCwyMS42MDUgMTEuODIsMjkuNTMxbC0xOS4wMTgsNS4wNzVjLTkuMDY5LDIuNDI0IC0xNC40ODMsMTEuNzY5IC0xMi4wNTgsMjAuODM5YzEuOTQ3LDcuMzEgOC41MTYsMTIuNDM1IDE2LjA0LDEyLjYyM2wwLDY3Ljc3OWMwLDIuMDEgMS42MzMsMy42NDMgMy42NDMsMy42NDNjMi4wMSwwIDMuNjQyLC0xLjYzMyAzLjY0MiwtMy42NDNsMCwtNjguNzMzYzAsLTAuMDg4IC0wLjAyNSwtMC4xNzYgLTAuMDI1LC0wLjI3N2w1Ny42MywtMTUuMzg3YzMuNDc5LC0wLjkyOSA2LjUwNywtMi45MDEgOC43OTMsLTUuNzRjMC42OTEsLTAuNzA0IDEuMzE5LC0xLjQ3IDEuODcxLC0yLjI3NGwzLjMyOSwtNC44NjFsMjYuODE4LDYuMDA0YzQuNDA5LDEuMzE5IDcuMzIzLDQuMTk2IDcuMzIzLDEzLjc2N2wwLDc3LjQ4OWMwLDIuMDEgMS42MzMsMy42NDIgMy42NDIsMy42NDJjMi4wMSwwIDMuNjQzLC0xLjYzMiAzLjY0MywtMy42NDJsMCwtNzcuNDc2YzAuMDEzLC03LjMzNiAtMS4yOTQsLTE3LjQ3MyAtMTIuNjYxLC0yMC44MDFabS05Ni4zOTMsLTM3LjU0NWMwLC0xOS4xODEgMTUuNiwtMzQuNzgxIDM0Ljc4MSwtMzQuNzgxYzEyLjUxMSwwIDIzLjgwMyw2LjU0NCAzMC4wMzMsMTcuMjMzbC0yNS44MTIsMzcuNjU4bC0yNi4wNTIsNi45NTljLTguMjI3LC02LjY0NSAtMTIuOTUsLTE2LjQ4IC0xMi45NSwtMjcuMDY5Wm01OC4yODMsMzkuMzE2Yy0wLjM5LDAuNTY1IC0wLjgyOSwxLjA4IC0xLjMwNywxLjUzMmMtMS4yNTYsMS42NzEgLTMuMDM5LDIuOTY1IC01LjIxMywzLjU1NWwtNjAuMDkxLDE2LjA0Yy0wLjg0MiwwLjIyNiAtMS42ODMsMC4zMjcgLTIuNTEyLDAuMzI3Yy00LjI5NiwwIC04LjIyOCwtMi44NzcgLTkuMzk2LC03LjIyM2MtMS4zODIsLTUuMTg3IDEuNjk2LC0xMC41MjYgNi44OTYsLTExLjkwN2w1Ni44NTEsLTE1LjE3NGwzNy41ODIsLTU0Ljg0MWMxLjg4NSwtMi43NTEgNC45MzcsLTQuMjMzIDguMDM5LC00LjIzM2MxLjg5NywwIDMuODA2LDAuNTUyIDUuNDksMS43MDhjNC40MzQsMy4wNCA1LjU2NCw5LjA5NCAyLjUyNCwxMy41MjhsLTM4Ljg2Myw1Ni42ODhaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0xMzMuMDQ4LDEyNS42NmMtMi4wMDksMCAtMy42NDIsMS42MzMgLTMuNjQyLDMuNjQzbDAsNDkuMzY0YzAsMi4wMSAxLjYzMywzLjY0MyAzLjY0MiwzLjY0M2MyLjAxLDAgMy42NDMsLTEuNjMzIDMuNjQzLC0zLjY0M2wwLC00OS4zNjRjMC4wMTMsLTIuMDEgLTEuNjIsLTMuNjQzIC0zLjY0MywtMy42NDNaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L3N2Zz4=",'" alt="').concat(M.textStepTwoTitle,'" /></span><span class="cb-step-text"><span class="cb-step-name">').concat(M.textStepTwoTitle,'</span><span class="cb-step-desc">').concat(M.textStepTwoDesc,'</span></span></div>\n                        <div id="cb-step-3" class="cb-step"><span class="cb-step-icon"><img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxOTEgMTgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik02Mi4zMjcsMTU4LjE4M2MtMS45NDUsLTAuNzIxIC00LjA4MywwLjI4NCAtNC44MDUsMi4yMTZjLTAuMjA2LDAuNTY3IC00Ljg2OSwxMi43NjUgLTE0Ljg5LDE0LjI3MmwwLC01Ljk3N2wtNC41ODYsNC41ODZjLTAuODM3LDAuODM3IC0xLjg0MiwxLjQxNyAtMi44ODYsMS43NzhsMCwzLjQyNmMwLDEuOTMyIDEuNDY5LDMuNTQzIDMuNDAxLDMuNzIzYzAuNzIxLDAuMDY0IDEuNDMsMC4xMDMgMi4xMjYsMC4xMDNjMTYuNTkxLDAgMjMuNTYsLTE4LjUxMSAyMy44NjksLTE5LjMyMmMwLjY5NSwtMS45NDUgLTAuMjk3LC00LjA4MyAtMi4yMjksLTQuODA1WiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNDIuMjg0LDE0Ny41MDVsNS4zMiwtNS4zMmMtMi40MzUsLTEuOTk3IC00LjA0NSwtNC4xODcgLTUuMjU2LC02Ljk1NmMtMC4wMTMsLTAuMDI2IC0wLjAyNiwtMC4wNjUgLTAuMDM4LC0wLjA5MWMtMC43MzUsLTEuNyAtMS4zMjcsLTMuNjE5IC0xLjg4MSwtNS44MzVjLTEuMDY5LC00LjMwMiAtMS43MTMsLTEwLjY3OCAtMi4wODcsLTE2LjE1M2wtNy45MDksLTcuOTIyYzAuMjA2LDUuNTc4IDAuODUsMTguMjY2IDIuNzQ0LDI1Ljg2NmMwLjU3OSwyLjMxOCAxLjIyMyw0LjM3OSAxLjk4Myw2LjI2bDAsMTcuMjYxbDcuMTI0LC03LjExWiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNjUuNDgzLDE0OS4yMThjLTEuMDMsMCAtMi4wNjEsLTAuMTAzIC0zLjEwNCwtMC4yNDVsLTYuMjIyLDYuMjA5YzMuMDQsMC45NzkgNi4xOTYsMS41MiA5LjMxMywxLjUyYzQuNzkyLDAgOS4yNDksLTEuMTM0IDEzLjEyNiwtMy4yMzNsLTUuNjU1LC01LjY2OGMtMi4zMzEsMC45MjcgLTQuODY5LDEuNDE3IC03LjQ1OCwxLjQxN1oiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTg3LjQ5NywxNDUuNTIxbC01LjQxLC01LjQxbC01LjQxLC01LjQyM2wtMi4zNywtMi4zNThsMi4zNywtMi4zN2wxOS4xOCwtMTkuMTY3bDExLjAyNywtMTEuMDE0YzAuNTI4LC0wLjUyOCAwLjg3NiwtMS4xNzIgMS4wNjksLTEuODU1YzAuNDEyLC0xLjQ0MyAwLjA2NCwtMy4wNTMgLTEuMDY5LC00LjE4NmMtMC4zMDksLTAuMzA5IC0wLjY1NywtMC41NDEgLTEuMDE4LC0wLjczNWMtMS42MSwtMC44NjMgLTMuNjU4LC0wLjYzMSAtNS4wMjMsMC43MjJsLTIuNTY0LDIuNTYzbC02Ljg2Niw2Ljg1M2wtNy4zNTUsNy4zNDJsLTEzLjQzNSwxMy40MjNsLTIuMzcsMi4zN2wtMi4zNywtMi4zN2wtMTMuNTc3LC0xMy41OWwtNi4yMzUsLTYuMjQ3bC0xMC4zNywtMTAuMzdjLTAuMTgsLTAuMTggLTAuMzczLC0wLjMyMiAtMC41NjYsLTAuNDY0Yy0wLjE1NSwtMC4xMTYgLTAuMzIyLC0wLjIwNiAtMC41MDMsLTAuMjk2Yy0xLjYxLC0wLjgzNyAtMy42MzIsLTAuNTkyIC00Ljk3MiwwLjc0N2MtMS42NzQsMS42NjIgLTEuNjc0LDQuMzY3IDAsNi4wNDJsMC43MzQsMC43MjFsNy42NTIsNy42NjRsMjEuODIxLDIxLjgzNGwyLjM3LDIuMzdsLTIuMzcsMi4zNzFsLTkuNDgxLDkuNDY3bC01LjQxLDUuNDExbC0yLjMzMSwyLjMxOGwtNy40ODUsNy40NzFsLTUuNTEzLDUuNTE0Yy0xLjY3NCwxLjY2MSAtMS42NzQsNC4zNjYgMCw2LjA0MWMwLjgzOCwwLjgzNyAxLjkzMiwxLjI0OSAzLjAyNywxLjI0OWMwLjg3NiwwIDEuNzUyLC0wLjI4MyAyLjQ5OSwtMC44MjRjMC4xODEsLTAuMTI5IDAuMzYxLC0wLjI3IDAuNTI4LC0wLjQyNWw2Ljk1NiwtNi45NDNsMTAuMTEyLC0xMC4wOTlsNS43ODQsLTUuNzcxbDcuMzY4LC03LjM1NWwyLjM3LC0yLjM3bDIuMzcsMi4zN2w1LjQ3NSw1LjQ4N2w1LjQxLDUuNDFsMTkuMjk3LDE5LjMyM2MwLjgzNywwLjgzNyAxLjkzMiwxLjI0OSAzLjAyNywxLjI0OWMxLjA5NSwwIDIuMTg5LC0wLjQxMiAzLjAxNCwtMS4yNDljMS42NzQsLTEuNjYyIDEuNjc0LC00LjM2NyAwLC02LjA0MmwtMTkuMzg3LC0xOS4zOTlaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0xNDEuMjY0LDE2LjYzYy0wLjQxMiwtMC4zNzQgLTAuODM3LC0wLjczNCAtMS4yNDksLTEuMDk1Yy0xMS4xMTcsLTkuNjYxIC0yNS42MjEsLTE1LjUzNSAtNDEuNDc4LC0xNS41MzVjLTM0LjkyMiwwIC02My4zMjUsMjguNDE2IC02My4zMjUsNjMuMzI1YzAsMC4yOTYgMC4wMTMsMC41NzkgMC4wMTMsMC44NzZjLTAuMDM5LDAuMjA2IC0wLjA2NSwwLjM5OSAtMC4wNjUsMC42MThsMCwyNC43MzJjMS4wMTgsMC4zNDggMS45NzEsMC45MDIgMi43OTYsMS42ODhjMC4wMzgsMC4wMzggMC4wOSwwLjA2NCAwLjE0MSwwLjExNmwxNS43NDEsMTUuNzQxYzAuNzA5LC0xLjUzMyAxLjQwNCwtMy4wMjcgMS43MzksLTMuNzYybDExLjcxLC0yNS4yODZjMC42MTgsLTEuMzAxIDEuOTE5LC0yLjA3NCAzLjI3MSwtMi4wNzRjMC41MDMsMCAxLjAzMSwwLjEwMyAxLjUyLDAuMzM1YzEuODA0LDAuODM4IDIuNTksMi45NjMgMS43NzgsNC43NzlsLTAuMDEzLDAuMDI2bC0xMC4wNDcsMjEuNzA1bDAuMDEzLDBjLTAuMzEsMC44NjMgMC4wOSwxLjgyOSAwLjk0LDIuMjE2YzAuMjQ1LDAuMTE2IDAuNTAyLDAuMTY3IDAuNzQ3LDAuMTY3YzAuNjcsMCAxLjMyNywtMC4zODYgMS42MjMsLTEuMDQzYzAuMDEzLC0wLjAxMyAwLjAxMywtMC4wMjYgMC4wMTMsLTAuMDM5bDEyLjIxMiwtMjYuNDA3YzAuNjE4LC0xLjMwMSAxLjkxOSwtMi4wNzQgMy4yNzEsLTIuMDc0YzAuNTAzLDAgMS4wMzEsMC4xMDMgMS41MiwwLjMzNWMxLjgwNCwwLjgzOCAyLjU5LDIuOTYzIDEuNzc4LDQuNzc5bC0wLjAxMywwLjAyNmwtMTIuMTA4LDI2LjE2MmMwLDAgMC4wMTMsMCAwLjAxMywwLjAxM2MtMC4wMzksMC4wNjQgLTAuMDc4LDAuMTE2IC0wLjEwNCwwLjE4bC0wLjAzOCwwLjA5MWMtMC4zODcsMC44ODggMC4wMTMsMS45MTkgMC44ODksMi4zMzFjMC4yNDQsMC4xMTYgMC41MDIsMC4xNjcgMC43NDcsMC4xNjdjMC42NywwIDEuMzE0LC0wLjM3MyAxLjYxLC0xLjAxN2wwLjAxMywwbDEwLjgwNywtMjMuMzY3YzAuNjE5LC0xLjMwMSAxLjkyLC0yLjA3NCAzLjI3MiwtMi4wNzRjMC41MDMsMCAxLjAzMSwwLjEwMyAxLjUyLDAuMzM1YzEuODA0LDAuODM3IDIuNTg5LDIuOTYzIDEuNzc4LDQuNzc5bC0wLjAxMywwLjAyNmwtNi4xNDQsMTMuMjY4bDEwLjM0MywtMTAuMzMxYzAuOTUzLC0wLjk0MSAyLjA4NywtMS41NTkgMy4yODUsLTEuOTA3YzEuMTg1LC01LjA0OSAtMS4yNzUsLTEwLjM5NSAtNi4xMTksLTEyLjYzNmMtMC43ODUsLTAuMzYxIC0xLjYxLC0wLjYzMSAtMi40NDcsLTAuODEyYy0wLjg4OSwtMi45MjQgLTIuOTc2LC01LjQ2MiAtNS45MzgsLTYuODRjLTEuNDY5LC0wLjY4MyAtMy4wNCwtMS4wMyAtNC42NjMsLTEuMDNjLTIuMjgsMCAtNC40NTcsMC43MDggLTYuMjc0LDEuOTQ1Yy0wLjM2LC0wLjIxOSAtMC43NDcsLTAuNDI1IC0xLjE0NiwtMC42MTljLTEuNDY5LC0wLjY4MiAtMy4wNCwtMS4wMyAtNC42NjMsLTEuMDNjLTQuMjc3LDAgLTguMjA2LDIuNDk5IC0xMC4wMzUsNi4zNjNsLTguNzcyLDE4Ljk2MmMtMy44NjQsLTUuOTEzIC02LjUwNSwtMTIuNDE4IC03Ljg5NiwtMTkuMjg0bDU3Ljk5MiwtMzEuNTk4bDUyLjQ5MSwyMi44MjZjLTEuMjQ5LDI5LjExMiAtMjQuODc0LDUyLjQ5MiAtNTQuMDc2LDUzLjM4bDYuODI3LC0xNC43NDljMC4wMTMsLTAuMDI1IDAuMDI2LC0wLjA2NCAwLjAzOSwtMC4wOWwtMTUuMzI5LDE1LjMxNmwtMy4xODIsNi44NjZsLTAuMDEyLDBjLTEuNjg4LDMuNjMyIC0zLjM4OCw3LjMyOSAtNC44ODIsMTAuNTVsNS41OSw1LjU5YzAuMjU4LC0wLjQ4OSAwLjUxNSwtMC45NzkgMC43NDcsLTEuNDk0bDUuMTY2LC0xMS4xNTVjMC4wNjQsLTAuMTE2IDAuMTE2LC0wLjIzMiAwLjE4LC0wLjM2MWwxLjM5MSwtMy4wMDFjMC41OCwwLjAxMyAxLjE1OSwwLjA1MSAxLjc1MiwwLjA1MWM1LjkyNSwwIDExLjY3MSwtMC44MzcgMTcuMTE5LC0yLjM3YzAuODI1LDQuODk1IDIuODczLDE1LjAyIDcuMTYyLDI1LjUxOGM4LjA1MSwxOS42ODMgMjAuMTIxLDMwLjg5IDM0LjkyMiwzMi4zOTdjMC4xMjksMC4wMTMgMC4yNTcsMC4wMjUgMC4zODYsMC4wMjVjMC45MTUsMCAxLjgxNiwtMC4zMzQgMi41MTIsLTAuOTY2YzAuNzg2LC0wLjcwOCAxLjIzNywtMS43MTMgMS4yMzcsLTIuNzY5bDAsLTExNS4xNmMwLjAxMywtMTguNDA3IC03LjkzNSwtMzUuMDUgLTIwLjU4NSwtNDYuNjNabS05OC40NTIsNDkuOTI4Yy0wLjA2NCwtMS4wODIgLTAuMTI5LC0yLjE1MSAtMC4xMjksLTMuMjMzYzAsLTMwLjggMjUuMDU0LC01NS44NTQgNTUuODU0LC01NS44NTRjMTIuMzE0LDAgMjMuNzAxLDQuMDE5IDMyLjk1LDEwLjc5NWwtODguNjc1LDQ4LjI5MlptNjcuMzU3LC0yOC4xNzJsMjcuNDI0LC0xNC45NDJjOS4wNDMsOC44NjIgMTUuMDk3LDIwLjc2NSAxNi40ODgsMzQuMDMzbC00My45MTIsLTE5LjA5MVptNDQuMjIxLDEzNS42MDNjLTIzLjE4NiwtNi4zNjQgLTMwLjMwOSwtNDQuMjk5IC0zMS41NTksLTUyLjE5NmMxMy41MjUsLTUuNjQyIDI0LjY4MSwtMTUuODMxIDMxLjU1OSwtMjguNjYxbDAsODAuODU3WiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6bm9uemVybzsiLz48L2c+PC9zdmc+",'" alt="').concat(M.textStepThreeTitle,'" /></span><span class="cb-step-text"><span class="cb-step-name">').concat(M.textStepThreeTitle,'</span><span class="cb-step-desc">').concat(M.textStepThreeDesc,'</span></span></div>\n                        <div id="cb-step-4" class="cb-step"><span class="cb-step-icon"><img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxOTEgMTgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik0yOS45NTMsNDcuNzM4YzEwLjk5OCwwIDE5LjkzOSwtOC45NDEgMTkuOTM5LC0xOS45MzljMCwtMTAuOTk4IC04Ljk0MSwtMTkuOTM5IC0xOS45MzksLTE5LjkzOWMtMTAuOTk4LDAgLTE5LjkzOSw4Ljk0MSAtMTkuOTM5LDE5LjkzOWMwLDEwLjk4MyA4Ljk0MSwxOS45MzkgMTkuOTM5LDE5LjkzOVptMCwtMzEuMjM1YzYuMjI5LDAgMTEuMjk2LDUuMDUyIDExLjI5NiwxMS4yOTZjMCw2LjIyOSAtNS4wNTIsMTEuMjk2IC0xMS4yOTYsMTEuMjk2Yy02LjI0NCwwIC0xMS4yOTYsLTUuMDUyIC0xMS4yOTYsLTExLjI5NmMwLjAxNSwtNi4yNDQgNS4wNjcsLTExLjI5NiAxMS4yOTYsLTExLjI5NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTYwLjQxMywxMDUuNTQzbDAsLTQwLjY1M2MwLC0xMS42NjggLTUuNDk5LC0xMi45MiAtNy44NTMsLTEyLjkybC00NC43MDcsMGMtMi4zNjksMCAtNy44NTMsMS4yNTIgLTcuODUzLDEyLjkybDAsNDAuNjM4YzAsMS4zMjYgMC40NzcsNy4zMDIgOC43NDgsOC43MzNsMCw0Ni43MzNjMCw4LjgzNyA2LjU4NiwxMy40NTYgMTMuMDg0LDEzLjQ1NmMzLjAxLDAgNi4wMiwtMS4wMTMgOC4zODksLTIuOTVjMi4zNywxLjk1MiA1LjM4LDIuOTUgOC4zOSwyLjk1YzYuNDk4LDAgMTMuMDg0LC00LjYxOSAxMy4wODQsLTEzLjQ1NmwwLC00Ni43MzNjOC4yNDEsLTEuNDE2IDguNzE4LC03LjM5MiA4LjcxOCwtOC43MThabS04LjY1OCwtMC4yNTNjLTAuMTM0LDAuMDc0IC0wLjM1OCwwLjE2NCAtMC43LDAuMjY4Yy0wLjc0NiwtMS4yODIgLTIuMTMxLC0yLjE0NiAtMy43MjYsLTIuMTQ2Yy0yLjM4NCwwIC00LjMyMiwxLjkzNyAtNC4zMjIsNC4zMjJsMCw1My4yNmMwLDQuNTc1IC0zLjY5NSw0Ljc5OCAtNC40MjYsNC43OThjLTAuNTk2LDAgLTMuMTg5LC0wLjE3OSAtMy45NzgsLTIuODAyYzAuMDU5LC0wLjUzNiAwLjA4OSwtMS4wODcgMC4wODksLTEuNjY5bDAsLTQyLjE4N2MwLC0yLjM4NSAtMS45MzcsLTQuMzIyIC00LjMyMiwtNC4zMjJjLTAuMDU5LDAgLTAuMTA0LDAuMDE1IC0wLjE2MywwLjAxNWMtMC4wNiwwIC0wLjEwNSwtMC4wMTUgLTAuMTY0LC0wLjAxNWMtMi4zODUsMCAtNC4zMjIsMS45MzcgLTQuMzIyLDQuMzIybDAsNDIuMTg3YzAsMC41NjcgMC4wMywxLjEzMyAwLjA4OSwxLjY2OWMtMC43ODksMi42MjMgLTMuMzgyLDIuODAyIC0zLjk3OCwyLjgwMmMtMC43NDYsMCAtNC40MjYsLTAuMjM4IC00LjQyNiwtNC43OThsMCwtNTMuMjZjMCwtMi4zODUgLTEuOTM4LC00LjMyMiAtNC4zMjIsLTQuMzIyYy0xLjU5NCwwIC0yLjk2NSwwLjg2NCAtMy43MjUsMi4xNDZjLTAuMzQzLC0wLjEwNCAtMC41NjcsLTAuMTk0IC0wLjcwMSwtMC4yNjhsMCwtNDAuMzg1YzAsLTIuMTMxIDAuMjUzLC0zLjUxNyAwLjQ3NywtNC4yNzdsNDIuMTU4LDBjMC4yMjQsMC43NiAwLjQ3NywyLjE0NiAwLjQ3Nyw0LjI3N2wtMC4wMTUsNDAuMzg1WiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMTU5Ljc5NSw0Ny43MzhjMTAuOTk4LDAgMTkuOTM5LC04Ljk0MSAxOS45MzksLTE5LjkzOWMwLC0xMC45OTggLTguOTQxLC0xOS45MzkgLTE5LjkzOSwtMTkuOTM5Yy0xMC45OTgsMCAtMTkuOTM5LDguOTQxIC0xOS45MzksMTkuOTM5Yy0wLjAxNSwxMC45ODMgOC45NDEsMTkuOTM5IDE5LjkzOSwxOS45MzlabTAsLTMxLjIzNWM2LjIyOSwwIDExLjI5Niw1LjA1MiAxMS4yOTYsMTEuMjk2YzAsNi4yMjkgLTUuMDUyLDExLjI5NiAtMTEuMjk2LDExLjI5NmMtNi4yMjksMCAtMTEuMjk2LC01LjA1MiAtMTEuMjk2LC0xMS4yOTZjMCwtNi4yNDQgNS4wNTIsLTExLjI5NiAxMS4yOTYsLTExLjI5NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTE4Mi4zODcsNTEuOTdsLTQ0LjcwNywwYy0yLjM2OSwwIC03Ljg1MywxLjI1MiAtNy44NTMsMTIuOTJsMCw0MC42MzhjMCwxLjMyNiAwLjQ3Nyw3LjMwMiA4LjczMyw4LjcxOGwwLDQ2LjczM2MwLDguODM3IDYuNTg2LDEzLjQ1NiAxMy4wODQsMTMuNDU2YzMuMDEsMCA2LjAyLC0xLjAxMyA4LjM4OSwtMi45NWMyLjM3LDEuOTUyIDUuMzgsMi45NSA4LjM5LDIuOTVjNi40OTgsMCAxMy4wODQsLTQuNjE5IDEzLjA4NCwtMTMuNDU2bDAsLTQ2LjcxOGM4LjI1NiwtMS40MTYgOC43MzMsLTcuMzkyIDguNzMzLC04LjcxOGwwLC00MC42NTNjMCwtMTEuNjY4IC01LjQ5OSwtMTIuOTIgLTcuODUzLC0xMi45MlptLTAuNzksNTMuMzJjLTAuMTM0LDAuMDc0IC0wLjM1OCwwLjE2NCAtMC43MDEsMC4yNjhjLTAuNzQ1LC0xLjI4MiAtMi4xMzEsLTIuMTQ2IC0zLjcyNSwtMi4xNDZjLTIuMzg0LDAgLTQuMzIyLDEuOTM3IC00LjMyMiw0LjMyMmwwLDUzLjI2YzAsNC41NzUgLTMuNjk1LDQuNzk4IC00LjQyNiw0Ljc5OGMtMC41OTYsMCAtMy4xODksLTAuMTc5IC0zLjk3OSwtMi44MDJjMC4wNiwtMC41MzYgMC4wOSwtMS4wODcgMC4wOSwtMS42NjlsMCwtNDIuMTg3YzAsLTIuMzg1IC0xLjkzNywtNC4zMjIgLTQuMzIyLC00LjMyMmMtMC4wNTksMCAtMC4xMDQsMC4wMTUgLTAuMTY0LDAuMDE1Yy0wLjA1OSwwIC0wLjEwNCwtMC4wMTUgLTAuMTY0LC0wLjAxNWMtMi4zODQsMCAtNC4zMjEsMS45MzcgLTQuMzIxLDQuMzIybDAsNDIuMTg3YzAsMC41NjcgMC4wMywxLjEzMyAwLjA4OSwxLjY2OWMtMC43OSwyLjYyMyAtMy4zODMsMi44MDIgLTMuOTc5LDIuODAyYy0wLjc0NSwwIC00LjQyNiwtMC4yMzggLTQuNDI2LC00Ljc5OGwwLC01My4yNmMwLC0yLjM4NSAtMS45MzcsLTQuMzIyIC00LjMyMSwtNC4zMjJjLTEuNTk1LDAgLTIuOTY2LDAuODY0IC0zLjcyNiwyLjE0NmMtMC4zMjcsLTAuMTA0IC0wLjU2NiwtMC4xOTQgLTAuNywtMC4yNjhsMCwtNDAuMzg1YzAsLTIuMTMxIDAuMjUzLC0zLjUxNyAwLjQ3NywtNC4yNzdsNDIuMTU4LDBjMC4yMjMsMC43NiAwLjQ3NywyLjE0NiAwLjQ3Nyw0LjI3N2wwLDQwLjM4NWwtMC4wMTUsMFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTEyOS4zMzUsMTI4LjkwOWwtMTAuMjM4LC0xMC4yMzdjLTEuNjgzLC0xLjY4NCAtNC40MjUsLTEuNjg0IC02LjEwOSwwYy0xLjY4NCwxLjY4NCAtMS42ODQsNC40MjYgMCw2LjEyNGwzLjE0NCwzLjE0NWwtNDEuNjgxLDBsMy4xNDQsLTMuMTQ1YzEuNjg0LC0xLjY4MyAxLjY4NCwtNC40MjUgMCwtNi4xMjRjLTEuNjg0LC0xLjY4NCAtNC40MjYsLTEuNjg0IC02LjExLDBsLTkuNTY3LDkuNTY3Yy0xLjU5NCwwLjY0MSAtMi43MjcsMi4xOSAtMi43MjcsNC4wMDhjMCwxLjU1IDAuODIsMi44OTEgMi4wNDIsMy42NjZsMTAuMjY3LDEwLjI2OGMwLjg1LDAuODQ5IDEuOTUyLDEuMjY3IDMuMDU1LDEuMjY3YzEuMTAzLDAgMi4yMjEsLTAuNDE4IDMuMDU1LC0xLjI2N2MxLjY4NCwtMS42ODQgMS42ODQsLTQuNDI2IDAsLTYuMTI1bC0zLjQ3MiwtMy40NzJsNDIuMzUyLDBsLTMuNDczLDMuNDcyYy0xLjY4NCwxLjY4NCAtMS42ODQsNC40MjYgMCw2LjEyNWMwLjg1LDAuODQ5IDEuOTUzLDEuMjY3IDMuMDU1LDEuMjY3YzEuMTAzLDAgMi4yMjEsLTAuNDE4IDMuMDU1LC0xLjI2N2wxMC43LC0xMC43YzEuNTA1LC0xLjUwNSAxLjY2OSwtMy44MyAwLjQ5MiwtNS41MTRjLTAuMjgzLC0wLjQwMiAtMC42MTEsLTAuNzYgLTAuOTg0LC0xLjA1OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg==",'" alt="').concat(M.textStepFourTitle,'" /></span><span class="cb-step-text"><span class="cb-step-name">').concat(M.textStepFourTitle,'</span><span class="cb-step-desc">').concat(M.textStepFourDesc,'</span></span></div>\n                        <div id="cb-step-5" class="cb-step"><span class="cb-step-icon"><img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxOTEgMTgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik04MS43MzksNzIuNzg3YzAsNy44NDIgNi4zNzksMTQuMjM0IDE0LjIzNCwxNC4yMzRjNy44NTUsMCAxNC4yMzQsLTYuMzc5IDE0LjIzNCwtMTQuMjM0YzAsLTcuODQyIC02LjM3OSwtMTQuMjM0IC0xNC4yMzQsLTE0LjIzNGMtNy44NTUsMCAtMTQuMjM0LDYuMzggLTE0LjIzNCwxNC4yMzRabTE0LjIzNCwtOC4xMzJjNC40ODgsMCA4LjEzMiwzLjY0NCA4LjEzMiw4LjEzMmMwLDQuNDg5IC0zLjY0NCw4LjEzMiAtOC4xMzIsOC4xMzJjLTQuNDg4LDAgLTguMTMyLC0zLjY0MyAtOC4xMzIsLTguMTMyYzAsLTQuNTAxIDMuNjQ0LC04LjEzMiA4LjEzMiwtOC4xMzJaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0xNzkuODksODEuMDdsLTgyLjY0NCwtODAuMjFjLTEuMTg1LC0xLjE0NyAtMy4wNjMsLTEuMTQ3IC00LjI0OCwwbC04Mi42NDQsODAuMjFjLTAuODk1LDAuODcgLTEuMTcyLDIuMTgyIC0wLjcwNiwzLjMyOWMwLjQ2NywxLjE0NyAxLjU4OSwxLjkwNCAyLjgyNCwxLjkwNGwyMi4xNzcsMGwwLDkyLjk1NmMwLDEuNjg5IDEuMzYyLDMuMDUxIDMuMDUxLDMuMDUxbDExNC44NDQsMGMxLjY4OSwwIDMuMDUxLC0xLjM2MiAzLjA1MSwtMy4wNTFsMCwtOTIuOTU2bDIyLjE2NCwwYzEuMjQ4LDAgMi4zNTgsLTAuNzU3IDIuODI0LC0xLjkwNGMwLjQ3OSwtMS4xNDcgMC4yMDIsLTIuNDU5IC0wLjY5MywtMy4zMjlabS05OS4zMzYsMTUuMjk0bDMxLjE0MSwwYzAuMDI1LDAuMjUyIDAuMDM4LDAuNjA1IDAuMDM4LDEuMDU5bDAsMzEuMjA0Yy0wLjEwMSwwLjA2MyAtMC4yOSwwLjE1MSAtMC42MDYsMC4yMzljLTAuNTI5LC0wLjkyIC0xLjUsLTEuNTYzIC0yLjY0NywtMS41NjNjLTEuNjksMCAtMy4wNTEsMS4zNjEgLTMuMDUxLDMuMDUxbDAsMzguMzY1YzAsMy4zNTQgLTIuNzExLDMuNTE3IC0zLjI1MywzLjUxN2MtMC40NDEsMCAtMi4zNTgsLTAuMTM4IC0yLjkzOCwtMi4wNjdjMC4wMzgsLTAuMzkxIDAuMDYzLC0wLjc5NCAwLjA2MywtMS4yMTFsMCwtMzAuMzg0YzAsLTEuNjg5IC0xLjM2MSwtMy4wNTEgLTMuMDUxLC0zLjA1MWMtMC4wMzcsMCAtMC4wNzUsMC4wMTMgLTAuMTI2LDAuMDEzYy0wLjAzOCwwIC0wLjA3NSwtMC4wMTMgLTAuMTI2LC0wLjAxM2MtMS42ODksMCAtMy4wNTEsMS4zNjIgLTMuMDUxLDMuMDUxbDAsMzAuMzg0YzAsMC40MTcgMC4wMjUsMC44MiAwLjA2MywxLjIxMWMtMC41OCwxLjk0MSAtMi40OTYsMi4wNjcgLTIuOTM3LDIuMDY3Yy0wLjU0MywwIC0zLjI1MywtMC4xNjMgLTMuMjUzLC0zLjUxN2wwLC0zOC4zNjVjMCwtMS42OSAtMS4zNjIsLTMuMDUxIC0zLjA1MSwtMy4wNTFjLTEuMTM1LDAgLTIuMTE4LDAuNjMgLTIuNjQ4LDEuNTYzYy0wLjMwMiwtMC4wODggLTAuNDkyLC0wLjE3NiAtMC42MDUsLTAuMjM5bDAsLTMxLjIwNGMwLC0wLjQ2NyAwLjAxMywtMC44MDcgMC4wMzgsLTEuMDU5Wm0xNS41OTUsNzkuODE5YzAuMDEzLDAuMDEyIDAuMDI2LDAuMDI1IDAuMDM4LDAuMDM3bC0wLjA3NSwwYzAuMDEyLC0wLjAxMiAwLjAyNSwtMC4wMjUgMC4wMzcsLTAuMDM3Wm01Ni4zOTUsLTk1Ljk3Yy0xLjY5LDAgLTMuMDUxLDEuMzYyIC0zLjA1MSwzLjA1MWwwLDkyLjk1NmwtNDEuMjc4LDBjMS45NjcsLTEuNjEzIDMuMzI4LC00LjEyMiAzLjMyOCwtNy41MDFsMCwtMzMuNzI2YzQuNTc3LC0wLjc4MSA2LjI5MiwtMy41NjggNi4yOTIsLTYuMjE1bDAsLTMxLjM1NWMwLC00Ljc1NCAtMS44NzksLTcuMTYyIC01LjU5OCwtNy4xNjJsLTMyLjE4OCwwYy0zLjcwNiwwIC01LjU5NywyLjQwOCAtNS41OTcsNy4xNjJsMCwzMS4zNDJjMCwyLjY0OCAxLjcxNCw1LjQzNCA2LjI5MSw2LjIxNmwwLDMzLjcyNWMwLDMuMzc5IDEuMzYyLDUuOTAxIDMuMzI4LDcuNTAybC00My4zMiwwbDAsLTkyLjk0NGMwLC0xLjY4OSAtMS4zNjEsLTMuMDUxIC0zLjA1MSwtMy4wNTFsLTE3LjcwMSwwbDc1LjExNywtNzIuOTFsNzUuMTE2LDcyLjkxbC0xNy42ODgsMFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg==",'" alt="').concat(M.textStepFiveTitle,'" /></span><span class="cb-step-text"><span class="cb-step-name">').concat(M.textStepFiveTitle,'</span><span class="cb-step-desc">').concat(M.textStepFiveDesc,"</span></span></div>\n                    </div>");return!0===this.options.displayCases&&(L+='\n                    <div id="cb-data" class="cb-content-part">\n                        <span id="cb-confirmed-number"><span class="cb-number">'.concat(new Intl.NumberFormat("en-US").format(M.casesConfirmed),'</span><span class="cb-number-desc">').concat(M.textConfirmed,'</span></span>\n                        <span id="cb-recovered-number"><span class="cb-number">').concat(new Intl.NumberFormat("en-US").format(M.casesRecovered),'</span><span class="cb-number-desc">').concat(M.textRecovered,"</span></span>\n                    </div>")),L+='\n                </div>\n                <a href="javascript:void(0);" id="cb-close-notice" class="cb-close-icon" aria-label="'.concat(M.textClose,'"></a>\n            </div>  \n        ')},this.display=function(){var M=this,t=this.getTemplate(this.options),L=(new DOMParser).parseFromString(t,"text/html").getElementById("coronabar");document.body.appendChild(L),document.body.classList.add("coronabar-active");var s=new Event("display.coronabar");document.dispatchEvent(s);var j=document.getElementById("cb-close-notice");"null"!==j&&j.addEventListener("click",(function(t){t.preventDefault(),M.hide()}))},this.hide=function(){var M=document.getElementById("coronabar");if(M){M.style.display="none";var t=new Event("hide.coronabar");document.dispatchEvent(t),this.saveToLocal(!1),M.remove()}},this.isEmpty=function(M){for(var t in M)if(M.hasOwnProperty(t))return!1;return JSON.stringify(M)===JSON.stringify({})},this.hexToRgba=function(M,t){var L=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(M);if(!L)return null;var s=parseInt(L[1],16),j=parseInt(L[2],16),e=parseInt(L[3],16);return t?"rgba("+s+", "+j+", "+e+", "+t+")":"rgb("+s+", "+j+", "+e+")"},this.maybeDisplay=function(){var M=this.getFromLocal();return!(!this.isEmpty(M)&&!1===M.display)},this.init=function(){if(!this.maybeDisplay())return!1;var M=new Event("load.coronabar");document.dispatchEvent(M),this.mergeOptions(),this.getData()}};window.addEventListener("load",(function(){j.init()}),!1)}]);