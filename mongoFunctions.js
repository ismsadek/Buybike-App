const mongoose = require('mongoose');
let connString = 'mongodb://ismsadek:amor..com93@ds119110.mlab.com:19110/buybike-app'
const db = mongoose.connection;
mongoose.connect(connString);
db.on('error',function(){
console.log("Error al conectarse a Mongo");
});

db.once('open', function() {
console.log("Conectado a MongoDB");
});

const motoSchema = mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	marca: {
		type: String,
		required: true
	},
	modelo: {
		type: String,
		required: true
	},
	cilindrada: {
		type: String,
		required: true
	},
	potencia: {
		type: Number,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	foto: {
		type: String,
		required: true
	}
});

let motoModel = mongoose.model('Moto', motoSchema);

module.exports = {

	getBikeById: (id,marca, modelo) => {
     return motoModel.findById(id, (err,result) => {
       if(result){
         result.marca = marca
         result.modelo = modelo
         result.save();
       }
     });
   },
}
