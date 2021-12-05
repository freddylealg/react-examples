
describe('Pruebas del archivo demo.test.ts', () => {
    test('debe de ser true', () => {
        const isActive = true;
        if( !isActive ) {
            throw new Error('No es true');
        }
    })
    
    test('Deben de ser iguales los strings', () => {
        const mensaje = 'Hola Mundo';
        const mensaje2 = "Hola Mundo";
        expect(mensaje).toBe(mensaje2);
    })
});

