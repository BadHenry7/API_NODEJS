const express = require('express')
const router = express.Router();

const personaController = require ('../controllers/personaControllers')


router.get('/getPersonas', personaController.getPersonas)
router.get('/getPersonaById/:id', personaController.getPersonaById)
router.post('/createpersona', personaController.createpersona)
router.put('/updatepersona/:id', personaController.updatepersona)
router.delete('/deletepersona/:id', personaController.deletepersona)

module.exports = router;


//