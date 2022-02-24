const PostModel = require('./../models/core/Post')
const db = require('./../models')
const MainModel = db.casinos
const MetaModel = db.casinoMeta
const CategoryModel = db.casinoCategory
const CardBuilder =  require('./CardBuilder')
const store = require('./store')
class Service {
    static async getPublicPostByUrl(url) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const MainModel = new PostModel('CASINO')
        const data = await MainModel.showPublic(url)
        if(data.length !== 0) {
            response.confirm = 'ok'
            response.body = CardBuilder.singleCasino(data[0])
        }
        return response
    }
    static async getPublicCategoryByUrl(url) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const MainModel = new PostModel('CASINO')
        const data = await MainModel.showPublic(url)
        if(data.length !== 0) {
            response.confirm = 'ok'
            response.body = CardBuilder.singleCasino(data[0])
        }
        return response
    }
    static async index() {
        const MainModel = new PostModel('CASINO')
        const data = await MainModel.all({})
        return {
            confirm: 'ok',
            body: CardBuilder.casinos(data)
        }
    }
    static async seeds(numberPosts = 10) {
        const posts = []
        const postsMeta = []
        const faq = store.faq
        const ref = store.ref
        const reviews = store.reviews
        for(let i=0; i<numberPosts; i++) {
            posts.push(
                {
                    permalink: `post-${i}`,
                    title: `Title post-${i}`,
                    thumbnail: `Thumbnail post-${i}`,
                    short_desc: `Short desc post-${i}`,
                    h1: `H1 post-${i}`,
                    meta_title: `Meta title post-${i}`,
                    description: `Description post-${i}`,
                    keywords: `Keywords post-${i}`,
                    content: `Content post-${i}`
                }
            )

            postsMeta.push({
                faq: JSON.stringify(faq),
                reviews: JSON.stringify(reviews),
                ref: JSON.stringify(ref),
                phone: `Phone post-${i}`,
                min_deposit: `Min deposit post-${i}`,
                min_payments: `Min payments post-${i}`,
                email: `Email post-${i}`,
                chat: `Chat post-${i}`,
                year: `Year post-${i}`,
                site: `Site post-${i}`,
                withdrawal: `Withdrawal post-${i}`,
                number_games: `Number Games post-${i}`,
                post_id: i+1
            })
        }
        MainModel.bulkCreate(posts)
        MetaModel.bulkCreate(postsMeta)
        return {
            confirm: 'ok',
            template: 'Posts seeds'
        }
    }
    static async seedsCategory(numberPosts =10) {
        const posts = []
        const faq = store.faq
        for(let i=0; i<numberPosts; i++) {
            posts.push(
                {
                    permalink: `category-${i}`,
                    title: `Title category-${i}`,
                    thumbnail: `Thumbnail category-${i}`,
                    short_desc: `Short desc category-${i}`,
                    h1: `H1 category-${i}`,
                    meta_title: `Meta title category-${i}`,
                    description: `Description category-${i}`,
                    keywords: `Keywords category-${i}`,
                    content: `Content category-${i}`,
                    faq: JSON.stringify(faq)
                }
            )
        }
        CategoryModel.bulkCreate(posts)
        return {
            confirm: 'ok',
            template: 'Category seeds'
        }
    }
}
module.exports = Service