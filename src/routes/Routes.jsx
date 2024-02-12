
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "career",
                element: <Career></Career>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            // {
            //     path: "/",
            //     element: <Category></Category>,
            //     loader: () => fetch("http://localhost:5000/news")
            // },
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },


        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },

])

export default router;