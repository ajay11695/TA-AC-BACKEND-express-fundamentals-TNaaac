var express=require('express')
var app=express()

app.use(express.json())
app.use(express.urlencoded({extend:false}))
app.use(express.static(__dirname + '/public'))

app.use((req,res)=>{
    console.log(req.method,req.url)
})
app.post('/json',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
app.post('/contact',(req,res)=>{
    console.log(req.body)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})