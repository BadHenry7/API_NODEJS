const contactoModel = require('../models/contactoModel')

module.exports={
    getContacto:(req, res)=>{
        contactoModel.getContacto((err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
            console.log(err)

                return;
            }

            res.status(200).json({data: result});
            console.log(result)
            
        });

    },

    getContactoById:(req, res)=>{
        const {id_usuario}= req.params;
        contactoModel.getContactoById(id_usuario,(err, result)=>{
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

    createcontact: (req, res)=>{
        const {id_usuario,nombre_contacto,telefono_contacto,parentezco,estado}= req.body;
        contactoModel.createcontact(id_usuario,nombre_contacto,telefono_contacto,parentezco,estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'Contacto creado con exito', data: {idInsertado : result} });
            


        });
    },


    updateContact: (req, res)=>{
        const {id_usuario}= req.params;
        const {nombre_contacto,telefono_contacto,parentezco,estado}= req.body;
        contactoModel.updateContact(id_usuario,nombre_contacto,telefono_contacto,parentezco,estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Contacto no Encontrado'});
                    return;
                }
            res.status(200).json({ message: 'Contacto actualizado con éxito'});


        })


    },

    deletecontact: (req, res)=>{
        const {id_usuario}= req.params;
        contactoModel.deletecontact(id_usuario, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Contacto no Encontrado'});
                    return;
                }
            res.status(200).json({ message: 'Contacto eliminado con exito'});
        })
    }

}