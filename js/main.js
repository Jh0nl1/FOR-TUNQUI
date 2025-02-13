
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleText = "HAPPY BIRTHDAY, HONEY! Miss Tunqui";
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titleText.length) {
        titleElement.innerHTML += titleText[index] === " " ? "&nbsp;" : titleText[index];
        index++;
        setTimeout(appendTitle, 300); // Reduce el delay para que sea más fluido
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};

