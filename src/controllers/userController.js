const User = require('../models/userRegister')


module.exports= {

	async Store(req, res){
		const {emailUsuario} = req.body;

		try{

			if(await User.findOne({emailUsuario}))
				return res.send({"error": "usuario ja existe"})

			const user = await User.create(req.body)
			return res.status(200).send(user)
		}catch(erro){

			return res.status(500).send({"error": "falha ao cadastrar usuario"})
		}


	},


	async Index(req, res){

		try{
			const user = await User.find(req.body);
			res.send(user)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar usuarios"})
		}
	},

	async IndexOne(req, res){
		try{
			const user = await User.findOne({_id:req.params.id});
			res.send(user)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar usuarios"})
		}
	},


	async DeleteOne(req, res){
		try{
			const user = await User.deleteOne({_id:req.params.id});
			res.send({"message": "usuario apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar usuario"})
		}
	},

	async UpdateOne(req, res){
		try{
			const user = await User.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "usuario Actualizado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Actualizar usuario"})
		}
	}


}