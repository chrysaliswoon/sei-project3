import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./pages/login";
import RegisterPage from './pages/register'
import Dashboard from './pages/dashboard'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from "./unitTest/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
