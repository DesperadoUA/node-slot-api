const CardBuilder =  require('../card_builder/OptionsCardBuilder')
const Model = require('../models/options/model')
const store = require('./store')
class OptionsService {
    static async index() {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {confirm, data} = await Model.all()
        response.confirm = confirm
        response.body = CardBuilder.fetch(data)
        return response
    }
    static async seeds() {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {img} = store
        const posts = [
            {
                key_id: 'logo',
                value: img,
                title: 'Редактор изображения Logo',
                editor: 'image'
            }
        ]
        const {confirm} = await Model.bulkCreate(posts)
        response.confirm = confirm
        return response
    }
    static async indexAdmin() {
        const response = {
            confirm: 'ok',
            body: [],
        }
        const {confirm, data} = await Model.all()
        response.confirm = confirm
        response.body = CardBuilder.adminFetch(data)
        return response
    }
    static async update(data) {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {confirm} = await Model.update(CardBuilder.update(data), data.id)
        response.confirm = confirm
        return response
    }
    static async show(id) {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {confirm, data} = await Model.show(id)
        if(data.length === 0 || confirm === 'error') response.confirm = 'error'
        else response.body = CardBuilder.show(data[0])
        return response
    }
}
module.exports = OptionsService