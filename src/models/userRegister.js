const mongoose = require('../database/db')
const express = require('express')
const bcrypt = require('bcryptjs')



const userSchema = new mongoose.Schema({

	nomeUsuario:{
		type: String,
		required: true
	},
	emailUsuario:{
		type: String,
		required: true,
		unique: true
	},
	
	tipoUsuario:{
		type: Number,
		required: true,
		default: 1
	},
	senhaUsuario:{
		type: String,
		required: true
	}




}, {timestamps: true})


userSchema.pre('save', async function(next){
	const hash = await bcrypt.hash(this.senhaUsuario, 10)
	this.senhaUsuario = hash;
})



module.exports = mongoose.model('User', userSchema)