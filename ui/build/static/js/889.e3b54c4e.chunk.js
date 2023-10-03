"use strict";(self.webpackChunkfireplatform=self.webpackChunkfireplatform||[]).push([[889],{61889:function(e,n,t){t.d(n,{ZP:function(){return M}});var r=t(63366),i=t(87462),o=t(72791),a=t(28182),s=t(51184),c=t(78519),p=t(94419),u=t(47630),l=t(93736),m=t(13967);var d=o.createContext(),f=t(75878),g=t(21217);function w(e){return(0,g.Z)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...h.map((e=>`grid-xs-${e}`)),...h.map((e=>`grid-sm-${e}`)),...h.map((e=>`grid-md-${e}`)),...h.map((e=>`grid-lg-${e}`)),...h.map((e=>`grid-xl-${e}`))]),b=t(80184);const $=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function v(e){let{breakpoints:n,values:t}=e,r="";Object.keys(t).forEach((e=>{""===r&&0!==t[e]&&(r=e)}));const i=Object.keys(n).sort(((e,t)=>n[e]-n[t]));return i.slice(0,i.indexOf(r))}const S=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:p}=t;let u=[];r&&(u=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]];const r=[];return n.forEach((n=>{const i=e[n];Number(i)>0&&r.push(t[`spacing-${n}-${String(i)}`])})),r}(a,p,n));const l=[];return p.forEach((e=>{const r=t[e];r&&l.push(n[`grid-${e}-${String(r)}`])})),[n.root,r&&n.container,o&&n.item,c&&n.zeroMinWidth,...u,"row"!==i&&n[`direction-xs-${String(i)}`],"wrap"!==s&&n[`wrap-xs-${String(s)}`],...l]}})((e=>{let{ownerState:n}=e;return(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(e){let{theme:n,ownerState:t}=e;const r=(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values});return(0,s.k9)({theme:n},r,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n}))}),(function(e){let{theme:n,ownerState:t}=e;const{container:r,rowSpacing:i}=t;let o={};if(r&&0!==i){const e=(0,s.P$)({values:i,breakpoints:n.breakpoints.values});let t;"object"===typeof e&&(t=v({breakpoints:n.breakpoints.values,values:e})),o=(0,s.k9)({theme:n},e,((e,r)=>{var i;const o=n.spacing(e);return"0px"!==o?{marginTop:`-${k(o)}`,[`& > .${x.item}`]:{paddingTop:k(o)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}}))}return o}),(function(e){let{theme:n,ownerState:t}=e;const{container:r,columnSpacing:i}=t;let o={};if(r&&0!==i){const e=(0,s.P$)({values:i,breakpoints:n.breakpoints.values});let t;"object"===typeof e&&(t=v({breakpoints:n.breakpoints.values,values:e})),o=(0,s.k9)({theme:n},e,((e,r)=>{var i;const o=n.spacing(e);return"0px"!==o?{width:`calc(100% + ${k(o)})`,marginLeft:`-${k(o)}`,[`& > .${x.item}`]:{paddingLeft:k(o)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}}))}return o}),(function(e){let n,{theme:t,ownerState:r}=e;return t.breakpoints.keys.reduce(((e,o)=>{let a={};if(r[o]&&(n=r[o]),!n)return e;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:r.columns,breakpoints:t.breakpoints.values}),p="object"===typeof c?c[o]:c;if(void 0===p||null===p)return e;const u=Math.round(n/p*1e8)/1e6+"%";let l={};if(r.container&&r.item&&0!==r.columnSpacing){const e=t.spacing(r.columnSpacing);if("0px"!==e){const n=`calc(${u} + ${k(e)})`;l={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===t.breakpoints.values[o]?Object.assign(e,a):e[t.breakpoints.up(o)]=a,e}),{})}));const W=e=>{const{classes:n,container:t,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let u=[];t&&(u=function(e,n){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const t=[];return n.forEach((n=>{const r=e[n];if(Number(r)>0){const e=`spacing-${n}-${String(r)}`;t.push(e)}})),t}(o,c));const l=[];c.forEach((n=>{const t=e[n];t&&l.push(`grid-${n}-${String(t)}`)}));const m={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...l]};return(0,p.Z)(m,w,n)},Z=o.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,m.Z)(),p=(0,c.Z)(t),{className:u,columns:f,columnSpacing:g,component:w="div",container:h=!1,direction:x="row",item:k=!1,rowSpacing:v,spacing:Z=0,wrap:M="wrap",zeroMinWidth:y=!1}=p,N=(0,r.Z)(p,$),z=v||Z,j=g||Z,G=o.useContext(d),P=h?f||12:G,E={},O=(0,i.Z)({},N);s.keys.forEach((e=>{null!=N[e]&&(E[e]=N[e],delete O[e])}));const B=(0,i.Z)({},p,{columns:P,container:h,direction:x,item:k,rowSpacing:z,columnSpacing:j,wrap:M,zeroMinWidth:y,spacing:Z},E,{breakpoints:s.keys}),C=W(B);return(0,b.jsx)(d.Provider,{value:P,children:(0,b.jsx)(S,(0,i.Z)({ownerState:B,className:(0,a.Z)(C.root,u),as:w,ref:n},O))})}));var M=Z}}]);
//# sourceMappingURL=889.e3b54c4e.chunk.js.map