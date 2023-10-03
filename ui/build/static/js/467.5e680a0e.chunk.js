"use strict";(self.webpackChunkfireplatform=self.webpackChunkfireplatform||[]).push([[467],{20627:function(e,t){t.Z=function(e){return"string"===typeof e}},50533:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(87462),i=n(63366),o=n(72791),u=n(28182),l=n(94419),a=n(47630),s=n(93736),c=n(42071),p=n(89683),d=n(23031);var f=n(51721),h=n(95545);function m(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var r=m(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var u in e)u in t?o.length&&(i[u]=o,o=[]):o.push(u);var l={};for(var a in t){if(i[a])for(r=0;r<i[a].length;r++){var s=i[a][r];l[i[a][r]]=n(s)}l[a]=n(a)}for(r=0;r<o.length;r++)l[o[r]]=n(o[r]);return l}(t,r);return Object.keys(i).forEach((function(u){var l=i[u];if((0,o.isValidElement)(l)){var a=u in t,s=u in r,c=t[u],p=(0,o.isValidElement)(c)&&!c.props.in;!s||a&&!p?s||!a||p?s&&a&&(0,o.isValidElement)(c)&&(i[u]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:b(l,"exit",e),enter:b(l,"enter",e)})):i[u]=(0,o.cloneElement)(l,{in:!1}):i[u]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:b(l,"exit",e),enter:b(l,"enter",e)})}})),i}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,f.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,u=t.handleExited;return{children:t.firstRender?(n=e,r=u,m(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,i,u),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,i.Z)(e,["component","childFactory"]),u=this.state.contextValue,l=g(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(h.Z.Provider,{value:u},l):o.createElement(h.Z.Provider,{value:u},o.createElement(t,r,l))},t}(o.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};var R=y,E=n(52554),x=n(80184);var Z=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:l,rippleSize:a,in:s,onExited:c,timeout:p}=e,[d,f]=o.useState(!1),h=(0,u.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-a/2+l,left:-a/2+i},b=(0,u.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return s||d||f(!0),o.useEffect((()=>{if(!s&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,s,p]),(0,x.jsx)("span",{className:h,style:m,children:(0,x.jsx)("span",{className:b})})},M=n(75878);var T=(0,M.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const k=["center","classes","className"];let w,C,P,V,L=e=>e;const S=(0,E.F4)(w||(w=L`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),D=(0,E.F4)(C||(C=L`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),F=(0,E.F4)(P||(P=L`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),$=(0,a.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,a.ZP)(Z,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=L`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),T.rippleVisible,S,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),T.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),T.child,T.childLeaving,D,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),T.childPulsate,F,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),B=o.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:a={},className:c}=n,p=(0,i.Z)(n,k),[d,f]=o.useState([]),h=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=o.useRef(null),g=o.useRef(null),y=o.useRef(null);o.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const E=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;f((e=>[...e,(0,x.jsx)(j,{classes:{ripple:(0,u.Z)(a.ripple,T.ripple),rippleVisible:(0,u.Z)(a.rippleVisible,T.rippleVisible),ripplePulsate:(0,u.Z)(a.ripplePulsate,T.ripplePulsate),child:(0,u.Z)(a.child,T.child),childLeaving:(0,u.Z)(a.childLeaving,T.childLeaving),childPulsate:(0,u.Z)(a.childPulsate,T.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},h.current)])),h.current+=1,m.current=o}),[a]),Z=o.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:i=l||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const u=o?null:y.current,a=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};let s,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;s=Math.round(t-a.left),c=Math.round(n-a.top)}if(i)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((u?u.clientWidth:0)-s),s)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{E({pulsate:r,rippleX:s,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):E({pulsate:r,rippleX:s,rippleY:c,rippleSize:p,cb:n})}),[l,E]),M=o.useCallback((()=>{Z({},{pulsate:!0})}),[Z]),w=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{w(e,t)})));g.current=null,f((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:M,start:Z,stop:w})),[M,Z,w]),(0,x.jsx)($,(0,r.Z)({className:(0,u.Z)(T.root,a.root,c),ref:y},p,{children:(0,x.jsx)(R,{component:null,exit:!0,children:d})}))}));var N=B,I=n(21217);function O(e){return(0,I.Z)("MuiButtonBase",e)}var z=(0,M.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const K=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],X=(0,a.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),U=o.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:f=!1,children:h,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:R=!1,LinkComponent:E="a",onBlur:Z,onClick:M,onContextMenu:T,onDragLeave:k,onFocus:w,onFocusVisible:C,onKeyDown:P,onKeyUp:V,onMouseDown:L,onMouseLeave:S,onMouseUp:D,onTouchEnd:F,onTouchMove:$,onTouchStart:j,tabIndex:B=0,TouchRippleProps:I,touchRippleRef:z,type:U}=n,A=(0,i.Z)(n,K),Y=o.useRef(null),H=o.useRef(null),W=(0,c.Z)(H,z),{isFocusVisibleRef:q,onFocus:G,onBlur:J,ref:Q}=(0,d.Z)(),[_,ee]=o.useState(!1);v&&_&&ee(!1),o.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}o.useEffect((()=>{_&&R&&!g&&te&&H.current.pulsate()}),[g,R,_,te]);const oe=ie("start",L),ue=ie("stop",T),le=ie("stop",k),ae=ie("stop",D),se=ie("stop",(e=>{_&&e.preventDefault(),S&&S(e)})),ce=ie("start",j),pe=ie("stop",F),de=ie("stop",$),fe=ie("stop",(e=>{J(e),!1===q.current&&ee(!1),Z&&Z(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),G(e),!0===q.current&&(ee(!0),C&&C(e)),w&&w(e)})),me=()=>{const e=Y.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&_&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{R&&" "===e.key&&H.current&&_&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),V&&V(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=b;"button"===ye&&(A.href||A.to)&&(ye=E);const Re={};"button"===ye?(Re.type=void 0===U?"button":U,Re.disabled=v):(A.href||A.to||(Re.role="button"),v&&(Re["aria-disabled"]=v));const Ee=(0,c.Z)(t,Q,Y);const xe=(0,r.Z)({},n,{centerRipple:f,component:b,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:R,tabIndex:B,focusVisible:_}),Ze=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},u=(0,l.Z)(o,O,i);return n&&r&&(u.root+=` ${r}`),u})(xe);return(0,x.jsxs)(X,(0,r.Z)({as:ye,className:(0,u.Z)(Ze.root,m),ownerState:xe,onBlur:fe,onClick:M,onContextMenu:ue,onFocus:he,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:se,onMouseUp:ae,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Ee,tabIndex:v?-1:B,type:U},Re,A,{children:[h,re?(0,x.jsx)(N,(0,r.Z)({ref:W,center:f},I)):null]}))}));var A=U},89683:function(e,t,n){var r=n(58956);t.Z=r.Z},23031:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(72791);let i,o=!0,u=!1;const l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function s(){o=!1}function c(){"hidden"===this.visibilityState&&u&&(o=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!l[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}var d=function(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(u=!0,window.clearTimeout(i),i=window.setTimeout((()=>{u=!1}),100),t.current=!1,!0)},ref:e}}},75721:function(e,t,n){var r=n(72791);const i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;t.Z=i},58956:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(72791),i=n(75721);function o(e){const t=r.useRef(e);return(0,i.Z)((()=>{t.current=e})),r.useCallback((function(){return(0,t.current)(...arguments)}),[])}}}]);
//# sourceMappingURL=467.5e680a0e.chunk.js.map