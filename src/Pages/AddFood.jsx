import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddFood = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const handelAddFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.food_name.value
        const imageUrl = form.image_url.value
        const pickupLocation = form.location.value
        const quantity = form.quantity.value
        const exp_date = form.exp_date.value
        const additional_notes = form.additional_notes.value
        const foodStatus = form.radio.value
        const donatorName = user.displayName
        const donatorImg = user.photoURL
        const donatorEmail = user.email
        const addedFood = { foodName, imageUrl, pickupLocation, quantity, exp_date, foodStatus, donatorName, donatorImg, donatorEmail, additional_notes };

        axiosSecure.post('/add_food', addedFood)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food data successfully added to the database",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })

    }

    return (
        <div className="bg-wave bg-center bg-no-repeat bg-cover p-10 lg:p-32 w-full">
            <form onSubmit={handelAddFood} className="w-full bg-white/50 p-4 md:p-8 xl:p-20 rounded-3xl">
                <h1 className="text-center font-semibold text-5xl text-third mb-6 font-Poetsen">Add Food</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 m">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-third">Food name</span>
                        </div>
                        <input type="text" placeholder="Food name" name="food_name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-third"> Food Image URL</span>
                        </div>
                        <input type="text" placeholder=" Food Image URL" name="image_url" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-third"> Pickup Location</span>
                        </div>
                        <input type="text" placeholder="Pickup Location" name="location" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-third">Food quantity</span>
                        </div>
                        <input type="text" placeholder="Food quantity" name="quantity" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-third">Expired date</span>
                        </div>
                        <input type="date" placeholder="Expired date" name="exp_date" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-third">Additional notes</span>
                        </div>
                        <input type="text" placeholder="Additional notes" name="additional_notes" className="input input-bordered w-full " />
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
                <button type="submit" className="btn w-full bg-third border-none text-white mt-8">Add</button>
            </form>
        </div>
    );
};

export default AddFood;