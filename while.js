//Generar el array y el ciclo
var gatos = ["siames", "atigrado", "calico"]

function saludar(michis){
    //en el console usaremos el parametro
    console.log(`Hola, ${michis}`)
}


//Agregar el ciclo while
while (gatos.length> 0) {
    //va vaciando el contenido del arreglo
    var gatito = gatos.shift();
    saludar(gatito)
    //no me parece muy práctico hacerlo de esta forma
    //borra el contenido del arreglo hasta dejarlo vacio
}