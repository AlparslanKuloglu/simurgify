const express = require('express')
const router = express.Router()
const mailController = require('../controllers/mailController')


router.route('/user').post(mailController.createMail)





module.exports= router 