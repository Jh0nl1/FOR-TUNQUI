const title = document.querySelector('.title');
const text = 'I Have Something For You'.split(' ');

title.innerHTML = text.map(word => `<span>${word}</span>`).join(' '); // Une palabras con espacio

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element, index) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
