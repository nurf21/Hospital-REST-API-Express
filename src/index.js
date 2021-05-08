const route = require('express').Router()

const patient = require('./routes/patient')

route.use('/patient', patient)

module.exports = route
