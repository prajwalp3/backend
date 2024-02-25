// require('dotenv').config({path:})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {DB_NAME}from "./constants";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>
{app.listen(process.env.PORT||8000,()=>{
    
    console.log(`server  is runign at port:${process.env.PORT}`);
})})
.catch((err)=>{
    console.log("mongo db connectionfailed!!!",err);

})



/*
import express from "express"
const app=express()
(async ()=>{
try{
   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("ERRR:",error);
    throw error
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);

   })

} catch(error){
    console.error("ERROR:",error)
    throw error
}

})
*/