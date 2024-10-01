/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup, Login } from "../api/api";
import * as Yup from "yup";
export default function SignupForm() {
  // State to hold server error messages
  const [serverError, setServerError] = useState(null);
  // State to hold success message
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullname: Yup.string().required("FullName is required"),
    username: Yup.string().required("UserName is required"),
    gender: Yup.string().required("gender is required"),
    password: Yup.string()
      .min(6, "Password must be at laest 6 Characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not Match")
      .required("confirmPassword is required"),
    Profilepic: Yup.string(),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await Signup(values);
      console.log("Signup Successful", response);
      setServerError(null);
      // Set success message and navigate to login page after a delay
      setSuccessMessage("Register done. Go and login");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Handle known and unexpected errors
      if (error.response && error.response.status === 400) {
        setServerError(error.response.data.Message); // Set server error message
      } else {
        setServerError("An unexpected error occurred."); // Default error message
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
            initialValues={{
              userName: "",
              password: "",
              fullname: "",
              confirmPassword: "",
              gender: "",
              Profilepic: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-8 space-y-7">
                <div className="space-y-4 ">
                  <div className="space-y-4">
                    {/* Row 1: Full Name and Username */}
                    <div className="flex gap-4">
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-bold">
                            Full Name
                          </span>
                        </label>
                        <Field
                          placeholder="Enter your Full name"
                          className="input input-bordered w-full text-black bg-white"
                          name="fullname"
                          type="text"
                        />
                        <ErrorMessage
                          name="fullname"
                          component={"p"}
                          className="error pt-2 font-bold text-red-500 text-sm"
                        />
                      </div>

                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-bold">Username</span>
                        </label>
                        <Field
                          placeholder="Enter your username"
                          className="input input-bordered w-full text-black bg-white"
                          name="username"
                          type="text"
                        />
                        <ErrorMessage
                          name="username"
                          component={"p"}
                          className="error pt-2 font-bold text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Gender and Password */}
                    <div className="flex flex-col gap-4">
                      <div className="form-control flex-1">
                        <label className="label">
                          <span className="label-text font-bold">Gender</span>
                        </label>
                        <Field
                          placeholder="Enter your Gender"
                          className="input input-bordered w-full text-black bg-white"
                          name="gender"
                          as="select"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Field>
                        <ErrorMessage
                          name="gender"
                          component={"p"}
                          className="error pt-2 font-bold text-red-500 text-sm"
                        />
                      </div>

                      <div className="form-control flex-1">
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
                          className="error pt-2 font-bold text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Confirm Password (single field in the last row) */}
                    <div className="flex">
                      <div className="form-control flex-1">
                        <label className="label">
                          <span className="label-text font-bold">
                            Confirm Password
                          </span>
                        </label>
                        <Field
                          placeholder="Confirm Password"
                          className="input input-bordered w-full text-black bg-white"
                          name="confirmPassword"
                          type="password"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component={"p"}
                          className="error pt-2 font-bold text-red-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Server Error Message */}
                {serverError && (
                  <p className="text-white mb-4 font-bold text-md mt-4">
                    {serverError}
                  </p>
                )}

                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-500  mb-4 font-bold text-md text-sm mt-4">
                    {successMessage}
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
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
