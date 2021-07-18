const product = require ("../models/product")
module.exports = {
    index: (req, res) => res.render("products/list", {title: "Listado de productos", style: "list", products: product.allWithExtra() }),
    show: (req, res) => res.render("products/detail", {title: "Detalles de producto", style: null }),
    create: (req, res) => res.render("products/create",{title: "Crear producto", style: "formregistro",}), 
    edit: (req, res) => res.render("products/edit", {title: "Edicion de producto", style: null }),
}

/*
 en el metodo show utilizar el metodo  oneWithExtra  del modelo de productos con el parametro del req.params.id
*/

/* 
 en metdo index verificar si llega el parametro en el req.parmas.category 
  y en caso de exista utilizar el metodo allWithExtra con un flitro por el nombre de la categoria del producto
  sino utilizar el metodo allWithExtra sin filtro 


  */

