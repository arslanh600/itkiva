"use strict";(self.webpackChunkiktva_strapi_api=self.webpackChunkiktva_strapi_api||[]).push([[4525],{44525:(Xe,J,o)=>{o.r(J),o.d(J,{default:()=>Jn});var t=o(67294),C=o(41580),k=o(25741),re=o(87229),Ve=o(56928),P=o(28225),qe=o(17062),X=o.n(qe),oe=o(45365),et=o(45084);function tt(e,n){for(var l=-1,r=e==null?0:e.length;++l<r;)if(n(e[l],l,e))return!0;return!1}const nt=tt;var at=o(59548),lt=1,rt=2;function ot(e,n,l,r,s,a){var i=l&lt,d=e.length,u=n.length;if(d!=u&&!(i&&u>d))return!1;var p=a.get(e),c=a.get(n);if(p&&c)return p==n&&c==e;var h=-1,m=!0,x=l&rt?new et.Z:void 0;for(a.set(e,n),a.set(n,e);++h<d;){var v=e[h],f=n[h];if(r)var E=i?r(f,v,h,n,e,a):r(v,f,h,e,n,a);if(E!==void 0){if(E)continue;m=!1;break}if(x){if(!nt(n,function(L,T){if(!(0,at.Z)(x,T)&&(v===L||s(v,L,l,r,a)))return x.push(T)})){m=!1;break}}else if(!(v===f||s(v,f,l,r,a))){m=!1;break}}return a.delete(e),a.delete(n),m}const he=ot;var be=o(17685),ve=o(84073),st=o(79651);function it(e){var n=-1,l=Array(e.size);return e.forEach(function(r,s){l[++n]=[s,r]}),l}const dt=it;var ct=o(6545),ut=1,gt=2,mt="[object Boolean]",pt="[object Date]",ft="[object Error]",ht="[object Map]",bt="[object Number]",vt="[object RegExp]",Et="[object Set]",yt="[object String]",xt="[object Symbol]",Tt="[object ArrayBuffer]",Ct="[object DataView]",Ee=be.Z?be.Z.prototype:void 0,se=Ee?Ee.valueOf:void 0;function wt(e,n,l,r,s,a,i){switch(l){case Ct:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Tt:return!(e.byteLength!=n.byteLength||!a(new ve.Z(e),new ve.Z(n)));case mt:case pt:case bt:return(0,st.Z)(+e,+n);case ft:return e.name==n.name&&e.message==n.message;case vt:case yt:return e==n+"";case ht:var d=dt;case Et:var u=r&ut;if(d||(d=ct.Z),e.size!=n.size&&!u)return!1;var p=i.get(e);if(p)return p==n;r|=gt,i.set(e,n);var c=he(d(e),d(n),r,s,a,i);return i.delete(e),c;case xt:if(se)return se.call(e)==se.call(n)}return!1}const Lt=wt;var ye=o(1808),Mt=1,At=Object.prototype,St=At.hasOwnProperty;function $t(e,n,l,r,s,a){var i=l&Mt,d=(0,ye.Z)(e),u=d.length,p=(0,ye.Z)(n),c=p.length;if(u!=c&&!i)return!1;for(var h=u;h--;){var m=d[h];if(!(i?m in n:St.call(n,m)))return!1}var x=a.get(e),v=a.get(n);if(x&&v)return x==n&&v==e;var f=!0;a.set(e,n),a.set(n,e);for(var E=i;++h<u;){m=d[h];var L=e[m],T=n[m];if(r)var y=i?r(T,L,m,n,e,a):r(L,T,m,e,n,a);if(!(y===void 0?L===T||s(L,T,l,r,a):y)){f=!1;break}E||(E=m=="constructor")}if(f&&!E){var z=e.constructor,A=n.constructor;z!=A&&"constructor"in e&&"constructor"in n&&!(typeof z=="function"&&z instanceof z&&typeof A=="function"&&A instanceof A)&&(f=!1)}return a.delete(e),a.delete(n),f}const It=$t;var xe=o(96155),V=o(27771),Te=o(16706),Ot=o(77212),Zt=1,Ce="[object Arguments]",we="[object Array]",q="[object Object]",jt=Object.prototype,Le=jt.hasOwnProperty;function zt(e,n,l,r,s,a){var i=(0,V.Z)(e),d=(0,V.Z)(n),u=i?we:(0,xe.Z)(e),p=d?we:(0,xe.Z)(n);u=u==Ce?q:u,p=p==Ce?q:p;var c=u==q,h=p==q,m=u==p;if(m&&(0,Te.Z)(e)){if(!(0,Te.Z)(n))return!1;i=!0,c=!1}if(m&&!c)return a||(a=new oe.Z),i||(0,Ot.Z)(e)?he(e,n,l,r,s,a):Lt(e,n,u,l,r,s,a);if(!(l&Zt)){var x=c&&Le.call(e,"__wrapped__"),v=h&&Le.call(n,"__wrapped__");if(x||v){var f=x?e.value():e,E=v?n.value():n;return a||(a=new oe.Z),s(f,E,l,r,a)}}return m?(a||(a=new oe.Z),It(e,n,l,r,s,a)):!1}const Dt=zt;var Me=o(18533);function Ae(e,n,l,r,s){return e===n?!0:e==null||n==null||!(0,Me.Z)(e)&&!(0,Me.Z)(n)?e!==e&&n!==n:Dt(e,n,l,r,Ae,s)}const Rt=Ae;function Pt(e,n){return Rt(e,n)}const Se=Pt;var N=o(15283),$e=o(53979),Ie=o(85018),ee=o(29728),ie=o(18986),I=o(11047),Oe=o(70004),Z=o(75515),K=o(24966),de=o(10063),te=o(76136),Ze=o(91145),Nt=o(38506);const Bt=e=>e?e.map(n=>{const r=Object.keys(n.__schema__.attributes).map(s=>{const a=n.__schema__.attributes[s].type;return Nt.Z.includes(a.toLowerCase())?s:null});return{modelUid:n.uid,collectionName:n.collectionName,displayName:n.info.displayName,attributes:r.filter(s=>!!s)}}):[];var je=o(43034),Ft=o(7363),ze=o(99176),kt=o(9750);const Ut=(e=[],n=[],l=[])=>{const{oLocalizableTree:r,oStoredSetupSchema:s,newKeys:a,filteredStoredSetupSchemaKeys:i}=(0,kt.Z)(e,n),d={};i.forEach(c=>{const h=(0,de.Z)(s,c);if((0,ze.Z)(l,c)===null)(0,K.Z)(d,c,null);else if(h!==null)(0,K.Z)(d,c,h);else{const x=(0,ze.Z)(l,c);(0,K.Z)(d,c,x)}}),a.forEach(c=>{(0,K.Z)(d,c,(0,de.Z)(r,c))});const u=[],p=Object.keys(d).sort((c,h)=>c<h?-1:c>h?1:0);for(const c of p)u.push(d[c]);return u};var ce=o(62966),g=o(45697),B=o.n(g),S=o(71893);const ue=S.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,Kt=S.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${ue} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${ue}:before {
    transform: translateX(1rem);
  }
`,ne=t.forwardRef(({label:e,onChange:n,onLabel:l,offLabel:r,selected:s,visibleLabels:a,...i},d)=>t.createElement(Kt,{ref:d,role:"switch","aria-checked":s,"aria-label":e,onClick:n,visibleLabels:a,type:"button",...i},t.createElement(I.k,null,t.createElement(ue,null,t.createElement("span",null,l),t.createElement("span",null,r)),a&&t.createElement(C.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:s?"success600":"danger600"},s?l:r))));ne.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},ne.propTypes={label:g.string.isRequired,offLabel:g.string,onChange:g.func.isRequired,onLabel:g.string,selected:g.bool.isRequired,visibleLabels:g.bool},ne.displayName="Switch";var w=o(85893);const Wt="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";var Gt=o(22392);const De=({size:e})=>e==="M"?"18px":"20px",_t=S.default.input`
  height: ${De};
  min-width: ${De};
  margin: 0;
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${Gt.Z}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${Wt}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.neutral200};
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:e})=>e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.neutral200};
      border: 1px solid ${({theme:e})=>e.colors.neutral300};
      &:after {
        background-color: ${({theme:e})=>e.colors.neutral500};
      }
    }
  }
