import React, { use } from "react";
import NavMenu from "../Components/NavMenu";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

export default function LoginPage() {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-3xl mx-auto mt-5 bg-green-100 border-1 border-green-900 p-10">
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
          {/* Password */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
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
          <Link className="text-pink-500 mx-2" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
