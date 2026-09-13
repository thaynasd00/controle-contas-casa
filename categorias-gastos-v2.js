(()=>{if(window.__categoriasGastosV2)return;window.__categoriasGastosV2=true;
const KEY='contasCasaCategoriasExtrasV1';
const FIXAS=['Farmácia','Uber'];
const ler=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]').filter(x=>typeof x==='string'&&x.trim())}catch{return[]}};
const salvar=a=>localStorage.setItem(KEY,JSON.stringify([...new Set(a.map(x=>x.trim()).filter(Boolean))]));
const cat=document.getElementById('cat');if(!cat)return;
[...cat.options].filter(o=>o.value==='__nova_categoria__').forEach(o=>o.remove());
function add(nome){if(!nome||[...cat.options].some(o=>(o.value||o.textContent)===nome))return;const op=document.createElement('option');op.value=nome;op.textContent=nome;cat.appendChild(op)}
[...FIXAS,...ler()].forEach(add);
cat.style.width='100%';cat.style.minHeight='52px';cat.style.height='52px';cat.style.fontSize='17px';cat.style.padding='10px 12px';cat.style.touchAction='auto';cat.style.position='static';cat.style.zIndex='auto';
const wrap=cat.parentElement;if(!wrap)return;
let btn=document.getElementById('novaCategoriaBtn');if(!btn){btn=document.createElement('button');btn.id='novaCategoriaBtn';btn.type='button';btn.className='secondary';btn.textContent='＋ Nova categoria';btn.style.cssText='margin-top:8px;width:100%;min-height:44px;font-size:15px';wrap.appendChild(btn)}
btn.onclick=()=>{let nome=prompt('Nome da nova categoria:');nome=(nome||'').trim();if(!nome)return;if(nome.length>40)return alert('Use um nome de até 40 caracteres.');const a=ler();if(!FIXAS.includes(nome)&&!a.includes(nome)){a.push(nome);salvar(a)}add(nome);cat.value=nome;cat.dispatchEvent(new Event('change',{bubbles:true}));window.dispatchEvent(new CustomEvent('categoriaGastoCriada',{detail:{nome}}))};
})();