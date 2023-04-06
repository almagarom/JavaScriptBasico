var articulos = [
    {
        nombre: "Bicicleta",
        costo: 500
    },
    //para agregar varios objetos hay que separarlos por comas y agregar corchetes como si fuera un array de objetos
    {
        nombre: "TV",
        costo:3000
    },
    {
        nombre: "libro",
        costo: 200
    },
    {
        nombre: "Laptop",
        costo: 20000
    },
    {
        nombre: "mouse",
        costo: 300
    },
    {
        nombre: "juego",
        costo: 300
    }
]

//FILTER
//genera un nuevo array
var Filtrados = articulos.filter(function(article) {
    return article.costo < 1000
})

//devuelve el array Filtrados unicamente con los elementos que cumplen la condicion


//MAP
var mapear = articulos.map(function(arti){
    return arti.nombre
})
//solo saca los valores de nombres de los articulos
//solo crea un array de esos valores de los objetos