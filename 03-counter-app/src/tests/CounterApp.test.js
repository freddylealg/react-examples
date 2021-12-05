import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';


describe('Pruebas del <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => { 
        wrapper = shallow( <CounterApp /> );
    });

    test('Debe mostrar CounterApp correctamente', () => {
        expect( toJson(wrapper) ).toMatchSnapshot();
    });

    test('Prueba del valor por defecto del CounterApp', () => {
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( 'Count: 0' );
    });

    test('Prueba del valor por defecto del CounterApp', () => {
        const value = 100;
        const wrapper = shallow( <CounterApp value={value} /> );
        
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( `Count: ${value}` );
    });

    test('Incrementar con el botón +1', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( `Count: 1` );
    });

    test('Decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( `Count: -1` );
    });

    test('Botón de reset', () => {
        const value = 100;
        const wrapper = shallow( <CounterApp value={value} /> );

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( `Count: ${value}` );
    });

});