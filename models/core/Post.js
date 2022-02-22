const {Sequilize} = require('./../index')
const db = require('./../index')
const {Op, QueryTypes} = require('sequelize')
const tables = require('./tableName')
class Post {
    constructor(name) {
        this.name = name
        this.tables = tables
        this.limit = 8
        this.offset = 0
        this.orderBy = 'DESC'
        this.orderKey = 'created_at'
    }
    async showPublic(permalink){
        const data = await db.sequelize.query(`Select * from ${this.tables[this.name].main} 
                                               LEFT JOIN ${this.tables[this.name].meta}
                                               ON ${this.tables[this.name].main}.id = ${this.tables[this.name].meta}.post_id
                                               WHERE permalink = :permalink AND status = 'public'
                                               `,
            {
                type: QueryTypes.SELECT,
                replacements: {
                    permalink: permalink
                }
            })
        return data
    }
    async show(permalink){
        const data = await db.sequelize.query(`Select * from ${this.tables[this.name].main} 
                                               LEFT JOIN ${this.tables[this.name].meta}
                                               ON ${this.tables[this.name].main}.id = ${this.tables[this.name].meta}.post_id
                                               WHERE permalink = :permalink`,
            {
                type: QueryTypes.SELECT,
                replacements: {
                    permalink: permalink
                }
            })
        return data
    }
    async all(settings) {
        const limit = settings.limit || this.limit
        const offset = settings.offset || this.offset
        const orderBy = settings.orderBy || this.orderBy
        const orderKey = settings.orderKey || this.orderKey
        const data = await db.sequelize.query(`Select * from ${this.tables[this.name].main} 
                                               LEFT JOIN ${this.tables[this.name].meta}
                                               ON ${this.tables[this.name].main}.id = ${this.tables[this.name].meta}.post_id
                                               ORDER BY ${orderKey} ${orderBy}
                                               LIMIT ${limit}
                                               OFFSET ${offset}
                                               `,
            {type: QueryTypes.SELECT})
        return data
    }
}
module.exports = Post