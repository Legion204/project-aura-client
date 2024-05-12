import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const FoodDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});

    const { foodName, imageUrl, pickupLocation, quantity, exp_date, foodStatus, donatorName, donatorImg, donatorEmail, additional_notes } = foodDetails;

    useEffect(() => {
        axiosSecure.get(`/food_details/${id}`)
            .then(data => {
                setFoodDetails(data.data);
            })
    }, [id, axiosSecure]);

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row-reverse m-10">
                <div className="lg:px-8 flex flex-col gap-10">
                    <h1 className="font-Poetsen text-2xl font-bold bg-third p-2 rounded-md text-white text-center">Donated By</h1>
                    <div className=" flex space-x-6 ">
                        <div className="flex-shrink-0 mb-6 w-32 h-32">
                            <img src={donatorImg} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-2 lg:space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">{donatorName}</h2>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-600">{donatorEmail}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm w-full lg:w-3/4 justify-self-center">
                    <img src={imageUrl} alt="" className=" dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-3xl font-bold font-Poetsen mt-4">{foodName}</h3>
                        <p className="text-xl font-semibold">Food Quantity: <span className="font-normal">{quantity} per serving</span></p>
                        <p className="text-xl font-semibold">Expired Date: <span className="font-normal">{exp_date}</span></p>
                        <button className="btn bg-third text-white">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;