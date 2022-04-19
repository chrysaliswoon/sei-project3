
export default function TransactionTable({ transactionSummary }) {
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
