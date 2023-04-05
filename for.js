var arreglo = ["Pedro", "María", "David"]

//funcion para saludar a cada elemento del array
function saludar(arreglo){
    console.log(`Hola, ${arreglo}`)
}

//Por el momento regresa toda la lista seguida del Hola
//saludar(["Max", "Igger", "Micky", "Ebita"]
//Hola, Max,Igger,Micky,Ebita

//Agregamos el ciclo for
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i])
    //ocupando la funcion anterior
    saludar(arreglo[i])
    //Aquí si lo va haciendo para cada valor del array
    //Me parece más sencillo con el console con una concatenacion
}

for (const student of arreglo) {
    saludar(student)
    //esto si lo hace más fácil porque ya sabe la longitud del arreglo
}