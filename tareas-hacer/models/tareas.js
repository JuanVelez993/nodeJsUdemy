const Tarea = require("./tarea");


class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    //esta es otra forma de acceder a items dentro de un objeto en lugar de usar una sucesion de puntos
    this._listado[tarea.id] = tarea;
    
  }
}

module.exports = Tareas;
