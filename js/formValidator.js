/* js/formValidator.js */

// Espera todo o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona o formulário pelo ID que criamos
    const form = document.getElementById('form-cadastro');

    // Se o formulário não existir nesta página, não faz nada
    if (!form) {
        return;
    }

    // 2. Encontra todos os inputs que queremos validar
    const inputs = form.querySelectorAll('input[required]');

    // 3. Função para MOSTRAR o erro (Manipulação do DOM)
    function showError(input, message) {
        // Encontra o 'pai' (o .form-group)
        const formGroup = input.closest('.form-group');
        // Encontra o elemento de mensagem de erro que criamos no HTML
        const errorMessage = formGroup.querySelector('.form-error-message');

        // Adiciona a mensagem e a classe de erro
        errorMessage.textContent = message;
        formGroup.classList.add('error');
    }

    // 4. Função para LIMPAR o erro (Manipulação do DOM)
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.form-error-message');

        // Limpa a mensagem e remove a classe de erro
        errorMessage.textContent = '';
        formGroup.classList.remove('error');
    }

    // 5. Função de VALIDAÇÃO (A Lógica)
    function validateInput(input) {
        const value = input.value.trim();
        const id = input.id;
        let isValid = true; // Começa como válido

        // Validação de campos genéricos (só verifica se não está vazio)
        if (value === '') {
            showError(input, 'Este campo é obrigatório.');
            return false;
        }

        // Validações Específicas
        switch (id) {
            case 'nome':
                if (value.split(' ').length < 2) {
                    showError(input, 'Por favor, digite seu nome completo.');
                    isValid = false;
                }
                break;
            
            case 'email':
                // Regex simples para formato de email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showError(input, 'Por favor, digite um e-mail válido.');
                    isValid = false;
                }
                break;

            case 'cpf':
                // Regex para o formato XXX.XXX.XXX-XX
                const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
                if (!cpfRegex.test(value)) {
                    showError(input, 'Formato inválido. Use XXX.XXX.XXX-XX');
                    isValid = false;
                }
                break;

            case 'cep':
                // Regex para o formato XXXXX-XXX
                const cepRegex = /^\d{5}-\d{3}$/;
                if (!cepRegex.test(value)) {
                    showError(input, 'Formato inválido. Use XXXXX-XXX');
                    isValid = false;
                }
                break;
            
            // Adicione outros 'case' se precisar (telefone, data, etc.)
        }

        // Se passou em todas as verificações, limpa o erro
        if (isValid) {
            clearError(input);
        }
        
        return isValid;
    }

    // 6. Adiciona os "Ouvintes de Eventos"
    
    // Evento de SUBMIT (Envio do Formulário)
    form.addEventListener('submit', (event) => {
        // Impede o envio do formulário
        event.preventDefault();

        let isFormValid = true;
        // Valida TODOS os campos de uma vez
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        // Se tudo estiver OK, pode enviar
        if (isFormValid) {
            // Requisito: "aviso ao usuário"
            alert('Formulário enviado com sucesso!');
            // Numa aplicação real, aqui você enviaria os dados:
            // form.submit();
        } else {
            alert('Por favor, corrija os erros destacados no formulário.');
        }
    });

    // Evento de INPUT (Validação em tempo real)
    // Para cada input, adiciona um "ouvinte" que dispara a validação
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            // Valida o campo específico que o usuário está digitando
            validateInput(input);
        });
    });

});