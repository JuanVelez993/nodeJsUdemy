const empleados = [{
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

const salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null, empleado.nombre);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
};

const getSalario = (id, callback) => {
    const salario = salarios.find((sal) => sal.id === id)
    if (salario) {
        callback(null, salario.salario);
    } else {
        callback(`No existe salario para el empleado con id ${id} `);
    }
};

const id = 1;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log(`Error!`);
        return console.log(err);
    }
    console.log(`Empleado existe!`);
    getSalario(id, (err, salario) => { //Callback hell here
        if (err) {
            console.log(`Error!`);
            return console.log(err);
        }
        return console.log(salario);
    });
});