import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassrord from "../pages/ForgotPassrord";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login/>
                
            },
            {
                path: "forgot-password",
                element: <ForgotPassrord/>
                
            }
        ]
    }
])

export default router