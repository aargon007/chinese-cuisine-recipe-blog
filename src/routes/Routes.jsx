import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorElement from '../pages/shared/ErrorElement';
import Home from '../pages/Home/Home';
import Chef from '../pages/Home/Chef';
import ChefContainer from '../pages/Home/ChefContainer';
import Trending from '../pages/Home/Trending';
import Details from '../pages/chef/Details';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorElement/>,
        children : [
            {
                path : '/',
                element : <Home/>,
                loader : () => fetch("https://b7a10-chef-recipe-hunter-server-side-aargon007-aargon007.vercel.app/chef")
            },
            {
                path : '/chef/:id',
                element : <Details/>,
                loader : ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-aargon007-aargon007.vercel.app/chef/${params.id}`)
            }
        ]
    },
    
])

export default router;