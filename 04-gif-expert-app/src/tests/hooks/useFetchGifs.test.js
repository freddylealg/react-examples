import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba de Hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('vegeta') );
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    

    test('Debe de retornar un arreglos de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('vegeta') );
        await waitForNextUpdate();

        const {data, loading} = result.current;
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
})

