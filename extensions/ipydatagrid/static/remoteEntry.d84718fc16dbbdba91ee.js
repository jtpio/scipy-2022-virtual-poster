var _JUPYTERLAB;(()=>{"use strict";var e,t,r,a,d,n,o,f,i,l,c,u,s,b,h,p,m,v,g={2975:(e,t,r)=>{var a={"./index":()=>Promise.all([r.e(400),r.e(518),r.e(284),r.e(853),r.e(288),r.e(787),r.e(568)]).then((()=>()=>r(1568))),"./extension":()=>Promise.all([r.e(400),r.e(518),r.e(853),r.e(288),r.e(787),r.e(480)]).then((()=>()=>r(4480)))},d=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),n=(e,t)=>{if(r.S){var a=r.S.default,d="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[d]=e,r.I(d,t)}};r.d(t,{get:()=>d,init:()=>n})}},y={};function w(e){var t=y[e];if(void 0!==t)return t.exports;var r=y[e]={id:e,loaded:!1,exports:{}};return g[e].call(r.exports,r,r.exports,w),r.loaded=!0,r.exports}w.m=g,w.c=y,w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>e+"."+{22:"6fed8d08a098109a5d8e",142:"025e64e0cbb8aa528385",143:"056b21f2a34647c93f17",259:"ebb5f016db97c56e073f",271:"6001ce90985d0530cb48",282:"ac852b688a922a4f50e5",284:"a73d31f7e7e397648b90",285:"04634c05242d9b46c679",288:"69024c808b2cb3b20288",315:"2feb9a718d4f70c725e2",351:"679763f13017ed92d597",353:"054c64e431d438152ccf",400:"7cd17b5685042584410b",404:"cd7726fa6c41bb731501",421:"2d1f0eec6f939a61d02a",480:"c65007fd7e5a9dffca85",481:"911a23288443c8041987",513:"0b5e1009097728767160",518:"93730651b51fc20d42a8",520:"4437d21c1725d3a1fd0a",568:"2205a874de0a8daf2fd2",576:"1ff4b8c10c100f785c4a",700:"c68d9284a808527427fa",762:"5f73bb92c8533c156297",787:"645e2323c799953f3246",811:"407453f831a8a4b1f2ac",812:"5c2bb109627dd9719fad",823:"bf392cc89e80d6d5010f",853:"dccf39436fd63c58bb87",872:"7502ffd41eeba3b6c41a",917:"2797623bdd9abc7e30de",990:"f9df2954ae8acc955dae"}[e]+".js?v="+{22:"6fed8d08a098109a5d8e",142:"025e64e0cbb8aa528385",143:"056b21f2a34647c93f17",259:"ebb5f016db97c56e073f",271:"6001ce90985d0530cb48",282:"ac852b688a922a4f50e5",284:"a73d31f7e7e397648b90",285:"04634c05242d9b46c679",288:"69024c808b2cb3b20288",315:"2feb9a718d4f70c725e2",351:"679763f13017ed92d597",353:"054c64e431d438152ccf",400:"7cd17b5685042584410b",404:"cd7726fa6c41bb731501",421:"2d1f0eec6f939a61d02a",480:"c65007fd7e5a9dffca85",481:"911a23288443c8041987",513:"0b5e1009097728767160",518:"93730651b51fc20d42a8",520:"4437d21c1725d3a1fd0a",568:"2205a874de0a8daf2fd2",576:"1ff4b8c10c100f785c4a",700:"c68d9284a808527427fa",762:"5f73bb92c8533c156297",787:"645e2323c799953f3246",811:"407453f831a8a4b1f2ac",812:"5c2bb109627dd9719fad",823:"bf392cc89e80d6d5010f",853:"dccf39436fd63c58bb87",872:"7502ffd41eeba3b6c41a",917:"2797623bdd9abc7e30de",990:"f9df2954ae8acc955dae"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="ipydatagrid:",w.l=(r,a,d,n)=>{if(e[r])e[r].push(a);else{var o,f;if(void 0!==d)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var c=i[l];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+d){o=c;break}}o||(f=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,w.nc&&o.setAttribute("nonce",w.nc),o.setAttribute("data-webpack",t+d),o.src=r),e[r]=[a];var u=(t,a)=>{o.onerror=o.onload=null,clearTimeout(s);var d=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),d&&d.forEach((e=>e(a))),t)return t(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),f&&document.head.appendChild(o)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},t={};w.I=(r,a)=>{a||(a=[]);var d=t[r];if(d||(d=t[r]={}),!(a.indexOf(d)>=0)){if(a.push(d),e[r])return e[r];w.o(w.S,r)||(w.S[r]={});var n=w.S[r],o="ipydatagrid",f=(e,t,r,a)=>{var d=n[e]=n[e]||{},f=d[t];(!f||!f.loaded&&(!a!=!f.eager?a:o>f.from))&&(d[t]={get:r,from:o,eager:!!a})},i=[];return"default"===r&&(f("@lumino/datagrid","0.32.0",(()=>Promise.all([w.e(421),w.e(853),w.e(22)]).then((()=>()=>w(3421))))),f("d3-array","2.12.1",(()=>w.e(404).then((()=>()=>w(3404))))),f("d3-color","1.4.1",(()=>w.e(811).then((()=>()=>w(4811))))),f("d3-color","2.0.0",(()=>w.e(872).then((()=>()=>w(3872))))),f("d3-format","1.4.5",(()=>w.e(481).then((()=>()=>w(8481))))),f("d3-format","2.0.0",(()=>w.e(142).then((()=>()=>w(2142))))),f("d3-scale","3.3.0",(()=>Promise.all([w.e(315),w.e(285),w.e(513),w.e(259)]).then((()=>()=>w(7315))))),f("d3-time-format","2.3.0",(()=>w.e(520).then((()=>()=>w(1520))))),f("d3-time-format","3.0.0",(()=>w.e(576).then((()=>()=>w(271))))),f("ipydatagrid","1.1.12",(()=>Promise.all([w.e(400),w.e(518),w.e(284),w.e(853),w.e(288),w.e(787),w.e(568)]).then((()=>()=>w(1568))))),f("moment","2.29.2",(()=>Promise.all([w.e(762),w.e(700)]).then((()=>()=>w(381))))),f("vega-expression","2.7.0",(()=>Promise.all([w.e(351),w.e(823)]).then((()=>()=>w(6351))))),f("vega-expression","5.0.0",(()=>Promise.all([w.e(143),w.e(990)]).then((()=>()=>w(8143))))),f("vega-expression","5.0.0",(()=>Promise.all([w.e(917),w.e(812)]).then((()=>()=>w(9917))))),f("vega-functions","5.12.1",(()=>Promise.all([w.e(400),w.e(282),w.e(288),w.e(285),w.e(353)]).then((()=>()=>w(6282)))))),e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var d=e[a],n=(typeof d)[0];if(a>=t.length)return"u"==n;var o=t[a],f=(typeof o)[0];if(n!=f)return"o"==n&&"n"==f||"s"==f||"u"==n;if("o"!=n&&"u"!=n&&d!=o)return d<o;a++}},d=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(f=e[n]))[0]?"-":(a>0?".":"")+(a=2,f);return r}var o=[];for(n=1;n<e.length;n++){var f=e[n];o.push(0===f?"not("+i()+")":1===f?"("+i()+" || "+i()+")":2===f?o.pop()+" "+o.pop():d(f))}return i();function i(){return o.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],d=a<0;d&&(a=-a-1);for(var o=0,f=1,i=!0;;f++,o++){var l,c,u=f<e.length?(typeof e[f])[0]:"";if(o>=t.length||"o"==(c=(typeof(l=t[o]))[0]))return!i||("u"==u?f>a&&!d:""==u!=d);if("u"==c){if(!i||"u"!=u)return!1}else if(i)if(u==c)if(f<=a){if(l!=e[f])return!1}else{if(d?l>e[f]:l<e[f])return!1;l!=e[f]&&(i=!1)}else if("s"!=u&&"n"!=u){if(d||f<=a)return!1;i=!1,f--}else{if(f<=a||c<u!=d)return!1;i=!1}else"s"!=u&&"n"!=u&&(i=!1,f--)}}var s=[],b=s.pop.bind(s);for(o=1;o<e.length;o++){var h=e[o];s.push(1==h?b()|b():2==h?b()&b():h?n(h,t):!b())}return!!b()},o=(e,t)=>{var r=w.S[e];if(!r||!w.o(r,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return r},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},i=(e,t,r)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+d(r)+")",l=(e,t,r,a)=>{var d=f(e,r);return n(a,d)||"undefined"!=typeof console&&console.warn&&console.warn(i(r,d,a)),u(e[r][d])},c=(e,t,r)=>{var d=e[t];return(t=Object.keys(d).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&d[t]},u=e=>(e.loaded=1,e.get()),b=(s=e=>function(t,r,a,d){var n=w.I(t);return n&&n.then?n.then(e.bind(e,t,w.S[t],r,a,d)):e(t,w.S[t],r,a,d)})(((e,t,r,a)=>(o(e,r),l(t,0,r,a)))),h=s(((e,t,r,a,d)=>{var n=t&&w.o(t,r)&&c(t,r,a);return n?u(n):d()})),p={},m={608:()=>b("default","@lumino/domutils",[1,1,2,3]),1797:()=>b("default","@lumino/coreutils",[1,1,5,3]),3211:()=>b("default","@lumino/messaging",[1,1,4,3]),3706:()=>b("default","@lumino/widgets",[1,1,19,0]),6168:()=>b("default","@lumino/signaling",[1,1,4,3]),9850:()=>b("default","@lumino/algorithm",[1,1,3,3]),5736:()=>h("default","d3-array",[1,2,7,1],(()=>w.e(404).then((()=>()=>w(3404))))),5838:()=>h("default","d3-format",[1,2,0,0],(()=>w.e(142).then((()=>()=>w(2142))))),7588:()=>h("default","d3-time-format",[1,3,0,0],(()=>w.e(271).then((()=>()=>w(271))))),2465:()=>b("default","@jupyter-widgets/base",[,[1,4],[1,3],[1,2],1,1]),4031:()=>h("default","moment",[1,2,24,0],(()=>Promise.all([w.e(762),w.e(700)]).then((()=>()=>w(381))))),4968:()=>b("default","@lumino/commands",[1,1,12,0]),5058:()=>h("default","d3-format",[1,1,3,2],(()=>w.e(481).then((()=>()=>w(8481))))),5282:()=>h("default","@lumino/datagrid",[2,0,32,0],(()=>Promise.all([w.e(421),w.e(22)]).then((()=>()=>w(3421))))),5866:()=>h("default","d3-color",[1,1,3,0],(()=>w.e(811).then((()=>()=>w(4811))))),7831:()=>h("default","d3-time-format",[1,2,1,3],(()=>w.e(520).then((()=>()=>w(1520))))),8624:()=>h("default","vega-functions",[1,5,3,0],(()=>Promise.all([w.e(282),w.e(285),w.e(353)]).then((()=>()=>w(6282))))),9462:()=>b("default","@lumino/virtualdom",[1,1,8,0]),9704:()=>h("default","vega-expression",[1,2,6,0],(()=>w.e(351).then((()=>()=>w(6351))))),9321:()=>b("default","@jupyterlab/apputils",[1,3,3,4]),1513:()=>b("default","@lumino/dragdrop",[1,1,7,1]),2285:()=>h("default","d3-color",[,[1,2],[-1,2],1,[0,1],2],(()=>w.e(811).then((()=>()=>w(4811))))),1469:()=>h("default","d3-time-format",[,[1,3],[-1,3],1,[0,2],2],(()=>w.e(520).then((()=>()=>w(1520))))),2798:()=>h("default","d3-array",[1,2],(()=>w.e(404).then((()=>()=>w(3404))))),4056:()=>h("default","d3-array",[1,2,3,0],(()=>w.e(404).then((()=>()=>w(3404))))),8333:()=>h("default","d3-format",[,[1,2],[-1,2],1,[0,1],2],(()=>w.e(481).then((()=>()=>w(8481))))),2429:()=>h("default","vega-expression",[1,5,0,0],(()=>w.e(143).then((()=>()=>w(8143))))),3947:()=>h("default","d3-scale",[1,3,2,2],(()=>Promise.all([w.e(315),w.e(513)]).then((()=>()=>w(7315))))),5181:()=>h("default","d3-array",[1,2,5,0],(()=>w.e(404).then((()=>()=>w(3404))))),6800:()=>h("default","d3-color",[1,2,0,0],(()=>w.e(872).then((()=>()=>w(3872))))),8114:()=>h("default","vega-expression",[1,5,0,0],(()=>w.e(917).then((()=>()=>w(9917)))))},v={22:[1513],285:[2285],288:[5736,5838,7588],353:[2429,3947,5181,6800,8114],480:[9321],513:[1469,2798,4056,8333],787:[2465,4031,4968,5058,5282,5866,7831,8624,9462,9704],853:[608,1797,3211,3706,6168,9850]},w.f.consumes=(e,t)=>{w.o(v,e)&&v[e].forEach((e=>{if(w.o(p,e))return t.push(p[e]);var r=t=>{p[e]=0,w.m[e]=r=>{delete w.c[e],r.exports=t()}},a=t=>{delete p[e],w.m[e]=r=>{throw delete w.c[e],t}};try{var d=m[e]();d.then?t.push(p[e]=d.then(r).catch(a)):r(d)}catch(e){a(e)}}))},(()=>{var e={146:0};w.f.j=(t,r)=>{var a=w.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(2(2|85|88)|(35|51|85)3)$/.test(t))e[t]=0;else{var d=new Promise(((r,d)=>a=e[t]=[r,d]));r.push(a[2]=d);var n=w.p+w.u(t),o=new Error;w.l(n,(r=>{if(w.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var d=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+d+": "+n+")",o.name="ChunkLoadError",o.type=d,o.request=n,a[1](o)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,d,[n,o,f]=r,i=0;if(n.some((t=>0!==e[t]))){for(a in o)w.o(o,a)&&(w.m[a]=o[a]);f&&f(w)}for(t&&t(r);i<n.length;i++)d=n[i],w.o(e,d)&&e[d]&&e[d][0](),e[n[i]]=0},r=self.webpackChunkipydatagrid=self.webpackChunkipydatagrid||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var P=w(2975);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipydatagrid=P})();