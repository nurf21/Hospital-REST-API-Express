const router = require('express').Router()
const { postPatient, getAllPatient, getPatientById, patchPatient, deletePatient } = require('../controller/patient')

router.post('/', postPatient)
router.get('/', getAllPatient)
router.get('/:id', getPatientById)
router.patch('/:id', patchPatient)
router.delete('/:id', deletePatient)

module.exports = router