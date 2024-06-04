const names = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Elena', 'Fernando']; // Agrega más nombres según necesites
const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#33FF57', '#3380FF', '#E433FF']; // Colores de los segmentos

document.getElementById('spinButton').addEventListener('click', function() {
    const audio = new Audio('spin-sound.mp3');
    audio.play();
    let degrees = Math.floor(Math.random() * 360) + 1800;
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${degrees}deg)`;
});

window.onload = function() {
    const wheel = document.getElementById('wheel');
    for (let i = 0; i < names.length; i++) {
        const angle = 360 / names.length * i;
        const segment = document.createElement('div');
        segment.className = 'segment';
        segment.style.backgroundColor = colors[i % colors.length];
        segment.style.transform = `rotate(${angle}deg)`;
        segment.textContent = names[i];
        wheel.appendChild(segment);
    }
};

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
