const mongoose = require("mongoose")

mongoose.model("Book",{
    // Title, author, numberPages, Publisher
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    numberPages:{
        type:Number,
    },
    publisher:{
        type:String,   
    }
})