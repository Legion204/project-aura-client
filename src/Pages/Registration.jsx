import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Registration = () => {
    const [regError, setRegError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const {auth,userRegister}= useAuth();
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return setRegError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"
            )
        }
        else setRegError('')
        // user registration
        userRegister(email, password)
            .then(() => {
                toast.success("Account Created Successfully")
                updateProfile(auth.currentUser, { displayName: name, photoURL: image });
                navigate('/')
            })
            .catch(() => {
                toast.error("Invalid Credentials")
            })
            
            e.target.reset();
    };


    return (
        <div>
            <div className=" bg-hero hero min-h-screen bg-wave">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left text-white md:mr-10">
                        <h1 className="text-5xl font-bold">Welcome to Project Aura </h1>
                        <p className="py-6">Please Register to create a user account.</p>
                    </div>
                    <div className="card flex-grow-1 w-full shadow-2xl bg-base-100">
                        <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-white mx-auto">
                            <div className="mb-8 text-center">
                                <h1 className="my-3 text-4xl font-bold">Register</h1>
                            </div>
                            <form onSubmit={handelRegister} className="space-y-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm">Your name</label>
                                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    </div>
                                    <div>
                                        <label htmlFor="Image URL" className="block mb-2 text-sm">Image URL</label>
                                        <input type="text" name="image" id="image" placeholder="Image URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    </div>
                                    <div className="relative">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                        </div>
                                        <input type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                        <span className="absolute bottom-3 right-4 text-xl" onClick={() => setShowPass(!showPass)}>{showPass ? <IoMdEyeOff /> : <IoMdEye />}</span>
                                    </div>
                                    {regError && <small className="text-red">{regError}</small>}
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-third text-white dark:text-black">Register</button>
                                    </div>
                                    <p className="px-6 text-sm text-center"> Have an account?
                                        <Link to={'/login'} className="hover:underline font-bold text-third">Log In</Link>.
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

export default Registration;