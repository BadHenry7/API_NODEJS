const hospitalesModel = require('../models/hospitalesModel')

module.exports={
    gethospitales:(req, res)=>{
        hospitalesModel.gethospitales((err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
            console.log(err)

                return;
            }

            res.status(200).json({data: result});
            console.log(result)
            
        });

    },

    gethospitalById:(req, res)=>{
        const {id}= req.params;
        hospitalesModel.gethospitalById(id,(err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
                return;
            }
            else if(result.length===0){
                res.status(404).json({message: 'hospital no encontrada'});
                return;
            }else{
                res.status(200).json({data: result});
            }
            
            
        });

    },

    createhospital: (req, res)=>{
        const {nombre_hospitales, direccion_hospital, estado}= req.body;
        hospitalesModel.createhospital(nombre_hospitales, direccion_hospital, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'hospitales creado con exito', data: {idInsertado : result} });
            


        });
    },


    updatehospital: (req, res)=>{
        const {id}= req.params;
        const {nombre_hospitales, direccion_hospital, estado}= req.body;
        hospitalesModel.updatehospital(id,nombre_hospitales, direccion_hospital, estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'hospitales no Encontrado'});
                    return;
                }
            res.status(200).json({ message: 'hospitales actualizado con éxito'});


        })


    },

    deletehospital: (req, res)=>{
        const {id}= req.params;
        hospitalesModel.deletehospital(id, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'hospitales no Encontrado'});
                    return;
                }
            res.status(200).json({ message: 'hospitales eliminado con exito'});
        })
    }

}