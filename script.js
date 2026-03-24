
document.addEventListener('DOMContentLoaded', () => {
    
    const btnTema = document.getElementById('theme-toggle');
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const formulario = document.getElementById('contactForm');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
        } else {
            alert("Obrigada, " + nome + "! Sua mensagem foi enviada.");
            formulario.reset(); 
        }
    });
});
