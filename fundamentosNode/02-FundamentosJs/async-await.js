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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id); //Estos await devuelven una promesa, que cuando es positiva realiza la asignacion
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    //return error //Si le pongo return es como manejar la posible excepcion pero salir correctamente.Dispara el .then
    throw error; //Dispara el .catch
  }
};

getInfoUsuario(id)
//el then y catch pueden ser pasados poniendo los console.log en la funcion por ejemplo
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));