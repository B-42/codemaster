import{s as F,b as V,j as N,r as G,h as J}from"../chunks/scheduler.858dac91.js";import{S as K,i as M,B as T,r as Q,u as W,v as X,d as Y,t as Z,w as x,g,s as z,m as q,h as b,j as w,x as H,c as B,n as O,f as v,k as h,l as ee,a as C,y as m,z as j,e as A,A as te,o as le}from"../chunks/index.258ec88e.js";import{e as R}from"../chunks/each.e59479a4.js";import{R as ne,s as se}from"../chunks/solver_gen.1bada57f.js";function S(i,e,n){const l=i.slice();return l[9]=e[n],l}function ae(i){let e,n="(none)";return{c(){e=g("p"),e.textContent=n},l(l){e=b(l,"P",{"data-svelte-h":!0}),H(e)!=="svelte-1t699iz"&&(e.textContent=n)},m(l,t){C(l,e,t)},p:J,d(l){l&&v(e)}}}function oe(i){let e,n=R(i[2]),l=[];for(let t=0;t<n.length;t+=1)l[t]=U(S(i,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=A()},l(t){for(let s=0;s<l.length;s+=1)l[s].l(t);e=A()},m(t,s){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(t,s);C(t,e,s)},p(t,s){if(s&4){n=R(t[2]);let a;for(a=0;a<n.length;a+=1){const r=S(t,n,a);l[a]?l[a].p(r,s):(l[a]=U(r),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},d(t){t&&v(e),te(l,t)}}}function U(i){let e,n=i[9]+"",l;return{c(){e=g("p"),l=q(n)},l(t){e=b(t,"P",{});var s=w(e);l=O(s,n),s.forEach(v)},m(t,s){C(t,e,s),m(e,l)},p(t,s){s&4&&n!==(n=t[9]+"")&&le(l,n)},d(t){t&&v(e)}}}function ie(i){let e,n,l="solve",t,s,a,r,o,u,f,y,_,E,D;function I(c,d){var k;return(k=c[2])!=null&&k.length?oe:ae}let $=I(i),p=$(i);return{c(){e=g("div"),n=g("button"),n.textContent=l,t=z(),s=g("div"),a=g("input"),r=z(),o=g("label"),u=q("allow duplicate digits"),y=z(),_=g("div"),p.c(),this.h()},l(c){e=b(c,"DIV",{slot:!0});var d=w(e);n=b(d,"BUTTON",{id:!0,"data-svelte-h":!0}),H(n)!=="svelte-332vgd"&&(n.textContent=l),t=B(d),s=b(d,"DIV",{class:!0,style:!0});var k=w(s);a=b(k,"INPUT",{type:!0,name:!0,class:!0}),r=B(k),o=b(k,"LABEL",{for:!0,style:!0});var L=w(o);u=O(L,"allow duplicate digits"),L.forEach(v),k.forEach(v),y=B(d),_=b(d,"DIV",{class:!0});var P=w(_);p.l(P),P.forEach(v),d.forEach(v),this.h()},h(){h(n,"id","solveButton"),h(a,"type","checkbox"),h(a,"name","duplicates"),h(a,"class","svelte-1gwnot3"),h(o,"for","duplicates"),h(o,"style",f=`opacity: ${i[3]?100:50}%; font-size: .85rem; user-select: none;`),h(s,"class","flex center"),ee(s,"margin-bottom","-1rem"),h(_,"class","solutions svelte-1gwnot3"),h(e,"slot","footer")},m(c,d){C(c,e,d),m(e,n),m(e,t),m(e,s),m(s,a),a.checked=i[3],m(s,r),m(s,o),m(o,u),m(e,y),m(e,_),p.m(_,null),E||(D=[j(n,"click",i[5]),j(a,"change",i[6])],E=!0)},p(c,d){d&8&&(a.checked=c[3]),d&8&&f!==(f=`opacity: ${c[3]?100:50}%; font-size: .85rem; user-select: none;`)&&h(o,"style",f),$===($=I(c))&&p?p.p(c,d):(p.d(1),p=$(c),p&&(p.c(),p.m(_,null)))},d(c){c&&v(e),p.d(),E=!1,G(D)}}}function re(i){let e,n,l,t;function s(o){i[7](o)}function a(o){i[8](o)}let r={contenteditable:!0,codeLength:i[4],$$slots:{footer:[ie]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.riddle=i[0]),i[1]!==void 0&&(r.base=i[1]),e=new ne({props:r}),V.push(()=>T(e,"riddle",s)),V.push(()=>T(e,"base",a)),{c(){Q(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,u){X(e,o,u),t=!0},p(o,[u]){const f={};u&4108&&(f.$$scope={dirty:u,ctx:o}),!n&&u&1&&(n=!0,f.riddle=o[0],N(()=>n=!1)),!l&&u&2&&(l=!0,f.base=o[1],N(()=>l=!1)),e.$set(f)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){Z(e.$$.fragment,o),t=!1},d(o){x(e,o)}}}function ce(i,e,n){let l=3,t,s,a,r=!0;function o(){t.length?n(2,a=se(t,s,r)):n(2,a=void 0)}function u(){r=this.checked,n(3,r)}function f(_){t=_,n(0,t)}function y(_){s=_,n(1,s)}return[t,s,a,r,l,o,u,f,y]}class pe extends K{constructor(e){super(),M(this,e,ce,re,F,{})}}export{pe as component};
