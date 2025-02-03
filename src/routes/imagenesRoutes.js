const express = require('express')
const router = express.Router();

const imagenesController = require ('../controllers/imagenesController')


router.get('/getimagenes', imagenesController.getimagenes)
router.get('/getimagenById/:id_usuario', imagenesController.getimagenesById)
router.post('/createimagen', imagenesController.createimagenes)
router.put('/updateimagenes/:id_usuario', imagenesController.updateimagenes)
router.put('/deleteimagenes/:id', imagenesController.deleteimagenes)

module.exports = router;


//