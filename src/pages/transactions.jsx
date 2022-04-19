import SideNavigation from "../components/navigation/navbar";
import TransactionTable from "../components/features/transactions/transactionTable";
import FilterNav from "../components/features/transactions/filter";
import Button from "../components/buttons/button";

export default function Transaction({ user, account, transaction, date, amount }) {
  const button = (
    <Button
      css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
      description="All"
    />
  );
    const button2 = (
      <Button
        css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
        description="Income"
      />
    );
    const button3 = (
      <Button
        css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
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
          <TransactionTable date={date} account={account} transaction={transaction} amount={amount}/>
        </div>
      </div>
    </div>
  );
}
