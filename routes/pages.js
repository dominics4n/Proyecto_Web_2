const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../bd');

router.get("/edit", (req, res)=>{
    const consulta = 'SELECT * FROM users WHERE id ="'+req.query.id+'"';
    db.query(consulta,(err,results)=>{
       if(err){
        console.error('error en la consulta',err);
        res.send('Error, no se pueden recuperar datos');
       }else{
            res.render('edit',{users: results });
       } 
    });
});

router.get("/update", (req, res)=>{
    const {id, name, email} = req.query;
     const consulta = 'UPDATE users SET name = "'+name+'", email = "'+email+'" WHERE id = "'+id+'"';
     db.query(consulta, function (err, result) {
     if (err) throw err;
     });
     res.redirect('/');
});

router.get("/delete", (req, res)=>{
    const consulta = 'SELECT * FROM users WHERE id ="'+req.query.id+'"';
    db.query(consulta,(err,results)=>{
       if(err){
        console.error('error en la consulta',err);
        res.send('Error, no se pueden recuperar datos');
       }else{
            res.render('delete',{users: results });
       } 
    });

});

router.get("/deletefrfr", (req, res)=>{

    const consulta = 'DELETE FROM users WHERE id ="'+req.query.id+'"';
    db.query(consulta,(err,results)=>{
       if(err){
        console.error('error en la consulta',err);
        res.send('Error, no se pueden borrar los datos');
       }else{
            res.redirect('/');
       } 
    });
});

 router.post('/add',(req,res)=>{
     const {name, email} = req.body;
     const consulta = 'INSERT INTO users (name, email) VALUE ("'+name+'","'+email+'")';
     db.query(consulta, function (err, result) {
     if (err) throw err;
     });
     res.redirect('/');
 })

module.exports=router;