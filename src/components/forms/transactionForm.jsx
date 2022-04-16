import Button from "../buttons/button";
import { BACKEND } from "../../utils";
import { useForm } from "react-hook-form";

export default function TransactionForm({ account }) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const URL = BACKEND + "";

  const onSubmit = async (event) => {
        const data = { ...data };
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
      .then((onSubmit) => onSubmit.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };


  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form>
        {/* <Button
          css="bg-pink-500 font-bold py-2 px-4 border-b-4 rounded-full"
          type="submit"
          name="expenseSubmit"
          id="expenseSubmit"
          description="Expense"
        />
        <Button
          css="bg-green-500 font-bold py-2 px-4 border-b-4 rounded-full"
          type="submit"
          name="incomeSubmit"
          id="incomeSubmit"
          description="Income"
        /> */}
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
          <select>{account}</select>
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
  );
}
