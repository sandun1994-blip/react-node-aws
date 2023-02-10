const express =require('express')
const { register,registerActivate } = require('../controllers/auth')
const { runValidation } = require('../validators')
const { userRegisterValidator } = require('../validators/auth')

const router =express.Router()


router.post('/register',userRegisterValidator,runValidation, register)
router.post('/register/activate', registerActivate)

module.exports=router 