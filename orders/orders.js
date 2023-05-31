const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(bodyParser.json())

mongoose
  .connect("mongodb://localhost:27017/ordersservice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

require("./Order")
const Order = mongoose.model("Order")

app.post("/order",(req,res)=>{

    let newOrder = {
        CustomerID:req.body.CustomerID,
        BookID:req.body.BookID,
        initialDate:req.body.initialDate,
        deliveryDate:req.body.deliveryDate
    }
    var order = new Order(newOrder)
    order.save().then(()=>{
        console.log("order created with success");
    }).catch((err)=>{
        if(err){
            throw err
        }
    })
    res.send("A new Order Created")
})

app.get("/orders",(req,res)=>{

    Order.find().then((orders)=>{
        res.json(orders);
    }).catch((err)=>{
        if(err){
            throw err
        }
    })
})

app.listen(7777,()=>{
    console.log("Order(7777) is running");
})