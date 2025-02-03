const imagenesModel = require('../models/imagenesModel')


module.exports = {


    getimagenes: (req, res) => {
        imagenesModel.getimagenes((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)

                return;
            }

            res.status(200).json({ data: result });
            console.log(result)

        });

    },


    getimagenesById: (req, res) => {
        const { id_usuario } = req.params;
        imagenesModel.getimagenesById(id_usuario, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            else if (result.length === 0) {
                res.status(404).json({ message: 'imagen no encontrada' });
                console.log(result)
                console.log(err)

                return;
            } else {
                res.status(200).json({ data: result });
            }


        });

    },





  createimagenes: (req, res)=>{
        const {id_usuario, url, descripcion, estado}= req.body;
        imagenesModel.createimagenes(id_usuario, url, descripcion, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log(err)
                return;
            }
            res.status(201).json({ message: 'Imagen creada con éxito', data: {idInsertado : result} });
            


        });
    },



    updateimagenes: (req, res)=>{
        
        const {id_usuario}= req.params;
        console.log("paso por el controlador con id deeeee", id_usuario)
        const {url, descripcion, estado}= req.body;
        imagenesModel.updateimagenes(id_usuario,url, descripcion, estado, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Usuario no Encontrado, no fue posible asignar la imagen'});
                    return;
                }
            res.status(200).json({ message: 'imagen actualizado con éxito'});


        })


    },



    deleteimagenes: (req, res)=>{
        console.log("pinche cosa kk2")

        const {id}= req.params;
        imagenesModel.deleteimagenes(id, (err, result)=>{
                if (err){
                    res.status(500).json({error:err.message});
                    return;

                }
                if (result.affectedRows===0){

                    res.status(404).json({message:'Usuario no Encontrado, no fue posible eliminar la imagen'});
                    return;
                }
            res.status(200).json({ message: 'imagen eliminada con éxito'});


        })


    },








}