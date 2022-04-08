//? Uses Wizard Form / Funnel (a state management  library) to store user input through different pages or sections.
import React from "react";
import logo from "../assets/logo.png";

export default function AccountDetails() {
    return (
      <div className="bg-gray-100">
        <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
        <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
          Registration Form - Account Details
        </h1>
      </div>
    );
}
