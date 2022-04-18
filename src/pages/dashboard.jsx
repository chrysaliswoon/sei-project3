import SideNavigation from '../components/navigation/navbar'
import Accounts from '../components/features/dashboard/accounts'

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="uppercase font-bold">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
        <div className="bg-slate-500 px-10">
          <Accounts />
        </div>
      </div>
    </div>
  );
}
