const db = require('../config/dbConfig')

class persona{

    //consultar todos
    getPersonas(callback){
        const sql = 'select * from usuario';
        db.query(sql, callback);//query es como execute
    }

    //consultar usuario especifico
    getPersonaById(id, callback){
        const sql = 'select id, nombre from usuario where id= ?';
        db.query(sql, [id], callback);
    }

    //crear usuario
    createpersona(usuario, password, nombre, apellido,documento,telefono,id_rol,estado,callback){//usuario,password,nombre,apellido,documento,telefono,id_rol,estado

        const verif = 'SELECT * from usuario where usuario=?';
        db.query(verif, [usuario, callback], (err, result)=>{

            if (err) {
                console.log(err)
                return callback(err, null);  
            }

            if (result.length===0){

                const sql = 'INSERT INTO usuario (usuario,password,nombre,apellido,documento,telefono,id_rol,estado) VALUES (?,?,?,?,?,?,?,?)';
                db.query(sql,  [usuario, password, nombre, apellido,documento,telefono,id_rol,estado],(err, result)=> {
                    if (err){
                        return callback(err, null);
                    }
                    
                    callback(null, result.insertId)
                });


            }else{
                return callback(null, {message:'El usuario ya existe'});
            }

        });
            

      
    }

    //actualizar usuario      
    updatepersona (id, usuario, password, nombre, apellido,documento,telefono,id_rol,estado, callback){
        const sql = `
        update usuario 
        set usuario =?,
        password =?,
        nombre =?, 
        apellido=?,
        documento=?,
        telefono=?,
        id_rol=?,
        estado=?
        WHERE id =?
        `;
        db.query(sql, [usuario, password, nombre, apellido,documento,telefono,id_rol,estado, id], callback);
        
    }



    //eliminar usuario


    deletepersona(id, callback){
        const sql = 'delete from usuario where id =?';
        db.query(sql, [id], callback)
    }

    

}

module.exports= new persona();