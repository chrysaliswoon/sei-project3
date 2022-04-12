import React, { useState } from "react";
import logo from "../assets/logo.png";
import RegisterForm from "../components/forms/registerForm";
import AccountForm from "../components/forms/accountForm";
import Button from "../components/buttons/button"

export default function RegisterPage() {
  const [registerStage, setRegisterStage] = useState(0);
  const [profile, setProfile] = useState({});
  const addToProfile = data => {
    setProfile({...profile, ...data})
  }

    // const onSubmit = async (data) => {
    //   const URL = BACKEND + "new/register";
    //   fetch(URL, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   profile(data);
    //   // reset(event);
    // };


  return (
    <div className="bg-gray-100">
      {registerStage === 0 ? (
        <div className="User Profile">
          <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
          <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
            Registration Form - User Profile
          </h1>
          <RegisterForm
            profile={addToProfile}
            nextStage={() => setRegisterStage((page) => page + 1)}
          />
        </div>
      ) : (
        <div className="Account Setup">
          <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
          <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
            Registration Form - Account Setup
          </h1>
            <AccountForm profile={profile} />
            
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


