(this["webpackJsonppdco-dashboard"]=this["webpackJsonppdco-dashboard"]||[]).push([[0],{57:function(e,t,a){e.exports=a(75)},62:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c);a(62),a(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(30),o=a(9),m=a(51),s=(Object(m.a)({palette:{type:"dark",background:{default:"black"}}}),Object(m.a)({palette:{type:"light"}}),Object(m.a)({palette:{type:"dark",primary:{main:"#375a7f"},secondary:{main:"#444"},error:{main:"#E74C3C"},background:{default:"black"}}})),u=(Object(m.a)({palette:{type:"dark",primary:{main:"#DF691A"},secondary:{main:"#4E5D6C"},error:{main:"#d9534f"},background:{default:"#2B3E50"}}}),s),d=a(124),g=a(125),f=a(11),p=a(18),h=a(19),b=a(114),E=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",backgroundColor:"black"},image:{width:"100%",height:"100%",backgroundSize:"contain",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}})),k=function(e){var t=E();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.image,style:{backgroundImage:"url(".concat(e.imageUrl,")")}}))},v=a(20),x=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],y=0,w=1,j=2,A=3,T=4,C=5,O=6,D=7,S=8,N=9,z=10,U=11,I=Object(b.a)((function(e){return Object(v.a)({container:{width:"100vw",height:"95vh",display:"grid",gridTemplateRows:"minmax(0px,.5fr) minmax(0px,.5fr) minmax(0px,1.5fr) minmax(0px,3fr)",gridTemplateColumns:"repeat(8,minmax(0px,1fr))",gridTemplateAreas:"\n  'imageLeft title     title     title     title     title    title      imageRight'\n  'imageLeft clocks    clocks    clocks    clocks    clocks   clocks     imageRight'\n  'neoCount  neoCount  neoCount  neoCount  sentry    sentry   programs   programs'\n  'recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab'\n",gridGap:20,textAlign:"center",text:"center",border:"".concat(20,"px solid ").concat("transparent"),"& > div":{backgroundColor:"#181b2e",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:1}},imageLeft:{gridArea:"imageLeft",backgroundColor:"pink"},imageRight:{gridArea:"imageRight",backgroundColor:"red"},title:{gridArea:"title",backgroundColor:"blue",fontSize:20,fontWeight:"bold",display:"flex",position:"relative",flexDirection:"column","& > div":{paddingBottom:2},"& > .shortTitle":{display:"none",paddingBottom:2},"& > .date":{fontSize:12}},date:{gridArea:"date",backgroundColor:"blue",fontSize:20,fontWeight:"bold"},clocks:{gridArea:"clocks",backgroundColor:"green"},neoCount:{gridArea:"neoCount",backgroundColor:"cyan"},sentry:{gridArea:"sentry",backgroundColor:"purple"},programs:{gridArea:"programs",backgroundColor:"purple"},recentTab:{gridArea:"recentTab",backgroundColor:"brown"},futureTab:{gridArea:"futureTab",backgroundColor:"yellow"}},"@media (max-width: ".concat(730,"px)"),{container:{height:"auto",gridGap:10,gridTemplateRows:"\n  minmax(0px,70px)\n  minmax(0px,120px)\n  minmax(0px,150px)\n  minmax(0px,120px)\n  minmax(0px,350px)\n  minmax(0px,350px)\n",gridTemplateColumns:"\n  minmax(0px,1fr) minmax(0px,2fr) minmax(0px,2fr) minmax(0px,1fr)",gridTemplateAreas:"\n  'imageLeft title     title     imageRight'\n  'clocks    clocks    clocks    clocks '\n  'sentry    sentry    programs  programs '\n  'neoCount  neoCount  neoCount  neoCount'\n  'recentTab recentTab recentTab recentTab'\n  'futureTab futureTab futureTab  futureTab'\n"},title:{"& > .shortTitle":{display:"block"},"& > .longTitle":{display:"none"}}})}),{name:"main-ui"}),P=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",padding:0,flex:1,display:"grid",gridGap:5,gridTemplateRows:"repeat(1,minmax(0px,1fr))",gridTemplateColumns:"repeat(7,minmax(0px,1fr))",gridTemplateAreas:"'clock1 clock2 clock3 clock4 clock5 clock6 clock7'","& > div":{display:"flex",justifyContent:"center",alignItems:"center"}},clock1:{gridArea:"clock1"},clock2:{gridArea:"clock2"},clock3:{gridArea:"clock3"},clock4:{gridArea:"clock4"},clock5:{gridArea:"clock5"},clock6:{gridArea:"clock6"},clock7:{gridArea:"clock7"}},"@media (max-width: ".concat(730,"px)"),{container:{gridTemplateRows:"repeat(2,minmax(0px,1fr))",gridTemplateColumns:"repeat(12,minmax(0px,1fr))",gridTemplateAreas:"\n          'clock1 clock1 clock1 clock1 clock2 clock2 clock2 clock2 clock3 clock3 clock3 clock3'\n          'clock4 clock4 clock4 clock5 clock5 clock5 clock6 clock6 clock6 clock7 clock7 clock7'\n        "}})}),{name:"clocks"}),R=a(49),F=a.n(R),L=Object(b.a)((function(e){return Object(v.a)({container:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column","& > div.aux":{flex:1,display:"flex",justifyContent:"center",alignItems:"center",zIndex:2,color:"white",fontSize:14,fontWeight:"bold"},"&:hover":{color:"green",transform:"scale(2) translate(0%, 0%)",zIndex:5,"& div.auy":{opacity:.9,zIndex:6},"& div.aux ":{textShadow:"1px 1px 1px rgba(0,0,0,1)",zIndex:7}}},flagImage:{padding:5,boxSizing:"border-box",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.2,zIndex:1}},"@media (max-width: ".concat(730,"px)"),{container:{}})}),{name:"clock"}),W=function(e){var t=L(),a=Object(n.useState)(F.a.tz(e.timezone)),c=Object(f.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return i(l.add(1,"second").clone())}),1e3);return function(){return clearInterval(e)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:"aux"},e.location),r.a.createElement("div",{className:"aux"},l.format("HH:mm")),r.a.createElement("div",{className:t.flagImage+" auy",style:{backgroundImage:"url(".concat(e.flagUrl,")")}})))},_=function(){var e=P();return r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.clock1},r.a.createElement(W,{location:"Hawaii",timezone:"Pacific/Honolulu",flagUrl:"images/hawaii-flag.png"})),r.a.createElement("div",{className:e.clock2},r.a.createElement(W,{location:"Arizona",timezone:"America/Phoenix",flagUrl:"images/arizona-flag.png"})),r.a.createElement("div",{className:e.clock3},r.a.createElement(W,{location:"DC",timezone:"America/New_York",flagUrl:"images/dc-flag.svg"})),r.a.createElement("div",{className:e.clock4},r.a.createElement(W,{location:"Santiago",timezone:"America/Santiago",flagUrl:"images/chile-flag.png"})),r.a.createElement("div",{className:e.clock5},r.a.createElement(W,{location:"UTC",timezone:"UTC",flagUrl:"images/utc-flag.png"})),r.a.createElement("div",{className:e.clock6},r.a.createElement(W,{location:"RSA",timezone:"Africa/Johannesburg",flagUrl:"images/rsa-flag.png"})),r.a.createElement("div",{className:e.clock7},r.a.createElement(W,{location:"Perth",timezone:"Australia/Perth",flagUrl:"images/aus-flag.png"})))},J=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},triangleSvg:{width:"100%",height:"100%",position:"absolute",top:0,bottom:0,left:0,right:0},score:{marginTop:30,color:"black",fontSize:30,flex:1,zIndex:10},title:{fontSize:12,fontWeight:"bold",position:"absolute",top:10,left:0,right:0,height:"33%"}}})),M=function(e){var t=e.sentryData,a=J(),c=Object(n.useState)(0),l=Object(f.a)(c,2),i=l[0],o=l[1],m=Object(n.useState)("grey"),s=Object(f.a)(m,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){var e=t.data.filter((function(e,t){return"string"===typeof e.ts_max})).map((function(e){return parseInt(e.ts_max,10)})),a=Math.max.apply(null,e);o(a)}),[t]),Object(n.useEffect)((function(){0===i&&d("grey"),1===i&&d("green"),i>=2&&i<=4&&d("yellow"),i>=5&&i<=7&&d("orange"),i>=8&&d("red")}),[i]),r.a.createElement("div",{className:a.container},r.a.createElement("svg",{className:a.triangleSvg,height:"100",width:"100px",viewBox:"".concat(-20," ").concat(-20," ").concat(140," ").concat(140)},r.a.createElement("g",null,r.a.createElement("path",{d:"M 50,0 L 0,100 L 100,100 Z",fill:"white",stroke:u,strokeWidth:10}))),r.a.createElement("div",{className:a.score},i))},H=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"},example:{color:"red"},imagePlaceholder:{width:"100%",height:"100%",backgroundImage:"url(images/world-placeholder.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}})),Y=function(){var e=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imagePlaceholder})))},B=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",display:"flex"},week:{flex:1},month:{flex:1},year:{flex:1},count:{width:"100%",height:"100%",fontSize:60,fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}},"@media (max-width: ".concat(730,"px)"),{container:{},count:{fontSize:40}})}),{name:"neo-count"}),G=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",position:"relative"},title:{position:"absolute",top:0,height:35,left:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",fontSize:16,fontWeight:"bold","& a":{textDecoration:"none",color:"white","&:hover":{color:"cyan"}}},content:{position:"absolute",top:35,bottom:0,left:0,right:0,backgroundColor:"rgba(255,255,255,0)",display:"flex",justifyContent:"center",alignItems:"center"}},"@media (max-width: ".concat(730,"px)"),{title:{fontSize:12}})})),V=a(116),q=function(e){var t="string"===typeof e.title?function(){return r.a.createElement(r.a.Fragment,null,e.title)}:function(){return r.a.createElement(e.title,null)},a=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.title,style:{justifyContent:e.alignment}},r.a.createElement("span",{style:{paddingRight:5}},e.icon?r.a.createElement(e.icon,null):null," "),r.a.createElement(t,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.content},e.isDisplayed?e.children:r.a.createElement(V.a,null)))))};function Z(e){var t=e.replace(" ","T").replace("Jan","01").replace("Feb","02").replace("Mar","03").replace("Apr","04").replace("May","05").replace("Jun","06").replace("Jul","07").replace("Aug","08").replace("Sep","09").replace("Oct","10").replace("Nov","11").replace("Dec","12");return new Date(t)}var $=function(e){var t=e.cadData,a=Object(n.useState)(0),c=Object(f.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(0),m=Object(f.a)(o,2),s=m[0],u=m[1],d=Object(n.useState)(0),g=Object(f.a)(d,2),b=g[0],E=g[1];Object(n.useEffect)((function(){var e=function(e){return function(t){var a=Z(t[A]),n=(+new Date-+a)/864e5;return console.log("DaysThresh",e,n,t[A]),n<=e}};E(t.data.length),u(t.data.filter(e(30)).length),i(t.data.filter(e(7)).length)}),[t]);var k=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:k.container},r.a.createElement("div",{className:k.week},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 7 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.b})},alignment:"center",isDisplayed:!!l},r.a.createElement("div",{className:k.count},l))),r.a.createElement("div",{className:k.month},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 30 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.c})},alignment:"center",isDisplayed:!!s},r.a.createElement("div",{className:k.count},s))),r.a.createElement("div",{className:k.year},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 365 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.a})},alignment:"center",isDisplayed:!!b},r.a.createElement("div",{className:k.count},b)))))},K=a(120),Q=a(123),X=a(118),ee=a(119),te=a(121),ae=a(126),ne=a(122),re=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",padding:10,overflow:"hidden"},root:{width:"100%"},tableContainer:{maxHeight:240}}}),{name:"table-cad"}),ce=a(5),le=Object(ce.a)((function(e){return{head:{backgroundColor:"#181b2e",color:e.palette.common.white},body:{backgroundColor:"rgba(255,255,255,0.05)",fontSize:14}}}))(X.a),ie=[{id:"fullname",label:"Object",minWidth:130,align:"left",format:function(e){return e}},{id:"cd",label:"Close Approach Date",minWidth:190,align:"left",format:function(e){return e}},{id:"dist",label:"CA Distance Nominal (LD|AU)",minWidth:170,align:"left",format:me},{id:"dist_min",label:"CA Distance Mininum (LD|AU)",minWidth:170,align:"left",format:me},{id:"v_rel",label:"V Relative (km/s)",minWidth:120,align:"left",format:function(e){return parseFloat(e).toFixed(2)}},{id:"v_inf",label:"V Infinity (km/s)",minWidth:120,align:"left",format:function(e){return parseFloat(e).toFixed(2)}},{id:"h",label:"H (mag)",minWidth:100,align:"left",format:function(e){return parseFloat(e).toFixed(1)}}],oe=function(e){var t=e.cadData,a=e.period,n=r.a.useState(0),c=Object(f.a)(n,2),l=c[0],i=c[1],o=r.a.useState(10),m=Object(f.a)(o,2),s=m[0],u=m[1],d=t.data.filter((function(e){var t=Z(e[A]),n=+new Date-+t;return"recent"===a?n<0:n>=0})).map((function(e){return{fullname:e[U],des:e[y],orbit_id:e[w],jd:e[j],cd:e[A],dist:e[T],dist_min:e[C],dist_max:e[O],v_rel:e[D],v_inf:e[S],t_sigma_f:e[N],h:e[z]}})),g=re();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.container},r.a.createElement(ee.a,{className:g.tableContainer},r.a.createElement(K.a,{stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,ie.map((function(e){return r.a.createElement(le,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(Q.a,null,d.slice(l*s,l*s+s).map((function(e){return r.a.createElement(ne.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.fullname},ie.map((function(t){var a=e[t.id];return r.a.createElement(le,{key:t.id,align:t.align||"left"},t.format(a))})))}))))),r.a.createElement(ae.a,{rowsPerPageOptions:[10,25,100],component:"div",count:d.length,rowsPerPage:s,page:l,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){u(+e.target.value),i(0)}})))};function me(e){var t=parseFloat(e);return"".concat((389.17037554435*t).toFixed(2)," | ").concat(t.toFixed(5))}var se=a(40),ue=a.n(se),de=a(50);function ge(){return(ge=Object(de.a)(ue.a.mark((function e(){var t,a,n,r,c,l,i,o;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ssd-api.jpl.nasa.gov/sentry.api",t=fe("1LD"),a=fe("0p05AU"),e.next=5,Promise.all([fetch("https://ssd-api.jpl.nasa.gov/sentry.api").then((function(e){return e.json()})),fetch(t).then((function(e){return e.json()})),fetch(a).then((function(e){return e.json()}))]);case 5:return n=e.sent,r=Object(f.a)(n,3),c=r[0],l=r[1],i=r[2],o={sentryData:c,cadData1LD:l,cadData0p05AU:i,timestamp:(new Date).toUTCString()},e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){var t=new Date,a=new Date(t.setUTCSeconds(t.getUTCSeconds()+5184e3)).toISOString().split("T")[0];return"https://ssd-api.jpl.nasa.gov/cad.api?www=1&nea-comet=Y&fullname=true"+("1LD"===e?"&dist-max=1LD&date-min=-365&date-max=now":"&dist-max=0.05&date-min=-30&date-max=".concat(a))}var pe=function(){var e=I(),t=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(f.a)(a,2),c=r[0],l=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("APIDATA",null),a=Object(f.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){c&&c.sentryData&&c.cadData0p05AU&&c.cadData1LD?s(c?function(e){var t=new Date(e),a="".concat(x[t.getMonth()],"-").concat(t.getDate(),"-").concat(t.getFullYear()),n=t.toTimeString().split(" ")[0];return"".concat(n," ").concat(a)}(c.timestamp):""):function(){return ge.apply(this,arguments)}().then((function(e){return l(e)}))}),[c,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imageLeft},r.a.createElement(k,{imageUrl:"images/pdco-logo.jpg"})),r.a.createElement("div",{className:e.imageRight},r.a.createElement(k,{imageUrl:"images/nasa-logo.png"})),r.a.createElement("div",{className:e.title,onClick:function(){return l(null)}},r.a.createElement("div",{className:"longTitle"},"PDCO STATUS SUMMARY"),r.a.createElement("div",{className:"shortTitle"},"PDCO STATUS"),r.a.createElement("div",{className:"date"},r.a.createElement("span",{style:{paddingRight:3}},m+" "),r.a.createElement(p.a,{style:{fontSize:10},flip:"horizontal",icon:h.f}))),r.a.createElement("div",{className:e.clocks},r.a.createElement(_,null)),r.a.createElement("div",{className:e.neoCount},r.a.createElement(q,{title:"CLOSE APPROACHES <1LD",icon:function(){return r.a.createElement(p.a,{icon:h.e})},isDisplayed:!!c},!!c&&r.a.createElement($,{cadData:c.cadData1LD}))),r.a.createElement("div",{className:e.sentry},r.a.createElement(q,{title:function(){return r.a.createElement("a",{href:"https://cneos.jpl.nasa.gov/sentry/"},"SENTRY STATUS")},icon:function(){return r.a.createElement(p.a,{icon:h.g})},isDisplayed:!!c},!!c&&r.a.createElement(M,{sentryData:c.sentryData}))),r.a.createElement("div",{className:e.programs},r.a.createElement(q,{title:"PROGRAMS",icon:function(){return r.a.createElement(p.a,{icon:h.d})},isDisplayed:!!c},r.a.createElement(Y,null))),r.a.createElement("div",{className:e.recentTab},r.a.createElement(q,{title:"RECENT TABLE",icon:function(){return r.a.createElement(p.a,{icon:h.h})},isDisplayed:!!c},!!c&&r.a.createElement(oe,{period:"recent",cadData:c.cadData0p05AU}))),r.a.createElement("div",{className:e.futureTab},r.a.createElement(q,{title:"FUTURE TABLE",icon:function(){return r.a.createElement(p.a,{icon:h.h})},isDisplayed:!!c},!!c&&r.a.createElement(oe,{period:"future",cadData:c.cadData0p05AU})))))},he=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"}}}),{name:"page-home"}),be=function(){he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null))},Ee=Object(b.a)((function(e){return{container:{minHeight:"95vh",width:"100%",height:"100%",overflow:"hidden",padding:10}}}),{name:"page-about"}),ke=function(){var e=Ee();return r.a.createElement("div",{className:e.container},r.a.createElement("h1",null,"PDCO Status Dashboard"),r.a.createElement("p",null,"This is the dashboard for quickly summarizing the state of concern for the Planetary Defence Coordination Office."),r.a.createElement("h1",null,"Usage"),r.a.createElement("p",null,"To preserve API calls, this dashboard caches data at the time displayed in the title bar. It will also refresh automatically every 12 hours. You can manually refresh the data by clicking on the title bar."))},ve=Object(b.a)((function(e){return{container:{}}}),{name:"app-entry"}),xe=Object(b.a)((function(e){return{container:{"& ul":{margin:0,"& li":{color:"white",display:"inline-block",margin:"0px 10px"}}}}})),ye=function(){var e=xe();return r.a.createElement("div",{className:"simple-menu-container "+e.container},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"About"))))},we=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",backgroundColor:e.palette.background.default}}}),{name:"layout"}),je=function(e){var t=we();return r.a.createElement("div",{className:"layout-container "+t.container},e.children)};l.a.render(r.a.createElement((function(){var e=ve();return r.a.createElement("div",{className:e.container},r.a.createElement(d.a,{theme:u},r.a.createElement(g.a,null),r.a.createElement(je,null,r.a.createElement(i.a,{basename:"/pdco-dashboard/"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(be,null)),r.a.createElement(o.a,{path:"/about"},r.a.createElement(ke,null))),r.a.createElement(ye,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.01b53c80.chunk.js.map