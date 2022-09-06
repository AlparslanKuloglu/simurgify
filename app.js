const express = require('express')
const app = express()
const mysql = require('mysql')
const Sequelize = require('sequelize')
const pageRoute = require('./routes/pageRoute')
const mailRoute = require('./routes/mailRoute')



const options = {                 // setting connection options
  host: 'localhost',
  user: 'root',
  password: '12101210Sie',
  database: 'deneme',
};



app.set("view engine", "ejs")

//Middlewares

//app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())





app.use('/',pageRoute )
app.use('/mail',mailRoute )


const port = 3000

app.listen(port, () => {
  console.log('Sunucu port 3000de başlatıldı')

})