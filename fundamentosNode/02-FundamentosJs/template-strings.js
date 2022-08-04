const nombre = 'Deadpool';
const real = 'Wade Wilson';

const normal = nombre + ' ' + real;
// los templates se usan con `` y permiten en las expresiones ${} usar logica de JS
const template = `${nombre} ${real}`;

console.log(normal);
console.log(template);

const html =
    //si se dejan espacios de linea entre ` y el codigo que siga habra un salto de linea en la consola
    `<h1>Hola/h1>
<p>Mundos</p>`;

console.log(html);