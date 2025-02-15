const db = require('../config/dbConfig')

class hospitales {
    
    //consultar todos
    gethospitales(callback){
        const sql = 'SELECT * from hospitales';
        db.query(sql, callback);
    }

    //consultar hospitales especifico
    gethospitalById(id, callback){
        const sql = 'SELECT * FROM hospitales WHERE id=?';
        db.query(sql, [id], callback);
    }

    //crear
    createhospital(nombre_hospital, direccion_hospital,estado, callback){

        const verif='SELECT * from hospitales WHERE nombre_hospital=?';
        db.query(verif,[nombre_hospital],(err, result)=>{
            if (err){
                console.log(err)
                return callback(err, null);
            }

            if (result.length===0){
                
                const sql = 'INSERT INTO hospitales (nombre_hospital, direccion_hospital, estado) VALUES (?,?,?)';
                db.query(sql, [nombre_hospital, direccion_hospital, estado],(err,result)=>{
                    if (err) {
                        return callback(err,null);
                    }

                    callback(null, result.insertId)
                })
            }
            else {
                return callback(null, {message:'Ya hay un hospital registrado '})
            }
        });
    }

    //actualizar hospitales de emergencia 
    updatehospital (id,nombre_hospital, direccion_hospital,estado, callback){
        const sql = `
        UPDATE hospitales
        SET nombre_hospital=?,
        direccion_hospital=?,
        estado=?
        WHERE id=?
        `;
        db.query(sql, [nombre_hospital,direccion_hospital,estado, id],callback)
    }


    deletehospital(id,callback){
        const sql = `
        UPDATE hospitales 
        SET estado=0
        WHERE id=?
        `;
        db.query(sql,[id], callback)
    }

}

module.exports= new hospitales()