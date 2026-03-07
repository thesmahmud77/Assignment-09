import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons ব্যবহার করলে ভালো হয়

const PasswordToggle = () => {
  // পাসওয়ার্ড দেখা যাবে কি না তা নির্ধারণ করার জন্য state
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold text-blue-900">Password</span>
      </label>

      <div className="relative">
        {/* state এর ওপর ভিত্তি করে input type পরিবর্তন হবে */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="input input-bordered w-full pr-12 rounded-xl border-blue-200"
          name="password"
          required
        />

        {/* আইকন ক্লিক করলে state টগল হবে */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-blue-600 transition"
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordToggle;
