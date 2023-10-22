import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProducts from "../components/AddProducts/AddProducts";
import ViewCoffee from "../components/ViewCoffee/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";




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
  
  ]);
  
