const express = require('express');
const path = require('path');
const app = express();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));

app.use(express.static(path.resolve(__dirname,'../public')));

app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

const main = require('./routes/main');
app.use(main)

const productos = require('./routes/productos');
app.use("/productos", productos)

const usuarios = require('./routes/usuarios');
app.use("/usuarios", usuarios)

