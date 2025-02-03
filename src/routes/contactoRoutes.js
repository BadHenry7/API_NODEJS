const express = require('express')
const router = express.Router();

const contactoController = require ('../controllers/contactoController')


router.get('/getContacto', contactoController.getContacto)
router.get('/getContactoById/:id_usuario', contactoController.getContactoById)
router.post('/createcontact', contactoController.createcontact)
router.put('/updateContact/:id_usuario', contactoController.updateContact)
router.put('/deletecontact/:id_usuario', contactoController.deletecontact)

module.exports = router;


//