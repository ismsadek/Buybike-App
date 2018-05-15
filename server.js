const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

//Middlewares
app.use(bodyParser.json())
app.use(express.urlencoded());
app.use(cors());

const serverPort = 3000;

//Errors
var messageErrorJson = {
  error: "Not Found",
  description: "This item was not found",
  url: "http:://#"
}

// MONGO CONNECTION

	let connString = "mongodb://ismsadek:amor..com93@ds119110.mlab.com:19110/buybike-app";
	const db = mongoose.connection;
	mongoose.connect(connString);

	db.on('error',function(){
		console.log("Error al conectarse a Mongo");
	});
	db.once('open', function() {
		console.log("Conectado a MongoDB");
	});





// app.get("/api/motos", (req, res) => {
 
// })

// app.get("/api/motos/:id", (req, res) => {
  
//   try {
    
//   }catch(err){
//     res.status(404).json(errorJson)
//   }
// })


