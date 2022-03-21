module.exports = (sequelize, DataTypes) => {
    const GameCategoryRelatives = sequelize.define("game_category_relatives", {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: 'game_category_relatives',
            timestamps:false
        })
    return GameCategoryRelatives
}