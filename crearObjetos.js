//esta será la funcion constructora
//los parametros seran las propiedades del objeto
function crearObjetos(marc, model, year){
    this.marca = marc
    this.modelo = model
    this.año = year
}

//Aquí el new es para que sepa que tiene que crear un nuevo objeto con las caracteristicas indicadas
var autosNuevos = new crearObjetos("Ford", "Coche", "2000")

console.log(autosNuevos)

//podemos crear varios objetos con ayuda de este constructor