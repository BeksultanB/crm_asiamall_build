import{r as s,_ as N,p as Be,R as O,G as Q,av as _e,aL as le,f as Ae,e as z,b as se,c as S,a7 as Re,ad as Le,i as ze,ab as Ve,u as De,E as He,n as We,k as qe,I as Qe,X as re,$ as Xe,aM as Ge,at as Ze,as as Ye,aN as Ue,l as Je,A as Ke,j as et,t as b,aH as tt,v as nt,aO as ot,aP as lt,y as st,aI as rt,z as at,B as D}from"./index-pZ5c-tPJ.js";import{a9 as ct,ac as it,a4 as ae,a3 as ut}from"./index-QmF7YlsU.js";import{u as dt,a as ft,b as mt}from"./index-YN3KqGjc.js";import{B as X,I as ce,l as Ct,a as G,N as gt,x as L,A as W}from"./index-PSUpyo4j.js";import{j as ie,D as pt,k as xt,l as bt,w as vt,P as ht,L as yt,u as Ot,m as Pt}from"./index-eZboPbGR.js";import{v as jt}from"./lodash-vwHoFNFF.js";import"./row-z0eJ0Wr-.js";import"./dayjs.min-fx8XeEjf.js";function Et(){const[e,t]=s.useState([]),l=s.useCallback(n=>(t(o=>[].concat(N(o),[n])),()=>{t(o=>o.filter(r=>r!==n))}),[]);return[e,l]}function Y(e){return!!(e&&e.then)}const $t=e=>{const{type:t,children:l,prefixCls:n,buttonProps:o,close:r,autoFocus:i,emitEvent:f,isSilent:c,quitOnNullishReturnValue:d,actionFn:a}=e,u=s.useRef(!1),x=s.useRef(null),[C,y]=Be(!1),g=function(){r==null||r.apply(void 0,arguments)};s.useEffect(()=>{let m=null;return i&&(m=setTimeout(()=>{var v;(v=x.current)===null||v===void 0||v.focus()})),()=>{m&&clearTimeout(m)}},[]);const h=m=>{Y(m)&&(y(!0),m.then(function(){y(!1,!0),g.apply(void 0,arguments),u.current=!1},v=>{if(y(!1,!0),u.current=!1,!(c!=null&&c()))return Promise.reject(v)}))},p=m=>{if(u.current)return;if(u.current=!0,!a){g();return}let v;if(f){if(v=a(m),d&&!Y(v)){u.current=!1,g(m);return}}else if(a.length)v=a(r),u.current=!1;else if(v=a(),!v){g();return}h(v)};return s.createElement(X,Object.assign({},ce(t),{onClick:p,loading:C,prefixCls:n},o,{ref:x}),l)},ue=$t,B=O.createContext({}),{Provider:de}=B,wt=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:l,isSilent:n,mergedOkCancel:o,rootPrefixCls:r,close:i,onCancel:f,onConfirm:c}=s.useContext(B);return o?O.createElement(ue,{isSilent:n,actionFn:f,close:function(){i==null||i.apply(void 0,arguments),c==null||c(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${r}-btn`},l):null},U=wt,Nt=()=>{const{autoFocusButton:e,close:t,isSilent:l,okButtonProps:n,rootPrefixCls:o,okTextLocale:r,okType:i,onConfirm:f,onOk:c}=s.useContext(B);return O.createElement(ue,{isSilent:l,type:i||"primary",actionFn:c,close:function(){t==null||t.apply(void 0,arguments),f==null||f(!0)},autoFocus:e==="ok",buttonProps:n,prefixCls:`${o}-btn`},r)},J=Nt;function Tt(e,t,l){return typeof e=="boolean"?e:t===void 0?!!l:t!==!1&&t!==null}function kt(e,t,l){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:O.createElement(Q,null),o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!Tt(e,t,o))return[!1,null];const i=typeof t=="boolean"||t===void 0||t===null?n:t;return[!0,l?l(i):i]}const St=()=>_e()&&window.document.documentElement;function K(){}const It=s.createContext({add:K,remove:K});function Mt(e){const t=s.useContext(It),l=s.useRef();return Ct(o=>{if(o){const r=e?o.querySelector(e):o;t.add(r),l.current=r}else t.remove(l.current)})}const Ft=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:l}=s.useContext(B);return O.createElement(X,Object.assign({onClick:l},e),t)},ee=Ft,Bt=()=>{const{confirmLoading:e,okButtonProps:t,okType:l,okTextLocale:n,onOk:o}=s.useContext(B);return O.createElement(X,Object.assign({},ce(l),{loading:e,onClick:o},t),n)},te=Bt;function fe(e,t){return O.createElement("span",{className:`${e}-close-x`},t||O.createElement(Q,{className:`${e}-close-icon`}))}const me=e=>{const{okText:t,okType:l="primary",cancelText:n,confirmLoading:o,onOk:r,onCancel:i,okButtonProps:f,cancelButtonProps:c,footer:d}=e,[a]=G("Modal",le()),u=t||(a==null?void 0:a.okText),x=n||(a==null?void 0:a.cancelText),C={confirmLoading:o,okButtonProps:f,cancelButtonProps:c,okTextLocale:u,cancelTextLocale:x,okType:l,onOk:r,onCancel:i},y=O.useMemo(()=>C,N(Object.values(C)));let g;return typeof d=="function"||typeof d>"u"?(g=O.createElement(O.Fragment,null,O.createElement(ee,null),O.createElement(te,null)),typeof d=="function"&&(g=d(g,{OkBtn:te,CancelBtn:ee})),g=O.createElement(de,{value:y},g)):g=d,O.createElement(Ae,{disabled:!1},g)};var _t=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};let q;const At=e=>{q={x:e.pageX,y:e.pageY},setTimeout(()=>{q=null},100)};St()&&document.documentElement.addEventListener("click",At,!0);const Rt=e=>{var t;const{getPopupContainer:l,getPrefixCls:n,direction:o,modal:r}=s.useContext(z),i=F=>{const{onCancel:T}=e;T==null||T(F)},f=F=>{const{onOk:T}=e;T==null||T(F)},{prefixCls:c,className:d,rootClassName:a,open:u,wrapClassName:x,centered:C,getContainer:y,closeIcon:g,closable:h,focusTriggerAfterClose:p=!0,style:m,visible:v,width:P=520,footer:w,classNames:$,styles:V}=e,I=_t(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","closable","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),E=n("modal",c),M=n(),A=se(E),[$e,Z,we]=ie(E,A),Ne=S(x,{[`${E}-centered`]:!!C,[`${E}-wrap-rtl`]:o==="rtl"}),Te=w!==null&&s.createElement(me,Object.assign({},e,{onOk:f,onCancel:i})),[ke,Se]=kt(h,g,F=>fe(E,F),s.createElement(Q,{className:`${E}-close-icon`}),!0),Ie=Mt(`.${E}-content`),[Me,Fe]=Re("Modal",I.zIndex);return $e(s.createElement(gt,null,s.createElement(jt,{status:!0,override:!0},s.createElement(Le.Provider,{value:Fe},s.createElement(pt,Object.assign({width:P},I,{zIndex:Me,getContainer:y===void 0?l:y,prefixCls:E,rootClassName:S(Z,a,we,A),footer:Te,visible:u??v,mousePosition:(t=I.mousePosition)!==null&&t!==void 0?t:q,onClose:i,closable:ke,closeIcon:Se,focusTriggerAfterClose:p,transitionName:L(M,"zoom",e.transitionName),maskTransitionName:L(M,"fade",e.maskTransitionName),className:S(Z,d,r==null?void 0:r.className),style:Object.assign(Object.assign({},r==null?void 0:r.style),m),classNames:Object.assign(Object.assign({wrapper:Ne},r==null?void 0:r.classNames),$),styles:Object.assign(Object.assign({},r==null?void 0:r.styles),V),panelRef:Ie}))))))},Ce=Rt,Lt=e=>{const{componentCls:t,titleFontSize:l,titleLineHeight:n,modalConfirmIconSize:o,fontSize:r,lineHeight:i,modalTitleHeight:f,fontHeight:c,confirmBodyPadding:d}=e,a=`${t}-confirm`;return{[a]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${a}-body-wrapper`]:Object.assign({},Ve()),[`&${t} ${t}-body`]:{padding:d},[`${a}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:o,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(c).sub(o).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(f).sub(o).equal()).div(2).equal()}},[`${a}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${De(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${a}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:l,lineHeight:n},[`${a}-content`]:{color:e.colorText,fontSize:r,lineHeight:i},[`${a}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${a}-error ${a}-body > ${e.iconCls}`]:{color:e.colorError},[`${a}-warning ${a}-body > ${e.iconCls},
        ${a}-confirm ${a}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${a}-info ${a}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${a}-success ${a}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},zt=ze(["Modal","confirm"],e=>{const t=bt(e);return[Lt(t)]},xt,{order:-1e3});var Vt=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};function ge(e){const{prefixCls:t,icon:l,okText:n,cancelText:o,confirmPrefixCls:r,type:i,okCancel:f,footer:c,locale:d}=e,a=Vt(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let u=l;if(!l&&l!==null)switch(i){case"info":u=s.createElement(Qe,null);break;case"success":u=s.createElement(qe,null);break;case"error":u=s.createElement(We,null);break;default:u=s.createElement(He,null)}const x=f??i==="confirm",C=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[y]=G("Modal"),g=d||y,h=n||(x?g==null?void 0:g.okText:g==null?void 0:g.justOkText),p=o||(g==null?void 0:g.cancelText),m=Object.assign({autoFocusButton:C,cancelTextLocale:p,okTextLocale:h,mergedOkCancel:x},a),v=s.useMemo(()=>m,N(Object.values(m))),P=s.createElement(s.Fragment,null,s.createElement(U,null),s.createElement(J,null)),w=e.title!==void 0&&e.title!==null,$=`${r}-body`;return s.createElement("div",{className:`${r}-body-wrapper`},s.createElement("div",{className:S($,{[`${$}-has-title`]:w})},u,s.createElement("div",{className:`${r}-paragraph`},w&&s.createElement("span",{className:`${r}-title`},e.title),s.createElement("div",{className:`${r}-content`},e.content))),c===void 0||typeof c=="function"?s.createElement(de,{value:v},s.createElement("div",{className:`${r}-btns`},typeof c=="function"?c(P,{OkBtn:J,CancelBtn:U}):P)):c,s.createElement(zt,{prefixCls:t}))}const Dt=e=>{const{close:t,zIndex:l,afterClose:n,open:o,keyboard:r,centered:i,getContainer:f,maskStyle:c,direction:d,prefixCls:a,wrapClassName:u,rootPrefixCls:x,bodyStyle:C,closable:y=!1,closeIcon:g,modalRender:h,focusTriggerAfterClose:p,onConfirm:m,styles:v}=e,P=`${a}-confirm`,w=e.width||416,$=e.style||{},V=e.mask===void 0?!0:e.mask,I=e.maskClosable===void 0?!1:e.maskClosable,E=S(P,`${P}-${e.type}`,{[`${P}-rtl`]:d==="rtl"},e.className),[,M]=Xe(),A=s.useMemo(()=>l!==void 0?l:M.zIndexPopupBase+Ge,[l,M]);return s.createElement(Ce,{prefixCls:a,className:E,wrapClassName:S({[`${P}-centered`]:!!e.centered},u),onCancel:()=>{t==null||t({triggerCancel:!0}),m==null||m(!1)},open:o,title:"",footer:null,transitionName:L(x||"","zoom",e.transitionName),maskTransitionName:L(x||"","fade",e.maskTransitionName),mask:V,maskClosable:I,style:$,styles:Object.assign({body:C,mask:c},v),width:w,zIndex:A,afterClose:n,keyboard:r,centered:i,getContainer:f,closable:y,closeIcon:g,modalRender:h,focusTriggerAfterClose:p},s.createElement(ge,Object.assign({},e,{confirmPrefixCls:P})))},pe=e=>{const{rootPrefixCls:t,iconPrefixCls:l,direction:n,theme:o}=e;return s.createElement(re,{prefixCls:t,iconPrefixCls:l,direction:n,theme:o},s.createElement(Dt,Object.assign({},e)))},k=[];let xe="";function be(){return xe}const Ht=e=>{var t,l;const{prefixCls:n,getContainer:o,direction:r}=e,i=le(),f=s.useContext(z),c=be()||f.getPrefixCls(),d=n||`${c}-modal`;let a=o;return a===!1&&(a=void 0),O.createElement(pe,Object.assign({},e,{rootPrefixCls:c,prefixCls:d,iconPrefixCls:f.iconPrefixCls,theme:f.theme,direction:r??f.direction,locale:(l=(t=f.locale)===null||t===void 0?void 0:t.Modal)!==null&&l!==void 0?l:i,getContainer:a}))};function _(e){const t=Ue(),l=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:f,open:!0}),o;function r(){for(var d=arguments.length,a=new Array(d),u=0;u<d;u++)a[u]=arguments[u];const x=a.some(C=>C&&C.triggerCancel);e.onCancel&&x&&e.onCancel.apply(e,[()=>{}].concat(N(a.slice(1))));for(let C=0;C<k.length;C++)if(k[C]===f){k.splice(C,1);break}Ze(l)}function i(d){clearTimeout(o),o=setTimeout(()=>{const a=t.getPrefixCls(void 0,be()),u=t.getIconPrefixCls(),x=t.getTheme(),C=O.createElement(Ht,Object.assign({},d));Ye(O.createElement(re,{prefixCls:a,iconPrefixCls:u,theme:x},t.holderRender?t.holderRender(C):C),l)})}function f(){for(var d=arguments.length,a=new Array(d),u=0;u<d;u++)a[u]=arguments[u];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),r.apply(this,a)}}),n.visible&&delete n.visible,i(n)}function c(d){typeof d=="function"?n=d(n):n=Object.assign(Object.assign({},n),d),i(n)}return i(n),k.push(f),{destroy:f,update:c}}function ve(e){return Object.assign(Object.assign({},e),{type:"warning"})}function he(e){return Object.assign(Object.assign({},e),{type:"info"})}function ye(e){return Object.assign(Object.assign({},e),{type:"success"})}function Oe(e){return Object.assign(Object.assign({},e),{type:"error"})}function Pe(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function Wt(e){let{rootPrefixCls:t}=e;xe=t}var qt=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};const Qt=(e,t)=>{var l,{afterClose:n,config:o}=e,r=qt(e,["afterClose","config"]);const[i,f]=s.useState(!0),[c,d]=s.useState(o),{direction:a,getPrefixCls:u}=s.useContext(z),x=u("modal"),C=u(),y=()=>{var m;n(),(m=c.afterClose)===null||m===void 0||m.call(c)},g=function(){f(!1);for(var m=arguments.length,v=new Array(m),P=0;P<m;P++)v[P]=arguments[P];const w=v.some($=>$&&$.triggerCancel);c.onCancel&&w&&c.onCancel.apply(c,[()=>{}].concat(N(v.slice(1))))};s.useImperativeHandle(t,()=>({destroy:g,update:m=>{d(v=>Object.assign(Object.assign({},v),m))}}));const h=(l=c.okCancel)!==null&&l!==void 0?l:c.type==="confirm",[p]=G("Modal",Je.Modal);return s.createElement(pe,Object.assign({prefixCls:x,rootPrefixCls:C},c,{close:g,open:i,afterClose:y,okText:c.okText||(h?p==null?void 0:p.okText:p==null?void 0:p.justOkText),direction:c.direction||a,cancelText:c.cancelText||(p==null?void 0:p.cancelText)},r))},Xt=s.forwardRef(Qt);let ne=0;const Gt=s.memo(s.forwardRef((e,t)=>{const[l,n]=Et();return s.useImperativeHandle(t,()=>({patchElement:n}),[]),s.createElement(s.Fragment,null,l)}));function Zt(){const e=s.useRef(null),[t,l]=s.useState([]);s.useEffect(()=>{t.length&&(N(t).forEach(i=>{i()}),l([]))},[t]);const n=s.useCallback(r=>function(f){var c;ne+=1;const d=s.createRef();let a;const u=new Promise(h=>{a=h});let x=!1,C;const y=s.createElement(Xt,{key:`modal-${ne}`,config:r(f),ref:d,afterClose:()=>{C==null||C()},isSilent:()=>x,onConfirm:h=>{a(h)}});return C=(c=e.current)===null||c===void 0?void 0:c.patchElement(y),C&&k.push(C),{destroy:()=>{function h(){var p;(p=d.current)===null||p===void 0||p.destroy()}d.current?h():l(p=>[].concat(N(p),[h]))},update:h=>{function p(){var m;(m=d.current)===null||m===void 0||m.update(h)}d.current?p():l(m=>[].concat(N(m),[p]))},then:h=>(x=!0,u.then(h))}},[]);return[s.useMemo(()=>({info:n(he),success:n(ye),error:n(Oe),warning:n(ve),confirm:n(Pe)}),[]),s.createElement(Gt,{key:"modal-holder",ref:e})]}var Yt=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};const Ut=e=>{const{prefixCls:t,className:l,closeIcon:n,closable:o,type:r,title:i,children:f,footer:c}=e,d=Yt(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:a}=s.useContext(z),u=a(),x=t||a("modal"),C=se(u),[y,g,h]=ie(x,C),p=`${x}-confirm`;let m={};return r?m={closable:o??!1,title:"",footer:"",children:s.createElement(ge,Object.assign({},e,{prefixCls:x,confirmPrefixCls:p,rootPrefixCls:u,content:f}))}:m={closable:o??!0,title:i,footer:c!==null&&s.createElement(me,Object.assign({},e)),children:f},y(s.createElement(ht,Object.assign({prefixCls:x,className:S(g,`${x}-pure-panel`,r&&p,r&&`${p}-${r}`,l,h,C)},d,{closeIcon:fe(x,n),closable:o},m)))},Jt=vt(Ut);function je(e){return _(ve(e))}const j=Ce;j.useModal=Zt;j.info=function(t){return _(he(t))};j.success=function(t){return _(ye(t))};j.error=function(t){return _(Oe(t))};j.warning=je;j.warn=je;j.confirm=function(t){return _(Pe(t))};j.destroyAll=function(){for(;k.length;){const t=k.pop();t&&t()}};j.config=Wt;j._InternalPanelDoNotUseOrYouWillBeFired=Jt;const Kt=j;var en={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M956 686.5l-.1-.1-.1-.1C911.7 593 843.4 545 752.5 545s-159.2 48.1-203.4 141.3v.1a42.92 42.92 0 000 36.4C593.3 816 661.6 864 752.5 864s159.2-48.1 203.4-141.3c5.4-11.5 5.4-24.8.1-36.2zM752.5 800c-62.1 0-107.4-30-141.1-95.5C645 639 690.4 609 752.5 609c62.1 0 107.4 30 141.1 95.5C860 770 814.6 800 752.5 800z"}},{tag:"path",attrs:{d:"M697 705a56 56 0 10112 0 56 56 0 10-112 0zM136 232h704v253h72V192c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h352v-72H136V232z"}},{tag:"path",attrs:{d:"M724.9 338.1l-36.8-36.8a8.03 8.03 0 00-11.3 0L493 485.3l-86.1-86.2a8.03 8.03 0 00-11.3 0L251.3 543.4a8.03 8.03 0 000 11.3l36.8 36.8c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.2-3.1 3.2-8.2 0-11.3z"}}]},name:"fund-view",theme:"outlined"};const tn=en;var nn=function(t,l){return s.createElement(Ke,et({},t,{ref:l,icon:tn}))};const on=s.forwardRef(nn),ln=({actions:{openDetail:e}})=>[{title:"Действия",render:t=>b.jsxs(W,{onClick:()=>e(t),children:["Детальный просмотр ",b.jsx(on,{})]})},{title:"IP адрес",dataIndex:"ip_camera"},{title:"Наименование",dataIndex:"name"},{title:"Состояние",dataIndex:"is_active",render:t=>b.jsx(ct,{isChecked:t,label:"Актив"})}];function sn(){const{pathname:e}=tt(""),t=nt(),{data:l,isFetching:n}=dt({params:{}},{refetchOnFocus:!0,refetchOnMountOrArgChange:!0,refetchOnReconnect:!0}),o=r=>{t(`${e}detail/${r.pk}/`)};return l?b.jsx(yt,{isLoading:n,children:b.jsx(it,{dataSource:(l==null?void 0:l.barriers)||[],columns:ln({actions:{openDetail:r=>o(r)}})})}):null}function rn(){return b.jsx("div",{children:b.jsx(sn,{})})}const an="_dataView_df3z2_170",cn={dataView:an},un="_paper_2ne6u_170",dn="_buttons_2ne6u_174",fn="_title_2ne6u_180",H={paper:un,buttons:dn,title:fn};var R=(e=>(e[e.open=1]="open",e[e.close=0]="close",e))(R||{});const oe={"cancel-button":"_cancel-button_155j0_170","submit-button":"_submit-button_155j0_171"};function mn(e){const{children:t,Modal:l,...n}=e,{isOpen:o}=Ot(i=>i.modal),r=l||(i=>b.jsx(Kt,{cancelButtonProps:{className:oe["cancel-button"]},okButtonProps:{className:oe["submit-button"]},...i}));return b.jsx(r,{open:o,...n,children:o&&t})}function Ee(){const e=Pt();return{open:()=>e(ot()),close:()=>e(lt()),AppModal:mn}}function Cn(e){const{close:t,submit:l}=e,{AppModal:n}=Ee(),o={okText:"Подтвердить",cancelText:"Отмена",onCancel:t,onOk:l,title:"Подтвердите действие"};return b.jsx(n,{...o})}function gn({data:e}){const[t]=ft(),{open:l,close:n}=Ee(),o=s.useRef(0),r=i=>{t({params:{barrier_id:e.pk,act:i}}).unwrap().then(()=>{n(),st.success({message:i===R.open?"Сектор успешно открыт":"Сектор успешно закрыт"})})};return b.jsxs(ae,{className:H.paper,children:[b.jsx("h3",{className:H.title,children:`Сектор - ${e.name}`}),b.jsxs("div",{className:H.buttons,children:[b.jsx(W,{onClick:()=>{o.current=R.open,l()},children:"Открыть шлагбаум"}),b.jsx(W,{onClick:()=>{o.current=R.close,l()},children:"Закрыть шлагбаум"}),b.jsx(Cn,{submit:()=>r(o.current),close:n})]})]})}const pn=e=>[[],[],[{key:"name",label:"Имя"},{key:"ip_camera",label:"IP-адрес"},{label:"Статус",type:"slot",render:e!=null&&e.is_active?"Активен":"Неактивен"}],[{label:"",type:"slot",render:b.jsx(gn,{data:e})}],[],[]];function xn(){const{barrierId:e}=rt(),{data:t={}}=mt({pk:e},{refetchOnFocus:!0,refetchOnReconnect:!0,refetchOnMountOrArgChange:!0});return b.jsx(b.Fragment,{children:b.jsx(ut,{columns:pn(t),data:t,mode:"horizontal",transparent:!0,className:cn.dataView})})}function bn(){return b.jsx(ae,{title:"Шлагбаум",children:b.jsx(xn,{})})}function wn(){return b.jsx(at,{children:b.jsxs(D,{children:[b.jsx(D,{path:"/",element:b.jsx(rn,{})}),b.jsx(D,{path:"/detail/:barrierId/*",element:b.jsx(bn,{})})]})})}export{wn as default};
