module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define('tags', {
        name:DataTypes.STRING
    },{
        createdAt: 'create_at',
        updatedAt: 'update_at'
    })
    return Tags
}