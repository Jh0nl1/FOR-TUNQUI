const title = document.querySelector('.title');
const text = ['I', 'Have', 'Something', 'For', 'You'];

// Usamos spans y añadimos un pequeño espacio después de cada palabra
title.innerHTML = text.map(word => `<span class="word">${word}</span>`).join(' ');

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element, index) => {
  const randomDelay = Math.random() * 3; // Genera un delay aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
