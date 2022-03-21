module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonSchema')(sequelize, DataTypes)
    const GameCategory = sequelize.define("game_category", {
            ...CommonModel,
            parent_id: {
                type: DataTypes.INTEGER, 
                defaultValue: 0
            },
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'game/category'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'games'
            },
            faq: {
                type: DataTypes.TEXT
            }
        },
        {
            tableName: 'game_category',
            timestamps:false
        })
    return GameCategory
}