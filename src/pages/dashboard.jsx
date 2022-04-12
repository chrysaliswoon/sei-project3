import SideNavigation from '../components/navigation/navbar'
import Button from '../components/buttons/button'

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
        <Button
          css="overflow-y-auto py-3 px-10 my-10 py-6 ml-5 bg-teal-500 shadow-lg shadow-teal-500/50 rounded-md"
          description="New Transaction"
        />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
      </div>
    </div>
  );
}
