import RegisterForm from '../components/forms/registerForm'
import { useState } from 'react';

export default function RegisterPage() {
    const [users, setUsers] = useState([])

    return (
        <div className="bg-gray-100" >
            <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-10">Registration Form</h1>
            <RegisterForm/>
        </div>
    )
}