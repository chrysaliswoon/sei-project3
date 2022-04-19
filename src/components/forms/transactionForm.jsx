import Button from "../buttons/button";
import { BACKEND } from "../../utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function TransactionForm({ account }) {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
    const URL = BACKEND + "transactions/new";
    const newTransaction = { account, ...event };
    console.log(newTransaction);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        navigate("/transactions");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-10 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="my-5">
          <label htmlFor="account">Account: </label>
          <select {...register("account")}>{account}</select>
        </div>
        <div className="my-5">
          <label htmlFor="amount">Amount: $</label>
          <input
            type="number"
            step="any"
            name="amount"
            id="amount"
            {...register("amount", {
              required: true,
            })}
          />
        </div>
        <div className="my-5">
          <label htmlFor="recipient">Recipient (if applicable): </label>
          <input
            type="text"
            name="recipient"
            id="recipient"
            {...register("recipient")}
          />
        </div>
        <div className="my-5">
          <label htmlFor="transaction">Transaction Details: </label>
          <input
            type="text"
            name="transaction"
            id="transaction"
            {...register("transaction", {
              required: true,
            })}
          />
        </div>
        <div className="my-5">
          <p>Transaction Category</p>
          <input
            type="radio"
            id="income"
            name="category"
            value="Income"
            {...register("category")}
          />
          <label htmlFor="Income"> Income</label>
          {"  "}
          <input
            type="radio"
            id="expense"
            name="category"
            value="Expense"
            {...register("category")}
          />
          <label htmlFor="Expense"> Expense</label>
        </div>
        <Button
          css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 my-5 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
          type="submit"
          name="submit"
          id="submit"
          description="Submit"
        />
      </form>
    </div>
  );
}
