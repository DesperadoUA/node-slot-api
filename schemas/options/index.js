module.exports = (sequelize, DataTypes) => {
    const Options = sequelize.define("options", {
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'options'
            },
            key_id: {
                type: DataTypes.STRING,
                unique: true
            },
            value: {
                type: DataTypes.TEXT
            },
            title: {
                type: DataTypes.STRING
            },
            editor: {
                type: DataTypes.STRING 
            }
        },
        {
            tableName: 'options',
            timestamps:false
        })
    return Options
}