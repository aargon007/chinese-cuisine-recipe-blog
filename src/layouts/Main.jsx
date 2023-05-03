import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { useNavigation } from 'react-router-dom';
import Spinner from '../pages/shared/Spinner';

const Main = () => {

    const navigation = useNavigation();
    // console.log(navigation.state);
    return (
        <div>
            <NavBar/>
            <div>
                {
                    navigation.state === 'loading' && <Spinner/>
                }
            </div>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
};

export default Main;