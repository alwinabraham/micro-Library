const express = require("express")
const mongoose = require("mongoose")    
const app = express()

mongoose
  .connect("mongodb://localhost:27017/booksservice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/',(req,res)=>{
    res.send("This is our main End")
})

app.listen(4545,()=>{
    console.log("Server working at 4545");
})