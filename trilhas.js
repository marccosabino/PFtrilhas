// Script para menu mobile
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
 const navLinksMobile = mobileMenu.querySelectorAll('a');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuButton.parentElement.parentElement.classList.toggle('menu-open'); // Adiciona/remove classe no header para estilizar o ícone
});

// Fecha o menu mobile ao clicar em um link
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.parentElement.parentElement.classList.remove('menu-open');
});
});

// Script para o ano atual no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll para links da navegação principal (desktop)
const navLinksDesktop = document.querySelectorAll('header nav a');
navLinksDesktop.forEach(link => {
link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    // Apenas previne o padrão se for um link interno da página
    if (targetId.startsWith('#')) {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Calcula o offset do header fixo
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
                });
            }
        }
    });
});
// Smooth scroll para links da navegação mobile
navLinksMobile.forEach(link => {
link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
        if (targetElement) {
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
               });
            // Fecha o menu após o clique
            mobileMenu.classList.add('hidden');
            menuButton.parentElement.parentElement.classList.remove('menu-open');
            }
        }
    });
});