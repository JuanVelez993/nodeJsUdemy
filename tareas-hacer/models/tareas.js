const Tarea = require("./tarea");


class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr(){
    const listado = [];
    //object.keys retorna todas las llaves que tenga un arreglo y con el foreach las extraigo
    Object.keys(this._listado).forEach(key => {const tarea=this._listado[key];
     listado.push(tarea)});
    return listado;

  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    //esta es otra forma de acceder a items dentro de un objeto en lugar de usar una sucesion de puntos
    this._listado[tarea.id] = tarea;
    
  }
}

module.exports = Tareas;
