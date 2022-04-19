export default function TransactionTable({
  account,
  transaction,
  date,
  amount,
}) {
  const data = [
    {
      id: 1,
      date: "05 April 2022",
      account: "DB Multiplier Account",
      transaction: "salary from tutoring",
      category: "Income",
      amount: 2000,
    },
    {
      id: 2,
      date: "14 April 2022",
      account: "DBS Altitude",
      transaction: "dinner for family",
      category: "Expense",
      amount: 40.5,
    },
    {
      id: 3,
      date: "09 April 2022",
      account: "DBS Altitude",
      transaction: "Kibbles for dog",
      category: "Expense",
      amount: 165,
    },
    {
      id: 4,
      date: "23 April 2022",
      account: "DBS Altitude",
      transaction: "Bubble tea",
      category: "Expense",
      amount: 3.4,
    },
  ];

  const transactionSummary = data.map((data, index) => (
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
      <td className="px-6 py-4">{data.account}</td>
      <td className="px-6 py-4">{data.transaction}</td>
      <td className="px-6 py-4">{data.category}</td>
      <td className="px-6 py-4">$ {data.amount}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </a>
      </td>
    </tr>
  ));

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
