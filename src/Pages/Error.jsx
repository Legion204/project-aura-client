import Lottie from "lottie-react";
import errorAnimation from "../assets/Animation404.json"
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="flex items-center h-full dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <Lottie animationData={errorAnimation} loop={true} />
                    <p className="text-3xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But don not worry, you can find plenty of other things on our homepage.</p>
                    <Link to={'/'} className="btn bg-third text-white">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default Error;