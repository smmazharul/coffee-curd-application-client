import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Navbar from "../Shared/NavBar/Navbar";

const ViewCoffee = () => {
  const loadedCoffe = useLoaderData();
  // name,chef,supplier,taste,category,details,photo
  return (
    <div>
      <Navbar />

    
     <div className="w-[824px] mx-auto mt-10">
        <Link to='/' className="text-2xl bold">Back to Home</Link>
     <div className="flex justify-around items-center bg-[#F5F4F1] p-6 w-[824px] mx-auto mt-10">
        <img src={loadedCoffe.photo} alt="" width={"180px"} height={"20px"} />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl bold mb-4">Niceties</h1>
          <h1><span className="text-2xl">Name:</span>  {loadedCoffe.name}</h1>
          <h1 ><span className="text-2xl">Chef: </span>{loadedCoffe.chef}</h1>
          <h1 ><span className="text-2xl">Supplier:</span> {loadedCoffe.supplier}</h1>
          <h1 ><span className="text-2xl">Taste:</span> {loadedCoffe.taste}</h1>
          <h1 ><span className="text-2xl">Category:</span> {loadedCoffe.category}</h1>
          <h1 ><span className="text-2xl">Details:</span> {loadedCoffe.details}</h1>
        </div>

        {/* <div className=" flex flex-col gap-5">
          <Link to={`/view/${_id}`}><button className="btn text-orange-500">View</button></Link>
          <button className="btn">Edit</button>
          <button className="btn text-red-500">Delete</button>
        </div> */}
      </div>
     </div>
    </div>
  );
};

export default ViewCoffee;
