const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port=9000

//connection database using moongose
const moongose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await moongose.connect('mongodb://localhost:27017/todo_db')
    console.log("Database connected..");
    
}
//moongose end

//routing 
const router=require('./routes/router')
app.use("/userrouter",router)



app.listen(port,()=>{
    console.log("server running http://localhost:9000")
})