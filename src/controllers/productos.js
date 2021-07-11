module.exports = {
    index: (req, res) => res.render("products/list", {title: "Listado de productos", style: null }),
    show: (req, res) => res.render("products/detail", {title: "Detalles de producto", style: null }),
}