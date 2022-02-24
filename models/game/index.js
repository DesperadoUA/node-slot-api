module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonModel')(sequelize, DataTypes)
    const Games = sequelize.define("games", {
            ...CommonModel,
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'games'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'casino'
            }
        },
        {
            tableName: 'games',
            timestamps:false
        })
    return Games
}