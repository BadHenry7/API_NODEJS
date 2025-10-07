const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'bfrrsop1jsm0voqgbgao-mysql.services.clever-cloud.com',
//     user: 'uupmlcry92arfxpf',
//     password: '4SPvFuFqzZtr7KeWgCxv',
//     database: 'bfrrsop1jsm0voqgbgao',
//     port: 3306

// })

const db = mysql.createPool({
    connectionLimit: 10, 
    host: 'bfrrsop1jsm0voqgbgao-mysql.services.clever-cloud.com',
    user: 'uupmlcry92arfxpf',
    password: '4SPvFuFqzZtr7KeWgCxv',
    database: 'bfrrsop1jsm0voqgbgao',
    port: 3306
});

// db.connect((err) => {

//     if (err) {
//         console.error("Error en la conexión:", err);
//         throw err;
//     }
//     console.log("Conexion MYSQL exitosa")

// })

module.exports= db;