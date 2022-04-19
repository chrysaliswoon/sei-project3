import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//? Import Pages
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import RegistrationSuccess from "./pages/sucess";
import Transaction from "./pages/transactions";
import Finances from "./pages/finances";
import ProfilePage from "./pages/profile";
import AccountPage from "./pages/accounts";
import GoalsPage from "./pages/goals";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="dashboard"
            element={loggedIn ? <Dashboard /> : <Dashboard />}
          />
          <Route path="success" element={<RegistrationSuccess />} />
          <Route path="form" element={<Finances />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="accounts" element={<AccountPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
};
