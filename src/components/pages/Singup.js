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
    <div className="bg w-full h-screen mx-auto container block sm:hidden">
      <div className="h-60 w-full px-5">
        <h1 className="capitalize text-white font-medium w-16 text-3xl py-20">
          create account
        </h1>
      </div>
      <div className="relative">
        <img src="/images/wave.svg" alt="" />
        <div className="h-screen w-full bg-[#ffffff] absolute top-20 px-5">
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
                      <AiFillEyeInvisible size={22} />
                    ) : (
                      <AiFillEye size={22} color="#808080" />
                    )}
                  </span>
                </div>
                <ErrorMessage name="password">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
                <button
                  className="border border-blue-700 bg-blue-500 rounded-md text-center font-medium w-full py-3 text-white text-lg mt-3"
                  type="submit"
                  disabled={Object.keys(errors).length !== 0}
                >
                  Sign up
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex items-center w-full my-4">
            <p className="w-[46%] h-[3px] bg-gray-300 mt-1"></p>
            <p className="px-3 text-gray-400 font-bold text-lg">or</p>
            <p className="w-[46%] h-[3px] bg-gray-300  mt-1"></p>
          </div>
          <Link to="/login">
            <button className="border border-gray-400  rounded-md text-center font-medium w-full py-3 text-gray-400 text-lg mt-1">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singup;
