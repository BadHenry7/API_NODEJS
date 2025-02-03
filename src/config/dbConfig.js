const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bfrrsop1jsm0voqgbgao-mysql.services.clever-cloud.com',
    user: 'bfrrsop1jsm0voqgbgao',
    password: '4SPvFuFqzZtr7KeWgCxv',
    database: 'uupmlcry92arfxpf',
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