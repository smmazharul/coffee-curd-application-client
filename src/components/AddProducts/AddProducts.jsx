import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import "./AddProducts.css";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form =event.target;
    console.log(form)
    const name=form.name.value;
    const chef=form.chef.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form.details.value;
    const photo=form.photo.value;
    const newCoffee={name,chef,supplier,taste,category,details,photo}
    console.log(newCoffee)

    fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Successfully Added a Coffee',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset()

        }
    })
  };

  return (
    <div className="w-2/3 mx-auto product">
      <Navbar />
      <div className="mt-6">
        <Link to="/">
          <h1 className="bold"> Back to Home</h1>
        </Link>
      </div>

      <div className="mt-12 bg-[#F4F3F0] p-4">

        <div className="text-center w-2/3 mx-auto">
            <h1 className="text-2xl md:text-3xl  text-[#374151] bold">Add New Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-10 px-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee name "
                name="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text bold">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee chef"
                name="chef"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="md:flex gap-10 px-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text bold">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Supplier "
                name="supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text bold">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Taste"
                name="taste"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="md:flex gap-10 px-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text bold">Category</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Category"
                name="category"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text bold">Details</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Details"
                name="details"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="md:flex gap-10 px-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text bold">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Photo Url"
                name="photo"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          
          <div className="px-4 mt-4">
          <input className="btn btn-block bg-[#D2B48C] bold" type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
