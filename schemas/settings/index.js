module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define("settings", {
            slug: {
                type: DataTypes.STRING,
                defaultValue: 'settings'
            },
            key_id: {
                type: DataTypes.STRING,
            },
            value: {
                type: DataTypes.TEXT
            },
            title: {
                type: DataTypes.STRING
            },
            editor: {
                type: DataTypes.STRING 
            },
            lang: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            } 
        },
        {
            tableName: 'settings',
            timestamps:false
        })
    return Settings
}