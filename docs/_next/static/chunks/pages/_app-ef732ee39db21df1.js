(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9051)}])},4709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let a=r(7677),i=r(544),l=r(4848),o=i._(r(6540)),n=a._(r(961)),s=a._(r(3248)),c=r(3297),d=r(3436),u=r(2454);r(4636);let f=r(4671),g=a._(r(701)),h=r(4293),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/docs/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,a,i,l,o){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function v(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:i,height:n,width:s,decoding:c,className:d,style:u,fetchPriority:f,placeholder:g,loading:m,unoptimized:b,fill:x,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:z,sizesInput:O,onLoad:k,onError:P,...S}=e,C=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&p(e,g,y,j,w,b,O))},[r,g,y,j,w,P,b,O]),_=(0,h.useMergedRef)(t,C);return(0,l.jsx)("img",{...S,...v(f),loading:m,width:s,height:n,decoding:c,"data-nimg":x?"fill":"1",className:d,style:u,sizes:i,srcSet:a,src:r,ref:_,onLoad:e=>{p(e.currentTarget,g,y,j,w,b,O)},onError:e=>{z(!0),"empty"!==g&&w(!0),P&&P(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&n.default.preload?(n.default.preload(r.src,a),null):(0,l.jsx)(s.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),a=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=m||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:n,onLoadingComplete:s}=e,h=(0,o.useRef)(n);(0,o.useEffect)(()=>{h.current=n},[n]);let p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let[v,y]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),{props:z,meta:O}=(0,c.getImgProps)(e,{defaultLoader:g.default,imgConf:i,blurComplete:v,showAltText:j});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{...z,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:h,onLoadingCompleteRef:p,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),O.priority?(0,l.jsx)(x,{isAppRouter:!r,imgAttributes:z}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=r(6540);function i(e,t){let r=(0,a.useRef)(()=>{}),i=(0,a.useRef)(()=>{});return(0,a.useMemo)(()=>e&&t?a=>{null===a?(r.current(),i.current()):(r.current=l(e,a),i.current=l(t,a))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(4636);let a=r(7688),i=r(3436);function l(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,s,c,{src:d,sizes:u,unoptimized:f=!1,priority:g=!1,loading:h,className:m,quality:p,width:v,height:b,fill:x=!1,style:y,overrideSrc:j,onLoad:w,onLoadingComplete:z,placeholder:O="empty",blurDataURL:k,fetchPriority:P,decoding:S="async",layout:C,objectFit:_,objectPosition:N,lazyBoundary:M,lazyRoot:E,...R}=e,{imgConf:L,showAltText:I,blurComplete:A,defaultLoader:B}=t,D=L||i.imageConfigDefault;if("allSizes"in D)n=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);n={...D,allSizes:e,deviceSizes:t}}if(void 0===B)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let H=R.loader||B;delete R.loader,delete R.srcSet;let F="__next_img_default"in H;if(F){if("custom"===n.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=H;H=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let V="",T=o(v),G=o(b);if((r=d)&&"object"==typeof r&&(l(r)||void 0!==r.src)){let e=l(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,k=k||e.blurDataURL,V=e.src,!x){if(T||G){if(T&&!G){let t=T/e.width;G=Math.round(e.height*t)}else if(!T&&G){let t=G/e.height;T=Math.round(e.width*t)}}else T=e.width,G=e.height}}let U=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:V)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),n.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(f=!0);let W=o(p),J=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:N}:{},I?{}:{color:"transparent"},y),q=A||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:T,heightInt:G,blurWidth:s,blurHeight:c,blurDataURL:k||"",objectFit:J.objectFit})+'")':'url("'+O+'")',X=q?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:a,width:i,quality:l,sizes:o,loader:n}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,a)=>n({config:t,src:r,quality:l,width:e})+" "+("w"===c?e:a+1)+c).join(", "),src:n({config:t,src:r,quality:l,width:s[d]})}}({config:n,src:d,unoptimized:f,width:T,quality:W,sizes:u,loader:H});return{props:{...R,loading:U?"lazy":h,fetchPriority:P,width:T,height:G,decoding:S,className:m,style:{...J,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:j||Y.src},meta:{unoptimized:f,priority:g,placeholder:O,fill:x}}}},7688:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:i,blurDataURL:l,objectFit:o}=e,n=a?40*a:t,s=i?40*i:r,c=n&&s?"viewBox='0 0 "+n+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return n}});let a=r(7677),i=r(3297),l=r(4709),o=a._(r(701));function n(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/docs/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=l.Image},701:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},9051:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(4848);r(1200);var i=r(6540),l=r(4672);function o(e){return(0,l.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function n(e){return(0,l.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}var s=r(3348);function c(){let{isDarkMode:e,toggleTheme:t}=(0,s.D)();return console.log("Tema atual: ",e?"Escuro":"Claro"),(0,a.jsxs)("header",{className:"header flex justify-between items-center px-6 py-4 shadow-md",children:[(0,a.jsx)("h1",{className:"header-title text-xl font-bold",children:"Finan\xe7as Pessoais"}),(0,a.jsx)("button",{onClick:t,className:"p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300","aria-label":"Toggle Theme",children:e?(0,a.jsx)(n,{size:24}):(0,a.jsx)(o,{size:24})})]})}var d=r(9735),u=r(9965),f=r.n(u);let g=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],h=["Alimenta\xe7\xe3o","Transporte","Sa\xfade","Lazer","Educa\xe7\xe3o"],m=()=>{let[e,t]=(0,i.useState)(!1),[r,l]=(0,i.useState)(""),[o,n]=(0,i.useState)(""),[s,c]=(0,i.useState)("Ultimo M\xeas"),[u,m]=(0,i.useState)(""),[p,v]=(0,i.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"fixed top-4 left-4 z-30 bg-blue-400 text-white p-2 rounded-md shadow-md hover:bg-blue-300 transition md:hidden",onClick:()=>t(!e),children:"☰"}),(0,a.jsxs)("aside",{className:"sidebar fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-20 transition-all duration-500 ease-in-out ".concat(e?"translate-x-0 opacity-100":"-translate-x-full opacity-0"," md:relative md:translate-x-0 md:opacity-100 md:w-[15%]"),children:[(0,a.jsx)("div",{className:"flex justify-center mt-[10rem] mb-8",children:(0,a.jsx)(f(),{src:"/logo.png",alt:"Logo",width:200,height:200})}),(0,a.jsxs)("nav",{className:"space-y-6 pt-18 md:pt-16 px-6 mb-[7rem]",children:[(0,a.jsxs)("a",{href:"#",className:"flex items-center text-lg font-bold text-gray-700 dark:text-gray-100",children:[(0,a.jsx)(d.jHl,{className:"mr-2"}),"Vis\xe3o Geral"]}),(0,a.jsxs)("a",{href:"#",className:"flex items-center text-lg font-bold text-gray-700 dark:text-gray-100",children:[(0,a.jsx)(d.rBU,{className:"mr-2"}),"Configura\xe7\xf5es"]})]}),(0,a.jsxs)("div",{className:"px-6 mt-6 space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"periodo-fixo",className:"text-sm font-bold dark:text-gray-200",children:"Per\xedodo Fixo"}),(0,a.jsxs)("select",{id:"periodo-fixo",value:r,onChange:e=>l(e.target.value),className:"w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",children:[(0,a.jsx)("option",{value:"",children:"Selecione o m\xeas"}),g.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"tipo-gasto",className:"text-sm font-bold dark:text-gray-200",children:"Tipo de Gasto"}),(0,a.jsxs)("select",{id:"tipo-gasto",value:o,onChange:e=>n(e.target.value),className:"w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",children:[(0,a.jsx)("option",{value:"",children:"Selecione o tipo de gasto"}),h.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"periodo-personalizado",className:"text-sm font-bold dark:text-gray-200",children:"Per\xedodo Personalizado"}),(0,a.jsxs)("select",{id:"periodo-personalizado",value:s,onChange:e=>c(e.target.value),className:"w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",children:[(0,a.jsx)("option",{value:"Ultimo M\xeas",children:"\xdaltimo M\xeas"}),(0,a.jsx)("option",{value:"Ultimos 3 meses",children:"\xdaltimos 3 meses"}),(0,a.jsx)("option",{value:"Personalizado",children:"Personalizado"})]}),"Personalizado"===s&&(0,a.jsxs)("div",{className:"mt-2 flex gap-4",children:[(0,a.jsx)("input",{type:"date",value:u,onChange:e=>m(e.target.value),className:"p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"}),(0,a.jsx)("input",{type:"date",value:p,onChange:e=>v(e.target.value),className:"p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"})]})]}),(0,a.jsx)("div",{className:"mt-4 text-center",children:(0,a.jsx)("button",{onClick:()=>{console.log({selectedMonth:r,selectedCategory:o,periodType:s,startDate:u,endDate:p})},className:"bg-blue-500 text-white px-4 py-2 rounded-md w-full",children:"Filtrar"})})]})]}),e&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-12 md:hidden transition-opacity duration-300",onClick:()=>t(!1)})]})};function p(e){let{Component:t,pageProps:r}=e;return(0,a.jsx)(s.N,{children:(0,a.jsxs)("div",{className:"main-layout",children:[(0,a.jsx)(c,{}),(0,a.jsxs)("div",{className:"content-layout",children:[(0,a.jsx)(m,{}),(0,a.jsx)(t,{...r})]})]})})}},3348:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,N:()=>o});var a=r(4848),i=r(6540);let l=(0,i.createContext)(void 0),o=e=>{let{children:t}=e,[r,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{o(window.matchMedia("(prefers-color-scheme: ligtht)").matches)},[]),(0,a.jsx)(l.Provider,{value:{isDarkMode:r,toggleTheme:()=>{o(e=>!e),document.documentElement.classList.toggle("dark",!r)}},children:t})},n=()=>{let e=(0,i.useContext)(l);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},1200:()=>{},9965:(e,t,r)=>{e.exports=r(1709)},9735:(e,t,r)=>{"use strict";r.d(t,{Ht7:()=>i,IHZ:()=>l,Lxk:()=>n,jHl:()=>o,rBU:()=>s});var a=r(4672);function i(e){return(0,a.k5)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"},child:[]}]})(e)}function l(e){return(0,a.k5)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"},child:[]}]})(e)}function o(e){return(0,a.k5)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function n(e){return(0,a.k5)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"},child:[]}]})(e)}function s(e){return(0,a.k5)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},child:[]}]})(e)}},4672:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var a=r(6540),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(i),o=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var a,i;a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>a.createElement(u,n({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:i,size:l,title:s}=e,d=function(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,o),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,e=>t(e)):t(i)}}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(4009))),_N_E=e.O()}]);