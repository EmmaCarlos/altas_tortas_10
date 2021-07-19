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
    // selecionar 4  productos de manera alatoria 
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
    // para este sprint se necesita: mostrarlo, leerlo y poder seleccionar por producto
    //create: proximos sprints
    //edit: proximos sprints
    //delete: proximos sprints
}