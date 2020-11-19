'use strict'

var express= require('express');
var ArticleController= require('../controllers/usuarios');


var router = express.Router(); //disponible el router

//rutas de pruebas:

router.get('/user/:name', ArticleController.getuserbyname);

module.exports= router;