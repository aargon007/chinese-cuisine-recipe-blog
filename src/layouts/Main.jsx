import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { useNavigation } from 'react-router-dom';
import Spinner from '../pages/shared/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Main;