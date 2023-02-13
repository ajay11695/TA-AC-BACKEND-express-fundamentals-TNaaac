const { json } = require('express')
var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express()

// middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extened:false}))

// cookies
app.use((req,res,next)=>{
    console.log(req.cookies)
    res.cookie('count',1)
    next()
})

// custom error
app.use('/admin',(req,res,next)=>{
    next('unauthorized page')
})

// route
app.get('/',(req,res)=>{
    res.send('<h2>Welcome to express</h2>')
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})

// params
app.get('/users/:username',(req,res)=>{
    let username=req.params.username
    console.log(username)
    res.send(`<h2>${username}</h2>`)
})

// post request
app.post('/form',(req,res)=>{
    res.send(req.body)
})

app.post('/json',(req,res)=>{
    res.json(req.body)
})

// 404 handle error
app.use((req,res)=>{
    res.send('Page Not Found')
})

// error
app.use((err,req,res,next)=>{
    res.status(500).send(err)
})



app.listen(3000,()=>{
    console.log('serever is listening on port 3k')
})