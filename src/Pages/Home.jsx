import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "../Components/FoodCard";
import { Link } from "react-router-dom";



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
                <div className=" w-2/4 ml-6 my-10 space-y-3 font-Poetsen justify-self-center text-center" >
                    <h1 className="font-extrabold text-5xl">Featured Foods</h1>
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
        </div>
    );
};

export default Home;