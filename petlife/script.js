var elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

// Selecione o link "Clínica" no seu header
const linkClinica = document.querySelector('header a[href="#clinica"]');

// Adicione um ouvinte de evento de clique a esse link
linkClinica.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Use a função scrollTo para rolar suavemente para a seção Clínica
  window.scrollTo({
    top: document.getElementById("clinica").offsetTop,
    behavior: "smooth",
  });
});
