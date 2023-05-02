import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorElement from '../pages/shared/ErrorElement';
import Home from '../pages/Home/Home';
import Chef from '../pages/Home/Chef';
import ChefContainer from '../pages/Home/ChefContainer';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorElement/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'chef',
                element : <ChefContainer/>,
                loader : () => fetch('https://b7a10-chef-recipe-hunter-server-side-aargon007-jfnt5uq47.vercel.app/chef')
            }
        ]
    }
])

export default router;