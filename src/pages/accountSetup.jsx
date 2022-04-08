import React, { useState } from "react";
import logo from "../assets/logo.png";
import AccountForm from "../components/forms/accountForm";
import { useForm } from "react-hook-form";
import Button from '../components/buttons/button'

export default function AccountSetup() {
  
  return (
    <div className="bg-gray-100">
      <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        Registration Form - Account Setup
      </h1>
      <div className="bg-gray-100 mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
          <AccountForm/>
          <div>
            <Button
              css="md:w-0.9 bg-gray-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-300 hover:border-gray-100 rounded-full"
              type="button"
              name="newAccount"
              id="newAccount"
              description="Add another account"
            />
          </div>
      </div>
    </div>
  );
}
