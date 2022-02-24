class CardBuilder {
    static casinos(posts) {
        const data = []
        posts.forEach(item => {
            data.push(Object.assign(this.commonDecode(item), this.casinoMetaDecode(item)))
        })
        return data
    }
    static singleCasino(post) {
        return Object.assign(this.commonDecode(post), this.casinoMetaDecode(post))
    }
    static commonDecode(post) {
       const data = {
           id: post.id,
           permalink: `/${post.slug}/${post.permalink}`,
           title: post.title,
           thumbnail: post.thumbnail,
           short_desc: post.short_desc,
           h1: post.h1,
           meta_title: post.meta_title,
           description: post.description,
           keywords: post.keywords,
           content: post.content,
           lang: post.lang,
           updated_at: post.updated_at,
           created_at: post.created_at,
       }
       return data
    }
    static casinoMetaDecode(post) {
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
    static user(user){
        const data = {
            id: user.id,
            session: user.remember_token,
            role: user.role
        }
        return data
    }
}
module.exports = CardBuilder