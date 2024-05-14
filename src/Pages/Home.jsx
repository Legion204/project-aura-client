import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "../Components/FoodCard";
import { Link } from "react-router-dom";
import { FaBowlFood, FaTruck } from "react-icons/fa6";



const Home = () => {

    const axiosSecure = useAxiosSecure();
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        axiosSecure.get('/featured_foods')
            .then(data => {
                setFeaturedFoods(data.data);
            });
    }, [axiosSecure]);


    return (
        <div>
            {/* Banner section */}
            <Banner></Banner>
            {/* Featured Foods section */}
            <div className="grid">
                <div className=" w-2/4 ml-6 my-10 space-y-3 justify-self-center text-center" >
                    <h1 className="font-extrabold text-5xl font-Poetsen">Featured Foods</h1>
                    <p className="">Welcome to our Featured Foods section, where the essence of community shines through every meal. Here, you all discover a delightful assortment of dishes generously donated by our community members.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        featuredFoods.slice(0, 6).map(featuredFood => <FoodCard
                            key={featuredFood._id}
                            featuredFood={featuredFood}
                        ></FoodCard>)
                    }
                </div>
                <Link className="m-5 justify-self-end" to={"/available_foods"}><button className="btn bg-third text-white">Show All</button></Link>
            </div>
            {/* project impact section */}
            <div className="grid">
                <div className=" w-2/4 ml-6 my-10 space-y-3 justify-self-center text-center" >
                    <h1 className="font-extrabold text-5xl font-Poetsen">2023 Total Impact</h1>
                    <p className="">showcases the cumulative effect of our initiatives, partnerships, and community contributions throughout the year. Dive into the numbers, stories, and milestones that reflect our commitment to making a positive difference. Explore how each action, no matter how small, contributes to our collective impact and drives meaningful change in our world</p>
                </div>
                <div className="bg-charity bg-base-300 bg-no-repeat bg-cover bg-center grid bg-blend-darken">
                    <div className="flex flex-col lg:flex-row justify-around text-center text-white gap-5 mt-5">
                        <div>
                            <p className="font-bold text-5xl mb-2">13386801</p>
                            <p>MILLION POUNDS RESCUED</p>
                        </div>
                        <div>
                            <p className="font-bold text-5xl mb-2">7269033</p>
                            <p>MILLION LBS. CO2e DIVERTED</p>
                        </div>
                        <div>
                            <p className="font-bold text-5xl mb-2">11155668</p>
                            <p>MILLION MEALS DONATED</p>
                        </div>
                        <div>
                            <p className="font-bold text-5xl mb-2">6104381256</p>
                            <p>WATER GALLONS SAVED</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 bg-white lg:w-3/5 justify-self-center p-10 m-5 rounded-xl">
                        <div className="text-center grid space-y-4">
                            <FaTruck className="justify-self-center text-6xl lg:text-9xl text-third" />
                            <h1 className="text-2xl">RESCUING FOOD</h1>
                            <p>Our food rescue program links donated surplus food from hundreds of vendors to other nonprofits via staff drivers and volunteers.</p>
                        </div>
                        <div className="text-center grid space-y-4">
                            <FaBowlFood className="justify-self-center text-6xl lg:text-9xl text-third" />
                            <h1 className="text-2xl">REDUCING HUNGER WITH FOOD4KIDS</h1>
                            <p>Food4Kids is a weekly grocery distribution program supporting low-income students via local Long Beach schools.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIALS section */}
            <div>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="grid items-center gap-4 xl:grid-cols-5">
                            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                                <h2 className="text-4xl font-bold font-Poetsen">FOOD FINDERS TESTIMONIALS</h2>
                                <p className="dark:text-gray-600">We couldn’t make a difference without the help of dedicated volunteers, generous food donors, and caring partner agencies. Read what they have to say about working with Food Finders!</p>
                            </div>
                            <div className="p-6 xl:col-span-3">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                            <p>The support we received from Total Impact was a game-changer for our organization. Their dedication to our cause and unwavering commitment to making a difference truly sets them apart.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Sarah Johnson</p>
                                                    <p className="text-sm dark:text-gray-600"> Founder of Hope Haven</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                            <p>Total Impact goes above and beyond to empower grassroots initiatives like ours. Their generosity and genuine care have transformed the lives of countless individuals in our community.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold"> David Martinez</p>
                                                    <p className="text-sm dark:text-gray-600"> Director of Rise Together</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                            <p>As a beneficiary of Total Impact's generosity, we've seen firsthand the incredible impact they have on communities. Their passion for social change is infectious, and their support has been instrumental in our success.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Emily Thompson</p>
                                                    <p className="text-sm dark:text-gray-600">Executive Director of Brighter Futures</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                            <p>Working with Total Impact has been nothing short of inspiring. Their dedication to social responsibility and philanthropy is unparalleled, and their partnership has helped us amplify our impact and reach new heights.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Michael Chen</p>
                                                    <p className="text-sm dark:text-gray-600">CEO of Empowerment Now</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;