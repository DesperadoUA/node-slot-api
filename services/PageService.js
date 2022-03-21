const PostModel = require('../models/page')
const CardBuilder =  require('../card_builder/PageCardBuilder')
const BaseService =  require('./BaseService')
const store = require('./store')
const config = require('../config')

class Service extends BaseService {
    static async getPublicPostByUrl(url) {
        const response = {
            confirm: 'error',
            body: []
        }
        const {confirm, data} = await PostModel.showPublic(url)
        if(data.length !== 0 && confirm === 'ok') {
            response.confirm = 'ok'
            response.body = CardBuilder.show(data[0])
        }
        return response
    } 
    static async index(settings) {
        const response = {
            confirm: 'ok',
            body: []
        }
        
        const {confirm, data} = await PostModel.allPublic(settings)
        response.confirm = confirm
        response.body = CardBuilder.fetch(data)
        return response
    } 
    static async seeds() {
        const response = {
            confirm: 'ok',
            template: 'Page seeds'
        }
        const err = []
        const posts = []
        const faq = store.faq
        const img = store.img
        posts.push({
            permalink: 'main',
            title: 'Main page ru', 
            thumbnail: img,
            short_desc: 'Short desc main page ru',
            h1: 'H1 main page ru',
            meta_title: 'Meta title main page ru', 
            description: 'Description main page ru',
            keywords: 'Keywords main page ru',
            content: 'Content main page ru',
            lang: 1,
            faq: JSON.stringify(faq)
        })
        posts.push({
            permalink: 'ua',
            title: 'Main page ua', 
            thumbnail: img,
            short_desc: 'Short desc main page ua',
            h1: 'H1 main page ua',
            meta_title: 'Meta title main page ua', 
            description: 'Description main page ua',
            keywords: 'Keywords main page ua',
            content: 'Content main page ua',
            lang: 2,
            faq: JSON.stringify(faq)
        })
        const createData = await PostModel.bulkCreate(posts)
        err.push(createData.confirm)
        
        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async indexAdmin(settings) {
        const response = {
            confirm: 'error',
            body: [],
            total: 0,
            lang: config.LANG[settings.lang]
        }
        const err = []
        
        const {confirm, data} = await PostModel.all(settings)
        response.body = data
        err.push(confirm)

        const countData = await PostModel.count(settings.lang)
        response.total = countData.data
        err.push(countData.confirm)

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async getById(id) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const {confirm, data} = await PostModel.getById(id)
        if(data.length !== 0 && confirm === 'ok') {
            response.confirm = 'ok'
            response.body = CardBuilder.showAdmin(data[0])
        }
        return response
    } 
    static async update(data) {
        const response = {
            body: [],
            confirm: 'ok'
        }
        const err = []
        const dataSave = this.dataValidate(data)
        const dataMeta = this.dataValidateMetaSave(data)
        const dataResult = Object.assign(dataSave, dataMeta)
        const dataUpdate = await PostModel.update(dataResult, data.id)
        err.push(dataUpdate.confirm)
        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static dataValidateMetaSave(data) {
        let newData = {}
        newData.faq = data.faq ? JSON.stringify(data.faq) : JSON.stringify([])
        return newData
    } 
}
module.exports = Service