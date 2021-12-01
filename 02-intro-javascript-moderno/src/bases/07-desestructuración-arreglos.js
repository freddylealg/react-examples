
const personajes = ['superman', 'batman', 'venom', 'joker'];

const [p1, p2, p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const [ , , , p4] = personajes;

console.log(p4);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const state = (valor) => {
    return [valor, () => { console.log(`Hola, ${valor}`) }];
}
const [nombre, setNombre] = state('Freddy');
console.log( nombre );
setNombre()
