const CardBuilder =  require('./CardBuilder')
const crypto = require("crypto")
const UsersModel = require('./../models/users/model')
class Service {
    static async login(login, password) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const candidate = await UsersModel.checkLogin(login, password)
        if(candidate.length !== 0) {
            response.confirm = 'ok'
            const token = crypto.randomBytes(16).toString("hex")
            await UsersModel.setToken(candidate[0].id, token)
            candidate[0].remember_token = token
            response.body = CardBuilder.user(candidate[0])
        }
        return response
    }
    static async logout(id, session) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const candidate = await UsersModel.checkSession(id, session)
        if(candidate.length !== 0) {
            await UsersModel.setToken(candidate[0].id, '')
            response.confirm = 'ok'
        }
        return response
    }
    static async checkUser(id, session) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const candidate = await UsersModel.checkSession(id, session)
        if(candidate.length !== 0) response.confirm = 'ok'
        return response
    }
}
module.exports = Service