import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard'
import Produtos from './pages/admin/produtos'
import CadastroProdutos from './pages/admin/produtos/produtoCadastro'
import EditarProdutos from './pages/admin/produtos/produtoEditar'


import Usuarios from './pages/admin/usuarios'
import CadastroUsuarios from './pages/admin/usuarios/usuarioCadastrar';
import EditarUsuarios from './pages/admin/usuarios/usuarioEditar';


// IMPORTS CLIENTE

import Home from './pages/cliente/home'
import ProdutoDetails from './pages/cliente/produtos/produtosDetails'


export default function Routes(){

	return(
			<BrowserRouter>
				<Switch>
					// ROTAS CLIENTE
					<Route path="/" exact component={Home}/>
					<Route path="/produtos/:idProduto" exact component={ProdutoDetails}/>

					// ROTAS ADMIN
					<Route path="/admin" exact component={Dashboard}/>
					<Route path="/admin/produtos" exact component={Produtos}/>
					<Route path="/admin/produtos/cadastrar" exact component={CadastroProdutos}/>
					<Route path="/admin/produtos/editar/:idProduto" exact component={EditarProdutos}/>

					<Route path="/admin/usuarios" exact component={Usuarios}/>
					<Route path="/admin/usuarios/editar/:idUsuario" exact component={EditarUsuarios}/>
					<Route path="/admin/usuarios/cadastrar" exact component={CadastroUsuarios}/>
					
				</Switch>

			</BrowserRouter>

		)
}