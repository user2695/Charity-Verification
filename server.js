//jshint esversion:6

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DB = "mongodb+srv://admin-zubair:zubair12@cluster0.7tjmi.mongodb.net/testDatabase?retryWrites=true&w=majority/notesDB"

mongoose.connect(DB, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false
}).then(()=>{
    console.log("connected to mongoDb Atlas");
}).catch((error)=>
        console.log("no connection"));

//Schema

const notesSchema = {
    fullname: String,
    email: String,
    psw: String,
    telcollector: String,
    org:String,
    orgEmail: String
}

const Note = mongoose.model("Note",notesSchema);





const { check, validationResult} = require("express-validator");

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



  app.post("/", function(req, res){
    let newNote = new Note({
        fullname:req.body.fullname,
        email:req.body.email,
        psw:req.body.psw,
        telcollector:req.body.telcollector,
        org:req.body.org,
        orgEmail:req.body.orgEmail
    });
    newNote.save();
    res.redirect("/");
})




app.listen(3000, function(){
    console.log("Server started at port 3000");
});
