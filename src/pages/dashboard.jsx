import SideNavigation from "../components/navigation/navbar";
import Accounts from "../components/features/dashboard/accounts";
import TransactionTable from "../components/features/transactions/transactionTable";
import FinanceCharts from "../components/features/dashboard/financeChart";
import Goals from "../components/features/dashboard/goals";

export default function Dashboard({ user }) {
  return (
    <div className="flex bg-gray-100 ">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">Financial Dashboard</h1>
        <p>Welcome back {user}! Here's a breakdown of this month's finances.</p>
        <div className="items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-5">
            {/* <div class="bg-white-500  p-10 ">
              <Accounts />
            </div> */}
            <div className="bg-white-500  p-10 max-w-full">
              <h1 className="uppercase font-bold">Financial Goals</h1>
              <Goals />
            </div>
            <div className="bg-white-500  p-10 max-w-sm">
              <h1 className="uppercase font-bold">Spending Statistics</h1>
              <FinanceCharts />
            </div>
            <div className="bg-white-500  p-10 max-w-md">
              <h1 className="uppercase font-bold">Transaction History</h1>
              <TransactionTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
