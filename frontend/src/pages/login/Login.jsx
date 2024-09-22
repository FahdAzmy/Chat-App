/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    // Implement login logic here
  };

  return (
    <div className="flex w-full h-screen rounded-2xl max-lg:w-full ma bg-gray-100">
      {/* Left side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8 max-md:w-full ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome To Talkie
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your details to sign in.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">UserName</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full text-black bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* {/ Password Input /} */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Images */}
      <div className="hidden xl:flex  w-1/2 bg-blue-500 relative rounded-l-3xl  ">
        <img
          src="/Character-working-laptop-while-sitting-chair.png"
          alt="Character working on laptop"
          className="absolute h-4/5 w-3/5 -left-1/4 bottom-0 object-cover"
        />
        <img src="/cactus.png" className="plant absolute " />
      </div>
    </div>
  );
};

export default Login;
