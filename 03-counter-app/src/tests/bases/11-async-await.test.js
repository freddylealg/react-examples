import { getImagen } from "../../bases/11-async-await";

describe('Prueba await y async',  () => {
    test('Pruebas de Async y Await', async() => {
        const url = await getImagen();
        expect( typeof url ).toBe( 'string')
    });

    test('Pruebas de Async y Await, inculdes', async() => {
        const url = await getImagen();
        expect( url.includes('https://') ).toBe( true )
    });
});