import Sequilize from 'sequelize'

const sequelize = new Sequilize('sequelize', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

/*
sequelize.authenticate().then(() => {
    console.log('Connection successfull')
}).catch((err) => {
    console.log('Error connecting to database!')
})
*/

const User = sequelize.define('users', {
    user_id: {
        type: Sequilize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    username: {
        type: Sequilize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequilize.DataTypes.STRING
    },
    age: {
        type: Sequilize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 22
    },
    email: {
        type: Sequilize.DataTypes.STRING,
        allowNull: false
    },
    new: {
        type: Sequilize.DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: Sequilize.DataTypes.STRING,
        allowNull: false
    }
    },
    {
        freezeTableName: true,
        //timestamps: false
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    }
    )
// {aletr: true}, {force: true}
User.sync({alter: true}).then(()=>{
    console.log('Table and model synced successfully!!!')
})
.catch((err)=>{
    console.log('Error syncing the table and model')
})