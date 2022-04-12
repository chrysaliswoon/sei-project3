import SideNavigation from '../components/navigation/navbar'
import Button from '../components/buttons/button'

export default function Dashboard() {
  return (
    <div>
      <div className="">
        <h1 className="">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
      </div>
      <div className="">
        <SideNavigation />
        <Button
          css="overflow-y-auto py-3 px-10 my-10 py-6 ml-5 bg-teal-500 shadow-lg shadow-teal-500/50 rounded-md"
          description="New Transaction"
        />
      </div>
    </div>
  );
}
