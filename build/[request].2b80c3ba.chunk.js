(self.webpackChunkiktva_strapi_api=self.webpackChunkiktva_strapi_api||[]).push([[6750],{40528:(F,L,a)=>{"use strict";a.r(L),a.d(L,{default:()=>ze});var e=a(67294),s=a(25741),c=a(23724),n=a(95489),t=a(28897),N=a(97132),J=a(37424),q=a(27361),E=a.n(q),_=a(78718),I=a.n(_),ee=a(44908),R=a.n(ee),i=a(73955),u=a.n(i),o=a(80831),r=a(28702),m=a(41580),v=a(29728),S=a(23620),j=a(7681),P=a(53979),U=a(45697);const te=({children:l})=>e.createElement(m.x,{paddingLeft:10,paddingRight:10},l);te.propTypes={children:U.node.isRequired};var ge=a(85893);const fe=l=>(0,ge.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,ge.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),Ee=fe;var ye=a(85018),x=a(82613),he=a(92454);const ve=["_blank","_parent","_self","_top"],Be=[{input:{intlLabel:{id:(0,t.OB)("form.label.title"),defaultMessage:"Title"},name:"title",type:"text",required:!0},grid:{col:6,s:12}},{input:{intlLabel:{id:(0,t.OB)("form.label.slug"),defaultMessage:"Slug"},name:"slug",type:"uid",contentTypeUID:"plugin::menus.menu",attribute:{targetField:"title"},required:!0},grid:{col:6,s:12}}],Me=[{input:{intlLabel:{id:(0,t.OB)("form.label.title"),defaultMessage:"Title"},name:"title",type:"text",placeholder:{id:(0,t.OB)("form.placeholder.untitled"),defaultMessage:"Untitled"},required:!0}},{input:{intlLabel:{id:(0,t.OB)("form.label.url"),defaultMessage:"URL"},name:"url",type:"text"}},{input:{intlLabel:{id:(0,t.OB)("form.label.target"),defaultMessage:"Target"},name:"target",type:"select",options:ve.map(l=>({key:l,value:l,metadatas:{intlLabel:{id:(0,t.OB)(`form.label.option.${l}`),defaultMessage:l}}}))},grid:{col:6}}],ae={menu:Be,menuItem:Me};var B=a(53209),V=a(89414);const xe=B.Ry().shape({order:B.Rx(n.translatedErrors.number).required(n.translatedErrors.required),title:B.Z_(n.translatedErrors.string).required(n.translatedErrors.required),url:B.Z_(n.translatedErrors.string).test("is-url",(0,t.OB)("error.url.invalid"),l=>!!(!l||V.Ks.test(l)||V.dM.test(l)||V.jv.test(l)||V.kR.test(l))).nullable(),target:B.Z_(n.translatedErrors.string).nullable()}),Ae=B.Ry().shape({title:B.Z_(n.translatedErrors.string).nullable().required(n.translatedErrors.required),slug:B.Z_(n.translatedErrors.string).nullable().required(n.translatedErrors.required),items:B.IX().of(xe)}),Oe={title:"",slug:"",items:[]},Ce="menus-clone-{id}",Le="menus-create",Re="menus-edit-{id}",be=({history:l,location:y,match:se})=>{const{id:h}=se.params,{formatMessage:A}=(0,N.useIntl)(),{notifyStatus:k}=(0,r.useNotifyAT)(),T=(0,n.useNotification)(),{lockApp:H,unlockApp:b}=(0,n.useOverlayBlocker)(),K=(0,c.useQueryClient)(),{config:ie,schema:p}=(0,J.useSelector)(g=>g[`${t.aw}_config`]),Y=E()(ie,"layouts.menuItem",{}),W=(0,e.useMemo)(()=>(0,t.Vi)(ae.menuItem,Y,p),[Y]),re=Object.values(W).flat(),O=!h,M=y.pathname.split("/").includes("clone");let z=A({id:(0,t.OB)("edit.header.title"),defaultMessage:"Edit menu"}),$=Re.replace("{id}",h);O&&(z=A({id:(0,t.OB)("create.header.title"),defaultMessage:"Create menu"}),$=Le),M&&(z=A({id:(0,t.OB)("clone.header.title"),defaultMessage:"Clone menu"}),$=Ce.replace("{id}",h));const le=(0,t.Bi)(p.menuItem,["media"]),oe={populate:R()(["items","items.parent",...le.map(g=>`items.${g}`)])},{status:Z,data:d}=(0,c.useQuery)($,()=>t.hi.get(h,oe),{enabled:!O,select:g=>(0,t.m5)(g),onSuccess:()=>{k(A({id:(0,t.OB)("ui.loaded"),defaultMessage:"Data has been loaded"}))},onError:()=>{T({type:"warning",message:{id:(0,t.OB)("ui.error"),defaultMessage:"An error occured"}})}}),X=(0,c.useMutation)(g=>{if(M){const D=I()(g.data,["title","slug"],{}),f=g.data.items.map(C=>({id:C.id,createId:u()("create")})),w=g.data.items.map(C=>{const G=f.find(me=>me.id===C.id),Q=f.find(me=>me.id===C.parent?.id),ce=G?G.createId:null,ue=Q?{id:Q.createId}:null;return{...(0,t.oW)(C),id:ce,parent:ue}}),de={data:{...D,items:w}};return t.hi.postAction(de)}return O?t.hi.postAction(g):t.hi.putAction(h,g)},{refetchActive:!0,onSuccess:async()=>{await K.invalidateQueries($),T({type:"success",message:{id:(0,t.OB)("ui.saved"),defaultMessage:"Saved"}})},onError:()=>{T({type:"warning",message:{id:(0,t.OB)("ui.error"),defaultMessage:"An error occured"}})},onSettled:()=>{b()}}),$e=async(g,{setErrors:D})=>{H();try{const f=(0,t.oW)(g),w=(0,t.BR)(f,d,ae.menu,M),de=E()(f,"items",[]).map(G=>{const Q=(0,t.oW)(G),ce=E()(d,"items",[]).find(ue=>ue.id===Q.id);return(0,t.BR)(Q,ce,re,M)}),C=await X.mutateAsync({data:{...w,items:de}});(O||M)&&C?.data?.data?.id&&l.push(`/plugins/${t.aw}/edit/${C.data.data.id}`)}catch(f){b();const w=f?.response?.data?.error?.details;w?D(w):console.error(f)}};return e.createElement(x.Ar,{isLoading:!O&&Z!=="success",title:z},e.createElement(he.rE,null),e.createElement(o.Formik,{onSubmit:$e,initialValues:d??Oe,validateOnChange:!1,validationSchema:Ae,enableReinitialize:!0},({handleSubmit:g})=>e.createElement(n.Form,{onSubmit:g},e.createElement(x.Cp,{isCreatingEntry:O,isCloningEntry:M,menu:d},({dirty:D,isSubmitting:f})=>e.createElement(e.Fragment,null,e.createElement(P.T,{title:z,navigationAction:e.createElement(S.r,{startIcon:e.createElement(Ee,null),to:`/plugins/${t.aw}`},A({id:(0,t.OB)("ui.goBack"),defaultMessage:"Go back"})),primaryAction:e.createElement(v.z,{type:"submit",disabled:!D||f,loading:f,startIcon:e.createElement(ye.Z,null),size:"L"},A({id:(0,t.OB)("ui.save"),defaultMessage:"Save"}))}),e.createElement(te,null,e.createElement(m.x,{paddingBottom:10},e.createElement(j.K,{spacing:8},e.createElement(x.$0,null,e.createElement(x.lt,{fields:ae.menu,schema:p.menu})),e.createElement(x.qT,{fields:W})))))))))},ne=(0,e.memo)(be);var Ie=a(96315);const pe="menus-index",Se=({history:l})=>{const{formatMessage:y}=(0,N.useIntl)(),{notifyStatus:se}=(0,r.useNotifyAT)(),h=(0,n.useNotification)(),{lockApp:A,unlockApp:k}=(0,n.useOverlayBlocker)(),T=(0,c.useQueryClient)(),[{query:H}]=(0,n.useQueryParams)(),b=E()(H,"pageSize",10),K=E()(H,"page",1)*b-b,ie={populate:"*",pagination:{start:K,limit:b}},{data:p,refetch:Y,status:W}=(0,c.useQuery)(pe,()=>t.hi.get(null,ie),{onSuccess:()=>{se(y({id:(0,t.OB)("ui.loaded"),defaultMessage:"Data has been loaded"}))},onError:()=>{h({type:"warning",message:{id:(0,t.OB)("ui.error"),defaultMessage:"An error occured"}})}});(0,e.useEffect)(()=>Y(),[K,b]);const re=(0,c.useMutation)(d=>t.hi.deleteAction(d),{onSuccess:async()=>{await T.invalidateQueries(pe),h({type:"success",message:{id:(0,t.OB)("ui.deleted.menu"),defaultMessage:"Menu has been deleted"}})},onError:d=>{d?.response?.data?.data?h({type:"warning",message:d.response.data.data}):h({type:"warning",message:{id:(0,t.OB)("ui.error"),defaultMessage:"An error occured"}})},onSettled:()=>{k()}}),O=async d=>{A();try{await re.mutateAsync(d)}catch{k()}},M=W!=="success",z=3,$=(p?.data?.length??0)+1,le=p?.meta?.total?Math.ceil(p.meta.total/p.meta.limit):1,oe=[{name:"title",key:"title",metadatas:{label:y({id:(0,t.OB)("form.label.title"),defaultMessage:"Title"}),sortable:!0}},{name:"slug",key:"slug",metadatas:{label:y({id:(0,t.OB)("form.label.slug"),defaultMessage:"Slug"}),sortable:!0}},{name:"items",key:"items",metadatas:{label:y({id:(0,t.OB)("form.label.items"),defaultMessage:"Items"}),sortable:!1}}],Z=({size:d="L",variant:X="default"})=>e.createElement(v.z,{onClick:()=>l.push(`/plugins/${t.aw}/create`),startIcon:e.createElement(Ie.Z,null),variant:X,size:d},y({id:(0,t.OB)("ui.create.menu"),defaultMessage:"Create new menu"}));return e.createElement(x.Ar,{isLoading:M,title:y({id:(0,t.OB)("plugin.name"),defaultMessage:t.oy})},e.createElement(P.T,{title:y({id:(0,t.OB)("plugin.name"),defaultMessage:t.oy}),subtitle:y({id:(0,t.OB)("index.header.subtitle"),defaultMessage:"Customize the structure of menus and menu items"}),primaryAction:e.createElement(Z,null)}),e.createElement(te,null,e.createElement(m.x,{paddingBottom:10},p?.data?.length?e.createElement(e.Fragment,null,e.createElement(n.DynamicTable,{contentType:"menus",isLoading:M,headers:oe,rows:p.data,action:e.createElement(Z,{size:"S",variant:"secondary"}),onConfirmDelete:O},e.createElement(x.XS,{data:p.data??[],onClickClone:d=>l.push(`/plugins/${t.aw}/clone/${d}`),onClickEdit:d=>l.push(`/plugins/${t.aw}/edit/${d}`)})),e.createElement(x.eO,{pagination:{pageCount:le}})):e.createElement(n.EmptyStateLayout,{content:{id:(0,t.OB)("index.state.empty"),defaultMessage:"No menus found"},action:e.createElement(Z,{size:"S",variant:"secondary"})}))))},we=(0,e.memo)(Se),Te=new c.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),ze=()=>e.createElement(c.QueryClientProvider,{client:Te},e.createElement("div",null,e.createElement(s.Switch,null,e.createElement(s.Route,{path:`/plugins/${t.aw}`,component:we,exact:!0}),e.createElement(s.Route,{path:`/plugins/${t.aw}/create`,component:ne,exact:!0}),e.createElement(s.Route,{path:`/plugins/${t.aw}/clone/:id`,component:ne,exact:!0}),e.createElement(s.Route,{path:`/plugins/${t.aw}/edit/:id`,component:ne,exact:!0}),e.createElement(s.Route,{component:n.NotFound}))))},44908:(F,L,a)=>{var e=a(45652);function s(c){return c&&c.length?e(c):[]}F.exports=s},53979:(F,L,a)=>{"use strict";a.d(L,{T:()=>I});var e=a(67294),s=a(45697),c=a(71893),n=a(41580),t=a(11047);const N=i=>{const u=(0,e.useRef)(null),[o,r]=(0,e.useState)(!0),m=([v])=>{r(v.isIntersecting)};return(0,e.useEffect)(()=>{const v=u.current,S=new IntersectionObserver(m,i);return v&&S.observe(u.current),()=>{v&&S.disconnect()}},[u,i]),[u,o]};var J=a(98402);const q=(i,u)=>{const o=(0,J.useCallbackRef)(u);(0,e.useLayoutEffect)(()=>{const r=new ResizeObserver(o);return Array.isArray(i)?i.forEach(m=>{m.current&&r.observe(m.current)}):i.current&&r.observe(i.current),()=>{r.disconnect()}},[i,o])};var E=a(75515);const _=()=>{const i=(0,e.useRef)(null),[u,o]=(0,e.useState)(null),[r,m]=N({root:null,rootMargin:"0px",threshold:0});return q(r,()=>{r.current&&o(r.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{i.current&&o(i.current.getBoundingClientRect())},[i]),{containerRef:r,isVisible:m,baseHeaderLayoutRef:i,headerSize:u}},I=i=>{const{containerRef:u,isVisible:o,baseHeaderLayoutRef:r,headerSize:m}=_();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:m?.height},ref:u},o&&e.createElement(R,{ref:r,...i})),!o&&e.createElement(R,{...i,sticky:!0,width:m?.width}))};I.displayName="HeaderLayout";const ee=(0,c.default)(n.x)`
  width: ${i=>i.width}px;
`,R=e.forwardRef(({navigationAction:i,primaryAction:u,secondaryAction:o,subtitle:r,title:m,sticky:v,width:S,...j},P)=>{const U=typeof r=="string";return v?e.createElement(ee,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(t.k,{justifyContent:"space-between"},e.createElement(t.k,null,i&&e.createElement(n.x,{paddingRight:3},i),e.createElement(n.x,null,e.createElement(E.Z,{variant:"beta",as:"h1",...j},m),U?e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},r):r),o?e.createElement(n.x,{paddingLeft:4},o):null),e.createElement(t.k,null,u?e.createElement(n.x,{paddingLeft:2},u):void 0))):e.createElement(n.x,{ref:P,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:i?6:8,background:"neutral100","data-strapi-header":!0},i?e.createElement(n.x,{paddingBottom:2},i):null,e.createElement(t.k,{justifyContent:"space-between"},e.createElement(t.k,{minWidth:0},e.createElement(E.Z,{as:"h1",variant:"alpha",...j},m),o?e.createElement(n.x,{paddingLeft:4},o):null),u),U?e.createElement(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},r):r)});R.displayName="BaseHeaderLayout",R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},R.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},I.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},I.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},85018:(F,L,a)=>{"use strict";a.d(L,{Z:()=>c});var e=a(85893);const s=n=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,e.jsx)("path",{d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z",fill:"#212134"})}),c=s}}]);
