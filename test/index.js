import Sequilize from 'sequelize'
const {DataTypes, Op} = Sequilize

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
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[4,6]
        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 22
    },
    email: {
        type: DataTypes.STRING,
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
// {alter: true}, {force: true}
User.sync({alter: true}).then(()=>{
    console.log('Table and model synced successfully!!!')
    /*User.build({username: 'Kostya', password: '212007rfrf', age: 35, email: 'lazarev-konstant@mail.ru'})
        .save()
    */
   /*User.create({username: 'Dasha', password: '212007', age: 19, email: 'dasha-m@mail.ru'})
   */
  /*
   return User.bulkCreate([
       {username: 'Dasha', password: '212007', age: 19, email: 'dasha-m@mail.ru'},
       {username: 'Pasha Bebeh', password: '212007mk', age: 23, email: 'dasha-n@mail.ru'}
    ], {validate: true}) 
    */
/*
    User.bulkCreate([
        {username: 'Dasha', password: '212007', age: 19, email: 'dasha-m@mail.ru'},
        {username: 'Pasha', password: '212007mk', age: 23, email: 'dasha-n@mail.ru'}
     ], {validate: true}) 
*/
 /*   return User.findAll({attributes: ['username', 'password']})*/
 /*   return User.findAll({attributes: {exclude: ['username', 'password']}})*/
 /*   return User.findAll({attributes: [['username', 'name'], ['password', 'pwd']]})*/
 /*    const settings = {
         attributes: [['username', 'name'], ['password', 'pwd']],
         where: {age:19},
         limit: 2,
         order: [['age', 'DESC']]
     }
*/
/*
    const settings = {
        where:{
            //[Op.and]: {username: 'DashaM', age:23}
            //[Op.or]: {username: 'DashaM', age:23}
            username: {
                [Op.or]: ['DashaM', 'DashaV']
            }
            //age: {[Op.gt]: 20}
        }
    }
    return User.findAll(settings)
    */
   /*
   const settings = {
       username: 'DashaM'
   }
   return User.update({age: 45}, {where:{username: 'DashaM'}})
   */
  //return User.destroy({where: {id: 2}})
}).then((data) => {
   /* data.forEach((item)=>{
        console.log(item.toJSON())
    })*/
   // console.log(data.toJSON())
    console.log('User added to database')
})
.catch((err)=>{
    console.log(`Error syncing the table and model ${err}`)
})