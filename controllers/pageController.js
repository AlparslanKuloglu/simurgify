const inCMail = require('../models/mail')


exports.getHomePage =(req,res)=> {
    res.status(200).render('home')
} 



exports.getContactPage = async (req,res)=> {

    res.status(200).render('contact')
} 

exports.getAdminPanel = async (req,res)=> {

    const mails = await inCMail.findAll()
    

    res.status(200).render('adminPanel',{mails})
} 