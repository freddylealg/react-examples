
const saludar = function(nombre){
    return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar( 'Juan' ) );
console.log( saludar2( 'Freddy' ) );
console.log( saludar3( 'Alejandro' ) );
console.log( saludar4() );


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

console.log( getUser() );


const getUserActivo = ( nombre ) => ( { uid: 'ABC567', username: nombre } );

const userActivo = getUserActivo( 'Freddy 2' );
console.log( userActivo );