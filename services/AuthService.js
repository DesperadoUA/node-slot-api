const CardBuilder =  require('../card_builder/UserCardBuilder')
const crypto = require("crypto")
const UsersModel = require('./../models/users/model')
class Service {
    static async login(login, password) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const err = []
        const candidate = await UsersModel.checkLogin(login, password)
        if(candidate.data.length !== 0 && candidate.confirm === 'ok') {
            err.push(candidate.confirm)
            const token = crypto.randomBytes(16).toString("hex")
            const setToken = await UsersModel.setToken(candidate.data[0].id, token)
            err.push(setToken.confirm)
            candidate.data[0].remember_token = token
            response.body = CardBuilder.user(candidate.data[0])
            response.confirm = err.includes('error') ? 'error' : 'ok'
        }
        return response
    }
    static async logout(id, session) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const err = []
        const candidate = await UsersModel.checkSession(id, session)
        if(candidate.data.length !== 0 && candidate.confirm === 'ok') {
            err.push(candidate.confirm)
            const setToken = await UsersModel.setToken(candidate.data[0].id, '')
            err.push(setToken.confirm)
            response.confirm = err.includes('error') ? 'error' : 'ok'
        }
        return response
    }
    static async checkUser(id, session) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const candidate = await UsersModel.checkSession(id, session)
        if(candidate.data.length !== 0 && candidate.confirm === 'ok') response.confirm = 'ok'
        return response
    }
}
module.exports = Service