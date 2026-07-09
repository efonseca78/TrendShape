/* ==========================================
   TREND SHAPE
   script.js - Versão 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Trend Shape carregado com sucesso!");

    // Atualiza automaticamente o ano do rodapé
    const footer = document.querySelector("footer p");

    if (footer) {

        const ano = new Date().getFullYear();

        footer.innerHTML =
            `© ${ano} Trend Shape<br>Impressão 3D de Alta Precisão`;

    }

    // Seleciona todos os cartões
    const cards = document.querySelectorAll(".card");

    // Deixa invisíveis antes da animação
    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";

    });

    // Observer para revelar os cartões
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => observer.observe(card));

    // Pequeno efeito no botão principal
    const botao = document.querySelector(".botao");

    if (botao) {

        botao.addEventListener("mouseenter", () => {

            botao.style.transform = "scale(1.05)";

        });

        botao.addEventListener("mouseleave", () => {

            botao.style.transform = "scale(1)";

        });

    }

});