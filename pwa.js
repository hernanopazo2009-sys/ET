(() => {
  const installButton = document.querySelector('#installApp');
  const installHelp = document.querySelector('#installHelp');
  let deferredPrompt = null;

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) installButton.hidden = true;

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.textContent = 'INSTALAR APP';
  });

  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      return;
    }

    const isAppleMobile = /iphone|ipad|ipod/i.test(navigator.userAgent);
    installHelp.innerHTML = isAppleMobile
      ? '<strong>No iPhone ou iPad:</strong> abra esta página no Safari, toque em <b>Compartilhar</b> e escolha <b>Adicionar à Tela de Início</b>.'
      : '<strong>Para instalar:</strong> no Chrome ou Edge, abra o menu do navegador e escolha <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.';
    installHelp.hidden = !installHelp.hidden;
    if (!installHelp.hidden) installHelp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  window.addEventListener('appinstalled', () => {
    installButton.hidden = true;
    installHelp.hidden = true;
  });
})();
