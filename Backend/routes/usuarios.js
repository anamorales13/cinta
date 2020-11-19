'use strict'

var express= require('express');
var ArticleController= require('../controllers/usuario');


var router = express.Router(); //disponible el router

//rutas de pruebas:

router.get('/user/:name', ArticleController.getuserbyname);

module.exports= router;