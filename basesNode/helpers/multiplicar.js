//requerimos el paquete file system que viene por default en node
const fs = require("fs");
const colors = require("colors");

console.clear;
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${'x'} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("=================".bgBlue);
      console.log(`Tabla del`.bgCyan, colors.zebra(`${base}`));
      console.log("=================".bgBlue);
      console.log(salida.rainbow);
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //Mejor versión

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
