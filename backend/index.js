         //express
const express = require("express")
const app = express()        
app.use(express.json()) 

      //dotenv
require('dotenv').config()
const Port = process.env.port

       //sequelize
const sequelize = require("./config/db")    

       //cors
const cors = require("cors")  
app.use(cors())     

    //routes..
const userRouter = require("./router/userRouter")
app.use("/",userRouter)

//base API
app.get("/",(req,res)=>{
    res.send("WELCOME TO HOME PAGE")
})

//estblishing connection
app.listen(Port,async ()=>{
    try {
        await sequelize
        console.log("DB is connected")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is running on ${Port}`)
})