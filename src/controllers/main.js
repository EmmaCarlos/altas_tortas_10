const product = require ("../models/product")
module.exports = {
    index: (req, res) => res.render("home", {title: "Home", style: null }),
    contact:(req, res) => res.render("contact",{title: "Contacto"}),
    search:(req, res) => res.render("products/list"), 
     
}
  
/* modificar el metodo index para enviar a la vista del home una array de 4 productos de forma alatoria  */

/*  crear en el modelo de productos  un metodo para selecionar 4 productos de forma alatoria */ 