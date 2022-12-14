import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import About from "../Pages/Home/About/About";
import Blog from "../Pages/Home/Blog/Blog";
import FormEmail from "../Pages/Home/FormEmail/FormEmail";
import Project from "../Pages/Home/Project/Project";
import ProjectsDetails from "../Pages/Home/Project/ProjectsDetails";
import Skills from "../Pages/Home/Skills/Skills";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<FormEmail></FormEmail>
            },
            {
                path:'/skills',
                element:<Skills></Skills>
            },
            {
                path:'/projects',
                element:<Project></Project>
            },
            {
                path:'/project/:id',
                loader:async({params})=> fetch(`https://developer-portfolio-server-cyan.vercel.app/project/${params.id}`),
                element:<ProjectsDetails></ProjectsDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])