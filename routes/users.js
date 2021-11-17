const route = require('express').Router();

route.post('/route',(req,res)=>{
    console.log(req.body)
})

route.get('/route',(req,res)=>{
    res.send("this is route page")
})

module.exports = route;