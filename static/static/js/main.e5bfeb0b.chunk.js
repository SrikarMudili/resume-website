(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=(a(22),a(12)),u=a(13),m=a(16),i=a(15),o=a(14),h=a.n(o);a(40);var E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={resume:null},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return h.a.get("https://srikar-resume.herokuapp.com/resume").then((function(t){e.setState({resume:t.data})})),r.a.createElement("div",{className:"container"},null==this.state.resume?r.a.createElement("h4",null," Resume is loading "):r.a.createElement("div",null,r.a.createElement("h1",null," NAME: "),r.a.createElement("h1",null," ",this.state.resume.name," "),r.a.createElement("h1",null," AGE: "),r.a.createElement("h2",null," ",this.state.resume.age," "),r.a.createElement("h1",null," GPA OUT OF 4.3: "),r.a.createElement("h2",null," ",this.state.resume.gpa," "),r.a.createElement("h2",null," HOBBIES: "),r.a.createElement("ul",{className:"list-group"},this.state.resume.hobbies.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("h2",null," SPORTS: "),r.a.createElement("ul",{className:"list-group"},this.state.resume.sports.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("h2",null," COURSES I HAVE TAKEN: "),r.a.createElement("ul",{className:"list-group"},this.state.resume.courses.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("h2",null," AWARDS: "),r.a.createElement("ul",{className:"list-group"},this.state.resume.awards.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("img",{src:"nhdpicture.jpg",className:"profile-image",alt:"morty junior"})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e5bfeb0b.chunk.js.map