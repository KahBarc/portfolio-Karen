/* Comentário: Espera o HTML carregar completamente */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternar Tema (Claro/Escuro)
    const btnTema = document.getElementById('theme-toggle');
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 2. Validação do Formulário de Contato
    const formulario = document.getElementById('contactForm');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verifica se os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
        } else {
            // Simulação de envio sucesso
            alert("Obrigada, " + nome + "! Sua mensagem foi enviada.");
            formulario.reset(); // Limpa o formulário
        }
    });
});
