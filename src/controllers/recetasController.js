const recetasModel = require('../models/recetasModel')

module.exports={
    getrecetas:(req, res)=>{
        recetasModel.getrecetas((err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
            console.log(err)

                return;
            }

            res.status(200).json({data: result});
            console.log(result)
            
        });

    },

    getrecetasById:(req, res)=>{
        const {id_usuario}= req.params;
        recetasModel.getrecetasById(id_usuario,(err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
                return;
            }
            else if(result.length===0){
                res.status(404).json({message: 'Receta no encontrada'});
                return;
            }else{
                res.status(200).json({data: result});
            }
            
        });

    },

    createrecetas: (req, res)=>{
        const {id_usuario, dosis, frecuencia, estado}= req.body;
        recetasModel.createrecetas(id_usuario, dosis, frecuencia, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'Receta creada con exito', data: {idInsertado : result} });
            

        });
    },

    updaterecetas: (req, res)=>{
        const {id}= req.params;
        const {dosis, frecuencia, estado}= req.body;
        recetasModel.updaterecetas(id, dosis, frecuencia, estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Receta no encontrada'});
                    return;
                }
            res.status(200).json({ message: 'Receta actualizada con exito'});


        })


    },

    deleterecetas: (req, res)=>{
        const {id}= req.params;
        recetasModel.deleterecetas(id, (err, result)=>{
        

        if (err){
            res.status(500).json({ error: err.message});
            console.log(err)
            return;
        }else if(result.affectedRows===0){
            res.status(404).json({message:'Receta no encontrada'})
            console.log(err)

            return;
        }else{
            res.status(200).json({ message: 'Receta elimanada con exito'});

        }

        })
    }


}