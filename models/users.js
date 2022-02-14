module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
            name: { 
                type: DataTypes.STRING,
                set(value) {
                    this.setDataValue('name', value + ' new Value')
                },
                get(){
                    return this.getDataValue('name') + ' XYZ ' + this.email
                },
                defaultValue: 'testUser',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            gender: {
                type: DataTypes.STRING,
                validate: {
                   equals: {
                     args: 'male',
                     msg: 'Please enter only Male'
                   },
                   isIn:{
                     args: [['male', 'femail']],
                     msg: 'Please enter only Male or Femail'
                   }
                }
            }
        },
        {
            tableName: 'users',
            //timestamps:false,
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        }
    )
}