const inCMail = require('../models/mail')


exports.createMail = async (req, res) => {
    let mail = await inCMail.create({
       senderName:req.body.senderName,
       senderMail:req.body.senderMail,
       phoneNumber:req.body.phoneNumber,
       message:req.body.message
    })

    res.status(200).redirect('/')
  }
  