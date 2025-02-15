const especialidadesModel = require('../models/especialidadesModel')


module.exports = {


    getespecialidades: (req, res) => {
        especialidadesModel.getespecialidades((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)

                return;
            }

            res.status(200).json({ data: result });
            console.log(result)

        });

    },


    getespecialidadById: (req, res) => {
        const { id } = req.params;
        especialidadesModel.getespecialidadById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            else if (result.length === 0) {
                res.status(404).json({ message: 'especialidad no encontrada' });
                console.log(result)
                console.log(err)

                return;
            } else {
                res.status(200).json({ data: result });
            }


        });

    },





  createespecialidades: (req, res)=>{
        const {nombre}= req.body;
        especialidadesModel.createespecialidades(nombre, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'especialidad creada con éxito', data: {idInsertado : result} });
            


        });
    },



    updateespecialidades: (req, res)=>{
        
        const {id}= req.params;
        console.log("paso por el controlador con id deeeee", id)
        const {nombre}= req.body;
        especialidadesModel.updateespecialidades(id, nombre, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'especialidad no encontrada, no fue posible asignar actualizar'});
                    return;
                }
            res.status(200).json({ message: 'especialidad actualizado con éxito'});


        })


    },



    deleteespecialidades: (req, res)=>{
        console.log("pinche cosa kk2")

        const {id}= req.params;
        especialidadesModel.deleteespecialidades(id, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'expecialidad no encontrada, no fue posible eliminar la especialidad'});
                    return;
                }
            res.status(200).json({ message: 'especialidad eliminada con éxito'});


        })


    },








}