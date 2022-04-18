import SideNavigation from "../components/navigation/navbar";
import TransactionTable from "../components/features/transactions/transactionTable";

export default function Transaction() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="uppercase font-bold">Financial Transactions</h1>
        <p>Have an overview of your financial transactions here</p>
        <div className="p-8 relative overflow-x-auto shadow-md sm:rounded-lg">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
