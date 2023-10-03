(self.webpackChunkfireplatform=self.webpackChunkfireplatform||[]).push([[877],{35878:function(e,r,s){"use strict";var n=s(72791);r.Z=()=>{const e=(0,n.useRef)(!0);return(0,n.useEffect)((()=>()=>{e.current=!1}),[]),e}},98393:function(e,r,s){"use strict";var n=s(53767),t=s(80184);r.Z=()=>(0,t.jsx)(n.Z,{direction:"row",justifyContent:"space-between"})},18714:function(e,r,s){"use strict";var n=s(72791),t=s(58258),i=s(7546),o=s(80184);const a=(0,n.forwardRef)(((e,r)=>{var s,n;let a,c,{children:d,type:l,direction:u,offset:m,scale:x}=e;switch(u){case"up":case"left":a=m,c=0;break;default:a=0,c=m}const[h,f]=(0,t.n)(a,c),[p,j]=(0,t.n)(a,c);switch(l){case"rotate":return(0,o.jsx)(i.E.div,{ref:r,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===u||"down"===u?(0,o.jsx)(i.E.div,{ref:r,animate:{y:void 0!==p?p:""},onHoverEnd:()=>j(),onHoverStart:()=>j(),children:d}):(0,o.jsx)(i.E.div,{ref:r,animate:{x:void 0!==h?h:""},onHoverEnd:()=>f(),onHoverStart:()=>f(),children:d});default:return"number"===typeof x&&(x={hover:x,tap:x}),(0,o.jsx)(i.E.div,{ref:r,whileHover:{scale:null===(s=x)||void 0===s?void 0:s.hover},whileTap:{scale:null===(n=x)||void 0===n?void 0:n.tap},children:d})}}));a.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},r.Z=a},45290:function(e,r,s){"use strict";var n=s(64554),t=s(23735),i=s(80184);r.Z=e=>{let{children:r,...s}=e;return(0,i.jsx)(t.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...s,children:(0,i.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:r})})}},33914:function(e,r,s){"use strict";const n=(0,s(47630).ZP)("div")((e=>{let{theme:r}=e;return{backgroundColor:r.palette.primary.light,minHeight:"100vh"}}));r.Z=n},30022:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return D}});var n=s(11087),t=s(13967),i=s(33914),o=s(45290),a=s(72791),c=s(61889),d=s(64554),l=s(94721),u=s(68096),m=s(94925),x=s(28029),h=s(47071),f=s(63466),p=s(13400),j=s(36151),w=s(81724),Z=s(92506),v=s(35878),g=s(18714),P=s(3746),y=s(20165),C=s(41202),b=s.n(C),S=s(78687),E=s(80184);var I=(0,S.$j)((e=>({username:e.user.username})))((e=>{let{username:r,...s}=e;const n=(0,t.Z)(),i=(0,v.Z)(),[o,C]=(0,a.useState)(!1),[S,I]=(0,a.useState)(!1),[k,B]=(0,a.useState)(null),H=()=>{C(!o)},q=()=>{I(!S)},z=e=>{e.preventDefault()},[D,R]=(0,a.useState)({username:r,verificationCode:"",password:"",confirmPassword:""}),[F,W]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const{verificationCode:e,password:r,confirmPassword:s}=D,n=r===s&&""!==r&&""!==e&&e.length>=6;W(n)}),[D]);const A=e=>{const{name:r,value:s}=e.target;R((e=>({...e,[r]:s})))},N=async e=>{e.preventDefault();try{const e=new(b().Lambda),r={verificationCode:D.verificationCode,username:D.username,password:D.password},s={FunctionName:"resetPassword",InvocationType:"RequestResponse",Payload:JSON.stringify(r)},n=await e.invoke(s).promise(),t=JSON.parse(n.Payload);t.success?(console.error("User registration successful:",t.success),B("Password successfully changed.")):(console.error("User registration failed:",t.error),B("Failed to change password. Please try again."))}catch(r){console.error("Error:",r)}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(c.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,E.jsx)(l.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,E.jsx)(l.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center"})]}),(0,E.jsx)(Z.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:w.Ry().shape({verificationCode:w.Z_().min(6,"Verification code must be at least 6 characters").max(6).required("Cannot be empty"),password:w.Z_().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:w.Z_().oneOf([w.iH("password"),null],"Passwords must match").required("Confirm password is required")}),onSubmit:async(e,r)=>{let{setErrors:s,setStatus:n,setSubmitting:t}=r;try{i.current&&(n({success:!0}),t(!1))}catch(o){console.error(o),i.current&&(n({success:!1}),s({submit:o.message}),t(!1))}},children:e=>{let{errors:r,handleBlur:t,handleChange:i,handleSubmit:a,isSubmitting:c,touched:l,values:w}=e;return(0,E.jsxs)("form",{noValidate:!0,onSubmit:N,...s,children:[(0,E.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.verificationCode&&r.verificationCode),sx:{...n.typography.customInput},children:[(0,E.jsx)(m.Z,{htmlFor:"outlined-adornment-verificationCode-register",children:"Verification code"}),(0,E.jsx)(x.Z,{sx:{fontSize:"20px"},id:"outlined-adornment-verificationCode-register",type:"text",value:w.verificationCode,name:"verificationCode",onBlur:t,onChange:e=>{e.target.value.length<=6&&(i(e),A(e))},inputProps:{maxLength:6}}),l.verificationCode&&r.verificationCode&&(0,E.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text--register",children:r.verificationCode})]}),(0,E.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.password&&r.password),sx:{...n.typography.customInput},children:[(0,E.jsx)(m.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,E.jsx)(x.Z,{id:"outlined-adornment-password",type:o?"text":"password",value:D.password,name:"password",onBlur:t,onChange:e=>{i(e),A(e)},required:!0,endAdornment:(0,E.jsx)(f.Z,{position:"end",children:(0,E.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:z,edge:"end",size:"large",children:o?(0,E.jsx)(P.Z,{}):(0,E.jsx)(y.Z,{})})}),label:"Password",inputProps:{}}),l.password&&r.password&&(0,E.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password",children:r.password})]}),(0,E.jsxs)(u.Z,{fullWidth:!0,error:Boolean(l.confirmPassword&&r.confirmPassword),sx:{...n.typography.customInput},children:[(0,E.jsx)(m.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm password"}),(0,E.jsx)(x.Z,{id:"outlined-adornment-confirm-password",type:S?"text":"password",value:D.confirmPassword,name:"confirmPassword",onBlur:t,onChange:e=>{i(e),A(e)},required:!0,endAdornment:(0,E.jsx)(f.Z,{position:"end",children:(0,E.jsx)(p.Z,{"aria-label":"toggle confirm password visibility",onClick:q,onMouseDown:z,edge:"end",size:"large",children:S?(0,E.jsx)(P.Z,{}):(0,E.jsx)(y.Z,{})})}),label:"Confirm password",inputProps:{}}),l.confirmPassword&&r.confirmPassword&&(0,E.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-confirm-password",children:r.confirmPassword})]}),r.submit&&(0,E.jsx)(d.Z,{sx:{mt:3},children:(0,E.jsx)(h.Z,{error:!0,children:r.submit})}),(0,E.jsx)(d.Z,{sx:{mt:2},children:(0,E.jsx)(g.Z,{children:(0,E.jsx)(j.Z,{disableElevation:!0,disabled:!F,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Submit"})})})]})}}),k&&(0,E.jsx)("div",{className:"success-message",children:k})]})})),k=s(27514),B=s(98393),H=s(95193),q=s(53767),z=s(20890);var D=()=>{const e=(0,t.Z)(),r=(0,H.Z)(e.breakpoints.down("md"));return(0,E.jsx)(i.Z,{children:(0,E.jsxs)(c.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(c.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,E.jsx)(c.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,E.jsx)(o.Z,{children:(0,E.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,E.jsx)(c.ZP,{item:!0,sx:{mb:3},children:(0,E.jsx)(n.rU,{to:"#",children:(0,E.jsx)(k.Z,{})})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(c.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,E.jsx)(c.ZP,{item:!0,children:(0,E.jsxs)(q.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,E.jsx)(z.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Reset Password"}),(0,E.jsx)(z.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"A verification code was sent to your email. Please enter it below along with your new password."})]})})})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(I,{})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(l.Z,{})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(c.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,E.jsx)(z.Z,{component:n.rU,to:"/login/",variant:"subtitle1",sx:{textDecoration:"none","&:hover":{textDecoration:"underline"}},children:"Return to login"})})})]})})})})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,E.jsx)(B.Z,{})})]})})}},71359:function(){}}]);
//# sourceMappingURL=877.757a5d0d.chunk.js.map