//? Uses Wizard Form / Funnel (a state management  library) to store user input through different pages or sections.
import React from "react";
import logo from "../assets/logo.png";
import AccountForm from "../components/forms/accountForm";

export default function AccountSetup() {
    
  return (
    <div className="bg-gray-100">
      <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        Registration Form - Account Setup
      </h1>
      <AccountForm />
      <button
        className="md:w-0.9 bg-gray-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-300 hover:border-gray-100 rounded-full"
        type="button"
        name="newAccount"
        id="newAccount"
      >
        Add another account
      </button>
      <button
        className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
        type="submit"
        name="submit"
        id="submit"
      >
        Submit
      </button>
    </div>
  );
}
