import React, { use, useState } from "react";
import NavMenu from "../Components/NavMenu";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [error, SetError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        SetError(errorCode);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-3xl mx-auto mt-5 bg-green-100 border-1 border-green-900 p-10 mt-60">
      <h1 className="font-bold text-4xl">Please Login</h1>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset text-start">
          {/* Email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <div className="relative">
            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-7 text-xl"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {error && <p className="text-red-500 text-xl">{error}</p>}

          <button type="submit" className="btn mt-4 bg-primary">
            Login
          </button>
        </fieldset>
        <Link className="flex items-center justify-center gap-5 mt-3">
          <span>
            <FcGoogle />
          </span>
          Continue With Google
        </Link>
        <p className="text-[14px] text-black mt-5">
          Dont have an Account ?
          <Link className="bg-primary mx-2" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
