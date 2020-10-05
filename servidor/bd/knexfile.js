const knex = require("knex");

// Conexion a BD
// const baseDeDatos = knex({
//     client: "sqlite3",
//     connection: {
//       filename: "./tabifit.db"
//     }
// });

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: './tabifit.db'
    }
}