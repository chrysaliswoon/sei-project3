import SideNavigation from '../components/navigation/navbar'
import Accounts from '../components/features/dashboard/accounts'
import TransactionTable from '../components/features/transactions/transactionTable';

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className=" p-4 m-8">
        <h1 className="uppercase font-bold">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-500 px-10">
            <Accounts />
          </div>
          <div className="bg-slate-500 px-10">
            <p>Goals Carousel</p>
          </div>
          <div className="bg-slate-500 px-10">
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
