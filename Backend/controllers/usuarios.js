'use strict'


var Usuario = require('../models/usuarios');
var fs = require('fs');
var path = require('path');

var controllers = {



    getuserbyname: (req, res) => {
        var name = req.params.name;
      console.log("hol2a");
        Usuario.findOne({ name: { $eq: name } }).exec ((err, users) =>{
            console.log("hol3a");
                if (err) return res.status(500).send({
                    status: 'fail',
                    message: 'error en al peticion'
                });
                if (users) {
                    console.log(user);
                    return res.status(200).send({
                        users
                       
                    });
                }
            });
    },


};


module.exports = controllers;