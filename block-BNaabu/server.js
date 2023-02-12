var express=require('express')
var logger=require('morgan')

var app=express()
app.use(logger('dev'))

// middleware which throws err
app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "/admin") {
      return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
  });

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.get('/about',(req,res)=>{
    res.send('welcome about')
})


// 404 handle error
app.use((req,res,next)=>{
    res.send('page Not found')
})

// custom error 
app.use((err,req,res,next)=>{
    res.status(500).send(err)
    console.log(err)
})


app.listen(5000,()=>{
    console.log('server is listening on port 5k')
})