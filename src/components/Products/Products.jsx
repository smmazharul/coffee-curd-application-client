import { Link, useLoaderData } from "react-router-dom";

const Products = ({ coffee, handleDelete }) => {
  const { name, chef, supplier, taste, category, details, photo, _id } = coffee;


  return (
    <div>
      <div className="md:flex  md:justify-around  md:items-center  bg-[#F5F4F1] p-4 ">
        <img src={photo} alt="" width={"120px"} height={"20px"} />
        <div>
          <h1 className="text-2xl">Name: {name}</h1>
          <h1 className="text-2xl">Chef: {chef}</h1>
          <p className="text-xl">Price: 890 tk</p>
        </div>

        <div className=" flex md:flex-col gap-5">
          <Link to={`/view/${_id}`}>
            <button className="btn text-orange-500">View</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn">
              Edit
            </button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="btn text-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
