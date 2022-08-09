
//estos son los importes desde otras carpetas del proyecto
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
//const argv = require("yargs").argv; este metodo no es tan eficiente



/**
 * esto muestra argumentos enviados por la consola de la forma node app --base=X numero
 * esto viene con el path por lo que si quisieramos suarlo habria que destructurar
 * console.log(process.argv)
 * 
 * para usarlo destructuramos en un arreglo y traemos la linea que tiene el valor buscado en la
 * y hacemos otra destructuracion con un split pasa separar el texto del numero
 * const [, , arg3 = "base=5"] = process.argv;
 * const [, baseArgv = 5] = arg3.split("=");
 */
console.clear();
crearArchivo(argv.b,argv.l,argv.h)
.then((nombreArchivo) =>{console.log(nombreArchivo.zebra,'creado')})
.catch((err) =>{console.log(err)});