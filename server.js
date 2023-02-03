const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3001

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine" ,"ejs");
//app.set("views", path.resolve(__dirname,"views/ejs"))

app.use('/css' , express.static(path.resolve(__dirname, "assets/css")))
app.use('/img' , express.static(path.resolve(__dirname, "assets/img")))
app.use('/js' , express.static(path.resolve(__dirname, "assets/js")))

app.set("view engine" , "ejs")
app.set("views",)
app.get('/' , (req,res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});
