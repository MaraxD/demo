(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(8),c=n.n(a),i=(n(17),n(5)),l=n(7),u=n(2),d=n(9),s=n(12),j=n(10),o=n.n(j),b=(n(21),n(0)),m=function(e){var t,n=e.member,r=e.handleEditClick,a=e.handleDeleteClick;return Object(b.jsxs)("tr",{style:{color:(t=n.activitate,t<2?"red":" ")},children:[Object(b.jsx)("td",{children:n.nume}),Object(b.jsx)("td",{children:n.prenume}),Object(b.jsx)("td",{children:n.activitate}),Object(b.jsx)("td",{children:n.nr_tel}),Object(b.jsx)("td",{children:n.mail}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{type:"button",onClick:function(e){return r(e,n)},children:"Editeaza"}),Object(b.jsx)("button",{type:"button",onClick:function(){return a(n.id)},children:"Stergere"})]})]})},h=function(e){var t=e.editFormData,n=e.handleEditFormChange,r=e.handleCancelClick;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:"required",placeholder:"Introduceti numele...",name:"nume",value:t.nume,onChange:n})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:"required",placeholder:"Introduceti prenumele...",name:"prenume",value:t.prenume,onChange:n})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:"required",placeholder:"Introduceti numarul de perioade active...",name:"activitate",value:t.activitate,onChange:n})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:"required",placeholder:"Introduceti numarul de telefon...",name:"nr_tel",value:t.nr_tel,onChange:n})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"email",required:"required",placeholder:"Introduceti mail-ul institutional...",name:"mail",value:t.mail,onChange:n})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{type:"submit",children:"Salveaza"}),Object(b.jsx)("button",{type:"button",onClick:r,children:"Anuleaza"})]})]})};n(23).polyfill(),n(26);var O=function(){var e=Object(r.useState)(d),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),j=Object(u.a)(c,2),O=(j[0],j[1]);Object(r.useEffect)((function(){fetch("http://localhost:64975/api/Member",{method:"get",mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){console.log(e.message)}))}),[]),Object(r.useEffect)((function(){var e=localStorage.getItem("user");e&&a(JSON.parse(e))}),[]),Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n))}),[]);var x=Object(r.useState)({nume:"",prenume:"",activitate:"",nr_tel:"",mail:""}),p=Object(u.a)(x,2),f=p[0],v=p[1],g=Object(r.useState)({nume:"",prenume:"",activitate:"",nr_tel:"",mail:""}),C=Object(u.a)(g,2),N=C[0],q=C[1],y=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,r=Object(l.a)({},N);r[t]=n,q(r)},S=function(e,t){e.preventDefault(),E(t.id);var n={nume:t.nume,prenume:t.prenume,activitate:t.activitate,nr_tel:t.nr_tel,mail:t.mail};q(n)},_=Object(r.useState)(null),k=Object(u.a)(_,2),D=k[0],E=k[1],I=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,r=Object(l.a)({},f);r[t]=n,v(r)},A=function(){E(null)},F=function(e){var t=Object(i.a)(n),r=n.findIndex((function(t){return t.id===e}));t.splice(r,1),a(t)};return Object(b.jsxs)("div",{className:"tabel-container",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:D,nume:N.nume,prenume:N.prenume,activitate:N.activitate,nr_tel:N.nr_tel,mail:N.mail},r=Object(i.a)(n);r[n.findIndex((function(e){return e.id===D}))]=t,a(r),E(null)},children:[Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"active",href:"tech",children:"Tech"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"promo",children:"Promovare"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"rep",children:"Reprezentare"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"hr",children:"HR"})})]}),Object(b.jsxs)("table",{className:"table",id:"table-to-xls",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nume"}),Object(b.jsx)("th",{children:"Prenume"}),Object(b.jsx)("th",{children:"Numar perioade active"}),Object(b.jsx)("th",{children:"Numar de telefon"}),Object(b.jsx)("th",{children:"Adresa de mail institutionala"})]})}),Object(b.jsx)("tbody",{children:n.map((function(e,t){return Object(b.jsx)(r.Fragment,{children:D===e.id?Object(b.jsx)(h,{editFormData:N,handleEditFormChange:y,handleCancelClick:A}):Object(b.jsx)(m,{member:e,handleEditClick:S,handleDeleteClick:F})})}))})]})]}),Object(b.jsx)("h3",{children:"Adauga un membru nou"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(s.a)(),nume:f.nume,prenume:f.prenume,activitate:f.activitate,nr_tel:f.nr_tel,mail:f.mail},r=[].concat(Object(i.a)(n),[t]);a(r),console.log("membrii",r)},children:[Object(b.jsxs)("div",{className:"membru-buton",children:[Object(b.jsx)("input",{type:"text",name:"nume",required:"required",placeholder:"Nume",onChange:I}),Object(b.jsx)("input",{type:"text",name:"prenume",required:"required",placeholder:"Prenume",onChange:I}),Object(b.jsx)("input",{type:"text",name:"activitate",required:"required",placeholder:"Activitate",onChange:I}),Object(b.jsx)("input",{type:"text",name:"nr_tel",required:"required",placeholder:"Numar de telefon",onChange:I}),Object(b.jsx)("input",{type:"text",name:"mail",required:"required",placeholder:"Email",onChange:I})]}),Object(b.jsx)("div",{className:"save-button",children:Object(b.jsx)("button",{type:"submit",children:"Adauga"})})]}),Object(b.jsx)("div",{className:"xls-button",children:Object(b.jsx)(o.a,{id:"xls-button",className:"download",table:"table-to-xls",filename:"Tabel_activ",sheet:"tablexls",buttonText:"Export Data to Excel Sheet"})})]})};n(28);var x=function(){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsxs)("div",{className:"leftSide",children:[Object(b.jsx)("div",{children:"Microsoft Learn Student Ambassador"}),Object(b.jsx)("img",{src:"/images/logo.png",alt:""})]})})};n(29);var p=function(){return Object(b.jsx)("div",{className:"footer"})};n(30);var f=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)(O,{}),Object(b.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},g=n(11);c.a.render(Object(b.jsx)(g.a,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()},9:function(e){e.exports=JSON.parse('[{"id":1,"nume":"Stefania","prenume":"Moraru","activitate":2,"nr_tel":"0737256346","mail":"morarustefania20@stud.ase.ro"},{"id":2,"nume":"Olaru","prenume":"Mara","activitate":2,"nr_tel":"0722620120","mail":"olarumara20@stud.ase.ro"},{"id":3,"nume":"John","prenume":"Doe","activitate":1,"nr_tel":"0755620120","mail":"johndoe20@stud.ase.ro"}]')}},[[31,1,2]]]);
//# sourceMappingURL=main.e61cdbcf.chunk.js.map