import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { TbPackages } from "react-icons/tb";
import { FcExpired } from "react-icons/fc";


const FoodDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user);
    const [foodDetails, setFoodDetails] = useState({});

    const { foodName, imageUrl, pickupLocation, quantity, exp_date, donatorName, donatorImg, donatorEmail, additional_notes, _id } = foodDetails;

    useEffect(() => {
        axiosSecure.get(`/food_details/${id}`)
            .then(data => {
                setFoodDetails(data.data);
            })
    }, [id, axiosSecure]);

    const handelUpdateStatus = () => {
        const changedFoodStatus = "Requested"
        const updatedFoodStatus = { changedFoodStatus }
        axiosSecure.put(`/update_status/${_id}`, updatedFoodStatus)
            .then(data => {
                console.log(data.data);
            })
    };

    const handelAddRequestedFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.food_name.value
        const imageUrl = form.image_url.value
        const pickupLocation = form.location.value
        const requested_date = new Date().toDateString()
        const exp_date = form.exp_date.value
        const additional_notes = form.additional_notes.value
        const donatorName = form.donator_name.value
        const userEmail = user.email
        const donatorEmail = form.donator_email.value
        const food_id = form.food_id.value
        const requestedFoodData = { foodName, imageUrl, pickupLocation, requested_date, exp_date, additional_notes, donatorName, donatorEmail, userEmail, food_id }

        axiosSecure.post("/requested_foods", requestedFoodData)
            .then(data => {
                if(data.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food Requested successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
            });
    };

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
                    <img src={imageUrl} alt="" className=" dark:bg-gray-500 aspect-video rounded-xl" />
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-3xl font-bold font-Poetsen mt-4">{foodName}</h3>
                        <p className="text-xl font-semibold flex items-center gap-2"><TbPackages />Food Quantity: <span className="font-normal">{quantity} per serving</span></p>
                        <p className="text-xl font-semibold flex items-center gap-2"><FcExpired />Expired Date: <span className="font-normal">{exp_date}</span></p>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-third text-white">Request</button>
                    </div>
                </div>
            </div>
            {/* modal form */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full max-w-[80%]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handelAddRequestedFood} className="w-full bg-white/50 p-4 md:p-8 xl:p-20 rounded-3xl" method="dialog">
                        <h1 className="text-center font-semibold text-5xl text-third mb-6 font-Poetsen">Request Food</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 m">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Food name</span>
                                </div>
                                <input disabled type="text" placeholder="Food name" defaultValue={foodName} name="food_name" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-third"> Food Image URL</span>
                                </div>
                                <input disabled defaultValue={imageUrl} type="text" placeholder=" Food Image URL" name="image_url" className="input input-bordered w-full" />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third"> Pickup Location</span>
                                </div>
                                <input disabled defaultValue={pickupLocation} type="text" placeholder="Pickup Location" name="location" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Requested Date</span>
                                </div>
                                <input disabled defaultValue={quantity} type="text" placeholder="Food quantity" name="req_Date" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-third">Expired date</span>
                                </div>
                                <input disabled defaultValue={exp_date} type="date" placeholder="Expired date" name="exp_date" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Donator Name</span>
                                </div>
                                <input disabled defaultValue={donatorName} type="text" placeholder="Additional notes" name="donator_name" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Donator Email</span>
                                </div>
                                <input disabled defaultValue={donatorEmail} type="text" placeholder="Additional notes" name="donator_email" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">User Email</span>
                                </div>
                                <input disabled defaultValue={user?.email} type="text" placeholder="Additional notes" name="user_email" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Food ID</span>
                                </div>
                                <input disabled defaultValue={_id} type="text" placeholder="Additional notes" name="food_id" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full col-span-3 ">
                                <div className="label">
                                    <span className="label-text text-third">Additional notes</span>
                                </div>
                                <input defaultValue={additional_notes} type="text" placeholder="Additional notes" name="additional_notes" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <button onClick={()=>{handelUpdateStatus(),document.getElementById('my_modal_3').close()}} type="submit" className="btn w-full bg-third border-none text-white mt-8">Request</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default FoodDetails;