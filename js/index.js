const title = document.querySelector('.title');
const text = ['I', 'Have', 'Something', 'For', 'You'];

// Usa un span con `white-space: pre;` para mantener los espacios entre palabras
title.innerHTML = text.map(word => `<span style="white-space: pre;">${word} </span>`).join('');

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Genera un delay aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
