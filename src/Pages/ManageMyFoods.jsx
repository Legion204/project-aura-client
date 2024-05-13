import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdEdit } from "react-icons/md";


const ManageMyFoods = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [myAddedFoods, setMyAddedFoods] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/my_added_foods?email=${user?.email}`)
            .then(data => {
                setMyAddedFoods(data.data);
            })
    }, [axiosSecure, user]);

    return (
        <div>
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
                            myAddedFoods.map((myAddedFood,index)=><tr key={myAddedFood._id}>
                            <th>{index+1}</th>
                            <td>{myAddedFood?.foodName}</td>
                            <td>{myAddedFood?.pickupLocation}</td>
                            <td>{myAddedFood?.exp_date}</td>
                            <td><button className="btn bg-third border-none text-white"><MdEdit className="text-2xl" /></button></td>
                            <td><button className="btn bg-third border-none text-white"><MdDelete className="text-2xl" /></button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;