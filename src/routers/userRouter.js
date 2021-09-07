const userController = require('../controllers/userController')
const express = require('express');
const router = express.Router();




router.post('/register',  userController.Store)
router.get('/userList',  userController.Index)
router.get('/user/:id',  userController.IndexOne)
router.delete('/userDelete/:id',  userController.DeleteOne)
router.put('/userUpdate/:id',  userController.UpdateOne)


module.exports = router