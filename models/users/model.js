const db = require('./../index')
const UsersModel = db.users
class Model {
    static async checkLogin(login, password){
        const posts = await UsersModel.findAll({
            where: {
                name: login,
                password: password
            }
        })
        return posts
    }
    static async setToken(id, token) {
        UsersModel.update({remember_token: token}, {
            where:{id: id}
        })
    }
    static async checkSession(id, session) {
        const posts = await UsersModel.findAll({
            where: {
                id: id,
                remember_token: session
            }
        })
        return posts
    }
}
module.exports = Model