import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import AddFood from "../Pages/AddFood";

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
            }
        ]
    },
]);
export default router;