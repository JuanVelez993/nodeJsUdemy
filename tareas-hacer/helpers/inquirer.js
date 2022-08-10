/**la dependencia inquirer da opciones para crear menus de consola bastantes
 * customizables,sin embargo la nueva version puede tener un modo de ser importada
 * diferente a la que se usa en este ejemplo
 */
const inquirer = require("inquirer");
const { default: Choice } = require("inquirer/lib/objects/choice");
require("colors");

/**preguntas es la mecanica usada para el despliegue del menu podemos ver su formato en este
 * ejemplo y como las elecciones pueden tener un valor que se meustra y el que se usa
 */
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `1. `.green + `Crear tarea`,
      },
      {
        value: "2",
        name: `2. `.green + `Listar tareas`,
      },
      {
        value: "3",
        name: `3. `.green + `Listar tareas completadas`,
      },
      {
        value: "4",
        name: `4. `.green + `Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `5. `.green + `Completar tarea(s)`,
      },
      {
        value: "6",
        name: `6. `.green + `Borrar tarea`,
      },
      {
        value: "0",
        name: `0. `.green + `Salir`,
      },
    ],
  },
];
const pausaPrompt = [
  {
    type: "input",
    name: "pausa",
    message: `\nPresione ${"ENTER".green} para continuar\n `,
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=======================".green);
  console.log("Seleccione una opcion".rainbow);
  console.log("=======================\n".green);

  //const opt = await inquirer.prompt(preguntas);
  const {opcion} = await inquirer.prompt(preguntas);

  return opcion;
};

const pausaMenu=async() => {
  await inquirer.prompt(pausaPrompt);
  }

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      //valida que el valor ingresado sea mayor a 0
      validate(value) {
        if (value.length === 0) {
          return "Por favor entre un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausaMenu,
  leerInput
};
