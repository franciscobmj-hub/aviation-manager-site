(() => {
  const page = document.body.dataset.page || '';
  const cfg = window.AVIATION_MANAGER_CONFIG || {};
  const isEn = document.documentElement.lang.toLowerCase().startsWith('en');
  const prefix = isEn ? '../' : '';
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');

  const copy = isEn ? {
    home:'Home', features:'Features', schedule:'Scheduling', reviews:'Inspections',
    integrations:'Integrations', contact:'Contact', access:'Log in',
    discover:'Discover Aviation Manager', mainNav:'Main navigation',
    menu:'Open menu', homeAria:'Aviation Manager - home',
    product:'Product', operation:'Operations', institutional:'Company',
    costs:'Costs and reports', maintenance:'Maintenance',
    aircraft:'Aircraft management', app:'Access application',
    terms:'Terms of Use', privacy:'Privacy Policy', security:'Security',
    footerText:'Operational management built for executive aviation, focused on organization, control and efficiency.',
    rights:'All rights reserved.', footerTag:'Plan · Operate · Organize · Fly'
  } : {
    home:'Início', features:'Funcionalidades', schedule:'Agendamento', reviews:'Revisões',
    integrations:'Integrações', contact:'Contato', access:'Entrar',
    discover:'Conhecer o Aviation Manager', mainNav:'Navegação principal',
    menu:'Abrir menu', homeAria:'Aviation Manager - início',
    product:'Produto', operation:'Operação', institutional:'Institucional',
    costs:'Custos e relatórios', maintenance:'Manutenção',
    aircraft:'Administração de aeronaves', app:'Acessar aplicativo',
    terms:'Termos de Uso', privacy:'Política de Privacidade', security:'Segurança',
    footerText:'Gestão operacional criada para a rotina da aviação executiva, com foco em organização, controle e eficiência.',
    rights:'Todos os direitos reservados.', footerTag:'Planeje · Opere · Organize · Voe'
  };

  const nav = [
    ['index.html',copy.home,'home'],
    ['funcionalidades.html',copy.features,'features'],
    ['agendamento.html',copy.schedule,'schedule'],
    ['revisoes.html',copy.reviews,'reviews'],
    ['integracoes.html',copy.integrations,'integrations'],
    ['contato.html',copy.contact,'contact']
  ];

  const currentFile = (location.pathname.split('/').pop() || 'index.html');
  const ptHref = isEn ? `../${currentFile}` : currentFile;
  const enHref = isEn ? currentFile : `en/${currentFile}`;

  if (header) {
    header.innerHTML = `<header class="site-header"><div class="container header-inner">
      <a class="brand" href="index.html" aria-label="${copy.homeAria}">
        <img src="${prefix}assets/logo-blue.webp" alt="Aviation Manager">
        <span class="brand-copy"><strong>AVIATION MANAGER</strong><span>MORE THAN A SCHEDULE.</span></span>
      </a>
      <nav class="nav" aria-label="${copy.mainNav}">${nav.map(([href,label,key])=>`<a href="${href}" class="${page===key?'active':''}">${label}</a>`).join('')}</nav>
      <div class="lang-switch" aria-label="Language">
        <a href="${ptHref}" class="${!isEn?'active':''}" lang="pt-BR" hreflang="pt-BR">PT</a>
        <span aria-hidden="true">|</span>
        <a href="${enHref}" class="${isEn?'active':''}" lang="en" hreflang="en">EN</a>
      </div>
      <div class="header-actions"><a class="btn btn-ghost" href="acesso.html">${copy.access}</a><a class="btn btn-primary" href="contato.html">${copy.discover}</a></div>
      <button class="menu-toggle" aria-label="${copy.menu}" aria-expanded="false">☰</button>
    </div></header>`;
    const h = header.querySelector('.site-header');
    const t = header.querySelector('.menu-toggle');
    t?.addEventListener('click',()=>{h.classList.toggle('open');t.setAttribute('aria-expanded',h.classList.contains('open')?'true':'false')});
  }

  if (footer) {
    footer.innerHTML = `<footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div class="footer-brand"><div class="brand"><img src="${prefix}assets/logo-blue.webp" alt="Aviation Manager"><span class="brand-copy"><strong>AVIATION MANAGER</strong><span>MORE THAN A SCHEDULE.</span></span></div><p>${copy.footerText}</p></div>
        <div class="footer-col"><h4>${copy.product}</h4><a href="funcionalidades.html">${copy.features}</a><a href="agendamento.html">${copy.schedule}</a><a href="revisoes.html">${copy.reviews}</a><a href="custos-relatorios.html">${copy.costs}</a></div>
        <div class="footer-col"><h4>${copy.operation}</h4><a href="manutencao.html">${copy.maintenance}</a><a href="integracoes.html">${copy.integrations}</a><a href="administracao-aeronaves.html">${copy.aircraft}</a><a href="acesso.html">${copy.app}</a></div>
        <div class="footer-col"><h4>${copy.institutional}</h4><a href="contato.html">${copy.contact}</a><a href="termos.html">${copy.terms}</a><a href="privacidade.html">${copy.privacy}</a><a href="seguranca.html">${copy.security}</a></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Aviation Manager. ${copy.rights}</span><span>${copy.footerTag}</span></div>
    </div></footer>`;
  }

  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const key=btn.dataset.filter;document.querySelectorAll('[data-feature-card]').forEach(card=>{card.style.display=(key==='all'||card.dataset.featureCard.includes(key))?'block':'none'});
  }));
  document.querySelectorAll('[data-app-link]').forEach(a=>{if(cfg.appUrl){a.href=cfg.appUrl;a.removeAttribute('aria-disabled')}else{a.href='acesso.html'}});
  document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('nome')||'';
    const email=data.get('email')||'';
    const company=data.get('empresa')||'';
    const msg=data.get('mensagem')||'';
    const subject=isEn?`Aviation Manager Contact - ${name}`:`Contato Aviation Manager - ${name}`;
    const body=isEn
      ?`Name: ${name}\nEmail: ${email}\nCompany / operation: ${company || 'Not provided'}\n\nMessage:\n${msg}`
      :`Nome: ${name}\nE-mail: ${email}\nEmpresa / operação: ${company || 'Não informado'}\n\nMensagem:\n${msg}`;
    if(cfg.contactEmail){
      window.location.href=`mailto:${encodeURIComponent(cfg.contactEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    const text=`${subject}\n${body}`;
    try{
      await navigator.clipboard.writeText(text);
      showToast(isEn?'Message copied to the clipboard.':'Mensagem copiada para a área de transferência.');
    }catch{
      showToast(isEn?'Unable to prepare the message. Please try again.':'Não foi possível preparar a mensagem. Tente novamente.');
    }
  }));
  function showToast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4200)}
})();
