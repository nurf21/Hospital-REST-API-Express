const router = require('express').Router()
const { postPatient, getAllPatient, patchPatient } = require('../controller/patient')

router.post('/', postPatient)
router.get('/', getAllPatient)
router.patch('/:id', patchPatient)

module.exports = router