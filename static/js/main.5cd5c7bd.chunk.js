(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),l=s(5),n=(s(14),s(0));function c(){return Object(n.jsx)("section",{id:"about",children:Object(n.jsxs)("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center",children:[Object(n.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(n.jsxs)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white",children:["Hi, I'm Gonesh Chandra Das.",Object(n.jsx)("br",{className:"hidden lg:inline-block"}),"I love to build amazing apps."]}),Object(n.jsx)("p",{className:"mb-8 leading-relaxed",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?"}),Object(n.jsxs)("div",{className:"flex justify-center",children:[Object(n.jsx)("a",{href:"#contact",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg",children:"Work With Me"}),Object(n.jsx)("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",children:"See My Past Work"})]})]}),Object(n.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(n.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"./gonesh.jpg"})})]})})}var r=s(2);function o(){var e=i.a.useState(""),t=Object(r.a)(e,2),s=t[0],a=t[1],l=i.a.useState(""),c=Object(r.a)(l,2),o=c[0],m=c[1],d=i.a.useState(""),x=Object(r.a)(d,2),u=x[0],b=x[1];return Object(n.jsx)("section",{id:"contact",className:"relative",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap",children:[Object(n.jsxs)("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative",children:[Object(n.jsx)("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=Sylhet+Sadar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}),Object(n.jsxs)("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md",children:[Object(n.jsxs)("div",{className:"lg:w-1/2 px-6",children:[Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"ADDRESS"}),Object(n.jsxs)("p",{className:"mt-1",children:["Sylhet Sadar ",Object(n.jsx)("br",{}),"Sylhet-3100"]})]}),Object(n.jsxs)("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0",children:[Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"EMAIL"}),Object(n.jsx)("a",{href:!0,className:"text-indigo-400 leading-relaxed",children:"gonesh923@email.com"}),Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4",children:"PHONE"}),Object(n.jsx)("p",{className:"leading-relaxed",children:"+8801753882282"})]})]})]}),Object(n.jsxs)("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:s,email:o,message:u},Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Message sent!")})).catch((function(e){return alert(e)}))},className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0",children:[Object(n.jsx)("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font",children:"Hire Me"}),Object(n.jsx)("p",{className:"leading-relaxed mb-5",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit officia aspernatur veritatis. Asperiores, aliquid?"}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400",children:"Name"}),Object(n.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return a(e.target.value)}})]}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400",children:"Email"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400",children:"Message"}),Object(n.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return b(e.target.value)}})]}),Object(n.jsx)("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Submit"})]})]})})}var m=s(17);function d(){return Object(n.jsx)("header",{className:"bg-gray-800 md:sticky top-0 z-10",children:Object(n.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(n.jsx)("a",{href:!0,className:"title-font font-medium text-white mb-4 md:mb-0",children:Object(n.jsx)("a",{href:"#about",className:"ml-3 text-xl",children:"Gonesh Chandra Das"})}),Object(n.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center",children:[Object(n.jsx)("a",{href:"#projects",className:"mr-5 hover:text-white",children:"Past Work"}),Object(n.jsx)("a",{href:"#skills",className:"mr-5 hover:text-white",children:"Skills"}),Object(n.jsx)("a",{href:"#testimonials",className:"mr-5 hover:text-white",children:"Testimonials"})]}),Object(n.jsxs)("a",{href:"#contact",className:"inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0",children:["Hire Me",Object(n.jsx)(m.a,{className:"w-4 h-4 ml-1"})]})]})})}var x=s(18),u=[{title:"Laravel CRM",subtitle:"Full Stack",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./logorm.png",link:"https://www.rmgeducation.com"},{title:"SGFL",subtitle:"Laravel",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./logo.png",link:"https://sgflorg.online"},{title:"Siyuanlim",subtitle:"WordPress",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./Lsy.png",link:"https://siyuanlim.com"},{title:"Nano Soma Miracle",subtitle:"WordPress",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./aa.png",link:"https://nanosomamiracle.com"}],b=[{quote:"He is excellent",image:"./gonesh.jpg",name:"CEO",company:"Client"},{quote:"Good Work",image:"./gonesh.jpg",name:"Tom Brothers",company:"Client"}],j=[{name:"HTML"},{name:"CSS"},{name:"Bootstrap"},{name:"Tailwind CSS"},{name:"Javascript"},{name:"React.js"},{name:"Vue.js"},{name:"PHP"},{name:"Laravel"},{name:"MySQL"},{name:"JSON"},{name:"API"},{name:"Github"},{name:"Photoshop/Illustrator"}];function h(){return Object(n.jsx)("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40",children:[Object(n.jsxs)("div",{className:"flex flex-col w-full mb-20",children:[Object(n.jsx)(x.a,{className:"mx-auto inline-block w-10 mb-4"}),Object(n.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white",children:"Apps I've Built"}),Object(n.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore."})]}),Object(n.jsx)("div",{className:"flex flex-wrap -m-4",children:u.map((function(e){return Object(n.jsx)("a",{href:e.link,className:"sm:w-1/2 w-100 p-4",children:Object(n.jsxs)("div",{className:"flex relative",children:[Object(n.jsx)("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),Object(n.jsxs)("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100",children:[Object(n.jsx)("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1",children:e.subtitle}),Object(n.jsx)("h1",{className:"title-font text-lg font-medium text-white mb-3",children:e.title}),Object(n.jsx)("p",{className:"leading-relaxed",children:e.description})]})]})},e.image)}))})]})})}var g=s(19),p=s(20);function f(){return Object(n.jsx)("section",{id:"skills",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[Object(n.jsxs)("div",{className:"text-center mb-20",children:[Object(n.jsx)(g.a,{className:"w-10 inline-block mb-4"}),Object(n.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4",children:"Skills & Technologies"}),Object(n.jsx)("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est."})]}),Object(n.jsx)("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2",children:j.map((function(e){return Object(n.jsx)("div",{className:"p-2 sm:w-1/2 w-full",children:Object(n.jsxs)("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center",children:[Object(n.jsx)(p.a,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),Object(n.jsx)("span",{className:"title-font font-medium text-white",children:e.name})]})},e)}))})]})})}var O=s(21),N=s(22);function w(){return Object(n.jsx)("section",{id:"testimonials",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center",children:[Object(n.jsx)(O.a,{className:"w-10 inline-block mb-4"}),Object(n.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-12",children:"Client Testimonials"}),Object(n.jsx)("div",{className:"flex flex-wrap m-4",children:b.map((function(e){return Object(n.jsx)("div",{className:"p-4 md:w-1/2 w-full",children:Object(n.jsxs)("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded",children:[Object(n.jsx)(N.a,{className:"block w-8 text-gray-500 mb-4"}),Object(n.jsx)("p",{className:"leading-relaxed mb-6",children:e.quote}),Object(n.jsxs)("div",{className:"inline-flex items-center",children:[Object(n.jsx)("img",{alt:"testimonial",src:e.image,className:"w-12 rounded-full flex-shrink-0 object-cover object-center"}),Object(n.jsxs)("span",{className:"flex-grow flex flex-col pl-4",children:[Object(n.jsx)("span",{className:"title-font font-medium text-white",children:e.name}),Object(n.jsx)("span",{className:"text-gray-500 text-sm uppercase",children:e.company})]})]})]})})}))})]})})}function y(){return Object(n.jsxs)("main",{className:"text-gray-400 bg-gray-900 body-font",children:[Object(n.jsx)(d,{}),Object(n.jsx)(c,{}),Object(n.jsx)(h,{}),Object(n.jsx)(f,{}),Object(n.jsx)(w,{}),Object(n.jsx)(o,{})]})}var v=document.getElementById("root");Object(l.createRoot)(v).render(Object(n.jsx)(a.StrictMode,{children:Object(n.jsx)(y,{})}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5cd5c7bd.chunk.js.map