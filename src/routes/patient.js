const router = require('express').Router()
const { postPatient, getAllPatient, patchPatient, deletePatient } = require('../controller/patient')

router.post('/', postPatient)
router.get('/', getAllPatient)
router.patch('/:id', patchPatient)
router.delete('/:id', deletePatient)

module.exports = router