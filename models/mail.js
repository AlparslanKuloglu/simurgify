const Sequelize = require('sequelize')


const sequelize = new Sequelize({
    database: 'deneme',
    username: 'root',
    password: '12101210Sie',
    dialect: 'mysql'
   })

const inCMail = sequelize.define('inCMail',{
    id: {
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: false,
     primaryKey: true
    },
    senderName:{type: Sequelize.STRING},
    senderMail:{type: Sequelize.STRING},
    phoneNumber:{type: Sequelize.STRING},
    message:{type: Sequelize.STRING},

}
    )

    inCMail.sync()

    module.exports = inCMail
