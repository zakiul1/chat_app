import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App';
import Layout from './layout/Layout';
import { Message } from './components/Message';
import Tabs from './components/Tabs';
import LoginPage from './pages/Login';

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'message',
                element: <Message />,
            },
            {
                path: 'tab',
                element: <Tabs />,
            },

        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

export default router