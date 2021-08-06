const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/usuario')

<<<<<<< HEAD
router.get("/login", controller.login)
router.get("/register", controller.register)
=======

const path = require ('path');
const multer = require ('multer');

const { body } = require ('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatars')
    },
    filename: (req, file, cb) => {
        cb(null, "usuario"+ '-' + file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const uploadFile = multer ({storage});
const validaciones = [
    body('nombre').notEmpty().withMessage('Tenés que escribir tu nombre completo'),
    body('nombreUsuario').notEmpty().withMessage('Tenés que elegir un nombre de usuario'),
    body('E-mail').notEmpty().isEmail().withMessage('Tenés que escribir un email válido'),
    body('password').notEmpty().withMessage('Tenés que elegir una contraseña'),
    body('avatar').custom((value, { req })=> {
        let file = req.file;
        if (!file) {
            throw new Error ('Tenes que subir una imagen');
        }
        return true;
    })
]
//Formulario de Login
router.get("/login", usuario.login)
//Procesar el Registro
router.post ("/register",uploadFile.single ('avatar'),validaciones, usuario.processRegister)
//Formulario de Registro
router.get("/register", usuario.register)
>>>>>>> 9895e92b92f1cf885afdb9905de18fbd357a088c


module.exports = router