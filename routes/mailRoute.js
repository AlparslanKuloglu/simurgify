const express = require('express')
const router = express.Router()
const mailController = require('../controllers/mailController')


router.route('/user').post(mailController.createMail)
router.route('/admin').post(mailController.sendMail)




module.exports= router 