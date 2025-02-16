const express = require('express')
const router = express.Router();

const salas_controller = require ('../controllers/salasController')


router.get('/getsalas', salas_controller.getsalas)
router.get('/getsalaById/:id_hospital', salas_controller.getsalaById)
router.get('/getsalaByNombre/:nombre_hospital', salas_controller.getsalaByNombre)

router.post('/createsalas', salas_controller.createsalas)
router.put('/updatesalas/:id_hospital', salas_controller.updatesalas)
router.put('/deletesalas/:id_hospital', salas_controller.deletesalas)

module.exports = router;


//