onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Texto con salto de línea
    const titles = "HAPPY BIRTHDAY, HONEY!<br><span id='small-text'>Miss Tunqui</span>";  
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        if (titles[index] === "<") {
          // Si encuentra una etiqueta HTML, agrégala de una vez
          let endIndex = titles.indexOf(">", index);
          titleElement.innerHTML += titles.substring(index, endIndex + 1);
          index = endIndex + 1;
        } else {
          // Añade letra por letra con animación
          titleElement.innerHTML += titles[index];
          index++;
        }
        setTimeout(appendTitle, 300); // Velocidad de animación
      } 
    } // 🔹 Se cierra correctamente la función

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
