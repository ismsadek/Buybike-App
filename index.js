const express = require("express");
const app = express();


app.use(express.urlencoded()) // middleware Bodyparse

app.get("/api/home", async function(req, res) {
	res.status(200).send("Hola que ase")
});

app.get("/api/bikes", async function(req, res) {
	res.json()
});



app.get("/api/bikes/:id", async function(req, res) {
  var id = req.params.id
  try{var response = await myModule.getBikeById(id);
  res.status(200).json(response)}catch(response){}
});



app.listen(3000);



