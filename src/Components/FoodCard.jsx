import { Link } from "react-router-dom";
import { TbPackages } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdNoteAlt } from "react-icons/md";
import PropTypes from 'prop-types';

const FoodCard = ({ featuredFood }) => {
    const { foodName, imageUrl, pickupLocation, quantity, exp_date, donatorName, donatorImg, additional_notes,_id} = featuredFood;
    return (
        <div className="justify-self-center">
            <div className="card card-compact w-96 lg:w-[450px] bg-base-100 shadow-xl font-Source">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{foodName}</h2>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl text-third">Donated by:</h1>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-14 rounded-xl">
                                    <img src={donatorImg} />
                                </div>
                            </div>
                            <h1 className="text-xl">{donatorName}</h1>
                        </div>
                    </div>
                    <div className=" font-medium">
                        <p className="flex items-center text-lg text-gray-500"><span className="text-third text-lg mr-2"><FaLocationDot /></span>Pickup Location: {pickupLocation}</p>
                        <p className="text-lg text-gray-500 flex items-center"><span className="mr-2 text-third"><TbPackages /></span>Quantity: {quantity}</p>
                        <p className="text-lg text-gray-500 lg:col-span-2 flex  items-center"><span className="mr-2 text-third"><MdNoteAlt /></span>Additional Notes: {additional_notes}</p>
                    </div>
                    <div className="card-actions items-center">
                        <Link to={`/food_details/${_id}`}><button className="btn bg-third text-white">View details</button></Link>
                        <p className="flex flex-col text-start text-xl font-medium pl-24 2xl:pl-44">Exp Date <span className="text-third">{exp_date}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes={
    featuredFood:PropTypes.object
}

export default FoodCard;