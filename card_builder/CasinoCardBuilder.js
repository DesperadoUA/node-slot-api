const CardBuilder =  require('./BaseCardBuilder')
class CasinoCardBuilder extends CardBuilder {
    static show(post) {
        return Object.assign(this.commonDecode(post), this.metaDecode(post), {content: this.textDecode(post.content)})
    }
    static metaDecode(post) {
        const data = {
            faq: JSON.parse(post.faq),
            reviews: JSON.parse(post.reviews),
            close: post.close,
            rating: post.rating,
            ref: JSON.parse(post.ref),
            phone: post.phone,
            min_deposit: post.min_deposit,
            min_payments: post.min_payments,
            email: post.email,
            chat: post.chat,
            year: post.year,
            site: post.site,
            withdrawal: post.withdrawal,
            number_games: post.number_games
        }
        return data
    }
    static showAdmin(post) {
        return Object.assign(this.commonAdminDecode(post), this.metaDecode(post))
    }
    static fetch(posts) {
        const data = []
        posts.forEach(item => {
            data.push(Object.assign(this.commonDecode(item), this.metaDecode(item), {content: this.textDecode(item.content)}))
        })
        return data
    }
}
module.exports = CasinoCardBuilder