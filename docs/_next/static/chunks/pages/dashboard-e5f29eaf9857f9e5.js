(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7100:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(6611)}])},6611:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>A});var t=s(4848),l=s(6540),r=s(4731),o=s(6118);o.t1.register(o.Bs,o.m_);let d=e=>{let{title:a,data:s}=e,l=s.reduce((e,a)=>e+a.value,0),o=["#F8B4B4","#A3D9A5","#F9E79F","#AFCDEA","#C8A2C8"],d={labels:s.map(e=>e.label),datasets:[{data:s.map(e=>e.value),backgroundColor:o.slice(0,s.length),borderColor:o.slice(0,s.length),borderWidth:1}]};return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:a}),(0,t.jsxs)("div",{className:"flex items-center justify-between h-full",children:[(0,t.jsx)("div",{className:"w-1/2 h-full flex justify-center items-center",children:(0,t.jsx)("div",{className:"w-[80%] h-[80%]",children:(0,t.jsx)(r.nu,{data:d,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:e=>{let a=(e.raw/l*100).toFixed(2);return"".concat(e.label,": R$ ").concat(e.raw," (").concat(a,"%)")}}},legend:{display:!1}},cutout:"70%"}})})}),(0,t.jsx)("div",{className:"w-1/2 flex flex-col justify-center gap-2",children:s.map((e,a)=>{let s=(e.value/l*100).toFixed(2);return(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:o[a]}}),(0,t.jsxs)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:[e.label,": ",s,"%"]})]},e.label)})})]})]})};o.t1.register(o.Bs,o.m_);let i=e=>{let{fixed:a,variable:s}=e;return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:"Gastos Fixos vs Vari\xe1veis"}),(0,t.jsx)("div",{className:"flex-grow flex justify-center items-center",children:(0,t.jsx)("div",{className:"w-[70%] h-[70%]",children:(0,t.jsx)(r.Fq,{data:{labels:["Gastos Fixos","Gastos Vari\xe1veis"],datasets:[{data:[a,s],backgroundColor:["#A3D9A5","#F8B4B4"],borderColor:["#A3D9A5","#F8B4B4"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:e=>"".concat(e.label,": R$ ").concat(e.raw.toFixed(2))}},legend:{display:!1}}}})})}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-3 mt-3",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:"#A3D9A5"}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Gastos Fixos"})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:"#F8B4B4"}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Gastos Vari\xe1veis"})]})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"text-sm font-medium text-gray-800 dark:text-gray-100",children:[(0,t.jsx)("strong",{children:"Gastos Fixos:"})," R$ ",a.toFixed(2)]}),(0,t.jsxs)("div",{className:"text-sm font-medium text-gray-800 dark:text-gray-100",children:[(0,t.jsx)("strong",{children:"Gastos Vari\xe1veis:"})," R$ ",s.toFixed(2)]})]})]})};var c=s(9735),n=s(3348);let x=e=>{let{title:a,value:s,percentage:l,icon:r,iconColor:o}=e,{isDarkMode:d}=(0,n.D)();return(0,t.jsxs)("div",{className:"flex items-center p-3 shadow-md rounded-lg h-[8vh] ".concat(d?"bg-gray-800":"bg-white"),children:[(0,t.jsx)("div",{className:"flex items-center justify-center text-3xl",style:{color:o},children:r}),(0,t.jsxs)("div",{className:"ml-4",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold ".concat(d?"text-gray-300":"text-gray-600"),children:a}),(0,t.jsxs)("p",{className:"text-lg font-bold ".concat(d?"text-gray-100":"text-gray-800"),children:["R$ ",s.toFixed(2)]}),(0,t.jsxs)("span",{className:"text-xs ".concat(d?"text-gray-400":"text-gray-500"),children:[l,"% do total"]})]})]})},m=()=>(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:[(0,t.jsx)(x,{title:"Renda Mensal",value:5e3,percentage:100,icon:(0,t.jsx)(c.Lxk,{}),iconColor:"#F5A623"}),(0,t.jsx)(x,{title:"Despesas Totais",value:3e3,percentage:60,icon:(0,t.jsx)(c.IHZ,{}),iconColor:"#E94E77"}),(0,t.jsx)(x,{title:"Saldo Restante",value:2e3,percentage:40,icon:(0,t.jsx)(c.Ht7,{}),iconColor:"#4A90E2"})]});o.t1.register(o.PP,o.kc,o.E8,o.m_);let g=e=>{let{months:a,categories:s,data:l}=e,{isDarkMode:o}=(0,n.D)(),d=["#F8B4B4","#A3D9A5","#F9E79F","#AFCDEA","#C8A2C8"],i=a.slice(0,3),c=l.slice(0,3),x={labels:i,datasets:s.map((e,a)=>({label:e,data:c.map(e=>e[a]),backgroundColor:d[a],borderColor:d[a],borderWidth:1}))};return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:"Compara\xe7\xe3o Mensal"}),(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)(r.yP,{data:x,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:e=>"R$ ".concat(e.raw)}},legend:{labels:{color:o?"#f3f4f6":"#1f2937"}}},scales:{x:{ticks:{color:o?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{ticks:{color:o?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}}})}),(0,t.jsx)("div",{className:"flex flex-wrap justify-center gap-3 mt-3",children:s.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:d[a]}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:e})]},e))})]})};o.t1.register(o.PP,o.kc,o.FN,o.No,o.hE,o.m_);let f=["#F8B4B4","#A3D9A5","#F9E79F","#AFCDEA","#C8A2C8"],h=e=>{let{months:a,categories:s,data:o}=e,{isDarkMode:d}=(0,n.D)(),[i,c]=(0,l.useState)({});(0,l.useEffect)(()=>{c({responsive:!0,maintainAspectRatio:!0,plugins:{tooltip:{callbacks:{label:e=>{var a;return"R$ ".concat(null===(a=e.raw)||void 0===a?void 0:a.toFixed(2))}}},legend:{display:!0,labels:{color:d?"#f3f4f6":"#1f2937",font:{size:12}}}},scales:{x:{ticks:{color:d?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:d?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{ticks:{color:d?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:d?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}})},[d]);let x={labels:a,datasets:s.map((e,a)=>({label:e,data:o.map(e=>e[a]),borderColor:f[a],backgroundColor:f[a],borderWidth:2,pointRadius:5,pointBackgroundColor:f[a],tension:.3}))};return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh] overflow-hidden",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:"Tend\xeancias Temporais de Gastos"}),(0,t.jsx)("div",{className:"flex-grow overflow-hidden",children:(0,t.jsx)(r.N1,{data:x,options:i})}),(0,t.jsx)("div",{className:"mt-4 text-sm text-gray-700 dark:text-gray-300",children:"Este gr\xe1fico mostra as tend\xeancias temporais de gastos ao longo dos meses, ajudando a identificar padr\xf5es de aumento ou redu\xe7\xe3o nas categorias."})]})};o.t1.register(o.PP,o.kc,o.FN,o.No,o.hE,o.m_);let u=e=>{let{months:a,actualExpenses:s}=e,{isDarkMode:l}=(0,n.D)(),o=s.reduce((e,a)=>e+a,0)/s.length,d=["Pr\xf3ximo M\xeas 1","Pr\xf3ximo M\xeas 2","Pr\xf3ximo M\xeas 3"],i=d.map((e,a)=>o*(1+(a+1)*.05)),c={labels:[...a,...d],datasets:[{label:"Gastos Reais",data:s,borderColor:"#A3D9A5",backgroundColor:"#A3D9A5",borderWidth:2,pointRadius:5,pointBackgroundColor:"#A3D9A5",tension:.3},{label:"Proje\xe7\xe3o de Gastos",data:[...Array(s.length).fill(null),...i],borderColor:"#F8B4B4",backgroundColor:"#F8B4B4",borderWidth:2,pointRadius:5,pointBackgroundColor:"#F8B4B4",borderDash:[5,5],tension:.3}]};return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:"Proje\xe7\xe3o de Gastos"}),(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)(r.N1,{data:c,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:e=>{var a;return"R$ ".concat(null===(a=e.raw)||void 0===a?void 0:a.toFixed(2))}}},legend:{display:!1}},scales:{x:{ticks:{color:l?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:l?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{ticks:{color:l?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:l?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}}})}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-3 mt-3",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:"#A3D9A5"}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Gastos Reais"})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:"#F8B4B4"}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Proje\xe7\xe3o de Gastos"})]})]}),(0,t.jsxs)("div",{className:"mt-4 text-sm text-gray-700 dark:text-gray-300",children:["Com base nos gastos passados, a m\xe9dia mensal de despesas \xe9 de R$"," ",o.toFixed(2),"."]})]})};o.t1.register(o.PP,o.kc,o.E8,o.m_);let b=e=>{let{expenses:a,highestExpense:s,increasePercentage:l}=e,{isDarkMode:o}=(0,n.D)(),d=["#F8B4B4","#A3D9A5","#F9E79F","#AFCDEA","#C8A2C8"],i={labels:a.map(e=>e.category),datasets:[{label:"Gastos",data:a.map(e=>e.amount),backgroundColor:d.slice(0,a.length),borderColor:d.slice(0,a.length),borderWidth:1}]};return(0,t.jsxs)("div",{className:"flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100",children:"Top 5 Gastos do M\xeas"}),(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)(r.yP,{data:i,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:e=>"R$ ".concat(e.raw)}},legend:{display:!1}},scales:{x:{ticks:{color:o?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{ticks:{color:o?"#f3f4f6":"#1f2937",font:{size:12}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}}})}),(0,t.jsx)("div",{className:"flex flex-wrap justify-center gap-3 mt-3",children:a.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full mr-2",style:{backgroundColor:d[a]}}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:e.category})]},e.category))}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 p-2 rounded-md mb-2",children:[(0,t.jsx)("strong",{children:"Maior Gasto:"})," ",s.category,": R$"," ",s.amount.toFixed(2)]}),(0,t.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 p-2 rounded-md",children:[(0,t.jsx)("strong",{children:"Aumento Total em Rela\xe7\xe3o ao M\xeas Anterior:"})," O total dos gastos aumentou em ",l.toFixed(2),"% em compara\xe7\xe3o ao m\xeas anterior."]})]})]})},p=[{label:"Alimenta\xe7\xe3o",value:1200},{label:"Transporte",value:600},{label:"Lazer",value:300},{label:"Sa\xfade",value:400},{label:"Educa\xe7\xe3o",value:500}],j=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio"],v=["Alimenta\xe7\xe3o","Transporte","Lazer","Sa\xfade","Educa\xe7\xe3o"],y=[[300,150,100,75,125],[250,130,90,70,120],[200,120,80,65,110],[180,100,70,60,100],[160,90,60,55,90]],N=[{category:"Alimenta\xe7\xe3o",amount:1200},{category:"Transporte",amount:600},{category:"Lazer",amount:400},{category:"Sa\xfade",amount:300},{category:"Educa\xe7\xe3o",amount:200}],k={category:"Aluguel",amount:1200},w=[1200,1300,1250,1350,1400],A=()=>(0,t.jsxs)("div",{className:"p-6 card-container h-screen overflow-y-scroll",children:[(0,t.jsx)(m,{}),(0,t.jsxs)("div",{className:"mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:[(0,t.jsx)(d,{title:"Categorias em Percentuais",data:p}),(0,t.jsx)(g,{months:j,categories:v,data:y}),(0,t.jsx)(h,{months:j,categories:v,data:y})]}),(0,t.jsxs)("div",{className:"mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3",children:[(0,t.jsx)(b,{expenses:N,highestExpense:k,increasePercentage:475})," ",(0,t.jsx)(i,{fixed:1300,variable:1e3}),(0,t.jsx)(u,{months:j,actualExpenses:w}),"      "]})]})}},e=>{var a=a=>e(e.s=a);e.O(0,[201,888,636,593,792],()=>a(7100)),_N_E=e.O()}]);