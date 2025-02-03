const personaModel = require('../models/personaModel')

module.exports={
    getPersonas:(req, res)=>{
        personaModel.getPersonas((err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
            console.log(err)

                return;
            }

            res.status(200).json({data: result});
            console.log(result)
            
        });

    },

    getPersonaById:(req, res)=>{
        const {id}= req.params;
        personaModel.getPersonaById(id,(err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
                return;
            }
            else if(result.length===0){
                res.status(404).json({message: 'Persona no encontrada'});
                return;
            }else{
                res.status(200).json({data: result});
            }
            
            
        });

    },

    createpersona: (req, res)=>{
        const {usuario,password,nombre,apellido,documento,telefono,id_rol,estado}= req.body;
        personaModel.createpersona(usuario,password,nombre,apellido,documento,telefono,id_rol,estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'Usuario creado con éxito', data: {idInsertado : result} });
            


        });
    },

    


    updatepersona: (req, res)=>{
        const {id}= req.params;
        const {usuario,password,nombre,apellido,documento,telefono,id_rol,estado}= req.body;
        personaModel.updatepersona(id, usuario,password,nombre,apellido,documento,telefono,id_rol,estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Usuario no Encontrado'});
                    return;
                }
            res.status(200).json({ message: 'Usuario actualizado con éxito'});


        })


    },

    deletepersona: (req, res)=>{
        const {id}= req.params;
        personaModel.deletepersona(id, (err, result)=>{
        

        if (err){
            res.status(500).json({ error: err.message});
            console.log(err)
            return;
        }else if(result.affectedRows===0){
            res.status(404).json({message:'Persona no encontrada'})
            console.log(err)

            return;
        }else{
            res.status(200).json({ message: 'Usuario elimnado con éxito'});

        }



        })
    }


}



