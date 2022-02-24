 const express = require('express')
 const cors = require('cors')
 const path = require('path')
 const bodyParser = require('body-parser')
 const CasinoController = require('./controllers/CasinoController')
 const GameController = require('./controllers/GameController')
 const AuthController = require('./controllers/AuthController')
 const PORT = 5000
 const app = express()

 app.use(express.json())
 app.use(express.static('public'))
 app.use('/img', express.static(path.join(__dirname, 'img')))
 app.use(bodyParser.json())
 app.use(cors())

 app.get('/', (req, res)=>{
    res.status(200).json({
        status: "ok",
        body: {
            title: 'Good day',
            description: 'Good desc !!!'
        }
    })
 })
 app.use('/api', AuthController)
 app.use('/api', CasinoController)
 app.use('/api', GameController)

 function startApp(){
     try{
        app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`))
     }
     catch(e){
        console.log(e)
     }
 }

startApp()
 