const router = require('express').Router()
const { postPatient, getAllPatient } = require('../controller/patient')

router.post('/', postPatient)
router.get('/', getAllPatient)

module.exports = router