// Declarando as dependencias
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//setup do bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));

//setup do EJS
app.set("view engine", "ejs");

// array inicial de amigos
const friends = ["Leonardo", "Mateus", "Matheus", "Wilson", "João"];

// rota da home page
app.get("/", (req, res) => {
  res.render("home");
});

//rota POST de quando um novo amigo é adicionado via formulário
app.post("/friends", (req, res) => {
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

//rota para lista de amigos + formulário
//localhost:8080/friends no browser
app.get("/friends", (req, res) => {
  res.render("friends", {
    friends: friends
  });
});

//server para rodarmos com node app.js
//localhost:8080 no browser
app.listen(8080, () => console.log("Server started!!!"))
