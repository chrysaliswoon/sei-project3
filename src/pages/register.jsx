import React from 'react';
import RegisterForm from '../components/forms/registerForm'
import logo from '../assets/logo.png'


export default function RegisterPage() {

    return (
      <div className="bg-gray-100">
        <img className="w-20 mx-auto pt-10" src={logo} alt="logo" />
        <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
          Registration Form
        </h1>
        <RegisterForm />
      </div>
    );
}