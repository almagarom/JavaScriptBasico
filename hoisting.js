//si se agrega esta línea al inicio
//saldrá "undefined"
console.log(miNombre)

//declarar la variable
var miNombre;
//Inicializar la variable
miNombre = "Alma"

//si lo ejecuto en este momento, entonces ahora si funcionará como se espera, porque ya sabe que valor tiene la variable
console.log(miNombre)




//Hoisting para el caso de funciones
prueba()

function prueba(){
    console.log("Hola "+ miNombre)
}

