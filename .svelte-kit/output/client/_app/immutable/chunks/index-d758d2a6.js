function g(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(U)}function T(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Gt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Jt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,l){if(r){const o=V(e,n,i,l);t.p(o,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Yt(t){return t&&T(t.destroy)?t.destroy:g}const X=typeof window<"u";let _t=X?()=>window.performance.now():()=>Date.now(),F=X?t=>requestAnimationFrame(t):g;const w=new Set;function Y(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(Y)}function dt(t){let e;return w.size===0&&F(Y),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:pt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const l=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(o[c],_)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return gt(t.head||t,e),e.sheet}function xt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){P&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function te(){return W(" ")}function ee(){return W("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function G(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Et=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Et.indexOf(i)===-1?t[i]=e[i]:G(t,i,e[i])}function ie(t,e){for(const n in e)G(t,n,e[n])}function Nt(t,e){Object.keys(e).forEach(n=>{kt(t,n,e[n])})}function kt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:G(t,e,n)}function re(t){return/-/.test(t)?Nt:vt}function At(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){jt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function se(t,e,n){return it(t,e,n,et)}function oe(t,e,n){return it(t,e,n,wt)}function Ct(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function ce(t){return Ct(t," ")}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function fe(t,e){return new t(e)}const O=new Map;let D=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:$t(e),rules:{}};return O.set(t,n),n}function J(t,e,n,i,r,l,o,s=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const $=e+(n-e)*l(y);u+=y*100+`%{${o($,1-$)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Ot(_)}_${s}`,h=Z(t),{stylesheet:f,rules:d}=O.get(h)||Dt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function Mt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Tt())}function Tt(){F(()=>{D||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),O.clear())})}let A;function k(t){A=t}function R(){if(!A)throw new Error("Function called outside component initialization");return A}function _e(t){R().$$.on_mount.push(t)}function de(t){R().$$.after_update.push(t)}function he(t,e){return R().$$.context.set(t,e),e}function me(t){return R().$$.context.get(t)}function pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],K=[];let E=[];const Q=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(ot))}function ye(){return st(),rt}function M(t){E.push(t)}const B=new Set;let b=0;function ot(){if(b!==0)return;const t=A;do{try{for(;b<x.length;){const e=x[b];b++,k(e),Pt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(k(null),x.length=0,b=0;K.length;)K.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];B.has(n)||(B.add(n),n())}E.length=0}while(x.length);for(;Q.length;)Q.pop()();L=!1,B.clear(),k(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Rt(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function H(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function ge(){p={r:0,c:[],p}}function $e(){p.r||v(p.c),p=p.p}function zt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function be(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function xe(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),o=i?0:1,s=null,c=null,u=null;function _(){u&&Mt(t,u)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=lt,tick:$=g,css:q}=l||Bt,z={start:_t()+d,b:f};f||(z.group=p,p.r+=1),s||c?c=z:(q&&(_(),u=J(t,o,f,m,d,y,q)),f&&$(0,1),s=a(z,m),M(()=>H(t,f,"start")),dt(j=>{if(c&&j>c.start&&(s=a(c,m),c=null,H(t,s.b,"start"),q&&(_(),u=J(t,o,s.b,s.duration,0,y,l.css))),s){if(j>=s.end)$(o=s.b,1-o),H(t,s.b,"end"),c||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(j>=s.start){const ct=j-s.start;o=s.a+s.d*y(ct/s.duration),$(o,1-o)}}return!!(s||c)}))}return{run(f){T(l)?qt().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),s=c=null}}}function we(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=e[l];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[l]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function ve(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||M(()=>{const o=t.$$.on_mount.map(U).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),l.forEach(M)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(x.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,r,l,o,s=[-1]){const c=A;k(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Ft(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const a=At(e.target);u.fragment&&u.fragment.l(a),a.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&zt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),mt(),ot()}k(c)}class Ae{$destroy(){Lt(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as $,fe as A,ve as B,Ne as C,Ht as D,Lt as E,ye as F,Xt as G,he as H,ut as I,Vt as J,pe as K,Jt as L,re as M,Yt as N,ne as O,Qt as P,Ut as Q,Kt as R,Ae as S,we as T,T as U,v as V,M as W,xe as X,ae as Y,vt as Z,wt as _,te as a,Ee as a0,me as a1,ie as a2,At as b,se as c,Ct as d,et as e,tt as f,ce as g,G as h,ke as i,Gt as j,Zt as k,xt as l,le as m,g as n,It as o,ee as p,ge as q,be as r,Wt as s,W as t,$e as u,zt as v,de as w,_e as x,ue as y,K as z};
