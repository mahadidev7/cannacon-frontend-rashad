import React, { useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { AiFillEyeInvisible, AiFillEye, AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("enter your name"),
  email: Yup.string()
    .email("enter your valid mail")
    .required("please enter mail"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("please enter password"),
});

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className=" homePageBody relative sm:block hidden">
        <div className="Container-md m-auto">
          <div className="flex justify-between h-screen">
            <div className="w-full p-4 flex flex-col justify-center items-center m-auto ">
              <img
                src="https://i.ibb.co/sbK6xdC/logo.png"
                alt="logo"
                className="w-[400px] my-4"
              />
              <div className="loginForm w-[385px] md:mt-0 py-12 border-2 border-gray-400 px-9 rounded-lg">
                <h1 className="text-2xl mb-3 text-center font-semibold text-[#0a501e]">
                  Create your account
                </h1>
                <Formik
                  initialValues={{ email: "", password: "", name: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handlesubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="border-b-2 border-gray-400 flex gap-3 items-center mb-4">
                        
                        <Field
                          name="name"
                          type="text"
                          placeholder="Name"
                          className="py-2 w-full placeholder:text-[#0a501e] bg-transparent"
                        />
                      </div>
                      <ErrorMessage name="name">
                        {(msg) => <div className="text-red-500">{msg}</div>}
                      </ErrorMessage>
                      <div className="border-b-2 border-gray-400 flex gap-3 items-center mb-4">
                        <Field
                          name="email"
                          type="email"
                          className="py-2 w-full placeholder:text-[#0a501e] bg-transparent"
                          placeholder="Email"
                        />
                      </div>
                      <ErrorMessage name="email">
                        {(msg) => <div className="text-red-500">{msg}</div>}
                      </ErrorMessage>
                      <div className="border-b-2 border-gray-400 flex gap-2 items-center mb-4">
                        
                        <Field
                          name="password"
                          placeholder="Password"
                          className="py-2 w-full placeholder:text-[#0a501e] bg-transparent"
                          type={showPassword ? "text" : "password"}
                        />

                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="mr-2"
                        >
                          {showPassword ? (
                            <AiFillEyeInvisible size={22} color="#808080" />
                          ) : (
                            <AiFillEye size={22} color="#808080" />
                          )}
                        </span>
                      </div>
                      <ErrorMessage name="password">
                        {(msg) => <div className="text-red-500">{msg}</div>}
                      </ErrorMessage>
                      <button
                        className="desktop_Submit m-auto text-center block !mt-4"
                        type="submit"
                        disabled={Object.keys(errors).length !== 0}
                      >
                        Sign up
                      </button>
                    </Form>
                  )}
                </Formik>

                <div className="flex flex-col text-center gap-5 mt-5">
                    <Link to="/" className="font-semibold text-[#0a501e]">Log in</Link>
                    <Link to="/" className="font-semibold text-[#0a501e] underline">Forgot Password?</Link>
                  {/* <a
                    href="#"
                    className="mt-9 font-semibold border-b-2 border-[#0a501e] w-fit text-center mx-auto"
                  >
                    Forgot Password?
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcomeBack">
          <p className="!text-white">Welcome back</p>
        </div>
        {/* <div className="logo">
          <img src="https://i.ibb.co/sbK6xdC/logo.png" alt="logo" />
        </div> */}
      </div>

      <div className="signup_bg w-full h-screen mx-auto container block sm:hidden">
        <div className="flex flex-col justify-between h-screen">
          <h1 className="capitalize text-white font-medium text-3xl p-3 py-6">
            create <br/> account
          </h1>
          <div className=" bg-[#ffffff] px-5 relative">
            <img
              src="/images/wave.svg"
              alt=""
              className="absolute bottom-full left-0 w-screen"
            />
            <div className="pb-2">
              <Formik
                initialValues={{ email: "", password: "", name: "" }}
                validationSchema={validationSchema}
                onSubmit={handlesubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="border-b-2 border-gray-400 flex gap-3 items-center mb-4">
                      <label htmlFor="name">
                        <FaRegUser size={15} color="#808080" />
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="py-2 w-full placeholder:text-gray-400"
                      />
                    </div>
                    <ErrorMessage name="name">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                    <div className="border-b-2 border-gray-400 flex gap-3 items-center mb-4">
                      <label htmlFor="email">
                        <AiOutlineMail size={15} color="#808080" />
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className="py-2 w-full placeholder:text-gray-400"
                        placeholder="Email"
                      />
                    </div>
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                    <div className="border-b-2 border-gray-400 flex gap-2 items-center mb-4">
                      <label htmlFor="email">
                        <CiLock size={20} color="#808080" />
                      </label>
                      <Field
                        name="password"
                        placeholder="Password"
                        className="py-2 w-full placeholder:text-gray-400"
                        type={showPassword ? "text" : "password"}
                      />

                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="mr-2"
                      >
                        {showPassword ? (
                          <AiFillEyeInvisible size={22} color="#808080" />
                        ) : (
                          <AiFillEye size={22} color="#808080" />
                        )}
                      </span>
                    </div>
                    <ErrorMessage name="password">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                    <button
                      className="border border-blue-700 bg-blue-700 rounded-md text-center font-medium w-full py-2 text-white text-lg mt-3"
                      type="submit"
                      disabled={Object.keys(errors).length !== 0}
                    >
                      Sign up
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="flex items-center w-full">
                <p className="w-[46%] h-[3px] bg-gray-300 mt-1"></p>
                <p className="px-3 text-gray-400 font-bold text-lg">or</p>
                <p className="w-[46%] h-[3px] bg-gray-300  mt-1"></p>
              </div>
              <Link to="/">
                <button className="border border-gray-400  rounded-md text-center font-medium w-full py-2 text-gray-400 text-lg mb-2 mt-1">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
