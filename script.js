document.getElementById('spinButton').addEventListener('click', function() {
    const audio = new Audio('spin-sound.mp3'); // Asegúrate de usar el nombre correcto del archivo de sonido
    audio.play();

    fetch('noms.txt')
        .then(response => response.text())
        .then(data => {
            const names = data.split('\n');
            const randomIndex = Math.floor(Math.random() * names.length);
            const nameContainer = document.getElementById('resultName');
            nameContainer.textContent = names[randomIndex];
            nameContainer.style.animation = 'spin 2s linear';
            setTimeout(() => nameContainer.style.animation = 'none', 2000); // Elimina la animación después de ejecutarse
        })
        .catch(error => console.error('Error loading the names:', error));
});

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
