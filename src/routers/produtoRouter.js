const produtoController = require('../controllers/produtoController')
const express = require('express');
const router = express.Router();



router.post('/produto/register', produtoController.Store)
router.get('/produto/list', produtoController.Index)
router.get('/produto/:id', produtoController.IndexOne)
router.put('/produto/update/:id', produtoController.UpdateOne)
router.delete('/produto/delete/:id', produtoController.DeleteOne)


module.exports = router;