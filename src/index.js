const express=require('express');
const morgan=require('morgan');

const app = express();

//SETTINGS---------------------------------------------
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//MIDDLEWARES------------------------------------------
app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());


//ROUTES-----------------------------------------------
app.use(require('./routes/index_routes.js'));
app.use(require('./routes/peliculas.js'));
app.use(require('./routes/usuarios.js'));


//STATIC-FILES-----------------------------------------

//inicio el server-------------------------------------
app.listen(app.get('port'),()=>{
    console.log('Escuchando el puerto', app.get('port'))
})