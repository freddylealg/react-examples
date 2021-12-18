import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]);

    return (
        <div className='row rows-cols-1 rows-cols-3 g-3 animate__animated animate__fadeIn'>
            <ul>
                { 
                    heroes.map( hero => (
                        <HeroCard key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </ul>

        </div>
    )
}
