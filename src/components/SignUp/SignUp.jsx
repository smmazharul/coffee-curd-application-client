import img from "../../assets/img/imgg1.png";
import img1 from "../../assets/img/2.png";
// import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

  const handeSIgnUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password)
      
      createUser(email, password)
          .then(result => {
              const user = result.user;
              console.log(user)
          })
          .then(error => {
          console.log(error)
      })
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
                Sign Up now!
              </h1>
              <div>
                <img src={img} alt="" className="w-[40px] teacup" />
              </div>
            </div>
            <form onSubmit={handeSIgnUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  className="input input-bordered placeholder: text-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered placeholder: text-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password "
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
                <button className="btn hover:bg-gray-500 bg-[#8f6e56] text-white font-bold tracking-[.2em] text-2xl ">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-xl">
              Already Have A Coffee Master{" "}
              <Link
                to="/login"
                className="  text-[#8f6e56] font-bold tracking-[.60px]"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
