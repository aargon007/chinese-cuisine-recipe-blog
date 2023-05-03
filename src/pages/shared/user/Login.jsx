import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    
    const { signIn,googleSignIn, githubSignIn,setUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
            if(error.code === "auth/wrong-password"){
                setLoginError("Wrong password!")
            }
            if(error.code === "auth/user-not-found"){
                setLoginError("user not found!")
            }
        })
    }

	return (
		<div>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm p-10 rounded-lg shadow shadow-indigo-400">
					<form className="space-y-6" onSubmit={handleLogin}>
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
                        
						<div>
                            <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
									Password <span className="text-red-500 text-xl">*</span>
							</label>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 outline-none py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
								/>
							</div>
                            <div className="flex items-center justify-between mt-3">
								<p></p>
								<div className="text-sm">
									<a	href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div>
							</div>
						</div>
                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }
						<div>
							<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Sign in
							</button>
						</div>
					</form>

                    <div>
                        <div className="mt-5 flex justify-between items-center">
                            <p className="border-t-2 px-10"></p>
                            <p>Or continue with</p>
                            <p className="border-t-2 px-10"></p>
                        </div>
                        <div className="flex gap-5 justify-between mt-5">
                            <button onClick={handleGoogleSignIn} className="flex gap-2 w-full bg-sky-600 text-white justify-center items-center py-2 px-3 rounded-lg">
                                <FaGoogle/> Google
                            </button>
                            <button onClick={handleGithubSignIn} className="flex w-full gap-2 bg-black text-white justify-center items-center py-2 px-3 rounded-lg">
                                <FaGithub></FaGithub> Github
                            </button>
                        </div>
                    </div>

					<p className="mt-10 text-center text-sm text-gray-800">
						Not Register Yet ?  <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Now</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
