const mongoose = require("mongoose")

mongoose.model("Order",{
    // Title, author, numberPages, Publisher
    CustomerID:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    BookID:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    initialDate:{
        type:Date, 
        required:true  
    },
    deliveryDate:{
        type:Date, 
        required:true  
    }
})