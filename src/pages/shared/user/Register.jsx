import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

	const { createUser,user } = useContext(AuthContext);

    const [regUser, setRegUser] = useState(null);
    const [passError, setPassError] = useState(null);
    const [emError, setEmError] = useState(null);

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
        console.log(email, password);

        setEmError(null);
        setPassError(null);

        if (password.length < 6) {
            setPassError('password must be 6 characters or longer')
            return
        }

		createUser(email, password)
		.then((result) => {
			const createdUser = result.user;
            updateProfile(createdUser,{
                displayName: name, photoURL : photo
            });
            navigate(from, { replace: true })
		})
		.catch((error) => {
			console.log(error.message);
            if(error.code == "auth/invalid-email"){
                setEmError("invalid email")
            }
            if(error.code == "auth/email-already-in-use"){
                setRegUser("Seems You have Already Registerd!")
            }
		});
	};
    console.log(user);

	return (
		<div>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create Your Account
					</h2>
				</div>

				<div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm p-10 rounded-lg shadow shadow-indigo-400">
					<form className="space-y-6" onSubmit={handleRegister} action="POST">
						<div>
							<label
								htmlFor="name"
								className="block text-lg font-medium leading-6 text-gray-900"
							>
								Name
							</label>
							<div className="mt-2">
								<input
									id="name"
									name="name"
									placeholder="Md Muhaiminul"
									type="text"
									autoComplete="name"
									className="block w-full rounded-md border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-lg font-medium leading-6 text-gray-900"
							>
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
									className={`block w-full rounded-md ${emError ? "border border-red-500" :"border-0"} py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
								/>
                                <p className="text-sm mt-1 text-red-500">{emError}</p>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-lg font-medium leading-6 text-gray-900"
							>
								Password <span className="text-red-500 text-xl">*</span>
							</label>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
                                    placeholder="enter password"
									autoComplete="current-password"
									required
                                    // onChange={e => setPassError(e.target.value.length >= 6 && "")}
									className={`block w-full rounded-md outline-none  ${passError ? "border border-red-500" :"border-0"} py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
								/>
                                <p className="text-sm mt-1 text-red-500">{passError}</p>
							</div>
						</div>

						<div>
							<label
								htmlFor="photo"
								className="block text-lg font-medium leading-6 text-gray-900"
							>
								Photo URL
							</label>
							<div className="mt-2">
								<input
									id="photo"
									name="photo"
									placeholder="https://www.image.com"
									type="url"
									autoComplete="url"
									className="block w-full rounded-md border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
                        {
                            regUser && <p className="text-green-700 text-lg">{regUser}</p>
                        }
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Register
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-800">
						Already Registered ?{" "}
						<Link
							to="/login"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Login Now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
