var express = require('express')
var app=express()

app.use('/user',(req,res,next)=>{
    console.log(req.method,req.url)
    next()
})

app.get('/',(req,res)=>{
    res.send('welcome to express')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})
