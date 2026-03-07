import React from "react";
import NavMenu from "../Components/NavMenu";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-3xl mx-auto mt-5 bg-green-100 border-1 border-green-900 p-10">
      <h1 className="font-bold text-4xl">Please Login</h1>
      <form>
        <fieldset className="fieldset text-start">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
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
