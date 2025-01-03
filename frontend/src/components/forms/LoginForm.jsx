/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Login } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(null); // State to handle error messages
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const validationSchema = Yup.object({
    username: Yup.string().required("UserName is required"),
    password: Yup.string()
      .min(6, "Password must be at laest 6 Characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      await Login(values);
      setErrorMessage(null); // Clear any error messages
      navigate("/", { replace: true });
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage(error.response.data.Message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      {/* Left side - Login Form */}
      <div className="w-1/2 max-2xl:w-full flex items-center justify-center p-8 max-xl::w-full ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome To Talkie
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your details to sign in.
            </p>
          </div>
          <Formik
            initialValues={{ username: "fahd66", password: "011401" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {() => (
              <Form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">UserName</span>
                    </label>
                    <Field
                      placeholder="Enter your userName"
                      className="input input-bordered w-full text-black bg-white"
                      name="username"
                      type="username"
                    />
                    <ErrorMessage
                      name="username"
                      component={"p"}
                      className="error pt-2 font-bold"
                    />
                  </div>
                  {/* {/ Password Input /} */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <Field
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full bg-white"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component={"p"}
                      className="error  pt-2 font-bold"
                    />
                  </div>
                </div>
                {/* Display error messages if any */}
                {errorMessage && (
                  <p className="text-black mb-4 font-bold text-md mt-4">
                    {errorMessage}
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
