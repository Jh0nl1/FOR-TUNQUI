const title = document.querySelector('.title');
const text = ['I', 'Have', 'Something', 'For', 'You'];

// Usamos spans y añadimos un pequeño espacio después de cada palabra
title.innerHTML = text.map(word => `<span class="word">${word}</span>`).join(' ');

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element, index) => {
  const randomDelay = Math.random() * 3; // Genera un delay aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});

document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("bg-music");

    // Intenta reproducir la música automáticamente
    music.play().catch(() => {
        console.log("La reproducción automática fue bloqueada. Esperando interacción del usuario.");
    });

    // Si el usuario hace clic en cualquier parte de la pantalla, inicia la música
    document.body.addEventListener("click", function() {
        if (music.paused) {
            music.play();
        }
    });
});