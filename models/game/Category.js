const db = require('../../schemas/index')
const CategoryModel = require('../core/Category')
const MainModel = db.gameCategory
class Model extends CategoryModel {
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
   static async update(data, id) {
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      response.data = await MainModel.update(data, {where: {id: id} })
      return response
     } 
     catch (error) {
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
   static async setParentIdDefault(parent_id){
      const response = {
         confirm: 'ok',
         data: []
     }
     try {
      response.data = await MainModel.update({parent_id: 0}, {where: {parent_id: parent_id} })
      return response
     } 
     catch (error) {
      console.log(error)
      response.confirm = 'error'
      return response
     }
   }
}
module.exports = Model