/* js/projetos.js */

// Espera todo o HTML da página carregar (Boa prática)
document.addEventListener('DOMContentLoaded', () => {

    // 1. ONDE O CONTEÚDO VAI ENTRAR?
    // Selecionamos o <div id="container-projetos"> que deixamos no HTML
    const container = document.getElementById('container-projetos');

    // Se o <div R> não existir nesta página, o script para.
    // Isso evita erros nas outras páginas (index.html, cadastro.html)
    if (!container) {
        return;
    }

    /**
     * 2. O TEMPLATE JAVASCRIPT (Requisito Central da Entrega III)
     * * Esta é a função "molde". É o "sistema de template".
     * Ela recebe UM objeto 'projeto' e retorna UMA string de HTML.
     * Usamos "template literals" (o ` ` com crase) para construir o HTML.
     */
    function criarCardProjeto(projeto) {
        // Desestruturação de objeto: pegamos os dados de 'projeto'
        const { id, titulo, descricao, imagem, badge } = projeto;

        // Retorna o HTML do card preenchido com os dados
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <img src="${imagem}" alt="${titulo}" class="card-img">
                    <div class="card-body">
                        <span class="badge ${badge.classe}">${badge.texto}</span>
                        <h3 class="card-title">${titulo}</h3>
                        <p class="card-text">${descricao}</p>
                        
                        <a href="projeto-detalhe.html?id=${id}" class="btn btn-outline">Saiba Mais</a>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 3. A FUNÇÃO PRINCIPAL (SPA Básico)
     * * Esta função assíncrona (async) vai:
     * 1. Buscar (fetch) os dados do nosso "banco de dados" projetos.json
     * 2. Converter os dados para JavaScript
     * 3. Usar o "template" para renderizar os cards na tela
     */
    async function carregarProjetos() {
        try {
            // 1. Busca os dados no arquivo JSON
            const response = await fetch('data/projetos.json');

            // 2. Verifica se a busca deu certo
            if (!response.ok) {
                throw new Error(`Erro na rede: ${response.statusText}`);
            }

            // 3. Converte os dados da resposta em um array de objetos JavaScript
            const projetos = await response.json();

            // 4. Verifica se o array de projetos está vazio
            if (projetos.length === 0) {
                container.innerHTML = '<p class="alert alert-info">Nenhum projeto encontrado no momento.</p>';
                return;
            }

            // 5. A MÁGICA:
            // Usamos .map() para passar CADA projeto do array pela nossa
            // função de template (o "molde").
            // No final, usamos .join('') para transformar o array de HTMLs em uma única string.
            const htmlProjetos = projetos.map(criarCardProjeto).join('');

            // 6. Inserimos a string gigante de HTML no container de uma só vez
            // (Isso é muito mais rápido do que inserir um card de cada vez)
            container.innerHTML = htmlProjetos;

        } catch (error) {
            // Se der qualquer erro (ex: arquivo não encontrado, JSON mal formatado),
            // mostramos um aviso amigável para o usuário.
            console.error('Erro ao carregar projetos:', error);
            container.innerHTML = '<p class="alert alert-danger">Não foi possível carregar os projetos. Tente novamente mais tarde.</p>';
        }
    }

    // 5. RODA TUDO
    // Chama a função principal para iniciar o processo
    carregarProjetos();

});