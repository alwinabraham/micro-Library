const mongoose = require("mongoose")

mongoose.model("Customer",{
    // Title, author, numberPages, Publisher
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type:String,   
    }
})