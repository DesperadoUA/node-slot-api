const db = require('../../schemas/index')
const PostModel = require('../core/Post')
const MainModel = db.games
const MetaModel = db.gameMeta
class Model extends PostModel {
   constructor(name) {
      super(name)
   }
   static async bulkCreate(posts) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      await MainModel.bulkCreate(posts)
      return response
     }
     catch (error) {
      console.log(error)
      response.confirm = 'error'
      return response
    }
   }
   static async bulkCreateMeta(posts) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      await MetaModel.bulkCreate(posts)
      return response
     }
     catch (error) {
      console.log(error)
      response.confirm = 'error'
      return response
    }
   }
   static async create(data) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      response.data = await MainModel.create(data)
      return response
     } 
     catch (error) {
      console.log(error)
      response.confirm = 'error'
      return response
    }
   } 
   static async createMeta(data) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      response.data = await MetaModel.create(data)
      return response
     } 
     catch (error) {
      console.log(error)
      response.confirm = 'error'
      return response
    }
   } 
   static async update(data, id) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      await MainModel.update(data, {where: {id: id} })
      return response
     } 
     catch(error) {
      console.log(error)
      response.confirm = 'error'
      return response
     }
   } 
   static async updateMeta(data, postId) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      await MetaModel.update(data, {where: {post_id: postId} })
      return response
     }
     catch(error) {
      console.log(error)
      response.confirm = 'error'
      return response
     }
   } 
   static async delete(id) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      await MainModel.destroy({where: {id: id}})
      return response
     }
     catch(error) {
      console.log(error)
      response.confirm = 'error'
      return response
     }
   } 
}
module.exports = Model