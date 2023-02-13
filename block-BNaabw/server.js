// require
var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express()
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))
app.use(cookieParser())

// routes
app.get('/',(req,res)=>{
    res.send('welcome to express')
})

app.get('/users',(req,res)=>{
    res.send('welcome to users')
})

// next routes
app.get('/main',(req,res)=>{
    res.sendFile(__dirname + '/main.html')
})

app.get('/project',(req,res)=>{
    res.sendFile(__dirname + '/project.html')
})

// error handle middlewares
// 404 error
app.use((req,res,next)=>{
    res.send('Page Not Found')
})
// custom error
app.use((err,req,res,next)=>{
    res.send(err)
})


app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})