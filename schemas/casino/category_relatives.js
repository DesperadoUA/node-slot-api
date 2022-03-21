module.exports = (sequelize, DataTypes) => {
    const CasinoCategoryRelatives = sequelize.define("casino_category_relatives", {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: 'casino_category_relatives',
            timestamps:false
        })
    return CasinoCategoryRelatives
}