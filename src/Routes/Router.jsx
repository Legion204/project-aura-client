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
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
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
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path:"/available_foods",
                element:<AvailableFoodsPage></AvailableFoodsPage>
            },
            {
                path:"/food_details/:id",
                element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path:"/my_food_requests",
                element:<PrivateRoute><MyFoodRequests></MyFoodRequests></PrivateRoute>
            },
            {
                path:"/manage_my_foods",
                element:<PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            }
        ]
    },
]);
export default router;