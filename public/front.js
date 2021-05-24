
//acesso al span tag de cada caja

const b1 = document.getElementById("uno");
const b2 = document.getElementById("dos");
const b3 = document.getElementById("tres");
const b4 = document.getElementById("cuatro");
const b5 = document.getElementById("cinco");


// obtener cada boton
const led0on = document.getElementById("led0on")
const led0off = document.getElementById("led0off")

const led1on = document.getElementById("led1on")
const led1off = document.getElementById("led1off")

const led2on = document.getElementById("led2on")
const led2off = document.getElementById("led2off")

const led3on = document.getElementById("led3on")
const led3off = document.getElementById("led3off")

const led4on = document.getElementById("led4on")
const led4off = document.getElementById("led4off")


// estados iniciales de los led, los lee del data.json
window.addEventListener('load', () => {
    cargarDatosIniciales();    
});

//event listener de cada boton

// boton 1 = ledINT
led0on.addEventListener("click", ()=>{
    b1.textContent = "ON";
    sendNewStates("boton1", "ON")
});

led0off.addEventListener("click", ()=>{
    b1.textContent = "OFF";
    sendNewStates("boton1", "OFF")    
});

//boton 2

led1on.addEventListener("click", ()=>{
    b2.textContent = "ON";
    sendNewStates("boton2", "ON")
});

led1off.addEventListener("click", ()=>{
    b2.textContent = "OFF";
    sendNewStates("boton2", "OFF")    
});

// boton3

led2on.addEventListener("click", ()=>{
    b3.textContent = "ON";
    sendNewStates("boton3", "ON")
});

led2off.addEventListener("click", ()=>{
    b3.textContent = "OFF";
    sendNewStates("boton3", "OFF")    
});

// boton 4

led3on.addEventListener("click", ()=>{
    b4.textContent = "ON";
    sendNewStates("boton4", "ON")
});

led3off.addEventListener("click", ()=>{
    b4.textContent = "OFF";
    sendNewStates("boton4", "OFF")    
});


//boton 5


led4on.addEventListener("click", ()=>{
    b5.textContent = "ON";
    sendNewStates("boton5", "ON")
});

led4off.addEventListener("click", ()=>{
    b5.textContent = "OFF";
    sendNewStates("boton5", "OFF")    
});


// funcion para cargar estados iniciales

function cargarDatosIniciales(){
    fetch("/lista", {method: "GET"})
    .then (res => res.json())
    .then( data =>{        
        
        b1.textContent = data["boton1"];
        b2.textContent = data["boton2"];
        b3.textContent = data["boton1"];
        b4.textContent = data["boton4"];
        b5.textContent = data["boton5"];    
    });    
}

function sendNewStates(btn, estado){
    fetch("/", {
        method: "POST", 
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({boton: btn, estado: estado})
    
    })
    .then(res => res.text())
    .then(data =>{

        console.log(data);            
    }); 
}