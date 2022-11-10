const { Router } = require('express')
const { coffeController } = require('../controllers/drinks.controlles')


const router = Router() 

router.use('/coffe',require('./coffe.router'))



module.exports = router