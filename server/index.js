const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
const register = require("./routes/register")
const login = require("./routes/login")

const products = require('./Product')

const app = express()



app.use(express.json())
app.use(cors())

app.use("/api/register",register)
app.use("/api/login",login)

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to our Online Shop Api....");
})

app.get('/product',(req,res)=>{
    res.status(201).send(products);
})

const port = process.env.PORT || 8080;
const uri = process.env.DB_URI;

app.listen(port, ()=> console.log(`Server running on port ${port}`));

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("MongoDB connection successful..."))
.catch((err)=> console.log("MongoDB connection failed",err.message));
