const { validationResult} = require ('express-validator')
/* require modelo de usuarios */
module.exports = {
    login: (req, res) => res.render("users/login", {title: "Formulario de login", style: "formlogin" }),
    register: (req, res) => res.render("users/register", {title: "Formulario de Registro", style: "formregistro" }),
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render ('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
    } 
    /* access: post extra - utilizar el metodo de validPassword y el metodo byEmail - guardar el usuario logeado en sesion - instalar express sesion*/
    /*save: post register - utilizar metodo create del usuario*/
}