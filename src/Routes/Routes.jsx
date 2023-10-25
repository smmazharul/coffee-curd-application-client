import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProducts from "../components/AddProducts/AddProducts";
import ViewCoffee from "../components/ViewCoffee/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Login from "../components/Login/Login/Login";
import SignUp from "../components/SignUp/SignUp";




export const  router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      loader:()=>fetch('http://localhost:5000/coffee')
    },
    {
      path: "/:id",
      element: <App/>,
    },
    {
      path: "/addproduct",
      element: <AddProducts/>,
    },
    {
      path: "/view/:id",
      element: <ViewCoffee/>,
      loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
      path: "/update/:id",
      element: <UpdateCoffee/>,
      loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
      path: "/login",
      element: <Login/>,
      
    },
    {
      path: "/singup",
      element: <SignUp/>,
      
    },
  
  ]);
  
