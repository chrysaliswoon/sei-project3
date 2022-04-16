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


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
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
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
};
