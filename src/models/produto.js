const mongoose = require('../database/db')

const produtoSchema = new mongoose.Schema({


	nomeProduto:{
		type: String,
		required: true
	},

	descricaoProduto:{
		type: String
	},

	precoProduto:{
		type:String,
		required: true
	},
	qtdProduto:{
		type: Number,
		default: 0
	}

}, {timestamps: true})


const Produto = mongoose.model('produto', produtoSchema)

module.exports = Produto;