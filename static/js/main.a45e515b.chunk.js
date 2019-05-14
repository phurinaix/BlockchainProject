(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(27),r=a.n(c),s=(a(62),a(63),a(21)),i=a(15),u=(a(64),function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Thammasat University"))}),o=a(47),m=a(48),d=a(55),h=a(49),p=a(56),b=a(108),E=a(111),g=a(106),v=function(e){return l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,null,e.label),l.a.createElement(b.a.Control,{type:e.type,value:e.value,onChange:e.change}),""!==e.text&&l.a.createElement(b.a.Text,{className:"text-muted"},e.text))},y=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Thammasat Blockchain Academic Credential"),l.a.createElement("h4",null,"How to apply for putting your diploma to Blockchain"),l.a.createElement(b.a,{onSubmit:e.submit,className:"col-md-5",autoComplete:"off"},""!==e.invalidText&&l.a.createElement(E.a,{variant:"danger"},e.invalidText),l.a.createElement(v,{label:"Student name",type:"text",text:"Your student name must contain only letters and must not contain spaces.",value:e.studentName,change:e.studentNameChange}),l.a.createElement(v,{label:"Student ID",type:"text",text:"Your student id number must be 10 characters long, contain only numbers and must not contain spaces.",value:e.studentId,change:e.studentIdChange}),l.a.createElement(g.a,{variant:"primary",type:"submit",className:"w-100"},"Send")))},f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{onSubmit:e.submit,className:"col-md-6"},l.a.createElement("h4",null,"Please first download the blockchain wallet from the link"),l.a.createElement("ul",null,l.a.createElement("li",null,"For iOS: ",l.a.createElement("u",null,"https://itunes.apple.com/us/app/blockcerts-wallet/id1146921514?mt=8")),l.a.createElement("li",null,"For Android: ",l.a.createElement("u",null,"https://play.google.com/store/apps/details?id=com.learningmachine.android.app&hl=en"))),l.a.createElement("h4",null,"Install it on your phone or computer."),l.a.createElement("h4",null,"Once you have your public key provide it to us:"),""!==e.invalidText&&l.a.createElement(E.a,{variant:"danger"},e.invalidText),l.a.createElement(v,{label:"Public Key",type:"text",value:e.pubKey,change:e.pubKeyChange}),l.a.createElement("p",null,"Which documents you want ?"),l.a.createElement(v,{label:"Diploma",type:"checkbox",value:e.diploma,change:e.diplomaChange}),l.a.createElement(v,{label:"Transcript",type:"checkbox",value:e.transcript,change:e.transcriptChange}),l.a.createElement(g.a,{variant:"primary",type:"submit",className:"w-100"},"Send")))},S=a(30),x=a.n(S),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={studentName:"",studentId:"",requestInvalidText:"",isRequestSuccess:!1,pubKey:"",diploma:!1,transcript:!1,pubKeyInvalidText:"",isPubKeySuccess:!1},a.handleStudentNameChange=function(e){a.setState({studentName:e.target.value})},a.handleStudentIdChange=function(e){a.setState({studentId:e.target.value})},a.handleRequestSubmit=function(e){e.preventDefault(),x.a.post("https://still-badlands-79996.herokuapp.com/request",{studentName:a.state.studentName,studentId:a.state.studentId}).then(function(e){var t=e.data;"success"===t?a.setState({requestInvalidText:"",isRequestSuccess:!0}):"name1"===t?a.setState({requestInvalidText:"Student name must contain only English characters"}):"id1"===t?a.setState({requestInvalidText:"Student ID must contain only number"}):"id2"===t&&a.setState({requestInvalidText:"Student ID must consisting of 10 digits"})}).catch(function(e){console.log(e)})},a.handlePubKeyChange=function(e){a.setState({pubKey:e.target.value})},a.handleDiplomaChange=function(e){a.setState({diploma:e.target.checked})},a.handleTranscriptChange=function(e){a.setState({transcript:e.target.checked})},a.handlePubKeySubmit=function(e){e.preventDefault(),x.a.post("https://still-badlands-79996.herokuapp.com/pubKey",{pubKey:a.state.pubKey,diploma:a.state.diploma,transcript:a.state.transcript}).then(function(e){var t=e.data;"success"===t?(a.setState({pubKeyInvalidText:"",isPubKeySuccess:!0}),alert("Success"),a.props.history.push("/blockchain/")):"err1"===t?a.setState({pubKeyInvalidText:"Public Key Invalid"}):"err2"===t&&a.setState({pubKeyInvalidText:"You have to choose either diploma or transcript"})}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.isRequestSuccess?l.a.createElement(f,{pubKey:this.state.pubKey,diploma:this.state.diploma,transcript:this.state.transcript,pubKeyChange:this.handlePubKeyChange,diplomaChange:this.handleDiplomaChange,transcriptChange:this.handleTranscriptChange,submit:this.handlePubKeySubmit,invalidText:this.state.pubKeyInvalidText}):l.a.createElement(y,{studentName:this.state.studentName,studentId:this.state.studentId,studentNameChange:this.handleStudentNameChange,studentIdChange:this.handleStudentIdChange,submit:this.handleRequestSubmit,invalidText:this.state.requestInvalidText}))}}]),t}(n.Component),C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Path doesn't exist !!"))},I=a(110),w=a(107),T=a(109),K=a(19),N=(a(102),function(){return l.a.createElement(I.a,{collapseOnSelect:!0,expand:"lg",className:"navbar-header mb-5"},l.a.createElement(w.a,null,l.a.createElement(K.LinkContainer,{to:"/profile/"},l.a.createElement(I.a.Brand,{className:"navbar-logo p-0 m-0"},l.a.createElement("img",{src:"http://www.tu.ac.th/uploads/main-logo.svg",width:"75%",alt:""}))),l.a.createElement(I.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"toggle-button p-0"}),l.a.createElement(I.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(T.a,{className:"ml-auto text-center link"},l.a.createElement(K.LinkContainer,{to:"/blockchain/"},l.a.createElement(T.a.Link,null,"HOME")),l.a.createElement(K.LinkContainer,{to:"/blockchain/request"},l.a.createElement(T.a.Link,null,"REQUEST")),l.a.createElement(K.LinkContainer,{to:"#"},l.a.createElement(T.a.Link,null,"VERIFY"))))))}),q=function(e){return l.a.createElement(w.a,null,e.children)};var P=function(){return l.a.createElement(s.BrowserRouter,null,l.a.createElement(N,null),l.a.createElement(q,null,l.a.createElement(i.g,null,l.a.createElement(i.d,{path:"/blockchain",component:u,exact:!0}),l.a.createElement(i.d,{path:"/blockchain/request",component:k}),l.a.createElement(i.d,{component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a(105)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.a45e515b.chunk.js.map