//Declarativa
function miFuncion1(){
    //Usa el nombre de la funcion para reservar un espacio de memoria
    return 56
}

//Para ejecutar la funcion
miFuncion1()

//Expresion, guardar la funcion en una variable
//parametros, variables que viven dentro de la funcion
var miFuncion2 = function(a, b){
    return a + b;
}
//Es una funcion anonima porque no tiene nombre, solo se está guardando dentro de la variable
//Aunque está dentro de una variable, hay que ponerle parentesis
miFuncion2()


//funcion de ejemplo
function saludarEstudiantes(estudiante){
    console.log(estudiante)
    //plantilla de cadena de texto, para poner muchos nombres a la vez
    //es como en excel, solo se le dice de donde va a tomar la información para que lo haga con todos los datos



    //al probarlo directamente en la consola del navegador no responde el hola
    console.log(`Hola ${estudiante}$`)

}

saludarEstudiantes("Igger")