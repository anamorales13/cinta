'use strict'


var Usuario = require('../models/usuario');
var fs = require('fs');
var path = require('path');

var controllers = {



    getuserbyname: (req, res) =>{

        //1. sacar el string a buscar
        var name= req.params.name;

        //2. find or (para hacer varias condiciones)
        Usuario.findOne({"nombre": {"$eq": name}})
        .exec((err, articles)=>{

            if(err){
                return res.status(500).send({
                    status:'error', 
                    message: 'Error en la petición'
                 });
            }

            if(!articles || articles.length<=0){
                return res.status(404).send({
                    status:'error', 
                   message: ' no hay articulos que coincidan con tu busqueda'
                 });
            }
            return res.status(200).send({
                status:'sucess', 
                articles
             });
        });

    
    }

};


module.exports = controllers;