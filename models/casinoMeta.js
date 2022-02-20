module.exports = (sequelize, DataTypes) => {
    const CasinoMeta = sequelize.define("casino_meta", {
        ref: DataTypes.STRING,
    },
    {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    })
    return CasinoMeta
}