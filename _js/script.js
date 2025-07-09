document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade de links da navegação (ativo)
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão se o href for apenas "#"
            if (link.getAttribute('href') === "#") {
                e.preventDefault();
            }
            // Remove a classe 'ativo' de todos os links e adiciona ao clicado
            navLinksList.forEach(l => l.classList.remove('ativo'));
            link.classList.add('ativo');

            // SE o menu hambúrguer estiver ativo, fecha ele ao clicar em um link
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Funcionalidade do menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinksContainer) { // Garante que os elementos existem
        hamburgerMenu.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar FORA do menu
        document.addEventListener('click', (event) => {
            // Verifica se o clique não foi no hambúrguer e nem dentro do menu
            const isClickInsideNav = navLinksContainer.contains(event.target);
            const isClickOnHamburger = hamburgerMenu.contains(event.target);

            if (navLinksContainer.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
                navLinksContainer.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    }


    // Funcionalidade dos cards do cabeçalho (se você os tiver)
    // Se você não tiver 'header-cards-container' e 'header-card', pode remover este bloco.
    const headerCardsContainer = document.querySelector('.header-cards-container');
    const headerLeftArrow = document.querySelector('.header-left-arrow');
    const headerRightArrow = document.querySelector('.header-right-arrow');

    if (headerLeftArrow && headerRightArrow && headerCardsContainer) {
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

    document.querySelectorAll('.header-card').forEach(card => {
        card.addEventListener('click', (event) => {
            console.log(`Card do cabeçalho clicado: ${card.querySelector('.header-card-title').textContent}`);
        });
    });
});