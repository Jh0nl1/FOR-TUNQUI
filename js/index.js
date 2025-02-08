const title = document.querySelector('.title');
const text = ['I', 'Have', 'Something', 'For', 'You'];

title.innerHTML = text.map(word => `<span>${word}</span>`).join(' '); // Une las palabras con un espacio

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Genera un delay aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`;
});
