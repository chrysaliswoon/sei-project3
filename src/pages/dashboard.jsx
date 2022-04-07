import SideNavigation from '../components/navigation/navbar'

export default function Dashboard() {
  return (
    <div>
      <div className="">
        <h1 className="">Financial Dashboard</h1>
        <p>Get an overview of your financial transactions here</p>
      </div>
      <div className="">
          <SideNavigation />
      </div>
    </div>
  );
}
