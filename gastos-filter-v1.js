(()=>{if(window.__gastosFilterV1)return;window.__gastosFilterV1=true;
const lista=document.getElementById('glista'),titulo=document.getElementById('gtituloLista');if(!lista||!titulo)return;
const categorias=['Gasolina','Delivery','Mercado','Saídas','🐶 Cachorros','Outros'];
const box=document.createElement('section');box.id='filtroGastosBox';box.className='card';box.style.marginTop='14px';
box.innerHTML='<label style="display:block;font-size:14px;margin-bottom:7px">Filtrar gastos</label><select id="filtroGastosCategoria" style="width:100%;min-height:46px"><option value="todos">Todos os gastos</option>'+categorias.map(c=>'<option value="'+c.replace(/"/g,'&quot;')+'">'+c+'</option>').join('')+'</select>';
titulo.parentNode.insertBefore(box,titulo);
const sel=document.getElementById('filtroGastosCategoria');
function aplicar(){const cat=sel.value;[...lista.children].forEach(item=>{if(cat==='todos'){item.style.display='';return}const txt=(item.textContent||'').trim();item.style.display=txt.startsWith(cat)?'':'none'});const vis=[...lista.children].filter(x=>x.style.display!=='none').length;let vazio=document.getElementById('filtroGastosVazio');if(!vis&&lista.children.length){if(!vazio){vazio=document.createElement('div');vazio.id='filtroGastosVazio';vazio.className='card muted';vazio.textContent='Nenhum gasto desta categoria neste mês.';lista.parentNode.insertBefore(vazio,lista.nextSibling)}}else if(vazio)vazio.remove()}
sel.addEventListener('change',aplicar);
new MutationObserver(()=>setTimeout(aplicar,0)).observe(lista,{childList:true,subtree:false});
aplicar();
})();