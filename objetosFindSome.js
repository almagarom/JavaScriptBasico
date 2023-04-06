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


//FIND
//hace un recorrido filtrado
var encontrar = articulos.find(function(arti){
    return arti.costo == 200
})

//me devolverá el objeto libro con todos sus elementos


//FOR EACH
var revisarFor = articulos.forEach(function(articu){
    return console.log(articu.nombre)
})
//va mostrando la caracteristica nombre de cada uno de los elemntos del array


//SOME
var busca = articulos.some(function(article){
    return article.costo <= 100
})
//devolverá false
//funciona para hacer el funcionamiento de un filtro de busquedas para que sepamos si se puede o no
//solo aparece que es falso