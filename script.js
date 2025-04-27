let deferredPrompt;
const installBtn = document.getElementById('installBtn');
installBtn.style.display = 'block';
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('✅ PWA installée');
      } else {
        console.log('❌ Installation refusée');
      }
      deferredPrompt = null;
      installBtn.style.display = 'none';
    });
  });
});
