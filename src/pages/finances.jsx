import React, { useState, useEffect } from "react";
import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";
import SideNavigation from "../components/navigation/navbar";

export default function () {
  const [account, setAccount] = useState([]);
  const [user, setUser] = useState("")
  
  const accountType = account.map((accounts, index) => (
    <option key={index} value={accounts}>{accounts}</option>
    ))
    
    const getData = () => {
    const URL = BACKEND + "user";
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAccount(data.accountName)
        setUser(data.name)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">New Transaction</h1>
        <p>
          Welcome back {user}, please select an account which the transaction was made and input the details. 
        </p>
        <div className="py-8">
          <TransactionForm account={accountType} />;
        </div>
      </div>
    </div>
  )
}

