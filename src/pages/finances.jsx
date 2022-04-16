import { BACKEND } from "../utils";
import TransactionForm from "../components/forms/transactionForm";

export default function () {
  const URL = BACKEND + "/transactions";

  const accountData = async (event) => {
    const data = { ...data };
    fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((loadData) => loadData.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  console.log(accountData);

  const accountList = ["test1", "test2"];

  const accountName = accountList.map((account) => (
    <option value={account}>{account}</option>
  ));

  return (
    <div className="bg-gray-100">
      <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
        New Transaction
      </h1>
      <TransactionForm account={accountName} />
    </div>
  );
}
