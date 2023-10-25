import { useContext } from "react";
import logo from "../../../assets/img/logo1.png";
import "./Navbar.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="nav flex items-center justify-between px-4 gap-10">
      <img src={logo} alt="" width={"70px"} height={"80px"} />
      <h2 className="text-2xl text-white">Espresso Emporium</h2>
      <div>
        {user ? (
          <button onClick={handleLogOut} className="text-2xl btn">
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="text-2xl btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
