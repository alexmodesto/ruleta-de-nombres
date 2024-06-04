const ruleta = document.querySelector('#ruleta');
const nombres = [];

// Carga de nombres desde el archivo
fetch('nombres.txt')
  .then(response => response.text())
  .then(data => {
    nombres.push(...data.split('\n'));
  });

ruleta.addEventListener('click', girar);

function girar() {
    let rand = Math.random() * 9200;
    calcular(rand);
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    ruleta.style.transform = "rotate(" + rand + "deg)";
}

function premio() {
    const premioIndex = Math.floor(Math.random() * nombres.length);
    const premioNombre = nombres[premioIndex];
    document.querySelector('.elije').innerHTML = 'La persona es: ' + premioNombre;
}

function calcular(rand) {
    setTimeout(() => {
        premio();
    }, 5000); // Espera 5 segundos antes de mostrar el nombre
}
