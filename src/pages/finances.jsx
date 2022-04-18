import React, { useState, useEffect } from "react";
import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";
import SideNavigation from "../components/navigation/navbar";

export default function () {
  const URL = BACKEND + "transactions";
  const [account, setAccount] = useState([]);

  const username = account.map((accounts, index) => (
    <p key={index} value={accounts.name}>{accounts.name}</p>
  ));

  const getData = () => {
    fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setAccount(data));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(account);

  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">New Transaction</h1>
        <p>
          Hi {username}, please select an account which the transaction was made
        </p>
        <div className="py-8">
          <TransactionForm account={account} />;
        </div>
      </div>
    </div>
  );
}

