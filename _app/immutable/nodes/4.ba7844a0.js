import{s as h,b as c,j as p,h as m}from"../chunks/scheduler.858dac91.js";import{S as b,i as v,B as g,r as w,u as $,v as L,d as C,t as k,w as R,g as S,h as j,x as q,k as B,a as O,z as T,f as z}from"../chunks/index.258ec88e.js";import{R as G,g as M}from"../chunks/solver_gen.1bada57f.js";function N(n){let t,d="generate",s,o;return{c(){t=S("button"),t.textContent=d,this.h()},l(i){t=j(i,"BUTTON",{slot:!0,"data-svelte-h":!0}),q(t)!=="svelte-babora"&&(t.textContent=d),this.h()},h(){B(t,"slot","header")},m(i,l){O(i,t,l),s||(o=T(t,"click",n[3]),s=!0)},p:m,d(i){i&&z(t),s=!1,o()}}}function P(n){let t,d,s,o,i;function l(e){n[4](e)}function f(e){n[5](e)}function _(e){n[6](e)}let a={showControls:!0,fileSettings:{import:!1,export:!0},$$slots:{header:[N]},$$scope:{ctx:n}};return n[1]!==void 0&&(a.codeLength=n[1]),n[2]!==void 0&&(a.base=n[2]),n[0].riddle!==void 0&&(a.riddle=n[0].riddle),t=new G({props:a}),c.push(()=>g(t,"codeLength",l)),c.push(()=>g(t,"base",f)),c.push(()=>g(t,"riddle",_)),{c(){w(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,r){L(t,e,r),i=!0},p(e,[r]){const u={};r&256&&(u.$$scope={dirty:r,ctx:e}),!d&&r&2&&(d=!0,u.codeLength=e[1],p(()=>d=!1)),!s&&r&4&&(s=!0,u.base=e[2],p(()=>s=!1)),!o&&r&1&&(o=!0,u.riddle=e[0].riddle,p(()=>o=!1)),t.$set(u)},i(e){i||(C(t.$$.fragment,e),i=!0)},o(e){k(t.$$.fragment,e),i=!1},d(e){R(t,e)}}}function U(n,t,d){let s={},o=3,i=10;function l(){M({codeLength:o,base:i},16,s,()=>{d(0,s)})}function f(e){o=e,d(1,o)}function _(e){i=e,d(2,i)}function a(e){n.$$.not_equal(s.riddle,e)&&(s.riddle=e,d(0,s))}return[s,o,i,l,f,_,a]}class E extends b{constructor(t){super(),v(this,t,U,P,h,{})}}export{E as component};
