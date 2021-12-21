import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouters = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" 
                    element={
                        <PublicRoutes>
                            <Login />
                        </PublicRoutes>
                    } 
                />
                <Route path="/*" 
                    element={
                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}
