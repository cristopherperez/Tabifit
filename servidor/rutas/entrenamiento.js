const express = require('express');
const app = express();
const repo = require('../bd/repositorios/entrenamientoRepositorio');

const entrenamientos = [];


app.get("/", async (req, res) => {
    // if(req.query.checked){
        //db.select().from("ejercicios").where("id", "=", req.params.id)
        //.then(ejercicios) =>{res.status(201).send({ejercicio: ejercicios[0]})}
    //}
    // const ejercicios = await repo.obtenerEjercicios();
    // console.log('ejercicios traidos de bd:', ejercicios);
    // res.status(200).send({ejercicios: ejercicios});
});
// app.get("/api/entrenamientos", (req, res, next) => {
//     if (req.query.palabra) {
//    db.select()
//       .from("entrenamientos")
//       .where("abreviatura", "like", `%${req.query.palabra}%`)		
//         .then((ejerciciosFiltrados) => {
//           res.send({ ejercicios: ejerciciosFiltrados });
//         });
//     } else {
//        db.select().from("entrenamientos").then((entrenamientos) => {
//        res.send({ entrenamientos });
//       });
//     }
//   });
  app.get("/", async (req, res) => {
    // if(req.query.checked){
        //db.select()
        //.from("ejercicios")
        //.where("id", "=", req.params.id)
        //.then(ejercicios) =>{
         //res.status(201).send({ejercicio: ejercicios[0]})}
    //} else {}
    const entrenamientos = await repo.obtenerEntrenamientos();
    if(!entrenamientos){
        res.status(404).send({
            error: {
                codigo: "entrenamiento_inexistente"
            }
        });
    } else {
        res.status(200).send({entrenamientos: entrenamientos});
    }
    console.log('ejercicios traidos de bd:', entrenamientos);
    
    });
 
 app.post("/api/entrenamientos", (req, res, next)=>{
     const entrenamientoNuevo = req.body;
     module.exports("entrenamientos")
     .insert(entrenamientoNuevo)
     .returning(["id", "nombre", "abreviatura"])
     .then((entrenamientos)=>{
         res.status(201).send({
             entrenamiento:{
                 id: entrenamientos[0],
                 nombre: entrenamientoNuevo.nombre,
                 abreviatura: entrenamientoNuevo.abreviatura;
             }
         });
     });
 });


    // app.post("/entrenamientos", (req, res, next) => {
//     const entrenamientoNuevo = req.body;
//    entrenamientoNuevo.id = entrenamiento.length +1
//    entrenamientos.push(entrenamientoNuevo);
// //    entrenamientos.push(entrenamiento);
//     res.status(201).send(entrenamiento:entrenamientoNuevo);
// });

app.put("/api/entrenamientos/:id", (req, res, next)=>{
    const posicionEntrenamiento = entrenamientos.findIndex(entrenamiento => entrenamiento.id === parseInt(req.params.id));
    if(posicionEntrenamiento <0){
        res.status(400).send({
            error:{
                codigo: "entrenamiento_inexistente_no_actualizable"
            }
        });
        } return;
        if (req.body.nombre ===""){
            res.status(400).send({
                error:{
                    codigo: "nombre_obligatorio"
                }
            });
            return;
    }
    entrenamientos[posicionEntrenamiento] = req.body;
    res.status(202).send({entrenamiento: entrenamientos[posicionEntrenamiento]})
});

module.exports = app;