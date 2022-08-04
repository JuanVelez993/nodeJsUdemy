//este codigo es sincrono pero los timeouts son no bloqueantes
console.log("Inicio de programa "); //1

setTimeout(() => {
    console.log("primer Timeout"); //5
}, 3000)

setTimeout(() => {
    console.log("segundo Timeout"); //2
}, 0)

setTimeout(() => {
    console.log("tercer Timeout"); //3
}, 0)



console.log("Fin de programa"); //4