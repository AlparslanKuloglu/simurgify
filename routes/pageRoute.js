const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pageController')


router.route('/').get(pageController.getHomePage)
router.route('/adminpasskl23').get(pageController.getAdminPanel)




module.exports= router 