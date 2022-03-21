const CardBuilder =  require('../card_builder/SettingsCardBuilder')
const Model = require('../models/settings/model')
const config = require('../config')
const store = require('./store')
class SettingsService {
    static async index(lang) {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {confirm, data} = await Model.all(lang)
        response.confirm = confirm
        response.body = CardBuilder.fetch(data)
        return response
    }
    static async seeds() {
        const response = {
            confirm: 'ok',
            body: []
        }
        const {faq, menu, multipleMenu} = store
        const posts = [
            {
              key_id: 'text',
              value: 'Строковый редактор',
              title: 'Текстовый редактор Input',
              editor: 'input'
            },
            {
                key_id: 'rich_text',
                value: '<h2>Текстовый редактор</h2>',
                title: 'Текстовый редактор RichText',
                editor: 'rich_text'
            },
            {
                key_id: 'multiple_menu',
                value: JSON.stringify(multipleMenu),
                title: 'Двух уровневое меню',
                editor: 'multiple_menu'
            },
            {
                key_id: 'two_input_image',
                value: JSON.stringify(menu),
                title: 'Картинка 2 инпута (одноуровневое меню)',
                editor: 'two_input_image'
            },
            {
                key_id: 'input_text',
                value: JSON.stringify(faq),
                title: 'Faq',
                editor: 'input_text'
            }
        ]
        const {confirm} = await Model.bulkCreate(posts)
        response.confirm = confirm
        return response
    }
    static async indexAdmin(lang) {
        const response = {
            confirm: 'ok',
            body: [],
            lang: config.LANG[lang]
        }
        const {confirm, data} = await Model.all(lang)
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
module.exports = SettingsService