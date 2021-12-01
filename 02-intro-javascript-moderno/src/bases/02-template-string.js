
const nombre = 'Freddy';
const apellido = 'Leal';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo( nombre ) {
  return `Hola ${nombre}`;
}

console.log(`${getSaludo('Freddy')}`);