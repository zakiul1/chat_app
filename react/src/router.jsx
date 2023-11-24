import React from 'react'
import { createBrowserRouter,Navigate } from "react-router-dom";
import App from './App';
import Layout from './layout/Layout';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <Layout />
    },
]);

export default router