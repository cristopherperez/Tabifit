const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig);

obtenerEjercicios = async() => {
    const ejercicios = await knex.select().from("ejercicios");
    return ejercicios;

    // knex.select().from("ejercicios").then((resultado) => {
    //   //retorna el resultado
    // }, error => {
    //   // hacer algo con ese error
    // });
} 

exports.obtenerEjercicios = obtenerEjercicios;