const express = require('express')
const app = express()
const routes = require('./routes/routes')
const connectDB = require('./db/connect')
require("dotenv")
//middleware
app.use(express.static('./public'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',routes)
const port = 3000

const start = async () =>{
    try{
        await connectDB('mongodb+srv://jerry:YbgAzX4O5JYOguvX@cluster0.qbt6h.mongodb.net/')
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }
    catch(error){
        console.log(error)
    }
}
start()