#  Plataforma de ONGs - Projeto Final de Front-End

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)

Este é o projeto final da disciplina de Desenvolvimento Front-End, focado na criação de uma plataforma web completa, responsiva e acessível para Organizações Não Governamentais (ONGs).

## 1. Contexto do Projeto

Este repositório documenta a evolução do projeto ao longo de quatro entregas práticas (I, II, III e IV), aplicando de forma incremental os conceitos da disciplina:

* **Entrega I:** Estruturação com HTML5 Semântico.
* **Entrega II:** Estilização com CSS3, Design System e Layouts Responsivos.
* **Entrega III:** Interatividade com JavaScript (Validação de Forms, Templates JS e SPA Básico).
* **Entrega IV:** Práticas profissionais (Acessibilidade, Versionamento e Documentação).

## 2. Funcionalidades Principais (Features)

* **Design 100% Responsivo:** Adaptável a celulares, tablets e desktops (Mobile-First).
* **Carregamento Dinâmico de Conteúdo:** Os projetos e o menu de navegação são carregados dinamicamente a partir de um "banco de dados" (`database.js`), simulando uma SPA.
* **Validação Avançada de Formulários:** Validação em tempo real (client-side) para campos como CPF, e-mail e campos obrigatórios.
* **Acessibilidade (WCAG 2.1):**
    * **Modo Escuro / Alto Contraste:** Um alternador de tema que salva a preferência do usuário no `LocalStorage`.
    * **Navegação por Teclado:** Totalmente navegável usando `Tab` e `Enter`.
    * **Suporte a Leitores de Tela:** Uso correto de HTML semântico e atributos `aria-label`.

## 3. Tecnologias Utilizadas

* **HTML5:** Estruturação semântica (`<main>`, `<header>`, `<nav>`, `<article>`).
* **CSS3:**
    * Design System completo com Variáveis CSS (Cores, Fontes, Espaçamento).
    * Layouts modernos com **CSS Grid** (para o layout principal) e **Flexbox** (para componentes).
    * Arquitetura CSS modular (pastas `base/`, `layout/`, `components/`).
* **JavaScript (ES6+):**
    * Manipulação do DOM para interatividade.
    * Eventos (`click`, `submit`, `input`).
    * Funções Assíncronas (embora substituídas pelo `database.js` para garantir compatibilidade local).
    * `LocalStorage` para persistência de dados (tema).
* **Git & GitHub:**
    * Controle de versão e estratégia de *Branching* (`feature/`, `entrega-2`, `entrega-3`).

## 4. Como Executar o Projeto

O projeto é 100% estático (front-end puro) e não requer um servidor ou dependências.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/](https://github.com/)[pedro-tavares-dev]/projeto-ong-faculdade.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd projeto-ong-faculdade
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

## 5. Cumprindo os Requisitos da Entrega IV

Esta seção documenta como os requisitos específicos da Entrega IV foram atendidos.

### A. Controle de Versão (GitFlow)

* **Estratégia de Branching:** O projeto seguiu uma estratégia de branches para isolar o desenvolvimento de cada entrega. A branch `main` contém a Entrega I, e as branches `entrega-2`, `entrega-3` e `feature/acessibilidade-e-deploy` contêm as evoluções subsequentes.
* **Commits Semânticos:** O histórico de commits foi organizado com mensagens claras (ex: "Finaliza Entrega III - JS, Validação e Templates", "Correção: bugs do header e dropdown").
* *(O uso de Issues e Pull Requests será simulado na etapa final de merge no GitHub).*

### B. Acessibilidade (WCAG 2.1 Nível AA)

* **Navegação por Teclado:** Todos os componentes interativos (menu, dropdowns, botões, inputs de formulário) são acessíveis e funcionais usando apenas o teclado.
* **Contraste e Modos de Cor:** O projeto implementa um **Modo Escuro** que também serve como modo de alto contraste. As cores do Design System foram escolhidas para garantir um contraste mínimo de 4.5:1.
* **Leitores de Tela:** Foram usados atributos `aria-label` para botões de ícone (como o menu hambúrguer e o seletor de tema) e HTML semântico para estruturar o conteúdo.

### C. Otimização para Produção

* **Minificação (Planejamento):** O código está estruturado para ser facilmente "minificado" em um ambiente de produção. O uso de `@import` no `main.css` permite que ferramentas de *build* (como Vite ou Webpack) concatenem todo o CSS em um único arquivo otimizado.
* **Compressão de Imagens:** As imagens utilizadas no projeto (JPGs) foram comprimidas para balancear qualidade e tempo de carregamento.
* **Código Modular:** O JavaScript é dividido em arquivos (`main.js`, `database.js`, `formValidator.js`, `projetos.js`) e carregado apenas nas páginas necessárias, reduzindo o *parsing* inicial.

## 6. Autor

Desenvolvido por **João Pedro Tavares dos Santos** como projeto final da disciplina de Desenvolvimento Front-End.