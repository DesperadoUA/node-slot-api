const dbConfig = require('./../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize 

const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    loogging: false
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
db.posts = require('./posts')(sequelize, DataTypes)

db.users.hasOne(db.posts, {foreignKey: 'user_id', as: 'postDetail'})
db.posts.belongsTo(db.users, {foreignKey: 'user_id'})

db.sequelize.sync({force:false})
.then(()=>{
    console.log('Re-sync')
}).catch((err) => {
    console.log('Error Re-sync')
})
module.exports = db