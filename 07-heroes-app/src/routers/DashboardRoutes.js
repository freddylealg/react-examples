import React from 'react'
import { Navbar } from '../components/ui/Narbar';
import { Routes, Route } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Hero } from '../components/hero/Hero';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />  

            <div className='container'>
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/hero/:heroId" element={<Hero />} />
                </Routes>
            </div>
        </>
    )
}
