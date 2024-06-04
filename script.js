document.getElementById('spinButton').addEventListener('click', function() {
    const audio = new Audio('spin-sound.mp3'); // Asegúrate de usar el nombre correcto del archivo de sonido
    audio.play();

    let degrees = Math.floor(Math.random() * 360) + 1440; // Giro aleatorio + múltiples vueltas
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${degrees}deg)`;
});

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
