// Script para alternar entre os formulários
const selectElement = document.getElementById("form-select");
const sections = document.querySelectorAll(".form-section");

selectElement.addEventListener("change", function () {
  // Ocultar todos os formulários
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Mostrar o formulário correspondente
  const selectedForm = document.getElementById(selectElement.value);
  selectedForm.classList.add("active");
});

// Iniciar com o formulário de Fale Conosco visível
document.getElementById("contato").classList.add("active");
