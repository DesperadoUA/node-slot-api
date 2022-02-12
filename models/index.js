const dbConfig = require('./../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize 

const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST
})


sequelize.authenticate().then(() => {
    console.log('Connection successfull')
}).catch((err) => {
    console.log('Error connecting to database!')
})

const db = {}
db.Sequilize = Sequilize
db.sequelize = sequelize

db.users = require('./users')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('Re-sync')
}).catch((err) => {
    console.log('Error Re-sync')
})