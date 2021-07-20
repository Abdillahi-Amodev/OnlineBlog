const express= require('express')
const app =express();
const router =require('./controller/route.js')
const mongoose =require('mongoose')
require('dotenv').config()

app.use(express.static('public'))
app.use(express.static('single'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const url ='mongodb+srv://moussa:moussa123@nodetuto.f62pu.mongodb.net/Restfull?retryWrites=true&w=majority';

mongoose.connect(url,{useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('database connected');
}).catch((err)=>console.log(err))


app.use(router)

const port =process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`listening port ${port}` );
})
