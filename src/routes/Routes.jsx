import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorElement from '../pages/shared/ErrorElement';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorElement/>,
        children : [
            {
                path : '/',
                element : <Home/>
            }
        ]
    }
])

export default router;