//requerimos el paquete file system que viene por default en node
const fs = require("fs");

//limpia la consola cuando se ejecute le programa
console.clear();
console.log("-------TABLA DEL CINCO------------");

const base = 5;
const hasta = 10;
let salida = "";
for (let i = 1; i <= hasta; i++) {
  salida += `${base} X ${i}= ${base * i} \n`;
}
console.log(salida);
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
