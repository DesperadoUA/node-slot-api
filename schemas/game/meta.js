module.exports = (sequelize, DataTypes) => {
    const GameMeta = sequelize.define("game_meta", {
            iframe: {
                type: DataTypes.TEXT
            }
        },
        {
            tableName: 'game_meta',
            timestamps:false
        })
    GameMeta.removeAttribute('id');
    return GameMeta 
}