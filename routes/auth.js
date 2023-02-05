const express =require('express')
const { register } = require('../controllers/auth')
const { runValidation } = require('../validators')
const { userRegisterValidator } = require('../validators/auth')

const router =express.Router()


router.post('/register',userRegisterValidator,runValidation, register)

module.exports=router 