document.getElementById('spinButton').addEventListener('click', function() {
    fetch('noms.txt')
        .then(response => response.text())
        .then(data => {
            const names = data.split('\n');
            const randomIndex = Math.floor(Math.random() * names.length);
            document.getElementById('resultName').textContent = names[randomIndex];
        })
        .catch(error => console.error('Error loading the names:', error));
});