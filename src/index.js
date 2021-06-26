const express = require('express');
const path = require('path');
const app = express();


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use(express.static(path.resolve(__dirname,'../public')));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views', 'login.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','register.html'));
});

app.get('/carrito', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','carrito.html'));
});

app.get('/contacto', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','contacto.html'));
});

app.get('/productos', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','productos.html'));
});

app.get('/productdetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','productdetail.html'));
});