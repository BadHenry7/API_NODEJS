const salasModel = require('../models/salasModel')

module.exports={
    getsalas:(req, res)=>{
        salasModel.getsalas((err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
            console.log(err)

                return;
            }

            res.status(200).json({data: result});
            console.log(result)
            
        });

    },

    getsalaById:(req, res)=>{
        const {id_hospital}= req.params;
        salasModel.getsalaById(id_hospital,(err, result)=>{
            if (err){
                res.status(500).json({error: err.message});
                return;
            }
            else if(result.length===0){
                res.status(404).json({message: 'salas no encontrada'});
                return;
            }else{
                res.status(200).json({data: result});
            }
            
        });

    },

    createsalas: (req, res)=>{
        const {id_hospital, estado}= req.body;
        salasModel.createsalas(id_hospital, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'sala creada con exito', data: {idInsertado : result} });
            

        });
    },

    updatesalas: (req, res)=>{
        const {id_hospital}= req.params;
        const {estado}= req.body;
        salasModel.updatesalas(id_hospital,estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'sala no encontrada'});
                    return;
                }
            res.status(200).json({ message: 'sala actualizada con exito'});


        })


    },

    deletesalas: (req, res)=>{
        const {id_hospital}= req.params;
        salasModel.deletesalas(id_hospital, (err, result)=>{
        

        if (err){
            res.status(500).json({ error: err.message});
            console.log(err)
            return;
        }else if(result.affectedRows===0){
            res.status(404).json({message:'sala no encontrada'})
            console.log(err)

            return;
        }else{
            res.status(200).json({ message: 'sala elimanada con exito'});

        }

        })
    }


}