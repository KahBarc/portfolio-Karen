
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm');
    const btnTema = document.getElementById('theme-toggle');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Por favor, preencha todos os campos antes de enviar.");
            return; 
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Erro: Por favor, insira um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso, " + nome + "! Entrarei em contato em breve.");
        formulario.reset(); // Limpa todos os campos
    });

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            btnTema.textContent = "Modo Claro";
        } else {
            btnTema.textContent = "Modo Escuro";
        }
    });
});
