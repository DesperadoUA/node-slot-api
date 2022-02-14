module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    },
    {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    })
    return Posts
}