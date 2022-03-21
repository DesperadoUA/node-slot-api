module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
            name: {
                type: DataTypes.STRING,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            role: {
                type: DataTypes.ENUM(['admin', 'editor', 'guest']),
                defaultValue: 'editor'
            },
            password: {
                type: DataTypes.STRING
            },
            remember_token: {
                type: DataTypes.STRING
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("NOW()")
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("NOW()")
            }
        },
        {
            tableName: 'users',
            timestamps:false
        })
    return Users
}