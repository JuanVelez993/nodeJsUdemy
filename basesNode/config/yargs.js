const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true, //hace obligatoria la opcion a la hora de generar el comando por consola
    describe: `el numero base`,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: `muestra la tabla en la consola`,// descripcion para el comando en consola
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "el numero hasta donde llega la tabla.",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
