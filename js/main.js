/* js/main.js */
/* js/main.js */

/* --- LÓGICA DO TEMA (MODO ESCURO) --- */

// (Função Imediata para não poluir o escopo global)
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. A Chave que usamos para salvar no "HD" do navegador
    const storageKey = 'theme-preference';

    // 2. Função que aplica o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.setAttribute('aria-label', 'Alternar modo claro');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.setAttribute('aria-label', 'Alternar modo escuro');
        }
    }

    // 3. Pega a preferência salva no localStorage
    //    Se não houver, ele usa 'light' como padrão
    let preferredTheme = localStorage.getItem(storageKey) || 'light';

    // 4. Aplica o tema salvo assim que a página carrega
    applyTheme(preferredTheme);

    // 5. O "ouvinte" do clique no botão
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Inverte o tema atual
            preferredTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            
            // Salva a nova preferência no localStorage
            localStorage.setItem(storageKey, preferredTheme);
            
            // Aplica a mudança na tela
            applyTheme(preferredTheme);
        });
    }
})();


/* --- RESTO DO SEU main.js --- */
// (O seu DOMContentLoaded com o menu hambúrguer e dropdown vem aqui embaixo)
document.addEventListener('DOMContentLoaded', function() {
    
    // ... (seu código de menu hambúrguer) ...
    
    // ... (seu código de dropdown dinâmico) ...

});

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