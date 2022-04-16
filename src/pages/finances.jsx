import React, { useState } from "react";
import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";

export default function () {
  const URL = BACKEND + "/transactions";
  const [account, setAccount] = useState([]);
  // console.log(account[0].account);

  const accountData = () => {
    // console.log(accountData);

    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setAccount({
          account: data,
        })
      );
  };

  // const accountList = ["test1", "test2"];



  return (
    <div className="bg-gray-100">
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        New Transaction
      </h1>
      <TransactionForm account={account}/>
    </div>
  );
}
