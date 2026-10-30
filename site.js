(() => {
  const cfg = window.INVENTORELAB_CONFIG || {};
  const price = Number(cfg.preco ?? 79.90).toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
  document.querySelectorAll('[data-price]').forEach(el => {el.textContent = price + (el.classList.contains('lp-sticky-cta-price') ? ' →' : '');});
  const valid = v => {try { return ['https:','http:'].includes(new URL(v).protocol); } catch { return false; }};
  const notice = document.createElement('dialog');
  notice.className='checkout-notice';
  notice.innerHTML='<h2>Pagamento ainda não disponível</h2><p>As vendas serão abertas em breve. Volte mais tarde.</p><button type="button">Entendi</button>';
  document.body.append(notice);
  notice.querySelector('button').addEventListener('click', () => notice.close());
  document.querySelectorAll('[data-checkout]').forEach(el => {
    const link = el.dataset.checkout === 'promocional' ? cfg.checkoutPromocional : cfg.checkoutPrincipal;
    if (el.tagName==='A') {el.href=valid(link)?link:'#';el.removeAttribute('target');}
    el.addEventListener('click', e => {
      if (!valid(link)) {e.preventDefault(); notice.showModal(); return;}
      if (el.tagName!=='A') window.location.assign(link);
    });
  });
  document.querySelectorAll('[data-support]').forEach(el => {
    if (cfg.emailSuporte) {el.textContent=cfg.emailSuporte;el.href='mailto:'+cfg.emailSuporte;}
    else {el.textContent='Use o contato de suporte informado no comprovante da compra.';el.removeAttribute('href');}
  });
  document.querySelectorAll('[data-seller]').forEach(el => {el.textContent=cfg.nomeVendedor || 'InventoreLab';});
  document.querySelectorAll('[data-document]').forEach(el => {el.textContent=cfg.documentoVendedor || '';});
  document.querySelectorAll('.lp-faq-item').forEach(item=>{const q=item.querySelector('.lp-faq-q');if(!q)return;q.setAttribute('role','button');q.setAttribute('tabindex','0');const update=()=>q.setAttribute('aria-expanded',item.classList.contains('is-open')?'true':'false');update();new MutationObserver(update).observe(item,{attributes:true,attributeFilter:['class']});});
  const sticky=document.querySelector('.lp-sticky');
  if(sticky){const update=()=>sticky.classList.toggle('is-visible',scrollY>420);update();addEventListener('scroll',update,{passive:true});}
  const deadline=Date.parse(cfg.fimDaOferta || '');
  const clocks=[document.getElementById('inline-timer'),document.getElementById('sticky-timer')].filter(Boolean);
  if(Number.isFinite(deadline)) {
    const tick=()=>{const s=Math.max(0,Math.floor((deadline-Date.now())/1000));const d=Math.floor(s/86400);const h=Math.floor(s%86400/3600);const m=Math.floor(s%3600/60);const ss=s%60;clocks.forEach(el=>el.textContent=(d?d+'d ':'')+(h?String(h).padStart(2,'0')+':':'')+String(m).padStart(2,'0')+':'+String(ss).padStart(2,'0'));};tick();setInterval(tick,1000);
  } else {
    clocks.forEach(el=>{el.textContent='Oferta de lançamento';});
    const urgency=document.querySelector('.lp-sticky-urgency');if(urgency)urgency.hidden=true;
    const inline=document.getElementById('inline-timer');if(inline){const parent=inline.parentElement;parent.querySelectorAll('.lp-timer-label').forEach(el=>el.textContent='Conheça a coleção completa');parent.querySelectorAll('p').forEach(el=>el.textContent='80 projetos e cinco bônus para construir em família.');}
  }
  const modal=document.getElementById('downsell-exit-modal');
  const close=()=>{if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}};
  if(modal){modal.setAttribute('aria-hidden','true');document.getElementById('downsell-modal-dismiss')?.addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close();});addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
  let shown=false;
  addEventListener('mouseout',e=>{
    if(!modal || !valid(cfg.checkoutPromocional) || shown || e.relatedTarget || e.clientY>0)return;
    try {if(sessionStorage.getItem('inventorelab-offer-seen'))return;sessionStorage.setItem('inventorelab-offer-seen','1');} catch{}
    shown=true;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.getElementById('downsell-modal-dismiss')?.focus();
  });
})();
