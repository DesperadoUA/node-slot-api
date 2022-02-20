const dbConfig = require('./../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize 

const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    logging: false
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
db.tags = require('./tags')(sequelize, DataTypes)
db.post_tag = require('./post_tag')(sequelize, DataTypes)
db.casinos = require('./casino')(sequelize, DataTypes)
db.casinoMeta = require('./casinoMeta')(sequelize, DataTypes)

db.casinos.hasOne(db.casinoMeta, {onDelete: 'CASCADE'})
db.casinoMeta.belongsTo(db.casinos)  
/* One to One
db.users.hasOne(db.posts, {foreignKey: 'user_id', as: 'postDetail'})
*/
/* One to Many */
db.users.hasMany(db.posts, {foreignKey: 'user_id', as: 'postDetail'})
db.posts.belongsTo(db.users, {foreignKey: 'user_id'})

/* Many to Many */
db.posts.belongsToMany(db.tags, {through: 'post_tag'})
db.tags.belongsToMany(db.posts, {through: 'post_tag'})

db.sequelize.sync({force:false})
.then(()=>{
    console.log('Re-sync')
}).catch((err) => {
    console.log('Error Re-sync')
})
module.exports = db