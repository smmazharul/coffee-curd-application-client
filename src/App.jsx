import { useLoaderData } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const loadedCoffe = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffe);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="">
        <Home />

        <div className="md:w-2/3 md:mx-auto grid md:grid-cols-2 p-4  gap-5 mt-10">
          {coffees.map((coffee) => (
            <Products
              key={coffee._id}
              coffee={coffee}
              handleDelete={handleDelete}
            ></Products>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
