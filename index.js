// Configuración inicial de sectores
const wheelSectors = [
  { color: "#e6194B", text: "#333", name: "Santiago" },
  { color: "#3cb44b", text: "#333", name: "Valentina" },
  { color: "#ffe119", text: "#333", name: "Mateo" },
  { color: "#4363d8", text: "#333", name: "Camila" },
  { color: "#f58231", text: "#333", name: "Sebastián" },
  { color: "#911eb4", text: "#333", name: "Isabella" },
  { color: "#46f0f0", text: "#333", name: "Andrés" },
  { color: "#f032e6", text: "#333", name: "Sofía" },
];

// Sistema de eventos simplificado
class EventSystem {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  publish(event, args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(args));
    }
  }
}

// Utilidades
const randomBetween = (min, max) => Math.random() * (max - min) + min;
const totalSectors = wheelSectors.length;
const button = document.querySelector("#spin_button");
const canvasContext = document.querySelector("#prize_wheel").getContext("2d");
const diameter = canvasContext.canvas.width;
const radius = diameter / 2;
const fullCircle = Math.PI * 2;
const sliceAngle = fullCircle / totalSectors;

let rotationalVelocity = 0;
let currentAngle = 0;
let buttonClicked = false;  // Añadir esta línea

const getCurrentSector = () => Math.floor(totalSectors - (currentAngle / fullCircle) * totalSectors) % totalSectors;

// Dibujo de sectores
function paintSector(sector, index) {
  const startAngle = sliceAngle * index;
  canvasContext.save();
  canvasContext.beginPath();
  canvasContext.fillStyle = sector.color;
  canvasContext.moveTo(radius, radius);
  canvasContext.arc(radius, radius, radius, startAngle, startAngle + sliceAngle);
  canvasContext.lineTo(radius, radius);
  canvasContext.fill();

  // Añadir texto
  canvasContext.translate(radius, radius);
  canvasContext.rotate(startAngle + sliceAngle / 2);
  canvasContext.textAlign = "right";
  canvasContext.fillStyle = sector.text;
  canvasContext.font = "bold 30px 'Lato', sans-serif";
  canvasContext.fillText(sector.name, radius - 10, 10);
  canvasContext.restore();
}

// Funciones para animación
function updateRotation() {
  const sector = wheelSectors[getCurrentSector()];
  canvasContext.canvas.style.transform = `rotate(${currentAngle - Math.PI / 2}rad)`;
  button.textContent = rotationalVelocity ? sector.name : "GIRAR";
  button.style.background = sector.color;
  button.style.color = sector.text;
}

function animate() {
  if (!rotationalVelocity && buttonClicked) {
    const finalSector = wheelSectors[getCurrentSector()];
    eventManager.publish("spinFinished", finalSector);
    buttonClicked = false;
    return;
  }

  rotationalVelocity *= 0.995;
  if (rotationalVelocity < 0.001) rotationalVelocity = 0;
  currentAngle += rotationalVelocity;
  currentAngle %= fullCircle;
  updateRotation();
}

function startAnimation() {
  animate();
  requestAnimationFrame(startAnimation);
}

function initializeGame() {
  wheelSectors.forEach(paintSector);
  updateRotation();
  startAnimation();
  button.addEventListener("click", () => {
    if (!rotationalVelocity) rotationalVelocity = randomBetween(0.25, 0.45);
    buttonClicked = true;
  });
}

const eventManager = new EventSystem();
eventManager.subscribe("spinFinished", (sector) => {
  console.log(`¡Felicidades! Ganaste ${sector.name}`);
});

initializeGame();