`,Re=({indeterminate:e=!1,size:n="M",name:l,value:r=!1,onValueChange:s,...a})=>{const i=t.useRef(null);return t.useEffect(()=>{i.current&&e?i.current.indeterminate=e:i.current.indeterminate=!1},[e]),(0,w.jsx)(C.x,{children:(0,w.jsx)(_t,{size:n,checked:r,onChange:()=>{s&&s(!r)},type:"checkbox",ref:i,name:l,...a})})};Re.displayName="BaseCheckbox";var Pe=o(54574),Ne=o(63428),Be=o(96404),Fe=o(88262),ge=o(2504);const Yt=(0,S.default)(Z.Z)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }
`,Ht=e=>{const{id:n}=(0,Fe.U)();return t.createElement(Re,{id:n,...e})},Y=({children:e,disabled:n,id:l,hint:r,error:s,...a})=>{const i=(0,ge.M)(l);let d;return s?d=`${i}-error`:r&&(d=`${i}-hint`),t.createElement(Pe.g,{id:i,hint:r,error:s},t.createElement(I.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Yt,{as:"label",textColor:"neutral800",disabled:n},t.createElement(Ht,{disabled:n,"aria-describedby":d,...a}),t.createElement(C.x,{paddingLeft:2},e)),t.createElement(Ne.J,null),t.createElement(Be.c,null)))};Y.defaultProps={disabled:!1,id:void 0,error:void 0,hint:void 0},Y.propTypes={children:g.node.isRequired,disabled:g.bool,error:g.string,hint:g.oneOfType([g.string,g.node,g.arrayOf(g.node)]),id:g.oneOfType([g.string,g.number])};const Qt=e=>(0,w.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,w.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),(0,w.jsx)("path",{d:"M20.573 8c-1.484 0-2.666.745-3.397 1.37l-.026.023-.416.452.919 1.51.68-.682c.711-.6 1.506-.93 2.24-.93 1.48 0 2.685 1.171 2.685 2.612 0 1.44-1.205 2.613-2.685 2.613-2.25 0-3.78-2.974-3.795-3.004C16.69 11.784 14.75 8 11.428 8 8.985 8 7 9.954 7 12.355c0 2.401 1.986 4.355 4.427 4.355 1.196 0 2.373-.476 3.404-1.376l.022-.02.413-.45-.919-1.51-.683.686c-.712.616-1.465.928-2.237.928-1.48 0-2.685-1.172-2.685-2.613 0-1.44 1.205-2.613 2.685-2.613 2.25 0 3.78 2.974 3.795 3.004.088.18 2.028 3.964 5.35 3.964 2.442 0 4.428-1.954 4.428-4.355C25 9.954 23.014 8 20.573 8Z",fill:"#666687"})]}),Jt=Qt,ke=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),Ue=()=>(0,t.useContext)(ke),Xt=({theme:e,expanded:n,variant:l,disabled:r,error:s})=>s?`1px solid ${e.colors.danger600} !important`:r?`1px solid ${e.colors.neutral150}`:n?`1px solid ${e.colors.primary600}`:l==="primary"?`1px solid ${e.colors.neutral0}`:`1px solid ${e.colors.neutral100}`,Ke=(0,S.default)(Z.Z)``,Vt=(0,S.default)(C.x)`
  border: ${Xt};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    ${Ke} {
      color: ${({theme:e,expanded:n})=>n?void 0:e.colors.primary700};
    }

    ${Z.Z} {
      color: ${({theme:e,expanded:n})=>n?void 0:e.colors.primary600};
    }

    & > ${I.k} {
      background: ${({theme:e})=>e.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:e})=>e.colors.primary200};
    }
  }
`,qt=({children:e,disabled:n=!1,error:l,expanded:r=!1,hasErrorMessage:s=!0,id:a,onToggle:i,toggle:d,size:u="M",variant:p="primary",shadow:c})=>{const h=(0,ge.M)(a),m=t.useMemo(()=>({expanded:r,onToggle:i,toggle:d,id:h,size:u,variant:p,disabled:n}),[n,r,h,i,u,d,p]);return(0,w.jsxs)(ke.Provider,{value:m,children:[(0,w.jsx)(Vt,{"data-strapi-expanded":r,disabled:n,"aria-disabled":n,expanded:r,hasRadius:!0,variant:p,error:l,shadow:c,children:e}),l&&s&&(0,w.jsx)(C.x,{paddingTop:1,children:(0,w.jsx)(Z.Z,{variant:"pi",textColor:"danger600",children:l})})]})};var en=o(41363);const tn=({expanded:e,disabled:n,variant:l})=>{let r="neutral100";return e?r="primary100":n?r="neutral150":l==="primary"&&(r="neutral0"),r};var nn=o(52624),We=o(39785);const an=(0,S.default)(We.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:e,expanded:n})=>n?e.colors.primary600:e.colors.neutral500};
    }
  }
