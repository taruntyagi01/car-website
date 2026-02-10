import { FaGoogle, FaFacebookF, FaGithub, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    try {
      const res = await axios.post(
        "https://car-website-0br7.onrender.com/api/v1/login",
        formData,
        { withCredentials: true }
      );

      toast.success("Login successful 🚀");

      // optional: store token if you're not using cookies
      // localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-red-900">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/10">
        
        <Link to="/section1">
          <div className="flex w-full justify-end">
            <h1 className="bg-black rounded-full w-10 h-10 text-red-600 border-2 border-red-600 flex justify-center items-center hover:bg-red-500/20 transition">
              X
            </h1>
          </div>
        </Link>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back 🚗
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Sign in to compare your dream cars
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Email</label>
          <div className="flex items-center bg-black/40 rounded-lg px-3 mt-1">
            <FaEnvelope className="text-gray-400" />
            <input
              name="email"
              value={formData.email}
              type="email"
              placeholder="you@example.com"
              className="bg-transparent w-full px-3 py-2 text-white outline-none"
              onChange={changeHandler}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Password</label>
          <div className="flex items-center bg-black/40 rounded-lg px-3 mt-1">
            <FaLock className="text-gray-400" />
            <input
              name="password"
              value={formData.password}
              type="password"
              placeholder="••••••••"
              className="bg-transparent w-full px-3 py-2 text-white outline-none"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="text-right mb-4">
  <Link
    to="/forgot-password"
    className="text-sm text-red-400 hover:text-red-500 hover:underline"
  >
    Forgot password?
  </Link>
</div>


        {/* Sign In Button */}
        <button
          type="button"
          onClick={handleSignin}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6 text-gray-500">
          <div className="h-px bg-gray-700 flex-1"></div>
          or continue with
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg">
<FaGoogle /> Google
</button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg">
<FaFacebookF /> Facebook
</button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg">
<FaGithub /> GitHub
</button>
</div>
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link className="text-red-500 hover:underline" to="/Signup">
            Sign Up
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signin;
