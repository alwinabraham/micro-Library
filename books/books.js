const express = require("express")
const mongoose = require("mongoose")    
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json());

require("./Book")
const Book = mongoose.model("Book")

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

app.post("/book",(req,res)=>{
    // console.log(req.body);
    let newBook = {
        title: req.body.title,
        author:req.body.author,
        numberPages:req.body.numberPages,
        publisher:req.body.publisher
    }
    let book = new Book(newBook)
    book.save().then(()=>{
        console.log("New Book Created");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    res.send("new book created")
})

app.get("/books",(req,res)=>{

    Book.find().then((books)=>{
        res.json(books);
    }).catch((err)=>{
        if(err){
            throw err
        }
    })

})

app.get("/book/:id",(req,res)=>{

    Book.findById(req.params.id).then((book)=>{

        if(book){
            res.json(book);
        }

    }).catch((err)=>{
        if(err){
            res.send('404')
        }
    })

})

app.delete("/book/:id",(req,res)=>{

    Book.findOneAndRemove(req.params.id).then((book)=>{

        res.send("One book is deleted");        

    }).catch((err)=>{
        if(err){
            throw err
        }
    })

})

app.listen(4545,()=>{
    console.log("Server working at 4545");
})