//? Uses Wizard Form / Funnel (a state management  library) to store user input through different pages or sections. 
import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import RegisterForm from '../components/forms/registerForm'

export default function RegisterPage() {

    return (
        <div className="bg-gray-100" >
            <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-10">Registration Form</h1>
            <RegisterForm/>
        </div>
    )
}