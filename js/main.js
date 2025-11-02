// js/main.js

// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega os dois elementos que precisamos: o botão e o menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Verifica se os elementos existem na página
    if (menuToggle && mainNav) {
        
        // Adiciona um "ouvinte de clique" no botão
        menuToggle.addEventListener('click', function() {
            
            // Adiciona ou remove a classe '.is-active' no menu
            mainNav.classList.toggle('is-active');
            
            // Bônus: Acessibilidade (muda o 'aria-label')
            if (mainNav.classList.contains('is-active')) {
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }
});