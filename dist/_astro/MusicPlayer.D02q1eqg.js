import{o as Sa,a as Pa,i as za}from"./lifecycle.DiKFBckx.js";import{a2 as $a,a8 as Ia,aL as Ra,aM as Na,i as Wa,u as Ka,aN as qa,aB as ze,aO as Oa,q as Ya,aP as ht,c as it,f as tt,a as W,p as Ua,b as Ha,h as l,m as F,ak as Y,g as t,d as vt,s as v,e as i,r,o as Xa,t as Pt}from"./template.DrFZJj1y.js";import{a as Ga,s as V}from"./render.BQ5eWobd.js";import{i as z}from"./if.CID1ihJa.js";import{e as Va,i as Ja}from"./each.C-eKjR9x.js";import{s as K,a as st,c as Me}from"./attributes.HWtsdEEu.js";import{e as h}from"./utils.BxAF_LkW.js";import{b as Te}from"./this.DwCvQvc9.js";import{I as p}from"./Icon.BJ5H0dMs.js";import{m as xt}from"./config.uqQ-gCpj.js";import{I as Qa}from"./zh_TW.D5Fzx1cX.js";import{i as Za}from"./translation.Bq0DIbvh.js";import"./props.53qDHxQy.js";import"./functions.WhpeioxD.js";const tr=()=>performance.now(),J={tick:c=>requestAnimationFrame(c),now:()=>tr(),tasks:new Set};function $e(){const c=J.now();J.tasks.forEach(s=>{s.c(c)||(J.tasks.delete(s),s.f())}),J.tasks.size!==0&&J.tick($e)}function er(c){let s;return J.tasks.size===0&&J.tick($e),{promise:new Promise(w=>{J.tasks.add(s={c,f:w})}),abort(){J.tasks.delete(s)}}}function zt(c,s){ze(()=>{c.dispatchEvent(new CustomEvent(s))})}function ar(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Se(c){const s={},w=c.split(";");for(const k of w){const[j,C]=k.split(":");if(!j||C===void 0)break;const $=ar(j.trim());s[$]=C.trim()}return s}const rr=c=>c;function ir(c,s,w,k){var j=(c&qa)!==0,C="both",$,x=s.inert,A=s.style.overflow,d,g;function P(){return ze(()=>$??=w()(s,k?.()??{},{direction:C}))}var E={is_global:j,in(){s.inert=x,zt(s,"introstart"),d=ae(s,P(),g,1,()=>{zt(s,"introend"),d?.abort(),d=$=void 0,s.style.overflow=A})},out(T){s.inert=!0,zt(s,"outrostart"),g=ae(s,P(),d,0,()=>{zt(s,"outroend"),T?.()})},stop:()=>{d?.abort(),g?.abort()}},L=$a;if((L.transitions??=[]).push(E),Ga){var M=j;if(!M){for(var u=L.parent;u&&(u.f&Ia)!==0;)for(;(u=u.parent)&&(u.f&Ra)===0;);M=!u||(u.f&Na)!==0}M&&Wa(()=>{Ka(()=>E.in())})}}function ae(c,s,w,k,j){var C=k===1;if(Oa(s)){var $,x=!1;return Ya(()=>{if(!x){var T=s({direction:C?"in":"out"});$=ae(c,T,w,k,j)}}),{abort:()=>{x=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(w?.deactivate(),!s?.duration)return j(),{abort:ht,deactivate:ht,reset:ht,t:()=>k};const{delay:A=0,css:d,tick:g,easing:P=rr}=s;var E=[];if(C&&w===void 0&&(g&&g(0,1),d)){var L=Se(d(0,1));E.push(L,L)}var M=()=>1-k,u=c.animate(E,{duration:A,fill:"forwards"});return u.onfinish=()=>{u.cancel();var T=w?.t()??1-k;w?.abort();var b=k-T,et=s.duration*Math.abs(b),at=[];if(et>0){var I=!1;if(d)for(var f=Math.ceil(et/16.666666666666668),y=0;y<=f;y+=1){var a=T+b*P(y/f),Q=Se(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(c.style.overflow="hidden"),M=()=>{var U=u.currentTime;return T+b*P(U/et)},g&&er(()=>{if(u.playState!=="running")return!1;var U=M();return g(U,1-U),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{M=()=>k,g?.(k,1-k),j()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{j=ht},reset:()=>{k===0&&g?.(1,0)},t:()=>M()}}function Pe(c){return function(...s){var w=s[0];return w.stopPropagation(),c?.apply(this,s)}}function sr(c){const s=c-1;return s*s*s+1}function nr(c,{delay:s=0,duration:w=400,easing:k=sr,axis:j="y"}={}){const C=getComputedStyle(c),$=+C.opacity,x=j==="y"?"height":"width",A=parseFloat(C[x]),d=j==="y"?["top","bottom"]:["left","right"],g=d.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),P=parseFloat(C[`padding${g[0]}`]),E=parseFloat(C[`padding${g[1]}`]),L=parseFloat(C[`margin${g[0]}`]),M=parseFloat(C[`margin${g[1]}`]),u=parseFloat(C[`border${g[0]}Width`]),T=parseFloat(C[`border${g[1]}Width`]);return{delay:s,duration:w,easing:k,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*$};${x}: ${b*A}px;padding-${d[0]}: ${b*P}px;padding-${d[1]}: ${b*E}px;margin-${d[0]}: ${b*L}px;margin-${d[1]}: ${b*M}px;border-${d[0]}-width: ${b*u}px;border-${d[1]}-width: ${b*T}px;min-${x}: 0`}}var or=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),lr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ur=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),cr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),dr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Br(c,s){Ha(s,!1);let w=xt.mode??"local",k=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",j=xt.id??"14164869977",C=xt.server??"netease",$=xt.type??"playlist",x=F(!1),A=F(!1),d=F(!1),g=F(!1),P=F(0),E=F(0),L=F(.7),M=F(!1),u=F(!1),T=F(!0),b=F(2),et=F(""),at=F(!1),I=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),f=F([]),y=F(0),a=F(),Q=F(),U=F();const Ie=[{id:1,title:"潮鳴り",artist:"Key",cover:"assets/music/cover/Clannad.jpg",url:"assets/music/url/潮鳴り.mp3",duration:240},{id:2,title:"回想錄",artist:"戶越Magome",cover:"assets/music/cover/Air.jpg",url:"assets/music/url/回想錄.mp3",duration:240},{id:3,title:"夢の跡",artist:"Key",cover:"assets/music/cover/Kanon.jpg",url:"assets/music/url/夢の跡.mp3",duration:240},{id:4,title:"汐",artist:"Key",cover:"assets/music/cover/Clannad.jpg",url:"assets/music/url/汐.mp3",duration:240},{id:5,title:"夏影",artist:"麻枝准",cover:"assets/music/cover/Air.jpg",url:"assets/music/url/夏影.mp3",duration:240},{id:6,title:"桜花抄",artist:"天門",cover:"assets/music/cover/秒速5センチメートル.jpeg",url:"assets/music/url/桜花抄.mp3",duration:240},{id:7,title:"羽根",artist:"折戶伸治",cover:"assets/music/cover/Air.jpg",url:"assets/music/url/羽根.mp3",duration:240},{id:8,title:"渚",artist:"Key",cover:"assets/music/cover/Clannad.jpg",url:"assets/music/url/渚.mp3",duration:240}];async function Re(){if(!k||!j)return;l(u,!0);const n=k.replace(":server",C).replace(":type",$).replace(":id",j).replace(":auth","").replace(":r",Date.now().toString());try{const S=await fetch(n);if(!S.ok)throw new Error("meting api error");const H=await S.json();l(f,H.map(N=>{let pt=N.name??N.title??"未知歌曲",Ft=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:pt,artist:Ft,cover:N.pic??"",url:N.url??"",duration:R}})),t(f).length>0&&It(t(f)[0]),l(u,!1)}catch{Et("Meting 歌单获取失败"),l(u,!1)}}function Ne(){!t(a)||!t(I).url||(t(x)?t(a).pause():t(a).play())}function yt(){l(A,!t(A)),t(A)&&(l(g,!1),l(d,!1))}function _t(){l(d,!t(d)),t(d)&&(l(A,!1),l(g,!1))}function re(){l(g,!t(g))}function We(){l(T,!t(T))}function Ke(){l(b,(t(b)+1)%3)}function qe(){if(t(f).length<=1)return;const n=t(y)>0?t(y)-1:t(f).length-1;wt(n)}function $t(){if(t(f).length<=1)return;let n;if(t(T))do n=Math.floor(Math.random()*t(f).length);while(n===t(y)&&t(f).length>1);else n=t(y)<t(f).length-1?t(y)+1:0;wt(n)}function wt(n){if(n<0||n>=t(f).length)return;const S=t(x);l(y,n),t(a)&&t(a).pause(),It(t(f)[t(y)]),(S||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function It(n){!n||!t(a)||(l(I,{...n}),n.url?(l(u,!0),t(a).pause(),Y(a,t(a).currentTime=0),l(P,0),l(E,n.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),Y(a,t(a).src=kt(n.url)),t(a).load()):l(u,!1))}function ie(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(f)[t(y)]&&Y(f,t(f)[t(y)].duration=t(E)),Y(I,t(I).duration=t(E)))}function se(n){l(u,!1),Et(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(f).length>1?setTimeout(()=>$t(),1e3):Et("播放列表中没有可用的歌曲")}function ne(){}function Et(n){l(et,n),l(at,!0),setTimeout(()=>{l(at,!1)},3e3)}function Oe(){l(at,!1)}function Ye(n){if(!t(a)||!t(Q))return;const S=t(Q).getBoundingClientRect(),N=(n.clientX-S.left)/S.width*t(E);Y(a,t(a).currentTime=N),l(P,N)}function Ue(n){if(!t(a)||!t(U))return;const S=t(U).getBoundingClientRect(),H=Math.max(0,Math.min(1,(n.clientX-S.left)/S.width));l(L,H),Y(a,t(a).volume=t(L)),l(M,t(L)===0)}function oe(){t(a)&&(l(M,!t(M)),Y(a,t(a).muted=t(M)))}function le(n){if(!Number.isFinite(n)||n<0)return"0:00";const S=Math.floor(n/60),H=Math.floor(n%60);return`${S}:${H.toString().padStart(2,"0")}`}function He(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(b)===1?(Y(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(b)===2||t(y)<t(f).length-1||t(T)?$t():l(x,!1)}),t(a).addEventListener("error",n=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Sa(()=>{l(a,new Audio),Y(a,t(a).volume=t(L)),He(),w==="meting"?Re():(l(f,[...Ie]),t(f).length>0?It(t(f)[0]):Et("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),Y(a,t(a).src=""))}),za();var ue=it(),Xe=tt(ue);{var Ge=n=>{var S=vr(),H=tt(S);{var N=e=>{var m=or(),_=i(m),B=i(_);p(B,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var D=v(B,2),o=i(D,!0);r(D);var X=v(D,2),ct=i(X);p(ct,{icon:"material-symbols:close",class:"text-lg"}),r(X),r(_),r(m),Pt(()=>V(o,t(et))),h("click",X,Oe),W(e,m)};z(H,e=>{t(at)&&e(N)})}var pt=v(H,2);let Ft;var R=i(pt);let ce;var Ve=i(R);{var Je=e=>{p(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=it(),_=tt(m);{var B=o=>{var X=lr();W(o,X)},D=o=>{p(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,o=>{t(x)?o(B):o(D,!1)},!0)}W(e,m)};z(Ve,e=>{t(u)?e(Je):e(Qe,!1)})}r(R);var nt=v(R,2);let de;var ve=i(nt),Rt=i(ve),Nt=i(Rt);let pe;var fe=v(Nt,2),Ze=i(fe);{var ta=e=>{p(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=it(),_=tt(m);{var B=o=>{p(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},D=o=>{p(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,o=>{t(x)?o(B):o(D,!1)},!0)}W(e,m)};z(Ze,e=>{t(u)?e(ta):e(ea,!1)})}r(fe),r(Rt);var Wt=v(Rt,2),Kt=i(Wt),aa=i(Kt,!0);r(Kt);var me=v(Kt,2),ra=i(me,!0);r(me),r(Wt);var ge=v(Wt,2),Ct=i(ge),ia=i(Ct);p(ia,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Ct);var qt=v(Ct,2),sa=i(qt);p(sa,{icon:"material-symbols:expand-less",class:"text-lg"}),r(qt),r(ge),r(ve),r(nt);var Bt=v(nt,2);let be;var Ot=i(Bt),Yt=i(Ot),he=i(Yt);let xe;r(Yt);var Ut=v(Yt,2),Ht=i(Ut),na=i(Ht,!0);r(Ht);var Xt=v(Ht,2),oa=i(Xt,!0);r(Xt);var ye=v(Xt,2),la=i(ye);r(ye),r(Ut);var _e=v(Ut,2),At=i(_e),ua=i(At);p(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(At);var Gt=v(At,2),ca=i(Gt);p(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Gt),r(_e),r(Ot);var Vt=v(Ot,2),ot=i(Vt),da=i(ot);r(ot),Te(ot,e=>l(Q,e),()=>t(Q)),r(Vt);var Jt=v(Vt,2),lt=i(Jt);let we;var va=i(lt);p(va,{icon:"material-symbols:shuffle",class:"text-lg"}),r(lt);var ft=v(lt,2),pa=i(ft);p(pa,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(ft);var ut=v(ft,2);let ke;var fa=i(ut);{var ma=e=>{p(e,{icon:"eos-icons:loading",class:"text-xl"})},ga=e=>{var m=it(),_=tt(m);{var B=o=>{p(o,{icon:"material-symbols:pause",class:"text-xl"})},D=o=>{p(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,o=>{t(x)?o(B):o(D,!1)},!0)}W(e,m)};z(fa,e=>{t(u)?e(ma):e(ga,!1)})}r(ut);var mt=v(ut,2),ba=i(mt);p(ba,{icon:"material-symbols:skip-next",class:"text-xl"}),r(mt);var Dt=v(mt,2);let Ee;var ha=i(Dt);{var xa=e=>{p(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=it(),_=tt(m);{var B=o=>{p(o,{icon:"material-symbols:repeat",class:"text-lg"})},D=o=>{p(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,o=>{t(b)===2?o(B):o(D,!1)},!0)}W(e,m)};z(ha,e=>{t(b)===1?e(xa):e(ya,!1)})}r(Dt),r(Jt);var Fe=v(Jt,2),jt=i(Fe),_a=i(jt);{var wa=e=>{p(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var m=it(),_=tt(m);{var B=o=>{p(o,{icon:"material-symbols:volume-down",class:"text-lg"})},D=o=>{p(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,o=>{t(L)<.5?o(B):o(D,!1)},!0)}W(e,m)};z(_a,e=>{t(M)||t(L)===0?e(wa):e(ka,!1)})}r(jt);var rt=v(jt,2),Ea=i(rt);r(rt),Te(rt,e=>l(U,e),()=>t(U));var Lt=v(rt,2);let Ce;var Fa=i(Lt);p(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Lt),r(Fe),r(Bt);var Ca=v(Bt,2);{var Ba=e=>{var m=dr(),_=i(m),B=i(_),D=i(B,!0);r(B);var o=v(B,2),X=i(o);p(X,{icon:"material-symbols:close",class:"text-lg"}),r(o),r(_);var ct=v(_,2);Va(ct,5,()=>t(f),Ja,(gt,Z,q)=>{var G=cr();let Mt;var bt=i(G),Aa=i(bt);{var Da=O=>{p(O,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},ja=O=>{var St=it(),te=tt(St);{var ee=dt=>{p(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ta=dt=>{var Le=ur();Le.textContent=q+1,W(dt,Le)};z(te,dt=>{q===t(y)?dt(ee):dt(Ta,!1)},!0)}W(O,St)};z(Aa,O=>{q===t(y)&&t(x)?O(Da):O(ja,!1)})}r(bt);var Qt=v(bt,2),Be=i(Qt);r(Qt);var Ae=v(Qt,2),Tt=i(Ae);let De;var La=i(Tt,!0);r(Tt);var Zt=v(Tt,2);let je;var Ma=i(Zt,!0);r(Zt),r(Ae),r(G),Pt((O,St,te,ee)=>{Mt=K(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Mt,O),st(G,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),st(Be,"src",St),st(Be,"alt",t(Z).title),De=K(Tt,1,"font-medium truncate",null,De,te),V(La,t(Z).title),je=K(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,je,ee),V(Ma,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(y),"text-[var(--primary)]":q===t(y)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":q===t(y),"text-90":q!==t(y)}),()=>({"text-[var(--primary)]":q===t(y)})]),h("click",G,()=>wt(q)),h("keydown",G,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),wt(q))}),W(gt,G)}),r(ct),r(m),Pt(gt=>V(D,gt),[()=>Za(Qa.playlist)]),h("click",o,re),ir(3,m,()=>nr,()=>({duration:300,axis:"y"})),W(e,m)};z(Ca,e=>{t(g)&&e(Ba)})}r(pt),Xa(2),Pt((e,m,_,B,D,o,X,ct,gt,Z,q,G,Mt,bt)=>{Ft=K(pt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=K(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=K(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),st(Nt,"src",B),pe=K(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,pe,D),V(aa,t(I).title),V(ra,t(I).artist),be=K(Bt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,be,o),st(he,"src",X),xe=K(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),V(na,t(I).title),V(oa,t(I).artist),V(la,`${gt??""} / ${Z??""}`),st(ot,"aria-valuenow",t(E)>0?t(P)/t(E)*100:0),Me(da,`width: ${t(E)>0?t(P)/t(E)*100:0}%`),we=K(lt,1,"w-10 h-10 rounded-lg",null,we,q),lt.disabled=t(f).length<=1,ft.disabled=t(f).length<=1,ke=K(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,G),ut.disabled=t(u),mt.disabled=t(f).length<=1,Ee=K(Dt,1,"w-10 h-10 rounded-lg",null,Ee,Mt),st(rt,"aria-valuenow",t(L)*100),Me(Ea,`width: ${t(L)*100}%`),Ce=K(Lt,1,"btn-plain w-8 h-8 rounded-lg",null,Ce,bt)},[()=>({expanded:t(A),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(A)||t(d),"scale-95":t(A)||t(d),"pointer-events-none":t(A)||t(d)}),()=>kt(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(A),"scale-95":!t(A),"pointer-events-none":!t(A)}),()=>kt(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>le(t(P)),()=>le(t(E)),()=>({"btn-regular":t(T),"btn-plain":!t(T)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(b)>0,"btn-plain":t(b)===0}),()=>({"text-[var(--primary)]":t(g)})]),h("click",R,_t),h("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",Ct,Pe(_t)),h("click",qt,Pe(yt)),h("click",nt,yt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",At,_t),h("click",Gt,yt),h("click",ot,Ye),h("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(E);t(a)&&(Y(a,t(a).currentTime=_),l(P,_))}}),h("click",lt,We),h("click",ft,qe),h("click",ut,Ne),h("click",mt,$t),h("click",Dt,Ke),h("click",jt,oe),h("click",rt,Ue),h("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&oe())}),h("click",Lt,re),W(n,S)};z(Xe,n=>{n(Ge)})}W(c,ue),Ua()}export{Br as default};
