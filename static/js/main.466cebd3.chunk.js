(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),i=n(10),c=n.n(i),l=(n(18),n(3)),s=n(33),u=function(e){return"@media (max-width: ".concat({xs:"575.98px",md:"991.98px"}[e],")")},d=Object(s.a)({App:(a={width:"50%",margin:"0 auto"},Object(l.a)(a,u("md"),{width:"70%"}),Object(l.a)(a,u("xs"),{width:"90%"}),a),header:{textAlign:"center","& h1":Object(l.a)({color:"#2c3e50",margin:"5vh 0 0 0",fontSize:"5rem",fontWeight:"300","& span":{fontWeight:"700"}},u("xs"),{fontSize:"4.5rem"}),"& h2":Object(l.a)({color:"#9aa1a5",fontSize:"1rem",fontWeight:"300"},u("xs"),{fontSize:"0.6rem"})},link:{display:"flex",justifyContent:"center",backfaceVisibility:"hidden",color:"#81b3d2",fontSize:"0.7rem",position:"relative",textDecoration:"none",transition:"0.5s color ease"}}),m=n(1),f=n(5),p=n(12),h=n(11),b=n.n(h),O=function(e,t){switch(t.type){case"ADD_TODO":return[].concat(Object(p.a)(e),[{id:b()(),task:t.task,completed:!1}]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{completed:!e.completed}):e}));case"EDIT_TODO":return e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{task:t.task}):e}));default:return e}};var g=function(e,t,n){var a=Object(o.useReducer)(t,n,(function(){var t;try{t=JSON.parse(window.localStorage.getItem(e)||String(n))}catch(a){t=n}return t})),r=Object(m.a)(a,2),i=r[0],c=r[1];return Object(o.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,c]},E=[{id:"0",task:"Read a book",completed:!1},{id:"1",task:"Jog in a playground",completed:!0},{id:"2",task:"Write articles",completed:!1}],v=Object(o.createContext)(),k=Object(o.createContext)();function j(e){var t=g("todos",O,E),n=Object(m.a)(t,2),a=n[0],o=n[1];return r.a.createElement(v.Provider,{value:a},r.a.createElement(k.Provider,{value:o},e.children))}var w=function(e){var t=Object(o.useState)(e),n=Object(m.a)(t,2),a=n[0],r=n[1];return[a,function(e){return r(e.target.value)},function(){return r("")}]},y=Object(s.a)({TodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"100%",height:"2rem",background:"none",border:"none",borderBottom:"1px solid #34495e",color:"#34495e",fontSize:"1.2rem",fontWeight:"300",outline:"none"}});var x=function(){var e=y(),t=Object(o.useContext)(k),n=w(""),a=Object(m.a)(n,3),i=a[0],c=a[1],l=a[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_TODO",task:i}),l()},className:e.TodoForm},r.a.createElement("input",{placeholder:"Add your task here...",value:i,onChange:c,className:e.input}))},T=Object(s.a)({Todo:{width:"100%",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"0.5rem",color:"#34495e",fontSize:"1rem",lineHeight:"2.5rem",overflowX:"hidden",transition:"all 0.3s ease","&:hover":{background:"rgba(0, 0, 0, 0.03)",cursor:"pointer"},"&:hover div":{opacity:"1"}},icons:{width:"40px",display:"inline-flex",alignItems:"center",justifyContent:"space-between",marginRight:"1rem",float:"right",transition:"all 0.3s",opacity:"0"}}),C=Object(s.a)({EditTodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"85%",background:"transparent",border:"none",borderBottom:"1px solid #ccc",fontSize:"1rem",transition:"0.6s",transform:"translateY(8px)","&:focus":{borderBottom:"1px solid #58b2dc",outline:"none"}}});var D=function(e){var t=e.id,n=e.task,a=e.toggleEditForm,i=C(),c=Object(o.useContext)(k),l=w(n),s=Object(m.a)(l,3),u=s[0],d=s[1],f=s[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({type:"EDIT_TODO",id:t,task:u}),a(),f()},className:i.EditTodoForm},r.a.createElement("input",{autoFocus:!0,value:u,onChange:d,onClick:function(e){return e.stopPropagation()},className:i.input}))};var S=Object(o.memo)((function(e){var t=e.id,n=e.task,a=e.completed,i=T(),c=Object(o.useContext)(k),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.useState)(e),n=Object(m.a)(t,2),a=n[0],r=n[1],i=function(){return r(!a)};return[a,i]}(!1),s=Object(m.a)(l,2),u=s[0],d=s[1];return u?r.a.createElement("li",{className:i.Todo,style:{overflowY:"hidden"},onClick:function(){return d()}},r.a.createElement(D,{id:t,task:n,toggleEditForm:d})):r.a.createElement("li",{className:i.Todo,onClick:function(){return c({type:"TOGGLE_TODO",id:t})}},r.a.createElement("span",{style:{textDecoration:a?"line-through":"",color:a?"#bdc3c7":"#34495e"}},n),r.a.createElement("div",{className:i.icons},r.a.createElement("i",{style:{color:"#c0392b"},className:"fas fa-trash",onClick:function(e){e.stopPropagation(),c({type:"REMOVE_TODO",id:t})}}),r.a.createElement("i",{style:{color:"#2f5fff"},className:"fas fa-edit",onClick:function(e){e.stopPropagation(),d()}})))}));var N=function(){var e=Object(o.useContext)(v);return r.a.createElement("ul",{style:{paddingLeft:10,width:"95%"}},e.map((function(e){return r.a.createElement(S,Object.assign({key:e.id},e))})))};var z=function(){return r.a.createElement(j,null,r.a.createElement(x,null),r.a.createElement(N,null))};var B=function(){var e=d();return r.a.createElement("div",{className:e.App},r.a.createElement("header",{className:e.header},r.a.createElement("h1",null,"todo",r.a.createElement("span",null,"list")),r.a.createElement("h2",null,"A simple todolist app built with React Hooks & Context")),r.a.createElement(z,null),r.a.createElement("a",{href:"https://github.com/MiKoKappa",className:e.link},r.a.createElement("strong",null,"Built by Miko\u0142aj Tkaczyk")),r.a.createElement("a",{href:"https://medium.com/@walkccc/build-a-todo-list-app-with-react-hooks-and-context-a7f8e9f158af",className:e.link},r.a.createElement("strong",null,"based on tutorial by \xa9 Jay Chen")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.466cebd3.chunk.js.map