var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')


var app=express()

// app.use(logger('dev'))
app.use(logger('tiny'))
// app.use(logger('combined'))

app.use(cookieParser())

app.use((req,res,next)=>{
  console.log(req.cookies)
  next()
})

app.use('/about',(req,res,next)=>{
  res.cookie('username','xyz')
  res.end('about page')
})

app.get('/',(req,res)=>{
    res.send('Welcome to nodeJS')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})