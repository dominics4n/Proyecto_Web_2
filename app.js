const express = require('express');
const bodyParser = require('body-parser');
const db = require('./bd');
const pagesRutas = require('./routes/pages');

//instanciamos el uso del servidor
const app = express();
app.use(express.static('public'));

// analizar los datos del cuerpo del formulario que viene desde el html
// informacion que mandaremos por metodos como POST o GET
app.use(bodyParser.urlencoded({extends:false}));

// configuracion de el motor de plantillas
app.set('view engine','ejs');

// validacion de db
db.connect(err=>{
    if(err){
        console.error('server: llama',err);
    }else{
        console.log('Server no llama feliz');
    }
});

app.use('/', pagesRutas)

// mostrar la lista de los usuario:
app.get('/',(req,res)=>{
    // consulta
    const consulta = 'SELECT * FROM users';
    db.query(consulta,(err,results)=>{
       if(err){
        console.error('error en la consulta',err);
        res.send('Error, no se pueden recuperar datos');
       }else{

            res.render('index',{users: results });
       } 
    });
});



//servidor
const port = 3009;
app.listen(port,()=>{
    console.log(`server desde http://127.0.0.1:${port}`);
});