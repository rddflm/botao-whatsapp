document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("whatsapp-button");
  const form = document.getElementById("whatsapp-form");

  // Move os elementos para o <body>
  document.body.appendChild(button);
  document.body.appendChild(form);

  const enviar = document.getElementById("enviarWhatsApp");

  button.addEventListener("click", function () {
    form.style.display = form.style.display === "block" ? "none" : "block";
  });

  enviar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const assunto = document.getElementById("assunto").value;

    if (!nome || !email || !telefone || !assunto) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const mensagem = `Olá! Meu nome é ${nome}, meu e-mail é ${email}, meu telefone é ${telefone}, e estou entrando em contato sobre: ${assunto}.`;
    const url = `https://wa.me/5511972615522?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });
});
