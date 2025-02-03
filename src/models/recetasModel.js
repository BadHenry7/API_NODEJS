const db = require('../config/dbConfig')

class recetas {


    getrecetas(callback) {
        const sql = 'select * from recetas_medicas';
        db.query(sql, callback);
    }


    getrecetasById(id_usuario, callback) {
        const sql = 'select * from recetas_medicas where id_usuario =?'
        db.query(sql, [id_usuario], callback);
    }



    createrecetas(id_usuario, dosis, frecuencia, estado, callback) {

        const sql = 'INSERT INTO recetas_medicas (id_usuario, dosis, frecuencia, estado) VALUES (?,?,?,?)';
        db.query(sql, [id_usuario, dosis, frecuencia, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId)
        });

    }

    updaterecetas (id, dosis, frecuencia, estado, callback){
        const sql = `
        update recetas_medicas 
        set dosis=?,
        frecuencia=?,
        estado=?
        WHERE id =?
        `;
        db.query(sql, [dosis, frecuencia, estado, id], callback);
        
    }



    deleterecetas (id, callback){
      
        const sql = `
        update recetas_medicas 
        set estado=0
        WHERE id =?
        `;
        db.query(sql, [id], callback);
        
    }

}

module.exports= new recetas();