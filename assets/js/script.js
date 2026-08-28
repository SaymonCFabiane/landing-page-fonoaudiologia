// ==========================================================
// Sintia Calgarotto Fabiane — Landing Page
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Ano dinâmico no rodapé
  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // Menu mobile
  const toggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".site-header");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Aviso no console para os links que ainda precisam ser preenchidos
  const placeholders = document.querySelectorAll("[data-fill]");
  if (placeholders.length) {
    console.info(
      `[Landing Page] ${placeholders.length} botão(ões) ainda com link de placeholder (data-fill). ` +
      `Veja o README.md para saber como preencher: whatsapp, spotify, linkedin, email, lattes.`
    );
  }
});
