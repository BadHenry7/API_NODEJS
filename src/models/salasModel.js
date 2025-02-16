const db = require('../config/dbConfig')

class salas {


    getsalas(callback) {
        const sql = 'select * from salas';
        db.query(sql, callback);
    }


    getsalaById(id_hospital, callback) {
        const sql = 'SELECT * from salas where id_hospital =?'
        db.query(sql, [id_hospital], callback);
    }

    getsalaByNombre(nombre_hospital, callback) {
        const sql = `SELECT s.salas_nombre
        from salas as s
        inner join hospitales as h ON s.id_hospital=h.id
         where h.nombre_hospital = ?;
        
        `
        db.query(sql, [nombre_hospital], callback);
    }




    createsalas(id_hospital, salas_nombre ,estado, callback) {

        const sql = 'INSERT INTO salas (id_hospital, salas_nombre, estado) VALUES (?,?,?)';
        db.query(sql, [id_hospital, salas_nombre, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId)
        });

    }

    updatesalas (id_hospital, salas_nombre ,estado, callback){
        const sql = `
        update salas 
        set estado=?,
        salas_nombre=?
        WHERE id_hospital =?
        `;
        db.query(sql, [estado, salas_nombre, id_hospital], callback);
        
    }



    deletesalas (id_hospital, callback){
      
        const sql = `
        update salas 
        set estado=0
        WHERE id_hospital =?
        `;
        db.query(sql, [id_hospital], callback);
        
    }

}

module.exports= new salas();