module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonSchema')(sequelize, DataTypes)
    const Pages = sequelize.define("pages", {
            ...CommonModel,
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'static-pages'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'static-pages'
            },
            faq: {
                type: DataTypes.TEXT
            }
        },
        {
            tableName: 'pages',
            timestamps:false
        })
    return Pages
}