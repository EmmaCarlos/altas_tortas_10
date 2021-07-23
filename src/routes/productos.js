const express = require ('express');
const productos = require('../controllers/productos');
const router = express.Router();
const multer = require('multer');
const path = require('path');

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, "torta"+ '-' +"file.fieldname" + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

router.get("/crear", productos.create);
router.get("/:category?", productos.index);
router.get("/detalle/:id", productos.show);
router.get("/editar/:id", productos.edit);

/* router.post("/save",[upload.single("imagen")],product.save)

router.put("/editar/:id",[upload.single("imagen")],product.edit)

router.delete("/delete/:id",product.delete)
 */

module.exports = router