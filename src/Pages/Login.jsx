import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { userLogin, userLoginGoogle, userLoginGithub } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // login with email pass
    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // user login with email and password
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
    };

    // login with google
    const handelGoogleLogin = () => {
        userLoginGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
    };

    // login with gitHub
    const handelGithubLogin = () => {
        userLoginGithub()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className=" bg-hero hero min-h-screen bg-wave">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left text-white md:mr-10">
                        <h1 className="text-5xl font-bold font-Poetsen">Welcome to Project Aura </h1>
                        <p className="py-6 font-Poetsen">Please Login to use your user account.</p>
                    </div>
                    <div className="card flex-grow-1 w-full shadow-2xl bg-base-100">
                        <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-white mx-auto">
                            <div className="mb-8 text-center">
                                <h1 className="my-3 text-4xl font-bold">Login</h1>
                            </div>
                            <form onSubmit={handelLogin} className="space-y-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Email" required autoComplete="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    </div>
                                    <div className="relative">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                        </div>
                                        <input type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                        <span className="absolute bottom-3 right-4 text-xl" onClick={() => setShowPass(!showPass)}>{showPass ? <IoMdEyeOff /> : <IoMdEye />}</span>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-third text-white dark:text-black">Login</button>
                                    </div>
                                    <div className="flex items-center pt-4 space-x-1">
                                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <button onClick={handelGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                        </button>
                                        <button onClick={handelGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="px-6 text-sm text-center"> Do not Have an account?
                                        <Link to={'/registration'} className="hover:underline font-bold text-third">Register</Link>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;