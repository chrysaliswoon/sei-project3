import SideNavigation from "../components/navigation/navbar";
import TransactionTable from "../components/features/transactions/transactionTable";
import FilterNav from "../components/features/transactions/filter";
import Button from "../components/buttons/button";
import { BACKEND } from "../utils";
import React, { useEffect, useState } from "react";


export default function Transaction({
  user,
  table,
}) {
  
  const [deleteId, setDeleteId] = useState("")

  // const handleSubmit = id => event => {
  const handleSubmit = (id, event) => {
    event.preventDefault();
    // console.log(id);
    setDeleteId(id)
  };

  const deleteDataById = () => {
      const URL = BACKEND + `transactions/${deleteId}`;
      console.log(URL)
      fetch(URL, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          deleteDataById();
        })
        .catch((err) => console.log(err));
    };

    // useEffect(() => {
    //   deleteDataById();
    // }, []);

  const transactionSummary = table.map((data, index) => (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={index}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {data.date}
      </th>
      <td className="px-6 py-4">{data.accountName}</td>
      <td className="px-6 py-4">{data.tDetails}</td>
      <td className="px-6 py-4">{data.tCategory}</td>
      <td className="px-6 py-4">{data.sender}</td>
      <td className="px-6 py-4">{data.recipeintName}</td>
      <td className="px-6 py-4">$ {data.amount}</td>
      <td className="px-6 py-4 text-right">
        <button
          // id={data._id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          // onClick={handleSubmit(data._id)}
          onClick={(event) => handleSubmit(data._id, event)} // Calling handlesubmit with two parameters (id, event)
        >
          Update
        </button>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          // id={data._id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          // onClick={handleSubmit(data._id)}
          onClick={(event) => handleSubmit(data._id, event)} // Calling handlesubmit with two parameters (id, event)
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  const button = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterAll"
      description="All"
    />
  );
  const button2 = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterIncome"
      description="Income"
    />
  );
  const button3 = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterExpense"
      description="Expense"
    />
  );

  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">{user} Transactions</h1>
        <p>Have an overview of your financial transactions</p>
        <div className="py-5">
          <FilterNav button={button} button2={button2} button3={button3} />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TransactionTable transactionSummary={transactionSummary} />
        </div>
      </div>
    </div>
  );
}
