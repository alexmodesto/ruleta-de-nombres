
let listOfNames = ["Alisa","Amanda","Ana G.","Ana l.","Angie","Clau","Daniela R.","Daniela T.","Eliana","Flor","Gaby","Leo","Inga","Pepi","Maria Laura","Marta","Nicole","Olga","Yeraldin","Ranju","Rosangely","Sonia","Taiza","Yasmin"];
let misegundoArray = [];
const botonhtml = document.getElementById("boton");

function showChosenNames() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    for (let i=0; i<misegundoArray.length; i++) {
        list.insertAdjacentHTML("beforeend","<li>" + misegundoArray[i] + "</li>");
    }
}

function changeName() {
    const random = listOfNames[Math.floor(Math.random() * listOfNames.length)];
    document.getElementById("titulo").innerHTML = random;
    console.log(random);
    listOfNames.splice(listOfNames.indexOf(random), 1);
    addChooseParticipant(random);
    showChosenNames();
    if(listOfNames.length ===0){
        restart();
    }
}

function restart(){
    listOfNames = misegundoArray;
    misegundoArray = [];
}

function addChooseParticipant(random) {

    misegundoArray.push(random);
    console.log(misegundoArray);
}

botonhtml.addEventListener("click",changeName);
