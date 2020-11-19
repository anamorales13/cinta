'use strict'


// Cargar modulos de node para crear servidor
var express= require('express'); //el que crea el servidor.
var bodyParser= require('body-parser')  //recibir las peticiones


// Ejecutar express (para poder trabajar con http)
var app= express(); //esto va a ser la app en si, es lo que 
                    // luego exportaremos.

// cargar ficheros rutas
var articles_routes= require('./routes/usuarios');

//cargar middlewares: siempre se ejecuta antes de 
//                     cargar una ruta de la web.

app.use(bodyParser.urlencoded({extended:false}))//cargar el bodyparser
app.use(bodyParser.json()); //convertir cualquier peticion que me llege a json.


//CORS : permitir peticiones desde front-end
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




//añadir prefijos a rutas / Cargar rutas
 app.use('/api', articles_routes);



//Exportar modulo (que es el fichero actual): para poder usarlo fuera.
module.exports = app;
