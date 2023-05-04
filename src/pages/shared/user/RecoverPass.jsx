import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const RecoverPass = () => {
    const {forgotPass} = useContext(AuthContext);
    const [recError, setRecError] = useState(null);

    const handleRecover = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        forgotPass(email)
        .then((result) => {
            toast.success('Success! Check your email specialy spam folder. We sent recovery address on your email.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
          })
        .catch((error) => {
            const errorCode = error.code;
            if(error.code === "auth/user-not-found"){
                setRecError("user email not found!")
            }
        });
    } 
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 pt-5 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Recover Your Password
					</h2>
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm p-10 rounded-lg shadow shadow-indigo-400">
                        <form className="space-y-6" onSubmit={handleRecover}>
                            <div>
                                <label htmlFor="email"	className="block text-lg font-medium leading-6 text-gray-900">
                                    Email address <span className="text-red-500 text-xl">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {
                                recError && <p className="text-red-700">{recError}</p>
                            }
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Recover Password
                                </button>
                            </div>
                        </form>
                            <p className="mt-8 text-center text-sm text-gray-800">
                            Want to ? 
                            <Link
                                to="/login"
                                className="ms-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                 Login Now
                            </Link>
                        </p>
                    </div>
				</div>
            </div>
        </div>
    );
};

export default RecoverPass;