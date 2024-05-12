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

    // sort by exp date descending order
    const handelSortDisc = () => {
        const sortedDateFood = [...availableFoods].sort((x, y) => {
            x = new Date(x.exp_date),
                y = new Date(y.exp_date);

            return y - x;
        });
        setAvailableFoods(sortedDateFood);
    };
    
    // sort by exp date ascending order

    const handelSortAsc = () => {
        const sortedDateFood = [...availableFoods].sort((x, y) => {
            x = new Date(x.exp_date),
                y = new Date(y.exp_date);

            return x - y;
        });
        setAvailableFoods(sortedDateFood);
    };

    return (
        <div className="grid">
            <div className=" w-2/4 ml-6 my-10 space-y-3 font-Poetsen justify-self-center text-center" >
                <h1 className="font-extrabold text-5xl">Available Foods</h1>
                <p className="">Welcome to our Available Foods page, where the essence of community shines through every meal. Here, you all discover a delightful assortment of dishes generously donated by our community members.</p>
            </div>
            <div className=" flex justify-center lg:justify-end gap-5 lg:mr-10">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={(e) => { setFoodName(e.target.value) }} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <details className="dropdown dropdown-bottom dropdown-end ">
                    <summary className=" btn bg-third text-white">Sort by Expire Date</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={handelSortAsc}>Ascending order</a></li>
                        <li><a onClick={handelSortDisc}> Descending order</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
                {
                    availableFoods.filter((availableFood) =>
                        availableFood?.foodName.trim().toLowerCase().includes(foodName.toLowerCase())
                    ).map(availableFood => <FoodCard
                        key={availableFood._id}
                        featuredFood={availableFood}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoodsPage;