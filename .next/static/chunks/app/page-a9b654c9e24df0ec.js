(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4758:function(e,t,s){Promise.resolve().then(s.bind(s,7434))},9426:function(e,t,s){"use strict";s.d(t,{E3:function(){return a},qM:function(){return c}}),s(6463);let n="https://rttlneepbqffqwjfjvot.supabase.co",r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dGxuZWVwYnFmZnF3amZqdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjU2NzEsImV4cCI6MjAyOTE0MTY3MX0.0uxE6b3BzqL5eZa1KgZKjq4rHKOIuUDHIgEoZL_RxE0";async function a(){try{let e=await fetch("".concat(n,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:r}});if(!e.ok)throw Error("Can not get the car");return await e.json()}catch(e){return console.log(e),[]}}async function c(e){try{let t=await fetch("".concat(n,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:r}});if(!t.ok)throw Error("Can not get the car");let s=await t.json();console.log(s),console.log(e);let a=s.find(t=>t.id===parseInt(e));return console.log(a),a}catch(e){return console.log(e),[]}}},8464:function(e,t,s){"use strict";s.d(t,{_:function(){return r}});var n=s(7437);function r(e){let{car:t}=e;return(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("a",{href:"/car?slug=".concat(t.id),className:"flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col",children:[(0,n.jsx)("div",{className:"car-img h-full w-[auto] rounded-t",children:(0,n.jsx)("img",{className:"object-cover h-full max-w-full",src:t.img_url,alt:"carImg"})}),(0,n.jsxs)("div",{className:"flex flex-col p-4 mr-auto",children:[t.brand.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+t.name.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+t.year,(0,n.jsxs)("span",{className:"text-gray-600 text-[14px]",children:["Estrellas ",(e=>{let t=[];for(let s=0;s<e;s++)t.push((0,n.jsx)("span",{children:"★"},s));return t})(t.stars)]})]})]})})}},7434:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n=s(7437),r=s(4026);s(8877);var a=s(2634);function c(e){let{num:t,text:s}=e;return(0,n.jsxs)("div",{className:"cars-count flex flex-col cars-count",children:[(0,n.jsx)("span",{className:"font-medium text-6xl pb-3",children:t}),(0,n.jsx)("hr",{className:"w-100 bg-black h-px"}),(0,n.jsx)("span",{className:"w-60 pt-2",children:s})]})}var l=s(2265),i=s(9426),o=s(8464);function u(){let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(0,i.E3)().then(e=>{t(e.slice(0,4))}).catch(e=>{console.error("Error al obtener los autos:",e)})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"cars grid grid-cols-4 gap-5",children:e.map((e,t)=>(0,n.jsx)(o._,{car:e},"".concat(e.id,"-").concat(t)))})})}function x(){return(0,n.jsxs)("main",{className:"bg-white text-black",children:[(0,n.jsxs)("section",{className:"welcome flex flex-col items-center justify-center h-lvh font-black",children:[(0,n.jsx)("h1",{className:"text-5xl w-100 text-center text-white",children:"Welcome to CarsLibrary"}),(0,n.jsx)(a.M,{})]}),(0,n.jsxs)("section",{className:"users flex justify-around mt-20",children:[(0,n.jsx)(c,{num:"100",text:"Car's models to look witch you like the most"}),(0,n.jsx)(c,{num:"5k",text:"Satisfy user with our car's information"}),(0,n.jsx)(c,{num:"+30",text:"Car's brands"})]}),(0,n.jsxs)("sections",{className:"brands flex flex-col p-10",children:[(0,n.jsx)("h2",{className:"brand-title text-3xl text-center mt-20 mb-20 font-bold",children:"More searched cars"}),(0,n.jsx)(u,{})]}),(0,n.jsxs)("sections",{className:"Sign flex flex-col text-center items-center",children:[(0,n.jsx)("h2",{className:"sign-title text-3xl text-center mt-40 mb-10 font-bold",children:"Sign up for New Arrivals"}),(0,n.jsx)(r.j,{})]})]})}},2634:function(e,t,s){"use strict";s.d(t,{M:function(){return a}});var n=s(7437),r=s(2265);function a(){let[e,t]=(0,r.useState)();return(0,n.jsxs)("div",{className:"search-form flex",children:[(0,n.jsx)("input",{onChange:e=>{t(e.target.value)},autoFocus:!0,className:"text-[14px] text-gray-800 border sm:text-[18px] rounded-l-full py-3 ps-14 pe-2 outline-none max-w-[calc(100%-72px)] w-[400px]",placeholder:"Search Car",type:"text"}),(0,n.jsx)("a",{href:"/search?car=".concat(e),className:"flex items-center bg-neutral-950 text-white rounded-r-full px-10",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor",className:"w-10 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})})})]})}},4026:function(e,t,s){"use strict";s.d(t,{j:function(){return r}});var n=s(7437);function r(){return(0,n.jsx)("div",{className:"w-full flex justify-center",children:(0,n.jsxs)("form",{action:"",className:"form rounded-xl bg-slate-100 p-5 w-1/4",children:[(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("input",{required:"",className:"input",type:"text",name:"name",id:"name",placeholder:"Name"}),(0,n.jsx)("input",{required:"",className:"input",type:"text",name:"nickname",id:"nickname",placeholder:"Nickname"})]}),(0,n.jsx)("input",{required:"",className:"input",type:"email",name:"email",id:"email",placeholder:"E-mail"}),(0,n.jsx)("input",{required:"",className:"input",type:"password",name:"password",id:"password",placeholder:"Password"}),(0,n.jsx)("input",{className:"login-button",type:"submit",value:"Sign up"})]})})}},6463:function(e,t,s){"use strict";var n=s(1169);s.o(n,"useSearchParams")&&s.d(t,{useSearchParams:function(){return n.useSearchParams}})},8877:function(){}},function(e){e.O(0,[404,971,23,744],function(){return e(e.s=4758)}),_N_E=e.O()}]);