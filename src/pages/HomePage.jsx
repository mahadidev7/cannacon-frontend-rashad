import React from "react";

function HomePage() {
  return (
    <div className="h-screen w-screen homePageBody relative">
      <div className="Container-md m-auto">
        <div className="md:flex justify-between h-screen">
          <div className="md:w-1/2 sm:w-full p-4 flex justify-center items-center">
            <div className="loginForm w-[385px] mt-20 md:mt-0 py-12 border-2 border-gray-400 px-9 rounded-lg">
              <h1 className="text-2xl text-center">Login your account</h1>
              <form className="flex flex-col my-4">
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="my-4 bg-transparent border-b border-[#129637] text-black p-2"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="my-4 bg-transparent border-b border-[#129637] text-black p-2"
                />
                <button type="submit" className="desktop_Submit">Login</button>
              </form>

              <div className="flex flex-col text-center gap-5">
                <a href="#" className=" font-semibold">Create Account</a>
                <a
                  href="#"
                  className="mt-9 font-semibold border-b-2 border-[#129637] w-fit text-center mx-auto"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcomeBack">
        <p className="!text-white">Welcome back</p>
      </div>
      <div className="logo">
        <img src="https://i.ibb.co/sbK6xdC/logo.png" alt="logo" />
      </div>
    </div>
  );
  
}

export default HomePage;
