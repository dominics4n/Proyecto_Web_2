const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

//instanciamos el uso del servidor
const app = express();

// analizar los datos del cuerpo del formulario que viene desde el html
// informacion que mandaremos por metodos como POST o GET
app.use(bodyParser.urlencoded({extends:false}));

// configuracion de el motor de plantillas
app.set('view engine','ejs');

// configuracion de mi DB
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud',
    port:'3306'
});
// validacion de db
db.connect(err=>{
    if(err){
        console.error('server: llama',err);
    }else{
        console.log('Server no llama feliz');
    }
});


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

app.post('/add',(req,res)=>{
    const {name, email} = req.body;
    const consulta = 'INSERT INTO users (name, email) VALUE ("'+req.body.name+'","'+req.body.email+'")';
    db.query(consulta, function (err, result) {
    if (err) throw err;
    });
    res.redirect('/');
})

//servidor
const port = 3009;
app.listen(port,()=>{
    console.log(`server desde http://127.0.0.1:${port}`);
});