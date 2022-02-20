 const express = require('express')
 const userController = require('./controllers/userController')
 
 const PORT = 5000
 const app = express()

 app.use(express.json())

 app.get('/', (req, res)=>{
    res.status(200).json({
        status: "ok",
        body: {
            title: 'Good day',
            description: 'Good desc !!!'
        }
    })
 })

 app.get('/add', userController.addUser)
 app.get('/update', userController.updateUser)
 app.get('/delete', userController.deleteUser)
 app.get('/trancate', userController.deleteAllUser)
 app.get('/query', userController.queryData)
 app.get('/finder', userController.finderData)
 app.get('/setter-getter', userController.setterGetter)
 app.get('/validation', userController.validationCount)
 app.get('/raw-query', userController.rawQuery)
 app.get('/get-all', userController.fetch)
 app.get('/one-to-one', userController.oneToOne)
 app.get('/belongsTo', userController.belongsTo)
 app.get('/one-to-many', userController.oneToMany)
 app.get('/many-to-many', userController.manyToMany)
 
 function startApp(){
     try{
        app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`))
     }
     catch(e){
        console.log(e)
     }
 }

startApp()
 