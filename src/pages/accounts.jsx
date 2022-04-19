import SideNavigation from "../components/navigation/navbar";

export default function AccountPage({user, account}) {
  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="uppercase font-bold">Account Page</h1>
        <div>
          <p>
            Welcome to the Accounts Page {user}! Here's an overview of all of your
            accounts
          </p>
        </div>
        <div>
          {account}
        </div>
      </div>
    </div>
  );
}
