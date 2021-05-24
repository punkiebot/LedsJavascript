const express = require("express")
const fs = require("fs")

const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"))

// routes


app.get("/", (req,res) =>{
    res.setHeader("Content-type", "text/html");
    res.sendFile("./public/index.html")  
})

// enviar los estados iniciales de los led, en base el data.json
// se carga con window.load event listener
app.get("/lista", (req,res) =>{
    let file = fs.readFileSync("./data.json", "UTF-8");
    res.setHeader("Content-type", "text/json")
    res.send(file);
})


app.post("/", (req,res) =>{
    res.setHeader("Content-type", "text/plain");
    
    const indiceBoton = req.body.boton;
    const estadoLed = req.body.estado;

    // abrir archivo
    let file = fs.readFileSync("./data.json");
    const json = JSON.parse(file);

    

    json[indiceBoton] = estadoLed;
    console.log("New States")
    console.log(json);

    file = fs.writeFileSync("./data.json", JSON.stringify(json));

    res.send("Data saved!")

})


// inicio el servidor

app.listen(3000, () =>{
    console.log("Server running on port 3000");
})
