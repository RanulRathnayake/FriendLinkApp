const express = require('express')
const app =express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 6000


mongoose.connect(MONGOURI/* ,{
    userNewUrlParser: true,
    useUnifiedTopology:true
} */)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

require('./model/user')
require('./model/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
//WpD7tK1JEKqhs0kf

// MIDDLEWARE: 
/*const customMiddleware = (req,res,next)=>{
    console.log("middleware executed!!")
    next()
}


app.use(customMiddleware) 

app.get('/home',(req,res)=>{
    console.log("home")
    res.send("hello world")
})

app.get('/about',(req,res)=>{
    console.log("about")
    res.send("about page")

})*/

app.listen(PORT,()=>{
    console.log("sever is running on ",PORT)
})