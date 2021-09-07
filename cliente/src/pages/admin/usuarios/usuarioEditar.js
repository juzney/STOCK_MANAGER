import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api'
import {useParams} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    flexGrow: 1,
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));

export default function UsuariosCadastrar() {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');

  const {idUsuario} = useParams();

  useEffect(()=>{

  		async function getUsuario() {
  			
  			var response = await api.get('/user/'+idUsuario)

  			setNome(response.data.nomeUsuario);
  			setEmail(response.data.emailUsuario);
  			setTipo(response.data.tipoUsuario);
  			setSenha(response.data.senhaUsuario)
  		}

  		getUsuario();
  }, [])


  async function handleSubmit(){

  	const data = {
  		nomeUsuario: nome,
  		emailUsuario: email,
  		tipoUsuario: tipo,
  		senhaUsuario: senha,
  		_id:idUsuario
  	}

  	const response = await api.put('/userUpdate/'+idUsuario, data)

  	if(response.status===200){
  		window.location.href= "/admin/usuarios";
  	}

  	else{
  		alert('Falha ao actualizar usuario')
  	}
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'Usuarios'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3}>

          	<Grid item sm={12}>
          		<Paper className={classes.paper}>

          			<h2>Actualizar Usuario</h2>
	          		 <Grid container spacing={3}>
			          		<Grid item xs={12} sm={12}>
					          <TextField
					            required
					            id="nome"
					            name="nome"
					            label="Nome Completo"
					            fullWidth
					            autoComplete="nome"
					            value={nome}
					            onChange={e=> setNome(e.target.value)}
					          />
					        </Grid>
					        <Grid item xs={12} sm={6}>
					          <TextField
					            required
					            id="email"
					            name="email"
					            label="Email"
					            fullWidth
					            autoComplete="email"
					              value={email}
					            onChange={e=> setEmail(e.target.value)}
					          />
					        </Grid>

					        <Grid item xs={12} sm={3}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="labelTipo">Tipo</InputLabel>
							        <Select
							          labelId="labelTipo"
							          id="tipo"
							         value={tipo}
							        
					            		onChange={e=> setTipo(e.target.value)}
							        >
							          <MenuItem value={1}>Administrador</MenuItem>
							          <MenuItem value={2}>Funcionario</MenuItem>
							        
							        </Select>
							    </FormControl>
					        </Grid>

					        <Grid item xs={12} sm={3}>
					          <TextField
					          	type="password"
					            required
					            id="senha"
					            name="senha"
					            label="Senha"
					            fullWidth
					            autoComplete="senha"
					              value={senha}
					            onChange={e=> setSenha(e.target.value)}
					          />


					        </Grid>

					         <Grid item xs={12} sm={3}>
					          	 <Button variant="contained" color="primary" onClick={handleSubmit}>
      								  Salvar
    							  </Button>
					        </Grid>
			        </Grid>
          		</Paper>
          	
		    </Grid>      
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}