const express = require('express')
const router = express.Router();

const receta_controller = require ('../controllers/recetasController')


router.get('/getrecetas', receta_controller.getrecetas)
router.get('/getrecetaById/:id_usuario', receta_controller.getrecetasById)
router.post('/createreceta', receta_controller.createrecetas)
router.put('/updaterecetas/:id', receta_controller.updaterecetas)
router.put('/deleterecetas/:id', receta_controller.deleterecetas)

module.exports = router;


//