import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas del archivo 07-deses', ()=> {

    test('Debe retornar un arreglo', ()=> {
        const arr = retornaArreglo();

        expect( arr ).toEqual(['ABC', 123]);
    })

    test('Debe retornar un arreglo', ()=> {
        const [letras, numeros] = retornaArreglo();

        expect( letras ).toEqual(['ABC', 123][0]);
        expect( numeros ).toEqual(['ABC', 123][1]);
    })

    test('Debe retornar un arreglo', ()=> {
        const [letras, numeros] = retornaArreglo();

        expect( letras ).toBe('ABC');
        expect( numeros ).toBe(123);
        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );
    })

})