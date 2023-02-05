const { check } = require("express-validator");


exports.userRegisterValidator=[
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email Adress'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be 6 characters')
]