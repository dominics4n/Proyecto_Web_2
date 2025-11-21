const express = require('express');
const path = require('path');
const router = express.Router();
router.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public','/page1.html'));
});
router.get("/compara", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public','/page2.html'));
});
router.get("/calculadora", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public','/calculadora.html'));
});
module.exports=router;