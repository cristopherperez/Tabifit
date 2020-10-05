const express = require('express');
const app = express();
const repo = require('../bd/repositorios/ejercicioRepositorio');

const ejercicios = [];


app.get("/", async (req, res) => {
    // if(req.query.checked){
        //db.select()
        //.from("ejercicios")
        //.where("id", "=", req.params.id)
        //.then(ejercicios) =>{
         //res.status(201).send({ejercicio: ejercicios[0]})}
    //} else {}
    const ejercicios = await repo.obtenerEjercicios();
    if(!ejercicios){
        res.status(404).send({
            error: {
                codigo: "ejercicio_inexistente"
            }
        });
    } else {
        res.status(200).send({ejercicios: ejercicios});
    }
    console.log('ejercicios traidos de bd:', ejercicios);
    
    });

app.post("/", (req, res) => {
   const ejercicio = req.body;
   ejercicio.push(entrenamiento);
    res.status(201).send(ejercicio);
});

module.exports = app;