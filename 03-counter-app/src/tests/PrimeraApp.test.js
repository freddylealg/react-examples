import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';


describe('Prueba en <PrimeraApp />', () => {

    /*
    test('debe de mostar el mensaje de saludo', () => {
        const saludo = 'Hola, soy Freddy';
        const { getByText } = render(<PrimeraApp saludo={ saludo } />);
        expect( getByText(saludo) ).toBeInTheDocument();
    });
    */

    test('Debe mostrar PrimeraApp correctamente', () => {
        const saludo = 'Hola mundo';
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> );
        
        expect( toJson(wrapper) ).toMatchSnapshot();
    });


    test('Validar los subtitulos', () => {
        const saludo = 'Hola mundo';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo = {subtitulo}
            /> 
        );
        
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    });
    
});