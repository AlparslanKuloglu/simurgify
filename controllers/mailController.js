const inCMail = require('../models/mail')
const nodemailer = require('nodemailer')

exports.createMail = async (req, res) => {
    let mail = await inCMail.create({
       senderName:req.body.senderName,
       senderMail:req.body.senderMail,
       phoneNumber:req.body.phoneNumber,
       message:req.body.message
    })

    res.status(200).redirect('/')
  }


  exports.sendMail = async (req, res) => {
   
console.log("sendmail")

   const outputMessage = `
  
   <h1>Simurgify </h1>
   <ul>
     ${req.body.message}
   </ul>
   <h1>SIMURGIFY TEST</h1>
   <p>mesaj1</p>
   `
 
   let transporter = nodemailer.createTransport({
     host: "mail.simurgify.com",
     port: 465,
     secure: true, // true for 465, false for other ports
     auth: {
       user: "info@simurgify.com", // gmail account
       pass: "Unlimited.2734", // gmail password
     },
   });
 
   // send mail with defined transport object
   let info = await transporter.sendMail({
     from: '"SIMURGIFY" <info@simurgify.com>', // sender address
     to: req.body.userEmail, // list of receivers
     subject: req.body.subject, // Subject line
     html: outputMessage, // html body
   });
 
   
 
   res.status(200).redirect('/adminpasskl23');



 }



  