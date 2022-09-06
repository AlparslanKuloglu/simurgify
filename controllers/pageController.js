const inCMail = require('../models/mail')


exports.getHomePage =(req,res)=> {
    res.status(200).render('home')
} 

exports.getAdminPanel = async (req,res)=> {

    const mails = await inCMail.findAll()
    console.log(mails)

    res.status(200).render('adminPanel',{mails})
} 