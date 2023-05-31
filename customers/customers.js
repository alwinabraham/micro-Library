const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

mongoose
  .connect("mongodb://localhost:27017/customerservice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

  require("./Customer")
  const Customer = mongoose.model("Customer")

app.post("/customer",(req,res)=>{

    console.log(req.body);
    
    let newCustomer = {
        name: req.body.name,
        age:req.body.age,
        address:req.body.address,
    }

    let customer = new Customer(newCustomer)
    customer.save().then(()=>{
        console.log("New Customer Created");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    res.send("New Customer created")
})
app.get("/customers",(req,res)=>{

    Customer.find().then((customers)=>{
        res.json(customers);
    }).catch((err)=>{
        if(err){
            throw err
        }
    })
})


app.get("/customer/:id",(req,res)=>{

    Customer.findById(req.params.id).then((customer)=>{

        if(customer){
            res.json(customer);
        }

    }).catch((err)=>{
        if(err){
            res.send('404')
        }
    })

})

app.get('/',(req,res)=>{
    res.send("This is our main End")
})

app.listen("5555",()=>{
    console.log("Up and Running - Customer service");
})