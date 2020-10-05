const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig);

obtenerEntrenamientos = async() => {
    const entrenamientos = await knex.select().from("entrenamientos");
    return entrenamientos;

    // knex.select().from("ejercicios").then((resultado) => {
    //   //retorna el resultado
    // }, error => {
    //   // hacer algo con ese error
    // });
} 

exports.obtenerEntrenamientos = obtenerEntrenamientos;