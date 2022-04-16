import React, { useState } from "react";
import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";

export default function () {
  const URL = BACKEND + "/transactions";
  const [account, setAccount] = useState([]);
  

  const getData = async (response) => {
    const data = { ...account, ...response };
    console.log(data);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((getData) => getData.json())
      .then((data) => {
        console.log("Success", data); // Change this into a success page or pop-up
        setAccount(getData)
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    return getData.json(); // parses JSON response into native JS objects
  };
  
  console.log(account)

  return (
    <div className="bg-gray-100">
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        New Transaction
      </h1>
      <TransactionForm account={account}/>
    </div>
  );
}
