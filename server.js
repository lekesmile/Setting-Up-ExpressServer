
//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("Hello Welcome");
});

app.get("/contact", function(req, res){
  res.send("Contact me @ Smile.com");
});

app.get("/about", function(req, res){
  res.send("I am a hero");
});

app.listen (5000, function (){
  console.log("Server has started on port 5000");
});
