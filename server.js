//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult} = require("express-validator");
const app = express();
app.use("/styles",express.static("styles"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine","ejs");





//Navigation
app.get("/",function(req,res){
    res.render("index")
});
app.get("/login",function(req,res){
    res.render("login")
})
app.get("/register", function(req, res){
    res.render("register")
  })


app.listen(3000, function(){
    console.log("Server started at port 3000");
});
