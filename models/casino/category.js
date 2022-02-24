module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonModel')(sequelize, DataTypes)
    const CasinoCategory = sequelize.define("casino_category", {
            ...CommonModel,
            parent_id: {
                type: DataTypes.INTEGER, 
                defaultValue: 0
            },
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'casino/category'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'casinos'
            }
        },
        {
            tableName: 'casino_category',
            timestamps:false
        })
    return CasinoCategory
}