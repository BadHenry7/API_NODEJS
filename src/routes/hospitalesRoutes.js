const express = require('express')
const router = express.Router();

const hospitalesController = require ('../controllers/hospitalesController')


router.get('/gethospitales', hospitalesController.gethospitales)
router.get('/gethospitalesById/:id', hospitalesController.gethospitalById)
router.post('/createhospital', hospitalesController.createhospital)
router.put('/updatehospital/:id', hospitalesController.updatehospital)
router.put('/deletehospital/:id', hospitalesController.deletehospital)

module.exports = router;


//