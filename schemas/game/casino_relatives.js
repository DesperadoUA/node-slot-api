module.exports = (sequelize, DataTypes) => {
    const GameCasinoRelatives = sequelize.define("game_casino_relatives", {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: 'game_casino_relatives',
            timestamps:false
        })
    return GameCasinoRelatives
}