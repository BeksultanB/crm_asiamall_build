import{r as l,A as x,j,t as e,c as u,I as p,ah as w,z as M,B as _}from"./index-pZ5c-tPJ.js";import{d as k}from"./dayjs.min-fx8XeEjf.js";import{C as N,R as v}from"./row-z0eJ0Wr-.js";import{L as b}from"./index-eZboPbGR.js";import"./index-PSUpyo4j.js";import{u as y}from"./index-YN3KqGjc.js";var S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.3 338.4a447.57 447.57 0 00-96.1-143.3 443.09 443.09 0 00-143-96.3A443.91 443.91 0 00512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 00-141.7 96.5 445 445 0 00-95 142.8A449.89 449.89 0 0065 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 00199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 00827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"}}]},name:"message",theme:"filled"};const F=S;var A=function(i,t){return l.createElement(x,j({},i,{ref:t,icon:F}))};const R=l.forwardRef(A),C="_container_ao72k_170",D="_line_ao72k_182",$="_cardTitle_ao72k_195",z="_row_ao72k_201",E="_fieldName_ao72k_208",L="_fieldValue_ao72k_213",O="_icons_ao72k_219",r={container:C,line:D,"container-fail":"_container-fail_ao72k_187","container-success":"_container-success_ao72k_191",cardTitle:$,row:z,fieldName:E,fieldValue:L,icons:O},T=s=>{s.style.backgroundColor="#ffffff",setTimeout(()=>{s.style.backgroundColor=""},1e3)},V=s=>{var n;const{className:i="",colProps:t={},message:a}=s,c=l.useRef(null),m=B(a),f=(a==null?void 0:a.message_type)&&((a==null?void 0:a.message_type)==="success"?r["container-success"]:r["container-fail"]);return l.useEffect(()=>{a&&c.current&&T(c.current)},[a]),e.jsx(N,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:4,...t,children:e.jsxs("div",{ref:c,className:u("monitoring-card_container",r.container,f,i),children:[e.jsx("h3",{className:u("monitoring-card_title",r.cardTitle),children:(n=s==null?void 0:s.data)==null?void 0:n.name}),m.map(({label:o,value:d},g)=>e.jsxs(l.Fragment,{children:[e.jsxs("div",{className:u("monitoring-card_row",r.row),children:[e.jsx("span",{className:u("monitoring-card_field-name",r.fieldName),children:o}),e.jsx("span",{className:u("monitoring-card_filed-value",r.fieldValue),children:d})]}),e.jsx("div",{className:r.line})]},d+g))]})})};function B(s){const{car_info:i,description:t,date:a}=s||{},c=k(a).format("DD.MM.YYYY HH:mm");return[{label:e.jsx(p,{className:r.icons}),value:i||""},{label:e.jsx(R,{className:r.icons}),value:t||""},{label:"",value:c}]}function h(){return"192.168.10.4:80"}function Y(s,i){const t=new WebSocket(`ws://${h()}/ws/barrier_monitoring?token=${i}`);t.onmessage=s,t.onopen=()=>{console.log(`Succesfully opened connection with 'ws://${h()}/ws/barrier_monitoring'`)}}const H=s=>{const{token:i=""}=w(n=>{var o;return(o=n==null?void 0:n.auth)==null?void 0:o.user}),{data:t,isFetching:a}=y({params:{}},{refetchOnFocus:!0,refetchOnMountOrArgChange:!0,refetchOnReconnect:!0}),[c,m]=l.useState({});function f(n){if(n!=null&&n.data){const o=JSON.parse(n==null?void 0:n.data);o.date=new Date,m(d=>({...d,[o.barrier_id]:o}))}}return l.useEffect(()=>{Y(f,i)},[]),e.jsx(b,{isLoading:a,children:e.jsx(v,{gutter:[20,20],children:t==null?void 0:t.map((n,o)=>{const{id:d}=n,g=c[d];return e.jsx(V,{data:n,message:g},o)})})})},I=H;function W(){return e.jsx("div",{children:e.jsx(I,{})})}function U(){return e.jsx(M,{children:e.jsx(_,{children:e.jsx(_,{path:"/",element:e.jsx(W,{})})})})}export{U as default};
