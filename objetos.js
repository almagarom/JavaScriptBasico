var coches = {
    marca: "Volskwagen",
    modelo: "Chevy",
    //Si quiero usar caracteres especiales hay que agregar lo entre comillas 
    "año": 2005,
    detalles: function(){
        //this se refiere a que queremos tomar los valores de este objeto
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
}