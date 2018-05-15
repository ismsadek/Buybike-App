const {
  mongoose
} = require("../index")
const ObjectId = mongoose.Types.ObjectId;

const motoSchema = mongoose.Schema({
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
	}
	// foto: {
	// 	type: ,
	// 	required: true
	// }
});

let motoModel = mongoose.model('Moto', motoSchema);
db.insert({marca:"Honda", modelo:"sh", cilindrada:125, potencia: 15, precio: 3500})

module.exports = {
  motoModel: motoModel
}