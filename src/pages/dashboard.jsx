import SideNavigation from '../components/navigation/navbar'
import Accounts from '../components/features/dashboard/accounts'
import TransactionTable from '../components/features/transactions/transactionTable';
import FinanceCharts from '../components/features/dashboard/financeChart';
import Goals from '../components/features/dashboard/goals';

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 ">
        <h1 className="uppercase font-bold">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white-500 px-10 ">
            <Accounts />
          </div>
          <div className="bg-white-500 px-10 max-w-2xl">
            <h1 className="uppercase font-bold">Financial Goals</h1>
            <Goals />
          </div>
          <div className="bg-white-500 px-10 max-w-md">
            <h1 className="uppercase font-bold">Transaction History</h1>
            <TransactionTable />
          </div>
          <div className="bg-white-500 px-10 max-w-md">
            <h1 className="uppercase font-bold">Spending Statistics</h1>
            <FinanceCharts />
          </div>
        </div>
      </div>
    </div>
  );
}