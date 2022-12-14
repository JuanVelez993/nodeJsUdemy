require('colors');
const {mostrarMenu,pausa}= require('./helpers/mensajes')
const { inquirerMenu ,pausaMenu,leerInput} = require('./helpers/inquirer')
const { guardarDB,leerDB} = require("./helpers/guardarArchivo");
const Tarea = require("./models/tarea.js");
const Tareas = require("./models/tareas.js");



const main=async() => {
    console.clear();
    console.log('Hola Mundo')
    let opt='';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();
         switch (opt) {
           case "1":// crear tarea
            const desc=await leerInput('Descripcion: ');
            tareas.crearTarea(desc);
            break;
           case "2":// listar tareas
             console.log(tareas.listadoArr);
             break;
           case "3":
             
             break;
           case "4":
             
             break;
           case "5": 
            
             break;
           case "6":
             
             break;
           default:
             break;
         }

        guardarDB(tareas.listadoArr);
        await pausaMenu();
        
    }while(opt !=='0')
    
    

}

main();