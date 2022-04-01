//? The login form is created using the React Hook Form

import style from '../../stylesheet/loginForm.module.css'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
    return (
        <div className={style.loginForm}>
      <form id="login" method="get">
            <input type="email" name="email" id="email" placeholder="Email Address"></input>
            <input type="password" name="password" id="password" placeholder="Password"></input>
            <input type="submit"></input>
      </form>
        </div>
    );
}
