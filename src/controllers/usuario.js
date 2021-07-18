/* require modelo de usuarios */
module.exports = {
    login: (req, res) => res.render("users/login", {title: "Formulario de login", style: "formlogin.css" }),
    register: (req, res) => res.render("users/register", {title: "Formulario de Registro", style: "formregistro.css" })
    /* access: post extra - utilizar el metodo de validPassword y el metodo byEmail - guardar el usuario logeado en sesion - instalar express sesion*/
    /*save: post register - utilizar metodo create del usuario*/
}