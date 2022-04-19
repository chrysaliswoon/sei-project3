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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState([]);
  const [transaction, setTransaction] = useState("test description");
  const [date, setDate] = useState("test date");
  const [amount, setAmount] = useState("test amount");

  const getData = () => {
    const URL = BACKEND + "transactions";
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.name);
        setEmail(data.email);
        setAccount(data.accountName);
        setTransaction(data.transaction);
        setAmount(data.amount);
        setDate(data.date);
        console.log(data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="register" element={<RegisterPage />} />
        {/* <Route
            path="dashboard"
            element={loggedIn ? <Dashboard /> : <LoginPage />}
          /> */}
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="success" element={<RegistrationSuccess />} />
        <Route path="form" element={<Finances />} />
        <Route
          path="transactions"
          element={
            <Transaction
              user={user}
              date={date}
              account={account}
              transaction={transaction}
              amount={amount}
            />
          }
        />
        <Route
          path="profile"
          element={<ProfilePage user={user} email={email} />}
        />
        <Route
          path="accounts"
          element={<AccountPage user={user} account={account} />}
        />
        <Route path="goals" element={<GoalsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
