import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaRegUser, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {

    const {user, logOut, setUser} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
        .then(result => {
            setUser(null)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="py-5 px-5 md:px-28">
            <div className="relative flex items-center justify-between">
        
                <h1 className="inline-flex items-center font-bold gap-3">
                    <span className='text-red-500 text-3xl'> 米隆 </span>
                    <span className='font-kalam'>Milong <br /> <small className='font-sans'>Chinese Cuisine</small> </span>
                </h1>

                <ul className="items-center hidden space-x-8 md:flex">
                    <li>
                        <NavLink  to="/" className={({ isActive }) => (isActive ? "active" : "default" ) } >
                             Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/blog" className={({ isActive }) => (isActive ? "active" : "default")} >
                            Blog
                        </NavLink>
                    </li>
                    <li className='flex gap-2 justify-center items-center'>
                        {
                            user ? 
                             <div className='flex justify-center items-center gap-2'>
                                {
                                    user.photoURL ?  
                                    <img src={user.photoURL} className='w-8 h-8 rounded-full' title={user.displayName}/>  : <FaRegUser/>
                                }
                                {
                                    user.displayName ? <p className=''>{user.displayName}</p> : <></>
                                }
                             </div>
                            : <NavLink to="/login" className={({ isActive }) => (isActive ? "active flex gap-2" : "default flex gap-2")}>
                              Login
                              </NavLink>
                        }
                        {
                            user && <button onClick={handleSignOut} className='border-2 p-1 rounded-md border-sky-500 hover:bg-blue-500 hover:text-white transition-all'>Sign Out</button>
                        }
                    </li>
                </ul>

                {/* Mobile Navbar Section */}
                <div className="md:hidden">
                    {/* Dropdown Open Button */}
                    <button aria-label="Open Menu" title="Open Menu" onClick={() => setIsMenuOpen(true)} >
                        <FaBars className="w-14 text-gray-600" />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                {/* Logo & Button section */}
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link to="/">
                                            <h1 className="inline-flex items-center font-bold gap-3">
                                                <span className='text-red-500 text-3xl'> 米隆 </span>
                                                <span>Milong <br /> <small>Chinese Cuisine</small> </span>
                                            </h1>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button aria-label="Close Menu" title="Close Menu"  onClick={() => setIsMenuOpen(false)} >
                                            <FaTimes className="w-6 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                                Home
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/blog" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                            Blog
                                            </Link>
                                        </li>
                                        <li className='flex gap-3 flex-col items-start'>
                                            {
                                                user ? 
                                                <div className='flex justify-center items-center gap-2'>
                                                    {
                                                        user.photoURL ?  
                                                        <img src={user.photoURL} className='w-8 h-8 rounded-full' title={user.displayName}/>  : <FaRegUser/>
                                                    }
                                                    {
                                                        user.displayName ? <p className=''>{user.displayName}</p> : <></>
                                                    }
                                                </div>
                                                : <NavLink to="/login" className={({ isActive }) => (isActive ? "active flex gap-2" : "default flex gap-2")}>
                                                Login
                                                </NavLink>
                                            }
                                            {
                                                user && <button onClick={handleSignOut} className='border-2 p-1 rounded-md border-sky-500 hover:bg-blue-500 hover:text-white transition-all'>Sign Out</button>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;