import React, { useState, useEffect } from "react";
import UpdateForm from "../components/forms/updateForm";
import SideNavigation from "../components/navigation/navbar";

export default function Update() {
  const [account, setAccount] = useState([]);
  const [user, setUser] = useState("")
  
  const accountType = account.map((accounts, index) => (
    <option key={index} value={accounts}>{accounts}</option>
    ))


  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">Update Transaction</h1>
        <p>
          Welcome back {user}, please select an account which the transaction was made and input the details. 
        </p>
        <div className="py-8">
          <UpdateForm account={accountType} />;
        </div>
      </div>
    </div>
  )
}

