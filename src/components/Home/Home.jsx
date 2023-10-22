import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Navbar from "../Shared/NavBar/Navbar";

const Home = () => {
  return (
    <div className="w-2/3 mx-auto ">
      <Navbar />
      <Banner />
      <div className="text-center mt-12">
        <h1 className="text-3xl mb-4 bold">Our Popular Products</h1>
        <Link to="/addproduct">
          <button className="bg-orange-300 px-2 py-1 bold">Add Coffee</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