`,ln=(0,S.default)(I.k)`
  min-height: ${({theme:e,size:n})=>e.sizes.accordions[n]};
  border-radius: ${({theme:e,expanded:n})=>n?`${e.borderRadius} ${e.borderRadius} 0 0`:e.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,rn=({title:e,description:n,as:l="span",togglePosition:r="right",action:s,...a})=>{const{onToggle:i,toggle:d,expanded:u,id:p,size:c,variant:h,disabled:m}=Ue(),x=`accordion-content-${p}`,v=`accordion-label-${p}`,f=`accordion-desc-${p}`,E=c==="M"?6:4,L=c==="M"?E:E-2,T=tn({expanded:u,disabled:m,variant:h}),y={as:l,fontWeight:c==="S"?"bold":void 0,id:v,textColor:u?"primary600":"neutral700",ellipsis:!0,variant:c==="M"?"delta":void 0},z=u?"primary600":"neutral600",A=u?"primary200":"neutral200",b=c==="M"?`${32/16}rem`:`${24/16}rem`,j=()=>{m||(d&&!i?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),d()):i&&i())},D=(0,w.jsx)(I.k,{justifyContent:"center",borderRadius:"50%",height:b,width:b,transform:u?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:A,cursor:m?"not-allowed":"pointer",onClick:j,shrink:0,children:(0,w.jsx)(nn.J,{as:en.CarretDown,width:c==="M"?`${11/16}rem`:`${8/16}rem`,color:u?"primary600":"neutral600"})});return(0,w.jsx)(ln,{paddingBottom:L,paddingLeft:E,paddingRight:E,paddingTop:L,background:T,expanded:u,size:c,justifyContent:"space-between",cursor:m?"not-allowed":"",children:(0,w.jsxs)(I.k,{gap:3,flex:1,maxWidth:"100%",children:[r==="left"&&D,(0,w.jsx)(an,{onClick:j,"aria-disabled":m,"aria-expanded":u,"aria-controls":x,"aria-labelledby":v,"data-strapi-accordion-toggle":!0,expanded:u,type:"button",flex:1,minWidth:0,...a,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ke,{...y,children:e}),n&&(0,w.jsx)(Z.Z,{as:"p",id:f,textColor:z,children:n})]})}),r==="right"&&(0,w.jsxs)(I.k,{gap:3,children:[D,s]}),r==="left"&&s]})})},on=({children:e,...n})=>{const{expanded:l,id:r}=Ue();if(!l)return null;const s=`accordion-content-${r}`,a=`accordion-label-${r}`,i=`accordion-desc-${r}`;return(0,w.jsx)(C.x,{role:"region",id:s,"aria-labelledby":a,"aria-describedby":i,...n,children:e})};function me(e){const n=(l,r)=>{e.onTreeItemClick(l,r)};return t.createElement(t.Fragment,null,typeof e.value=="boolean"&&t.createElement(Y,{checked:e.value,onChange:()=>n([e.passedKey],e.value)},e.label||"-"),e.value===null&&t.createElement(Y,{checked:!1,disabled:!0},e.label||"-"),e.children&&t.createElement("div",{key:e.passedKey},e.children))}me.propTypes={label:B().string,value:B().any,children:B().any,passedKey:B().string,onTreeItemClick:B().func.isRequired},me.defaultProps={label:void 0,value:void 0,children:void 0,passedKey:""};const Ge=me;var sn=o(76579);function dn(e){return function(n,l,r){for(var s=-1,a=Object(n),i=r(n),d=i.length;d--;){var u=i[e?d:++s];if(l(a[u],u,a)===!1)break}return n}}var cn=dn();const un=cn;var gn=o(60703);function mn(e,n){return e&&un(e,n,gn.Z)}const pn=mn;var fn=o(50585);function hn(e,n){return function(l,r){if(l==null)return l;if(!(0,fn.Z)(l))return e(l,r);for(var s=l.length,a=n?s:-1,i=Object(l);(n?a--:++a<s)&&r(i[a],a,i)!==!1;);return l}}var bn=hn(pn);const vn=bn;function En(e){return e}const yn=En;function xn(e){return typeof e=="function"?e:yn}const Tn=xn;function Cn(e,n){var l=(0,V.Z)(e)?sn.Z:vn;return l(e,Tn(n))}const _e=Cn;var wn=o(77226);function Ye(e,n){const l=n||".",r={};return _e(e,(s,a)=>{if((0,wn.Z)(s)&&!(0,V.Z)(s)){const i=Ye(s,l);_e(i,(d,u)=>{r[a+l+u]=d})}else r[a]=s}),r}function pe(e){const[n,l]=(0,t.useState)(!1),r=(a,i)=>{e.onTreeItemClick(a,i)};(0,t.useEffect)(()=>{l(e.initiallyExpanded)},[e.initiallyExpanded]);const s=(a,i,d="")=>typeof i=="object"&&i!==null?t.createElement(t.Fragment,null,Object.entries(i).map(([p,c])=>{const h=typeof c=="object"&&c!==null;let m=Ye(c);m=Object.fromEntries(Object.entries(m).filter(([y])=>!y.includes("__component__")));const x=Object.keys(m).map(y=>`${d}.${p}.${y}`),v=Object.values(m).some(y=>y),f=Object.values(m).some(y=>!y&&y!==null),E=Object.values(m).every(y=>y===null);if(["__model__","__component__"].includes(p))return!1;const T=`${d}.${p}`;return t.createElement(C.x,{key:T,marginTop:6,marginBottom:6,marginLeft:6},h&&t.createElement(Y,{disabled:E,checked:v&&!f,indeterminate:v&&f,onChange:()=>r(x,v&&!f)},t.createElement(I.k,{alignItems:"center"},!!c?.__component__&&t.createElement(I.k,{alignItems:"center",marginRight:2},t.createElement(Jt,{width:"1rem",height:"1rem"})),c?.__component__||p||"-")),t.createElement(Ge,{onTreeItemClick:r,passedKey:T},s(p,c,T)))})):t.createElement(Ge,{onTreeItemClick:r,key:d,passedKey:d,label:a,value:i});return t.createElement(C.x,null,Object.entries(e.objects).map(([a,i])=>i.__model__!==void 0&&t.createElement(C.x,{borderColor:"neutral200",hasRadius:!0},t.createElement(qt,{size:"S",expanded:n,onToggle:()=>{l(!n)}},t.createElement(rn,{variant:"secondary",title:a,togglePosition:"left",action:t.createElement(ne,{label:`switch_tree_${a}`,onChange:()=>r([`${a}.__model__`],i.__model__),selected:!!i.__model__})}),t.createElement(on,null,s(a,i,a))))))}pe.propTypes={objects:B().object.isRequired,onTreeItemClick:B().func.isRequired,initiallyExpanded:B().bool},pe.defaultProps={initiallyExpanded:!1};const Ln=pe;var M=o(28702);const Mn=e=>(0,w.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,w.jsx)("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"})}),An=Mn,H=(0,S.default)(An)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  margin-right: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:n})=>n?e.colors.primary600:e.colors.neutral600};
  }
`;function Sn(){const{t:e}=(0,P.$G)();return t.createElement("div",null,t.createElement(M.Typography,{textColor:"neutral600",variant:"beta"},e("plugin_settings.there_is_nothing_to_transfer")),t.createElement("br",null),t.createElement("br",null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},e("plugin_settings.please_check_that_you_have_entered_a_valid_collection")),t.createElement("br",null),t.createElement(M.Flex,{marginTop:1,alignItems:"center"},t.createElement(H,null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},t.createElement(P.cC,{i18nKey:"plugin_settings.step_1",components:{1:t.createElement(M.Typography,{variant:"omega",fontWeight:"semiBold"})}}))),t.createElement(M.Flex,{marginTop:1,alignItems:"center"},t.createElement(H,null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},t.createElement(P.cC,{i18nKey:"plugin_settings.step_2",components:{1:t.createElement(M.Typography,{variant:"omega",fontWeight:"semiBold"})}}))),t.createElement(M.Flex,{marginTop:1,alignItems:"center"},t.createElement(H,null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},t.createElement(P.cC,{i18nKey:"plugin_settings.step_3",components:{1:t.createElement(M.Typography,{variant:"omega",fontWeight:"semiBold"})}}))),t.createElement(M.Flex,{marginTop:1,alignItems:"center"},t.createElement(H,null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},t.createElement(P.cC,{i18nKey:"plugin_settings.step_4",components:{1:t.createElement(M.Typography,{variant:"omega",fontWeight:"semiBold"})}}))),t.createElement(M.Flex,{marginTop:1,alignItems:"center"},t.createElement(H,null),t.createElement(M.Typography,{textColor:"neutral600",variant:"omega"},t.createElement(P.cC,{i18nKey:"plugin_settings.step_5",components:{1:t.createElement(M.Typography,{variant:"omega",fontWeight:"semiBold"})}}))))}const $n=Sn;var qn=o(9839);function In(){const{t:e}=(0,P.$G)(),[n]=(0,ce.u)(),l=()=>!!n.accessToken,[r,s]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!0),[d,u]=(0,t.useState)(!1),[p,c]=(0,t.useState)(!1),[,h]=(0,t.useState)([]),m=O=>{const $={};return Bt(O).forEach((R,G)=>{$[R.modelUid]=G===0}),$},[,x]=(0,t.useState)([]),[v,f]=(0,t.useState)([]),[E,L]=(0,t.useState)([]),[T,y]=(0,t.useState)(!1),z=()=>{L((0,N.Z)(v)),y(!1)},A=async O=>{try{await te.Z.updateContentTransferSetup(O),f((0,N.Z)(O)),y(!1),u(!0),c(!1)}catch($){throw $.data}},b=(O,$)=>{L(R=>{const G=O[0].split(".")[0];let le;const _=R.find((F,Q)=>Object.keys(F).includes(G)?(le=Q,!0):!1);if(_===void 0)return R;const U=(0,N.Z)(R);return O.forEach(F=>{if(F.includes("__component__"))return;(0,de.Z)(_,F)!==null&&(0,K.Z)(_,F,!$)}),U.splice(le,1,_),y(!Se(v,U)||p),U})},j="https://localazy.com/docs/strapi",D=()=>{window.open(j,"_blank")};return(0,t.useEffect)(()=>{async function O(){if(i(!0),s(l()),!l()){i(!1);return}const[$,R]=await Promise.all([Ze.Z.getModels(),Ze.Z.getLocalizableModels()]),G=await te.Z.getContentTransferSetup(),le=m(R);h(le);const _=(0,je.Z)($,$),U=(0,je.Z)($,R);x(U);const F=Ut(U,G.setup,_);L(F),f((0,N.Z)(F));const Q=await(0,Ft.Z)(U,G.setup);c(Q),y(Q),i(!1)}O()},[]),t.createElement(t.Fragment,null,!a&&!r&&t.createElement(k.Redirect,{to:`/admin/plugins/${X()}/login`}),t.createElement($e.T,{title:e("plugin_settings.content_transfer_setup"),subtitle:e("plugin_settings.content_transfer_setup_description"),primaryAction:t.createElement(I.k,{gap:2},t.createElement(ee.z,{variant:"secondary",disabled:!T,onClick:z},e("plugin_settings.cancel")),t.createElement(ee.z,{startIcon:t.createElement(Ie.Z,null),disabled:!T,onClick:()=>{A(E)}},e("plugin_settings.save"))),as:"h2"}),t.createElement(C.x,{marginRight:10,marginLeft:10},!a&&d&&t.createElement(C.x,{marginBottom:8},t.createElement(ie.b,{onClose:()=>u(!1),closeLabel:e("plugin_settings.close"),title:e("plugin_settings.content_transfer_setup_saved"),variant:"success"},e("plugin_settings.content_transfer_setup_saved_successfully"))),!a&&p&&t.createElement(C.x,{marginBottom:8},t.createElement(ie.b,{onClose:()=>c(!1),closeLabel:e("plugin_settings.close"),title:e("plugin_settings.content_types_model_changed"),variant:"default"},e("plugin_settings.please_update_your_content"))),!a&&t.createElement(C.x,{background:"neutral0",padding:7,paddingTop:6,shadow:"tableShadow",hasRadius:!0},!E.length&&t.createElement($n,null),E.map((O,$)=>t.createElement(C.x,{key:`box_tree_${$}`,marginBottom:3},t.createElement(Ln,{onTreeItemClick:b,objects:O,initiallyExpanded:$===0}))),!!E.length&&t.createElement(C.x,null,t.createElement(C.x,{paddingTop:6,paddingBottom:6},t.createElement(Oe.i,null)),t.createElement(Z.Z,{variant:"omega"},e("plugin_settings.you_can_upload_download")),t.createElement(Z.Z,{variant:"omega",fontWeight:"semiBold"},e("plugin_settings.only_text_based_content")),t.createElement("br",null),t.createElement("br",null),t.createElement(Z.Z,{variant:"omega"},e("plugin_settings.learn_more_in_docs_message_a")),t.createElement(Z.Z,{onClick:D,variant:"omega",fontWeight:"semiBold",textColor:"primary600",style:{cursor:"pointer"}},e("plugin_settings.learn_more_in_docs_message_b"))))))}const On=In;var Zn=o(19270),He=o(75228),jn=o(15585),zn=o(63237);const Dn=S.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,Rn=(0,S.default)(C.x)`
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,jn.k3)()}
`,Qe=(0,S.default)(I.k).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:n,disabled:l})=>n?l?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:n,disabled:l})=>n&&n!==null?l?e.colors.neutral300:e.colors.neutral200:l?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
`,Pn=S.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,ae=t.forwardRef(({size:e,onLabel:n,offLabel:l,children:r,checked:s,disabled:a,onChange:i,...d},u)=>{const{error:p,hint:c,id:h,name:m,required:x}=(0,Fe.U)(),v="neutral600";let f=!s&&s!==null?"danger700":v,E=s?"primary600":v;const L=y=>{a||i(y)};let T;return p?T=`${h}-error`:c&&(T=`${h}-hint`),t.createElement(Dn,null,t.createElement(zn.T,null,r),t.createElement(Rn,{hasRadius:!0,disabled:a,padding:1,display:"flex",background:a?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},t.createElement(Qe,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:s===null?!1:!s,disabled:a},t.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:a?"neutral700":f},l)),t.createElement(Qe,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:s===null?!1:s,disabled:a},t.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:a?"neutral700":E},n)),t.createElement(Pn,{type:"checkbox","aria-disabled":a,"aria-describedby":T,onChange:y=>L(y),name:m,ref:u,"aria-required":x,...d,checked:!(s===null||!s)})))});ae.displayName="ToggleCheckbox",ae.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},ae.propTypes={checked:g.bool,children:g.string.isRequired,disabled:g.bool,offLabel:g.string.isRequired,onChange:g.func,onLabel:g.string.isRequired,size:g.oneOf(Object.keys(He.J.input))};const Nn=(0,S.default)(Pe.g)`
  max-width: 320px;
`,Bn=(0,S.default)(We.A)`
  align-self: flex-end;
  margin-left: auto;
`,W=({disabled:e,size:n,error:l,hint:r,label:s,name:a,labelAction:i,required:d,id:u,onClear:p,clearLabel:c,checked:h,...m})=>{const x=(0,ge.M)(u);return t.createElement(Nn,{name:a,hint:r,error:l,id:x,required:d},t.createElement(I.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(I.k,null,t.createElement(Zn.Q,{action:i},s),c&&p&&h!==null&&!e&&t.createElement(Bn,{onClick:p},c)),t.createElement(ae,{id:x,size:n,checked:h,disabled:e,...m},s),t.createElement(Ne.J,null),t.createElement(Be.c,null)))};W.displayName="ToggleInput",W.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},W.propTypes={checked:g.bool,clearLabel:g.string,disabled:g.bool,error:g.string,hint:g.oneOfType([g.string,g.node,g.arrayOf(g.node)]),id:g.string,label:g.string,labelAction:g.node,name:g.string,onClear:g.func,required:g.bool,size:g.oneOf(Object.keys(He.J.input))};var Je=o(23150),fe=o(82562),Fn=o(5451),kn=o(84404);const Un=(0,kn.Z)("/admin/users");class Kn{static async getAdminPanelUsers(){try{return(await Un.get("",{params:{pageSize:100,page:1,sort:"firstname"}})).data.data.results}catch(n){throw n}}}var Wn=o(99725);function Gn(){const{t:e}=(0,P.$G)(),[n]=(0,ce.u)(),l=()=>!!n.accessToken,[r,s]=(0,t.useState)(!1),[a,i]=(0,t.useState)([]),[d,u]=(0,t.useState)(!0),[p,c]=(0,t.useState)(!1),[h,m]=(0,t.useState)([]),[x,v]=(0,t.useState)([]),[f,E]=(0,t.useState)([]),[L,T]=(0,t.useState)(!1),y=()=>{E((0,N.Z)(x)),T(!1)},z=async b=>{try{await te.Z.updatePluginSettings(b),v((0,N.Z)(b)),T(!1),c(!0)}catch(j){throw j.data}},A=(b,j)=>{const D=(0,N.Z)(f);(0,K.Z)(D,b,j),E(D),T(!Se(x,D))};return(0,t.useEffect)(()=>{async function b(){if(u(!0),s(l()),!l()){u(!1);return}const j=await Wn.Z.getConnectedProject(),D=j?.languages?.filter(R=>R.id!==j.sourceLanguage)||[];i(D);const O=await te.Z.getPluginSettings();E(O),v((0,N.Z)(O));const $=await Kn.getAdminPanelUsers();m($),u(!1)}b()},[]),t.createElement(t.Fragment,null,!d&&!r&&t.createElement(k.Redirect,{to:`/admin/plugins/${X()}/login`}),t.createElement($e.T,{title:e("plugin_settings.global_settings"),subtitle:e("plugin_settings.global_settings_description"),primaryAction:t.createElement(I.k,{gap:2},t.createElement(ee.z,{variant:"secondary",disabled:!L,onClick:y},e("plugin_settings.cancel")),t.createElement(ee.z,{startIcon:t.createElement(Ie.Z,null),disabled:!L,onClick:()=>{z(f)}},e("plugin_settings.save"))),as:"h2"}),t.createElement(C.x,{marginRight:10,marginLeft:10},!d&&p&&t.createElement(C.x,{marginBottom:8},t.createElement(ie.b,{onClose:()=>p(!1),closeLabel:e("plugin_settings.close"),title:e("plugin_settings.content_transfer_setup_saved"),variant:"success"},e("plugin_settings.global_settings_saved_successfully"))),!d&&t.createElement(C.x,{background:"neutral0",padding:7,paddingTop:6,shadow:"tableShadow",hasRadius:!0},t.createElement(Z.Z,{variant:"delta",textColor:"neutral800"},e("plugin_settings.upload_settings")),t.createElement("br",null),t.createElement("br",null),t.createElement(W,{label:e("plugin_settings.allow_automated_upload_to_localazy"),hint:e("plugin_settings.allow_automated_upload_to_localazy_info"),offLabel:e("plugin_settings.off"),onLabel:e("plugin_settings.on"),checked:typeof f?.upload?.allowAutomated=="boolean"?f.upload.allowAutomated:!1,onChange:b=>A("upload.allowAutomated",b.target.checked)}),t.createElement("br",null),t.createElement("br",null),t.createElement(Je.P,{label:e("plugin_settings.automated_upload_triggers"),hint:e("plugin_settings.automated_upload_triggers_info"),clearLabel:e("plugin_settings.clear"),placeholder:e("plugin_settings.automated_upload_triggers_placeholder"),onClear:()=>A("upload.automatedTriggers",[]),value:f?.upload?.automatedTriggers||[],onChange:b=>A("upload.automatedTriggers",b),disabled:typeof f?.upload?.allowAutomated=="boolean"?!f.upload.allowAutomated:!0,multi:!0,withTags:!0},t.createElement(fe.W,{value:"created"},e("plugin_settings.creating_new_data_entry")),t.createElement(fe.W,{value:"updated"},e("plugin_settings.editing_data_entry"))),t.createElement("br",null),t.createElement("br",null),t.createElement(W,{label:e("plugin_settings.deprecate_source_keys_on_delete"),hint:e("plugin_settings.deprecate_source_keys_on_delete_info"),offLabel:e("plugin_settings.off"),onLabel:e("plugin_settings.on"),checked:typeof f?.upload?.allowDeprecate=="boolean"?f.upload.allowDeprecate:!1,onChange:b=>A("upload.allowDeprecate",b.target.checked)}),t.createElement("br",null),t.createElement("br",null),t.createElement(Oe.i,null),t.createElement("br",null),t.createElement("br",null),t.createElement(Z.Z,{variant:"delta",textColor:"neutral800"},e("plugin_settings.download_settings")),t.createElement("br",null),t.createElement("br",null),t.createElement(W,{label:e("plugin_settings.processing_of_download_webhook"),hint:e("plugin_settings.processing_of_download_webhook_info"),offLabel:e("plugin_settings.off"),onLabel:e("plugin_settings.on"),checked:typeof f?.download?.processDownloadWebhook=="boolean"?f.download.processDownloadWebhook:!0,onChange:b=>A("download.processDownloadWebhook",b.target.checked)}),t.createElement("br",null),t.createElement("br",null),t.createElement(Je.P,{label:e("plugin_settings.webhook_author"),hint:e("plugin_settings.webhook_author_info"),clearLabel:e("plugin_settings.clear"),placeholder:e("plugin_settings.webhook_author_placeholder"),onClear:()=>A("download.webhookAuthorId",null),value:f?.download?.webhookAuthorId||null,onChange:b=>A("download.webhookAuthorId",b)},h.map(b=>t.createElement(fe.W,{key:b.id,value:b.id},`${b.firstname} ${b.lastname} (${b.email})`))),t.createElement("br",null),t.createElement("br",null),t.createElement(Fn.Z,{preselectedLanguages:f?.download?.webhookLanguages||[],projectLanguages:a,onChange:b=>A("download.webhookLanguages",b),label:e("plugin_settings.webhook_languages"),hint:e("plugin_settings.webhook_languages_info"),placeholder:e("plugin_settings.webhook_languages_placeholder")}))))}const _n=Gn;var Yn=o(92367),Hn=o(99167);function Qn(){const{t:e}=(0,P.$G)(),[n,l]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{async function r(){l(!0);const s=await Yn.Z.getIdentity();(0,ce.Kj)(s),l(!1)}r()},[]),t.createElement(t.Fragment,null,n&&t.createElement(Hn.Z,null,e("common.loading_content")),!n&&t.createElement(re.f,{theme:Ve.W},t.createElement(C.x,{padding:8},t.createElement(k.Switch,null,t.createElement(k.Route,{path:`/settings/${X()}/content-transfer-setup`,exact:!0},t.createElement(On,null)),t.createElement(k.Route,{path:`/settings/${X()}/global-settings`,exact:!0},t.createElement(_n,null))))))}const Jn=Qn},85018:(Xe,J,o)=>{o.d(J,{Z:()=>k});var t=o(85893);const C=re=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...re,children:(0,t.jsx)("path",{d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z",fill:"#212134"})}),k=C}}]);
