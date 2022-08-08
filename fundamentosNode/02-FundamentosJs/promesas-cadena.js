const empleados = [
  {
    id: 1,
    nombre: `Fernando`,
  },
  {
    id: 2,
    nombre: `Linda`,
  },
  {
    id: 3,
    nombre: `Karen`,
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);
    empleado //operador ternario
      ? resolve(empleado.nombre)
      : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id);
    salario
      ? resolve(salario.salario)
      : reject(`No existe salario para el empleado con id ${id} `);
  });
};

const id = 1;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado; //esto se pone para poder concatenar los mensajes
    return getSalario(id); //cuando se retorna una promesa dentro de otra se pueden encadenar con then
  })
  .then((salario) => console.log(`El salario de ${nombre} es ${salario}`))
  .catch((err) => console.log(err));