import{s as H,i as S,f as j,h as M}from"../chunks/scheduler.3014b167.js";import{S as G,i as R,g as p,s as b,r as N,e as I,h as _,j as y,c as C,u as P,f as c,k as x,l as d,a as m,y as k,v as V,d as v,t as g,b as A,w as q,x as z,p as B}from"../chunks/index.c71d7625.js";import{N as E}from"../chunks/Notes.a44711fb.js";import{w as F}from"../chunks/stores.c9a950bc.js";import{b as J}from"../chunks/paths.336ed36f.js";function K(u){let e,s="Codemaster",l,n,a='"Crack the Code" puzzle solver & generator.';return{c(){e=p("h1"),e.textContent=s,l=b(),n=p("p"),n.textContent=a},l(t){e=_(t,"H1",{"data-svelte-h":!0}),z(e)!=="svelte-1vdswrz"&&(e.textContent=s),l=C(t),n=_(t,"P",{"data-svelte-h":!0}),z(n)!=="svelte-1hn1vyg"&&(n.textContent=a)},m(t,i){m(t,e,i),m(t,l,i),m(t,n,i)},p:M,d(t){t&&(c(e),c(l),c(n))}}}function D(u){let e,s,l,n,a;return l=new E({props:{$$slots:{default:[L]},$$scope:{ctx:u}}}),{c(){e=p("hr"),s=b(),n=p("div"),N(l.$$.fragment),this.h()},l(t){e=_(t,"HR",{}),s=C(t),n=_(t,"DIV",{style:!0});var i=y(n);P(l.$$.fragment,i),this.h()},h(){d(n,"display","contents"),d(n,"--width","350px")},m(t,i){m(t,e,i),m(t,s,i),m(t,n,i),V(l,n,null),a=!0},i(t){a||(v(l.$$.fragment,t),a=!0)},o(t){g(l.$$.fragment,t),a=!1},d(t){t&&(c(e),c(s)),t&&l&&c(n),q(l,t)}}}function L(u){let e;return{c(){e=p("p")},l(s){e=_(s,"P",{}),y(e).forEach(c)},m(s,l){m(s,e,l)},p:M,d(s){s&&c(e)}}}function O(u){let e,s,l,n,a,t,i,$,h;a=new E({props:{$$slots:{default:[K]},$$scope:{ctx:u}}});let o=u[0].isMobile&&D(u);return{c(){e=p("div"),s=p("img"),n=b(),t=p("div"),N(a.$$.fragment),i=b(),o&&o.c(),$=I(),this.h()},l(r){e=_(r,"DIV",{class:!0});var f=y(e);s=_(f,"IMG",{src:!0,alt:!0,style:!0}),n=C(f),t=_(f,"DIV",{style:!0});var w=y(t);P(a.$$.fragment,w),f.forEach(c),i=C(r),o&&o.l(r),$=I(),this.h()},h(){S(s.src,l=J+"/favicon.png")||x(s,"src",l),x(s,"alt","logo"),d(s,"width","30vw"),d(s,"height","30vw"),d(s,"margin-top","1rem"),d(t,"display","contents"),d(t,"--width","90%"),x(e,"class","flex")},m(r,f){m(r,e,f),k(e,s),k(e,n),k(e,t),V(a,t,null),m(r,i,f),o&&o.m(r,f),m(r,$,f),h=!0},p(r,[f]){const w={};f&2&&(w.$$scope={dirty:f,ctx:r}),a.$set(w),r[0].isMobile?o?f&1&&v(o,1):(o=D(r),o.c(),v(o,1),o.m($.parentNode,$)):o&&(B(),g(o,1,1,()=>{o=null}),A())},i(r){h||(v(a.$$.fragment,r),v(o),h=!0)},o(r){g(a.$$.fragment,r),g(o),h=!1},d(r){r&&(c(e),c(i),c($)),q(a),o&&o.d(r)}}}function Q(u,e,s){let l;return j(u,F,n=>s(0,l=n)),[l]}class Z extends G{constructor(e){super(),R(this,e,Q,O,H,{})}}export{Z as component};
