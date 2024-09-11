// Função para validar e enviar formulários
function validateForm(form) {
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return valid;
}

// Adiciona um ouvinte de evento a todos os formulários
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            // Se o formulário for válido, mostra uma mensagem de confirmação
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa os campos do formulário
        } else {
            // Se o formulário não for válido, mostra uma mensagem de erro
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});

// Adiciona animações e efeitos de rolagem
document.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
            el.classList.add('visible');
        }
    });
});
