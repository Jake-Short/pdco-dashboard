(this["webpackJsonppdco-dashboard"]=this["webpackJsonppdco-dashboard"]||[]).push([[0],{34:function(e,a,t){e.exports=t(46)},39:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),o=t.n(c);t(39),t(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(14),i=t(11),m=t(32),u=(Object(m.a)({palette:{type:"dark",background:{default:"black"}}}),Object(m.a)({palette:{type:"light"}}),Object(m.a)({palette:{type:"dark",primary:{main:"#375a7f"},secondary:{main:"#444"},error:{main:"#E74C3C"},background:{default:"black"}}})),s=(Object(m.a)({palette:{type:"dark",primary:{main:"#DF691A"},secondary:{main:"#4E5D6C"},error:{main:"#d9534f"},background:{default:"#2B3E50"}}}),u),g=t(61),d=t(62),b=t(60),f=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"},image:{width:"100%",height:"100%",backgroundSize:"50% auto",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}})),p=function(e){var a=f();return r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.image,style:{backgroundImage:"url(".concat(e.imageUrl,")")}}))},k=t(12),h=Object(b.a)((function(e){return Object(k.a)({container:{width:"100vw",height:"95vh",display:"grid",gridTemplateRows:"repeat(10,minmax(0px,1fr))",gridTemplateColumns:"repeat(10,minmax(0px,1fr))",gridTemplateAreas:"\n  'imageLeft imageLeft title     title     title     title     title    title      imageRight imageRight'\n  'imageLeft imageLeft clocks    clocks    clocks    clocks    clocks   clocks     imageRight imageRight'\n  'neoCount  neoCount  neoCount  neoCount  neoCount  sentry    sentry   programs   programs   programs'\n  'neoCount  neoCount  neoCount  neoCount  neoCount  sentry    sentry   programs   programs   programs'\n  'neoCount  neoCount  neoCount  neoCount  neoCount  sentry    sentry   programs   programs   programs'\n  'recentTab recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab  futureTab'\n  'recentTab recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab  futureTab'\n  'recentTab recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab  futureTab'\n  'recentTab recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab  futureTab'\n  'recentTab recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab  futureTab'\n",textAlign:"center",text:"center",border:"15px solid ".concat("rgba(100,100,100,0.3)"),"& > div":{backgroundColor:"transparent",border:"3px solid ".concat("rgba(100,100,100,0.3)"),boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center"}},imageLeft:{gridArea:"imageLeft",backgroundColor:"pink"},imageRight:{gridArea:"imageRight",backgroundColor:"red"},title:{gridArea:"title",backgroundColor:"blue",fontSize:20,fontWeight:"bold"},clocks:{gridArea:"clocks",backgroundColor:"green"},neoCount:{gridArea:"neoCount",backgroundColor:"cyan"},sentry:{gridArea:"sentry",backgroundColor:"purple"},programs:{gridArea:"programs",backgroundColor:"purple"},recentTab:{gridArea:"recentTab",backgroundColor:"brown"},futureTab:{gridArea:"futureTab",backgroundColor:"yellow"}},"@media (max-width: ".concat(600,"px)"),{container:{gridTemplateRows:"repeat(9,minmax(0px,1fr))",gridTemplateColumns:"repeat(5,minmax(0px,1fr))",gridTemplateAreas:"\n  'imageLeft title     title     title     imageRight'\n  'clocks    clocks    clocks    clocks    clocks '\n  'clocks    clocks    clocks    clocks    clocks '\n  'sentry    sentry    sentry    sentry    sentry '\n  'sentry    sentry    sentry    sentry    sentry '\n  'programs  programs  programs  programs  programs'\n  'neoCount  neoCount  neoCount  neoCount  neoCount'\n  'recentTab recentTab recentTab recentTab recentTab'\n  'futureTab futureTab futureTab futureTab  futureTab'\n"}})}),{name:"main-ui"}),T=Object(b.a)((function(e){return Object(k.a)({container:{width:"100%",height:"100%",flex:1,display:"grid",gridTemplateRows:"repeat(1,minmax(0px,1fr))",gridTemplateColumns:"repeat(7,minmax(0px,1fr))",gridTemplateAreas:"'clock1 clock2 clock3 clock4 clock5 clock6 clock7'","& > div":{display:"flex",justifyContent:"center",alignItems:"center"}},clock1:{gridArea:"clock1"},clock2:{gridArea:"clock2"},clock3:{gridArea:"clock3"},clock4:{gridArea:"clock4"},clock5:{gridArea:"clock5"},clock6:{gridArea:"clock6"},clock7:{gridArea:"clock7"}},"@media (max-width: ".concat(600,"px)"),{container:{gridTemplateRows:"repeat(4,minmax(0px,1fr))",gridTemplateColumns:"repeat(2,minmax(0px,1fr))",gridTemplateAreas:"'clock1 clock2' 'clock3 clock4' 'clock5 clock6' 'clock7 .'"}})}),{name:"clocks"}),E=Object(b.a)((function(e){return Object(k.a)({container:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",border:"solid 1px ".concat("rgba(100,100,100,0.3)"),"& > div.xxx":{flex:1,display:"flex",justifyContent:"center",alignItems:"center",zIndex:2,color:"white",fontSize:14,fontWeight:"bold"},"&:hover":{color:"green",transform:"scale(2) translate(0%, 0%)",zIndex:5,"& div.yyy":{opacity:.9,zIndex:6},"& div.xxx ":{textShadow:"1px 1px 1px rgba(0,0,0,1)",zIndex:7}}},flagImage:{padding:5,boxSizing:"border-box",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.2,zIndex:1}},"@media (max-width: ".concat(600,"px)"),{container:{flexDirection:"row"}})}),{name:"clock"}),x=function(e){var a=E();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:"xxx"},e.location),r.a.createElement("div",{className:"xxx"},e.time),r.a.createElement("div",{className:a.flagImage+" yyy",style:{backgroundImage:"url(".concat(e.flagUrl,")")}})))},v=function(){var e=T();return r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.clock1},r.a.createElement(x,{location:"Hawaii",time:"12:00",flagUrl:"images/hawaii-flag.png"})),r.a.createElement("div",{className:e.clock2},r.a.createElement(x,{location:"Arizona",time:"12:00",flagUrl:"images/arizona-flag.png"})),r.a.createElement("div",{className:e.clock3},r.a.createElement(x,{location:"DC",time:"12:00",flagUrl:"images/dc-flag.svg"})),r.a.createElement("div",{className:e.clock4},r.a.createElement(x,{location:"Santiago",time:"12:00",flagUrl:"images/chile-flag.png"})),r.a.createElement("div",{className:e.clock5},r.a.createElement(x,{location:"UTC",time:"12:00",flagUrl:"images/utc-flag.png"})),r.a.createElement("div",{className:e.clock6},r.a.createElement(x,{location:"RSA",time:"12:00",flagUrl:"images/rsa-flag.png"})),r.a.createElement("div",{className:e.clock7},r.a.createElement(x,{location:"Perth",time:"12:00",flagUrl:"images/aus-flag.png"})))},y=t(23),C=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},triangleSvg:{width:"100%",height:"100%",position:"absolute",top:0,bottom:0,left:0,right:0},score:{marginTop:30,color:"black",fontSize:30,flex:1,zIndex:10},title:{fontSize:12,fontWeight:"bold",position:"absolute",top:10,left:0,right:0,height:"33%"}}})),w=["green","orange","red"],N=function(){var e=C(),a=Object(n.useState)(0),t=Object(y.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(0),i=Object(y.a)(l,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=Math.round(100*Math.random());o(e)}),3e3);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){c<33?u(0):c<66?u(1):c<100&&u(2)}),[c]),r.a.createElement("div",{className:e.container},r.a.createElement("svg",{className:e.triangleSvg,height:"100",width:"100px",viewBox:"".concat(-40," ").concat(-40," ").concat(180," ").concat(180),onClick:function(){return u((function(e){return(e+1)%w.length}))}},r.a.createElement("g",null,r.a.createElement("path",{d:"M 50,0 L 0,100 L 100,100 Z",fill:"white",stroke:w[m],strokeWidth:10}))),r.a.createElement("div",{className:e.score},c),r.a.createElement("div",{className:e.title},"SENTRY STATUS"))},A=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"},example:{color:"red"},imagePlaceholder:{width:"100%",height:"100%",backgroundImage:"url(images/world-placeholder.png)",backgroundSize:"80% 80%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}})),j=function(){var e=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imagePlaceholder})))},O=function(){var e=h();return r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imageLeft},r.a.createElement(p,{imageUrl:"images/pdco-logo.jpg"})),r.a.createElement("div",{className:e.imageRight},r.a.createElement(p,{imageUrl:"images/nasa-logo.png"})),r.a.createElement("div",{className:e.title}," Planetary Defense Coordination Office "),r.a.createElement("div",{className:e.clocks},r.a.createElement(v,null)),r.a.createElement("div",{className:e.neoCount},"NEOCOUNT"),r.a.createElement("div",{className:e.sentry},r.a.createElement(N,null)),r.a.createElement("div",{className:e.programs},r.a.createElement(j,null)),r.a.createElement("div",{className:e.recentTab},"RECENTTAB"),r.a.createElement("div",{className:e.futureTab},"FUTURETAB"))},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About Page"),r.a.createElement("p",null,"This is my about page!"))},S=Object(b.a)((function(e){return{container:{}}}),{name:"app-entry"}),I=Object(b.a)((function(e){return{container:{"& ul":{margin:0,"& li":{color:"white",display:"inline-block",margin:"0px 10px"}}}}})),z=function(){var e=I();return r.a.createElement("div",{className:"simple-menu-container "+e.container},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},"About"))))},U=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",backgroundColor:e.palette.background.default}}}),{name:"layout"}),L=function(e){var a=U();return r.a.createElement("div",{className:"layout-container "+a.container},e.children)};o.a.render(r.a.createElement((function(){var e=S();return r.a.createElement("div",{className:e.container},r.a.createElement(g.a,{theme:s},r.a.createElement(d.a,null),r.a.createElement(L,null,r.a.createElement(l.a,{basename:"/pdco-dashboard/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(R,null))),r.a.createElement(z,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.06cf74bb.chunk.js.map