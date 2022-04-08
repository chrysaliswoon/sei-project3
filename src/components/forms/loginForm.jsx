import React from "react";
import loginImg from "../../assets/login.jpg";
import logo from "../../assets/logo.png";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Button from '../buttons/button'


export default function LoginForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-1g"
          id="login"
          method="get"
        >
          <img className="w-20 mx-auto pb-5" src={logo} alt="logo" />
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <UserCircleIcon className="h-5 w-5 text-gray-500" />
            <input
              className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <LockClosedIcon className="h-5 w-5 text-gray-500" />
            <input
              className="rounded-1g bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:gray-800 focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <a href="#">Forgot Password</a>
          </div>
          <Button css="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50" description="Sign In"/>
          <nav>
            <Link to="/register" className="flex flex-col text-gray-400 py-2">
              New? Register here
            </Link>
          </nav>
        </form>
      </div>
    </div>
  );
}
