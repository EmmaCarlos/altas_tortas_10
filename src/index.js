const express = require('express');
const path = require('path');
const app = express();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));

app.use(express.static(path.resolve(__dirname,'../public')));

app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

const main = require('.routes/main');
app.use(main)

const productos = require('.routes/productos');
app.use(productos)

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