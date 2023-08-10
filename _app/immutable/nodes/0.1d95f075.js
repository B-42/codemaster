import{s as te,c as se,d as le,n as S,u as ae,g as oe,e as re,f as ne}from"../chunks/scheduler.858dac91.js";import{S as ie,i as fe,g as b,s as L,m as x,h as y,x as K,c as O,j as k,n as ee,f as _,k as d,l as Q,a as H,y as g,z as ce,d as ue,t as _e,A as he,e as U}from"../chunks/index.258ec88e.js";import{e as X}from"../chunks/each.e59479a4.js";import{w as de}from"../chunks/stores.de040ef6.js";import{p as pe}from"../chunks/stores.7776d6ad.js";import{b as M}from"../chunks/paths.8e069d90.js";const me=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ve=!1,Me=Object.freeze(Object.defineProperty({__proto__:null,ssr:ve},Symbol.toStringTag,{value:"Module"}));const{window:B}=me;function Z(s,l,a){const u=s.slice();return u[8]=l[a],u[10]=a,u}function ge(s){let l;return{c(){l=b("hr"),this.h()},l(a){l=y(a,"HR",{class:!0}),this.h()},h(){d(l,"class","svelte-15kxwe3")},m(a,u){H(a,l,u)},d(a){a&&_(l)}}}function $(s){let l,a,u=s[8]+"",n,p,m,i,o=s[10]<s[3].length-1&&ge();return{c(){l=b("div"),a=b("a"),n=x(u),m=L(),o&&o.c(),i=U(),this.h()},l(t){l=y(t,"DIV",{class:!0});var h=k(l);a=y(h,"A",{href:!0,class:!0});var w=k(a);n=ee(w,u),w.forEach(_),h.forEach(_),m=O(t),o&&o.l(t),i=U(),this.h()},h(){d(a,"href",M+"/"+s[8]),d(a,"class",p=S(s[2].route.id==M+"/"+s[8]||s[2].route.id=="/"+s[8]?"current":"")+" svelte-15kxwe3"),d(l,"class","svelte-15kxwe3")},m(t,h){H(t,l,h),g(l,a),g(a,n),H(t,m,h),o&&o.m(t,h),H(t,i,h)},p(t,h){h&4&&p!==(p=S(t[2].route.id==M+"/"+t[8]||t[2].route.id=="/"+t[8]?"current":"")+" svelte-15kxwe3")&&d(a,"class",p)},d(t){t&&(_(l),_(m),_(i)),o&&o.d(t)}}}function we(s){let l,a='<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet"/>',u,n,p,m,i,o,t,h,w,V,j,D,R,T,F="",z,E,q,W;se(s[7]);let A=X(s[3]),f=[];for(let e=0;e<A.length;e+=1)f[e]=$(Z(s,A,e));const N=s[6].default,v=le(N,s,s[5],null);return{c(){l=b("head"),l.innerHTML=a,u=L(),n=b("body"),p=b("header"),m=b("div"),i=b("nav"),o=b("div"),t=b("a"),h=x("Codemaster"),V=L();for(let e=0;e<f.length;e+=1)f[e].c();j=L(),D=b("main"),v&&v.c(),R=L(),T=b("footer"),T.innerHTML=F,this.h()},l(e){l=y(e,"HEAD",{"data-svelte-h":!0}),K(l)!=="svelte-16h44be"&&(l.innerHTML=a),u=O(e),n=y(e,"BODY",{style:!0,class:!0});var c=k(n);p=y(c,"HEADER",{});var r=k(p);m=y(r,"DIV",{class:!0});var C=k(m);i=y(C,"NAV",{class:!0});var I=k(i);o=y(I,"DIV",{style:!0,class:!0});var Y=k(o);t=y(Y,"A",{href:!0,class:!0});var G=k(t);h=ee(G,"Codemaster"),G.forEach(_),Y.forEach(_),V=O(I);for(let P=0;P<f.length;P+=1)f[P].l(I);I.forEach(_),C.forEach(_),r.forEach(_),j=O(c),D=y(c,"MAIN",{});var J=k(D);v&&v.l(J),J.forEach(_),R=O(c),T=y(c,"FOOTER",{"data-svelte-h":!0}),K(T)!=="svelte-1qdesw"&&(T.innerHTML=F),c.forEach(_),this.h()},h(){d(t,"href",M),d(t,"class",w=S(s[2].route.id==M||s[2].route.id=="/"?"current":"")+" svelte-15kxwe3"),Q(o,"flex-grow","6"),Q(o,"text-align","left"),d(o,"class","svelte-15kxwe3"),d(i,"class","flex center svelte-15kxwe3"),d(m,"class","flex center space-between"),d(n,"style",z=`height: calc(${s[1]}px - 2rem)`),d(n,"class","svelte-15kxwe3")},m(e,c){H(e,l,c),H(e,u,c),H(e,n,c),g(n,p),g(p,m),g(m,i),g(i,o),g(o,t),g(t,h),g(i,V);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m(i,null);g(n,j),g(n,D),v&&v.m(D,null),g(n,R),g(n,T),E=!0,q||(W=ce(B,"resize",s[7]),q=!0)},p(e,[c]){if((!E||c&4&&w!==(w=S(e[2].route.id==M||e[2].route.id=="/"?"current":"")+" svelte-15kxwe3"))&&d(t,"class",w),c&12){A=X(e[3]);let r;for(r=0;r<A.length;r+=1){const C=Z(e,A,r);f[r]?f[r].p(C,c):(f[r]=$(C),f[r].c(),f[r].m(i,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=A.length}v&&v.p&&(!E||c&32)&&ae(v,N,e,e[5],E?re(N,e[5],c,null):oe(e[5]),null),(!E||c&2&&z!==(z=`height: calc(${e[1]}px - 2rem)`))&&d(n,"style",z)},i(e){E||(ue(v,e),E=!0)},o(e){_e(v,e),E=!1},d(e){e&&(_(l),_(u),_(n)),he(f,e),v&&v.d(e),q=!1,W()}}}function be(s,l,a){let u;ne(s,pe,w=>a(2,u=w));let{$$slots:n={},$$scope:p}=l;const m=["solve","generate","about"];let i,o,t;function h(){a(0,i=B.innerWidth),a(1,o=B.innerHeight)}return s.$$set=w=>{"$$scope"in w&&a(5,p=w.$$scope)},s.$$.update=()=>{s.$$.dirty&19&&(i<=750?a(4,t=!0):a(4,t=!1),de.set({width:i,height:o,isMobile:t}))},[i,o,u,m,t,p,n,h]}class De extends ie{constructor(l){super(),fe(this,l,be,we,te,{})}}export{De as component,Me as universal};
