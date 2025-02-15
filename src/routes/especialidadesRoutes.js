const express = require('express')
const router = express.Router();

const especialidadesController = require ('../controllers/especialidadesController')


router.get('/getespecialidades', especialidadesController.getespecialidades)
router.get('/getespecialidadById/:id', especialidadesController.getespecialidadById)
router.post('/createespecialidad', especialidadesController.createespecialidades)
router.put('/updateespecialidades/:id', especialidadesController.updateespecialidades)
router.put('/deleteespecialidades/:id', especialidadesController.deleteespecialidades)

module.exports = router;


//