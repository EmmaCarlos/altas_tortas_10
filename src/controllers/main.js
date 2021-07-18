module.exports = {
    index: (req, res) => res.render("home", {title: "Home", style: null }),
    contact:(req, res) => res.render("contact",{title: "Contacto"}),
    search:(req, res) => res.render("products/list"), 
     
}

/*  consulta para el profesor */ 