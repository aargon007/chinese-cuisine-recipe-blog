import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorElement from '../pages/shared/ErrorElement';
import Home from '../pages/Home/Home';
import Chef from '../pages/Home/Chef';
import ChefContainer from '../pages/Home/ChefContainer';
import Trending from '../pages/Home/Trending';
import Details from '../pages/chef/Details';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/shared/user/Login';
import Register from '../pages/shared/user/Register';
import Blog from '../pages/blog/Blog';

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
                element : <PrivateRoute><Details/></PrivateRoute>,
                loader : ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-aargon007-aargon007.vercel.app/chef/${params.id}`)
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/blog',
                element : <Blog/>
            }
        ]
    },
    
])

export default router;