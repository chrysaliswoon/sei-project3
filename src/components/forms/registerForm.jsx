import React from "react";

export default function RegisterForm() {
  return (
    <div>
      <form>
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="name"
          >
            Full Name
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="text"
            name="name"
            id="name"
          ></input>
        </div>
        <div>
          <label className="md:w-1/2 px-3" for="email">
            Email Address
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="email"
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label className for="email">
            Confirm Email Address
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="email"
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label className for="username">
            Username
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="username"
            name="text"
            id="username"
          ></input>
        </div>
        <div>
          <label className for="password">
            Password
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="password"
            name="password"
            id="password"
          ></input>
        </div>
        <div>
          <label className for="password">
            Confirm Password
          </label>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="password"
            name="password"
            id="password"
          ></input>
        </div>
        <div>
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            type="submit"
            name="submit"
            id="submit"
          ></input>
        </div>
      </form>
    </div>
  );
}
