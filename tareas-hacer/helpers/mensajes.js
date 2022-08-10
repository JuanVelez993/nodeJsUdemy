const { read } = require("fs");

require("colors");

const mostrarMenu=()=> {
    //se usa una promesa en lugar de un async por que donde se captura el valor que decidira la opcion
    // es dentro de otra funcion  entonces no puede llegar como parametro
    return new Promise(resolve=> {
         console.clear();
         console.log("=======================".green);
         console.log("Seleccione una opcion");
         console.log("=======================\n".green);
         console.log(`${"1.".green} Crear tarea`);
         console.log(`${"2.".green} Listar tareas`);
         console.log(`${"3.".green} Listar tareas completadas`);
         console.log(`${"4.".green} Listar tareas pendientes`);
         console.log(`${"5.".green} Completar tarea(s)`);
         console.log(`${"6.".green} Borrar tarea`);
         console.log(`${"0.".green}Salir\n`);

         const readline = require("readline").createInterface({
           input: process.stdin,
           output: process.stdout,
         });

         readline.question("Seleccione una opcion: ", (opt) => {
           readline.close();
           resolve(opt);
         });
    });

 
}

  const pausa = () => {
    return new Promise(resolve=> {
    //esta dependencia viene por default con node
        const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar\n `, (opt) => {
        readline.close();
        resolve();
        });
    })
  };
    



module.exports={
    mostrarMenu,
    pausa
}