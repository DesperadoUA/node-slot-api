module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../core/CommonModel')(sequelize, DataTypes)
    const Casinos = sequelize.define("casinos", {
            ...CommonModel,
            post_type: {
                type: DataTypes.STRING,
                defaultValue: 'casino'
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'casino'
            }
        },
        {
            tableName: 'casinos',
            timestamps:false
        })
    return Casinos
}