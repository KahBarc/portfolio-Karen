document.addEventListener("DOMContentLoaded", () => {
  const formContato = document.getElementById("form-contato");

  if (formContato) {
    formContato.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }
      formContato.reset();

      alert(
        "✨ Mensagem enviada com sucesso! Entrarei em contato em breve. ✨",
      );

      console.log("Simulação de envio realizada:", { nome, email, mensagem });
    });
  }
});
