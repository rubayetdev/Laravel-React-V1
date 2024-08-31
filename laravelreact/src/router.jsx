import {createBrowserRouter} from "react-router-dom";
import Login from '../src/views/login.jsx';
import Register from '../src/views/register.jsx';
import DefaultLayout from '../src/components/defaultLayout.jsx';
import GuestLayout from '../src/components/guestLayout.jsx';
import Users from '../src/views/users.jsx';
const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/users',
                element:<Users/>
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },

]);

export default router;
