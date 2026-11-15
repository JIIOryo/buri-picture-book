const pages=[
{label:'A LITTLE OCEAN STORY',title:'ちいさな さかなの<br>おおきな ぼうけん',story:'すい、すい、すい。<br>いっしょに うみへ いこう。',bg:'#e7eee6',scale:.8,type:0},
{label:'01 / ちいさな はじまり',title:'モジャコ',story:'ちいさな ちいさな モジャコ。<br>もじゃもじゃ もに、かくれんぼ。',bg:'#eef0d8',scale:.52,type:0},
{label:'02 / すこし おおきく',title:'ワカシ',story:'すいすい、ワカシ。<br>すこし おおきく なったよ。',bg:'#e0eee9',scale:.65,type:1},
{label:'03 / ぐんぐん そだつ',title:'イナダ',story:'すいーっ、イナダ。<br>ひろい うみを およぐよ。',bg:'#dceaf0',scale:.79,type:2},
{label:'04 / もっと おおきく',title:'ワラサ',story:'ぐんぐん、ワラサ。<br>しっぽを ふって、すーいすい。',bg:'#d6e6e5',scale:.94,type:3},
{label:'05 / おおきく なったね',title:'ブリ',story:'どーん！ おおきな ブリ。<br>ちいさな あのこが、おおきく なった。',bg:'#e5e8d9',scale:1.12,type:4},
{label:'THE END / また あそぼうね',title:'おおきく なったね。',story:'なまえが かわっても、おなじ さかな。<br>すい、すい、すい。また あした。',bg:'#eaeadd',scale:1,type:5}];
const names={kanto:['モジャコ','ワカシ','イナダ','ワラサ','ブリ'],kansai:['モジャコ','ツバス','ハマチ','メジロ','ブリ']};
const originalPages=pages.map(p=>({...p}));
let region='kanto';
let current=0;const $=id=>document.getElementById(id);
// Original vector illustration: streamlined yellowtail silhouette and juvenile bars.
// Shape/color reference: https://www.env.go.jp/water/heisa/heisa_net/setouchiNet/seto/g1/g1chapter1/ikimono/hamachi.html
function fish(x,y,s,type){
  const juvenile=type===0, depth=[40,38,43,48,54][type], id=`fish-${type}-${x}-${y}`;
  const back=juvenile?'#666c3d':['','#365b5b','#2c5359','#244b55','#21454f'][type];
  const side=juvenile?'#afb476':'#a6bfc1', belly=juvenile?'#e9e5bb':'#f2f4ed';
  const fin=juvenile?'#777640':'#aba75b', d=depth;
  const body=`M-143 0 C-110 -7 -94 -${d-7} -27 -${d} C52 -${d+8} 94 -${d-13} 133 -13 L151 -2 Q158 3 149 8 L129 16 C82 ${d-6} 38 ${d+7} -25 ${d-1} C-91 ${d-6} -110 9 -143 5Z`;
  const bars=juvenile?[-91,-62,-30,3,36].map((a,i)=>`<path d="M${a} -50 Q${a-8} -8 ${a-5} 45" stroke="#4b5836" stroke-width="${i===0?8:11}" opacity=".62"/>`).join(''):'';
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <defs><linearGradient id="${id}-body" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${back}"/><stop offset=".30" stop-color="${juvenile?'#969b60':'#62898b'}"/><stop offset=".53" stop-color="${side}"/><stop offset=".76" stop-color="${belly}"/><stop offset="1" stop-color="${juvenile?'#c9ca97':'#b5c8c6'}"/></linearGradient><linearGradient id="${id}-fin" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${back}"/><stop offset="1" stop-color="${fin}"/></linearGradient><clipPath id="${id}-clip"><path d="${body}"/></clipPath></defs>
    <path d="M-143 1 Q-166 -10 -197 -55 Q-193 -22 -174 1 Q-194 25 -197 56 Q-163 12 -143 5Z" fill="url(#${id}-fin)" stroke="${back}" stroke-width="1.2"/>
    <path d="M-147 1 L-189 -42 M-147 3 L-190 43" fill="none" stroke="#e2d598" stroke-width="1.2" opacity=".5"/>
    <path d="M55 -${d-4} L45 -${d+12} L36 -${d+3} L28 -${d+13} L18 -${d+4} L9 -${d+11} L-3 -${d-1}Z" fill="${back}" opacity=".9"/>
    <path d="M-8 -${d-1} Q-23 -${d+38} -39 -${d+18} Q-62 -${d-1} -115 -12 L-105 -7Z" fill="url(#${id}-fin)" stroke="${back}" stroke-width="1"/>
    <path d="M-11 ${d-2} Q-31 ${d+25} -43 ${d+12} Q-76 ${d-4} -117 12 L-107 7Z" fill="url(#${id}-fin)"/>
    <path d="M-26 -${d+15} L-42 -${d-2} M-42 -${d+10} L-54 -${d-5} M-57 -${d-2} L-66 -${d-10}" stroke="#bfd0b1" stroke-width="1" opacity=".55"/>
    <path d="${body}" fill="url(#${id}-body)" stroke="${back}" stroke-opacity=".4" stroke-width="1.1"/>
    <g clip-path="url(#${id}-clip)">${bars}<path d="M-145 1 Q-32 -7 65 -13 L152 -2" stroke="${juvenile?'#c4bc65':'#d2c263'}" stroke-width="${juvenile?3:4}" fill="none" opacity=".85"/><path d="M-125 6 Q-58 -1 17 3 Q49 6 66 1" stroke="#648685" stroke-width="1" fill="none" opacity=".5"/><path d="M-86 21 Q6 39 79 18" stroke="#fff" stroke-width="5" fill="none" opacity=".22"/></g>
    <path d="M54 24 Q33 40 27 ${d+15} Q50 ${d+1} 67 28" fill="${fin}" stroke="${back}" stroke-opacity=".3"/>
    <path d="M66 8 Q36 8 4 27 Q37 29 65 15Z" fill="url(#${id}-fin)" stroke="${back}" stroke-opacity=".5"/>
    <path d="M60 12 L15 25" stroke="#d8dcad" stroke-width="1" opacity=".65"/>
    <path d="M76 -${d-16} Q63 -8 69 12 Q75 25 66 ${d-13}" fill="none" stroke="${back}" stroke-width="1.8" opacity=".7"/>
    <circle cx="111" cy="-14" r="${juvenile?11:9}" fill="#d7d6a7" stroke="${back}" stroke-width="1.4"/><circle cx="112" cy="-14" r="${juvenile?7:5.8}" fill="#142f36"/><circle cx="114" cy="-16" r="2.1" fill="#fff" opacity=".95"/>
    <path d="M151 3 L131 8 Q126 10 121 9" fill="none" stroke="${back}" stroke-width="1.7" stroke-linecap="round"/>
  </g>`;
}
function seaweed(x,y,s){return `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="#719479" stroke-width="8" stroke-linecap="round"><path d="M0 0 Q-25 -40 0 -72 T0 -152"/><path d="M0 -25 Q-52 -40 -42 -71 M-2 -58 Q40 -65 42 -93 M0 -91 Q-38 -111 -31 -133"/></g>`}
function art(p){let shapes=`<circle cx="250" cy="270" r="205" fill="#ffffff" opacity=".28"/><path d="M-10 400 Q140 360 300 410 T660 400 L660 610 L-10 610Z" fill="#fff" opacity=".24"/><g fill="none" stroke="#fffaf0" stroke-width="3" opacity=".8"><circle cx="420" cy="160" r="15"/><circle cx="448" cy="122" r="8"/><circle cx="106" cy="256" r="9"/></g>`;
if(p.type===5){shapes+=fish(195,160,.40,0)+fish(365,220,.52,1)+fish(200,295,.63,2)+fish(370,370,.72,3)+fish(240,465,.87,4);}else{shapes+=seaweed(72,500,1.2)+seaweed(151,490,.7)+`<ellipse cx="310" cy="475" rx="${p.scale*125}" ry="12" fill="#648c80" opacity=".10"/>`+fish(310,290,p.scale,p.type);if(current===0)shapes+=`<text x="170" y="175" fill="#5d7b68" font-size="19" font-family="serif" transform="rotate(-9 170 175)">すい、すい。</text>`;}
return `<svg viewBox="0 0 600 600" role="img" aria-label="${p.type===5?'モジャコからブリまで、少しずつ大きくなる5匹の魚':p.type===0?'海藻のそばにいる、小さな縞模様のモジャコ':'黄色い線とやさしい目をした、成長した'+p.title}" xmlns="http://www.w3.org/2000/svg">${shapes}</svg>`;}
function render(){const p=pages[current];$('kanto').setAttribute('aria-pressed',String(region==='kanto'));$('kansai').setAttribute('aria-pressed',String(region==='kansai'));$('scene').innerHTML=art(p);$('eyebrow').textContent=p.label;$('title').innerHTML=p.title;$('story').innerHTML=p.story;document.querySelector('.book').style.background=p.bg;document.querySelector('.book').classList.toggle('stage',current>0&&current<6);$('count').textContent=(current+1)+' / '+pages.length;$('prev').disabled=current===0;$('next').innerHTML=(current===0?'えほんを ひらく':current===6?'もういちど よむ':'つぎの おはなし')+' <span>→</span>';$('dots').innerHTML=pages.map((_,i)=>`<button class="dot ${i===current?'active':''}" aria-label="${i===0?'表紙':i===6?'おしまい':pages[i].title}へ" ${i===current?'aria-current="step"':''} data-page="${i}"></button>`).join('');}
function go(i){current=Math.max(0,Math.min(6,i));render()}
function setRegion(value){region=value;for(let i=1;i<=5;i++){pages[i].title=names[value][i-1];pages[i].story=originalPages[i].story.replaceAll(names.kanto[i-1],names[value][i-1]);}render();}
$('kanto').onclick=()=>setRegion('kanto');$('kansai').onclick=()=>setRegion('kansai');
$('prev').onclick=()=>go(current-1);$('next').onclick=()=>go(current===6?0:current+1);$('home').onclick=e=>{e.preventDefault();go(0)};$('dots').onclick=e=>{if(e.target.dataset.page!==undefined)go(+e.target.dataset.page)};$('about').onclick=()=>$('info').showModal();$('close').onclick=()=>$('info').close();$('info').onclick=e=>{if(e.target===$('info')){const r=$('info').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('info').close()}};document.addEventListener('keydown',e=>{if($('info').open)return;if(e.key==='ArrowRight'){e.preventDefault();go(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(current-1)}});let start=null;const book=document.querySelector('.book');book.addEventListener('touchstart',e=>{start=[e.changedTouches[0].clientX,e.changedTouches[0].clientY]},{passive:true});book.addEventListener('touchend',e=>{if(!start)return;let dx=e.changedTouches[0].clientX-start[0],dy=e.changedTouches[0].clientY-start[1];if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx<0?1:-1));start=null},{passive:true});render();
