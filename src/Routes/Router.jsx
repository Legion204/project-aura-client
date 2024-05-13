import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import AddFood from "../Pages/AddFood";
import AvailableFoodsPage from "../Pages/AvailableFoodsPage";
import FoodDetails from "../Pages/FoodDetails";
import MyFoodRequests from "../Pages/MyFoodRequests";
import ManageMyFoods from "../Pages/ManageMyFoods";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/add_food",
                element:<AddFood></AddFood>
            },
            {
                path:"/available_foods",
                element:<AvailableFoodsPage></AvailableFoodsPage>
            },
            {
                path:"/food_details/:id",
                element:<FoodDetails></FoodDetails>
            },
            {
                path:"/my_food_requests",
                element:<MyFoodRequests></MyFoodRequests>
            },
            {
                path:"/manage_my_foods",
                element:<ManageMyFoods></ManageMyFoods>
            }
        ]
    },
]);
export default router;