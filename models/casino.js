module.exports = (sequelize, DataTypes) => {
    const Casinos = sequelize.define("casinos", {
        title: DataTypes.STRING,
        content: DataTypes.STRING
    },
    {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    })
    return Casinos
}