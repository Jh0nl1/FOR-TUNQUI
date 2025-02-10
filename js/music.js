document.addEventListener("DOMContentLoaded", function () {
    if (!window.audio) {
        window.audio = new Audio("audio/musica.mp3"); // Cargar la música
        window.audio.loop = true; // Hacer que la música se repita
    }

    // Verifica si la música ya estaba sonando antes
    if (localStorage.getItem("musicPlaying") === "true") {
        window.audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }

    // Guarda el estado de reproducción para que no se reinicie
    window.audio.onplay = function () {
        localStorage.setItem("musicPlaying", "true");
    };

    window.audio.onpause = function () {
        localStorage.setItem("musicPlaying", "false");
    };
});
