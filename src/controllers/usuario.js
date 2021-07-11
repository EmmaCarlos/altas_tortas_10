module.exports = {
    login: (req, res) => res.render("users/login", {title: "Formulario de login", style: "formlogin.css" }),
    register: (req, res) => res.render("users/register", {title: "Formulario de Registro", style: "formregistro.css" })
}