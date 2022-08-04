//esta asignacion es igual que la de la destructuracion
function sumar(a, b = 10) {
    return a + b;
}

console.log(sumar(13, 12))

const sumar = (a, b = 10) => {
        return a + b;
    }
    //si la arrow function solo tiene un return se puede resumir en una sola linea de esta forma
const sumar = (a, b) => a + b;