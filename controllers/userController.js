const {Sequilize} = require('../models')
const db = require('../models')
const {Op, QueryTypes} = require('sequelize')
const posts = require('../models/posts')
const ModelUsers = db.users
const ModelPosts = db.posts

const addUser = async (req, res) => {
    const data = await ModelUsers.create({
        name: 'Test2',
        email: 'test2@mail.ru',
        gender: 'male'
    })
    const response = {
        data: 'ok'
    }
    res.status(200).json(response)
}
const updateUser = async (req, res) => {
    ModelUsers.update({email: 'new@mail.ru'}, {
        where:{id: 2}
    })
    const response = {
        data: 'ok'
    }
    res.status(200).json(response)
}
const deleteUser = async (req, res) => {
    ModelUsers.destroy({where: {id: 2}})
    const response = {
        data: 'ok'
    }
    res.status(200).json(response)
}
const deleteAllUser = async (req, res) => {
    ModelUsers.destroy(
        {
            truncate:true
        }
    )
    const response = {
        data: 'ok'
    }
    res.status(200).json(response)
}
const queryData = async (req, res) => {
    /*
    const data = await ModelUsers.findAll({
        attributes: [
            'name', 
            ['email', 'emailId'],
            [Sequilize.fn('Count', Sequilize.col('email')), 'emailCount']
        ]
    })*/ 
    // exclude 
    /*
    const data = await ModelUsers.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at']
        }
    })
    */

    const data = await ModelUsers.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at']
        },
        where: {
            /*
            id: {
                [Op.in]: [1, 2]
            },
            */
            id: {
                [Op.eq]: 2
            },
            email: {
                [Op.like]: '%@mail.ru%'
            }
        },
        order: [
            ['created_at', 'DESC']
        ],
        limit: 2,
        offset:1
    })
    let response = {
        data
    }
    res.status(200).json(response)
}
const finderData = async (req, res) => {
    //const data = await ModelUsers.findAll({})
    //const data = await ModelUsers.findOne({})
    //const data = await ModelUsers.findByPk(2)
    /* const data = await ModelUsers.findAndCountAll({
        where: {
            email: 'test2@mail.ru'
        }
    }) */
    const [data, created] = await ModelUsers.findOrCreate({
        where: {
            email: 'newUser@mail.ru'
        },
        defaults: {
            name: 'NewUser',
            email: 'newUser@mail.ru',
            gender: 'femail'
        }
    })
    const response = {
      data,
      add: created
    }
    res.status(200).json(response)
}
const setterGetter = async(req, res) => {
    const response = {
        data: 'setter-getter'
      }
    res.status(200).json(response)
}
const fetch = async(req, res) => {
    const data = await ModelUsers.findAll({})
    const response = {
        data
      }
    res.status(200).json(response)
}
const validationCount = async(req, res) => {
    const errors = {}
    try {
        const data = await ModelUsers.create({
            name: 'Test',
            email: 'Done1@mail.ru',
            gender: 'male'
        })
    }
    catch (e) {
        e.errors.forEach((error) => {
            let message = ''
            switch (error.validatorKey) {
                case 'not_unique':
                    message = 'Not unique'
                    break
                case 'equals': {
                    message = error.message
                    break
                }
                case 'isIn': {
                    message = error.message
                    break
                }
            }
            errors[error.path] = message
        })
    }
    const data = await ModelUsers.findAll({})
    const response = {
        data,
        errors
      }
    res.status(200).json(response)
}
const rawQuery = async(req, res) => {
   /*
    const data = await db.sequelize.query(
        "Select * from users", {
            type: QueryTypes.SELECT
        }
    )
    const data = await db.sequelize.query("Select * from users where email =:email", {
        type: QueryTypes.SELECT,
        replacements: {
            email: 'Done'
        }
    })
    const data = await db.sequelize.query("Select * from users where email = ?", {
        type: QueryTypes.SELECT,
        replacements: ['Done']
    })
    const data = await db.sequelize.query("Select * from users where gender IN(:gender)", {
        type: QueryTypes.SELECT,
        replacements: {
            gender: ['male', 'femail']
        }
    })
    */
    const data = await db.sequelize.query("Select * from users where email LIKE :searchEmail", {
        type: QueryTypes.SELECT,
        replacements: {
            searchEmail: '%Done1%'
        }
    })
    const response = {
        data
      }
    res.status(200).json(response)
}
const oneToOne = async(req, res) => {
    const data = await ModelUsers.findAll({
        attributes: ['name', 'email'],
        include: [{
            model: ModelPosts,
            as: 'postDetail',
            attributes: ['content', 'name']
        }],
        where: {id:1}
    })
    const response = {
        data
      }
    res.status(200).json(response)
}
const belongsTo = async(req, res) => {
    const data = await ModelPosts.findAll({
        include: [{
            model: ModelUsers,
            attributes: ['id', 'name']
        }]
    })
    const response = {
        data
      }
    res.status(200).json(response)
}
module.exports = {
    addUser,
    updateUser,
    deleteUser,
    deleteAllUser,
    queryData,
    finderData,
    setterGetter,
    validationCount,
    rawQuery,
    oneToOne,
    belongsTo,
    fetch
}