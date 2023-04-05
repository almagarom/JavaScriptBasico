//Coercion implicita

var a = 4 + "7"
//da como resultado de a = 47
//porque lo transforma todo a tipo string
typeof a 
//será igual a string

var b = 4 * "7"
//devuelve 28 porque convierte al texto a numero

//Es una variable de tipo number
var d = 20

//coercion explicita
var c = String(d)
typeof c 
//ahora sting será string en lugar de number como lo era d

