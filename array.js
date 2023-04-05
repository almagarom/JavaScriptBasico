//generamos una variable en donde se guardarán varios datod
var frutas = ["guayaba", "fresa", "piña"]
//si lleva más de un elemento, van separados por comas

//para consultar la longitud del arreglo
var longitud = frutas.length
console.log()


//Métodos

//PUSH
//para agregar un elemento al final
frutas.push("mango")
console.log(frutas)

//POP
//elimina el último elemento del array
//no es necesario escribir nada entre el parentesis
frutas.pop()
console.log(frutas)
//devolverá el array sin el mango


//UNSHIFT
frutas.unshift("sandía")
console.log(frutas)
//agregará el nuevo elemento al inicio

//SHIFT
frutas.shift()
//elimina el elemento que se encuentra en la primera posicion
console.log(frutas)

//INDEX OF
var posFresa = frutas.indexOf("fresa")
console.log(posFresa)


