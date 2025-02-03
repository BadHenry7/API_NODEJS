const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_nodejs',
    port: 3306

})


db.connect((err) => {

    if (err) {
        console.error("Error en la conexión:", err);
        throw err;
    }
    console.log("Conexion MYSQL exitosa")

})

module.exports= db;