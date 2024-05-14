import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";


const ManageMyFoods = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [myAddedFoods, setMyAddedFoods] = useState([]);
    const [foodData, setFoodData] = useState({});
    const { foodName, imageUrl, pickupLocation, quantity, exp_date, additional_notes } = foodData;

    // loading user added food data
    useEffect(() => {
        axiosSecure.get(`/my_added_foods?email=${user?.email}`)
            .then(data => {
                setMyAddedFoods(data.data);
            })
    }, [axiosSecure, user]);


    // get food data from table
    const getFoodData = (id) => {
        const data = myAddedFoods.find(myAddedFood => myAddedFood._id === id);
        setFoodData(data);
    };

    const updateFoodData = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.food_name.value
        const imageUrl = form.image_url.value
        const pickupLocation = form.location.value
        const quantity = form.quantity.value
        const exp_date = form.exp_date.value
        const additional_notes = form.additional_notes.value
        const foodStatus = form.radio.value
        const updatedFoodData = { foodName, imageUrl, pickupLocation, quantity, exp_date, foodStatus, additional_notes };

        axiosSecure.put(`/available_foods/${foodData?._id}`, updatedFoodData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Food Data updated successfully!",
                        icon: "success"
                    });
                }
            })
    }


    // delete added food data
    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/available_foods/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {

                            const remainingFoods = myAddedFoods.filter(list => list._id !== id);
                            setMyAddedFoods(remainingFoods);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food data has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    };

    return (
        <div className="grid"> 
            <div className=" w-2/4 ml-6 my-6 space-y-3 font-Poetsen justify-self-center text-center" >
                <h1 className="font-extrabold text-5xl">Manage My Foods</h1>
                <p className="">The Manage My Food page is your personalized dashboard, keeping you in the loop about the foods you have requested. It is a handy tool for tracking your requests, displaying key details like quantities and delivery dates, and managing everything in one place..</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myAddedFoods.map((myAddedFood, index) => <tr key={myAddedFood._id}>
                                <th>{index + 1}</th>
                                <td>{myAddedFood?.foodName}</td>
                                <td>{myAddedFood?.pickupLocation}</td>
                                <td>{myAddedFood?.exp_date}</td>
                                <td><button onClick={() => { document.getElementById('my_modal_3').showModal(), getFoodData(myAddedFood._id) }} className="btn bg-third border-none text-white"><MdEdit className="text-2xl" /></button></td>
                                <td><button onClick={() => { handelDelete(myAddedFood._id) }} className="btn bg-third border-none text-white"><MdDelete className="text-2xl" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full max-w-[80%]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={updateFoodData} className="w-full bg-white/50 p-4 md:p-8 xl:p-20 rounded-3xl">
                        <h1 className="text-center font-semibold text-5xl text-third mb-6 font-Poetsen">Update Food Data</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 m">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Food name</span>
                                </div>
                                <input type="text" placeholder="Food name" name="food_name" className="input input-bordered w-full " defaultValue={foodName} />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-third"> Food Image URL</span>
                                </div>
                                <input type="text" placeholder=" Food Image URL" name="image_url" className="input input-bordered w-full" defaultValue={imageUrl} />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third"> Pickup Location</span>
                                </div>
                                <input type="text" placeholder="Pickup Location" name="location" className="input input-bordered w-full " defaultValue={pickupLocation} />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Food quantity</span>
                                </div>
                                <input type="text" placeholder="Food quantity" name="quantity" className="input input-bordered w-full " defaultValue={quantity} />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-third">Expired date</span>
                                </div>
                                <input type="date" placeholder="Expired date" name="exp_date" className="input input-bordered w-full " defaultValue={exp_date} />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-third">Additional notes</span>
                                </div>
                                <input type="text" placeholder="Additional notes" name="additional_notes" className="input input-bordered w-full " defaultValue={additional_notes} />
                            </label>
                            <div className="justify-self-center md:col-span-3 bg-white rounded-lg p-5">
                                <h1 className="text-center font-bold text-xl">Food Status</h1>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-5">
                                        <span className="label-text text-third text-xl">Available</span>
                                        <input type="radio" name="radio" value={"Available"} className="radio checked:bg-third" defaultChecked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-5">
                                        <span className="label-text text-third text-xl">Not Available</span>
                                        <input type="radio" name="radio" value={" Not Available"} className="radio checked:bg-third" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { document.getElementById('my_modal_3').close() }} type="submit" className="btn w-full bg-third border-none text-white mt-8">Update</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ManageMyFoods;