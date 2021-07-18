const express= require('express')
const app =express();
require('dotenv').config()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Amodev online cool!!!!!')

})

const port =process.env.PORT || 8080;









app.listen(port,()=>{
    console.log(`listening port ${port}` );
})