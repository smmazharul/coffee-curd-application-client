import img from "../../../assets/img/imgg1.png";
import img1 from "../../../assets/img/2.png";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
       navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset()
  };

  return (
    <div className="hero min-h-screen bg-base-200">


      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left"></div>
        <img src={img1} alt="" className="w-[350px] " />

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex justify-evenly items-center">
              <h1 className="text-5xl font-bold text-center login">
                Login now!
              </h1>
              <div>
                <img src={img} alt="" className="w-[40px] teacup" />
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered placeholder: text-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password "
                  name="password"
                  className="input input-bordered placeholder: text-xl"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-xl"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-gray-500 bg-[#8f6e56] text-white font-bold tracking-[.35em] text-2xl ">
                  Login
                </button>
              </div>
            </form>
            <p className="text-xl">
              New to Coffee Master{" "}
              <Link
                to="/singup"
                className="  text-[#8f6e56] font-bold tracking-[.60px]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
