import { getSaludo } from '../../../src/bases/02-template-string';

describe('Pruebas archivo 02-templates-string', () => {

    test('prueba en el método getSaludo', () => {
        const nombre = 'Freddy';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe(`Hola ${ nombre }`);
    })

    // get saludo debe retornar Hola Carlos si no hay argumento nombre
    test('prueba en el método getSaludo sin argumento nombre', () => {
        const saludo = getSaludo( );
        expect( saludo ).toBe(`Hola Carlos`);
    })

})