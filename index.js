const mongoose  = require("mongoose");
const express = require('express')
const app = express()

app.use(express.json());
app.use(require('./routes'));

mongoose.connect("mongodb+srv://Baysangur:bechan999@cluster0.igeqhh5.mongodb.net/coffe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.listen(3000, ()=>{
   console.log('Сервер работает')
})