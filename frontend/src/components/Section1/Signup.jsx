import {
FaGoogle,
FaFacebookF,
FaGithub,
FaEnvelope,
FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Signup = () => {
const notify = () => toast("Signup successful! Please log in.");
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

function changeHandler(event) {
const { name, value } = event.target;
setFormData((preValue) => {
return {
...preValue,
[name]: value,
};
});
}

async function sendData() {
try {
const res = await axios.post(
"http://localhost:4000/api/v1/signup",
{
name: formData.name,
email: formData.email,
password: formData.password,
confirmPassword: formData.confirmPassword,
},
{
headers: {
"Content-Type": "application/json",
},
},
);
notify();
console.log(res.data);

} catch (e) {
console.log(e);
}

setFormData({
name: "",
email: "",
password: "",
confirmPassword: "",
});
}

return (
<div>
{" "}
<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-red-900">
<div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20">
<Link to="/section1">
<div className="flex w-full justify-end">
<h1 className="bg-black rounded-full w-10 h-10 text-red-600 border-2 border-red-600 hover:bg-red-500/20 transition flex justify-center items-center">
X
</h1>
</div>
</Link>
<h2 className="text-3xl font-bold text-white text-center mb-2">Welcome 🚗</h2>
<p className="text-gray-400 text-center mb-6">
Find compare and choose your perfect car in minutes.
</p>

{/* Name  */}
<div className="mb-4">
<label className="text-gray-300 text-sm">Name</label>
<div className="flex items-center bg-black/40 rounded-lg px-3 mt-1">
<FaEnvelope className="text-gray-400" />
<input
name="name"
value={formData.name}
type="text"
placeholder="John Deo"
className="bg-transparent w-full px-3 py-2 text-white outline-none"
onChange={changeHandler}
/>
</div>
</div>

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

{/* confirm Password */}
<div className="mb-4">
<label className="text-gray-300 text-sm">Confirm Password</label>
<div className="flex items-center bg-black/40 rounded-lg px-3 mt-1">
<FaLock className="text-gray-400" />
<input
name="confirmPassword"
value={formData.confirmPassword}
type="password"
placeholder="••••••••"
className="bg-transparent w-full px-3 py-2 text-white outline-none"
onChange={changeHandler}
/>
</div>
</div>

{/* Sign In Button */}
<button
onClick={sendData}
className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition cursor-pointer"
>
Sign Up
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

{/* Sign up */}
<p className="text-center text-gray-400 mt-6">
Already using Carty?{" "}
<span className="text-red-500 hover:underline cursor-pointer">
<Link to="/Signin">Sign in</Link>
</span>
</p>
</div>
</div>
<ToastContainer />
</div>
);
};

export default Signup;
