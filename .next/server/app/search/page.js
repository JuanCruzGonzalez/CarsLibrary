(()=>{var e={};e.id=797,e.ids=[797],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1182:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>o}),r(2924),r(7139),r(5866);var a=r(3191),t=r(8716),l=r(7922),n=r.n(l),i=r(5231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(s,c);let o=["",{children:["search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2924)),"C:\\Users\\juanc\\Desktop\\CarsLibrary\\cars-library\\app\\search\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7139)),"C:\\Users\\juanc\\Desktop\\CarsLibrary\\cars-library\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\juanc\\Desktop\\CarsLibrary\\cars-library\\app\\search\\page.jsx"],h="/search/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/search/page",pathname:"/search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},9304:(e,s,r)=>{Promise.resolve().then(r.bind(r,7288))},2484:(e,s,r)=>{Promise.resolve().then(r.bind(r,3306))},1462:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9193:(e,s,r)=>{"use strict";r(5047)},2199:(e,s,r)=>{"use strict";r.d(s,{_:()=>t});var a=r(326);function t({car:e}){return a.jsx("div",{className:"flex",children:(0,a.jsxs)("a",{href:`/car?slug=${e.id}`,className:"flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col",children:[a.jsx("div",{className:"car-img h-full w-[auto] rounded-t",children:a.jsx("img",{className:"object-cover h-full max-w-full",src:e.img_url,alt:"carImg"})}),(0,a.jsxs)("div",{className:"flex flex-col p-4 mr-auto",children:[e.brand.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+e.name.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" "+e.year,(0,a.jsxs)("span",{className:"text-gray-600 text-[14px]",children:["Estrellas ",(e=>{let s=[];for(let r=0;r<e;r++)s.push(a.jsx("span",{children:"★"},r));return s})(e.stars)]})]})]})})}},7288:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var a=r(326),t=r(7577),l=r(434);function n({children:e}){let[s,r]=(0,t.useState)(!1);return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{children:[(0,a.jsxs)("nav",{className:"fixed nav-bar",children:[a.jsx(l.default,{href:"/",className:"font-bold text-xl",children:"Cars Library"}),a.jsx(l.default,{className:"nores-nav",href:"/",children:"Home"}),a.jsx(l.default,{className:"nores-nav",href:"/cars",children:"Cars"}),a.jsx(l.default,{className:"nores-nav",href:"/about",children:"About"}),a.jsx(l.default,{className:"nores-nav",href:"/contact",children:"Contact us"}),a.jsx(l.default,{className:"nores-nav bg-zinc-800 text-white pt-2 pb-2 pr-6 pl-6 rounded",href:"/login",children:"Log In"}),(0,a.jsxs)("div",{className:"container-2",children:[a.jsx("input",{className:"label-check",id:"label-check",type:"checkbox",onChange:()=>{r(!s)},checked:s}),(0,a.jsxs)("label",{htmlFor:"label-check",className:"hamburger-label",children:[a.jsx("div",{className:"line1"}),a.jsx("div",{className:"line2"}),a.jsx("div",{className:"line3"})]}),(0,a.jsxs)("div",{className:"options",style:{display:s?"flex":"none"},children:[a.jsx(l.default,{className:"res-nav",href:"/",children:"Home"}),a.jsx(l.default,{className:"res-nav",href:"/cars",children:"Cars"}),a.jsx(l.default,{className:"res-nav",href:"/about",children:"About"}),a.jsx(l.default,{className:"res-nav",href:"/contact",children:"Contact us"}),a.jsx(l.default,{className:"res-nav",href:"/login",children:"Log In"})]})]})]}),a.jsx("div",{className:"options-2"}),a.jsx("div",{className:"nonav w-100 h-[60px]"}),e,(0,a.jsxs)("footer",{className:"bottom-0 bg-gray-500 h-40 mt-10 p-5 flex flex-col justify-center items-center gap-2",children:[a.jsx("h4",{className:"w-100 text-white font-bold text-xl",children:"Cars Library"}),(0,a.jsxs)("div",{className:"social-media flex gap-3",children:[a.jsx("a",{href:"https://www.google.com",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"white",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"})})}),a.jsx("a",{href:"",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"white",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"})})}),a.jsx("a",{href:"",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"white",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"})})})]})]})]})})}r(4047)},6259:(e,s,r)=>{"use strict";r.d(s,{g:()=>t});var a=r(326);function t(){return(0,a.jsxs)("svg",{className:"animate-spin size-5 text-white block mx-auto mt-[100px]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-50",cx:"12",cy:"12",r:"10",stroke:"#000",strokeWidth:"4"}),a.jsx("path",{className:"opacity-100",fill:"#000",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},8762:(e,s,r)=>{"use strict";r.d(s,{V:()=>t});var a=r(326);function t({children:e}){return a.jsx("div",{className:"w-full text-center text-6xl font-bold mt-10 mb-10",children:e})}},7197:(e,s,r)=>{"use strict";r.d(s,{M:()=>l});var a=r(326),t=r(7577);function l(){let[e,s]=(0,t.useState)();return(0,a.jsxs)("div",{className:"search-form flex",children:[a.jsx("input",{onChange:e=>{s(e.target.value)},autoFocus:!0,className:"text-[14px] text-gray-800 border sm:text-[18px] rounded-l-full py-3 ps-14 pe-2 outline-none max-w-[calc(100%-72px)] w-[400px]",placeholder:"Search Car",type:"text"}),a.jsx("a",{href:`/search?car=${e}`,className:"flex items-center bg-neutral-950 text-white rounded-r-full px-10",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor",className:"w-10 h-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})})})]})}},3306:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>h});var a=r(326),t=r(7577);r(9193);var l=r(2199),n=r(5047);function i({title:e},s){let r=(0,n.useSearchParams)().get(s);return a.jsx(a.Fragment,{children:a.jsx(t.Suspense,{children:(0,a.jsxs)("h3",{className:"text-2xl mb-10",children:[e,": ",r]})})})}var c=r(8762),o=r(7197),d=r(6259);function h(){let[e,s]=(0,t.useState)([]),[r,n]=(0,t.useState)([]),[h,x]=(0,t.useState)(null),[u,p]=(0,t.useState)(!0);return console.log(h),a.jsx(a.Fragment,{children:(0,a.jsxs)("main",{className:"p-5",children:[a.jsx(c.V,{children:"Search"}),a.jsx(t.Suspense,{children:a.jsx(i,{title:"Car",searchSlug:"car"})}),a.jsx(o.M,{}),u?a.jsx(a.Fragment,{children:a.jsx(d.g,{})}):r.length<=0?a.jsx(a.Fragment,{children:a.jsx(d.g,{})}):a.jsx("div",{className:"flex gap-6 mt-10",children:a.jsx("div",{className:"w-full",children:a.jsx("div",{className:"cars grid grid-cols-4 gap-1",children:r.map((e,s)=>a.jsx(l._,{car:e},`${e.id}-${s}`))})})})]})})}},5047:(e,s,r)=>{"use strict";var a=r(7389);r.o(a,"useSearchParams")&&r.d(s,{useSearchParams:function(){return a.useSearchParams}})},7139:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>l,default:()=>i});var a=r(8570);let t=(0,a.createProxy)(String.raw`C:\Users\juanc\Desktop\CarsLibrary\cars-library\app\layout.jsx`),{__esModule:l,$$typeof:n}=t;t.default;let i=(0,a.createProxy)(String.raw`C:\Users\juanc\Desktop\CarsLibrary\cars-library\app\layout.jsx#default`)},2924:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>l,default:()=>i});var a=r(8570);let t=(0,a.createProxy)(String.raw`C:\Users\juanc\Desktop\CarsLibrary\cars-library\app\search\page.jsx`),{__esModule:l,$$typeof:n}=t;t.default;let i=(0,a.createProxy)(String.raw`C:\Users\juanc\Desktop\CarsLibrary\cars-library\app\search\page.jsx#default`)},7481:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});var a=r(6621);let t=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4047:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),a=s.X(0,[948,372,621],()=>r(1182));module.exports=a})();