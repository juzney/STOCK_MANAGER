const Produto = require('../models/produto')


module.exports = {

	async Store(req, res){
		const {nomeProduto}= req.body;
		try{


			if(await Produto.findOne({nomeProduto}))
				return res.send({"erro": "produto ja existe"})

			const produto = await Produto.create(req.body)
			return res.send(produto)

		}
		catch(erro){

			return res.status(400).send({"erro":"falha ao registrar produtos"})
		}

		
	},


	async Index(req, res){

		try{
			const produto = await Produto.find(req.body)
			return res.send(produto)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao listar produtos"})
		}


	},

	async IndexOne(req, res){

		try{
			const produto = await Produto.findOne({_id:req.params.id})
			return res.send(produto)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar produtos"})
		}


	},

	async UpdateOne(req, res){

		try{

			const produto = await Produto.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "Produto Actualizado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao actualizar produtos"})
		}
	},


	async DeleteOne(req, res){

		try{

			const produto = await Produto.deleteOne({_id:req.params.id})
			return res.send({"message": "Produto deletado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao deletar produtos"})
		}
	}


}