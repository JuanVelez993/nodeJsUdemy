const deadpool = {
    named: "wade",
    lName: "Wilson",
    power: "regeneration",
    // las funciones se pueden declarar dos formas asi :getDeadpool: function() {} y como esta usada en el ej
    getDeadpool() {
        return `${this.named} ${this.lName} ${this.power}`
    }
}

//para destructurar el nombre de las variables debe ser igual a las del objeto 
//si se le pone otro nombre no la encontrara y su valor por default sera undefined
//sin embargo puedo asignar un valor dentro de la destructuracion como se hace con age
//este valor no reemplaza el original si existe
const { named, lName, power, age = 39 } = deadpool;
console.log(deadpool.getDeadpool());
console.log(named, lName, power, age)


//LA DESTRUCUTRACION SE PUEDE USAR TAMBIEN EN FUNCIONES PARA EL OBJETO QUE ENTRA COMO 
//SE VE EN LA SIGUIENTE COMPARACION DE LA SEGUNDA FORMA NO QUEDA COMO CONST Y PUEDE SER EDITADO 
/*function printHero(hero) {
    const { named, lName, power, age = 39 } = hero;
    console.log(named, lName, power, age)
}*/
function printHero({ named, lName, power, age = 39 }) {
    console.log(named, lName, power, age)
}

const heroes = ['Deadpool', 'Superman', 'Batman'];
//cuando se destructura un arreglo si se dejan espacios en blanco los ignora
const [h1, , h3] = heroes