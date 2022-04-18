import React, { useState } from "react";
import Cards from "../dashboard/cardsOverview";
import data from "../../../testData/cards"

export default function Accounts() {
  const [balance, setBalance] = useState(data[0])
  const handleClick = (dataID) => setBalance(dataID)
  console.log(balance)
  console.log(handleClick)
  
  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <div>
        <h1 className="uppercase font-bold">Accounts</h1>
        <Cards />
      </div>
      <div>
        <h3>{balance.accountBalance}</h3>
        <p>Current balance</p>
        <h3>$1,430</h3>
        <p>Income</p>
        <h3>$1,430</h3>
        <p>Expenses</p>
      </div>
    </div>
  );
}
