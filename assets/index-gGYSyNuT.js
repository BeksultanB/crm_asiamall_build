import{aG as a}from"./index-TwcWxsP0.js";const i=a.injectEndpoints({endpoints:e=>({barriers:e.query({query:({params:r})=>({url:"/v1/crm/barrier/list",params:r})}),barrierDetail:e.query({query:({pk:r})=>({url:`/v1/crm/barrier/detail/${r}`})}),closeOpenBarrier:e.mutation({query:({params:r})=>({url:"/v1/crm/commands/barrier/open_close",params:r})})})}),{useBarriersQuery:o,useBarrierDetailQuery:t,useCloseOpenBarrierMutation:u}=i;export{u as a,t as b,o as u};
