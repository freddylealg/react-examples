import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { q='' } = queryString.parse(location.search);
    
    const [values, handleInputChange] = useForm({
        searchText: q
    })

    const heroes = useMemo( () => getHerosByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ values.searchText }`);
    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form>
                        <input 
                            type="text"
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name="searchText"
                            autoComplete='off'
                            value={ values.searchText }
                            onChange={ (e) => handleInputChange(e) }
                        />

                        <button
                            className='btn btn-outline-primary mt-3'
                            type='submit'
                            onClick={ handleSearch }
                        > Buscar </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un héroe</div>
                            : ( heroes.length === 0) && <div className='alert alert-danger'>No hay resultados: {q}</div>
                                
                    }
                    {
                        heroes.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
