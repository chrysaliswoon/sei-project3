import {BACKEND} from "../../../utils"
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function TransactionTable() {
  const [table, setTable] = useState([]);
  const FormUpdate = withReactContent(Swal)

  let date = "2022-04-20T00:00:00.000Z";
  let json = JSON.stringify(date);
  let dateStr = JSON.parse(json);
  let newDate = new Date(dateStr);
  // console.log(newDate)
  // const handleSubmit = id => event => {

  const getTransactionData = () => {
    const URL = BACKEND + "transactions";
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
        // console.log(data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  const handleDelete = (id, event) => {
    event.preventDefault();
    fetch(BACKEND + "transactions/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

    }).then((response) => {
      console.log(response);
      setTable(table.filter((transaction) => transaction._id !== id));
      console.log(table);
    });
  };

  const handleUpdate = (id, date, amount, tDetails, event) => {
    event.preventDefault();
    FormUpdate.fire({
      title: `Update ${id}`,
      html: `
      <input type="date" id="date" class="swal2-input" placeholder="Date" value="${date}">
      <input type="number" id="amount" class="swal2-input" placeholder="Amount" value="${amount}">
      <input type="text" id="recipient" class="swal2-input" placeholder="Recipient (if applicable)" value="">
      <input type="text" id="transaction" class="swal2-input" placeholder="Transaction Details" value=${tDetails}>
      `,
      confirmButtonText: 'Update',
      focusConfirm: false,
      // preConfirm: () => {
      //   const login = Swal.getPopup().querySelector('#login').value
      //   const password = Swal.getPopup().querySelector('#password').value
      //   if (!login || !password) {
      //     Swal.showValidationMessage(`Please enter login and password`)
      //   }
      //   return { login: login, password: password }
      // }
    })
    // .then((result) => {
    //   console.log(result)
    //   FormUpdate.fire(`
    //   Date: ${result.value.date}
    //   Amount: ${result.value.amount}
    //   Recipient: ${result.value.recipient}
    //   Transaction: ${result.value.transaction}
    //   `.trim())
    //   console.log(result)
    // })
    fetch(BACKEND + "transactions/" + id, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data)
    })
    .catch((error) => {
      console.log("Error:", error)
    })
  }
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
      <td className="px-6 py-4">{data.recipientName}</td>
      <td className="px-6 py-4">$ {data.amount}</td>
      <td className="px-6 py-4 text-right">
        <button
          // id={data._id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          // onClick={handleSubmit(data._id)}
          onClick={(event) => handleUpdate(data._id, data.date, data.amount, data.tDetails, event)} // Calling handlesubmit with two parameters (id, event)
        >
          Update
        </button>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          // id={data._id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          // onClick={handleSubmit(data._id)}
          onClick={(event) => handleDelete(data._id, event)} // Calling handlesubmit with two parameters (id, event)
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Account
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Sender
          </th>
          <th scope="col" className="px-6 py-3">
            Recipient
          </th>
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>{transactionSummary}</tbody>
    </table>
  );
}
