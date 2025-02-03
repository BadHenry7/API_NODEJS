const db = require('../config/dbConfig')

class imagenes {


    getimagenes(callback) {
        const sql = 'select * from imagen_usuarios';
        db.query(sql, callback);
    }


    getimagenesById(id_usuario, callback) {
        const sql = 'select * from imagen_usuarios where id_usuario =?'
        db.query(sql, [id_usuario], callback);
    }



    createimagenes(id_usuario, url, descripcion, estado, callback) {


        const sql = 'INSERT INTO imagen_usuarios (id_usuario, url, descripcion, estado) VALUES (?,?,?,?)';
        db.query(sql, [id_usuario, url, descripcion, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId)
        });










    }

    updateimagenes (id_usuario, url, descripcion, estado, callback){
       
        const sql = `
        update imagen_usuarios 
        set url =?,
        descripcion=?,
        estado=?
        WHERE id_usuario =?
        `;
        db.query(sql, [url,descripcion,estado, id_usuario], callback);
        
    }



    deleteimagenes (id, callback){
  
        const sql = `
        update imagen_usuarios 
        set estado=0
        WHERE id =?
        `;
        db.query(sql, [id], callback);
        
    }

    







}

module.exports= new imagenes();