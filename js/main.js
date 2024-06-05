document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var names = document.getElementById('names').value.split('\n');
  
  document.getElementById('spin').addEventListener('click', function() {
      var randomIndex = Math.floor(Math.random() * names.length);
      alert("Seleccionado: " + names[randomIndex]);  // This will display the selected name
  });

  // Add drawing logic for the roulette wheel here if needed
});
