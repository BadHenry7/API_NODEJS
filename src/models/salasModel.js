const db = require('../config/dbConfig')

class salas {


    getsalas(callback) {
        const sql = 'select * from salas';
        db.query(sql, callback);
    }


    getsalaById(id_hospital, callback) {
        const sql = 'select * from salas where id_hospital =?'
        db.query(sql, [id_hospital], callback);
    }



    createsalas(id_hospital, estado, callback) {

        const sql = 'INSERT INTO salas (id_hospital, estado) VALUES (?,?,?)';
        db.query(sql, [id_hospital, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId)
        });

    }

    updatesalas (id_hospital, estado, callback){
        const sql = `
        update salas 
        set estado=?
        WHERE id_hospital =?
        `;
        db.query(sql, [estado, id_hospital], callback);
        
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