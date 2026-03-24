document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Validação de Formato de E-mail (RegEx)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        enviarSucesso();
    });

    function enviarSucesso() {
        alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");

        contactForm.reset();
    }

    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if(document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
            themeBtn.textContent = "Modo Claro";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#333";
            themeBtn.textContent = "Modo Escuro";
        }
    });
});
