(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),r=a.n(c),s=(a(11),a(2)),i=(a(12),a.p+"static/media/logo.e7fbdc95.png"),l=a(0);function j(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsx)("div",{className:"row banner",children:Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{src:i,alt:"bikeszkola"})}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(l.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:a?"navbar__menu-active":"navbar__menu",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"./",className:"navbar__link",children:"Start"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#calendar",className:"navbar__link",children:"Kalendarz"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"http://bikeszkola.pl",className:"navbar__link",children:"Bikeszko\u0142a"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.hls-shop.pl/kategoria-produktu/hls/",className:"navbar__link",children:"Sklep"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contact",className:"navbar__link",children:"Social media"})})]})]})})})}var o=a(3),d=a.n(o),u=a(6),b=a.n(u),h=function(e){var t=e.valueDate,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1],j=Object(n.useState)(""),o=Object(s.a)(j,2),d=o[0],u=o[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),O=h[0],f=h[1],m=Object(n.useState)(""),x=Object(s.a)(m,2),v=x[0],p=x[1],N=Object(n.useState)(!1),k=Object(s.a)(N,2),w=k[0],_=k[1];return Object(l.jsxs)("div",{className:"form__calendar",children:[Object(l.jsx)("h2",{children:"Zarezerwuj termin szkolenia"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={name:r,surname:d,email:O,phone:v,date:t};_(!0),fetch("http://localhost:3001/reservations",{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(a)}).then((function(){console.log("New reservation added"),_(!1)}))},children:[Object(l.jsx)("label",{children:"Imi\u0119:"}),Object(l.jsx)("input",{type:"text",required:!0,value:r,onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("label",{children:"Nazwisko:"}),Object(l.jsx)("input",{type:"text",required:!0,value:d,onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("label",{children:"e-mail:"}),Object(l.jsx)("input",{type:"email",required:!0,value:O,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("label",{children:"Numer telefonu:"}),Object(l.jsx)("input",{type:"number",required:!0,value:v,onChange:function(e){return p(e.target.value)}}),Object(l.jsx)("label",{children:"Data szkolenia:"}),Object(l.jsx)("input",{type:"date",required:!0,value:t.format("YYYY-MM-DD"),onChange:function(e){return e.target.value}}),Object(l.jsxs)("div",{className:"div-btn",children:[!w&&Object(l.jsx)("button",{className:"form__button",children:"Zarezerwuj"}),w&&Object(l.jsx)("button",{disabled:!0,className:"form__btn form__btn__disabled",children:"Dodawanie rezerwacji..."})]})]})]})};function O(e){var t=e.value,a=e.onChange,c=Object(n.useState)([]),r=Object(s.a)(c,2),i=r[0],j=r[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),O=u[0],f=u[1],m=Object(n.useState)(!1),x=Object(s.a)(m,2),v=x[0],p=x[1],N=Object(n.useState)(null),k=Object(s.a)(N,2),w=k[0],_=k[1];d.a.updateLocale("pl",b.a);var g=t.clone().startOf("month").startOf("week"),y=t.clone().endOf("month").endOf("week"),S=t.clone().endOf("month"),D=t.clone().startOf("month");Object(n.useEffect)((function(){for(var e=g.clone().subtract(1,"day"),t=[];e.isBefore(y,"day");)t.push(Array(7).fill("d").map((function(){return e.add(1,"day").clone()})));j(t)}),[t]),Object(n.useEffect)((function(){fetch("http://localhost:3001/reservations").then((function(e){if(e.ok)return e.json();throw new Error("Komunikacja z serwerem si\u0119 nie powiod\u0142a!")})).then((function(e){console.log(e),_(e)}))}),[]);var Y=function(){return t.isSame(new Date,"month")},z=w&&w.map((function(e){return d()(e.date).format("DD-MM-YYYY")}));console.log(z);var C=function(e,t){return function(e,t){return t.isSame(e,"day")}(e,t)?"pickedDay":function(e){return e.isBefore(new Date,"day")}(e)?"yesterday":function(e){return e.isSame(new Date,"day")}(e)?"today":function(e){return e.isAfter(S,"day")}(e)?"next-month":function(e){return e.isBefore(D,"day")}(e)?"previous-month":""};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"calendar col-12",children:[Object(l.jsxs)("div",{className:"calendar__header",children:[Object(l.jsx)("div",{className:"prevMonth",onClick:function(){return!Y()&&a(t.clone().subtract(1,"month"))},children:Y()?null:Object(l.jsx)("i",{className:"fas fa-chevron-left"})}),Object(l.jsxs)("div",{children:[t.format("MMMM")," ",t.format("YYYY")]}),Object(l.jsx)("div",{className:"nextMonth",onClick:function(){return a(t.clone().add(1,"month"))},children:Object(l.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(l.jsxs)("div",{className:"calendar__grid",id:"calendar",children:[Object(l.jsx)("div",{className:"days",children:["pn","wt","\u015br","czw","pt","sob","nd"].map((function(e,t){return Object(l.jsx)("div",{className:"week",children:e},t)}))}),i.map((function(e,n){return Object(l.jsx)("div",{children:e.map((function(e,n){return Object(l.jsx)("div",{className:"day",onClick:function(){return!function(e){return e.isBefore(new Date,"day")}(e)&&a(e)},children:Object(l.jsxs)("div",{className:C(e,t),onClick:function(){return f(!0)},children:[e.format("DD"),O&&Object(l.jsx)("i",{className:"fas fa-plus",onClick:function(){p(!0)}})]})},n)}))},n)}))]})]})}),Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-12 col-lg-8",children:v&&Object(l.jsx)(h,{valueDate:t})})}),Object(l.jsxs)("div",{className:"reserved",children:[Object(l.jsx)("h3",{children:"Zarezerwowane terminy:"}),w&&Object(l.jsx)("ul",{children:w.map((function(e){return Object(l.jsx)("li",{children:d()(e.date).format("DD-MM-YYYY")},e.id)}))})]})]})})}function f(){return Object(l.jsx)("div",{className:"row footer",id:"contact",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/bikeszkola/",className:"footer__link",children:Object(l.jsx)("i",{className:"fab fa-instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.facebook.com/bikeszkola",className:"footer__link",children:Object(l.jsx)("i",{className:"fab fa-facebook-square"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/hard_luck_story/",className:"footer__link",children:Object(l.jsx)("i",{className:"fab fa-instagram"})})})]})})})}var m=function(){var e=Object(n.useState)(d()()),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)("div",{className:"App container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(O,{value:a,onChange:c}),Object(l.jsx)(f,{})]})};r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1ed5f3f5.chunk.js.map