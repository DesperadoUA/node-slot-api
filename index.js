 const express = require('express')
 const cors = require('cors')
 const path = require('path')
 const bodyParser = require('body-parser')
 const AuthController = require('./controllers/AuthController')
 const UploadController = require('./controllers/UploadController')
 const SearchController = require('./controllers/SearchController')
 const SettingsController = require('./controllers/SettingsController')
 const OptionsController = require('./controllers/OptionsController')
 const PageController = require('./controllers/PageController')
 const SitemapController = require('./controllers/SitemapController')
 const CasinoController = require('./controllers/CasinoController')
 const GameController = require('./controllers/GameController')
 const PORT = 5000
 const app = express()

 app.use(express.json({limit: '25mb'}))
 app.use(bodyParser.json())
 app.use(express.static('public'))
 app.use('/img', express.static(path.join(__dirname, 'img')))
 app.use(cors())
 global.cash = {}

 app.use('/api', SearchController)
 app.use('/api', SettingsController)
 app.use('/api', OptionsController)
 app.use('/api', AuthController)
 app.use('/api', UploadController)
 app.use('/api', PageController)
 app.use('/api', SitemapController)
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
 