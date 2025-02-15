const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => { 
        nav.classList.remove('active');
    })
}

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("solid"); // Add solid class after scrolling 50px
    } else {
        header.classList.remove("solid"); // Remove solid class if at top
    }
});

// Sélection des éléments
const header = document.getElementById("header");
const sousNavs = document.querySelectorAll(".sous-nav");

// Fonction pour mettre à jour la couleur du fond
function updateBackgroundOnScroll() {
    const isScrolled = window.scrollY > 50; // Détecte si la page est scrollée
    sousNavs.forEach((sousNav) => {
        sousNav.style.backgroundColor = isScrolled ? "var(--color-white-high)" : "rgb(20, 20, 20)";
    });
}

// Événement de défilement pour appliquer les changements
window.addEventListener("scroll", updateBackgroundOnScroll);

// Appliquer au chargement de la page
window.addEventListener("load", updateBackgroundOnScroll);

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const selectBtn = document.querySelector('.select-btn');
    const options = document.querySelector('.options');

    selectBtn.addEventListener('click', () => {
        options.classList.toggle('open'); // Toggle the dropdown visibility
        selectBtn.classList.toggle('open'); // Rotate the icon
    });
});


const callBtn = document.getElementById("call-btn");
const modal = document.getElementById("call-modal");
const closeModal = document.getElementById("close-modal");

// Ouvre le modal
callBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Ferme le modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer le modal en cliquant à l'extérieur
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
