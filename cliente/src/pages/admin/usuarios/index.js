import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';

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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));


export default function UsuarioListage() {
  const classes = useStyles();

  const [usuarios, setUsuarios]= useState([]);

  useEffect(()=>{
  	async function LoadUsuarios(){

  		const response = await api.get('/userList')
  		setUsuarios(response.data)
  	}
  	LoadUsuarios();
  }, [])


async function handleDelete(id){

	if(window.confirm("Realente deseja excluir este Usuario?")){

		var result = await api.delete('/userDelete/'+id)
		if(result.status===200){
			window.location.href=("/admin/usuarios")
		}else {

			alert("ocoreu um erro por favor tente novamente")
		}
	}
}


  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'USUARIOS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           		<Grid item sm={12}>
          		<Paper className={classes.paper}>

          			<h2>Lista de Usuarios</h2>
	          		 <Grid container spacing={3}>
			          		<Grid item xs={12} sm={12}>
					         	 <TableContainer component={Paper}>
							      <Table className={classes.table} size="small" aria-label="a dense table">
							        <TableHead>
							          <TableRow>
							            <TableCell>Nome</TableCell>
							            <TableCell align="center">Email</TableCell>
							            <TableCell align="center">Tipo de Usuario</TableCell>
							            <TableCell align="center">Data de Cadastro</TableCell>
							            <TableCell align="right">Opcoes</TableCell>
							          </TableRow>
							        </TableHead>
							        <TableBody>
							      		{usuarios.map((row) => (
							            <TableRow key={row._id}>
							              <TableCell component="th" scope="row">
							                {row.nomeUsuario}
							              </TableCell>
							              <TableCell align="center">{row.emailUsuario}</TableCell>
							              <TableCell align="center">{row.tipoUsuario===1 ?<Chip label="Administrador" color="primary" /> : <Chip label="Funcionario" color="secondary" /> }</TableCell>
										              <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
							              <TableCell align="right">

							              	<ButtonGroup aria-label="outlined secondary button group">
											  <Button color="primary" href={'/admin/usuarios/editar/'+row._id} >Editar</Button>
											  <Button color="secondary" onClick={()=> handleDelete(row._id)} >Excluir</Button>
											  
											</ButtonGroup>

							              </TableCell>
							            </TableRow>
							          ))}
							     
							        </TableBody>
							      </Table>
							    </TableContainer>
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