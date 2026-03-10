import React, { use, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

export default function RegisterPage() {
  const [nameError, SetNameError] = useState("");
  // const { createUser } = use(AuthContext);
  const { createUser, SetUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const fontTiger = e.target;
    const name = fontTiger.email.vlaue;
    if (name.length < 5) {
      SetNameError("Name Should be mor then 5 characters");
      return;
    } else {
      SetNameError("");
    }
    const email = fontTiger.email.value;
    const password = fontTiger.password.value;
    // console.log({ name, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        SetUser(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-3xl mx-auto mt-5 bg-green-100 border-1 border-green-900 py-5 p-10 mt-60">
      <h1 className="font-bold text-4xl">Please Register</h1>
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset text-start mt-8">
          {/* Name */}
          {nameError && <p className="text-red-500 text-xl">{nameError}</p>}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />
          {/* Email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* Password */}
          {/* Password */}
          {/* Password */}
          <div className=" Password relative">
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Create a Password"
              required
            />
          </div>
          {/* Password */}
          {/* Password */}
          {/* Password */}
          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
        </fieldset>

        <p className="text-[14px] text-black mt-5">
          Already Register ?
          <Link className="bg-base-primary mx-2 bg-primary" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
