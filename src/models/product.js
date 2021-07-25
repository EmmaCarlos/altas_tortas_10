const path = require('path');
const fs = require('fs');
const category = require("./category");
module.exports = {
    // Directory: ruta al json con el que se va a estar modificando el modelo
    directory: path.resolve(__dirname,"../data","products.json"),
    // All: devuelve la informacion del JSON que vamos a consultar. todos los resultados.
    all: function() {
        const file = fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },
    //el category, que antes era un número, pasa a ser el objeto que lo va a reemplazar
    allWithExtra: function () {
        return this.all().map(element => {
             element.category = category.one (element.category);
             return element;
            })},
    porCategoria: function(category){
      let productos = this.allWithExtra()
      return productos.filter(producto => producto.category.name == category)
    },
    randomProducs: function(){
        let productos = this.allWithExtra()
      
      let aleatorios = [];
    for (let index = 0; index < 100; index++) {
    let numero = Math.floor(Math.random() * productos.length + 1);
    if(aleatorios.length < 4 && aleatorios.includes(numero) == false){
    aleatorios.push(numero)
  }
} 
      return productos.filter(producto => aleatorios.includes(producto.id))      
    },
    //one: con el id nos devuelve el elemento único que corresponde
    one: function (id) {
        return this.all().find(element => element.id == id);
    },
    oneWithExtra: function (id) {
      return this.allWithExtra().find(element => element.id == id);
  },
  new: function (data,file) {
    const directory = path.resolve(__dirname,"../data","products.json")
    let productos = this.all();
    let nuevo = {
        id: productos.length > 0 ? productos[productos.length -1].id + 1: 1, //si el array tiene más de 0 productos, posicion-1 es el ultimo del array, se le suma uno al nuevo, 
        name: data.name,
        category: parseInt(data.category), //no seria category?
        imagen: "uploads/products/" + file.filename,
        precio: data.precio,
        descripcion: data.descripcion,
    }    
    productos.push(nuevo)
    fs.writeFileSync(directory,JSON.stringify(productos,null,2));
    return true;    
},
  save: (req, res) => {
        req.body.imagen = req.file ? req.file.filename : ''; // no entiendo este metodo
        let productId = productsModel.save(req.body); 

        res.redirect('/productos/detalle/' + productId);
    },
  edit: function (data,file,id) {
       const directory = path.resolve(__dirname,"../data","products.json")
       let productos = this.all();
       let updated = this.one(id);
      // eliminamos la imagen de la carpeta upload
      let rutaImagen= path.resolve(__dirname,"../../public",updated.imagen)
      if (fs.existsSync(rutaImagen) && file != undefined){
        fs.unlinkSync(rutaImagen)
      }                 
        productos.map(producto => {
          if(producto.id == id ){
              producto.name = data.name;
              producto.category = parseInt(data.category);
              producto.imagen = file != undefined ? "uploads/products/" + file.filename:producto.imagen; 
              producto.precio = data.precio;
              producto.descripcion = data.descripcion;
              return producto
          }
          return producto
      })
      fs.writeFileSync(directory,JSON.stringify(productos,null,2));
      return updated;
  },
  delete: function (id) {
      const directory = path.resolve(__dirname,"../data","products.json")
      let productos = this.all();
      let deleted = this.one(id);
      // eliminamos la imagen de la carpeta upload
      let rutaImagen= path.resolve(__dirname,"../../public",deleted.imagen)
      console.log(deleted)
      if (fs.existsSync(rutaImagen)){fs.unlinkSync(rutaImagen)}
      // filtarmos el producto que deaseamos eliminar
      productos = productos.filter(producto => producto.id != deleted.id )
      fs.writeFileSync(directory,JSON.stringify(productos,null,2));
      return true;
} 
    // para este sprint se necesita: mostrarlo, leerlo y poder seleccionar por producto
    //create: proximos sprints
    //edit: proximos sprints
    //delete: proximos sprints
}