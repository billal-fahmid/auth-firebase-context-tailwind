import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './conponents/Home';
import Login from './conponents/Login';
import Register from './conponents/Register';
import AuthProvider from './provider/AuthProvider';
import Order from './conponents/Order';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './conponents/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: 'order',
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
