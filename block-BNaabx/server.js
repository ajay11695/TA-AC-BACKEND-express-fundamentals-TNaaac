var express=require('express')
var qs=require('querystring')

var app=express()

// Create a middleware which is similar to morgan(logger) which logs
function logger(req,res,next){
    console.log(req.method,req.url,new Date())
    next()
}

function json(req,res,next){
    let store=''
    req.on('data',(chunk)=>{
        store+=chunk
    })

    req.on('end',()=>{
        req.body=qs.parse(store)
        console.log(req.body)
        next()
    })
}

function static(req,res,next){
    let store=''
    req.on('data',(chunk)=>{
        store+=chunk
    })

    req.on('end',()=>{
        req.body=store
        console.log(req.body)
        next()
    })
}

app.use(logger)
app.use(json)
app.use(static)


app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})