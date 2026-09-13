(()=>{if(window.__categoriaTouchFixV1)return;window.__categoriaTouchFixV1=true;
const cat=document.getElementById('cat');if(!cat)return;
const wrap=cat.parentElement;if(wrap)wrap.classList.add('categoria-touch-wrap');
const st=document.createElement('style');st.textContent=`
#cat{min-height:60px!important;height:60px!important;font-size:18px!important;padding:0 18px!important;position:relative!important;z-index:20!important;touch-action:manipulation!important;-webkit-tap-highlight-color:transparent!important;background-color:#fff!important;cursor:pointer!important}
.categoria-touch-wrap{position:relative!important;z-index:20!important}
.categoria-touch-wrap label{display:block!important;margin-bottom:6px!important;pointer-events:none!important}
@media(max-width:650px){.categoria-touch-wrap{grid-column:1/-1!important}.categoria-touch-wrap #cat{width:100%!important;min-height:64px!important;height:64px!important;font-size:19px!important}}
`;document.head.appendChild(st);
})();