/* js/main.js */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA ANTIGA (Menu Hambúrguer) ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('is-active');
            
            if (mainNav.classList.contains('is-active')) {
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }
    
    // --- NOSSA NOVA LÓGICA (Dropdown Dinâmico) ---
    
    /**
     * Esta função assíncrona busca os projetos e preenche o dropdown.
     */
    async function carregarDropdownProjetos() {
        
        // 1. Encontra o menu-alvo pelo ID que criamos
        const dropdownMenu = document.getElementById('dropdown-projetos');

        // Se a página não tiver esse menu, não faz nada
        if (!dropdownMenu) {
            return;
        }

        try {
            // 2. Busca os dados (igual fizemos no projetos.js)
            const response = await fetch('data/projetos.json');
            if (!response.ok) {
                throw new Error('Falha ao carregar projetos');
            }
            const projetos = await response.json();

            // 3. Cria o HTML dos links
            // Usamos .map() para criar um <li> para cada projeto
            const htmlLinks = projetos.map(projeto => {
                // Usamos o mesmo link do card
                return `<li><a href="projeto-detalhe.html?id=${projeto.id}">${projeto.titulo}</a></li>`;
            }).join(''); // Junta tudo em uma string só

            // 4. Insere o HTML no menu
            // Adicionamos os links dos projetos + um link fixo de "Ver Todos"
            dropdownMenu.innerHTML = htmlLinks + '<li><a href="projetos.html">Ver Todos</a></li>';

        } catch (error) {
            // Se falhar, coloca um link de fallback
            console.error('Erro ao carregar dropdown:', error);
            dropdownMenu.innerHTML = '<li><a href="projetos.html">Ver Projetos</a></li>';
        }
    }

    // 5. Roda a nova função em todas as páginas
    carregarDropdownProjetos();

});