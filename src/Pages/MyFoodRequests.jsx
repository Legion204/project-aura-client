import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/LoadingSpinner";


const MyFoodRequests = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: reqFoods=[], isLoading } = useQuery({
        queryFn: () =>getData(),
        queryKey: 'availableFoods'
    })

    const getData = async () => {
        const { data } = await axiosSecure(`/requested_foods?email=${user?.email}`)
        return data
    }


    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="grid">
            <Helmet>
                <title>Project Aura | My Food Requests</title>
            </Helmet>
            <div className=" w-2/4 ml-6 my-6 space-y-3 font-Poetsen justify-self-center text-center" >
                <h1 className="font-extrabold text-5xl">My Requested Foods</h1>
                <p className="">The My Requested Foods page is your personalized dashboard, keeping you in the loop about the foods you have requested. It is a handy tool for tracking your requests, displaying key details like quantities and delivery dates, and managing everything in one place..</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Donator Name</th>
                            <th>Pickup Location</th>
                            <th>Request date</th>
                            <th>Expire Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reqFoods.map((reqFood,index)=><tr 
                            key={reqFood._id}>
                                <th>{index+1}</th>
                                <td>{reqFood?.foodName}</td>
                                <td>{reqFood?.donatorName}</td>
                                <td>{reqFood?.pickupLocation}</td>
                                <td>{reqFood?.requested_date}</td>
                                <td>{reqFood?.exp_date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequests;