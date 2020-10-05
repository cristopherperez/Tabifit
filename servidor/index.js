const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());


// Importamos rutas
const entrenamientoRuta = require("./ruta/entrenamiento");
const ejercicioRuta = require("./rutas/ejercicio");
const appRuta = require("./rutas/app");

//Rutas
app.use('/api/entrenamiento', entrenamientoRuta);
app.use('/api/ejercicio', ejercicioRuta);
app.use('/api/', appRuta);

//Archivos guardados

const ahora = new Date();
const año = ahora.getFullYear();
const mes = ahora.getMonth();
const mesHumano = mes + 1;
const mesConCero = mesHumano.toString().padStart(2, "0");
const dia = ahora.getDate();
const diaConCero = dia.toString().padStart(2, "0");
const hora = ahora.getHours();
const horaActual = hora - 3;
const horaConCero = horaActual.toString().padStart(2, "0");
const minuto = ahora.getMinutes();
const minutoConCero = minuto.toString().padStart(2, "0");
const segundo = ahora.getSeconds();
const segundoConCero = segundo.toString().padStart(2, "0");

const fechaEntrenamiento = [año,"-",mesConCero,"-",diaConCero,"-",horaConCero,"-",minutoConCero,"-",segundoConCero];

const nvoEntrenamiento = fs.writeFileSync("./tabifit-buttones/servidor/tabifit.db-nuevoEjercicio.txt", fechaEntrenamiento);
console.log(fechaEntrenamiento);

app.listen(3000, () => {
  console.log('Express servidor port 3000: \x1b[32m%s\x1b[0m', 'online');
});

// fs.writeFile("./tabifit-buttones/servidor/tabifit.db-nuevoEjercicio.fit", fechaEntrenamiento, (err)=>{

// });