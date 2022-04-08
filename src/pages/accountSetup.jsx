import React, { useState } from "react";
import logo from "../assets/logo.png";
import AccountForm from "../components/forms/accountForm";
import { useForm } from "react-hook-form";

export default function AccountSetup() {
    
  return (
    <div className="bg-gray-100">
      <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        Registration Form - Account Setup
      </h1>
          <AccountForm/>
    </div>
  );
}
