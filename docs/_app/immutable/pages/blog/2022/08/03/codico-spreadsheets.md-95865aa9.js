import{S as ue,i as de,s as ce,C as Y,w as me,x as fe,y as ye,z as ge,A as re,f as we,t as be,B as ve,M as pe,l as h,r as i,a as I,m as u,n as c,u as n,h as t,c as S,p as w,a6 as _e,b as r,a2 as l,E as Ie}from"../../../../../chunks/index-042c205f.js";import{P as Se}from"../../../../../chunks/_post-53d9098c.js";import"../../../../../chunks/link-4f7a5115.js";function ke(k){let a,f,p,b,o,d,m,O,j,R,V,C,A,H,B,y,J,v,L,U,$,g,z,_,D,K,F,x,Q,W,G,E,Z,M,P,X;return{c(){a=h("p"),f=i("For the past few days, I\u2019ve been working on a new project called "),p=h("a"),b=i("Codico"),o=i(". My goal is to create a simple way to write and publish dispatches, and keep them all up to date with any new content changes. But today, that led me to a strange place: making a spreadsheet template."),d=I(),m=h("p"),O=i("Having users store information for their dispatches in their own Google Sheets might seem like a cop-out replacement for implementing an actual accounts system and database \u2014 and it is, to be honest. But it\u2019s just so "),j=h("em"),R=i("easy"),V=i(". Google Sheets covers a lot of fancy features. Version history? Controlling edit access? Live collaborative editing? All covered by Google Sheets."),C=I(),A=h("p"),H=i("It also neatly avoids any concerns about having to pay for hosting or cloud services. It\u2019s not that I\u2019m particularly averse to spending money on this project, but I have a long-running pledge to myself not to spend any money on games. It was made with mobile game in-app purchases in mind, but NationStates counts too. We\u2019ll see how long that part lasts though. I also considered building an editing experience within the web app, but it was never going to be as feature-rich as Google Sheets. In particular, I could write content to the file system for individual users, but no hosted database would mean users would have to manually export and import their content to share with others working on the same dispatches."),B=I(),y=h("p"),J=i("Unfortunately, the Google Sheets API seemed really clunky to use. Fortunately, I\u2019d stumbled upon this cool project a while back called "),v=h("a"),L=i("opensheet"),U=i(" that offers an easy-to-use JSON API for Google Sheets. It does require spreadsheets to be viewable by anyone with the link, but considering the dispatches are all public anyway, leaving the raw templates behind those dispatches publicly viewable shouldn\u2019t be a huge problem."),$=I(),g=h("p"),z=i("From there, it was just a matter of pulling data from opensheet and displaying it ("),_=h("a"),D=i("SWR"),K=i(" is awesome, by the way). I say it was \u201Cjust a matter of\u201D pulling the data, but of course I had to pull something stupid in the middle. Apparently, I managed to edit the TypeScript types declaration exported by the SWR library when using VSCode\u2019s \u2018rename symbol\u2019 feature, and then spent a solid half hour trying to figure out why I was getting a TypeScript error. Oh well."),F=I(),x=h("p"),Q=i("Anyway, eventually I got it working."),W=I(),G=h("p"),E=h("img"),M=I(),P=h("p"),X=i("It\u2019s still a barebones site, but at least the Google Sheets import is working. And most importantly, it already comes with dark mode. Ideally, my goal for tomorrow is finish the code that actually turns dispatch templates into ready-to-post BBcode, but we\u2019ll see how far I actually get."),this.h()},l(e){a=u(e,"P",{});var s=c(a);f=n(s,"For the past few days, I\u2019ve been working on a new project called "),p=u(s,"A",{href:!0,rel:!0});var ee=c(p);b=n(ee,"Codico"),ee.forEach(t),o=n(s,". My goal is to create a simple way to write and publish dispatches, and keep them all up to date with any new content changes. But today, that led me to a strange place: making a spreadsheet template."),s.forEach(t),d=S(e),m=u(e,"P",{});var T=c(m);O=n(T,"Having users store information for their dispatches in their own Google Sheets might seem like a cop-out replacement for implementing an actual accounts system and database \u2014 and it is, to be honest. But it\u2019s just so "),j=u(T,"EM",{});var te=c(j);R=n(te,"easy"),te.forEach(t),V=n(T,". Google Sheets covers a lot of fancy features. Version history? Controlling edit access? Live collaborative editing? All covered by Google Sheets."),T.forEach(t),C=S(e),A=u(e,"P",{});var ae=c(A);H=n(ae,"It also neatly avoids any concerns about having to pay for hosting or cloud services. It\u2019s not that I\u2019m particularly averse to spending money on this project, but I have a long-running pledge to myself not to spend any money on games. It was made with mobile game in-app purchases in mind, but NationStates counts too. We\u2019ll see how long that part lasts though. I also considered building an editing experience within the web app, but it was never going to be as feature-rich as Google Sheets. In particular, I could write content to the file system for individual users, but no hosted database would mean users would have to manually export and import their content to share with others working on the same dispatches."),ae.forEach(t),B=S(e),y=u(e,"P",{});var q=c(y);J=n(q,"Unfortunately, the Google Sheets API seemed really clunky to use. Fortunately, I\u2019d stumbled upon this cool project a while back called "),v=u(q,"A",{href:!0,rel:!0});var oe=c(v);L=n(oe,"opensheet"),oe.forEach(t),U=n(q," that offers an easy-to-use JSON API for Google Sheets. It does require spreadsheets to be viewable by anyone with the link, but considering the dispatches are all public anyway, leaving the raw templates behind those dispatches publicly viewable shouldn\u2019t be a huge problem."),q.forEach(t),$=S(e),g=u(e,"P",{});var N=c(g);z=n(N,"From there, it was just a matter of pulling data from opensheet and displaying it ("),_=u(N,"A",{href:!0,rel:!0});var se=c(_);D=n(se,"SWR"),se.forEach(t),K=n(N," is awesome, by the way). I say it was \u201Cjust a matter of\u201D pulling the data, but of course I had to pull something stupid in the middle. Apparently, I managed to edit the TypeScript types declaration exported by the SWR library when using VSCode\u2019s \u2018rename symbol\u2019 feature, and then spent a solid half hour trying to figure out why I was getting a TypeScript error. Oh well."),N.forEach(t),F=S(e),x=u(e,"P",{});var le=c(x);Q=n(le,"Anyway, eventually I got it working."),le.forEach(t),W=S(e),G=u(e,"P",{});var ie=c(G);E=u(ie,"IMG",{src:!0,alt:!0}),ie.forEach(t),M=S(e),P=u(e,"P",{});var ne=c(P);X=n(ne,"It\u2019s still a barebones site, but at least the Google Sheets import is working. And most importantly, it already comes with dark mode. Ideally, my goal for tomorrow is finish the code that actually turns dispatch templates into ready-to-post BBcode, but we\u2019ll see how far I actually get."),ne.forEach(t),this.h()},h(){w(p,"href","https://github.com/esfalsa/codico"),w(p,"rel","nofollow"),w(v,"href","https://github.com/benborgers/opensheet#readme"),w(v,"rel","nofollow"),w(_,"href","https://swr.vercel.app/"),w(_,"rel","nofollow"),_e(E.src,Z="/images/blog/codico-basic-spreadsheet-view.png")||w(E,"src",Z),w(E,"alt","Codico with data pulled from a spreadsheet")},m(e,s){r(e,a,s),l(a,f),l(a,p),l(p,b),l(a,o),r(e,d,s),r(e,m,s),l(m,O),l(m,j),l(j,R),l(m,V),r(e,C,s),r(e,A,s),l(A,H),r(e,B,s),r(e,y,s),l(y,J),l(y,v),l(v,L),l(y,U),r(e,$,s),r(e,g,s),l(g,z),l(g,_),l(_,D),l(g,K),r(e,F,s),r(e,x,s),l(x,Q),r(e,W,s),r(e,G,s),l(G,E),r(e,M,s),r(e,P,s),l(P,X)},p:Ie,d(e){e&&t(a),e&&t(d),e&&t(m),e&&t(C),e&&t(A),e&&t(B),e&&t(y),e&&t($),e&&t(g),e&&t(F),e&&t(x),e&&t(W),e&&t(G),e&&t(M),e&&t(P)}}}function Ae(k){let a,f;const p=[k[0],he];let b={$$slots:{default:[ke]},$$scope:{ctx:k}};for(let o=0;o<p.length;o+=1)b=Y(b,p[o]);return a=new Se({props:b}),{c(){me(a.$$.fragment)},l(o){fe(a.$$.fragment,o)},m(o,d){ye(a,o,d),f=!0},p(o,[d]){const m=d&1?ge(p,[d&1&&re(o[0]),d&0&&re(he)]):{};d&2&&(m.$$scope={dirty:d,ctx:o}),a.$set(m)},i(o){f||(we(a.$$.fragment,o),f=!0)},o(o){be(a.$$.fragment,o),f=!1},d(o){ve(a,o)}}}const he={title:"Codico DevBlog: Spreadsheets?",datetime:"2022-08-03T22:02:10-0700"};function xe(k,a,f){return k.$$set=p=>{f(0,a=Y(Y({},a),pe(p)))},a=pe(a),[a]}class je extends ue{constructor(a){super(),de(this,a,xe,Ae,ce,{})}}export{je as default,he as metadata};
