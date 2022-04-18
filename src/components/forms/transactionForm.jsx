import Button from "../buttons/button";
import { BACKEND } from "../../utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function TransactionForm({ account }) {
  let navigate = useNavigate()

    const accountName = account.map((accounts, index) => (
      <option key={index} value={accounts.account}>{accounts.account}</option>
    ));
  
  const {
    register,
    formState: { errors },
  } = useForm();

  
  const handleSubmit = (event) => {
    event.preventDefault()
    const date = event.target.date.value
    const account = event.target.account.value;
    const amount = event.target.amount.value
    const recipient = event.target.recipient.value
    const transactionDetails = event.target.transaction.value
    const newTransaction = {
      date: date,
      account: account,
      amount: amount,
      recipient: recipient,
      transactionDetails: transactionDetails,
    }

    const URL = BACKEND + "transactions/new";
    console.log(URL)

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        navigate("/transactions")
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };


  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date of Transaction: </label>
          <input
            type="date"
            name="date"
            id="date"
            {...register("date", {
              required: true,
            })}
          />
          {errors?.date?.type === "required" && <p>This field is required</p>}
        </div>
        <div>
          <label htmlFor="account">Account: </label>
          <select>{accountName}</select>
        </div>
        <div>
          <label htmlFor="amount">Amount: $</label>
          <input type="number" name="amount" id="amount" />
        </div>
        <div>
          <label htmlFor="recipient">Recipient (if applicable): </label>
          <input type="text" name="recipient" id="recipient" />
        </div>
        <div>
          <label htmlFor="transaction">Transaction Details: </label>
          <input type="text" name="transaction" id="transaction" />
        </div>
        <Button
          css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
          type="submit"
          name="submit"
          id="submit"
          description="Submit"
        />
      </form>
    </div>
  )
}
