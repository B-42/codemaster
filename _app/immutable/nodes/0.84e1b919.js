import{s as re,c as oe,d as ne,n as S,u as ie,g as ce,e as fe,f as ue}from"../chunks/scheduler.462fc8a3.js";import{S as he,i as _e,g as p,s as A,m as se,h as m,x as $,c as D,j as w,n as ae,f as u,k as v,l as O,a as k,y as _,z as de,d as ve,t as pe,A as me,e as x}from"../chunks/index.3bf34821.js";import{e as ee,w as ge}from"../chunks/stores.ddd0c8a1.js";import{p as be}from"../chunks/stores.d837ba7f.js";import{b as M}from"../chunks/paths.f85fcba6.js";const ye=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ze=!1,Me=Object.freeze(Object.defineProperty({__proto__:null,ssr:ze},Symbol.toStringTag,{value:"Module"}));const{window:G}=ye;function te(l,s,a){const h=l.slice();return h[8]=s[a],h[10]=a,h}function we(l){let s;return{c(){s=p("hr"),this.h()},l(a){s=m(a,"HR",{class:!0}),this.h()},h(){v(s,"class","svelte-1vqlczz")},m(a,h){k(a,s,h)},d(a){a&&u(s)}}}function le(l){let s,a,h=l[8]+"",o,g,b,c,r=l[10]<l[3].length-1&&we();return{c(){s=p("div"),a=p("a"),o=se(h),b=A(),r&&r.c(),c=x(),this.h()},l(t){s=m(t,"DIV",{class:!0});var d=w(s);a=m(d,"A",{href:!0,class:!0});var z=w(a);o=ae(z,h),z.forEach(u),d.forEach(u),b=D(t),r&&r.l(t),c=x(),this.h()},h(){v(a,"href",M+"/"+l[8]),v(a,"class",g=S(l[2].route.id==M+"/"+l[8]||l[2].route.id=="/"+l[8]?"current":"")+" svelte-1vqlczz"),v(s,"class","svelte-1vqlczz")},m(t,d){k(t,s,d),_(s,a),_(a,o),k(t,b,d),r&&r.m(t,d),k(t,c,d)},p(t,d){d&4&&g!==(g=S(t[2].route.id==M+"/"+t[8]||t[2].route.id=="/"+t[8]?"current":"")+" svelte-1vqlczz")&&v(a,"class",g)},d(t){t&&(u(s),u(b),u(c)),r&&r.d(t)}}}function Ee(l){let s,a='<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet"/>',h,o,g,b,c,r,t,d,z,j,E,C,N,P,I,B,H,J="",V,q,F,K;oe(l[7]);let T=ee(l[3]),f=[];for(let e=0;e<T.length;e+=1)f[e]=le(te(l,T,e));const W=l[6].default,y=ne(W,l,l[5],null);return{c(){s=p("head"),s.innerHTML=a,h=A(),o=p("body"),g=p("header"),b=p("div"),c=p("nav"),r=p("div"),t=p("a"),d=se("Home"),j=A(),E=p("div");for(let e=0;e<f.length;e+=1)f[e].c();C=A(),N=p("hr"),P=A(),I=p("main"),y&&y.c(),B=A(),H=p("footer"),H.innerHTML=J,this.h()},l(e){s=m(e,"HEAD",{"data-svelte-h":!0}),$(s)!=="svelte-16h44be"&&(s.innerHTML=a),h=D(e),o=m(e,"BODY",{style:!0,class:!0});var i=w(o);g=m(i,"HEADER",{});var n=w(g);b=m(n,"DIV",{class:!0});var L=w(b);c=m(L,"NAV",{class:!0});var R=w(c);r=m(R,"DIV",{style:!0,class:!0});var Q=w(r);t=m(Q,"A",{href:!0,class:!0});var U=w(t);d=ae(U,"Home"),U.forEach(u),Q.forEach(u),j=D(R),E=m(R,"DIV",{class:!0,style:!0});var X=w(E);for(let Y=0;Y<f.length;Y+=1)f[Y].l(X);X.forEach(u),R.forEach(u),L.forEach(u),n.forEach(u),C=D(i),N=m(i,"HR",{}),P=D(i),I=m(i,"MAIN",{});var Z=w(I);y&&y.l(Z),Z.forEach(u),B=D(i),H=m(i,"FOOTER",{"data-svelte-h":!0}),$(H)!=="svelte-1qdesw"&&(H.innerHTML=J),i.forEach(u),this.h()},h(){v(t,"href",M),v(t,"class",z=S(l[2].route.id==M||l[2].route.id=="/"?"current":"")+" svelte-1vqlczz"),O(r,"flex-grow","6"),O(r,"text-align","left"),O(r,"margin-left","1rem"),v(r,"class","svelte-1vqlczz"),v(E,"class","flex space-between svelte-1vqlczz"),O(E,"text-align","right"),O(E,"margin-right","1rem"),v(c,"class","flex center svelte-1vqlczz"),v(b,"class","flex center space-between"),v(o,"style",V=`height: calc(${l[1]}px - 2rem)`),v(o,"class","svelte-1vqlczz")},m(e,i){k(e,s,i),k(e,h,i),k(e,o,i),_(o,g),_(g,b),_(b,c),_(c,r),_(r,t),_(t,d),_(c,j),_(c,E);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(E,null);_(o,C),_(o,N),_(o,P),_(o,I),y&&y.m(I,null),_(o,B),_(o,H),q=!0,F||(K=de(G,"resize",l[7]),F=!0)},p(e,[i]){if((!q||i&4&&z!==(z=S(e[2].route.id==M||e[2].route.id=="/"?"current":"")+" svelte-1vqlczz"))&&v(t,"class",z),i&12){T=ee(e[3]);let n;for(n=0;n<T.length;n+=1){const L=te(e,T,n);f[n]?f[n].p(L,i):(f[n]=le(L),f[n].c(),f[n].m(E,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=T.length}y&&y.p&&(!q||i&32)&&ie(y,W,e,e[5],q?fe(W,e[5],i,null):ce(e[5]),null),(!q||i&2&&V!==(V=`height: calc(${e[1]}px - 2rem)`))&&v(o,"style",V)},i(e){q||(ve(y,e),q=!0)},o(e){pe(y,e),q=!1},d(e){e&&(u(s),u(h),u(o)),me(f,e),y&&y.d(e),F=!1,K()}}}function qe(l,s,a){let h;ue(l,be,z=>a(2,h=z));let{$$slots:o={},$$scope:g}=s;const b=["about"];let c,r,t;function d(){a(0,c=G.innerWidth),a(1,r=G.innerHeight)}return l.$$set=z=>{"$$scope"in z&&a(5,g=z.$$scope)},l.$$.update=()=>{l.$$.dirty&19&&(c<=750?a(4,t=!0):a(4,t=!1),ge.set({width:c,height:r,isMobile:t}))},[c,r,h,b,t,g,o,d]}class Ie extends he{constructor(s){super(),_e(this,s,qe,Ee,re,{})}}export{Ie as component,Me as universal};
