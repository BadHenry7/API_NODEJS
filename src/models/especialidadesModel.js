const db = require('../config/dbConfig')

class especialidades {


    getespecialidades(callback) {
        const sql = 'select * from especialidades';
        db.query(sql, callback);
    }


    getespecialidadById(id, callback) {
        const sql = 'select * from especialidades where id =?'
        db.query(sql, [id], callback);
    }



    createespecialidades(nombre, estado, callback) {


        const sql = 'INSERT INTO especialidades (nombre, estado) VALUES (?,?)';
        db.query(sql, [nombre, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId)
        });

    }

    updateespecialidades (nombre,estado, id, callback){
       
        const sql = `
        update especialidades 
        set nombre =?,
        set estado=?
        WHERE id =?
        `;
        db.query(sql, [nombre, estado, id], callback);
        
    }



    deleteespecialidades (id, callback){
  
        const sql = `
        update especialidades 
        set estado=0
        WHERE id =?
        `;
        db.query(sql, [id], callback);
        
    }

    







}

module.exports= new especialidades();