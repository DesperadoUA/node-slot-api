module.exports = (sequelize, DataTypes) => {
    const CasinoMeta = sequelize.define("casino_meta", {
            faq: {
                type: DataTypes.TEXT
            },
            reviews: {
                type: DataTypes.TEXT
            },
            close: {
                type: DataTypes.BOOLEAN,
                defaultValue: 0
            },
            rating: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            ref: {
                type: DataTypes.TEXT
            },
            phone: {
                type: DataTypes.STRING
            },
            min_deposit: {
                type: DataTypes.STRING
            },
            min_payments: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            chat: {
                type: DataTypes.STRING
            },
            year: {
                type: DataTypes.STRING
            },
            site: {
                type: DataTypes.STRING
            },
            withdrawal: {
                type: DataTypes.STRING
            },
            number_games: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'casino_meta',
            timestamps:false
        })
    CasinoMeta.removeAttribute('id');
    return CasinoMeta 
}