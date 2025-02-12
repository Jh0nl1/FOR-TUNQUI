
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Definir el texto con saltos de línea
    const titles = "HAPPY BIRTHDAY, HONEY!<br>Miss Tunqui";
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        if (titles[index] === "<") {
          // Si detecta un tag de HTML (como <br>), agrégalo de una vez
          let endIndex = titles.indexOf(">", index);
          titleElement.innerHTML += titles.substring(index, endIndex + 1);
          index = endIndex + 1;
        } else {
          // Añade letra por letra con animación
          titleElement.innerHTML += titles[index];
          index++;
        }
        setTimeout(appendTitle, 300); // Velocidad de la animación
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
