 import express from "express"

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

 function startApp(){
     try{
        app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`))
     }
     catch(e){
        console.log(e)
     }
 }

startApp()
 