module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonSchema')(sequelize, DataTypes)
    const Games = sequelize.define("games", {
            ...CommonModel,
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'game'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'game'
            }
        },
        {
            tableName: 'games', 
            timestamps:false
        })
    return Games
}