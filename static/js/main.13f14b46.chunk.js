(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{117:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},232:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(0),a=c(10),r=c.n(a),i=(c(117),c(26)),o=c.n(i),l=c(41),u=c(16),d=(c(119),c(264)),j=c(265),h=c(266),f=c(258),b=c(262),v=c(263),p=(c(120),c(13)),O=c(267),x=c(268),m=c(27),y=c.n(m),g={cases:{hex:"#CC1034",multiplier:180},recovered:{hex:"#7dd71d",multiplier:250},deaths:{hex:"#fb4443",multiplier:500}},w=function(e){var t=Object(p.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(O.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:g[t].hex,fillColor:g[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*g[t].multiplier,children:Object(n.jsx)(x.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")"),backgroundSize:"cover",width:"150px",height:"100px"}}),Object(n.jsxs)("div",{style:{fontWeight:"bolder"},children:[Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})]})})})}))},N=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"};function _(e){var t=e.active,c=e.title,s=e.cases,a=e.total,r=e.onClick,i=e.isRed;return Object(n.jsx)(f.a,{onClick:r,className:"infoBox ".concat(t&&"infoBox--selected"," ").concat(i&&"infoBox--red"),children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(v.a,{className:"infoBox__title",variant:"h6",children:c}),Object(n.jsx)("h2",{className:"infoBox__cases ",children:N(s)}),Object(n.jsx)(v.a,{className:"info__total",children:N(a)})]})})}c(124),c(125);c(126);var k=c(269),S=c(270);c(15);var I=function(e){var t=e.countries,c=e.casesType,s=e.center,a=e.zoom;return console.log(c),Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(k.a,{center:s,zoom:a,children:[Object(n.jsx)(S.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),C(t,c)]})})};c(127);function R(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:N(c)})})]})}))})}var B=c(106),D={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},z=function(e,t){var c,n=[];for(var s in e.cases){if(c){var a={x:s,y:e[t][s]-c};n.push(a)}c=e[t][s]}return n};var E=function(e){var t=e.casesType,c=Object(s.useState)({}),a=Object(u.a)(c,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=z(e,t);i(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(n.jsx)(B.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:D})})};var T=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("worldwide"),i=Object(u.a)(r,2),v=i[0],p=i[1],O=Object(s.useState)(" "),x=Object(u.a)(O,2),m=x[0],y=x[1],g=Object(s.useState)([]),C=Object(u.a)(g,2),N=C[0],k=C[1],S=Object(s.useState)([20,-10]),B=Object(u.a)(S,2),D=B[0],z=B[1],T=Object(s.useState)(2),A=Object(u.a)(T,2),M=A[0],W=A[1],J=Object(s.useState)([]),L=Object(u.a)(J,2),Y=L[0],q=L[1],F=Object(s.useState)("cases"),K=Object(u.a)(F,2),V=K[0],G=K[1];Object(s.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=w(e);a(t),k(c),q(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,p(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){if(y(e),"worldwide"===c)return z([20,-10]),void W(2);W(4),z([e.countryInfo.lat,e.countryInfo.long])}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{className:"title",children:"COVID-19-TRACKER"}),Object(n.jsx)(d.a,{className:"app__dropdown",children:Object(n.jsxs)(j.a,{variant:"outlined",value:v,onChange:H,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"app__stats app__left",children:[Object(n.jsx)(_,{isRed:!0,active:"cases"==V,title:"Coronavirus Cases",total:m.cases,cases:m.todayCases,onClick:function(e){return G("cases")}}),Object(n.jsx)(_,{active:"recovered"==V,title:"Recovered",total:m.recovered,cases:m.todayRecovered,onClick:function(e){return G("recovered")}}),Object(n.jsx)(_,{isRed:!0,active:"deaths"==V,title:"Deaths",total:m.deaths,cases:m.todayDeaths,onClick:function(e){return G("deaths")}})]}),Object(n.jsxs)("div",{className:"app__mid",children:[Object(n.jsx)("h2",{class:"news",children:"News"}),Object(n.jsx)(I,{countries:Y,center:D,zoom:M,casesType:V})]}),Object(n.jsx)(f.a,{className:"app__right",children:Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{class:"app__information",children:[Object(n.jsx)("h3",{children:"Lives Cases by Country"}),Object(n.jsx)(R,{countries:N}),Object(n.jsxs)("h3",{children:["Worldwide new ",V]}),Object(n.jsx)(E,{casesType:V})]})})})]})]})};r.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.13f14b46.chunk.js.map