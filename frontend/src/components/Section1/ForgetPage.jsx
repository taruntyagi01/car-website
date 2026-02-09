import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-red-900">
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
        
        {/* Close */}
        <Link to="/signin">
          <div className="flex w-full justify-end">
            <h1 className="bg-black rounded-full w-10 h-10 text-red-600 border-2 border-red-600 flex justify-center items-center hover:bg-red-500/20 transition">
              X
            </h1>
          </div>
        </Link>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Forgot Password 🔐
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email and we’ll send you a reset link
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm">Email</label>
          <div className="flex items-center bg-black/40 rounded-lg px-3 mt-1">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent w-full px-3 py-2 text-white outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
          Send Reset Link
        </button>

        {/* Back */}
        <p className="text-center text-gray-400 mt-6">
          Remember your password?{" "}
          <Link to="/signin" className="text-red-500 hover:underline">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
