import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "../Components/FoodCard";

const AvailableFoodsPage = () => {

    const axiosSecure = useAxiosSecure();
    const [availableFoods, setAvailableFoods] = useState([]);
    const [foodName, setFoodName] = useState('');

    useEffect(() => {
        axiosSecure.get("/available_foods")
            .then(data => {
                setAvailableFoods(data.data)
            })
    }, [axiosSecure]);


    const handelSort = () => {
        const sortedDateFood = [...availableFoods].sort((x, y) => {
            x = new Date(x.exp_date),
                y = new Date(y.exp_date);

            return y - x;
        });
        setAvailableFoods(sortedDateFood);
    };

    const handelSearch = () => {
        const filteredFood = [...availableFoods].filter((availableFood) =>
            availableFood?.foodName.trim().toLowerCase().includes(foodName.toLowerCase())
        );
        setAvailableFoods(filteredFood);
    };

    return (
        <div className="grid">
            <div className=" w-2/4 ml-6 my-10 space-y-3 font-Poetsen justify-self-center text-center" >
                <h1 className="font-extrabold text-5xl">Available Foods</h1>
                <p className="">Welcome to our Available Foods page, where the essence of community shines through every meal. Here, you all discover a delightful assortment of dishes generously donated by our community members.</p>
            </div>
            <div className="join justify-self-center lg:justify-self-end lg:mr-10">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search" type="text" name="search" onChange={(e) => setFoodName(e.target.value)} />
                    </div>
                </div>
                <details className="dropdown ">
                    <summary className=" btn bg-third text-white rounded-none">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={handelSort}>Expire Date</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
                <div className="indicator">
                    <button onClick={handelSearch} className="btn bg-third text-white join-item">Search</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
                {
                    availableFoods.map(availableFood => <FoodCard
                        key={availableFood._id}
                        featuredFood={availableFood}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoodsPage;