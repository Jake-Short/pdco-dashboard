(this["webpackJsonppdco-dashboard"]=this["webpackJsonppdco-dashboard"]||[]).push([[0],{57:function(e,t,a){e.exports=a(75)},62:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c);a(62),a(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(29),o=a(23),m=a(52),s=(Object(m.a)({palette:{type:"dark",background:{default:"black"}}}),Object(m.a)({palette:{type:"light"}}),Object(m.a)({palette:{type:"dark",primary:{main:"#375a7f"},secondary:{main:"#444"},error:{main:"#E74C3C"},background:{default:"black"}}})),u=(Object(m.a)({palette:{type:"dark",primary:{main:"#DF691A"},secondary:{main:"#4E5D6C"},error:{main:"#d9534f"},background:{default:"#2B3E50"}}}),s),d=a(123),g=a(124),f=a(9),p=a(17),h=a(18),b=a(113),E=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",backgroundColor:"black"},image:{width:"100%",height:"100%",backgroundSize:"contain",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}})),x=function(e){var t=E();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.image,style:{backgroundImage:"url(".concat(e.imageUrl,")")}}))},v=a(19),k=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],y=0,w=1,j=2,C=3,T=4,A=5,D=6,O=7,S=8,N=9,z=10,U=11,R=Object(b.a)((function(e){return Object(v.a)({container:{width:"100vw",height:"95vh",display:"grid",gridTemplateRows:"minmax(0px,.5fr) minmax(0px,.5fr) minmax(0px,1.5fr) minmax(0px,3fr)",gridTemplateColumns:"repeat(8,minmax(0px,1fr))",gridTemplateAreas:"\n  'imageLeft title     title     title     title     title    title      imageRight'\n  'imageLeft clocks    clocks    clocks    clocks    clocks   clocks     imageRight'\n  'neoCount  neoCount  neoCount  neoCount  sentry    sentry   programs   programs'\n  'recentTab recentTab recentTab recentTab futureTab futureTab futureTab futureTab'\n",gridGap:20,textAlign:"center",text:"center",border:"".concat(20,"px solid ").concat("transparent"),"& > div":{backgroundColor:"#181b2e",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:1}},imageLeft:{gridArea:"imageLeft",backgroundColor:"pink"},imageRight:{gridArea:"imageRight",backgroundColor:"red"},title:{gridArea:"title",backgroundColor:"blue",fontSize:20,fontWeight:"bold",display:"flex",position:"relative",flexDirection:"column","& > div":{paddingBottom:2},"& > .shortTitle":{display:"none",paddingBottom:2},"& > .date":{fontSize:12}},date:{gridArea:"date",backgroundColor:"blue",fontSize:20,fontWeight:"bold"},clocks:{gridArea:"clocks",backgroundColor:"green"},neoCount:{gridArea:"neoCount",backgroundColor:"cyan"},sentry:{gridArea:"sentry",backgroundColor:"purple"},programs:{gridArea:"programs",backgroundColor:"purple"},recentTab:{gridArea:"recentTab",backgroundColor:"brown"},futureTab:{gridArea:"futureTab",backgroundColor:"yellow"}},"@media (max-width: ".concat(730,"px)"),{container:{height:"auto",gridGap:10,gridTemplateRows:"\n  minmax(0px,50px)\n  minmax(0px,200px)\n  minmax(0px,150px)\n  minmax(0px,150px)\n  minmax(0px,350px)\n  minmax(0px,350px)\n",gridTemplateColumns:"\n  minmax(0px,1fr) minmax(0px,2fr) minmax(0px,2fr) minmax(0px,1fr)",gridTemplateAreas:"\n  'imageLeft title     title     imageRight'\n  'clocks    clocks    clocks    clocks '\n  'sentry    sentry    programs  programs '\n  'neoCount  neoCount  neoCount  neoCount'\n  'recentTab recentTab recentTab recentTab'\n  'futureTab futureTab futureTab  futureTab'\n"},title:{"& > .shortTitle":{display:"block"},"& > .longTitle":{display:"none"}}})}),{name:"main-ui"}),I=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",padding:0,flex:1,display:"grid",gridGap:5,gridTemplateRows:"repeat(1,minmax(0px,1fr))",gridTemplateColumns:"repeat(7,minmax(0px,1fr))",gridTemplateAreas:"'clock1 clock2 clock3 clock4 clock5 clock6 clock7'","& > div":{display:"flex",justifyContent:"center",alignItems:"center"}},clock1:{gridArea:"clock1"},clock2:{gridArea:"clock2"},clock3:{gridArea:"clock3"},clock4:{gridArea:"clock4"},clock5:{gridArea:"clock5"},clock6:{gridArea:"clock6"},clock7:{gridArea:"clock7"}},"@media (max-width: ".concat(730,"px)"),{container:{gridTemplateRows:"minmax(0px,1fr) repeat(2,minmax(0px,1fr))",gridTemplateColumns:"minmax(0px,1fr) minmax(0px,1fr) minmax(0px,1fr)",gridTemplateAreas:"\n          'clock5 clock5 clock5'\n          'clock1 clock2 clock3'\n          'clock4 clock6 clock7'\n        "}})}),{name:"clocks"}),P=a(49),L=a.n(P),F=Object(b.a)((function(e){return Object(v.a)({container:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column","& > div.aux":{flex:1,display:"flex",justifyContent:"center",alignItems:"center",zIndex:2,color:"white",fontSize:14,fontWeight:"bold"},"&:hover":{color:"green",transform:"scale(2) translate(0%, 0%)",zIndex:5,"& div.auy":{opacity:.9,zIndex:6},"& div.aux ":{textShadow:"1px 1px 1px rgba(0,0,0,1)",zIndex:7}}},flagImage:{padding:5,boxSizing:"border-box",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.2,zIndex:1}},"@media (max-width: ".concat(730,"px)"),{container:{}})}),{name:"clock"}),W=function(e){var t=F(),a=Object(n.useState)(L.a.tz(e.timezone)),c=Object(f.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return l(i.add(1,"second").clone())}),1e3);return function(){return clearInterval(e)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:"aux"},e.location),r.a.createElement("div",{className:"aux"},i.format("HH:mm")),r.a.createElement("div",{className:t.flagImage+" auy",style:{backgroundImage:"url(".concat(e.flagUrl,")")}})))},_=function(){var e=I();return r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.clock1},r.a.createElement(W,{location:"Hawaii",timezone:"Pacific/Honolulu",flagUrl:"images/hawaii-flag.png"})),r.a.createElement("div",{className:e.clock2},r.a.createElement(W,{location:"Arizona",timezone:"America/Phoenix",flagUrl:"images/arizona-flag.png"})),r.a.createElement("div",{className:e.clock3},r.a.createElement(W,{location:"DC",timezone:"America/New_York",flagUrl:"images/dc-flag.svg"})),r.a.createElement("div",{className:e.clock4},r.a.createElement(W,{location:"Santiago",timezone:"America/Santiago",flagUrl:"images/chile-flag.png"})),r.a.createElement("div",{className:e.clock5},r.a.createElement(W,{location:"UTC",timezone:"UTC",flagUrl:"images/utc-flag.png"})),r.a.createElement("div",{className:e.clock6},r.a.createElement(W,{location:"RSA",timezone:"Africa/Johannesburg",flagUrl:"images/rsa-flag.png"})),r.a.createElement("div",{className:e.clock7},r.a.createElement(W,{location:"Perth",timezone:"Australia/Perth",flagUrl:"images/aus-flag.png"})))},H=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},triangleSvg:{width:"100%",height:"100%",position:"absolute",top:0,bottom:0,left:0,right:0},score:{marginTop:30,color:"black",fontSize:30,flex:1,zIndex:10},title:{fontSize:12,fontWeight:"bold",position:"absolute",top:10,left:0,right:0,height:"33%"}}})),Y=function(e){var t=e.sentryData,a=H(),c=Object(n.useState)(0),i=Object(f.a)(c,2),l=i[0],o=i[1],m=Object(n.useState)("grey"),s=Object(f.a)(m,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){var e=t.data.filter((function(e,t){return"string"===typeof e.ts_max})).map((function(e){return parseInt(e.ts_max,10)})),a=Math.max.apply(null,e);o(a)}),[t]),Object(n.useEffect)((function(){0===l&&d("grey"),1===l&&d("green"),l>=2&&l<=4&&d("yellow"),l>=5&&l<=7&&d("orange"),l>=8&&d("red")}),[l]),r.a.createElement("div",{className:a.container},r.a.createElement("svg",{className:a.triangleSvg,height:"100",width:"100px",viewBox:"".concat(-20," ").concat(-20," ").concat(140," ").concat(140)},r.a.createElement("g",null,r.a.createElement("path",{d:"M 50,0 L 0,100 L 100,100 Z",fill:"white",stroke:u,strokeWidth:10}))),r.a.createElement("div",{className:a.score},l))},B=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"},example:{color:"red"},imagePlaceholder:{width:"100%",height:"100%",backgroundImage:"url(images/world-placeholder.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}})),M=function(){var e=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imagePlaceholder})))},J=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",display:"flex"},week:{flex:1},month:{flex:1},year:{flex:1},count:{width:"100%",height:"100%",fontSize:60,fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}},"@media (max-width: ".concat(730,"px)"),{container:{}})}),{name:"neo-count"}),G=Object(b.a)((function(e){return Object(v.a)({container:{width:"100%",height:"100%",display:"grid",gridTemplateRows:"1fr 3fr",gridTemplateColumns:"repeat(1, minmax(0px,1fr))"},title:{gridColumn:"1 / 2",gridRow:"1 / 2",display:"flex",justifyContent:"center",padding:"0px 10px",alignItems:"center",fontSize:16,fontWeight:"bold","& a":{textDecoration:"none",color:"white","&:hover":{color:"cyan"}}},content:{backgroundColor:"rgba(255,255,255,0)",gridColumn:"1 / 2",gridRow:"2 / 3",display:"flex",justifyContent:"center",alignItems:"center"}},"@media (max-width: ".concat(730,"px)"),{title:{fontSize:14}})})),V=a(115),q=function(e){var t="string"===typeof e.title?function(){return r.a.createElement(r.a.Fragment,null,e.title)}:function(){return r.a.createElement(e.title,null)},a=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.title,style:{justifyContent:e.alignment}},r.a.createElement("span",{style:{paddingRight:5}},e.icon?r.a.createElement(e.icon,null):null," "),r.a.createElement(t,null)),r.a.createElement(r.a.Fragment,null,e.isDisplayed?r.a.createElement("div",{className:a.content},e.children):r.a.createElement("div",{className:a.content},r.a.createElement(V.a,null)))))},Z=function(e){var t=e.cadData,a=Object(n.useState)(0),c=Object(f.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)(0),m=Object(f.a)(o,2),s=m[0],u=m[1],d=Object(n.useState)(0),g=Object(f.a)(d,2),b=g[0],E=g[1];Object(n.useEffect)((function(){var e=function(e){return function(t){var a=new Date(t[C]);return(+new Date-+a)/864e5<=e}};E(t.data.length),u(t.data.filter(e(30)).length),l(t.data.filter(e(7)).length)}),[t]);var x=J();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.container},r.a.createElement("div",{className:x.week},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 7 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.b})},alignment:"center",isDisplayed:!!i},r.a.createElement("div",{className:x.count},i))),r.a.createElement("div",{className:x.month},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 30 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.c})},alignment:"center",isDisplayed:!!s},r.a.createElement("div",{className:x.count},s))),r.a.createElement("div",{className:x.year},r.a.createElement(q,{title:"".concat(window.outerWidth<730?"<":"LAST"," 365 DAYS"),icon:function(){return r.a.createElement(p.a,{icon:h.a})},alignment:"center",isDisplayed:!!b},r.a.createElement("div",{className:x.count},b)))))},$=a(119),K=a(122),Q=a(117),X=a(118),ee=a(120),te=a(125),ae=a(121),ne=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"},root:{width:"100%"},tableContainer:{maxHeight:240}}}),{name:"table-cad"}),re=a(5),ce=Object(re.a)((function(e){return{head:{backgroundColor:"#181b2e",color:e.palette.common.white},body:{backgroundColor:"rgba(255,255,255,0.05)",fontSize:14}}}))(Q.a),ie=[{id:"fullname",label:"Object",minWidth:130,align:"left",format:function(e){return e}},{id:"cd",label:"Close Approach Date",minWidth:190,align:"left",format:function(e){return e}},{id:"dist",label:"CA Distance Nominal (LD|AU)",minWidth:170,align:"left",format:oe},{id:"dist_min",label:"CA Distance Mininum (LD|AU)",minWidth:170,align:"left",format:oe},{id:"v_rel",label:"V Relative (km/s)",minWidth:120,align:"left",format:function(e){return parseFloat(e).toFixed(2)}},{id:"v_inf",label:"V Infinity (km/s)",minWidth:120,align:"left",format:function(e){return parseFloat(e).toFixed(2)}},{id:"h",label:"H (mag)",minWidth:100,align:"left",format:function(e){return parseFloat(e).toFixed(1)}}],le=function(e){var t=e.cadData,a=e.period,n=r.a.useState(0),c=Object(f.a)(n,2),i=c[0],l=c[1],o=r.a.useState(10),m=Object(f.a)(o,2),s=m[0],u=m[1],d=t.data.filter((function(e){var t=new Date(e[C]),n=+new Date-+t;return"recent"===a?n<0:n>=0})).map((function(e){return{fullname:e[U],des:e[y],orbit_id:e[w],jd:e[j],cd:e[C],dist:e[T],dist_min:e[A],dist_max:e[D],v_rel:e[O],v_inf:e[S],t_sigma_f:e[N],h:e[z]}})),g=ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.container},r.a.createElement(X.a,{className:g.tableContainer},r.a.createElement($.a,{stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,ie.map((function(e){return r.a.createElement(ce,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(K.a,null,d.slice(i*s,i*s+s).map((function(e){return r.a.createElement(ae.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.fullname},ie.map((function(t){var a=e[t.id];return r.a.createElement(ce,{key:t.id,align:t.align||"left"},t.format(a))})))}))))),r.a.createElement(te.a,{rowsPerPageOptions:[10,25,100],component:"div",count:d.length,rowsPerPage:s,page:i,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){u(+e.target.value),l(0)}})))};function oe(e){var t=parseFloat(e);return"".concat((389.17037554435*t).toFixed(2)," | ").concat(t.toFixed(5))}var me=a(40),se=a.n(me),ue=a(50);function de(){return(de=Object(ue.a)(se.a.mark((function e(){var t,a,n,r,c,i,l,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ssd-api.jpl.nasa.gov/sentry.api",t=ge("1LD"),a=ge("0p05AU"),e.next=5,Promise.all([fetch("https://ssd-api.jpl.nasa.gov/sentry.api").then((function(e){return e.json()})),fetch(t).then((function(e){return e.json()})),fetch(a).then((function(e){return e.json()}))]);case 5:return n=e.sent,r=Object(f.a)(n,3),c=r[0],i=r[1],l=r[2],o={sentryData:c,cadData1LD:i,cadData0p05AU:l,timestamp:(new Date).toUTCString()},e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){var t=new Date,a=new Date(t.setUTCSeconds(t.getUTCSeconds()+5184e3)).toISOString().split("T")[0];return"https://ssd-api.jpl.nasa.gov/cad.api?www=1&nea-comet=Y&fullname=true"+("1LD"===e?"&dist-max=1LD&date-min=-365&date-max=now":"&dist-max=0.05&date-min=-30&date-max=".concat(a))}var fe=function(){var e=R(),t=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(f.a)(a,2),c=r[0],i=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;i(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("APIDATA",null),a=Object(f.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),o=Object(f.a)(l,2),m=o[0],s=o[1];return console.log("storedData",c),Object(n.useEffect)((function(){c&&c.sentryData&&c.cadData0p05AU&&c.cadData1LD?s(c?function(e){var t=new Date(e),a="".concat(k[t.getMonth()],"-").concat(t.getDate(),"-").concat(t.getFullYear()),n=t.toTimeString().split(" ")[0];return"".concat(n," ").concat(a)}(c.timestamp):""):function(){return de.apply(this,arguments)}().then((function(e){return i(e)}))}),[c,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.imageLeft},r.a.createElement(x,{imageUrl:"images/pdco-logo.jpg"})),r.a.createElement("div",{className:e.imageRight},r.a.createElement(x,{imageUrl:"images/nasa-logo.png"})),r.a.createElement("div",{className:e.title,onClick:function(){return i(null)}},r.a.createElement("div",{className:"longTitle"},"PDCO STATUS SUMMARY"),r.a.createElement("div",{className:"shortTitle"},"PDCO STATUS"),r.a.createElement("div",{className:"date"},r.a.createElement("span",{style:{paddingRight:3}},m+" "),r.a.createElement(p.a,{style:{fontSize:10},flip:"horizontal",icon:h.f}))),r.a.createElement("div",{className:e.clocks},r.a.createElement(_,null)),r.a.createElement("div",{className:e.neoCount},r.a.createElement(q,{title:"CLOSE APPROACHES <1LD",icon:function(){return r.a.createElement(p.a,{icon:h.e})},isDisplayed:!!c},!!c&&r.a.createElement(Z,{cadData:c.cadData1LD}))),r.a.createElement("div",{className:e.sentry},r.a.createElement(q,{title:function(){return r.a.createElement("a",{href:"https://cneos.jpl.nasa.gov/sentry/"},"SENTRY STATUS")},icon:function(){return r.a.createElement(p.a,{icon:h.g})},isDisplayed:!!c},!!c&&r.a.createElement(Y,{sentryData:c.sentryData}))),r.a.createElement("div",{className:e.programs},r.a.createElement(q,{title:"PROGRAMS",icon:function(){return r.a.createElement(p.a,{icon:h.d})},isDisplayed:!!c},r.a.createElement(M,null))),r.a.createElement("div",{className:e.recentTab},r.a.createElement(q,{title:"RECENT TABLE",icon:function(){return r.a.createElement(p.a,{icon:h.h})},isDisplayed:!!c},!!c&&r.a.createElement(le,{period:"recent",cadData:c.cadData0p05AU}))),r.a.createElement("div",{className:e.futureTab},r.a.createElement(q,{title:"FUTURE TABLE",icon:function(){return r.a.createElement(p.a,{icon:h.h})},isDisplayed:!!c},!!c&&r.a.createElement(le,{period:"future",cadData:c.cadData0p05AU})))))},pe=Object(b.a)((function(e){return{container:{width:"100%",height:"100%"}}}),{name:"page-home"}),he=function(){pe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null))},be=Object(b.a)((function(e){return{container:{minHeight:"95vh",width:"100%",height:"100%",overflow:"hidden",padding:10}}}),{name:"page-about"}),Ee=function(){var e=be();return r.a.createElement("div",{className:e.container},r.a.createElement("h1",null,"PDCO Status Dashboard"),r.a.createElement("p",null,"This is the dashboard for quickly summarizing the state of concern for the Planetary Defence Coordination Office."),r.a.createElement("h1",null,"Usage"),r.a.createElement("p",null,"To preserve API calls, this dashboard caches data at the time displayed in the title bar. It will also refresh automatically every 12 hours. You can manually refresh the data by clicking on the title bar."))},xe=Object(b.a)((function(e){return{container:{}}}),{name:"app-entry"}),ve=Object(b.a)((function(e){return{container:{"& ul":{margin:0,"& li":{color:"white",display:"inline-block",margin:"0px 10px"}}}}})),ke=function(){var e=ve();return r.a.createElement("div",{className:"simple-menu-container "+e.container},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},"About"))))},ye=Object(b.a)((function(e){return{container:{width:"100%",height:"100%",backgroundColor:e.palette.background.default}}}),{name:"layout"}),we=function(e){var t=ye();return r.a.createElement("div",{className:"layout-container "+t.container},e.children)};i.a.render(r.a.createElement((function(){var e=xe();return r.a.createElement("div",{className:e.container},r.a.createElement(d.a,{theme:u},r.a.createElement(g.a,null),r.a.createElement(we,null,r.a.createElement(l.a,{basename:"/pdco-dashboard/"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(he,null)),r.a.createElement(o.a,{path:"/about"},r.a.createElement(Ee,null))),r.a.createElement(ke,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.c9874602.chunk.js.map