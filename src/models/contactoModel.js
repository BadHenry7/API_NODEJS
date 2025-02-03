const db = require('../config/dbConfig')

class contacto_emergencia {
    
    //consultar todos
    getContacto(callback){
        const sql = 'SELECT * from contacto_emergencia';
        db.query(sql, callback);
    }

    //consultar contacto especifico
    getContactoById(id_usuario, callback){
        const sql = 'SELECT nombre_contacto, telefono_contacto, parentezco FROM contacto_emergencia WHERE id_usuario=?';
        db.query(sql, [id_usuario], callback);
    }

    //crear
    createcontact(id_usuario,nombre_contacto,telefono_contacto,parentezco,estado,callback){

        const verif='SELECT * from contacto_emergencia WHERE id_usuario=?';
        db.query(verif,[id_usuario, callback],(err, result)=>{
            if (err){
                console.log(err)
                return callback(err, null);
            }

            if (result.length===0){
                
                const sql = 'INSERT INTO contacto_emergencia (id_usuario,nombre_contacto,telefono_contacto,parentezco,estado) VALUES (?,?,?,?,?)';
                db.query(sql, [id_usuario,nombre_contacto,telefono_contacto,parentezco,estado],(err,result)=>{
                    if (err) {
                        return callback(err,null);
                    }

                    callback(null, result.insertId)
                })
            }
            else {
                return callback(null, {message:'Ya hay un conctacto de emergencia para este usuario'})
            }
        });
    }

    //actualizar contacto de emergencia 
    updateContact (id_usuario,nombre_contacto,telefono_contacto,parentezco,estado,callback){
        const sql = `
        UPDATE contacto_emergencia
        SET nombre_contacto=?,
        telefono_contacto=?,
        parentezco=?,
        estado=?
        WHERE id_usuario=?
        `;
        db.query(sql, [nombre_contacto,telefono_contacto,parentezco,estado,id_usuario],callback)
    }


    deletecontact(id_usuario,callback){
        const sql = `
        UPDATE contacto_emergencia 
        SET estado=0
        WHERE id_usuario=?
        `;
        db.query(sql,[id_usuario], callback)
    }

}

module.exports= new contacto_emergencia()