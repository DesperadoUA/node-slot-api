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

//---  Casino ---//
db.casinos = require('./casino')(sequelize, DataTypes)
db.casinoMeta = require('./casino/meta')(sequelize, DataTypes)
db.casinoCategory = require('./casino/category')(sequelize, DataTypes)
db.casinoCategoryRelatives = require('./casino/category_relatives')(sequelize, DataTypes)

db.casinos.hasOne(db.casinoMeta, {onDelete: 'CASCADE', foreignKey: 'post_id'})
db.casinoMeta.belongsTo(db.casinos, {foreignKey: 'post_id'})

db.casinos.belongsToMany(db.casinoCategory, {through: 'casino_category_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
db.casinoCategory.belongsToMany(db.casinos, {through: 'casino_category_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'})

//---  Casino End ---//
//---  Games ---//
db.games = require('./game')(sequelize, DataTypes)
//--- Games End ----//
db.sequelize.sync({force:false})
    .then(()=>{
        console.log('Re-sync')
    }).catch((err) => {
    console.log('Error Re-sync')
})
module.exports = db