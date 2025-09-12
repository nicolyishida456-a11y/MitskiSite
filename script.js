// Rolagem suave para links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mensagem no console ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site da Mitski carregado com sucesso!");
});
