module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonSchema')(sequelize, DataTypes)
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
            },
            faq: {
                type: DataTypes.TEXT
            }
        },
        {
            tableName: 'casino_category',
            timestamps:false
        })
    return CasinoCategory
}