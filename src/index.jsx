import "tailwindcss/tailwind.css";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from "./unitTest/reportWebVitals";
//? Import Pages
import LoginPage from "./pages/login";
import RegisterPage from './pages/register'
// import AccountSetup from './pages/accountSetup'
// import AccountDetails from "./pages/accountDetails";
import Dashboard from './pages/dashboard'
import Error from "./pages/error";

//? New version of React
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
