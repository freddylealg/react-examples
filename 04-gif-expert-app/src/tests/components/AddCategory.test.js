import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import AddCategory from '../../components/AddCategory';

describe('Pruebas de AddCategory', () => {
    
    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategory } /> )

    beforeEach( () => { 
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategory } /> );
    });

    test('Debe de mostrar correctamente el componente', () => {
        expect( toJson(wrapper) ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value} });
    });
    
    test('Prueba del submit del formulario, no debe de llamar el formulario', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategory ).not.toHaveBeenCalled()
    });

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Vegeta';
        
        input.simulate('change', {target: {value} });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes(1);
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) )
        
        expect( input.prop('value') ).toBe( '' );
    })
    

})
