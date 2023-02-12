var express=require('express')
var logger=require('morgan')

var app=express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extened:false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})

app.post('/new',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
    
})

app.get('/users/:username',(req,res)=>{
    var username=req.params.username
    res.send(username)
    console.log(req.params)
})

app.listen(5000,()=>{
    console.log('server is liostening on port 5k')
})

