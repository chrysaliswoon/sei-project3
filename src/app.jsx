import { BACKEND } from "../src/utils";
import React, { useState, useEffect } from "react";
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
import Update from "./pages/update";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState([]);
  const [transaction, setTransaction] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="register" element={<RegisterPage />} />
        {/* <Route
            path="dashboard"
            element={loggedIn ? <Dashboard /> : <LoginPage />}
          /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="success" element={<RegistrationSuccess />} />
        <Route path="form" element={<Finances />} />
        <Route path="update/:id" element={<Update />} />

        <Route
          path="transactions"
          element={
            <Transaction
            />
          }
        />
        <Route
          path="profile"
          element={<ProfilePage />}
        />
        <Route
          path="accounts"
          element={<AccountPage />}
        />
        <Route path="goals" element={<GoalsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
