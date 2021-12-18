import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouters = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
