(this["webpackJsonpmulti-page-port"]=this["webpackJsonpmulti-page-port"]||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(37),n=c.n(s),r=c(27),i=c(16),o=c(8);var j=Object(i.f)((function(e){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"header-inner",children:[Object(o.jsx)(r.b,{className:"logo",to:"/",children:"Ian Mullane."}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{className:"nav-link",to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{className:"nav-link",to:"/Work",children:"Work"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})}));var l=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("footer",{className:"py-5 bg-dark fixed-bottom",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("p",{className:"m-0 text-center text-white",children:"Made with \u2764\ufe0f and \u269b\ufe0f"})})})})},b=c(9),d=c(23),u=c(11),h=c(0),m=c(19),O=c(35),x=c(20),p=c(12),f=c(25);function v(){var e=Object(m.d)(),t=e.gl,c=e.scene,s=e.camera,n=e.size,r=Object(m.c)(f.g),i=Object(a.useMemo)((function(){var e=new f.b(t);e.addPass(new f.e(c,s));var a=Object(x.a)(f.f,Object(p.a)(r));a.colorEdgesMaterial.setEdgeDetectionThreshold(.1);var n=new f.d(c,s),i=new f.h(s,n.renderTarget.texture,{blendFunction:f.a.MULTIPLY,samples:31,rings:4,distanceThreshold:.4,distanceFalloff:.5,rangeThreshold:.5,rangeFalloff:.01,luminanceInfluence:.5,radius:5,intensity:10,bias:.5});i.blendMode.opacity.value=1;var o=new f.c(s,a,i);return o.renderToScreen=!0,e.addPass(n),e.addPass(o),e}),[]);return Object(a.useEffect)((function(){i.setSize(n.width,n.height)}),[n]),Object(m.b)((function(e,t){return i.render(t)}),1)}function g(){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(v,{})})}var w=c.p+"static/media/tex.9199dbe9.jpg";function N(){var e=Object(m.d)().viewport,t=Object(O.c)((function(){return{type:"Kinematic",args:4.5}})),c=Object(u.a)(t,2)[1];return Object(m.b)((function(t){return c.position.set(t.mouse.x*e.width/2,t.mouse.y*e.height/2,7)}))}function y(e){e.color;var t=Object(d.a)(e,["color"]);return Object(O.b)((function(){return Object(b.a)({},t)})),null}function k(){var e=Object(m.d)().viewport;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y,{position:[0,-e.height/2,0],rotation:[-Math.PI/2,0,0]}),Object(o.jsx)(y,{position:[-e.width/2-1,0,0],rotation:[0,Math.PI/2,0]}),Object(o.jsx)(y,{position:[e.width/2+1,0,0],rotation:[0,-Math.PI/2,0]}),Object(o.jsx)(y,{position:[0,0,0],rotation:[0,0,0]}),Object(o.jsx)(y,{position:[0,0,12],rotation:[0,-Math.PI,0]})]})}function I(e){var t=e.count,c=void 0===t?150:t,a=Object(m.d)().viewport,s=(Object(m.c)(h.TextureLoader,w),Object(O.c)((function(e){return{mass:100,position:[4-8*Math.random(),a.height,0,0],args:1}}))),n=Object(u.a)(s,1)[0];return Object(o.jsxs)("instancedMesh",{ref:n,castShadow:!0,receiveShadow:!0,args:[null,null,c],children:[Object(o.jsx)("sphereBufferGeometry",{args:[1,32,32]}),Object(o.jsx)("meshPhysicalMaterial",{color:"#111",clearcoat:10,clearcoatRoughness:0})]})}function S(){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)(m.a,{concurrent:!0,shadowMap:!0,gl:{alpha:!1,antialias:!1},camera:{position:[0,0,20],fov:50,near:17,far:40},children:[Object(o.jsx)("fog",{attach:"fog",args:["#d94575",15,40]}),Object(o.jsx)("color",{attach:"background",args:["#ffffff"]}),Object(o.jsx)("ambientLight",{intensity:.8}),Object(o.jsx)("directionalLight",{position:[50,50,25],angle:.3,intensity:2,castShadow:!0,"shadow-mapSize-width":100,"shadow-mapSize-height":100,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(o.jsx)("directionalLight",{position:[-10,-10,-5],intensity:.5}),Object(o.jsxs)(a.Suspense,{fallback:null,children:[Object(o.jsx)(O.a,{gravity:[0,-20,0],defaultContactMaterial:{restitution:.6},children:Object(o.jsxs)("group",{position:[0,1.55,-10],children:[Object(o.jsx)(N,{}),Object(o.jsx)(k,{}),Object(o.jsx)(I,{})]})}),Object(o.jsx)(g,{})]})]}),Object(o.jsxs)("div",{className:"hire-section",children:[Object(o.jsx)("h2",{className:"hire-section__title",children:"Hello, my name is Ian"}),Object(o.jsx)("p",{children:"I am studying Computer Science at Arizona State University"}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"and I love working with JavaScript, React, Three.js, and Node.js"})}),Object(o.jsx)("p",{children:"Contact me to create a beautiful and interactive web experience for your valley business!"}),Object(o.jsx)("a",{href:"https://ian-m.xyz/contact",className:"button",children:"reach me"})]})]})}var M=function(){return Object(o.jsx)(o.Fragment,{})},P=c(14),z=c.n(P),T=c(18),C=c(52),L=c(53),F=c(47),E=(c(66),function(){var e=Object(C.a)(),t=e.register,c=(e.errors,e.handleSubmit),a=e.reset,s=function(){var e=Object(T.a)(z.a.mark((function e(t){var c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={name:t.name,email:t.email,subject:t.subject,message:t.message},e.next=4,L.a.send("service_59ne85j","template_7p1hni4",c,"user_3tpPmE2mQehL0DomGKYQz");case 4:a(),Object(F.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"ContactForm",children:Object(o.jsx)("div",{className:"ContactContainer",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("div",{className:"contactForm",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:c(s),noValidate:!0,children:[Object(o.jsxs)("div",{className:"row formRow",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}})),{},{className:"form-control formInput",placeholder:"Name"}))}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)("input",Object(b.a)(Object(b.a)({type:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{className:"form-control formInput",placeholder:"Email address"}))})]}),Object(o.jsx)("div",{className:"row formRow",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}})),{},{className:"form-control formInput",placeholder:"Business Name"}))})}),Object(o.jsx)("div",{className:"row formRow",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("textarea",Object(b.a)(Object(b.a)({rows:3},t("message",{required:!0})),{},{className:"form-control formInput",placeholder:"Tell me about your business"}))})}),Object(o.jsx)("button",{className:"submit-btn",type:"submit",children:"Submit"})]})}),Object(o.jsx)(F.a,{})]})})})})});c(67);var _=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",exact:!0,component:function(){return Object(o.jsx)(S,{})}}),Object(o.jsx)(i.a,{path:"/Work",exact:!0,component:function(){return Object(o.jsx)(M,{})}}),Object(o.jsx)(i.a,{path:"/contact",exact:!0,component:function(){return Object(o.jsx)(E,{})}})]}),Object(o.jsx)(l,{})]})})};n.a.render(Object(o.jsx)(_,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4ca60ff4.chunk.js.map