(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{2862:function(e,t,n){Promise.resolve().then(n.bind(n,3958))},9426:function(e,t,n){"use strict";n.d(t,{E3:function(){return a},qM:function(){return c}}),n(6463);let r="https://rttlneepbqffqwjfjvot.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dGxuZWVwYnFmZnF3amZqdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjU2NzEsImV4cCI6MjAyOTE0MTY3MX0.0uxE6b3BzqL5eZa1KgZKjq4rHKOIuUDHIgEoZL_RxE0";async function a(){try{let e=await fetch("".concat(r,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:s}});if(!e.ok)throw Error("Can not get the car");return await e.json()}catch(e){return console.log(e),[]}}async function c(e){try{let t=await fetch("".concat(r,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:s}});if(!t.ok)throw Error("Can not get the car");let n=await t.json();console.log(n),console.log(e);let a=n.find(t=>t.id===parseInt(e));return console.log(a),a}catch(e){return console.log(e),[]}}},8464:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r=n(7437);function s(e){let{car:t}=e;return(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)("a",{href:"/car?slug=".concat(t.id),className:"flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col",children:[(0,r.jsx)("div",{className:"car-img h-full w-[auto] rounded-t",children:(0,r.jsx)("img",{className:"object-cover h-full max-w-full",src:t.img_url,alt:"carImg"})}),(0,r.jsxs)("div",{className:"flex flex-col p-4 mr-auto",children:[t.brand.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+t.name.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+t.year,(0,r.jsxs)("span",{className:"text-gray-600 text-[14px]",children:["Estrellas ",(e=>{let t=[];for(let n=0;n<e;n++)t.push((0,r.jsx)("span",{children:"★"},n));return t})(t.stars)]})]})]})})}},3958:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),s=n(2265),a=n(8783);n(8877);var c=n(9426),l=n(8464),o=n(2634),i=n(5829);function u(){let[e,t]=(0,s.useState)([]),[n,u]=(0,s.useState)();return(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,c.E3)();t(e)}catch(e){console.log(e)}})()},[]),(0,r.jsxs)("main",{className:"p-10",children:[(0,r.jsx)(a.V,{children:"Cars"}),(0,r.jsx)("h2",{className:"text-xl font-bold mb-5 ml-1",children:"Search car"}),(0,r.jsx)(o.M,{}),e?e.length<=0?(0,r.jsx)(i.g,{}):(0,r.jsx)("div",{className:"flex gap-6 mt-10",children:(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("div",{className:"cars  grid grid-cols-4 gap-5",children:e.map((e,t)=>(0,r.jsx)(l._,{car:e},"".concat(e.id,"-").concat(t)))})})}):(0,r.jsx)(i.g,{})]})}},5829:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var r=n(7437);function s(){return(0,r.jsxs)("svg",{className:"animate-spin size-5 text-white block mx-auto mt-[100px]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-50",cx:"12",cy:"12",r:"10",stroke:"#000",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-100",fill:"#000",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},8783:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(7437);function s(e){let{children:t}=e;return(0,r.jsx)("div",{className:"w-full text-center text-6xl font-bold mt-10 mb-10",children:t})}},2634:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(7437),s=n(2265);function a(){let[e,t]=(0,s.useState)();return(0,r.jsxs)("div",{className:"search-form flex",children:[(0,r.jsx)("input",{onChange:e=>{t(e.target.value)},autoFocus:!0,className:"text-[14px] text-gray-800 border sm:text-[18px] rounded-l-full py-3 ps-14 pe-2 outline-none max-w-[calc(100%-72px)] w-[400px]",placeholder:"Search Car",type:"text"}),(0,r.jsx)("a",{href:"/search?car=".concat(e),className:"flex items-center bg-neutral-950 text-white rounded-r-full px-10",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor",className:"w-10 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})})})]})}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},8877:function(){}},function(e){e.O(0,[404,971,23,744],function(){return e(e.s=2862)}),_N_E=e.O()}]);