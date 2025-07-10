document.addEventListener('DOMContentLoaded', () => {
  // --- ATIVAÇÃO DOS LINKS DO MENU ---
  const navLinksList = document.querySelectorAll('.nav-links a');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinksContainer = document.querySelector('.nav-links');

  navLinksList.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === "#") e.preventDefault();

      // Ativa o link clicado e desativa os demais
      navLinksList.forEach(l => l.classList.remove('ativo'));
      link.classList.add('ativo');

      // Fecha o menu hamburguer (em telas pequenas)
      if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    });
  });

  // --- FUNCIONALIDADE DO MENU HAMBÚRGUER ---
  if (hamburgerMenu && navLinksContainer) {
    hamburgerMenu.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (event) => {
      const clickForaMenu = !navLinksContainer.contains(event.target) && !hamburgerMenu.contains(event.target);
      if (navLinksContainer.classList.contains('active') && clickForaMenu) {
        navLinksContainer.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    });
  }

  // --- FUNCIONALIDADE OPCIONAL: CARDS DO CABEÇALHO (se existirem) ---
  const headerCardsContainer = document.querySelector('.header-cards-container');
  const headerLeftArrow = document.querySelector('.header-left-arrow');
  const headerRightArrow = document.querySelector('.header-right-arrow');

  if (headerCardsContainer && headerLeftArrow && headerRightArrow) {
    headerLeftArrow.addEventListener('click', () => {
      headerCardsContainer.scrollBy({
        left: -headerCardsContainer.offsetWidth / 2,
        behavior: 'smooth'
      });
    });

    headerRightArrow.addEventListener('click', () => {
      headerCardsContainer.scrollBy({
        left: headerCardsContainer.offsetWidth / 2,
        behavior: 'smooth'
      });
    });
  }

  // --- LOG DE CLIQUE EM CARDS DO CABEÇALHO  ---
  document.querySelectorAll('.header-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.header-card-title');
      if (title) {
        console.log(`Card clicado: ${title.textContent}`);
      }
    });
  });
});


// --- ATIVAÇÃO DO LINK CLICADO NO MENU ---

link.addEventListener('click', (e) => {
  const href = link.getAttribute('href');

  if (href === "#") {
    e.preventDefault(); 
  } else if (href.startsWith('#')) {
    navLinksList.forEach(l => l.classList.remove('ativo'));
    link.classList.add('ativo');

    if (navLinksContainer.classList.contains('active')) {
      navLinksContainer.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    }
  }
});


