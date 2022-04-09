import React, {useState} from "react";
import logo from "../assets/logo.png";
import RegisterForm from "../components/forms/registerForm";
import AccountForm from "../components/forms/accountForm";

export default function RegisterPage() {
  const [profile, setProfile] = useState();
  // console.log(profile)


  return (
    <div className="bg-gray-100">
      <div className="User Profile">
        <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
        <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
          Registration Form - User Profile
        </h1>
        <RegisterForm user={setProfile}/>
      </div>

      <div className="Account Setup">
        <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
        <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
          Registration Form - Account Setup
        </h1>
        <AccountForm />
      </div>
    </div>
  );
}
