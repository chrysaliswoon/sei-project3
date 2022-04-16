import React, { useState, useEffect } from "react";
import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";

export default function () {
  const URL = BACKEND + "/transactions";
  const [account, setAccount] = useState([]);

  const getData = () => {
    fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
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
    <div className="bg-gray-100">
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        New Transaction
      </h1>
      <TransactionForm account={account} />
    </div>
  );
}
