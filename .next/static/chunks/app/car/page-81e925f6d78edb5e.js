(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{2431:function(){},2933:function(e,t,s){Promise.resolve().then(s.bind(s,564))},9426:function(e,t,s){"use strict";s.d(t,{E3:function(){return c},qM:function(){return r}}),s(6463);let n="https://rttlneepbqffqwjfjvot.supabase.co",a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dGxuZWVwYnFmZnF3amZqdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjU2NzEsImV4cCI6MjAyOTE0MTY3MX0.0uxE6b3BzqL5eZa1KgZKjq4rHKOIuUDHIgEoZL_RxE0";async function c(){try{let e=await fetch("".concat(n,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:a}});if(!e.ok)throw Error("Can not get the car");return await e.json()}catch(e){return console.log(e),[]}}async function r(e){try{let t=await fetch("".concat(n,"/rest/v1/car"),{method:"GET",headers:{"Content-Type":"application/json",apikey:a}});if(!t.ok)throw Error("Can not get the car");let s=await t.json();console.log(s),console.log(e);let c=s.find(t=>t.id===parseInt(e));return console.log(c),c}catch(e){return console.log(e),[]}}},564:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s(7437),a=s(2265),c=s(9426),r=s(5829);async function l(){return new URLSearchParams(window.location.search).get("slug")}function i(){let[e,t]=(0,a.useState)(null),[s,i]=(0,a.useState)(null),[o,u]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{l().then(e=>{i(e),u(!1)}).catch(e=>{console.error(e),u(!1)})},[]),(0,a.useEffect)(()=>{s&&(async()=>{try{let e=await (0,c.qM)(s);t(e)}catch(e){console.error(e)}})()},[s]),(0,n.jsx)("main",{className:"p-5",children:o?(0,n.jsx)(r.g,{}):e?(0,n.jsx)("div",{className:"flex gap-6",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{className:"car flex rounded",children:[(0,n.jsx)("div",{className:"flex gap-2 full",children:(0,n.jsxs)("div",{className:"info flex flex-col text-6xl p-4",children:[(0,n.jsx)("span",{className:"border-b border-gray-400 w-full p-4",children:e.brand.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+e.name.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}),(0,n.jsxs)("div",{className:"p-4 flex flex-col",children:[(0,n.jsx)("span",{className:"text-gray-600 text-[14px] mb-6 mt-4",children:"Estrellas - N\xb0 de reviews"}),(0,n.jsxs)("span",{className:"text-gray-800 text-2xl mb-2",children:["Year: ",e.year]}),(0,n.jsxs)("span",{className:"text-gray-800 text-2xl mb-2",children:["Price: ",e.price]})]})]})},"".concat(e.id)),(0,n.jsx)("img",{className:"h-[80vh] w-[auto] ml-auto rounded-r",src:e.img_url,alt:""})]})})})}):(0,n.jsx)(r.g,{})})}s(7641)},5829:function(e,t,s){"use strict";s.d(t,{g:function(){return a}});var n=s(7437);function a(){return(0,n.jsxs)("svg",{className:"animate-spin size-5 text-white block mx-auto mt-[100px]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-50",cx:"12",cy:"12",r:"10",stroke:"#000",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-100",fill:"#000",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}}},function(e){e.O(0,[881,634,971,23,744],function(){return e(e.s=2933)}),_N_E=e.O()}]);